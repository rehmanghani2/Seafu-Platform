class UserModel {
  final String id;
  final String email;
  final String fullName;
  final String role;
  final String? indosNumber;
  final String? cdcNumber;
  final String? rank;

  UserModel({
    required this.id,
    required this.email,
    required this.fullName,
    required this.role,
    this.indosNumber,
    this.cdcNumber,
    this.rank,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] as String,
      email: json['email'] as String,
      fullName: json['fullName'] as String,
      role: json['role'] as String,
      indosNumber: json['indosNumber'] as String?,
      cdcNumber: json['cdcNumber'] as String?,
      rank: json['rank'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'fullName': fullName,
      'role': role,
      'indosNumber': indosNumber,
      'cdcNumber': cdcNumber,
      'rank': rank,
    };
  }
}
