import 'package:flutter/material.dart';
import 'booking_model.dart';

class BookingsScreen extends StatefulWidget {
  const BookingsScreen({super.key});

  @override
  State<BookingsScreen> createState() => _BookingsScreenState();
}

class _BookingsScreenState extends State<BookingsScreen> {
  String _selectedTab = 'Active';

  final List<BookingModel> _bookings = [
    BookingModel(
      id: 'bk-01',
      bookingReference: 'SEA-BK-92841-8842',
      courseTitle: 'Advanced Fire Fighting (AFF) - Refresher',
      instituteName: 'Anglo-Eastern Maritime Academy',
      batchDates: '22 Nov - 26 Nov 2026',
      amount: 8500.0,
      status: 'CONFIRMED',
      studentInvoiceUrl: '/invoices/candidate/INV-CAND-92841.pdf',
      instituteInvoiceUrl: '/invoices/institute/INV-INST-92841.pdf',
    ),
    BookingModel(
      id: 'bk-02',
      bookingReference: 'SEA-BK-41028-1194',
      courseTitle: 'Personal Survival Techniques (PST)',
      instituteName: 'Samundra Institute of Maritime Studies',
      batchDates: '14 Oct - 16 Oct 2026',
      amount: 4500.0,
      status: 'COMPLETED',
      studentInvoiceUrl: '/invoices/candidate/INV-CAND-41028.pdf',
      instituteInvoiceUrl: '/invoices/institute/INV-INST-41028.pdf',
    ),
    BookingModel(
      id: 'bk-03',
      bookingReference: 'SEA-BK-77142-3021',
      courseTitle: 'ECDIS Electronic Navigation Simulation',
      instituteName: 'Maritime Training Academy Mumbai',
      batchDates: '05 Dec - 09 Dec 2026',
      amount: 12500.0,
      status: 'ESCROW_HELD',
      studentInvoiceUrl: '/invoices/candidate/INV-CAND-77142.pdf',
      instituteInvoiceUrl: '/invoices/institute/INV-INST-77142.pdf',
    ),
  ];

