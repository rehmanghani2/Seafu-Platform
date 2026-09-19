<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs" role="banner">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/dashboard"
            class="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xl"
          >
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm">/</span>
          <nav aria-label="Breadcrumb" class="hidden sm:inline-block">
            <span class="text-xs font-semibold text-slate-700">Webinars &amp; Technical Masterclasses</span>
          </nav>
        </div>

        <div class="flex items-center space-x-3">
          <NuxtLink
            to="/webinars"
            target="_blank"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
          >
            <span>Public Catalog</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </NuxtLink>
          <NuxtLink
            to="/institute/webinars/create"
            class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>+ Schedule Webinar</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Webinars &amp; Technical Masterclasses
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              Host free and paid maritime masterclasses &bull; Zoom, Teams &amp; WebRTC live bridges &bull; Automated CPD attendance certificates.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-semibold text-blue-900 bg-blue-100/90 px-3 py-1.5 rounded-xl border border-blue-200">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Broadcast Hub Ready</span>
          </div>
        </div>

        <!-- 4 KPI Telemetry Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Total Webinars</span>
            <div class="text-2xl font-black text-slate-900 mt-1">5 Sessions</div>
            <span class="text-[10px] text-emerald-600 font-semibold font-mono">1 Live · 2 Upcoming</span>
          </div>
          <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Enrolled Seafarers</span>
            <div class="text-2xl font-black text-blue-700 mt-1">842 Attendees</div>
            <span class="text-[10px] text-slate-500 font-mono">Avg 168 per session</span>
          </div>
          <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Ticket Revenue</span>
            <div class="text-2xl font-black text-emerald-700 mt-1">₹4,42,000</div>
            <span class="text-[10px] text-emerald-600 font-semibold font-mono">Escrow Protected</span>
          </div>
          <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Satisfaction Index</span>
            <div class="text-2xl font-black text-amber-600 mt-1">4.9 / 5.0</div>
            <span class="text-[10px] text-slate-500 font-mono">Based on 614 reviews</span>
          </div>
        </div>

        <!-- Webinar Management Table -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div class="p-4 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 class="text-sm font-bold text-slate-900">Scheduled &amp; Active Masterclasses</h2>
            <div class="flex items-center gap-2">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Filter by title..."
                class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-mono uppercase text-[10px]">
                  <th class="py-3 px-4">Webinar Title &amp; Category</th>
                  <th class="py-3 px-4">Speaker Faculty</th>
                  <th class="py-3 px-4">Schedule (UTC)</th>
                  <th class="py-3 px-4">Seats / Cap</th>
                  <th class="py-3 px-4">Pricing</th>
                  <th class="py-3 px-4">Status</th>
                  <th class="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="item in filteredList" :key="item.id" class="hover:bg-slate-50/60 transition">
                  <td class="py-3.5 px-4 font-medium text-slate-900">
                    <div class="font-bold text-slate-900">{{ item.title }}</div>
                    <span class="text-[10px] font-mono font-bold uppercase text-blue-700">{{ item.category }}</span>
                  </td>
                  <td class="py-3.5 px-4 text-slate-700">
                    <div class="font-semibold">{{ item.speaker }}</div>
                    <div class="text-[11px] text-slate-500">{{ item.speakerRank }}</div>
                  </td>
                  <td class="py-3.5 px-4 font-mono text-slate-600">
                    {{ item.dateTime }}
                  </td>
                  <td class="py-3.5 px-4">
                    <div class="flex items-center gap-2">
                      <span class="font-mono font-bold text-slate-800">{{ item.enrolled }} / {{ item.capacity }}</span>
                    </div>
                    <div class="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                      <div class="bg-blue-600 h-full rounded-full" :style="{ width: Math.round((item.enrolled / item.capacity) * 100) + '%' }"></div>
                    </div>
                  </td>
                  <td class="py-3.5 px-4 font-mono font-bold">
                    <span :class="item.isFree ? 'text-emerald-700' : 'text-slate-900'">
                      {{ item.isFree ? 'FREE' : item.price }}
                    </span>
                  </td>
                  <td class="py-3.5 px-4">
                    <span
                      class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase"
                      :class="item.status === 'LIVE' ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse' : 'bg-blue-50 text-blue-700 border border-blue-200'"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" :class="item.status === 'LIVE' ? 'bg-red-600' : 'bg-blue-600'"></span>
                      <span>{{ item.status }}</span>
                    </span>
                  </td>
                  <td class="py-3.5 px-4 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button
                        @click="openRoster(item)"
                        class="px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-semibold transition"
                      >
                        Roster ({{ item.enrolled }})
                      </button>
                      <NuxtLink
                        :to="'/webinars/' + item.id"
                        target="_blank"
                        class="px-2.5 py-1 rounded-lg bg-[#0A1936] hover:bg-[#112752] text-white text-[11px] font-bold transition"
                      >
                        {{ item.status === 'LIVE' ? 'Join Bridge' : 'Preview' }}
                      </NuxtLink>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Attendee Roster Modal -->
    <div v-if="rosterWebinar" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div class="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
        <button
          @click="rosterWebinar = null"
          class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 class="text-base font-bold text-slate-900">Registered Candidate Roster</h3>
        <p class="text-xs text-slate-500 mt-0.5">
          {{ rosterWebinar.title }} &bull; {{ rosterWebinar.enrolled }} Registered Candidates
        </p>

        <!-- Candidate List Table -->
        <div class="mt-4 flex-1 overflow-y-auto border border-slate-200 rounded-xl">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[10px] uppercase">
                <th class="py-2.5 px-3">Candidate Name</th>
                <th class="py-2.5 px-3">INDoS &amp; CDC</th>
                <th class="py-2.5 px-3">Pass Code</th>
                <th class="py-2.5 px-3">Attendance</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="cand in sampleCandidates" :key="cand.indos" class="hover:bg-slate-50">
                <td class="py-2.5 px-3 font-semibold text-slate-900">
                  {{ cand.name }}
                  <div class="text-[10px] text-slate-500 font-normal">{{ cand.rank }}</div>
                </td>
                <td class="py-2.5 px-3 font-mono text-slate-600">
                  <div>{{ cand.indos }}</div>
                  <div class="text-[10px] text-slate-400">{{ cand.cdc }}</div>
                </td>
                <td class="py-2.5 px-3 font-mono font-bold text-blue-700">
                  {{ cand.passCode }}
                </td>
                <td class="py-2.5 px-3">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>VERIFIED</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center">
          <span class="text-xs text-slate-500 font-mono">Auto-CPD Token transmission active</span>
          <button
            @click="rosterWebinar = null"
            class="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
          >
            Close Roster
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const rosterWebinar = ref<any>(null)

