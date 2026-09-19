import 'package:flutter/material.dart';

enum NotificationType {
  statutory,
  booking,
  circular,
  certificate,
}

class NotificationItem {
  final String id;
  final String title;
  final String message;
  final String timestamp;
  final NotificationType type;
  bool isRead;
  final String? actionLabel;

  NotificationItem({
    required this.id,
    required this.title,
    required this.message,
    required this.timestamp,
    required this.type,
    this.isRead = false,
    this.actionLabel,
  });
}

class NotificationsScreen extends StatefulWidget {
  const NotificationsScreen({super.key});

  @override
  State<NotificationsScreen> createState() => _NotificationsScreenState();
}

class _NotificationsScreenState extends State<NotificationsScreen> {
  String _activeFilter = 'All';

  final List<NotificationItem> _notifications = [
    NotificationItem(
      id: 'notif-01',
      title: 'CRITICAL: STCW Refresher Approaching',
      message: 'Your PSCRB (Proficiency in Survival Craft) certification expires in 62 days. Mandatory refresher required under STCW 2010 Manila amendments for continuous sea service eligibility.',
      timestamp: '15m ago',
      type: NotificationType.statutory,
      isRead: false,
      actionLabel: 'Browse Refresher Batches',
    ),
    NotificationItem(
      id: 'notif-02',
      title: 'Atomic Seat Lock Confirmed (10-Min Escrow)',
      message: 'Seat locked for Advanced Fire Fighting (AFF) at Anglo-Eastern Maritime Academy, Karjat. ₹8,500 held securely in Platform Escrow Shield.',
      timestamp: '2h ago',
      type: NotificationType.booking,
      isRead: false,
      actionLabel: 'View Admission Ticket',
    ),
    NotificationItem(
      id: 'notif-03',
      title: 'DG Shipping Advisory Circular No. 14/2026',
      message: 'Directorate General of Shipping has issued revised minimum sea-time requirements for Second Mate Foreign Going competencies.',
      timestamp: '5h ago',
      type: NotificationType.circular,
      isRead: true,
      actionLabel: 'Read Official Circular',
    ),
    NotificationItem(
      id: 'notif-04',
      title: 'Cryptographic Certificate Issued',
      message: 'Your Personal Survival Techniques (PST) digital certificate has been sealed with ECDSA SHA-256 and synced to your PSC Vault.',
      timestamp: '1d ago',
      type: NotificationType.certificate,
      isRead: true,
      actionLabel: 'Inspect in Vault',
    ),
  ];

  bool _pushEnabled = true;
  bool _satMeshEnabled = true;
  bool _statutoryAlertsOnly = false;

