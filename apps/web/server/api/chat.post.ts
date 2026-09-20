import { defineEventHandler, readBody } from 'h3'

interface ChatRequest {
  query: string
  candidateInfo?: {
    fullName?: string
    indos?: string
  }
}

interface MaritimeKnowledgeItem {
  keywords: string[]
  citations: string[]
  title: string
  answer: string
  suggestions: string[]
}

const KNOWLEDGE_BASE: MaritimeKnowledgeItem[] = [
  {
    keywords: ['stcw', 'refresher', 'coc', 'revalidation', 'renewal', '5 year'],
    citations: ['IMO STCW 2010 Manila Amendments', 'DGS Training Circular 14/2026', 'Section A-I/11'],
    title: 'STCW 2010 CoC Revalidation & Refresher Requirements',
    answer: 'Under IMO STCW 2010 Regulation I/11 and DG Shipping Circular 14/2026, Certificate of Competency (CoC) revalidation occurs every 5 years. Navigating Officers and Marine Engineers must complete mandatory practical refreshers: Advanced Fire Fighting (AFF - A-VI/3), Survival Craft & Rescue Boats (PSCRB - A-VI/2), and Fast Rescue Boats (if applicable). Additionally, at least 12 months of qualifying sea-service within the preceding 5 years or 3 months in the preceding 6 months must be verified via your electronic CDC ledger.',
    suggestions: ['Check STCW Refresher Packages', 'View Pre-Sea Cadet Requirements', 'Explore ECDIS Model 1.27']
  },
  {
    keywords: ['seat lock', 'atomic', 'escrow', 'hold', '10 min', '10-minute', 'reservation'],
    citations: ['Seafu Escrow Protocol v2', 'DG Quota Allocation Ledger', 'IMO Res. A1052'],
    title: 'Atomic 10-Minute Seat Lock & Escrow Shield',
    answer: 'The Seafu platform implements an atomic 10-minute seat lock directly on the accredited Academy\'s DG Shipping batch quota. Once you initiate reservation, the seat is held exclusively for 600 seconds, preventing double-booking during payment. All candidate tuition fees are held in 100% Escrow Shield protection and are only released to the training institute upon successful batch commencement and biometric attendance synchronization.',
    suggestions: ['Browse STCW Course Batches', 'View Career Bundles (Save 25%)', 'Check Refund Policy']
  },
  {
    keywords: ['coupon', 'discount', 'scholarship', 'women', 'promo', 'code', 'cadet'],
    citations: ['IMO Women in Maritime Initiative', 'Seafu Academy Bursaries 2026'],
    title: 'Active Maritime Scholarships & Promotional Discounts',
    answer: 'The Seafu platform offers three active promotional discount codes for accredited training:\n\n1. **WOMENMARITIME**: 30% Special Grant honoring the IMO Women in Maritime initiative (valid across all simulator and safety modules).\n2. **CADET2026**: 15% Academy Cadetship discount for pre-sea trainees and junior ratings.\n3. **SEAFU10**: 10% Early Bird seat lock discount when booking batches >= 14 days prior to commencement.\n\nYou can apply these directly during checkout or inside the Career Bundles page.',
    suggestions: ['Apply WOMENMARITIME at Checkout', 'Explore 5-in-1 Basic Safety Bundle', 'Cadet Pre-Sea Courses']
  },
  {
    keywords: ['ecdis', 'simulator', 'kongsberg', 'furuno', 'jrc', 'transas', '1.27'],
    citations: ['IMO Model Course 1.27', 'STCW Table A-II/1', 'MSC.1/Circ.1503/Rev.1'],
    title: 'ECDIS Generic & Type-Specific Simulator Training',
    answer: 'The Electronic Chart Display and Information System (ECDIS) course complies with IMO Model Course 1.27 and STCW Table A-II/1. Training encompasses electronic navigational chart (ENC) verification, safety contour depth calculations, manual radar overlay (ARPA integration), and emergency chart failure handovers. Available on certified Kongsberg Polaris K-Sim, Furuno FMD-3x00, and JRC consoles.',
    suggestions: ['Book ECDIS Simulator Batch', 'View Bridge Officer Combo', 'Download ECDIS Anomaly Briefing']
  },
  {
    keywords: ['psc', 'paris mou', 'tokyo mou', 'inspection', 'cic', 'handshake'],
    citations: ['Paris MoU Concentrated Campaign 2026', 'IMO Res. A.1052(27)'],
    title: 'Port State Control (PSC) CIC & Digital Handshake',
    answer: 'Port State Control regimes for 2026 focus heavily on ECDIS cyber-resilience, auxiliary emergency power load tests, and quick-closing fuel valve servicing. The Seafu Mobile App features an offline Port State Control Handshake scanner (IMO Res. A1052 compliant) that allows PSC inspectors in Rotterdam, Singapore, and Houston to cryptographically verify seafarer credentials via ECDSA SHA-256 signatures even with zero shipboard internet.',
    suggestions: ['Open PSC Scan Deck in Mobile App', 'Read Paris MoU 2026 Checklist', 'Join PSC Masterclass Webinar']
  },
  {
    keywords: ['refund', 'cancellation', 'cancel', 'deduction', 'money back'],
    citations: ['Seafu Escrow Refund Rules Engine', 'DG Consumer Charter'],
    title: 'Transparent Cancellation & Refund Policy',
    answer: 'Our refund policy guarantees accountability through the Escrow Shield:\n\n• **Institute Cancellation / Rescheduling**: Automated **100% full refund** credited back to the seafarer\'s source payment method within 24 hours.\n• **Candidate Cancellation (>14 days notice)**: 90% refund (10% platform administrative fee).\n• **Candidate Cancellation (7–14 days notice)**: 50% refund.\n• **Candidate Cancellation (<7 days notice)**: 0% refund due to locked DG quota slots, but allows 1-time free batch transfer upon institute approval.',
    suggestions: ['Request Batch Transfer', 'Check Booking Status', 'Connect to Human Officer via WhatsApp']
  },
  {
    keywords: ['webinar', 'live stream', 'masterclass', 'cpd', 'handout', 'attendance'],
    citations: ['The Seafu Broadcast Hub', 'STCW Continuous Professional Development'],
    title: 'Maritime Technical Webinars & CPD Tokens',
    answer: 'Accredited maritime academies host free and ticketed masterclasses on The Seafu Broadcast Hub. Attendees joining the live WebRTC/Zoom stream receive an immutable digital Certificate of Technical Attendance (CPD Token) cryptographically logged directly into their Seafarer Certificate Vault.',
    suggestions: ['Browse Live Webinars', 'Download Technical Handouts', 'Host a Webinar']
  },
  {
    keywords: ['indos', 'cdc', 'sid', 'biometric', 'e-samudra', 'dg shipping'],
    citations: ['DG Shipping e-Samudra Portal', 'ILO Convention 185 (SID)'],
    title: 'INDoS & Continuous Discharge Certificate (CDC) Synchronization',
    answer: 'Your Indian National Database of Seafarers (INDoS) number serves as your universal identifier. Training institutes submit candidate examination and attendance marks directly to the DG e-Samudra server. Ensure your INDoS and CDC numbers match your physical documents to enable instantaneous automated eligibility verification during course checkouts.',
    suggestions: ['Verify Credentials in Vault', 'View Seafarer Profile', 'Download Official Circular']
  }
]

