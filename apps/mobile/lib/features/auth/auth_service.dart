import 'dart:convert';
import 'package:http/http.dart' as http;
import 'user_model.dart';

class AuthService {
  static const String defaultBaseUrl = 'http://10.0.2.2:4000/api'; // Android emulator localhost

  final String baseUrl;
  String? _accessToken;
  UserModel? _currentUser;

  AuthService({this.baseUrl = defaultBaseUrl});

  UserModel? get currentUser => _currentUser;
  bool get isAuthenticated => _accessToken != null;

  Future<UserModel> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      _accessToken = data['tokens']['accessToken'];
      _currentUser = UserModel.fromJson(data['user']);
      return _currentUser!;
    } else {
      final error = jsonDecode(response.body);
      throw Exception(error['message'] ?? 'Login failed');
    }
  }

  void logout() {
    _accessToken = null;
    _currentUser = null;
  }
}
