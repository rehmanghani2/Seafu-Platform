class CourseModel {
  final String id;
  final String title;
  final String code;
  final String category;
  final String instituteName;
  final String city;
  final int durationDays;
  final double basePrice;
  final bool isDgApproved;
  final String nextBatchDate;
  final int availableSeats;

  CourseModel({
    required this.id,
    required this.title,
    required this.code,
    required this.category,
    required this.instituteName,
    required this.city,
    required this.durationDays,
    required this.basePrice,
    required this.isDgApproved,
    required this.nextBatchDate,
    required this.availableSeats,
  });

  factory CourseModel.fromJson(Map<String, dynamic> json) {
    return CourseModel(
      id: json['id'] as String,
      title: json['title'] as String,
      code: json['code'] as String,
      category: json['category'] as String,
      instituteName: json['institute']?['name'] ?? 'Maritime Academy',
      city: json['institute']?['city'] ?? 'Mumbai',
      durationDays: (json['durationDays'] as num?)?.toInt() ?? 3,
      basePrice: (json['basePrice'] as num?)?.toDouble() ?? 5000.0,
      isDgApproved: json['isDgApproved'] as bool? ?? true,
      nextBatchDate: json['batches'] != null && (json['batches'] as List).isNotEmpty
          ? json['batches'][0]['startDate']
          : '2026-09-22',
      availableSeats: json['batches'] != null && (json['batches'] as List).isNotEmpty
          ? json['batches'][0]['availableSeats']
          : 12,
    );
  }
}