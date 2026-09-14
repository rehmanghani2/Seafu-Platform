class BookingModel {
  final String id;
  final String bookingReference;
  final String courseTitle;
  final String instituteName;
  final String batchDates;
  final double amount;
  final String status;
  final String studentInvoiceUrl;
  final String instituteInvoiceUrl;

  BookingModel({
    required this.id,
    required this.bookingReference,
    required this.courseTitle,
    required this.instituteName,
    required this.batchDates,
    required this.amount,
    required this.status,
    required this.studentInvoiceUrl,
    required this.instituteInvoiceUrl,
  });

  factory BookingModel.fromJson(Map<String, dynamic> json) {
    return BookingModel(
      id: json['id'] as String,
      bookingReference: json['bookingReference'] as String,
      courseTitle: json['course']?['title'] ?? 'STCW Course',
      instituteName: json['course']?['institute']?['name'] ?? 'Maritime Academy',
      batchDates: json['batch'] != null
          ? '${json['batch']['startDate']} - ${json['batch']['endDate']}'
          : '22 Nov - 26 Nov 2026',
      amount: (json['amount'] as num?)?.toDouble() ?? 8500.0,
      status: json['status'] as String? ?? 'CONFIRMED',
      studentInvoiceUrl: json['studentInvoiceUrl'] as String? ?? '',
      instituteInvoiceUrl: json['instituteInvoiceUrl'] as String? ?? '',
    );
  }
}