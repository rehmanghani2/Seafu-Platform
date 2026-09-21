import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class ChatMessageModel {
  final String id;
  final String text;
  final bool isUser;
  final DateTime timestamp;
  final bool hasAction;
  final String? actionLabel;

  ChatMessageModel({
    required this.id,
    required this.text,
    required this.isUser,
    required this.timestamp,
    this.hasAction = false,
    this.actionLabel,
  });
}

class MaritimeChatScreen extends StatefulWidget {
  const MaritimeChatScreen({super.key});

  @override
  State<MaritimeChatScreen> createState() => _MaritimeChatScreenState();
}

class _MaritimeChatScreenState extends State<MaritimeChatScreen> {
  final TextEditingController _textController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  bool _isTyping = false;

  final List<ChatMessageModel> _messages = [
    ChatMessageModel(
      id: 'welcome-1',
      text:
          '⚓ Ahoy Officer! I am your SeaFu AI Watchkeeper, equipped with DG Shipping circulars, STCW 2010 regulations, and MMD examination syllabi.\n\nHow may I assist your maritime career today?',
      isUser: false,
      timestamp: DateTime.now().subtract(const Duration(minutes: 5)),
    ),
  ];

  final List<String> _quickPrompts = [
    'CoC Revalidation Checklist',
    'Seatime requirement for Chief Mate',
    'Refund policy for canceled batch',
    'Escalate to Human WhatsApp Desk',
  ];

  void _sendMessage(String text) {
    if (text.trim().isEmpty) return;

    final userMsg = ChatMessageModel(
      id: 'msg-${DateTime.now().millisecondsSinceEpoch}',
      text: text.trim(),
      isUser: true,
      timestamp: DateTime.now(),
    );

    setState(() {
      _messages.add(userMsg);
      _isTyping = true;
    });
    _textController.clear();
    _scrollToBottom();

    // AI Response generation
    Future.delayed(const Duration(milliseconds: 900), () {
      if (!mounted) return;
      final reply = _generateAIResponse(text);
      setState(() {
        _isTyping = false;
        _messages.add(reply);
      });
      _scrollToBottom();
    });
  }

  ChatMessageModel _generateAIResponse(String prompt) {
    final lower = prompt.toLowerCase();

    if (lower.contains('refund') || lower.contains('cancel') || lower.contains('money') || lower.contains('policy')) {
      return ChatMessageModel(
        id: 'reply-${DateTime.now().millisecondsSinceEpoch}',
        text:
            '🛡️ **SeaFu Statutory Refund Schedule**:\n\n'
            '• **> 15 Days Before Batch**: 100% Refund (Escrow return)\n'
            '• **7 – 15 Days Before Batch**: 70% Refund (30% academy reservation fee withheld)\n'
            '• **< 7 Days Before Batch**: 0% Default refund\n'
            '• **Medical / Vessel Call-out**: 100% Refund upon submitting DGS Doctor or Manning Agent Call letter via the dispute desk.\n\n'
            'You can file a formal cancellation claim directly from your Bookings tab.',
        isUser: false,
        timestamp: DateTime.now(),
        hasAction: true,
        actionLabel: 'View Bookings Policy',
      );
    } else if (lower.contains('coc') || lower.contains('revalidation') || lower.contains('renew')) {
      return ChatMessageModel(
        id: 'reply-${DateTime.now().millisecondsSinceEpoch}',
        text:
            '📜 **DG Shipping CoC Revalidation (STCW 2010)**:\n\n'
            '1. Minimum **12 months sea service** in past 5 years (or 3 months in past 6 months before expiry).\n'
            '2. Valid Refresher Training: AFF, PSCRB, MFA / Medical Care.\n'
            '3. ECDIS Type-Specific & BRM/ERM refresher (if applicable).\n'
            '4. DG Approved Medical Certificate (Annexure IV / Form 18).\n'
            '5. Digital application via e-Governance seafarer profile.',
        isUser: false,
        timestamp: DateTime.now(),
      );
    } else if (lower.contains('seatime') || lower.contains('chief mate') || lower.contains('master') || lower.contains('eligibility')) {
      return ChatMessageModel(
        id: 'reply-${DateTime.now().millisecondsSinceEpoch}',
        text:
            '🚢 **Sea Service Criteria for Chief Mate (FG)**:\n\n'
            '• Total **18 months approved seagoing service** as Officer in Charge of a Navigational Watch on ships >= 3,000 GT.\n'
            '• Or **12 months** if you completed the structured onboard training record book approved by DG Shipping.\n'
            '• Completion of Phase I & Phase II Chief Mate Function Courses.',
        isUser: false,
        timestamp: DateTime.now(),
      );
    } else if (lower.contains('whatsapp') || lower.contains('human') || lower.contains('agent') || lower.contains('support')) {
      return ChatMessageModel(
        id: 'reply-${DateTime.now().millisecondsSinceEpoch}',
        text:
            '📞 **Human Maritime Bridge Escalation**:\n\n'
            'Our senior Master Mariners & Grievance Officers are available via WhatsApp Priority Hotline: **+91 98200 12345** (Mon–Sat 0900–1800 IST).\n\n'
            'Tap below to copy the direct WhatsApp bridge link.',
        isUser: false,
        timestamp: DateTime.now(),
        hasAction: true,
        actionLabel: 'Copy WhatsApp Hotline Link',
      );
    } else {
      return ChatMessageModel(
        id: 'reply-${DateTime.now().millisecondsSinceEpoch}',
        text:
            'Roger that, Officer. Based on current IMO / DG Shipping circulars, this topic requires checking your specific INDoS record or batch schedule.\n\n'
            'Would you like me to connect you directly with an academy counselor or search the maritime forum for recent peer debriefs?',
        isUser: false,
        timestamp: DateTime.now(),
        hasAction: true,
        actionLabel: 'Copy WhatsApp Hotline Link',
      );
    }
  }

