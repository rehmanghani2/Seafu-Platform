import 'package:flutter/material.dart';
import 'features/courses/courses_screen.dart';
import 'features/vault/vault_screen.dart';
import 'features/bookings/bookings_screen.dart';
import 'features/notifications/notifications_screen.dart';
import 'features/profile/profile_screen.dart';
import 'features/jobs/jobs_screen.dart';
import 'features/webinars/webinars_screen.dart';
import 'features/community/community_screen.dart';
import 'features/chat/maritime_chat_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const SeafuApp());
}

class SeafuApp extends StatelessWidget {
  const SeafuApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'The Seafu',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF070D18),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF0284C7),
          secondary: Color(0xFF00E5FF),
          surface: Color(0xFF0C1628),
        ),
        useMaterial3: true,
      ),
      home: const MainNavigationScreen(),
    );
  }
}

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({super.key});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _currentIndex = 0;

  final List<Widget> _screens = const [
    CoursesScreen(),
    VaultScreen(),
    BookingsScreen(),
    NotificationsScreen(),
    ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        backgroundColor: const Color(0xFF0C1628),
        child: Column(
          children: [
            DrawerHeader(
              decoration: const BoxDecoration(
                color: Color(0xFF031726),
                border: Border(bottom: BorderSide(color: Color(0xFF1E293B))),
              ),
              child: Row(
                children: [
                  Container(
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                      color: const Color(0xFF070D18),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFF00E5FF), width: 1.5),
                    ),
                    child: const Center(
                      child: Icon(Icons.anchor, color: Color(0xFF00E5FF), size: 28),
                    ),
                  ),
                  const SizedBox(width: 14),
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'SEAFU MARITIME',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 15,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.2,
                        ),
                      ),
                      Text(
                        'STCW Bridge & Career Hub',
                        style: TextStyle(
                          color: Color(0xFF00E5FF),
                          fontSize: 11,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            ListTile(
              leading: const Icon(Icons.work_outline, color: Color(0xFF00E5FF)),
              title: const Text('Maritime Vacancies', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
              subtitle: const Text('IMO & Shipping line jobs', style: TextStyle(color: Colors.grey, fontSize: 11)),
              trailing: const Icon(Icons.arrow_forward_ios, size: 12, color: Colors.white38),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (_) => const JobsScreen()));
              },
            ),
            ListTile(
              leading: const Icon(Icons.video_library_outlined, color: Color(0xFF38BDF8)),
              title: const Text('Live Webinars', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
              subtitle: const Text('STCW CPD & Masterclasses', style: TextStyle(color: Colors.grey, fontSize: 11)),
              trailing: const Icon(Icons.arrow_forward_ios, size: 12, color: Colors.white38),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (_) => const WebinarsScreen()));
              },
            ),
            ListTile(
              leading: const Icon(Icons.forum_outlined, color: Color(0xFF10B981)),
              title: const Text('Peer Network & Forum', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
              subtitle: const Text('Discussions, Orals & MMD', style: TextStyle(color: Colors.grey, fontSize: 11)),
              trailing: const Icon(Icons.arrow_forward_ios, size: 12, color: Colors.white38),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (_) => const CommunityScreen()));
              },
            ),
            ListTile(
              leading: const Icon(Icons.smart_toy_outlined, color: Color(0xFFA855F7)),
              title: const Text('AI Watchkeeper', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
              subtitle: const Text('Instant STCW & Sea-time Advice', style: TextStyle(color: Colors.grey, fontSize: 11)),
              trailing: const Icon(Icons.arrow_forward_ios, size: 12, color: Colors.white38),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (_) => const MaritimeChatScreen()));
              },
            ),
            const Divider(color: Color(0xFF1E293B)),
            const Spacer(),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFF070D18),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: const Color(0xFF1E293B)),
                ),
                child: const Row(
                  children: [
                    Icon(Icons.shield_outlined, color: Color(0xFF10B981), size: 18),
                    SizedBox(width: 10),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('DGS & STCW Compliant', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold)),
                        Text('Cryptographic Vault Active', style: TextStyle(color: Colors.grey, fontSize: 10)),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      body: _screens[_currentIndex],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        backgroundColor: const Color(0xFF031726),
        indicatorColor: const Color(0xFF0369A1),
        onDestinationSelected: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.explore_outlined),
            selectedIcon: Icon(Icons.explore),
            label: 'Courses',
          ),
          NavigationDestination(
            icon: Icon(Icons.shield_outlined),
            selectedIcon: Icon(Icons.shield),
            label: 'Cert Vault',
          ),
          NavigationDestination(
            icon: Icon(Icons.confirmation_number_outlined),
            selectedIcon: Icon(Icons.confirmation_number),
            label: 'Bookings',
          ),
          NavigationDestination(
            icon: Badge(
              label: Text('3', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold)),
              backgroundColor: Color(0xFFEF4444),
              child: Icon(Icons.notifications_outlined),
            ),
            selectedIcon: Badge(
              label: Text('3', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold)),
              backgroundColor: Color(0xFFEF4444),
              child: Icon(Icons.notifications),
            ),
            label: 'Alerts',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outline),
            selectedIcon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}
