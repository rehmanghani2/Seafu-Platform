import 'package:flutter/material.dart';
import 'features/courses/courses_screen.dart';
import 'features/bookings/bookings_screen.dart';
import 'features/vault/psc_scan_deck_screen.dart';

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
    PscScanDeckScreen(),
    BookingsScreen(),
    ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
            icon: Icon(Icons.search),
            label: 'Courses',
          ),
          NavigationDestination(
            icon: Icon(Icons.qr_code_scanner_outlined),
            selectedIcon: Icon(Icons.qr_code_scanner),
            label: 'PSC Vault',
          ),
          NavigationDestination(
            icon: Icon(Icons.confirmation_number_outlined),
            selectedIcon: Icon(Icons.confirmation_number),
            label: 'Bookings',
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

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        title: const Text('Seafarer Profile', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFF031726),
        foregroundColor: Colors.white,
      ),
      body: const Center(
        child: Text('INDoS, CDC, & Maritime Resume'),
      ),
    );
  }
}