import 'package:flutter/material.dart';

class ForumTopic {
  final String id;
  final String title;
  final String author;
  final String authorRank;
  final String indosNumber;
  final String category;
  final String snippet;
  final int replyCount;
  int upvotes;
  bool isUpvoted;
  final String timeAgo;
  final bool isSticky;

  ForumTopic({
    required this.id,
    required this.title,
    required this.author,
    required this.authorRank,
    required this.indosNumber,
    required this.category,
    required this.snippet,
    required this.replyCount,
    required this.upvotes,
    this.isUpvoted = false,
    required this.timeAgo,
    this.isSticky = false,
  });
}

class CommunityScreen extends StatefulWidget {
  const CommunityScreen({super.key});

  @override
  State<CommunityScreen> createState() => _CommunityScreenState();
}

class _CommunityScreenState extends State<CommunityScreen> {
  String _selectedCategory = 'ALL';
  String _searchQuery = '';

  final List<ForumTopic> _topics = [
    ForumTopic(
      id: 'topic-1',
      title: 'DG Shipping 2026 MMD Oral Exam Experience — Master (FG) Mumbai',
      author: 'Capt. Siddharth Rao',
      authorRank: 'Master Mariner',
      indosNumber: '09ZM8123',
      category: 'ORAL EXAMS',
      snippet: 'Surveyor focused heavily on MLC 2006 Title 2 Seafarer Employment Agreements, Polar Code carriage requirements, and ECDIS fallback procedures with gyro failure in TSS.',
      replyCount: 42,
      upvotes: 128,
      timeAgo: '2h ago',
      isSticky: true,
    ),
    ForumTopic(
      id: 'topic-2',
      title: 'MEPC 82 CII Rating Calculation Changes for Bulkers & Tankers',
      author: 'Vikramaditya Bose',
      authorRank: 'Chief Engineer',
      indosNumber: '14EM2940',
      category: 'STCW & IMO',
      snippet: 'Correction factors for ice-classed vessels and boiler fuel deduction formulas are being updated. Here is a breakdown of the new calculation spreadsheet.',
      replyCount: 29,
      upvotes: 84,
      timeAgo: '5h ago',
    ),
    ForumTopic(
      id: 'topic-3',
      title: 'High Voltage Safety (HV) Simulator Training — AMET vs HIMT Chennai',
      author: 'Rohan Deshmukh',
      authorRank: 'ETO (Electro-Technical Officer)',
      indosNumber: '19ET4401',
      category: 'ACADEMIES',
      snippet: 'Looking for reviews on the 6.6kV breaker maintenance simulator practical sessions. Does HIMT include vacuum interrupter testing in their 5-day module?',
      replyCount: 16,
      upvotes: 39,
      timeAgo: '1d ago',
    ),
    ForumTopic(
      id: 'topic-4',
      title: 'DP-2 Dynamic Positioning Joystick Failure Protocols in 3m Swell',
      author: 'Neil D’Souza',
      authorRank: 'Dynamic Positioning Operator (DPO)',
      indosNumber: '11DP5529',
      category: 'VESSEL OPS',
      snippet: 'Case study of hydroacoustic position reference drop during bunkering operations in offshore Campos Basin. Sharing bridge telemetry log checklist.',
      replyCount: 19,
      upvotes: 62,
      timeAgo: '2d ago',
    ),
    ForumTopic(
      id: 'topic-5',
      title: 'UK F-Gas Certification vs DG Shipping CoC Endorsement in 2026',
      author: 'Ajit Nair',
      authorRank: '2nd Engineer',
      indosNumber: '16EM7732',
      category: 'STCW & IMO',
      snippet: 'For seafarers transitioning to North Sea offshore wind CTV vessels, what are the exact mutual recognition guidelines between MCA and DGS?',
      replyCount: 11,
      upvotes: 27,
      timeAgo: '3d ago',
    ),
  ];

  final List<String> _categories = [
    'ALL',
    'ORAL EXAMS',
    'STCW & IMO',
    'ACADEMIES',
    'VESSEL OPS',
  ];

