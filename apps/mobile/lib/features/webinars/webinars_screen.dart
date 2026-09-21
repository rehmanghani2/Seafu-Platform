import 'package:flutter/material.dart';

class MaritimeWebinar {
  final String id;
  final String title;
  final String academy;
  final String speaker;
  final String speakerRole;
  final String scheduledDate;
  final String duration;
  final bool isLive;

  const MaritimeWebinar({
    required this.id,
    required this.title,
    required this.academy,
    required this.speaker,
    required this.speakerRole,
    required this.scheduledDate,
    required this.duration,
    this.isLive = false,
  });
}

class WebinarsScreen extends StatelessWidget {
  const WebinarsScreen({super.key});

  final List<MaritimeWebinar> _webinars = const [
    MaritimeWebinar(
      id: 'web-1',
      title: 'IMO MEPC 82 Decarbonization Mandates & Carbon Intensity Indicator (CII)',
      academy: 'Anglo-Eastern Maritime Academy',
      speaker: 'Dr. John Karagiannis',
      speakerRole: 'Principal Maritime Decarbonization Consultant',
      scheduledDate: 'LIVE NOW &bull; Streaming',
      duration: '90 Mins',
      isLive: true,
    ),
    MaritimeWebinar(
      id: 'web-2',
      title: 'Port State Control Tokyo MoU Concentrated Inspection Campaign (CIC) 2026',
      academy: 'ClassNK Technical Maritime Academy',
      speaker: 'Capt. M. Tanaka',
      speakerRole: 'Former Tokyo MoU Senior Port State Inspector',
      scheduledDate: 'Tomorrow &bull; 14:00 UTC',
      duration: '120 Mins',
    ),
    MaritimeWebinar(
      id: 'web-3',
      title: 'SIRE 2.0 Tablet-Based Tanker Vetting: Practical Master Preparation',
      academy: 'Samundra Institute of Maritime Studies',
      speaker: 'Capt. Rajesh Varma',
      speakerRole: 'Master Mariner FG, OCIMF Accredited Inspector',
      scheduledDate: '28 Sep 2026 &bull; 10:00 UTC',
      duration: '75 Mins',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0C1628),
        elevation: 0,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text(
              'Maritime Webinars & Masterclasses',
              style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
            ),
            Text(
              'Encrypted WebRTC Bridge Streams & Regulatory Briefings',
              style: TextStyle(fontSize: 9.5, color: Color(0xFF00E5FF), fontFamily: 'monospace'),
            ),
          ],
        ),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(12),
        itemCount: _webinars.length,
        itemBuilder: (context, index) {
          final w = _webinars[index];
          return Container(
            margin: const EdgeInsets.only(bottom: 12),
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFF0C1628),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(
                color: w.isLive ? const Color(0xFFEF4444) : const Color(0xFF1E3A5F),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: w.isLive ? const Color(0xFF450A0A) : const Color(0xFF070F1E),
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(
                          color: w.isLive ? const Color(0xFFEF4444) : const Color(0xFF1E3A5F),
                        ),
                      ),
                      child: Row(
                        children: [
                          if (w.isLive)
                            Container(
                              width: 6,
                              height: 6,
                              margin: const EdgeInsets.only(right: 5),
                              decoration: const BoxDecoration(
                                color: Color(0xFFEF4444),
                                shape: BoxShape.circle,
                              ),
                            ),
                          Text(
                            w.isLive ? 'LIVE BRIDGE STREAM' : 'SCHEDULED WEBINAR',
                            style: TextStyle(
                              fontSize: 9.5,
                              fontWeight: FontWeight.bold,
                              fontFamily: 'monospace',
                              color: w.isLive ? const Color(0xFFFCA5A5) : const Color(0xFF00E5FF),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Text(
                      w.duration,
                      style: const TextStyle(fontSize: 10, color: Colors.white54, fontFamily: 'monospace'),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  w.title,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                const SizedBox(height: 4),
                Text(
                  w.academy,
                  style: const TextStyle(fontSize: 11, color: Color(0xFF00E5FF)),
                ),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFF070F1E),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Row(
                    children: [
                      const CircleAvatar(
                        radius: 12,
                        backgroundColor: Color(0xFF0369A1),
                        child: Icon(Icons.person, size: 14, color: Colors.white),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              w.speaker,
                              style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.white),
                            ),
                            Text(
                              w.speakerRole,
                              style: const TextStyle(fontSize: 9.5, color: Colors.white54),
                              overflow: TextOverflow.ellipsis,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: w.isLive ? const Color(0xFFDC2626) : const Color(0xFF0284C7),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 10),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    ),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          backgroundColor: const Color(0xFF059669),
                          content: Text('Free digital pass registered for: ${w.title}'),
                        ),
                      );
                    },
                    child: Text(
                      w.isLive ? 'Join Live Bridge Stream' : 'Register for Digital Pass (Free)',
                      style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