  void _showGatePass(BookingModel booking) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: const Color(0xFF0C1628),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
            side: const BorderSide(color: Color(0xFF00E5FF), width: 1.5),
          ),
          title: const Row(
            children: [
              Icon(Icons.badge_outlined, color: Color(0xFF00E5FF)),
              SizedBox(width: 8),
              Text(
                'Campus Admission Gate Pass',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
              ),
            ],
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 170,
                height: 170,
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Center(
                  child: Icon(Icons.qr_code_2, size: 140, color: Color(0xFF070D18)),
                ),
              ),
              const SizedBox(height: 14),
              Text(
                booking.bookingReference,
                style: const TextStyle(fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF00E5FF)),
              ),
              const SizedBox(height: 4),
              Text(
                booking.courseTitle,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              Text(
                booking.instituteName,
                style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8)),
              ),
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFF064E3B),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: const Text(
                  'BIOMETRIC SCAN AUTHORIZED',
                  style: TextStyle(fontSize: 9, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF34D399)),
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Close', style: TextStyle(color: Color(0xFF94A3B8))),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final filtered = _bookings.where((b) {
      if (_selectedTab == 'Active') return b.status == 'CONFIRMED' || b.status == 'ESCROW_HELD';
      if (_selectedTab == 'Completed') return b.status == 'COMPLETED';
      return true;
    }).toList();

    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        title: const Row(
          children: [
            Icon(Icons.confirmation_number_outlined, color: Color(0xFF00E5FF), size: 20),
            SizedBox(width: 8),
            Text('My Maritime Bookings', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.white)),
          ],
        ),
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
      ),
      body: Column(
        children: [
          // Tabs Filter
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            color: const Color(0xFF091122),
            child: Row(
              children: ['Active', 'Completed', 'All Invoices'].map((tab) {
                final isSelected = _selectedTab == tab;
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: FilterChip(
                    selected: isSelected,
                    label: Text(tab),
                    labelStyle: TextStyle(
                      fontSize: 12,
                      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                      color: isSelected ? Colors.white : const Color(0xFF94A3B8),
                    ),
                    backgroundColor: const Color(0xFF0C1628),
                    selectedColor: const Color(0xFF0369A1),
                    side: BorderSide(
                      color: isSelected ? const Color(0xFF00E5FF).withValues(alpha: 0.6) : const Color(0xFF1E293B),
                    ),
                    onSelected: (_) {
                      setState(() => _selectedTab = tab);
                    },
                  ),
                );
              }).toList(),
            ),
          ),

          // Bookings List
          Expanded(
            child: filtered.isEmpty
                ? const Center(child: Text('No bookings match this category', style: TextStyle(color: Color(0xFF64748B))))
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: filtered.length,
                    itemBuilder: (context, index) {
                      final b = filtered[index];
                      final isConfirmed = b.status == 'CONFIRMED';
                      final isEscrow = b.status == 'ESCROW_HELD';

                      return Container(
                        margin: const EdgeInsets.only(bottom: 14),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0C1628),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: const Color(0xFF1E293B)),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    b.bookingReference,
                                    style: const TextStyle(
                                      fontSize: 11,
                                      fontFamily: 'monospace',
                                      color: Color(0xFF00E5FF),
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2.5),
                                    decoration: BoxDecoration(
                                      color: isConfirmed
                                          ? const Color(0xFF064E3B)
                                          : isEscrow
                                              ? const Color(0xFF1E3A8A)
                                              : const Color(0xFF1E293B),
                                      borderRadius: BorderRadius.circular(6),
                                    ),
                                    child: Text(
                                      b.status,
                                      style: TextStyle(
                                        fontSize: 10,
                                        fontFamily: 'monospace',
                                        fontWeight: FontWeight.bold,
                                        color: isConfirmed
                                            ? const Color(0xFF34D399)
                                            : isEscrow
                                                ? const Color(0xFF38BDF8)
                                                : Colors.grey,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 10),
                              Text(
                                b.courseTitle,
                                style: const TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                b.instituteName,
                                style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8)),
                              ),
                              const SizedBox(height: 10),
                              Container(
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: const Color(0xFF070D18),
                                  borderRadius: BorderRadius.circular(10),
                                  border: Border.all(color: const Color(0xFF1E293B)),
                                ),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        const Icon(Icons.date_range, size: 14, color: Color(0xFF00E5FF)),
                                        const SizedBox(width: 6),
                                        Text(b.batchDates, style: const TextStyle(fontSize: 11, color: Colors.white70)),
                                      ],
                                    ),
                                    Text(
                                      '₹${b.amount.toInt()}',
                                      style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Colors.white),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 12),
                              Row(
                                children: [
                                  Expanded(
                                    child: OutlinedButton.icon(
                                      icon: const Icon(Icons.qr_code, size: 14),
                                      label: const Text('Gate Pass QR', style: TextStyle(fontSize: 11)),
                                      style: OutlinedButton.styleFrom(
                                        foregroundColor: const Color(0xFF00E5FF),
                                        side: const BorderSide(color: Color(0xFF00E5FF)),
                                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                                      ),
                                      onPressed: () => _showGatePass(b),
                                    ),
                                  ),
                                  const SizedBox(width: 8),
                                  Expanded(
                                    child: ElevatedButton.icon(
                                      icon: const Icon(Icons.receipt_long, size: 14),
                                      label: const Text('Tax Invoice', style: TextStyle(fontSize: 11)),
                                      style: ElevatedButton.styleFrom(
                                        backgroundColor: const Color(0xFF0369A1),
                                        foregroundColor: Colors.white,
                                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                                      ),
                                      onPressed: () {
                                        ScaffoldMessenger.of(context).showSnackBar(
                                          SnackBar(
                                            content: Text('Downloading GST Tax Invoice for ${b.bookingReference}...'),
                                            backgroundColor: const Color(0xFF0369A1),
                                            behavior: SnackBarBehavior.floating,
                                          ),
                                        );
                                      },
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}