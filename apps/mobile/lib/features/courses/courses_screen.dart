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

  final List<CourseModel> _allCourses = [
    CourseModel(
      id: 'c1',
      title: 'Personal Survival Techniques (PST)',
      code: 'STCW-PST-01',
      category: 'STCW Basic',
      instituteName: 'Anglo-Eastern Maritime Academy',
      city: 'Mumbai',
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
      instituteName: 'Southern Maritime Institute',
      city: 'Chennai',
      durationDays: 5,
      basePrice: 8500,
      isDgApproved: true,
      nextBatchDate: '25 Sep 2026',
      availableSeats: 6,
    ),
    CourseModel(
      id: 'c3',
      title: 'GMDSS General Operator Certificate (GOC)',
      code: 'STCW-GMDSS-03',
      category: 'Competency',
      instituteName: 'Anglo-Eastern Maritime Academy',
      city: 'Mumbai',
      durationDays: 12,
      basePrice: 28000,
      isDgApproved: true,
      nextBatchDate: '05 Oct 2026',
      availableSeats: 8,
    ),
    CourseModel(
      id: 'c4',
      title: 'Proficiency in Fast Rescue Boats (PFRB)',
      code: 'STCW-PFRB-04',
      category: 'Advanced',
      instituteName: 'Goa Offshore & Safety Center',
      city: 'Goa',
      durationDays: 3,
      basePrice: 11000,
      isDgApproved: true,
      nextBatchDate: '08 Oct 2026',
      availableSeats: 4,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final filtered = _allCourses.where((c) {
      if (_selectedCategory != 'All' && c.category != _selectedCategory) {
        return false;
      }
      if (_searchQuery.isNotEmpty &&
          !c.title.toLowerCase().contains(_searchQuery.toLowerCase()) &&
          !c.code.toLowerCase().contains(_searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    }).toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('? The Seafu ? DG Courses', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFF0369A1),
        foregroundColor: Colors.white,
        elevation: 1,
      ),
      body: Column(
        children: [
          // Search & Filter header
          Container(
            color: Colors.white,
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
            child: Column(
              children: [
                TextField(
                  decoration: InputDecoration(
                    hintText: 'Search courses, codes, STCW modules...',
                    prefixIcon: const Icon(Icons.search, size: 20),
                    filled: true,
                    fillColor: const Color(0xFFF1F5F9),
                    contentPadding: const EdgeInsets.symmetric(vertical: 0, horizontal: 16),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide.none,
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
                    children: ['All', 'STCW Basic', 'Advanced', 'Competency'].map((cat) {
                      final isSelected = _selectedCategory == cat;
                      return Padding(
                        padding: const EdgeInsets.only(right: 8),
                        child: FilterChip(
                          selected: isSelected,
                          label: Text(cat),
                          labelStyle: TextStyle(
                            fontSize: 12,
                            fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                            color: isSelected ? Colors.white : const Color(0xFF334155),
                          ),
                          selectedColor: const Color(0xFF0369A1),
                          checkmarkColor: Colors.white,
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
          const Divider(height: 1),

          // Course Cards List
          Expanded(
            child: filtered.isEmpty
                ? const Center(child: Text('No courses match your criteria'))
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: filtered.length,
                    itemBuilder: (context, index) {
                      final course = filtered[index];
                      return Card(
                        margin: const EdgeInsets.only(bottom: 14),
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                          side: const BorderSide(color: Color(0xFFE2E8F0)),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                                    decoration: BoxDecoration(
                                      color: const Color(0xFFE0F2FE),
                                      borderRadius: BorderRadius.circular(6),
                                    ),
                                    child: Text(
                                      course.category,
                                      style: const TextStyle(
                                        fontSize: 10,
                                        fontWeight: FontWeight.bold,
                                        color: Color(0xFF0369A1),
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 6),
                                  if (course.isDgApproved)
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFFD1FAE5),
                                        borderRadius: BorderRadius.circular(6),
                                      ),
                                      child: const Text(
                                        'DG Approved',
                                        style: TextStyle(
                                          fontSize: 10,
                                          fontWeight: FontWeight.bold,
                                          color: Color(0xFF065F46),
                                        ),
                                      ),
                                    ),
                                  const Spacer(),
                                  Text(
                                    course.code,
                                    style: const TextStyle(fontSize: 11, color: Colors.grey),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 8),
                              Text(
                                course.title,
                                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                '${course.instituteName} ? ${course.city}',
                                style: const TextStyle(fontSize: 12, color: Color(0xFF64748B)),
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
                                        style: const TextStyle(fontSize: 11, color: Color(0xFF047857), fontWeight: FontWeight.w600),
                                      ),
                                      Text(
                                        '${course.availableSeats} seats left',
                                        style: const TextStyle(fontSize: 10, color: Colors.grey),
                                      ),
                                    ],
                                  ),
                                  Text(
                                    'INR ${course.basePrice.toInt()}',
                                    style: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.w900,
                                      color: Color(0xFF0F172A),
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