import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

class PushNotificationService {
  static const String defaultBaseUrl = 'http://10.0.2.2:4000/api';

  final String baseUrl;
  String? _fcmToken;

  PushNotificationService({this.baseUrl = defaultBaseUrl});

  String? get fcmToken => _fcmToken;

  Future<void> initializeFCM(String userId, String jwtToken) async {
    // Generate simulated FCM token for cross-platform device registration
    _fcmToken = 'fcm_seafu_${userId.substring(0, 8)}_${DateTime.now().millisecondsSinceEpoch}';

    try {
      final response = await http.post(
        Uri.parse('$baseUrl/notifications/register-device'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $jwtToken',
        },
        body: jsonEncode({
          'deviceToken': _fcmToken,
          'platform': defaultTargetPlatform == TargetPlatform.iOS ? 'IOS' : 'ANDROID',
        }),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        debugPrint('[FCM] Device token successfully registered with Seafu API: $_fcmToken');
      }
    } catch (e) {
      debugPrint('[FCM] Error registering token: $e');
    }
  }
}