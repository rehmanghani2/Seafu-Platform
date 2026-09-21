import 'package:flutter/material.dart';

class MaritimeJob {
  final String id;
  final String title;
  final String company;
  final String rank;
  final String vesselType;
  final String salary;
  final String port;
  final String contract;
  final List<String> stcwRequired;
  final bool isApplied;

  const MaritimeJob({
    required this.id,
    required this.title,
    required this.company,
    required this.rank,
    required this.vesselType,
    required this.salary,
    required this.port,
    required this.contract,
    required this.stcwRequired,
    this.isApplied = false,
  });
}

class JobsScreen extends StatefulWidget {
  const JobsScreen({super.key});

  @override
  State<JobsScreen> createState() => _JobsScreenState();
}

class _JobsScreenState extends State<JobsScreen> {
  String _selectedFilter = 'ALL';
  String _searchQuery = '';

  final List<MaritimeJob> _allJobs = [
    const MaritimeJob(
      id: 'job-1',
      title: 'Chief Mate FG — 15,500 TEU Container Fleet',
      company: 'Maersk Line Fleet Management',
      rank: 'Chief Mate',
      vesselType: 'Ultra Large Container Vessel (ULCV)',
      salary: '\$7,200 / mo',
      port: 'Felixstowe (GBR)',
      contract: '4 Months on / 3 Months off',
      stcwRequired: ['CoC STCW II/2', 'BRM Simulator', 'ECDIS Type Specific'],
    ),
    const MaritimeJob(
      id: 'job-2',
      title: 'Second Engineer (Motor) — 174,000 cbm LNG Carrier',
      company: 'Anglo-Eastern Ship Management',
      rank: 'Second Engineer',
      vesselType: 'LNG Membrane Carrier (ME-GA)',
      salary: '\$8,500 / mo',
      port: 'Ras Laffan (QAT)',
      contract: '3 Months on / 3 Months off',
      stcwRequired: ['Class 2 Motor CoC', 'Advanced Gas Tanker (STCW V/1-2)', 'High Voltage'],
    ),
    const MaritimeJob(
      id: 'job-3',
      title: 'Electro-Technical Officer (ETO) — DP2 Offshore PSV',
      company: 'Synergy Marine Group',
      rank: 'ETO',
      vesselType: 'DP2 Platform Supply Vessel',
      salary: '\$6,400 / mo',
      port: 'Singapore (SGP)',
      contract: '2 Months on / 2 Months off',
      stcwRequired: ['ETO CoC STCW III/6', 'DP Maintenance', 'High Voltage Switchgear'],
    ),
    const MaritimeJob(
      id: 'job-4',
      title: 'Safety Superintendent / Vetting Auditor (Shore)',
      company: 'V.Ships Maritime HQ',
      rank: 'Shore Superintendent',
      vesselType: 'Chemical / Product Tankers',
      salary: '\$5,500 / mo',
      port: 'Mumbai (IND)',
      contract: 'Permanent Shore Position',
      stcwRequired: ['Master Mariner FG', 'SIRE 2.0 Lead Auditor', 'MLC 2006 Inspector'],
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final filtered = _allJobs.where((j) {
      if (_selectedFilter == 'DECK' && !j.rank.contains('Mate') && !j.rank.contains('Master')) {
        return false;
      }
      if (_selectedFilter == 'ENGINE' && !j.rank.contains('Engineer') && !j.rank.contains('ETO')) {
        return false;
      }
      if (_selectedFilter == 'SHORE' && !j.rank.contains('Shore')) {
        return false;
      }
      if (_searchQuery.isNotEmpty) {
        final q = _searchQuery.toLowerCase();
        return j.title.toLowerCase().contains(q) ||
            j.company.toLowerCase().contains(q) ||
            j.vesselType.toLowerCase().contains(q) ||
            j.rank.toLowerCase().contains(q);
      }
      return true;
    }).toList();

    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0C1628),
        elevation: 0,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text(
              'Maritime Vacancies',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
            ),
            Text(
              'DGS Approved Manning & Fleet Openings',
              style: TextStyle(fontSize: 10, color: Color(0xFF00E5FF), fontFamily: 'monospace'),
            ),
          ],
        ),
      ),
      body: Column(
        children: [
          // Search & Filter Header
          Container(
            padding: const EdgeInsets.all(12),
            color: const Color(0xFF0C1628),
            child: Column(
              children: [
                TextField(
                  onChanged: (val) => setState(() => _searchQuery = val),
                  style: const TextStyle(fontSize: 12, color: Colors.white),
                  decoration: InputDecoration(
                    hintText: 'Search rank, vessel, company, port...',
                    hintStyle: const TextStyle(fontSize: 12, color: Colors.white38),
                    prefixIcon: const Icon(Icons.search, size: 18, color: Colors.white54),
                    filled: true,
                    fillColor: const Color(0xFF070F1E),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                      borderSide: const BorderSide(color: Color(0xFF1E3A5F)),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                      borderSide: const BorderSide(color: Color(0xFF1E3A5F)),
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      _buildFilterChip('ALL', 'All Openings'),
                      const SizedBox(width: 8),
                      _buildFilterChip('DECK', 'Deck Officers'),
                      const SizedBox(width: 8),
                      _buildFilterChip('ENGINE', 'Engine & ETO'),
                      const SizedBox(width: 8),
                      _buildFilterChip('SHORE', 'Shore Roles'),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Job Listings
          Expanded(
            child: filtered.isEmpty
                ? const Center(
                    child: Text(
                      'No matching maritime vacancies found.',
                      style: TextStyle(color: Colors.white38, fontSize: 13),
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.all(12),
                    itemCount: filtered.length,
                    itemBuilder: (context, index) {
                      final job = filtered[index];
                      return _buildJobCard(job);
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterChip(String key, String label) {
    final isSelected = _selectedFilter == key;
    return GestureDetector(
      onTap: () => setState(() => _selectedFilter = key),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFF0369A1) : const Color(0xFF070F1E),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isSelected ? const Color(0xFF00E5FF) : const Color(0xFF1E3A5F),
          ),
        ),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isSelected ? Colors.white : Colors.white60,
          ),
        ),
      ),
    );
  }

  Widget _buildJobCard(MaritimeJob job) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0xFF0C1628),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF1E3A5F)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: Text(
                  job.title,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFF052E16),
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: const Color(0xFF16A34A)),
                ),
                child: Text(
                  job.salary,
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF4ADE80),
                    fontFamily: 'monospace',
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            job.company,
            style: const TextStyle(fontSize: 12, color: Color(0xFF00E5FF), fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              const Icon(Icons.directions_boat, size: 14, color: Colors.white54),
              const SizedBox(width: 4),
              Text(
                job.vesselType,
                style: const TextStyle(fontSize: 11, color: Colors.white70),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              const Icon(Icons.location_on, size: 14, color: Colors.white54),
              const SizedBox(width: 4),
              Text(
                'Port: ${job.port}  •  ${job.contract}',
                style: const TextStyle(fontSize: 11, color: Colors.white54),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Wrap(
            spacing: 6,
            runSpacing: 4,
            children: job.stcwRequired.map((stcw) {
              return Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(
                  color: const Color(0xFF070F1E),
                  borderRadius: BorderRadius.circular(4),
                  border: Border.all(color: const Color(0xFF1E3A5F)),
                ),
                child: Text(
                  stcw,
                  style: const TextStyle(fontSize: 9, color: Colors.white70, fontFamily: 'monospace'),
                ),
              );
            }).toList(),
          ),
          const SizedBox(height: 12),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF0284C7),
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 10),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
              ),
              onPressed: () => _showApplyModal(job),
              child: const Text(
                '1-Tap Apply with INDoS / CDC',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _showApplyModal(MaritimeJob job) {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0C1628),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (ctx) {
        return Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Confirm Maritime Application',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, color: Colors.white54),
                    onPressed: () => Navigator.pop(ctx),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                job.title,
                style: const TextStyle(fontSize: 13, color: Color(0xFF00E5FF), fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 14),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFF070F1E),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFF1E3A5F)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text('Verified Candidate Profile:', style: TextStyle(fontSize: 11, color: Colors.white54)),
                    SizedBox(height: 4),
                    Text('Capt. Rajesh Kumar (SF-99412)', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white)),
                    SizedBox(height: 2),
                    Text('INDoS: 04NL8821  •  CDC: C-9842109', style: TextStyle(fontSize: 11, color: Colors.white70, fontFamily: 'monospace')),
                    SizedBox(height: 2),
                    Text('PEME Medical: Valid Fit-for-Sea (STCW I/9)', style: TextStyle(fontSize: 11, color: Color(0xFF4ADE80))),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF059669),
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  ),
                  onPressed: () {
                    Navigator.pop(ctx);
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        backgroundColor: const Color(0xFF059669),
                        content: Text('Application dispatched to ${job.company} with SHA-256 seal!'),
                      ),
                    );
                  },
                  child: const Text('Transmit Certified Seafarer Dossier', style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