  void _handleAction(String label) {
    if (label.contains('WhatsApp')) {
      Clipboard.setData(const ClipboardData(text: 'https://wa.me/919820012345?text=Ahoy%20SeaFu%20Support'));
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('WhatsApp Bridge link copied to clipboard! (wa.me/919820012345)'),
          backgroundColor: Color(0xFF10B981),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Action: $label initiated.'),
          backgroundColor: const Color(0xFF00E5FF),
        ),
      );
    }
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  @override
  void dispose() {
    _textController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF070D18),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0C1628),
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFF00E5FF).withAlpha(30),
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFF00E5FF), width: 1),
              ),
              child: const Icon(Icons.smart_toy_outlined, color: Color(0xFF00E5FF), size: 18),
            ),
            const SizedBox(width: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'AI WATCHKEEPER',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 14,
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
                    const SizedBox(width: 5),
                    const Text(
                      'STCW v2.4 Knowledge Base',
                      style: TextStyle(color: Color(0xFF10B981), fontSize: 10),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.phone_in_talk_outlined, color: Color(0xFF10B981)),
            tooltip: 'WhatsApp Bridge Hotline',
            onPressed: () => _handleAction('Copy WhatsApp Hotline Link'),
          ),
        ],
      ),
      body: Column(
        children: [
          // Quick prompt chips
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            color: const Color(0xFF0C1628),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: _quickPrompts.map((prompt) {
                  return Padding(
                    padding: const EdgeInsets.only(right: 6),
                    child: ActionChip(
                      backgroundColor: const Color(0xFF070D18),
                      side: const BorderSide(color: Color(0xFF1E293B)),
                      label: Text(
                        prompt,
                        style: const TextStyle(
                          color: Color(0xFF00E5FF),
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      onPressed: () => _sendMessage(prompt),
                    ),
                  );
                }).toList(),
              ),
            ),
          ),
          // Messages list
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                final msg = _messages[index];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 14),
                  child: Row(
                    mainAxisAlignment: msg.isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (!msg.isUser) ...[
                        const CircleAvatar(
                          radius: 14,
                          backgroundColor: Color(0xFF0C1628),
                          child: Icon(Icons.anchor, size: 14, color: Color(0xFF00E5FF)),
                        ),
                        const SizedBox(width: 8),
                      ],
                      Flexible(
                        child: Column(
                          crossAxisAlignment:
                              msg.isUser ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(
                                color: msg.isUser ? const Color(0xFF0369A1) : const Color(0xFF0C1628),
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(
                                  color: msg.isUser
                                      ? const Color(0xFF0284C7)
                                      : const Color(0xFF1E293B),
                                ),
                              ),
                              child: Text(
                                msg.text,
                                style: TextStyle(
                                  color: msg.isUser ? Colors.white : Colors.white.withAlpha(230),
                                  fontSize: 13,
                                  height: 1.4,
                                ),
                              ),
                            ),
                            if (msg.hasAction && msg.actionLabel != null) ...[
                              const SizedBox(height: 6),
                              OutlinedButton.icon(
                                style: OutlinedButton.styleFrom(
                                  side: const BorderSide(color: Color(0xFF00E5FF)),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                                ),
                                icon: const Icon(Icons.open_in_new, size: 13, color: Color(0xFF00E5FF)),
                                label: Text(
                                  msg.actionLabel!,
                                  style: const TextStyle(
                                    color: Color(0xFF00E5FF),
                                    fontSize: 11,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                onPressed: () => _handleAction(msg.actionLabel!),
                              ),
                            ],
                            const SizedBox(height: 4),
                            Text(
                              '${msg.timestamp.hour.toString().padLeft(2, '0')}:${msg.timestamp.minute.toString().padLeft(2, '0')}',
                              style: const TextStyle(color: Colors.white30, fontSize: 9),
                            ),
                          ],
                        ),
                      ),
                      if (msg.isUser) const SizedBox(width: 8),
                    ],
                  ),
                );
              },
            ),
          ),
          if (_isTyping)
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              child: Row(
                children: [
                  const SizedBox(
                    width: 12,
                    height: 12,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: Color(0xFF00E5FF),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'AI Watchkeeper scanning maritime database...',
                    style: TextStyle(
                      color: const Color(0xFF00E5FF).withAlpha(180),
                      fontSize: 11,
                      fontStyle: FontStyle.italic,
                    ),
                  ),
                ],
              ),
            ),
          // Input field
          Container(
            padding: const EdgeInsets.all(12),
            color: const Color(0xFF0C1628),
            child: SafeArea(
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _textController,
                      style: const TextStyle(color: Colors.white, fontSize: 13),
                      decoration: InputDecoration(
                        hintText: 'Ask about STCW rules, seatime, or MMD orals...',
                        hintStyle: TextStyle(color: Colors.white.withAlpha(80), fontSize: 12),
                        filled: true,
                        fillColor: const Color(0xFF070D18),
                        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: const BorderSide(color: Color(0xFF1E293B)),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: const BorderSide(color: Color(0xFF1E293B)),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: const BorderSide(color: Color(0xFF00E5FF)),
                        ),
                      ),
                      onSubmitted: _sendMessage,
                    ),
                  ),
                  const SizedBox(width: 8),
                  CircleAvatar(
                    backgroundColor: const Color(0xFF00E5FF),
                    radius: 20,
                    child: IconButton(
                      icon: const Icon(Icons.send, color: Color(0xFF070D18), size: 18),
                      onPressed: () => _sendMessage(_textController.text),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
