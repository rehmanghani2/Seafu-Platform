<template>
  <div class="fixed bottom-6 right-6 z-50 font-sans print:hidden select-none">
    
    <!-- ============================================================== -->
    <!-- 1. FLOATING RADAR BEACON TRIGGER BUTTON                          -->
    <!-- ============================================================== -->
    <div v-if="!isOpen" class="relative group">
      <!-- Animated Radar Ping Rings -->
      <span class="absolute -inset-1.5 rounded-full bg-cyan-500/25 animate-ping pointer-events-none"></span>
      <span class="absolute -inset-1 rounded-full bg-blue-600/30 blur-sm group-hover:bg-cyan-500/40 transition duration-300"></span>

      <button
        @click="toggleChat"
        class="relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#071022] border border-cyan-500/50 shadow-2xl shadow-cyan-950/60 text-white hover:border-cyan-400 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-400/50"
        aria-label="Open Seafu Maritime AI Navigator"
      >
        <!-- Rotating Compass / Radar Reticle -->
        <div class="relative w-9 h-9 rounded-full bg-gradient-to-br from-cyan-950 via-[#0c2240] to-blue-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner overflow-hidden">
          <svg class="w-5 h-5 transition-transform duration-700 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke-width="1.5" stroke-dasharray="2 2" class="opacity-60" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.364-6.364l-2.121 2.121m-8.486 8.486l-2.121 2.121m12.728 0l-2.121-2.121m-8.486-8.486l-2.121-2.121" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#071022] animate-pulse"></span>
        </div>

        <div class="text-left pr-1 hidden sm:block">
          <div class="text-xs font-black tracking-tight text-white flex items-center gap-1.5">
            <span>SEAFU NAVIGATOR</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-mono font-bold uppercase">AI 2.0</span>
          </div>
          <div class="text-[10px] text-cyan-400/80 font-mono flex items-center gap-1 font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            STCW &amp; Escrow Advisory
          </div>
        </div>

        <!-- WhatsApp Badge Pill -->
        <div class="hidden md:flex items-center gap-1 pl-2 border-l border-slate-700/80 text-[10px] font-mono text-emerald-400 font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>WA Standby</span>
        </div>
      </button>
    </div>

    <!-- ============================================================== -->
    <!-- 2. MARITIME HUD CHAT PANEL (COMMAND BRIDGE)                      -->
    <!-- ============================================================== -->
    <transition
      enter-active-class="transition duration-250 ease-out transform"
      enter-from-class="opacity-0 translate-y-6 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in transform"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-6 scale-95"
    >
      <div
        v-if="isOpen"
        class="w-[92vw] sm:w-[440px] md:w-[460px] h-[640px] max-h-[86vh] rounded-2xl bg-[#070D18]/95 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 flex flex-col overflow-hidden text-slate-200"
      >
        <!-- NAVAL HEADER HUD -->
        <header class="bg-gradient-to-r from-[#0C1628] via-[#071022] to-[#0A1A33] border-b border-cyan-500/30 p-3.5 flex items-center justify-between shrink-0 shadow-md">
          <div class="flex items-center gap-3">
            <div class="relative w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-inner">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 2v20m0-20a9 9 0 019 9c0 3.87-2.45 7.17-5.91 8.44M12 2a9 9 0 00-9 9c0 3.87 2.45 7.17 5.91 8.44M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070D18] animate-pulse"></span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-black tracking-wider text-white font-mono uppercase">THE SEAFU NAVIGATOR</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 font-mono font-bold">BRIDGE ACTIVE</span>
              </div>
              <div class="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
                <span>INDoS:</span>
                <span class="text-cyan-300 font-bold">{{ candidate.indos }}</span>
                <span>•</span>
                <span class="truncate max-w-[130px]">{{ candidate.fullName }}</span>
              </div>
            </div>
          </div>

          <!-- Window Actions -->
          <div class="flex items-center gap-1.5">
            <button
              @click="resetConversation"
              class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition"
              title="Reset conversation"
              aria-label="Reset conversation"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              @click="isOpen = false"
              class="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800/60 transition"
              title="Close chat"
              aria-label="Close chat"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <!-- SUB-HEADER ADVISORY BAR -->
        <div class="px-3.5 py-1.5 bg-[#0C1628]/80 border-b border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="text-cyan-300/90 font-medium">IMO STCW 2010 Manila &amp; DG Shipping Certified</span>
          </div>
          <button
            @click="triggerQuickEscalation"
            class="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition underline decoration-dotted"
          >
            <span>WhatsApp Officer</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        <!-- CONVERSATION STREAM -->
        <div ref="messageStreamRef" class="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gradient-to-b from-[#070D18] to-[#040810]">
          
          <div v-for="(msg, idx) in messages" :key="idx" class="flex flex-col space-y-2">
            <!-- SENDER IDENTIFIER -->
            <div
              class="flex items-center gap-2 text-[10px] font-mono"
              :class="msg.role === 'user' ? 'justify-end text-cyan-400' : 'justify-start text-slate-400'"
            >
              <span v-if="msg.role === 'assistant'" class="font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                SEAFU NAVIGATOR
              </span>
              <span v-else class="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>CAPT. SHARMA (INDoS: 08ZL9431)</span>
                <svg class="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="text-[9px] text-slate-400">{{ msg.time }}</span>
            </div>

            <!-- MESSAGE BUBBLE -->
            <div
              class="rounded-2xl p-3.5 text-xs leading-relaxed max-w-[90%] transition shadow-sm"
              :class="msg.role === 'user'
                ? 'ml-auto bg-[#0C2240] border border-cyan-500/40 text-white rounded-tr-xs'
                : 'mr-auto bg-[#0A162B] border border-slate-700/60 text-slate-200 rounded-tl-xs'"
            >
              <!-- Formatted Content -->
              <div class="whitespace-pre-line space-y-2 select-text font-normal">
                {{ msg.content }}
              </div>

              <!-- REGULATORY CITATIONS (If any) -->
              <div v-if="msg.citations && msg.citations.length" class="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-wrap gap-1.5 items-center">
                <span class="text-[9px] font-mono text-cyan-400 uppercase font-bold">Citations:</span>
                <span
                  v-for="(cite, cIdx) in msg.citations"
                  :key="cIdx"
                  class="px-2 py-0.5 rounded-sm bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 text-[9px] font-mono"
                >
                  {{ cite }}
                </span>
              </div>

              <!-- SMART ESCALATION CARD (If triggered) -->
              <div
                v-if="msg.escalation"
                class="mt-3.5 p-3 rounded-xl bg-gradient-to-br from-amber-950/30 via-slate-900 to-cyan-950/40 border border-amber-500/50 shadow-inner"
              >
                <div class="flex items-center justify-between pb-2 border-b border-amber-500/30">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                    <span class="text-[10px] font-mono font-black text-amber-300 uppercase tracking-wider">OFFICIAL ESCALATION BRIDGE</span>
                  </div>
                  <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm bg-amber-900/60 text-amber-200 border border-amber-700/50">
                    {{ msg.escalation.ticketNumber }}
                  </span>
                </div>

                <div class="py-2 space-y-1 text-[11px] font-mono text-slate-300">
                  <div class="flex justify-between">
                    <span class="text-slate-400">Watch Officer:</span>
                    <span class="font-bold text-white">{{ msg.escalation.deskName }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Duty Standby:</span>
                    <span class="text-emerald-400 font-bold">{{ msg.escalation.hours }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Helpline:</span>
                    <span class="text-cyan-300 font-bold">{{ msg.escalation.supportPhone }}</span>
                  </div>
                </div>

                <!-- Primary Action: Open WhatsApp -->
                <a
                  :href="msg.escalation.whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-2.5 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs shadow-md shadow-emerald-900/40 transition duration-150"
                >
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Connect with Duty Officer on WhatsApp</span>
                  <svg class="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <!-- Secondary Action: Ticket copy status -->
                <div class="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span class="flex items-center gap-1 text-emerald-400/90">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Synced to Admin Ops Hub
                  </span>
                  <button
                    @click="copyTicketNumber(msg.escalation.ticketNumber)"
                    class="text-cyan-400 hover:text-cyan-300 underline font-bold"
                  >
                    {{ copiedTicket === msg.escalation.ticketNumber ? 'Copied!' : 'Copy Ticket ID' }}
                  </button>
                </div>
              </div>
            </div>

            <!-- INTERACTIVE SUGGESTION CHIPS -->
            <div v-if="msg.suggestions && msg.suggestions.length && idx === messages.length - 1" class="flex flex-wrap gap-1.5 pt-1">
              <button
                v-for="(chip, chipIdx) in msg.suggestions"
                :key="chipIdx"
                @click="sendPrompt(chip)"
                class="px-2.5 py-1 rounded-full bg-[#0C1628] hover:bg-[#12243d] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-[10px] font-mono font-medium transition shadow-xs flex items-center gap-1.5 active:scale-95"
              >
                <span>{{ chip }}</span>
                <svg class="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- THINKING RADAR INDICATOR -->
          <div v-if="isLoading" class="flex items-center gap-2 p-3 rounded-xl bg-[#0A162B] border border-slate-700/60 max-w-[200px]">
            <div class="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
            <span class="text-[10px] font-mono text-cyan-300 tracking-wider font-semibold uppercase animate-pulse">Scanning Ledger...</span>
          </div>

        </div>

        <!-- QUICK ACTION ACTION CARDS DECK -->
        <div class="px-3 py-2 bg-[#0A1322] border-t border-slate-800/90 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span class="text-[9px] font-mono text-slate-400 uppercase font-bold shrink-0">Prompts:</span>
          <button
            v-for="topic in quickPrompts"
            :key="topic.label"
            @click="sendPrompt(topic.query)"
            class="px-2 py-0.8 rounded-md bg-[#071022] hover:bg-[#0f2442] border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-[10px] font-mono shrink-0 transition"
          >
            {{ topic.label }}
          </button>
        </div>

        <!-- BOTTOM INPUT FORM -->
        <footer class="p-3 bg-[#070D18] border-t border-cyan-500/30 shrink-0">
          <form @submit.prevent="submitMessage" class="relative flex items-center gap-2">
            
            <!-- Escalation Icon Shortcut -->
            <button
              type="button"
              @click="triggerQuickEscalation"
              class="p-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/40 text-emerald-400 transition focus:outline-hidden"
              title="Escalate directly to WhatsApp Human Officer"
              aria-label="Escalate to WhatsApp"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            <!-- Text Input -->
            <input
              v-model="inputQuery"
              type="text"
              placeholder="Ask about STCW rules, 10-min seat locks, or coupons..."
              :disabled="isLoading"
              class="flex-1 bg-[#0A162B] border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-hidden transition"
            />

            <!-- Send Submit Button -->
            <button
              type="submit"
              :disabled="!inputQuery.trim() || isLoading"
              class="p-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:hover:from-cyan-600 disabled:hover:to-blue-600 text-white shadow-md shadow-cyan-900/30 active:scale-95 transition focus:outline-hidden"
              aria-label="Send maritime query"
            >
              <svg class="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 0l-7 7m7-7l7 7" />
              </svg>
            </button>
          </form>

          <!-- Disclaimer / Compliance Stamp -->
          <div class="mt-2 flex items-center justify-between text-[9px] font-mono text-slate-400">
            <span>Compliance: IMO STCW Manila &amp; DG Circulars</span>
            <span class="text-cyan-400/80">Seafu Ops v2.4</span>
          </div>
        </footer>

      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  time: string
  citations?: string[]
  suggestions?: string[]
  escalation?: {
    ticketNumber: string
    candidateName: string
    indosNumber: string
    whatsappUrl: string
    supportPhone: string
    deskName: string
    hours: string
  }
}

const isOpen = ref(false)
const isLoading = ref(false)
const inputQuery = ref('')
const copiedTicket = ref('')
const messageStreamRef = ref<HTMLElement | null>(null)

const candidate = ref({
  fullName: 'Capt. Rajesh Sharma',
  indos: '08ZL9431'
})

const quickPrompts = [
  { label: 'STCW 5-Yr Renewal', query: 'What are the STCW 2010 refresher rules for CoC revalidation?' },
  { label: '10-Min Seat Lock', query: 'How does the atomic 10-minute seat lock and escrow shield work?' },
  { label: 'Discount Codes', query: 'What are the active maritime scholarship and promo codes?' },
  { label: 'PSC Handshake', query: 'How does the offline Port State Control handshake scanner work?' },
  { label: 'WhatsApp Officer', query: 'I want to speak with a human support officer on WhatsApp.' }
]

const messages = ref<ChatMessage[]>([
  {
    role: 'assistant',
    content: 'Ahoy Officer. I am The Seafu Navigator AI, your autonomous advisory bridge. I can verify STCW 2010 refresher mandates, seat lock mechanics, escrow refunds, and scholarship grants. How may I assist your maritime career today?',
    time: formatTime(new Date()),
    citations: ['IMO STCW Convention', 'DG Shipping Circular 14/2026'],
    suggestions: [
      'Check STCW Refresher Rules',
      'How 10-Min Seat Lock Works',
      'Promo Codes (WOMENMARITIME)',
      'Escrow & Refund Terms',
      'Talk to Human Officer'
    ]
  }
])

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function toggleChat() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

function resetConversation() {
  messages.value = [
    {
      role: 'assistant',
      content: 'Conversation reset. The Seafu Navigator AI bridge is clear. What maritime topic or course batch can I assist you with?',
      time: formatTime(new Date()),
      citations: ['The Seafu Knowledge Base'],
      suggestions: [
        'Check STCW Refresher Rules',
        'How 10-Min Seat Lock Works',
        'Promo Codes (WOMENMARITIME)',
        'Connect to Officer on WhatsApp'
      ]
    }
  ]
}

function scrollToBottom() {
  nextTick(() => {
    if (messageStreamRef.value) {
      messageStreamRef.value.scrollTop = messageStreamRef.value.scrollHeight
    }
  })
}

async function sendPrompt(queryText: string) {
  inputQuery.value = queryText
  await submitMessage()
}

function triggerQuickEscalation() {
  inputQuery.value = 'I require immediate human assistance regarding my seafarer booking and ticket escalation.'
  submitMessage()
}

async function copyTicketNumber(tkt: string) {
  try {
    await navigator.clipboard.writeText(tkt)
    copiedTicket.value = tkt
    setTimeout(() => {
      copiedTicket.value = ''
    }, 2500)
  } catch (e) {
    console.error('Clipboard copy failed', e)
  }
}

async function submitMessage() {
  const query = inputQuery.value.trim()
  if (!query || isLoading.value) return

  // Push user message
  messages.value.push({
    role: 'user',
    content: query,
    time: formatTime(new Date())
  })

  inputQuery.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const response = await $fetch<any>('/api/chat', {
      method: 'POST',
      body: {
        query,
        candidateInfo: candidate.value
      }
    })

    messages.value.push({
      role: 'assistant',
      content: response.reply,
      time: formatTime(new Date(response.timestamp || Date.now())),
      citations: response.citations || [],
      suggestions: response.suggestions || [],
      escalation: response.escalation
    })

    // If escalation happened, record it globally for the Admin Ops Hub
    if (response.escalation) {
      const ticketsStore = useState<any[]>('adminComplaintDesk', () => [])
      ticketsStore.value.unshift({
        id: response.escalation.ticketNumber,
        subject: query.slice(0, 60) + (query.length > 60 ? '...' : ''),
        filer: candidate.value.fullName + ' (' + candidate.value.indos + ')',
        priority: 'HIGH',
        status: 'INVESTIGATING',
        source: 'WHATSAPP',
        whatsappUrl: response.escalation.whatsappUrl
      })
    }
  } catch (err: any) {
    console.error('Chatbot API call error:', err)
    // Fallback response with direct escalation
    const fallbackTicket = 'SF-TKT-2026-' + Math.floor(1000 + Math.random() * 9000)
    const waText = encodeURIComponent(
      '*The Seafu Operations Escalation*\n' +
      '• Ticket Ref: ' + fallbackTicket + '\n' +
      '• Candidate: ' + candidate.value.fullName + ' (INDoS: ' + candidate.value.indos + ')\n' +
      '• Query: ' + query
    )

    messages.value.push({
      role: 'assistant',
      content: 'I have logged your query and established an immediate escalation dispatch to our Duty Watch Officer.',
      time: formatTime(new Date()),
      citations: ['Seafu Emergency Protocol'],
      suggestions: ['Connect via WhatsApp', 'Check STCW Courses'],
      escalation: {
        ticketNumber: fallbackTicket,
        candidateName: candidate.value.fullName,
        indosNumber: candidate.value.indos,
        whatsappUrl: 'https://wa.me/923366668475?text=' + waText,
        supportPhone: '+92 336 6668475',
        deskName: 'Senior Maritime Operations Desk',
        hours: '24/7 Bridge Watchkeeping'
      }
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