  void _markAllAsRead() {
    setState(() {
      for (final n in _notifications) {
        n.isRead = true;
      }
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('All maritime alerts marked as read'),
        backgroundColor: Color(0xFF0369A1),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _openSettingsDialog() {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0C1628),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setModalState) {
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
                        'Push Notification Channels',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                      ),
                      IconButton(
                        icon: const Icon(Icons.close, color: Colors.white70),
                        onPressed: () => Navigator.pop(context),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  SwitchListTile(
                    title: const Text('Direct FCM Push Notifications', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
                    subtitle: const Text('Real-time alerts for seat locks and approvals', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 11)),
                    value: _pushEnabled,
                    activeTrackColor: const Color(0xFF00E5FF),
                    onChanged: (val) {
                      setModalState(() => _pushEnabled = val);
                      setState(() => _pushEnabled = val);
                    },
                  ),
                  SwitchListTile(
                    title: const Text('Maritime Satellite Mesh SMS', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
                    subtitle: const Text('Low-bandwidth alerts when deep sea (Inmarsat/Iridium)', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 11)),
                    value: _satMeshEnabled,
                    activeTrackColor: const Color(0xFF00E5FF),
                    onChanged: (val) {
                      setModalState(() => _satMeshEnabled = val);
                      setState(() => _satMeshEnabled = val);
                    },
                  ),
                  SwitchListTile(
                    title: const Text('Statutory Expiry Only Filter', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
                    subtitle: const Text('Mute marketing, prioritize STCW & CoC deadlines', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 11)),
                    value: _statutoryAlertsOnly,
                    activeTrackColor: const Color(0xFF00E5FF),
                    onChanged: (val) {
                      setModalState(() => _statutoryAlertsOnly = val);
                      setState(() => _statutoryAlertsOnly = val);
                    },
                  ),
                  const SizedBox(height: 16),
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
    final filtered = _notifications.where((n) {
      if (_activeFilter == 'Statutory') return n.type == NotificationType.statutory || n.type == NotificationType.circular;
      if (_activeFilter == 'Bookings') return n.type == NotificationType.booking;
      if (_activeFilter == 'Vault') return n.type == NotificationType.certificate;
      return true;
    }).toList();

    final unreadCount = _notifications.where((n) => !n.isRead).length;

    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF031726),
        elevation: 0,
        title: Row(
          children: [
            const Text(
              'Maritime Alerts',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.white),
            ),
            if (unreadCount > 0) ...[
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                decoration: BoxDecoration(
                  color: const Color(0xFFE11D48),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  '$unreadCount NEW',
                  style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Colors.white),
                ),
              ),
            ],
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.done_all, color: Color(0xFF00E5FF)),
            tooltip: 'Mark all as read',
            onPressed: unreadCount > 0 ? _markAllAsRead : null,
          ),
          IconButton(
            icon: const Icon(Icons.tune, color: Colors.white70),
            tooltip: 'Alert Channels',
            onPressed: _openSettingsDialog,
          ),
        ],
      ),
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 10),
            color: const Color(0xFF091122),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: ['All', 'Statutory', 'Bookings', 'Vault'].map((filter) {
                  final isSelected = _activeFilter == filter;
                  return Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: FilterChip(
                      selected: isSelected,
                      label: Text(filter),
                      labelStyle: TextStyle(
                        fontSize: 12,
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
                          _activeFilter = filter;
                        });
                      },
                    ),
                  );
                }).toList(),
              ),
            ),
          ),
          Expanded(
            child: filtered.isEmpty
                ? const Center(
                    child: Text(
                      'No notifications in this filter',
                      style: TextStyle(color: Color(0xFF64748B)),
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: filtered.length,
                    itemBuilder: (context, index) {
                      final item = filtered[index];
                      return _buildNotificationCard(item);
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _buildNotificationCard(NotificationItem item) {
    Color typeColor;
    IconData typeIcon;
    String typeLabel;

    switch (item.type) {
      case NotificationType.statutory:
        typeColor = const Color(0xFFF59E0B);
        typeIcon = Icons.warning_amber_rounded;
        typeLabel = 'STATUTORY ALERT';
        break;
      case NotificationType.booking:
        typeColor = const Color(0xFF00E5FF);
        typeIcon = Icons.lock_clock_outlined;
        typeLabel = 'ESCROW BOOKING';
        break;
      case NotificationType.circular:
        typeColor = const Color(0xFF38BDF8);
        typeIcon = Icons.article_outlined;
        typeLabel = 'DG CIRCULAR';
        break;
      case NotificationType.certificate:
        typeColor = const Color(0xFF10B981);
        typeIcon = Icons.verified_outlined;
        typeLabel = 'CRYPTOGRAPHIC SEAL';
        break;
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: item.isRead ? const Color(0xFF0C1628) : const Color(0xFF0F1E36),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: item.isRead ? const Color(0xFF1E293B) : typeColor.withValues(alpha: 0.4),
          width: item.isRead ? 1 : 1.5,
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: () {
            setState(() {
              item.isRead = true;
            });
          },
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    color: typeColor.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: typeColor.withValues(alpha: 0.3)),
                  ),
                  child: Icon(typeIcon, color: typeColor, size: 20),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1.5),
                            decoration: BoxDecoration(
                              color: typeColor.withValues(alpha: 0.15),
                              borderRadius: BorderRadius.circular(4),
                            ),
                            child: Text(
                              typeLabel,
                              style: TextStyle(
                                fontSize: 9,
                                fontFamily: 'monospace',
                                fontWeight: FontWeight.bold,
                                color: typeColor,
                              ),
                            ),
                          ),
                          Text(
                            item.timestamp,
                            style: const TextStyle(fontSize: 10, color: Color(0xFF64748B), fontFamily: 'monospace'),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      Text(
                        item.title,
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                          color: item.isRead ? Colors.white70 : Colors.white,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        item.message,
                        style: const TextStyle(fontSize: 11, color: Color(0xFF94A3B8), height: 1.4),
                      ),
                      if (item.actionLabel != null) ...[
                        const SizedBox(height: 10),
                        GestureDetector(
                          onTap: () {
                            setState(() => item.isRead = true);
                            ScaffoldMessenger.of(context).showSnackBar(
                              SnackBar(
                                content: Text('Navigating to: ${item.actionLabel}'),
                                backgroundColor: const Color(0xFF0369A1),
                                behavior: SnackBarBehavior.floating,
                                duration: const Duration(seconds: 1),
                              ),
                            );
                          },
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                item.actionLabel!,
                                style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: typeColor),
                              ),
                              const SizedBox(width: 4),
                              Icon(Icons.arrow_forward, size: 12, color: typeColor),
                            ],
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}