class DocumentModel {
  final String id;
  final String type;
  final String documentNumber;
  final String fileName;
  final String issueDate;
  final String expiryDate;
  final String verificationStatus;
  final String fileUrl;

  DocumentModel({
    required this.id,
    required this.type,
    required this.documentNumber,
    required this.fileName,
    required this.issueDate,
    required this.expiryDate,
    required this.verificationStatus,
    required this.fileUrl,
  });

  factory DocumentModel.fromJson(Map<String, dynamic> json) {
    return DocumentModel(
      id: json['id'] as String,
      type: json['type'] as String,
      documentNumber: json['documentNumber'] as String? ?? 'N/A',
      fileName: json['fileName'] as String,
      issueDate: json['issueDate'] as String? ?? '2022-01-01',
      expiryDate: json['expiryDate'] as String? ?? '2032-01-01',
      verificationStatus: json['verificationStatus'] as String? ?? 'VERIFIED',
      fileUrl: json['fileUrl'] as String,
    );
  }
}