import 'dart:async';
import 'package:flutter/material.dart';
import 'models/course_model.dart';

class CoursesScreen extends StatefulWidget {
  const CoursesScreen({super.key});

  @override
  State<CoursesScreen> createState() => _CoursesScreenState();
}

class _CoursesScreenState extends State<CoursesScreen> {
  String _selectedCategory = 'All';
  String _searchQuery = '';
  final TextEditingController _searchController = TextEditingController();

  final List<CourseModel> _allCourses = [
    CourseModel(
      id: 'c1',
      title: 'Personal Survival Techniques (PST)',
      code: 'STCW-PST-01',
      category: 'STCW Basic',
      instituteName: 'Anglo-Eastern Maritime Academy',
      city: 'Karjat, Mumbai',
      durationDays: 3,
      basePrice: 4500,
      isDgApproved: true,
      nextBatchDate: '22 Sep 2026',
      availableSeats: 12,
    ),
    CourseModel(
      id: 'c2',
      title: 'Advanced Fire Fighting (AFF)',
      code: 'STCW-AFF-02',
      category: 'Advanced',
      instituteName: 'Samundra Institute of Maritime Studies',
      city: 'Lonavala',
      durationDays: 5,
      basePrice: 8500,
      isDgApproved: true,
      nextBatchDate: '25 Sep 2026',
      availableSeats: 4,
    ),
    CourseModel(
      id: 'c3',
      title: 'ECDIS Electronic Navigation (Type Specific)',
      code: 'STCW-ECDIS-03',
      category: 'Simulator',
      instituteName: 'Maritime Training Academy Mumbai',
      city: 'Mumbai',
      durationDays: 5,
      basePrice: 12500,
      isDgApproved: true,
      nextBatchDate: '02 Oct 2026',
      availableSeats: 6,
    ),
    CourseModel(
      id: 'c4',
      title: 'GMDSS General Operator Certificate (GOC)',
      code: 'STCW-GMDSS-04',
      category: 'Competency',
      instituteName: 'Anglo-Eastern Maritime Academy',
      city: 'Karjat, Mumbai',
      durationDays: 12,
      basePrice: 28000,
      isDgApproved: true,
      nextBatchDate: '05 Oct 2026',
      availableSeats: 8,
    ),
    CourseModel(
      id: 'c5',
      title: 'Proficiency in Fast Rescue Boats (PFRB)',
      code: 'STCW-PFRB-05',
      category: 'Advanced',
      instituteName: 'Goa Offshore & Safety Center',
      city: 'Panaji, Goa',
      durationDays: 3,
      basePrice: 11000,
      isDgApproved: true,
      nextBatchDate: '08 Oct 2026',
      availableSeats: 3,
    ),
    CourseModel(
      id: 'c6',
      title: 'High Voltage Safety & Switchgear (Management)',
      code: 'STCW-HV-06',
      category: 'Competency',
      instituteName: 'Southern Maritime Institute',
      city: 'Chennai',
      durationDays: 4,
      basePrice: 14500,
      isDgApproved: true,
      nextBatchDate: '12 Oct 2026',
      availableSeats: 5,
    ),
  ];

