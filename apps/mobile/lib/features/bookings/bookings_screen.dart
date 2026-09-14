import 'package:flutter/material.dart';
import 'booking_model.dart';

class BookingsScreen extends StatelessWidget {
  const BookingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final bookings = [
      BookingModel(
        id: 'bk-01',
        bookingReference: 'SEA-BK-92841-8842',
        courseTitle: 'Advanced Fire Fighting (AFF) - RUT',
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
        instituteName: 'Southern Maritime Institute',
        batchDates: '14 Oct - 16 Oct 2026',
        amount: 4500.0,
        status: 'COMPLETED',
        studentInvoiceUrl: '/invoices/candidate/INV-CAND-41028.pdf',
        instituteInvoiceUrl: '/invoices/institute/INV-INST-41028.pdf',
      ),
    ];

    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        title: const Text('? My Maritime Bookings', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
        backgroundColor: const Color(0xFF031726),
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: bookings.length,
        itemBuilder: (context, index) {
          final b = bookings[index];
          final isConfirmed = b.status == 'CONFIRMED';
          return Card(
            margin: const EdgeInsets.only(bottom: 14),
            color: const Color(0xFF0C1628),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(14),
              side: const BorderSide(color: Color(0xFF1E293B)),
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
                          color: Color(0xFF06B6D4),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: isConfirmed ? const Color(0xFF064E3B) : const Color(0xFF1E293B),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          b.status,
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: isConfirmed ? const Color(0xFF34D399) : Colors.grey,
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
                  const SizedBox(height: 12),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        b.batchDates,
                        style: const TextStyle(fontSize: 11, color: Color(0xFF38BDF8)),
                      ),
                      Text(
                        'INR ${b.amount.toInt()}',
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w900,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  const Divider(color: Color(0xFF1E293B)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      TextButton.icon(
                        onPressed: () {},
                        icon: const Icon(Icons.receipt_long, size: 14, color: Color(0xFF38BDF8)),
                        label: const Text(
                          'Candidate Invoice',
                          style: TextStyle(fontSize: 11, color: Color(0xFF38BDF8)),
                        ),
                      ),
                      TextButton.icon(
                        onPressed: () {},
                        icon: const Icon(Icons.account_balance, size: 14, color: Color(0xFF34D399)),
                        label: const Text(
                          'Escrow Voucher',
                          style: TextStyle(fontSize: 11, color: Color(0xFF34D399)),
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
    );
  }
}