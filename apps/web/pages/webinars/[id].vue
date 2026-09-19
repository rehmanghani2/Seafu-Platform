<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
    <!-- Top Nav -->
    <header class="sticky top-0 z-40 bg-[#04142E]/95 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <NuxtLink to="/webinars" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </NuxtLink>
          <div class="flex items-center gap-2">
            <NuxtLink to="/" class="text-sm font-bold tracking-tight text-white hover:text-cyan-400 transition">The Seafu</NuxtLink>
            <span class="text-slate-600 font-mono text-xs">/</span>
            <NuxtLink to="/webinars" class="text-xs text-slate-400 hover:text-white transition">Webinars</NuxtLink>
            <span class="text-slate-600 font-mono text-xs">/</span>
            <span class="text-xs font-mono text-cyan-400 truncate max-w-[200px] sm:max-w-xs">{{ webinar.title }}</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase"
            :class="isLive ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-[#0F2642] text-cyan-300 border border-cyan-500/30'"
          >
            <span class="w-2 h-2 rounded-full" :class="isLive ? 'bg-red-500 animate-ping' : 'bg-cyan-400'"></span>
            <span>{{ isLive ? 'STREAM ONLINE' : 'SCHEDULED' }}</span>
          </span>
          <button
            @click="isRegistered = !isRegistered"
            class="px-4 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
            :class="isRegistered ? 'bg-emerald-600 text-white' : 'bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18]'"
          >
            {{ isRegistered ? 'Pass Confirmed' : (webinar.isFree ? 'Free Registration' : 'Reserve Pass') }}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Layout -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Top Title Bar -->
      <div class="mb-6">
        <div class="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
          <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold uppercase">
            {{ webinar.categoryLabel }}
          </span>
          <span class="text-slate-400">·</span>
          <span class="text-slate-300">{{ webinar.instituteName }}</span>
          <span class="text-slate-400">·</span>
          <span class="text-slate-400 font-mono">{{ webinar.dateTimeDisplay }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          {{ webinar.title }}
        </h1>
      </div>

      <!-- Broadcast Viewport Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <!-- Video Stream Player Area -->
        <div class="lg:col-span-2">
          <div class="relative bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl aspect-video flex flex-col items-center justify-center group">
            <!-- Simulated Video HUD Background -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-10"></div>

            <!-- Visual Stream Placeholder Canvas -->
            <div class="w-full h-full bg-[#050B14] flex flex-col items-center justify-center p-6 text-center relative">
              <!-- Radar sweep graphic -->
              <div class="absolute w-72 h-72 rounded-full border border-cyan-500/20 flex items-center justify-center animate-spin" style="animation-duration: 20s;">
                <div class="w-48 h-48 rounded-full border border-cyan-500/30"></div>
              </div>

              <div class="relative z-20 max-w-md">
                <div class="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mx-auto mb-4 shadow-lg shadow-cyan-500/10">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  {{ isLive ? 'Bridge Stream Active' : 'Session Starts Shortly' }}
                </h3>
                <p class="text-xs text-slate-400 mt-1">
                  {{ isLive ? 'Broadcasting from Rotterdam Simulator Lab · 1080p 60fps' : 'Countdown: 02h 14m 28s remaining until broadcast commencement' }}
                </p>

                <div class="mt-4 flex justify-center gap-3">
                  <button
                    @click="simulatedPlaying = !simulatedPlaying"
                    class="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18] text-xs font-bold transition flex items-center gap-2"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <span>{{ simulatedPlaying ? 'Pause Stream' : 'Connect to Bridge Feed' }}</span>
                  </button>
                  <a
                    :href="webinar.externalStreamUrl"
                    target="_blank"
                    rel="noopener"
                    class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <span>Open in Zoom</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Bottom HUD Bar -->
            <div class="absolute bottom-0 inset-x-0 p-4 z-20 flex items-center justify-between text-xs font-mono text-slate-300">
              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>WEBRTC ENCRYPTED</span>
                </span>
                <span class="text-slate-500">|</span>
                <span>Latency: 28ms</span>
              </div>
              <div class="flex items-center gap-4">
                <span>1080p HD</span>
                <span>184 Connected Seafarers</span>
              </div>
            </div>
          </div>

          <!-- Attendance Certificate Info Notice -->
          <div class="mt-4 p-4 rounded-xl bg-[#0C1628] border border-white/10 flex items-start gap-3">
            <div class="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs font-bold text-white uppercase tracking-wide">Continuous Professional Development (CPD) Token</h4>
              <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Attendance is cryptographically logged via your INDoS number. Attendees completing &ge;80% of session time receive an immutable Certificate of Technical Attendance directly added to their Seafu Digital Vault.
              </p>
            </div>
          </div>
        </div>

        <!-- Interactive Live Chat & Q&A Sidebar -->
        <div class="bg-[#0C1628] border border-white/10 rounded-2xl flex flex-col h-[520px] shadow-xl overflow-hidden">
          <!-- Chat Header -->
          <div class="p-4 border-b border-white/10 flex items-center justify-between bg-[#0A1628]">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-bold text-white font-mono uppercase tracking-wider">Bridge Q&amp;A Room</span>
            </div>
            <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              Active Moderation
            </span>
          </div>

          <!-- Chat Messages Container -->
          <div class="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin">
            <div
              v-for="(msg, idx) in chatMessages"
              :key="idx"
              class="p-2.5 rounded-xl bg-[#070D18] border border-white/5 text-xs"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-white font-mono">{{ msg.author }}</span>
                <span class="text-[10px] font-mono text-slate-500">{{ msg.time }}</span>
              </div>
              <div class="text-[10px] font-mono text-cyan-400 mb-1">{{ msg.rank }}</div>
              <p class="text-slate-300 leading-relaxed">{{ msg.text }}</p>
            </div>
          </div>

          <!-- Message Input -->
          <form @submit.prevent="sendChatMessage" class="p-3 border-t border-white/10 bg-[#0A1628] flex gap-2">
            <input
              v-model="newChatMessage"
              type="text"
              placeholder="Ask Capt. Amitabh Sen a technical question..."
              class="flex-1 px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
            />
            <button
              type="submit"
              class="p-2 bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18] rounded-xl font-bold transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Detailed Agenda & Speaker Dossier -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 border-t border-white/10">
        <!-- Left 2 Cols: Agenda & Prerequisites -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Overview -->
          <section>
            <h3 class="text-base font-bold text-white mb-3">Session Overview</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ webinar.description }}
            </p>
          </section>

          <!-- Agenda Milestones -->
          <section>
            <h3 class="text-base font-bold text-white mb-4">Broadcast Agenda &amp; Milestones</h3>
            <div class="space-y-3">
              <div
                v-for="(item, idx) in webinar.agenda"
                :key="idx"
                class="p-4 bg-[#0C1628] rounded-xl border border-white/10 flex items-start gap-4"
              >
                <div class="px-2.5 py-1 rounded bg-[#070D18] border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold shrink-0">
                  {{ item.time }}
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">{{ item.title }}</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- STCW Competency Matrix -->
          <section class="p-5 bg-[#0C1628] rounded-2xl border border-white/10">
            <h3 class="text-sm font-bold text-white uppercase tracking-wide font-mono mb-3">
              STCW 2010 Competency Domains Covered
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                <span class="text-slate-300">Table A-II/1: Bridge Resource Management</span>
              </div>
              <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                <span class="text-slate-300">Table A-II/2: Radar Navigation &amp; ARPA</span>
              </div>
              <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                <span class="text-slate-300">IMO Res. A.1052(27): Port State Control Procedures</span>
              </div>
              <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                <span class="text-slate-300">MSC.1/Circ.1503/Rev.1: ECDIS Guidance</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Col: Speaker Dossier Card & Registration Pass -->
        <div class="space-y-6">
          <!-- Speaker Card -->
          <div class="p-5 bg-[#0C1628] rounded-2xl border border-white/10 shadow-lg">
            <h3 class="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">Keynote Faculty</h3>
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-2xl bg-[#0369A1]/40 border border-sky-400/50 flex items-center justify-center text-[#00E5FF] font-bold font-mono text-lg shrink-0">
                AS
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">{{ webinar.speakerName }}</h4>
                <p class="text-xs text-cyan-400 font-medium">{{ webinar.speakerTitle }}</p>
                <p class="text-[11px] text-slate-400">{{ webinar.instituteName }}</p>
              </div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
              {{ webinar.speakerBio }}
            </p>

            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>SEA-TIME: 22 YEARS</span>
              <span class="text-emerald-400">DG CERTIFIED INSTRUCTOR</span>
            </div>
          </div>

          <!-- Handouts Download Box -->
          <div class="p-5 bg-[#0C1628] rounded-2xl border border-white/10">
            <h3 class="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3">Technical Handouts</h3>
            <div class="space-y-2">
              <a
                href="#"
                @click.prevent="downloadHandout('PSC-Inspection-Checklist-2026.pdf')"
                class="p-3 bg-[#070D18] hover:bg-white/5 rounded-xl border border-white/5 flex items-center justify-between transition group"
              >
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  <div>
                    <p class="text-xs font-semibold text-white group-hover:text-cyan-400 transition">Paris MoU 2026 Checklist</p>
                    <p class="text-[10px] text-slate-500 font-mono">PDF · 3.2 MB</p>
                  </div>
                </div>
                <svg class="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>

              <a
                href="#"
                @click.prevent="downloadHandout('ECDIS-Anomaly-Briefing.pdf')"
                class="p-3 bg-[#070D18] hover:bg-white/5 rounded-xl border border-white/5 flex items-center justify-between transition group"
              >
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  <div>
                    <p class="text-xs font-semibold text-white group-hover:text-cyan-400 transition">ECDIS Anomaly Guidance</p>
                    <p class="text-[10px] text-slate-500 font-mono">PDF · 1.8 MB</p>
                  </div>
                </div>
                <svg class="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLive = ref(true)
const isRegistered = ref(true)
const simulatedPlaying = ref(true)
const newChatMessage = ref('')

const webinar = ref({
  id: 'webinar-psc-rotterdam-2026',
  title: 'Port State Control (PSC) CIC Inspection Tactics & Paris MoU Focus 2026',
  categoryLabel: 'Maritime Law & PSC',
  instituteName: 'Anglo-Eastern Maritime Academy (AEMA)',
  dateTimeDisplay: 'Today · 19:30 UTC · 90 mins',
  isFree: true,
  externalStreamUrl: 'https://zoom.us',
  description: 'An authoritative technical briefing delivered directly by former Port State Control officers. This masterclass covers the concentrated inspection campaign (CIC) focus areas for 2026, including Electronic Chart Display and Information System (ECDIS) data continuity, auxiliary generator emergency load tests, quick-closing valve trip testing, and MLC seafarer wage records.',
  speakerName: 'Capt. Amitabh Sen',
  speakerTitle: 'Senior Nautical Surveyor & Ex-PSC Auditor',
  speakerBio: 'Capt. Sen served 15 years as Master on VLCC and Suezmax tankers, subsequently heading PSC compliance divisions in Western Europe. He currently lectures on navigation bridge ergonomics and statutory compliance audits at Anglo-Eastern Maritime Academy.',
  agenda: [
    {
      time: '00:00 - 00:20',
      title: 'Paris MoU & Tokyo MoU Concentrated Inspection Focus for 2026',
      description: 'Historical deficiency trends, top detention triggers, and regional variations between European and Asian port regimes.'
    },
    {
      time: '00:20 - 00:45',
      title: 'ECDIS & Cyber-Security Audit Protocols',
      description: 'Verifying chart presentation library editions, ENC cell permit validity, and protecting bridge routers against unauthorized USB media.'
    },
    {
      time: '00:45 - 01:15',
      title: 'Machinery Space & Emergency Gear Practical Drills',
      description: 'Emergency fire pump suction trials, lifeboat on-load release hook checks, and engine room quick-closing pneumatic isolators.'
    },
    {
      time: '01:15 - 01:30',
      title: 'Interactive Live Q&A & Rectification Log Advice',
      description: 'Live seafarer queries answered on-air regarding PSC code 17 and code 30 deficiency contestation processes.'
    }
  ]
})

const chatMessages = ref([
  {
    author: 'Capt. Tariq Al-Mansoor',
    rank: 'Master Mariner · Kuwait Oil Tanker Co.',
    time: '19:32',
    text: 'Can Capt. Sen clarify if PSC inspectors in Antwerp are demanding printed safety contour calculation workbooks?'
  },
  {
    author: 'Chief Officer Mikhail Petrov',
    rank: 'Chief Mate · Sovcomflot',
    time: '19:34',
    text: 'Good evening bridge team. Audio and slides are crystal clear from Singapore anchorage.'
  },
  {
    author: '2nd Officer Deepinder Singh',
    rank: 'Navigating Officer · Maersk Line',
    time: '19:36',
    text: 'Does Tokyo MoU count non-updated digital publications as a detainable deficiency if internet was down mid-voyage?'
  },
  {
    author: 'Capt. Amitabh Sen (Host)',
    rank: 'Keynote Speaker',
    time: '19:37',
    text: 'Welcome everyone. We will address Antwerp safety contour worksheets during section 2 of the agenda!'
  }
])

function sendChatMessage() {
  if (!newChatMessage.value.trim()) return
  chatMessages.value.push({
    author: 'Capt. Rajesh Sharma',
    rank: 'Chief Officer (FG) · INDoS 08ZL9431',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    text: newChatMessage.value.trim()
  })
  newChatMessage.value = ''
}

function downloadHandout(fileName: string) {
  alert('Downloading technical publication handout: ' + fileName)
}
</script>