const ESCALATION_TRIGGERS = [
  'human', 'agent', 'officer', 'representative', 'person', 'support', 'talk to someone',
  'dispute', 'glitch', 'failed payment', 'refund delay', 'scam', 'complaint', 'stuck',
  'urgent', 'call me', 'whatsapp', 'emergency'
]

export default defineEventHandler(async (event) => {
  const body = await readBody<ChatRequest>(event)
  const query = (body?.query || '').trim()
  const candidateInfo = body?.candidateInfo || { fullName: 'Capt. Rajesh Sharma', indos: '08ZL9431' }

  if (!query) {
    return {
      reply: 'Ahoy Officer. I am The Seafu Navigator AI. How may I assist your maritime career, course reservations, or STCW revalidations today?',
      citations: ['The Seafu Maritime Knowledge Base'],
      suggestions: ['Check STCW Refresher Rules', 'How 10-Min Seat Lock Works', 'Promo Codes (WOMENMARITIME)', 'Connect to Officer on WhatsApp'],
      requiresEscalation: false,
      timestamp: new Date().toISOString()
    }
  }

  const queryLower = query.toLowerCase()
  const wantsEscalation = ESCALATION_TRIGGERS.some(trigger => queryLower.includes(trigger))

  let bestMatch: MaritimeKnowledgeItem | null = null
  let maxScore = 0

  for (const item of KNOWLEDGE_BASE) {
    let score = 0
    for (const kw of item.keywords) {
      if (queryLower.includes(kw)) {
        score += 2
      }
    }
    if (score > maxScore) {
      maxScore = score
      bestMatch = item
    }
  }

  const ticketNumber = 'SF-TKT-2026-' + Math.floor(1000 + Math.random() * 9000)
  const whatsappText = encodeURIComponent(
    '*The Seafu Maritime Operations Escalation*\n' +
    '• Ticket Ref: ' + ticketNumber + '\n' +
    '• Candidate: ' + candidateInfo.fullName + ' (INDoS: ' + candidateInfo.indos + ')\n' +
    '• Query: ' + query + '\n' +
    '• Time: ' + new Date().toUTCString()
  )
  const whatsappUrl = 'https://wa.me/923366668475?text=' + whatsappText

  if (wantsEscalation || maxScore === 0) {
    const isExplicit = queryLower.includes('human') || queryLower.includes('whatsapp') || queryLower.includes('agent')
    const replyPrefix = isExplicit
      ? 'Understood, Officer. I have prepared a direct escalation bridge to our Senior Maritime Operations Officer.'
      : (bestMatch ? bestMatch.answer + '\n\n*For complex matters or disputes, our duty officers are on standby via WhatsApp.*' : 'I could not find an exact regulatory match for your specific query. Let me connect you directly with a Duty Maritime Officer for immediate assistance.')

    return {
      reply: replyPrefix,
      citations: bestMatch ? bestMatch.citations : ['DG Shipping Helpdesk', 'IMO STCW Convention'],
      suggestions: ['Chat on WhatsApp Now', 'Log Admin Helpdesk Ticket', 'Browse Courses', 'Explore STCW Bundles'],
      requiresEscalation: true,
      escalation: {
        ticketNumber,
        candidateName: candidateInfo.fullName,
        indosNumber: candidateInfo.indos,
        whatsappUrl,
        supportPhone: '+92 336 6668475',
        deskName: 'Senior Maritime Operations Desk',
        hours: '24/7 Bridge Watchkeeping'
      },
      timestamp: new Date().toISOString()
    }
  }

  return {
    reply: bestMatch.answer,
    citations: bestMatch.citations,
    suggestions: bestMatch.suggestions,
    requiresEscalation: false,
    timestamp: new Date().toISOString()
  }
})