  List<ForumTopic> get _filteredTopics {
    return _topics.where((topic) {
      final matchesCategory = _selectedCategory == 'ALL' || topic.category == _selectedCategory;
      final matchesSearch = _searchQuery.isEmpty ||
          topic.title.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          topic.snippet.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          topic.author.toLowerCase().contains(_searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).toList();
  }

  void _openCreateDispatchDialog() {
    final titleController = TextEditingController();
    final bodyController = TextEditingController();
    String category = 'ORAL EXAMS';

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0C1628),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
        side: BorderSide(color: Color(0xFF00E5FF), width: 0.5),
      ),
      builder: (ctx) {
        return StatefulBuilder(
          builder: (context, setModalState) {
            return Padding(
              padding: EdgeInsets.only(
                left: 20,
                right: 20,
                top: 24,
                bottom: MediaQuery.of(ctx).viewInsets.bottom + 24,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              color: const Color(0xFF00E5FF).withAlpha(30),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: const Icon(Icons.forum_outlined, color: Color(0xFF00E5FF), size: 18),
                          ),
                          const SizedBox(width: 10),
                          const Text(
                            'NEW MARITIME DISPATCH',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                              letterSpacing: 1.2,
                            ),
                          ),
                        ],
                      ),
                      IconButton(
                        icon: const Icon(Icons.close, color: Colors.white70, size: 20),
                        onPressed: () => Navigator.pop(ctx),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  DropdownButtonFormField<String>(
                    initialValue: category,
                    dropdownColor: const Color(0xFF0C1628),
                    style: const TextStyle(color: Colors.white, fontSize: 13),
                    decoration: InputDecoration(
                      labelText: 'CATEGORY',
                      labelStyle: const TextStyle(color: Color(0xFF00E5FF), fontSize: 11, letterSpacing: 1),
                      filled: true,
                      fillColor: const Color(0xFF070D18),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: const BorderSide(color: Color(0xFF1E293B)),
                      ),
                    ),
                    items: ['ORAL EXAMS', 'STCW & IMO', 'ACADEMIES', 'VESSEL OPS']
                        .map((c) => DropdownMenuItem(value: c, child: Text(c)))
                        .toList(),
                    onChanged: (val) {
                      if (val != null) {
                        setModalState(() => category = val);
                      }
                    },
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: titleController,
                    style: const TextStyle(color: Colors.white, fontSize: 14),
                    decoration: InputDecoration(
                      labelText: 'DISPATCH TITLE',
                      labelStyle: const TextStyle(color: Colors.white60, fontSize: 12),
                      hintText: 'e.g. 2nd Mate Orals Experience Kolkata MMD...',
                      hintStyle: TextStyle(color: Colors.white.withAlpha(50), fontSize: 13),
                      filled: true,
                      fillColor: const Color(0xFF070D18),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: const BorderSide(color: Color(0xFF1E293B)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: bodyController,
                    maxLines: 4,
                    style: const TextStyle(color: Colors.white, fontSize: 13),
                    decoration: InputDecoration(
                      labelText: 'TECHNICAL DETAILS / OBSERVATIONS',
                      labelStyle: const TextStyle(color: Colors.white60, fontSize: 12),
                      hintText: 'Share simulator procedures, questions asked, or regulatory references...',
                      hintStyle: TextStyle(color: Colors.white.withAlpha(50), fontSize: 12),
                      filled: true,
                      fillColor: const Color(0xFF070D18),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: const BorderSide(color: Color(0xFF1E293B)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    height: 44,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF00E5FF),
                        foregroundColor: const Color(0xFF070D18),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                        textStyle: const TextStyle(fontWeight: FontWeight.bold, letterSpacing: 1),
                      ),
                      onPressed: () {
                        if (titleController.text.trim().isEmpty) return;
                        setState(() {
                          _topics.insert(
                            0,
                            ForumTopic(
                              id: 'topic-${DateTime.now().millisecondsSinceEpoch}',
                              title: titleController.text.trim(),
                              author: 'You (Logged Officer)',
                              authorRank: 'Officer of the Watch',
                              indosNumber: '24IN9999',
                              category: category,
                              snippet: bodyController.text.trim().isNotEmpty
                                  ? bodyController.text.trim()
                                  : 'No additional details provided.',
                              replyCount: 0,
                              upvotes: 1,
                              isUpvoted: true,
                              timeAgo: 'Just now',
                            ),
                          );
                        });
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Dispatch published to SeaFu Maritime Community.'),
                            backgroundColor: Color(0xFF00E5FF),
                          ),
                        );
                      },
                      child: const Text('PUBLISH DISPATCH'),
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0C1628),
        elevation: 0,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'MARITIME FORUM & PEERS',
              style: TextStyle(
                color: Colors.white,
                fontSize: 15,
                fontWeight: FontWeight.bold,
                letterSpacing: 1.1,
              ),
            ),
            Row(
              children: [
                Container(
                  width: 6,
                  height: 6,
                  decoration: const BoxDecoration(
                    color: Color(0xFF10B981),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 6),
                const Text(
                  '1,482 Officers & Cadets Active',
                  style: TextStyle(color: Color(0xFF10B981), fontSize: 11),
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.add_comment_outlined, color: Color(0xFF00E5FF)),
            onPressed: _openCreateDispatchDialog,
            tooltip: 'New Maritime Dispatch',
          ),
        ],
      ),
      body: Column(
        children: [
          // Search & Filter header
          Container(
            padding: const EdgeInsets.all(12),
            color: const Color(0xFF0C1628),
            child: Column(
              children: [
                TextField(
                  onChanged: (val) => setState(() => _searchQuery = val),
                  style: const TextStyle(color: Colors.white, fontSize: 13),
                  decoration: InputDecoration(
                    hintText: 'Search orals, STCW circulars, MMD topics...',
                    hintStyle: TextStyle(color: Colors.white.withAlpha(80), fontSize: 13),
                    prefixIcon: const Icon(Icons.search, color: Color(0xFF00E5FF), size: 18),
                    filled: true,
                    fillColor: const Color(0xFF070D18),
                    contentPadding: const EdgeInsets.symmetric(vertical: 0, horizontal: 12),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide: const BorderSide(color: Color(0xFF1E293B)),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide: const BorderSide(color: Color(0xFF1E293B)),
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: _categories.map((cat) {
                      final isSelected = _selectedCategory == cat;
                      return Padding(
                        padding: const EdgeInsets.only(right: 6),
                        child: ChoiceChip(
                          label: Text(
                            cat,
                            style: TextStyle(
                              color: isSelected ? const Color(0xFF070D18) : Colors.white70,
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              letterSpacing: 0.8,
                            ),
                          ),
                          selected: isSelected,
                          selectedColor: const Color(0xFF00E5FF),
                          backgroundColor: const Color(0xFF070D18),
                          side: BorderSide(
                            color: isSelected ? const Color(0xFF00E5FF) : const Color(0xFF1E293B),
                          ),
                          onSelected: (_) => setState(() => _selectedCategory = cat),
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          ),
          // Topic list
          Expanded(
            child: _filteredTopics.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.forum_outlined, size: 48, color: Colors.white.withAlpha(40)),
                        const SizedBox(height: 12),
                        const Text(
                          'No dispatches found in this channel.',
                          style: TextStyle(color: Colors.white54, fontSize: 13),
                        ),
                      ],
                    ),
                  )
                : ListView.separated(
                    padding: const EdgeInsets.all(12),
                    itemCount: _filteredTopics.length,
                    separatorBuilder: (context, index) => const SizedBox(height: 10),
                    itemBuilder: (context, index) {
                      final topic = _filteredTopics[index];
                      return Container(
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0C1628),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(
                            color: topic.isSticky
                                ? const Color(0xFF00E5FF).withAlpha(100)
                                : const Color(0xFF1E293B),
                          ),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    if (topic.isSticky) ...[
                                      Container(
                                        padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                                        decoration: BoxDecoration(
                                          color: const Color(0xFF00E5FF).withAlpha(30),
                                          borderRadius: BorderRadius.circular(4),
                                        ),
                                        child: const Row(
                                          children: [
                                            Icon(Icons.push_pin, color: Color(0xFF00E5FF), size: 10),
                                            SizedBox(width: 3),
                                            Text(
                                              'PINNED',
                                              style: TextStyle(
                                                color: Color(0xFF00E5FF),
                                                fontSize: 9,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      const SizedBox(width: 6),
                                    ],
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFF1E293B),
                                        borderRadius: BorderRadius.circular(4),
                                      ),
                                      child: Text(
                                        topic.category,
                                        style: const TextStyle(
                                          color: Color(0xFF94A3B8),
                                          fontSize: 9,
                                          fontWeight: FontWeight.bold,
                                          letterSpacing: 0.8,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Text(
                                  topic.timeAgo,
                                  style: const TextStyle(color: Colors.white38, fontSize: 10),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              topic.title,
                              style: const TextStyle(
                                color: Colors.white,
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                height: 1.3,
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              topic.snippet,
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: Colors.white.withAlpha(180), fontSize: 12, height: 1.4),
                            ),
                            const SizedBox(height: 12),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    const CircleAvatar(
                                      radius: 10,
                                      backgroundColor: Color(0xFF1E293B),
                                      child: Icon(Icons.person, size: 12, color: Color(0xFF00E5FF)),
                                    ),
                                    const SizedBox(width: 6),
                                    Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          topic.author,
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 11,
                                            fontWeight: FontWeight.w600,
                                          ),
                                        ),
                                        Text(
                                          '${topic.authorRank} • INDoS ${topic.indosNumber}',
                                          style: const TextStyle(
                                            color: Color(0xFF64748B),
                                            fontSize: 9,
                                            fontFamily: 'monospace',
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                Row(
                                  children: [
                                    InkWell(
                                      onTap: () {
                                        setState(() {
                                          if (topic.isUpvoted) {
                                            topic.upvotes--;
                                            topic.isUpvoted = false;
                                          } else {
                                            topic.upvotes++;
                                            topic.isUpvoted = true;
                                          }
                                        });
                                      },
                                      borderRadius: BorderRadius.circular(6),
                                      child: Container(
                                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                        decoration: BoxDecoration(
                                          color: topic.isUpvoted
                                              ? const Color(0xFF00E5FF).withAlpha(40)
                                              : const Color(0xFF070D18),
                                          borderRadius: BorderRadius.circular(6),
                                          border: Border.all(
                                            color: topic.isUpvoted
                                                ? const Color(0xFF00E5FF)
                                                : const Color(0xFF1E293B),
                                          ),
                                        ),
                                        child: Row(
                                          children: [
                                            Icon(
                                              topic.isUpvoted ? Icons.thumb_up : Icons.thumb_up_outlined,
                                              size: 12,
                                              color: topic.isUpvoted ? const Color(0xFF00E5FF) : Colors.white70,
                                            ),
                                            const SizedBox(width: 4),
                                            Text(
                                              '${topic.upvotes}',
                                              style: TextStyle(
                                                color: topic.isUpvoted ? const Color(0xFF00E5FF) : Colors.white70,
                                                fontSize: 11,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                    Row(
                                      children: [
                                        const Icon(Icons.chat_bubble_outline, size: 12, color: Colors.white54),
                                        const SizedBox(width: 4),
                                        Text(
                                          '${topic.replyCount}',
                                          style: const TextStyle(color: Colors.white70, fontSize: 11),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: const Color(0xFF00E5FF),
        foregroundColor: const Color(0xFF070D18),
        onPressed: _openCreateDispatchDialog,
        icon: const Icon(Icons.add, size: 18),
        label: const Text(
          'NEW DISPATCH',
          style: TextStyle(fontWeight: FontWeight.bold, letterSpacing: 0.8, fontSize: 12),
        ),
      ),
    );
  }
}
