import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        title: const Text('? Seafarer Identity & Resume', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
        actions: [
          IconButton(
            icon: const Icon(Icons.qr_code, color: Color(0xFF00E5FF)),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Officer Profile Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF0C1628),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFF1E293B)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 56,
                    height: 56,
                    decoration: BoxDecoration(
                      color: const Color(0xFF070D18),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFF00E5FF), width: 1.5),
                    ),
                    child: const Center(
                      child: Text('?????', style: TextStyle(fontSize: 26)),
                    ),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Capt. Rajesh Sharma',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                        ),
                        const SizedBox(height: 2),
                        const Text(
                          'Chief Officer / Master FG',
                          style: TextStyle(fontSize: 12, color: Color(0xFF00E5FF)),
                        ),
                        const SizedBox(height: 4),
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1.5),
                              decoration: BoxDecoration(
                                color: const Color(0xFF064E3B),
                                borderRadius: BorderRadius.circular(4),
                              ),
                              child: const Text(
                                'DG e-Samudra Verified',
                                style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF34D399)),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 16),

            // Maritime Credentials Overview
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF0C1628),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFF1E293B)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('GOVERNMENT OF INDIA MARITIME CREDENTIALS', style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey)),
                  const SizedBox(height: 12),
                  _buildCredentialRow('INDoS Number', '08ZL9431', isCyan: true),
                  const Divider(color: Color(0xFF1E293B)),
                  _buildCredentialRow('Continuous Discharge Cert (CDC)', 'MUM-149028'),
                  const Divider(color: Color(0xFF1E293B)),
                  _buildCredentialRow('Certificate of Competency (CoC)', 'IND-95-2018-00431'),
                  const Divider(color: Color(0xFF1E293B)),
                  _buildCredentialRow('Logged Sea-Time', '48 months 14 days', isEmerald: true),
                  const Divider(color: Color(0xFF1E293B)),
                  _buildCredentialRow('Medical Fitness Cert', 'Valid (Class-A)'),
                ],
              ),
            ),

            const SizedBox(height: 16),

            // Quick Actions: Camera Scanner & Resume
            Row(
              children: [
                Expanded(
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF0369A1),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Document Camera Scanner opened')),
                      );
                    },
                    icon: const Icon(Icons.camera_alt, size: 18),
                    label: const Text('Scan Document', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: OutlinedButton.icon(
                    style: OutlinedButton.styleFrom(
                      foregroundColor: const Color(0xFF00E5FF),
                      side: const BorderSide(color: Color(0xFF00E5FF)),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Digital Maritime Resume exported')),
                      );
                    },
                    icon: const Icon(Icons.share, size: 18),
                    label: const Text('Share Resume', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCredentialRow(String label, String value, {bool isCyan = false, bool isEmerald = false}) {
    Color valColor = Colors.white;
    if (isCyan) valColor = const Color(0xFF00E5FF);
    if (isEmerald) valColor = const Color(0xFF34D399);

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8))),
          Text(value, style: TextStyle(fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: valColor)),
        ],
      ),
    );
  }
}