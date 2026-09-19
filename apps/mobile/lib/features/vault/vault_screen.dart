import 'package:flutter/material.dart';
import 'psc_scan_deck_screen.dart';

class MaritimeDocument {
  final String id;
  final String title;
  final String docType;
  final String documentNumber;
  final String issuingAuthority;
  final String issueDate;
  final String expiryDate;
  final String ledgerHash;
  final String status; // VALID, EXPIRING_SOON, LIFETIME
  final String category; // STCW, SIMULATOR, MEDICAL, FLAG

  const MaritimeDocument({
    required this.id,
    required this.title,
    required this.docType,
    required this.documentNumber,
    required this.issuingAuthority,
    required this.issueDate,
    required this.expiryDate,
    required this.ledgerHash,
    required this.status,
    required this.category,
  });
}

class VaultScreen extends StatefulWidget {
  const VaultScreen({super.key});

  @override
  State<VaultScreen> createState() => _VaultScreenState();
}

class _VaultScreenState extends State<VaultScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  String _selectedCategory = 'ALL';
  String _searchQuery = '';

  final List<MaritimeDocument> _documents = const [
    MaritimeDocument(
      id: 'DOC-001',
      title: 'STCW Certificate of Competency (CoC) · Master FG',
      docType: 'CoC (Master Mariner)',
      documentNumber: 'IND-95-2018-00431',
      issuingAuthority: 'Mercantile Marine Dept, DG Shipping',
      issueDate: '12 Jan 2022',
      expiryDate: '11 Jan 2027',
      ledgerHash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      status: 'VALID',
      category: 'STCW',
    ),
    MaritimeDocument(
      id: 'DOC-002',
      title: 'ECDIS Simulator & Electronic Chart Display (A-II/1)',
      docType: 'Simulator Certification',
      documentNumber: 'TMI-SIM-2023-88412',
      issuingAuthority: 'Tolani Maritime Institute (TMI Pune)',
      issueDate: '15 Nov 2023',
      expiryDate: '14 Nov 2026',
      ledgerHash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      status: 'VALID',
      category: 'SIMULATOR',
    ),
    MaritimeDocument(
      id: 'DOC-003',
      title: 'Advanced Fire Fighting (AFF) · STCW A-VI/3',
      docType: 'Mandatory Safety',
      documentNumber: 'AFF-AMET-2021-9921',
      issuingAuthority: 'AMET University Chennai',
      issueDate: '10 Aug 2021',
      expiryDate: '09 Aug 2026',
      ledgerHash: 'sha256:ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb',
      status: 'EXPIRING_SOON',
      category: 'STCW',
    ),
    MaritimeDocument(
      id: 'DOC-004',
      title: 'Continuous Discharge Certificate (CDC)',
      docType: 'Flag Discharge Book',
      documentNumber: 'MUM-149028',
      issuingAuthority: 'Shipping Master Mumbai',
      issueDate: '04 Mar 2018',
      expiryDate: '03 Mar 2038',
      ledgerHash: 'sha256:ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
      status: 'VALID',
      category: 'FLAG',
    ),
    MaritimeDocument(
      id: 'DOC-005',
      title: 'ENG1 Maritime Medical Fitness Certificate',
      docType: 'Statutory Health Clearance',
      documentNumber: 'MED-ENG1-2024-512',
      issuingAuthority: 'Approved DG Maritime Medical Examiner',
      issueDate: '05 Feb 2024',
      expiryDate: '04 Feb 2026',
      ledgerHash: 'sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
      status: 'VALID',
      category: 'MEDICAL',
    ),
    MaritimeDocument(
      id: 'DOC-006',
      title: 'GMDSS General Operator Certificate (GOC)',
      docType: 'Radio Telecommunications',
      documentNumber: 'GOC-WPC-89102',
      issuingAuthority: 'Ministry of Communications (WPC Wing)',
      issueDate: '20 Sep 2020',
      expiryDate: '19 Sep 2025',
      ledgerHash: 'sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d',
      status: 'EXPIRING_SOON',
      category: 'SIMULATOR',
    ),
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  List<MaritimeDocument> get _filteredDocuments {
    return _documents.where((doc) {
      final matchesCat = _selectedCategory == 'ALL' ||
          (_selectedCategory == 'EXPIRING_SOON' ? doc.status == 'EXPIRING_SOON' : doc.category == _selectedCategory);
      final matchesSearch = doc.title.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          doc.documentNumber.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          doc.issuingAuthority.toLowerCase().contains(_searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    }).toList();
  }

  void _showDocumentDetail(MaritimeDocument doc) {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0C1628),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) {
        return Container(
          padding: const EdgeInsets.all(20),
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.85),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(
                    color: const Color(0xFF1E293B),
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0369A1).withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFF0284C7).withValues(alpha: 0.4)),
                    ),
                    child: const Icon(Icons.verified_user, color: Color(0xFF00E5FF), size: 28),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          doc.title,
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          doc.docType,
                          style: const TextStyle(fontSize: 12, color: Color(0xFF38BDF8)),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),

              // Cryptographic Hash Box
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFF070D18),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFF1E293B)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('ECDSA SHA-256 LEDGER SIGNATURE', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Colors.grey)),
                        Text('HSM LEVEL 3', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF34D399), fontWeight: FontWeight.bold)),
                      ],
                    ),
                    const SizedBox(height: 6),
                    SelectableText(
                      doc.ledgerHash,
                      style: const TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFF94A3B8)),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 16),

              // Document Metadata
              Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFF091122),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFF1E293B)),
                ),
                child: Column(
                  children: [
                    _buildMetaRow('Certificate Number', doc.documentNumber, isValueCyan: true),
                    const Divider(color: Color(0xFF1E293B)),
                    _buildMetaRow('Issuing Authority', doc.issuingAuthority),
                    const Divider(color: Color(0xFF1E293B)),
                    _buildMetaRow('Date of Issue', doc.issueDate),
                    const Divider(color: Color(0xFF1E293B)),
                    _buildMetaRow('Valid Until', doc.expiryDate, isValueHighlight: doc.status == 'EXPIRING_SOON'),
                    const Divider(color: Color(0xFF1E293B)),
                    _buildMetaRow('DG e-Samudra Link', 'VERIFIED · ACTIVE', isValueEmerald: true),
                  ],
                ),
              ),

              const Spacer(),

              Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      style: OutlinedButton.styleFrom(
                        foregroundColor: const Color(0xFF00E5FF),
                        side: const BorderSide(color: Color(0xFF0284C7)),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                      onPressed: () {
                        Navigator.pop(ctx);
                        _tabController.animateTo(1);
                      },
                      icon: const Icon(Icons.qr_code_2, size: 18),
                      label: const Text('Present for PSC', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: ElevatedButton.icon(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF0284C7),
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                      onPressed: () {
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text('Offline cryptographic dossier cached for ${doc.documentNumber}'),
                            backgroundColor: const Color(0xFF059669),
                          ),
                        );
                      },
                      icon: const Icon(Icons.download_done, size: 18),
                      label: const Text('Download PDF', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
            ],
          ),
        );
      },
    );
  }

  void _showAddDocumentSheet() {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0C1628),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) {
        return Padding(
          padding: EdgeInsets.only(
            left: 20,
            right: 20,
            top: 20,
            bottom: MediaQuery.of(ctx).viewInsets.bottom + 20,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: const Color(0xFF1E293B),
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                'Upload Maritime Document',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white),
              ),
              const SizedBox(height: 4),
              const Text(
                'Upload STCW, CoC, or Medical certificates for instant OCR & DG Shipping verification.',
                style: TextStyle(fontSize: 12, color: Color(0xFF94A3B8)),
              ),
              const SizedBox(height: 20),

              // Upload Action Buttons
              Row(
                children: [
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 20),
                      decoration: BoxDecoration(
                        color: const Color(0xFF070D18),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFF0284C7).withValues(alpha: 0.4)),
                      ),
                      child: const Column(
                        children: [
                          Icon(Icons.camera_alt, color: Color(0xFF00E5FF), size: 32),
                          SizedBox(height: 8),
                          Text('Camera Scanner', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white)),
                          SizedBox(height: 2),
                          Text('Auto-crop & OCR', style: TextStyle(fontSize: 10, color: Colors.grey)),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 20),
                      decoration: BoxDecoration(
                        color: const Color(0xFF070D18),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFF1E293B)),
                      ),
                      child: const Column(
                        children: [
                          Icon(Icons.picture_as_pdf, color: Color(0xFF38BDF8), size: 32),
                          SizedBox(height: 8),
                          Text('Upload PDF', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white)),
                          SizedBox(height: 2),
                          Text('Digital Digilocker/DGS', style: TextStyle(fontSize: 10, color: Colors.grey)),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),

              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF0284C7),
                  foregroundColor: Colors.white,
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onPressed: () {
                  Navigator.pop(ctx);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Document uploaded. DG e-Samudra validation underway...'),
                      backgroundColor: Color(0xFF0284C7),
                    ),
                  );
                },
                child: const Text('Proceed with OCR Verification', style: TextStyle(fontWeight: FontWeight.bold)),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildMetaRow(String label, String value, {bool isValueCyan = false, bool isValueHighlight = false, bool isValueEmerald = false}) {
    Color valColor = Colors.white;
    if (isValueCyan) valColor = const Color(0xFF00E5FF);
    if (isValueHighlight) valColor = const Color(0xFFFBBF24);
    if (isValueEmerald) valColor = const Color(0xFF34D399);

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8))),
          Text(
            value,
            style: TextStyle(fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: valColor),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFF0F2E3A),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: const Color(0xFF00E5FF).withValues(alpha: 0.3)),
              ),
              child: const Icon(Icons.shield_outlined, color: Color(0xFF00E5FF), size: 18),
            ),
            const SizedBox(width: 10),
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'CERTIFICATE VAULT',
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 0.5),
                ),
                Text(
                  'Cryptographic Maritime Passports & PSC Handshake',
                  style: TextStyle(fontSize: 10, color: Color(0xFF94A3B8)),
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            tooltip: 'Add Certificate',
            icon: const Icon(Icons.add_circle_outline, color: Color(0xFF00E5FF)),
            onPressed: _showAddDocumentSheet,
          ),
        ],
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: const Color(0xFF00E5FF),
          indicatorWeight: 3,
          labelColor: const Color(0xFF00E5FF),
          unselectedLabelColor: const Color(0xFF94A3B8),
          tabs: const [
            Tab(
              icon: Icon(Icons.folder_special_outlined, size: 18),
              text: 'My Documents (6)',
            ),
            Tab(
              icon: Icon(Icons.qr_code_scanner, size: 18),
              text: 'PSC Scan Deck',
            ),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          // TAB 1: Document Vault
          _buildDocumentVaultTab(),

          // TAB 2: PSC Scan Deck (Offline Handshake)
          PscScanDeckScreen(
            onClose: () => _tabController.animateTo(0),
          ),
        ],
      ),
    );
  }

  Widget _buildDocumentVaultTab() {
    final docs = _filteredDocuments;

    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Officer Identity Header Banner
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFF071D33), Color(0xFF09162A)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              border: Border(
                bottom: BorderSide(color: const Color(0xFF00E5FF).withValues(alpha: 0.2)),
              ),
            ),
            child: Row(
              children: [
                Container(
                  width: 50,
                  height: 50,
                  decoration: BoxDecoration(
                    color: const Color(0xFF0369A1).withValues(alpha: 0.2),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: const Color(0xFF00E5FF), width: 1.5),
                  ),
                  child: const Center(
                    child: Icon(Icons.person, color: Color(0xFF00E5FF), size: 28),
                  ),
                ),
                const SizedBox(width: 14),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            'Capt. Rajesh Sharma',
                            style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
                          ),
                          SizedBox(width: 6),
                          Icon(Icons.verified, size: 14, color: Color(0xFF34D399)),
                        ],
                      ),
                      SizedBox(height: 2),
                      Text(
                        'INDoS: 08ZL9431 · CDC: MUM-149028',
                        style: TextStyle(fontSize: 11, fontFamily: 'monospace', color: Color(0xFF00E5FF)),
                      ),
                      SizedBox(height: 2),
                      Text(
                        'DG e-Samudra Synchronized · 6 Valid Statutory Credentials',
                        style: TextStyle(fontSize: 10, color: Color(0xFF94A3B8)),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Search Bar
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              onChanged: (val) {
                setState(() {
                  _searchQuery = val;
                });
              },
              style: const TextStyle(color: Colors.white, fontSize: 13),
              decoration: InputDecoration(
                hintText: 'Search by certificate title, number or academy...',
                hintStyle: const TextStyle(color: Color(0xFF64748B), fontSize: 12),
                prefixIcon: const Icon(Icons.search, color: Color(0xFF00E5FF), size: 20),
                suffixIcon: _searchQuery.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.close, color: Colors.grey, size: 16),
                        onPressed: () => setState(() => _searchQuery = ''),
                      )
                    : null,
                filled: true,
                fillColor: const Color(0xFF0C1628),
                contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                  borderSide: const BorderSide(color: Color(0xFF1E293B)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                  borderSide: const BorderSide(color: Color(0xFF1E293B)),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                  borderSide: const BorderSide(color: Color(0xFF00E5FF)),
                ),
              ),
            ),
          ),

          // Category Chips
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                _buildFilterChip('ALL', 'All (6)'),
                _buildFilterChip('STCW', 'STCW Mandatory (2)'),
                _buildFilterChip('SIMULATOR', 'Simulators & Radio (2)'),
                _buildFilterChip('FLAG', 'CDC & Flag Book (1)'),
                _buildFilterChip('MEDICAL', 'Medical Clearance (1)'),
                _buildFilterChip('EXPIRING_SOON', 'Expiring Soon (2)'),
              ],
            ),
          ),

          const SizedBox(height: 12),

          // Document Cards List
          if (docs.isEmpty)
            Container(
              padding: const EdgeInsets.all(40),
              alignment: Alignment.center,
              child: const Column(
                children: [
                  Icon(Icons.folder_off_outlined, size: 48, color: Color(0xFF334155)),
                  SizedBox(height: 12),
                  Text('No matching certificates found', style: TextStyle(fontSize: 14, color: Color(0xFF94A3B8))),
                ],
              ),
            )
          else
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              itemCount: docs.length,
              itemBuilder: (context, index) {
                final doc = docs[index];
                return _buildDocumentCard(doc);
              },
            ),

          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _buildFilterChip(String key, String label) {
    final isSelected = _selectedCategory == key;
    return Padding(
      padding: const EdgeInsets.only(right: 8),
      child: ChoiceChip(
        label: Text(label),
        labelStyle: TextStyle(
          fontSize: 11,
          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
          color: isSelected ? const Color(0xFF070D18) : const Color(0xFF94A3B8),
        ),
        selected: isSelected,
        selectedColor: const Color(0xFF00E5FF),
        backgroundColor: const Color(0xFF0C1628),
        side: BorderSide(
          color: isSelected ? const Color(0xFF00E5FF) : const Color(0xFF1E293B),
        ),
        onSelected: (val) {
          setState(() {
            _selectedCategory = key;
          });
        },
      ),
    );
  }

  Widget _buildDocumentCard(MaritimeDocument doc) {
    final isExpiring = doc.status == 'EXPIRING_SOON';

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: const Color(0xFF0C1628),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: isExpiring ? const Color(0xFFD97706).withValues(alpha: 0.4) : const Color(0xFF1E293B),
        ),
      ),
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: () => _showDocumentDetail(doc),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: isExpiring
                          ? const Color(0xFF451A03).withValues(alpha: 0.6)
                          : const Color(0xFF0F2E3A),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Icon(
                      isExpiring ? Icons.alarm : Icons.verified_user,
                      color: isExpiring ? const Color(0xFFFBBF24) : const Color(0xFF00E5FF),
                      size: 20,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          doc.title,
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          doc.issuingAuthority,
                          style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8)),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                    decoration: BoxDecoration(
                      color: isExpiring ? const Color(0xFF451A03) : const Color(0xFF064E3B),
                      borderRadius: BorderRadius.circular(6),
                    ),
                    child: Text(
                      isExpiring ? 'EXPIRING SOON' : 'VALID',
                      style: TextStyle(
                        fontSize: 9,
                        fontFamily: 'monospace',
                        fontWeight: FontWeight.bold,
                        color: isExpiring ? const Color(0xFFFBBF24) : const Color(0xFF34D399),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),

              // Doc Number & Expiry
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                decoration: BoxDecoration(
                  color: const Color(0xFF070D18),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        const Text('CERT: ', style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey)),
                        Text(
                          doc.documentNumber,
                          style: const TextStyle(fontSize: 11, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF00E5FF)),
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        const Text('EXPIRY: ', style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey)),
                        Text(
                          doc.expiryDate,
                          style: TextStyle(
                            fontSize: 11,
                            fontFamily: 'monospace',
                            fontWeight: FontWeight.bold,
                            color: isExpiring ? const Color(0xFFFBBF24) : Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 10),

              // Bottom row with ledger stamp
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      const Icon(Icons.lock_outline, size: 12, color: Color(0xFF34D399)),
                      const SizedBox(width: 4),
                      Text(
                        'HSM Seal: ${doc.ledgerHash.substring(0, 16)}...',
                        style: const TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF64748B)),
                      ),
                    ],
                  ),
                  const Text(
                    'Details →',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF38BDF8)),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