  void _openCourseDetails(CourseModel course) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0C1628),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return DraggableScrollableSheet(
          initialChildSize: 0.85,
          maxChildSize: 0.95,
          minChildSize: 0.5,
          expand: false,
          builder: (context, scrollController) {
            return SingleChildScrollView(
              controller: scrollController,
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      margin: const EdgeInsets.only(bottom: 16),
                      decoration: BoxDecoration(
                        color: const Color(0xFF334155),
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0369A1).withValues(alpha: 0.2),
                          borderRadius: BorderRadius.circular(6),
                          border: Border.all(color: const Color(0xFF0284C7).withValues(alpha: 0.4)),
                        ),
                        child: Text(
                          course.category.toUpperCase(),
                          style: const TextStyle(fontSize: 10, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF38BDF8)),
                        ),
                      ),
                      if (course.isDgApproved)
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: const Color(0xFF064E3B),
                            borderRadius: BorderRadius.circular(6),
                          ),
                          child: const Row(
                            children: [
                              Icon(Icons.verified, size: 12, color: Color(0xFF34D399)),
                              SizedBox(width: 4),
                              Text(
                                'DG SHIPPING APPROVED',
                                style: TextStyle(fontSize: 10, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF34D399)),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    course.title,
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white, height: 1.2),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Code: ${course.code} • ${course.durationDays} Days Practical Curriculum',
                    style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8), fontFamily: 'monospace'),
                  ),
                  const SizedBox(height: 16),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: const Color(0xFF070D18),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFF1E293B)),
                    ),
                    child: Column(
                      children: [
                        _buildModalInfoRow(Icons.school_outlined, 'Training Academy', course.instituteName),
                        const Divider(color: Color(0xFF1E293B), height: 16),
                        _buildModalInfoRow(Icons.location_on_outlined, 'Campus Location', course.city),
                        const Divider(color: Color(0xFF1E293B), height: 16),
                        _buildModalInfoRow(Icons.calendar_today_outlined, 'Upcoming Intake Batch', course.nextBatchDate),
                        const Divider(color: Color(0xFF1E293B), height: 16),
                        _buildModalInfoRow(Icons.event_seat_outlined, 'Live Available Seats', '${course.availableSeats} Seats (Quota Controlled)'),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'SIMULATOR & PRACTICAL SPECIFICATIONS',
                    style: TextStyle(fontSize: 11, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF64748B)),
                  ),
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0F1E36),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFF0284C7).withValues(alpha: 0.3)),
                    ),
                    child: const Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '• DNV Class A Full-Mission Kongsberg Bridge Simulator (Polaris 2026)',
                          style: TextStyle(fontSize: 11, color: Color(0xFFCBD5E1)),
                        ),
                        SizedBox(height: 4),
                        Text(
                          '• Smoke chamber, breathing apparatus, and water rescue field compliant',
                          style: TextStyle(fontSize: 11, color: Color(0xFFCBD5E1)),
                        ),
                        SizedBox(height: 4),
                        Text(
                          '• Biometric INDoS attendance sync to DG Shipping e-Samudra server',
                          style: TextStyle(fontSize: 11, color: Color(0xFFCBD5E1)),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('GOVERNMENT APPROVED FEE', style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFF64748B))),
                          Text(
                            '₹${course.basePrice.toInt()}',
                            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white),
                          ),
                        ],
                      ),
                      ElevatedButton.icon(
                        icon: const Icon(Icons.lock_clock, size: 16),
                        label: const Text('Book Seat with Escrow', style: TextStyle(fontWeight: FontWeight.bold)),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF0284C7),
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        onPressed: () {
                          Navigator.pop(context);
                          _openBookingSheet(course);
                        },
                      ),
                    ],
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  Widget _buildModalInfoRow(IconData icon, String label, String value) {
    return Row(
      children: [
        Icon(icon, size: 16, color: const Color(0xFF00E5FF)),
        const SizedBox(width: 10),
        Text(label, style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8))),
        const Spacer(),
        Text(value, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white)),
      ],
    );
  }

  void _openBookingSheet(CourseModel course) {
    int remainingSeconds = 600;
    Timer? timer;

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0C1628),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setSheetState) {
            timer ??= Timer.periodic(const Duration(seconds: 1), (t) {
              if (remainingSeconds > 0) {
                setSheetState(() => remainingSeconds--);
              } else {
                t.cancel();
              }
            });

            final minutes = (remainingSeconds / 60).floor().toString().padLeft(2, '0');
            final seconds = (remainingSeconds % 60).toString().padLeft(2, '0');

            return Padding(
              padding: EdgeInsets.only(
                top: 20,
                left: 20,
                right: 20,
                bottom: MediaQuery.of(context).viewInsets.bottom + 20,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Atomic Timer Header
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    decoration: BoxDecoration(
                      color: const Color(0xFF1C1917),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFFF59E0B)),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Row(
                          children: [
                            Icon(Icons.timer_outlined, color: Color(0xFFF59E0B), size: 18),
                            SizedBox(width: 8),
                            Text(
                              'ATOMIC SEAT LOCK ACTIVE',
                              style: TextStyle(fontSize: 11, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFFF59E0B)),
                            ),
                          ],
                        ),
                        Text(
                          '$minutes:$seconds',
                          style: const TextStyle(fontSize: 15, fontFamily: 'monospace', fontWeight: FontWeight.w900, color: Colors.white),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    course.title,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '${course.instituteName} • Batch: ${course.nextBatchDate}',
                    style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8)),
                  ),
                  const SizedBox(height: 14),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF070D18),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFF1E293B)),
                    ),
                    child: const Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('Candidate INDoS:', style: TextStyle(fontSize: 11, color: Color(0xFF94A3B8))),
                            Text('08ZL9431 (Capt. Rajesh)', style: TextStyle(fontSize: 11, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Colors.white)),
                          ],
                        ),
                        SizedBox(height: 6),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('Escrow Guarantee:', style: TextStyle(fontSize: 11, color: Color(0xFF94A3B8))),
                            Text('100% Refund if not DG Endorsed', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF34D399))),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF0284C7),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      onPressed: () {
                        timer?.cancel();
                        Navigator.pop(context);
                        _showConfirmationReceipt(course);
                      },
                      child: Text(
                        'Confirm Booking & Authorize ₹${course.basePrice.toInt()}',
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                      ),
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  void _showConfirmationReceipt(CourseModel course) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: const Color(0xFF0C1628),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20), side: const BorderSide(color: Color(0xFF00E5FF), width: 1.5)),
          title: const Column(
            children: [
              Icon(Icons.check_circle_outline, color: Color(0xFF34D399), size: 48),
              SizedBox(height: 8),
              Text('Seat Confirmed & Escrow Held', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Colors.white)),
            ],
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('BOOKING REFERENCE:', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF64748B))),
              const Text('SEA-BK-92841-8842', style: TextStyle(fontSize: 13, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF00E5FF))),
              const SizedBox(height: 10),
              Text(course.title, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white)),
              Text(course.instituteName, style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8))),
              const SizedBox(height: 6),
              Text('Batch Commences: ${course.nextBatchDate}', style: const TextStyle(fontSize: 11, color: Color(0xFF34D399), fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              const Text(
                'Your campus gate pass QR and student invoice are synced to your Bookings tab.',
                style: TextStyle(fontSize: 11, color: Color(0xFFCBD5E1), height: 1.3),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Dismiss', style: TextStyle(color: Color(0xFF94A3B8))),
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF0284C7), foregroundColor: Colors.white),
              onPressed: () => Navigator.pop(context),
              child: const Text('View in Bookings'),
            ),
          ],
        );
      },
    );
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final filtered = _allCourses.where((c) {
      if (_selectedCategory != 'All' && c.category != _selectedCategory) {
        return false;
      }
      if (_searchQuery.isNotEmpty &&
          !c.title.toLowerCase().contains(_searchQuery.toLowerCase()) &&
          !c.code.toLowerCase().contains(_searchQuery.toLowerCase()) &&
          !c.instituteName.toLowerCase().contains(_searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    }).toList();

    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        title: const Row(
          children: [
            Icon(Icons.anchor, color: Color(0xFF00E5FF), size: 20),
            SizedBox(width: 8),
            Text(
              'The Seafu · DG Courses',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.white),
            ),
          ],
        ),
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 12),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFF064E3B),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: const Color(0xFF059669).withValues(alpha: 0.5)),
            ),
            child: const Row(
              children: [
                Icon(Icons.check_circle, color: Color(0xFF34D399), size: 12),
                SizedBox(width: 4),
                Text(
                  'STCW ONLINE',
                  style: TextStyle(fontSize: 9, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF34D399)),
                ),
              ],
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          // Search & Filter Header
          Container(
            color: const Color(0xFF091122),
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 10),
            child: Column(
              children: [
                TextField(
                  controller: _searchController,
                  style: const TextStyle(color: Colors.white, fontSize: 13),
                  decoration: InputDecoration(
                    hintText: 'Search courses, STCW code, academy, city...',
                    hintStyle: const TextStyle(color: Color(0xFF64748B), fontSize: 12),
                    prefixIcon: const Icon(Icons.search, size: 20, color: Color(0xFF00E5FF)),
                    suffixIcon: _searchQuery.isNotEmpty
                        ? IconButton(
                            icon: const Icon(Icons.clear, size: 16, color: Colors.grey),
                            onPressed: () {
                              _searchController.clear();
                              setState(() => _searchQuery = '');
                            },
                          )
                        : null,
                    filled: true,
                    fillColor: const Color(0xFF0C1628),
                    contentPadding: const EdgeInsets.symmetric(vertical: 0, horizontal: 16),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: Color(0xFF1E293B)),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: Color(0xFF0284C7)),
                    ),
                  ),
                  onChanged: (val) {
                    setState(() {
                      _searchQuery = val;
                    });
                  },
                ),
                const SizedBox(height: 10),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: ['All', 'STCW Basic', 'Advanced', 'Simulator', 'Competency'].map((cat) {
                      final isSelected = _selectedCategory == cat;
                      return Padding(
                        padding: const EdgeInsets.only(right: 8),
                        child: FilterChip(
                          selected: isSelected,
                          label: Text(cat),
                          labelStyle: TextStyle(
                            fontSize: 11,
                            fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                            color: isSelected ? Colors.white : const Color(0xFF94A3B8),
                          ),
                          backgroundColor: const Color(0xFF0C1628),
                          selectedColor: const Color(0xFF0369A1),
                          side: BorderSide(
                            color: isSelected ? const Color(0xFF00E5FF).withValues(alpha: 0.6) : const Color(0xFF1E293B),
                          ),
                          onSelected: (_) {
                            setState(() {
                              _selectedCategory = cat;
                            });
                          },
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          ),

          // Course Cards List
          Expanded(
            child: filtered.isEmpty
                ? const Center(
                    child: Text(
                      'No maritime courses match your search criteria',
                      style: TextStyle(color: Color(0xFF64748B)),
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: filtered.length,
                    itemBuilder: (context, index) {
                      final course = filtered[index];
                      return _buildCourseCard(course);
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _buildCourseCard(CourseModel course) {
    final hasFewSeats = course.availableSeats <= 4;
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: const Color(0xFF0C1628),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF1E293B)),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: () => _openCourseDetails(course),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2.5),
                      decoration: BoxDecoration(
                        color: const Color(0xFF0369A1).withValues(alpha: 0.2),
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: const Color(0xFF0284C7).withValues(alpha: 0.3)),
                      ),
                      child: Text(
                        course.category,
                        style: const TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF38BDF8),
                        ),
                      ),
                    ),
                    const SizedBox(width: 6),
                    if (course.isDgApproved)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2.5),
                        decoration: BoxDecoration(
                          color: const Color(0xFF064E3B),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: const Text(
                          'DG Approved',
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF34D399),
                          ),
                        ),
                      ),
                    const Spacer(),
                    Text(
                      course.code,
                      style: const TextStyle(fontSize: 11, fontFamily: 'monospace', color: Color(0xFF64748B)),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Text(
                  course.title,
                  style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    const Icon(Icons.school, size: 13, color: Color(0xFF64748B)),
                    const SizedBox(width: 4),
                    Expanded(
                      child: Text(
                        '${course.instituteName} • ${course.city}',
                        style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8)),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Next: ${course.nextBatchDate}',
                          style: const TextStyle(fontSize: 11, color: Color(0xFF34D399), fontWeight: FontWeight.bold),
                        ),
                        Text(
                          '${course.availableSeats} seats left',
                          style: TextStyle(
                            fontSize: 10,
                            color: hasFewSeats ? const Color(0xFFF59E0B) : const Color(0xFF64748B),
                            fontWeight: hasFewSeats ? FontWeight.bold : FontWeight.normal,
                          ),
                        ),
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Text(
                          '₹${course.basePrice.toInt()}',
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: Colors.white,
                          ),
                        ),
                        const Text(
                          '100% Escrow Shield',
                          style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF00E5FF)),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}