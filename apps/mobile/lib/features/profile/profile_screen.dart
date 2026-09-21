import 'package:flutter/material.dart';
import '../jobs/jobs_screen.dart';
import '../webinars/webinars_screen.dart';
import '../community/community_screen.dart';
import '../chat/maritime_chat_screen.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  String _selectedLanguage = 'en';

  final Map<String, String> _languages = {
    'en': 'English (Maritime Standard)',
    'hi': 'हिंदी (Hindi)',
    'tl': 'Tagalog (Filipino)',
    'ru': 'Русский (Russian)',
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        title: const Text(
          'Seafarer Identity & Resume',
          style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: Colors.white),
        ),
        actions: [
          IconButton(
            tooltip: 'Export QR Card',
            icon: const Icon(Icons.qr_code, color: Color(0xFF00E5FF)),
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Seafarer Digital Passport QR generated')),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
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
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                      color: const Color(0xFF070D18),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFF00E5FF), width: 1.5),
                    ),
                    child: const Center(
                      child: Icon(Icons.sailing, color: Color(0xFF00E5FF), size: 30),
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
                        const SizedBox(height: 6),
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                              decoration: BoxDecoration(
                                color: const Color(0xFF064E3B),
                                borderRadius: BorderRadius.circular(4),
                              ),
                              child: const Row(
                                children: [
                                  Icon(Icons.verified, size: 10, color: Color(0xFF34D399)),
                                  SizedBox(width: 4),
                                  Text(
                                    'DG e-Samudra Verified',
                                    style: TextStyle(
                                      fontSize: 9,
                                      fontFamily: 'monospace',
                                      color: Color(0xFF34D399),
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ],
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
                  const Text('GOVERNMENT OF INDIA MARITIME CREDENTIALS',
                      style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey)),
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

            // Quick Hub Services
            const Text(
              'MARITIME HUB SERVICES',
              style: TextStyle(fontSize: 11, fontFamily: 'monospace', color: Color(0xFF00E5FF), fontWeight: FontWeight.bold, letterSpacing: 1),
            ),
            const SizedBox(height: 10),
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              childAspectRatio: 2.2,
              children: [
                _buildHubTile(
                  icon: Icons.work_outline,
                  color: const Color(0xFF00E5FF),
                  title: 'Job Vacancies',
                  subtitle: 'Shipping lines',
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const JobsScreen())),
                ),
                _buildHubTile(
                  icon: Icons.video_library_outlined,
                  color: const Color(0xFF38BDF8),
                  title: 'Live Webinars',
                  subtitle: 'CPD Masterclasses',
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const WebinarsScreen())),
                ),
                _buildHubTile(
                  icon: Icons.forum_outlined,
                  color: const Color(0xFF10B981),
                  title: 'Peer Forum',
                  subtitle: 'MMD & Orals',
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const CommunityScreen())),
                ),
                _buildHubTile(
                  icon: Icons.smart_toy_outlined,
                  color: const Color(0xFFA855F7),
                  title: 'AI Watchkeeper',
                  subtitle: 'STCW Q&A Desk',
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const MaritimeChatScreen())),
                ),
              ],
            ),

            const SizedBox(height: 16),

            // Maritime Localization (i18n) Preference
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
                  const Row(
                    children: [
                      Icon(Icons.language, color: Color(0xFF00E5FF), size: 16),
                      SizedBox(width: 8),
                      Text(
                        'MARITIME LANGUAGE PREFERENCE',
                        style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey, letterSpacing: 0.8),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  DropdownButtonFormField<String>(
                    initialValue: _selectedLanguage,
                    dropdownColor: const Color(0xFF0C1628),
                    style: const TextStyle(color: Colors.white, fontSize: 13),
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: const Color(0xFF070D18),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: const BorderSide(color: Color(0xFF1E293B)),
                      ),
                    ),
                    items: _languages.entries.map((e) {
                      return DropdownMenuItem<String>(
                        value: e.key,
                        child: Text(e.value),
                      );
                    }).toList(),
                    onChanged: (val) {
                      if (val != null) {
                        setState(() => _selectedLanguage = val);
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text('App locale switched to ${_languages[val]}'),
                            backgroundColor: const Color(0xFF00E5FF),
                          ),
                        );
                      }
                    },
                  ),
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
                        const SnackBar(content: Text('Digital Maritime Resume exported to PDF')),
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

  Widget _buildHubTile({
    required IconData icon,
    required Color color,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: const Color(0xFF0C1628),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: const Color(0xFF1E293B)),
        ),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: color.withAlpha(30),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Icon(icon, color: color, size: 18),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    title,
                    style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    subtitle,
                    style: const TextStyle(color: Colors.grey, fontSize: 10),
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
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