const webinarsList = ref([
  {
    id: 'webinar-psc-rotterdam-2026',
    title: 'Port State Control (PSC) CIC Inspection Tactics & Paris MoU Focus 2026',
    category: 'MARITIME LAW & PSC',
    speaker: 'Capt. Amitabh Sen',
    speakerRank: 'Senior Nautical Surveyor',
    dateTime: 'Today · 19:30 UTC',
    enrolled: 242,
    capacity: 250,
    isFree: true,
    price: 'FREE',
    status: 'LIVE'
  },
  {
    id: 'webinar-ecdis-cyber-resilience',
    title: 'Bridge ECDIS Cyber Resilience & IMO Resolution MSC.428(98)',
    category: 'BRIDGE NAVIGATION',
    speaker: 'Capt. Keith Fernandes',
    speakerRank: 'Navigation Simulator Head',
    dateTime: 'Tomorrow · 14:00 UTC',
    enrolled: 168,
    capacity: 200,
    isFree: false,
    price: '₹799 · $10',
    status: 'SCHEDULED'
  },
  {
    id: 'webinar-high-voltage-troubleshoot',
    title: 'Marine High Voltage (6.6kV) Switchboard Arc-Flash Safety',
    category: 'MARINE ENGINEERING',
    speaker: 'Chief Eng. Sunil K. Nair',
    speakerRank: 'Technical Superintendent',
    dateTime: '22 Sep 2026 · 11:00 UTC',
    enrolled: 94,
    capacity: 150,
    isFree: false,
    price: '₹1,299 · $16',
    status: 'SCHEDULED'
  }
])

const filteredList = computed(() => {
  return webinarsList.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.speaker.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const sampleCandidates = [
  { name: 'Capt. Rajesh Sharma', rank: 'Master FG', indos: '08ZL9431', cdc: 'MUM-149028', passCode: 'SF-PASS-884920' },
  { name: 'Chief Off. Vikrant Singh', rank: 'Chief Mate', indos: '11NL4490', cdc: 'KOL-339102', passCode: 'SF-PASS-554109' },
  { name: '2nd Off. Andrea Rossi', rank: '2nd Officer', indos: '14IT9921', cdc: 'GEN-891044', passCode: 'SF-PASS-112489' },
  { name: 'Capt. Tariq Al-Mansoor', rank: 'Master Mariner', indos: '09KW3141', cdc: 'KWT-991204', passCode: 'SF-PASS-773012' }
]

function openRoster(item: any) {
  rosterWebinar.value = item
}
</script>
