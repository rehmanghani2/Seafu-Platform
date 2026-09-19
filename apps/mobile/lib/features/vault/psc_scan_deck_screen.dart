import 'package:flutter/material.dart';

class PscScanDeckScreen extends StatefulWidget {
  final VoidCallback? onClose;

  const PscScanDeckScreen({super.key, this.onClose});

  @override
  State<PscScanDeckScreen> createState() => _PscScanDeckScreenState();
}

class _PscScanDeckScreenState extends State<PscScanDeckScreen> {
  bool _isScanLocked = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.white70),
          onPressed: () {
            if (widget.onClose != null) {
              widget.onClose!();
            } else {
              Navigator.of(context).maybePop();
            }
          },
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Text(
                  'PSC SCAN DECK',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Colors.white),
                ),
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1.5),
                  decoration: BoxDecoration(
                    color: const Color(0xFF0F2E3A),
                    borderRadius: BorderRadius.circular(4),
                    border: Border.all(color: const Color(0xFF00E5FF).withValues(alpha: 0.4)),
                  ),
                  child: const Text(
                    'IMO RES.A1052',
                    style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF00E5FF)),
                  ),
                ),
              ],
            ),
            const Text(
              'Port State Control · Offline Handshake Protocol',
              style: TextStyle(fontSize: 10, color: Color(0xFF94A3B8)),
            ),
          ],
        ),
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 12),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFF042F2E),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: const Color(0xFF14B8A6)),
            ),
            child: const Row(
              children: [
                Icon(Icons.wifi_tethering, size: 12, color: Color(0xFF2DD4BF)),
                SizedBox(width: 4),
                Text(
                  'PSC MESH ACTIVE',
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF2DD4BF)),
                ),
              ],
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // PSC Node Info Bar
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              color: const Color(0xFF091122),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Row(
                    children: [
                      Icon(Icons.circle, size: 8, color: Color(0xFF34D399)),
                      SizedBox(width: 6),
                      Text(
                        'PSC NODE: ROTTERDAM-PSC-409',
                        style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFFCBD5E1)),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1.5),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0A2239),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: const Text(
                      'ECDSA SHA-256 HSM',
                      style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF38BDF8)),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 16),
            const Text(
              'Scan Maritime QR or Bridge NFC Token',
              style: TextStyle(fontSize: 11, fontFamily: 'monospace', color: Color(0xFF38BDF8)),
            ),
            const SizedBox(height: 12),

            // Scanner Viewport Box
            Center(
              child: Container(
                width: 280,
                height: 250,
                decoration: BoxDecoration(
                  color: const Color(0xFF0B1528),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFF00E5FF).withValues(alpha: 0.5), width: 1.5),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF00E5FF).withValues(alpha: 0.12),
                      blurRadius: 18,
                      spreadRadius: 2,
                    ),
                  ],
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    if (_isScanLocked)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                        decoration: BoxDecoration(
                          color: const Color(0xFF042F2E),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFF2DD4BF)),
                        ),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(Icons.check_circle, size: 12, color: Color(0xFF2DD4BF)),
                            SizedBox(width: 4),
                            Text(
                              'QR LOCKED · 99.8% FIDELITY',
                              style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFF2DD4BF), fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ),
                    const SizedBox(height: 14),

                    // QR Visual Representation
                    Container(
                      width: 120,
                      height: 120,
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: const Color(0xFF070D18),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFF00E5FF).withValues(alpha: 0.4)),
                      ),
                      child: const Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.qr_code_scanner, size: 68, color: Color(0xFF00E5FF)),
                          SizedBox(height: 4),
                          Text(
                            'DG-eSAMUDRA',
                            style: TextStyle(fontSize: 8, fontFamily: 'monospace', color: Color(0xFF38BDF8), fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 14),
                    const Text(
                      'STCW-A-II/1-2 · ECDSA SIGN VALID',
                      style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFF34D399)),
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(height: 20),

            // Verified Maritime Dossier Card
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: const Color(0xFF0C1628),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFF10B981).withValues(alpha: 0.4)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            const Icon(Icons.verified, size: 16, color: Color(0xFF34D399)),
                            const SizedBox(width: 6),
                            const Text(
                              'VERIFIED MARITIME DOSSIER',
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white),
                            ),
                            const SizedBox(width: 6),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1),
                              decoration: BoxDecoration(
                                color: const Color(0xFF064E3B),
                                borderRadius: BorderRadius.circular(4),
                              ),
                              child: const Text(
                                'PSC CLEAR',
                                style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Color(0xFF34D399)),
                              ),
                            ),
                          ],
                        ),
                        const Text(
                          'Latency: 14ms',
                          style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Colors.grey),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'Cert #IND-ECDIS-2023-88412 · Tolani Maritime Institute',
                      style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Color(0xFF64748B)),
                    ),
                    const SizedBox(height: 12),

                    // Officer Name & INDoS Row
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFF070D18),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('OFFICER NAME', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Colors.grey)),
                              Text('Capt. Rajesh Sharma', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white)),
                            ],
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('INDOS ID', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Colors.grey)),
                              Text('08ZL9431', style: TextStyle(fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold, color: Color(0xFF00E5FF))),
                            ],
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('CDC ENDORSEMENT', style: TextStyle(fontSize: 9, fontFamily: 'monospace', color: Colors.grey)),
                              Text('MUM-149028', style: TextStyle(fontSize: 12, fontFamily: 'monospace', color: Colors.white)),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 12),

                    // Course details box
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFF091122),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: const Color(0xFF1E293B)),
                      ),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text('ECDIS Simulator & Type-Specific', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.white)),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1),
                                decoration: BoxDecoration(
                                  color: const Color(0xFF451A03),
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: const Text('Exp: 11 Nov 2026', style: TextStyle(fontSize: 9, color: Color(0xFFFBBF24))),
                              ),
                            ],
                          ),
                          const SizedBox(height: 6),
                          const Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text('Biometric Match: 99.4% (Iris & Thumb)', style: TextStyle(fontSize: 10, color: Color(0xFF34D399))),
                              Text('CIP Audit: Grade A1', style: TextStyle(fontSize: 10, color: Colors.grey)),
                            ],
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16),

                    // Action buttons
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton.icon(
                            style: OutlinedButton.styleFrom(
                              foregroundColor: const Color(0xFF38BDF8),
                              side: const BorderSide(color: Color(0xFF0284C7)),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              padding: const EdgeInsets.symmetric(vertical: 12),
                            ),
                            onPressed: () {
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(
                                  content: Text('Dossier payload beamed via Bluetooth Mesh to Rotterdam PSC Terminal'),
                                  backgroundColor: Color(0xFF0284C7),
                                ),
                              );
                            },
                            icon: const Icon(Icons.bluetooth, size: 16),
                            label: const Text('Beam via Mesh', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold)),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: ElevatedButton.icon(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xFF00E5FF),
                              foregroundColor: const Color(0xFF070D18),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              padding: const EdgeInsets.symmetric(vertical: 12),
                            ),
                            onPressed: () {
                              setState(() {
                                _isScanLocked = true;
                              });
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(
                                  content: Text('PSC Inspection Clearance logged on immutable ledger'),
                                  backgroundColor: Color(0xFF059669),
                                ),
                              );
                            },
                            icon: const Icon(Icons.verified_user, size: 16),
                            label: const Text('Log PSC Clearance', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(height: 16),
            const Text(
              'Rotterdam Port · PSC Div. 4 · Ledger Sync Log (42 Inspections)',
              style: TextStyle(fontSize: 10, fontFamily: 'monospace', color: Colors.grey),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }
}
