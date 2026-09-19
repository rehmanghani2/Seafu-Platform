<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
    <!-- Top Navigation Bar -->
    <header class="sticky top-0 z-40 bg-[#04142E]/95 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-base font-bold tracking-tight text-white">The Seafu</span>
              <span class="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">BROADCAST</span>
            </div>
            <p class="text-[10px] text-slate-400 font-mono">Maritime Webinars &amp; STCW Masterclasses</p>
          </div>
        </NuxtLink>

        <div class="flex items-center gap-3">
          <NuxtLink to="/courses" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Courses
          </NuxtLink>
          <NuxtLink to="/publications" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Publications
          </NuxtLink>
          <NuxtLink to="/jobs" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Jobs
          </NuxtLink>
          <NuxtLink to="/institute/webinars" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0369A1] hover:bg-[#0284C7] text-white text-xs font-semibold transition border border-sky-400/30">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Host a Webinar</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Header -->
    <section class="relative border-b border-white/10 bg-gradient-to-b from-[#0A1628] via-[#071324] to-[#070D18] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE MARITIME KNOWLEDGE STREAM</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              STCW Masterclasses &amp; Bridge Briefings
            </h1>
            <p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
              Direct technical sessions hosted by accredited Maritime Academies, Senior Master Mariners, and Marine Chief Engineers. Gain verified attendance tokens for continuous professional development.
            </p>
          </div>

          <!-- Quick Metrics Panel -->
          <div class="grid grid-cols-3 gap-3 w-full md:w-auto bg-[#0C1A30] border border-white/10 p-4 rounded-xl shadow-lg">
            <div class="text-center px-3">
              <div class="text-xl font-bold font-mono text-[#00E5FF]">1</div>
              <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Live Stream</div>
            </div>
            <div class="text-center px-3 border-x border-white/10">
              <div class="text-xl font-bold font-mono text-emerald-400">8</div>
              <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Upcoming</div>
            </div>
            <div class="text-center px-3">
              <div class="text-xl font-bold font-mono text-amber-300">3,420</div>
              <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Attendees</div>
            </div>
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <!-- Search -->
          <div class="relative flex-1 max-w-md">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by topic, speaker, or academy..."
              class="w-full pl-10 pr-4 py-2.5 bg-[#0C1628] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
            />
          </div>

          <!-- Category Chips -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition"
              :class="selectedCategory === cat.id ? 'bg-[#00E5FF] text-[#070D18] font-bold shadow-md shadow-cyan-500/20' : 'bg-[#0C1628] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'"
            >
              {{ cat.label }}
            </button>
          </div>

          <!-- Price Toggle -->
          <div class="flex items-center bg-[#0C1628] p-1 rounded-xl border border-white/10 shrink-0">
            <button
              @click="priceFilter = 'ALL'"
              class="px-3 py-1 text-xs font-semibold rounded-lg transition"
              :class="priceFilter === 'ALL' ? 'bg-[#0369A1] text-white' : 'text-slate-400 hover:text-white'"
            >
              All
            </button>
            <button
              @click="priceFilter = 'FREE'"
              class="px-3 py-1 text-xs font-semibold rounded-lg transition"
              :class="priceFilter === 'FREE' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'"
            >
              Free
            </button>
            <button
              @click="priceFilter = 'PAID'"
              class="px-3 py-1 text-xs font-semibold rounded-lg transition"
              :class="priceFilter === 'PAID' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'"
            >
              Masterclass
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Webinar Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div v-if="filteredWebinars.length === 0" class="text-center py-16 bg-[#0C1628] rounded-2xl border border-white/10">
        <svg class="mx-auto w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <p class="mt-4 text-sm font-semibold text-slate-300">No matching webinars found</p>
        <p class="mt-1 text-xs text-slate-500">Try adjusting your filters or search keywords.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in filteredWebinars"
          :key="item.id"
          class="group bg-[#0C1628] border border-white/10 hover:border-[#00E5FF]/50 rounded-2xl p-5 flex flex-col justify-between transition duration-300 hover:shadow-xl hover:shadow-[#00E5FF]/5 relative overflow-hidden"
        >
          <!-- Top Badge Bar -->
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wide uppercase"
                :class="item.status === 'LIVE' ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' : 'bg-[#0F2642] text-cyan-300 border border-cyan-500/30'"
              >
                <span v-if="item.status === 'LIVE'" class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span v-else class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{{ item.status === 'LIVE' ? 'LIVE BROADCAST' : item.countdown }}</span>
              </span>

              <span
                class="text-xs font-mono font-bold px-2 py-0.5 rounded"
                :class="item.isFree ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'"
              >
                {{ item.isFree ? 'FREE' : item.priceDisplay }}
              </span>
            </div>

            <!-- Title & Category -->
            <div class="mb-2">
              <span class="text-[10px] font-mono font-semibold uppercase text-cyan-400 tracking-wider">
                {{ item.categoryLabel }}
              </span>
              <h2 class="text-base font-bold text-white group-hover:text-[#00E5FF] transition leading-snug mt-1">
                <NuxtLink :to="'/webinars/' + item.id">
                  {{ item.title }}
                </NuxtLink>
              </h2>
            </div>

            <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Speaker Profile Box -->
            <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#0369A1]/30 border border-sky-400/40 flex items-center justify-center text-cyan-300 shrink-0 font-bold text-xs font-mono">
                {{ item.speakerInitials }}
              </div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate">{{ item.speakerName }}</p>
                <p class="text-[11px] text-slate-400 truncate">{{ item.speakerTitle }}</p>
                <p class="text-[10px] text-cyan-400 font-medium truncate">{{ item.instituteName }}</p>
              </div>
            </div>
          </div>

          <!-- Footer Telemetry & CTAs -->
          <div class="pt-4 border-t border-white/10">
            <div class="flex items-center justify-between text-[11px] text-slate-400 mb-3 font-mono">
              <span class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ item.dateTimeDisplay }}</span>
              </span>
              <span>{{ item.duration }}</span>
            </div>

            <!-- Capacity Progress -->
            <div class="mb-4">
              <div class="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                <span>Seats Registered</span>
                <span class="text-white font-bold">{{ item.seatsBooked }} / {{ item.maxSeats }}</span>
              </div>
              <div class="w-full bg-[#070D18] h-1.5 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-500"
                  :class="item.status === 'LIVE' ? 'bg-red-500' : 'bg-[#00E5FF]'"
                  :style="{ width: Math.min(100, Math.round((item.seatsBooked / item.maxSeats) * 100)) + '%' }"
                ></div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                :to="'/webinars/' + item.id"
                class="px-3 py-2 rounded-xl text-xs font-semibold text-center border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition"
              >
                Agenda &amp; Bio
              </NuxtLink>
              <button
                @click="openRegistration(item)"
                class="px-3 py-2 rounded-xl text-xs font-bold text-center transition shadow-sm"
                :class="item.status === 'LIVE' ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18]'"
              >
                {{ item.status === 'LIVE' ? 'Join Live Bridge' : 'Reserve Seat' }}
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>

    <!-- Interactive Registration Modal -->
    <div v-if="selectedWebinar" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div class="bg-[#0C1628] border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          @click="selectedWebinar = null"
          class="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Confirmed Pass State -->
        <div v-if="registrationConfirmed">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-center text-white">Webinar Pass Issued</h3>
          <p class="text-xs text-center text-slate-400 mt-1">Your seat is locked on the maritime broadcast bridge.</p>

          <div class="mt-5 p-4 bg-[#070D18] border border-emerald-500/30 rounded-xl space-y-3 font-mono text-xs">
            <div class="flex justify-between pb-2 border-b border-white/10">
              <span class="text-slate-400">PASS CODE:</span>
              <span class="text-[#00E5FF] font-bold">SF-PASS-{{ Math.floor(100000 + Math.random() * 900000) }}</span>
            </div>
            <div class="flex justify-between pb-2 border-b border-white/10">
              <span class="text-slate-400">SESSION:</span>
              <span class="text-white truncate max-w-[200px]">{{ selectedWebinar.title }}</span>
            </div>
            <div class="flex justify-between pb-2 border-b border-white/10">
              <span class="text-slate-400">CANDIDATE:</span>
              <span class="text-white">{{ form.fullName }} (INDoS: {{ form.indosNumber }})</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">STATUS:</span>
              <span class="text-emerald-400 font-bold">ESCROW SECURED</span>
            </div>
          </div>

          <div class="mt-6 flex gap-3">
            <NuxtLink
              :to="'/webinars/' + selectedWebinar.id"
              class="flex-1 py-2.5 rounded-xl bg-[#0369A1] hover:bg-sky-500 text-white font-bold text-xs text-center transition"
            >
              Open Live Bridge Page
            </NuxtLink>
            <button
              @click="selectedWebinar = null; registrationConfirmed = false"
              class="px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>

        <!-- Registration Form State -->
        <div v-else>
          <div class="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
            <span>REGISTRATION &amp; PASS CHECKOUT</span>
          </div>
          <h3 class="text-lg font-bold text-white leading-snug">{{ selectedWebinar.title }}</h3>
          <p class="text-xs text-slate-400 mt-1">
            Hosted by {{ selectedWebinar.instituteName }} · {{ selectedWebinar.dateTimeDisplay }}
          </p>

          <form @submit.prevent="confirmRegistration" class="mt-5 space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Full Name (as per CDC / Passport)</label>
              <input
                v-model="form.fullName"
                required
                type="text"
                placeholder="Capt. Rajesh Sharma"
                class="w-full px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">INDoS Number</label>
                <input
                  v-model="form.indosNumber"
                  required
                  type="text"
                  placeholder="08ZL9431"
                  class="w-full px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">CDC / Rank</label>
                <input
                  v-model="form.rank"
                  required
                  type="text"
                  placeholder="Chief Officer / Master"
                  class="w-full px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Email (for stream bridge invite &amp; attendance pass)</label>
              <input
                v-model="form.email"
                required
                type="email"
                placeholder="r.sharma@merchantnavy.org"
                class="w-full px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            <!-- Pricing Summary -->
            <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <p class="text-[11px] text-slate-400">Total Payable</p>
                <p class="text-sm font-bold font-mono text-[#00E5FF]">{{ selectedWebinar.isFree ? 'FREE (No fee required)' : selectedWebinar.priceDisplay }}</p>
              </div>
              <div class="text-right">
                <span class="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span>100% Escrow Protected</span>
                </span>
              </div>
            </div>

            <div class="pt-2 flex gap-3">
              <button
                type="button"
                @click="selectedWebinar = null"
                class="flex-1 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="flex-1 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18] font-bold text-xs transition"
              >
                {{ selectedWebinar.isFree ? 'Confirm Free Registration' : 'Proceed to Checkout' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('ALL')
const priceFilter = ref('ALL')
const selectedWebinar = ref<any>(null)
const registrationConfirmed = ref(false)

const form = ref({
  fullName: 'Capt. Rajesh Sharma',
  indosNumber: '08ZL9431',
  rank: 'Chief Officer (FG)',
  email: 'rajesh.sharma@maritime.org'
})

const categories = [
  { id: 'ALL', label: 'All Modules' },
  { id: 'NAVIGATION', label: 'Bridge & Navigation' },
  { id: 'ENGINEERING', label: 'Marine Engineering' },
  { id: 'MARITIME_LAW', label: 'Maritime Law & PSC' },
  { id: 'SAFETY', label: 'STCW Safety & Survival' },
  { id: 'OFFSHORE', label: 'DP & Offshore Operations' }
]

const webinars = ref([
  {
    id: 'webinar-psc-rotterdam-2026',
    title: 'Port State Control (PSC) CIC Inspection Tactics & Paris MoU Focus 2026',
    description: 'Practical briefing covering high-deficiency areas under Paris MoU & Tokyo MoU, ECDIS audit compliance, emergency steering drills, and ballast water management logging.',
    category: 'MARITIME_LAW',
    categoryLabel: 'Maritime Law & PSC',
    status: 'LIVE',
    countdown: 'LIVE NOW',
    isFree: true,
    priceDisplay: 'FREE',
    speakerName: 'Capt. Amitabh Sen',
    speakerTitle: 'Senior Nautical Surveyor & Ex-PSC Inspector',
    speakerInitials: 'AS',
    instituteName: 'Anglo-Eastern Maritime Academy (AEMA)',
    dateTimeDisplay: 'Today · 19:30 UTC',
    duration: '90 mins',
    seatsBooked: 242,
    maxSeats: 250
  },
  {
    id: 'webinar-ecdis-cyber-resilience',
    title: 'Bridge ECDIS Cyber Resilience & IMO Resolution MSC.428(98) Audit Protocol',
    description: 'Safeguarding bridge networks against GPS spoofing, malware injection in electronic chart updates, and establishing verified air-gapped backup protocols.',
    category: 'NAVIGATION',
    categoryLabel: 'Bridge & Navigation',
    status: 'SCHEDULED',
    countdown: 'Starts in 2h 15m',
    isFree: false,
    priceDisplay: '₹799 · $10',
    speakerName: 'Capt. Keith Fernandes',
    speakerTitle: 'Lead Navigation Simulator Instructor',
    speakerInitials: 'KF',
    instituteName: 'Tolani Maritime Institute (TMI Pune)',
    dateTimeDisplay: 'Tomorrow · 14:00 UTC',
    duration: '120 mins',
    seatsBooked: 168,
    maxSeats: 200
  },
  {
    id: 'webinar-high-voltage-troubleshoot',
    title: 'Marine High Voltage (6.6kV) Switchboard Arc-Flash Safety & Troubleshooting',
    description: 'Mandatory technical refresher on STCW A-III/2 high voltage architectures, vacuum circuit breaker servicing, earthing down protocols, and permit-to-work systems.',
    category: 'ENGINEERING',
    categoryLabel: 'Marine Engineering',
    status: 'SCHEDULED',
    countdown: 'Starts in 1d 4h',
    isFree: false,
    priceDisplay: '₹1,299 · $16',
    speakerName: 'Chief Eng. Sunil K. Nair',
    speakerTitle: 'Technical Superintendent & High Voltage Specialist',
    speakerInitials: 'SN',
    instituteName: 'Samundra Institute of Maritime Studies (SIMS)',
    dateTimeDisplay: '22 Sep 2026 · 11:00 UTC',
    duration: '120 mins',
    seatsBooked: 94,
    maxSeats: 150
  },
  {
    id: 'webinar-polar-code-navigation',
    title: 'Polar Code Operations & Ice Navigation: IMO Guidelines & Simulator Readiness',
    description: 'Nautical considerations in high-latitude transit: sea-ice typology, POLARIS risk assessment, structural damage mitigation, and winterization checklists.',
    category: 'NAVIGATION',
    categoryLabel: 'Bridge & Navigation',
    status: 'SCHEDULED',
    countdown: 'Starts in 3d 8h',
    isFree: true,
    priceDisplay: 'FREE',
    speakerName: 'Capt. Henrik Vestergaard',
    speakerTitle: 'Ice Navigator & Master FG',
    speakerInitials: 'HV',
    instituteName: 'Maritime Training Academy Mumbai',
    dateTimeDisplay: '24 Sep 2026 · 15:00 UTC',
    duration: '90 mins',
    seatsBooked: 130,
    maxSeats: 300
  },
  {
    id: 'webinar-advanced-fire-tactics',
    title: 'Ro-Ro & Container Vessel Fire Ground Command: Lithium Battery Thermal Runaway',
    description: 'Emergency response strategies for electric vehicle fires on car carriers and container box fires in remote mid-ocean conditions under SOLAS amendments.',
    category: 'SAFETY',
    categoryLabel: 'STCW Safety & Survival',
    status: 'SCHEDULED',
    countdown: 'Starts in 5d',
    isFree: true,
    priceDisplay: 'FREE',
    speakerName: 'Capt. Rajiv Mehra',
    speakerTitle: 'Chief Safety Officer & Fire Ground Commander',
    speakerInitials: 'RM',
    instituteName: 'Goa Offshore Safety Center',
    dateTimeDisplay: '26 Sep 2026 · 10:00 UTC',
    duration: '75 mins',
    seatsBooked: 210,
    maxSeats: 250
  },
  {
    id: 'webinar-dp-positioning-failure',
    title: 'Dynamic Positioning (DP2/DP3) Failure Modes & Kongsberg K-Pos Handover',
    description: 'Detailed analysis of DP station-keeping loss incidents, reference sensor dropouts (DGPS/Taut-wire), and emergency DP bridge team management.',
    category: 'OFFSHORE',
    categoryLabel: 'DP & Offshore Operations',
    status: 'SCHEDULED',
    countdown: 'Starts in 7d',
    isFree: false,
    priceDisplay: '₹1,499 · $18',
    speakerName: 'Senior DPO Marcus D\'Souza',
    speakerTitle: 'IMCA Certified Senior DP Master',
    speakerInitials: 'MD',
    instituteName: 'AMET University Chennai',
    dateTimeDisplay: '28 Sep 2026 · 13:00 UTC',
    duration: '120 mins',
    seatsBooked: 76,
    maxSeats: 120
  }
])

const filteredWebinars = computed(() => {
  return webinars.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.speakerName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.instituteName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = selectedCategory.value === 'ALL' || item.category === selectedCategory.value

    const matchesPrice = priceFilter.value === 'ALL' ||
      (priceFilter.value === 'FREE' && item.isFree) ||
      (priceFilter.value === 'PAID' && !item.isFree)

    return matchesSearch && matchesCategory && matchesPrice
  })
})

function openRegistration(item: any) {
  selectedWebinar.value = item
  registrationConfirmed.value = false
}

function confirmRegistration() {
  registrationConfirmed.value = true
  // Increment seats locally
  if (selectedWebinar.value) {
    selectedWebinar.value.seatsBooked = Math.min(selectedWebinar.value.maxSeats, selectedWebinar.value.seatsBooked + 1)
  }
}
</script>
