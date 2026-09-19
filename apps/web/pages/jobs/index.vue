<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20">
    <!-- ── HEADER BAR (NAVY COMMAND STYLE) ───────────────────────────── -->
    <header class="bg-[#0A1936] text-white border-b border-white/10 sticky top-0 z-30 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="flex items-center space-x-2.5 focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl" aria-label="Home">
            <div class="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-white font-bold shadow-xs">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span class="text-lg font-bold text-white tracking-tight block leading-none">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-300 font-semibold block uppercase tracking-wider mt-1">Maritime Recruitment</span>
            </div>
          </NuxtLink>

          <span class="text-slate-600 hidden sm:inline" aria-hidden="true">/</span>
          <div class="hidden sm:flex items-center space-x-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase font-bold">
              DG &bull; IMO Verified
            </span>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <NuxtLink
            to="/jobs/my-applications"
            class="px-3.5 py-2 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>My Applications</span>
          </NuxtLink>

          <button
            type="button"
            @click="navigateTo('/institute/jobs/post')"
            class="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Post a Vacancy</span>
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 items-start">
      <!-- ── FILTER SIDEBAR ──────────────────────────────────────── -->
      <aside class="w-full lg:w-72 shrink-0 space-y-5" aria-label="Job Search Filters">
        <!-- Search Input -->
        <div class="rounded-2xl p-5 bg-white border border-slate-200/80 shadow-xs space-y-2">
          <label for="job-search-input" class="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 block">
            Search Openings
          </label>
          <div class="relative">
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="job-search-input"
              v-model="filters.search"
              type="text"
              placeholder="Role, rank, vessel..."
              class="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
              @input="debouncedSearch"
            />
          </div>
        </div>

        <!-- Job Type Filter -->
        <div class="rounded-2xl p-5 bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div class="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
            Employment Category
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="type in jobTypes"
              :key="type.value"
              type="button"
              class="px-3 py-2 rounded-xl text-xs font-semibold transition border text-center"
              :class="filters.jobType === type.value
                ? 'bg-[#0A1936] text-white border-[#0A1936] font-bold shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'"
              @click="toggleJobType(type.value)"
            >
              {{ type.label }}
            </button>
          </div>
        </div>

        <!-- Rank Filter -->
        <div class="rounded-2xl p-5 bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
              Rank / Position
            </span>
            <span v-if="selectedRanks.length" class="text-[10px] text-blue-700 font-bold font-mono">
              {{ selectedRanks.length }} Selected
            </span>
          </div>
          <div class="space-y-1 max-h-56 overflow-y-auto pr-1">
            <button
              v-for="rank in shipRanks"
              :key="rank"
              type="button"
              class="w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between"
              :class="selectedRanks.includes(rank)
                ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200/80'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
              @click="toggleRank(rank)"
            >
              <span>{{ rank }}</span>
              <svg v-if="selectedRanks.includes(rank)" class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Port of Joining -->
        <div class="rounded-2xl p-5 bg-white border border-slate-200/80 shadow-xs space-y-2">
          <label for="port-joining-select" class="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 block">
            Port of Joining
          </label>
          <select
            id="port-joining-select"
            v-model="filters.portOfJoining"
            class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-600 transition font-medium"
            @change="applyFilters"
          >
            <option value="">All Global Ports</option>
            <option v-for="port in ports" :key="port" :value="port">{{ port }}</option>
          </select>
        </div>

        <!-- Ship Type -->
        <div class="rounded-2xl p-5 bg-white border border-slate-200/80 shadow-xs space-y-2">
          <label for="vessel-type-select" class="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 block">
            Vessel Type
          </label>
          <select
            id="vessel-type-select"
            v-model="filters.shipType"
            class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-600 transition font-medium"
            @change="applyFilters"
          >
            <option value="">All Vessel Types</option>
            <option v-for="ship in shipTypes" :key="ship" :value="ship">{{ ship }}</option>
          </select>
        </div>

        <!-- Clear Filters -->
        <button
          type="button"
          class="w-full py-2.5 text-xs font-bold rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          @click="clearFilters"
        >
          Reset All Filters
        </button>
      </aside>

      <!-- ── JOB LISTINGS ────────────────────────────────────────── -->
      <main class="flex-1 min-w-0 space-y-4" role="main">
        <!-- Results Meta Bar -->
        <div class="flex items-center justify-between bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
          <div class="text-xs text-slate-600 flex items-center space-x-2">
            <span class="font-bold text-slate-900 font-mono text-sm">{{ meta.total }}</span>
            <span>positions available</span>
            <span v-if="filters.jobType" class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {{ filters.jobType === 'SHIPBOARD' ? 'Shipboard' : 'Shore-based' }}
            </span>
          </div>

          <div class="flex items-center space-x-2">
            <label for="sort-select" class="text-xs text-slate-500 font-medium hidden sm:inline">Sort by:</label>
            <select
              id="sort-select"
              v-model="sortBy"
              class="text-xs rounded-xl px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-800 font-medium outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="newest">Newest First</option>
              <option value="salary">Highest Salary</option>
              <option value="premium">Verified Priority</option>
            </select>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="space-y-3">
          <div
            v-for="i in 4"
            :key="i"
            class="rounded-2xl p-6 bg-white border border-slate-200 animate-pulse h-36"
          ></div>
        </div>

        <!-- Job Cards List -->
        <div v-else-if="jobs.length" class="space-y-3.5">
          <article
            v-for="job in jobs"
            :key="job.id"
            class="rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer p-6 space-y-4 shadow-xs group"
            @click="navigateTo(`/jobs/${job.id}`)"
          >
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div class="flex items-start space-x-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl bg-[#0A1936] text-blue-200 flex items-center justify-center font-bold text-base shrink-0 shadow-2xs">
                  {{ (job.institute?.name || job.companyName).charAt(0) }}
                </div>

                <div class="space-y-1 min-w-0">
                  <div class="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span class="text-xs font-semibold text-slate-600 truncate">
                      {{ job.institute?.name || job.companyName }}
                    </span>
                    <span
                      v-if="job.isPremium"
                      class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-50 text-amber-900 border border-amber-200/80 uppercase font-mono"
                    >
                      DGS VERIFIED
                    </span>
                  </div>

                  <h2 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    {{ job.title }}
                  </h2>
                </div>
              </div>

              <!-- Salary Pill -->
              <div class="text-left sm:text-right shrink-0">
                <div v-if="job.salary" class="font-bold text-base sm:text-lg text-slate-900 font-mono">
                  {{ formatSalary(job.salary, job.currency) }}
                  <span class="text-xs font-normal text-slate-500 font-sans block">per month</span>
                </div>
                <div v-else class="text-xs font-medium text-slate-500">
                  Salary Confidential
                </div>
              </div>
            </div>

            <!-- Tags Row -->
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              <span
                class="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1"
                :class="job.jobType === 'SHIPBOARD'
                  ? 'bg-blue-50 text-blue-800 border border-blue-200/70'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200/70'"
              >
                <span>{{ job.jobType === 'SHIPBOARD' ? 'Shipboard' : 'Shore-based' }}</span>
              </span>

              <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
                {{ job.rank }}
              </span>

              <span v-if="job.shipType" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center space-x-1">
                <svg class="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{{ job.shipType }}</span>
              </span>

              <span v-if="job.portOfJoining" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center space-x-1">
                <svg class="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ job.portOfJoining }}</span>
              </span>

              <span v-if="job.contractDuration" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center space-x-1">
                <svg class="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ job.contractDuration }}</span>
              </span>

              <div class="ml-auto flex items-center space-x-3 text-xs text-slate-500 font-mono self-center">
                <span>{{ job._count?.applications || 0 }} applicants</span>
                <span>&bull;</span>
                <span>{{ timeAgo(job.createdAt) }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="rounded-2xl bg-white border border-slate-200 p-16 text-center shadow-xs space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900">No positions found matching your criteria</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your location, rank, or vessel filters to see more commercial sea-going opportunities.
          </p>
          <button
            type="button"
            class="px-4 py-2 text-xs font-bold rounded-xl bg-[#0A1936] text-white hover:bg-[#112752] transition shadow-xs"
            @click="clearFilters"
          >
            Clear All Filters
          </button>
        </div>

        <!-- Pagination -->
        <div v-if="meta.totalPages > 1" class="mt-6 flex items-center justify-center gap-2">
          <button
            v-for="p in meta.totalPages"
            :key="p"
            type="button"
            class="w-9 h-9 rounded-xl text-xs font-bold transition border"
            :class="meta.page === p
              ? 'bg-[#0A1936] text-white border-[#0A1936]'
              : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'"
            @click="goToPage(p)"
          >
            {{ p }}
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue';

useHead({
  title: 'Maritime Jobs Board &bull; The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'DG Shipping and IMO compliant maritime recruitment portal for officers, engineers, ratings, and superintendents.',
    },
  ],
});

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

// ── State ──────────────────────────────────────────────────────────────────
const loading = ref(false);
const jobs = ref<any[]>([]);
const meta = ref({ total: 0, page: 1, limit: 20, totalPages: 1 });
const sortBy = ref('newest');
const selectedRanks = ref<string[]>([]);

const filters = reactive({
  search: '',
  jobType: '' as '' | 'SHIPBOARD' | 'SHORE_BASED',
  rank: '',
  shipType: '',
  portOfJoining: '',
});

// ── Static Filter Options ──────────────────────────────────────────────────
const jobTypes = [
  { value: 'SHIPBOARD', label: 'Shipboard' },
  { value: 'SHORE_BASED', label: 'Shore-based' },
];

const shipRanks = [
  'Master', 'Chief Officer', '2nd Officer', '3rd Officer',
  'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer',
  'Electrical Officer', 'Radio Officer', 'Bosun', 'AB Seaman',
  'OS (Ordinary Seaman)', 'Fitter', 'Wiper', 'Cook/Steward',
  'Port Captain', 'Marine Superintendent', 'Ship Manager', 'QHSE Officer',
];

const shipTypes = [
  'Bulk Carrier', 'Container Ship', 'Tanker (Crude)', 'Tanker (Product)',
  'LNG Carrier', 'LPG Carrier', 'General Cargo', 'Ro-Ro',
  'VLCC', 'Offshore Vessel', 'Dredger', 'Tug', 'Chemical Tanker',
];

const ports = [
  'Mumbai (JNPT)', 'Karachi', 'Chennai', 'Kolkata', 'Visakhapatnam', 'Cochin',
  'Mundra', 'Singapore', 'Dubai', 'Rotterdam', 'Hamburg',
];

// ── Mock Data for display ──────────────────────────────────────────────────
const mockJobs = [
  {
    id: 'job-001',
    title: 'Master Mariner — VLCC Tanker',
    companyName: 'Essence Maritime Fleet',
    institute: { name: 'Essence Shipping Ltd', city: 'Mumbai', state: 'MH' },
    jobType: 'SHIPBOARD',
    rank: 'Master',
    shipType: 'VLCC',
    portOfJoining: 'Mumbai (JNPT)',
    salary: 12000,
    currency: 'USD',
    contractDuration: '4 months on / 2 months off',
    isPremium: true,
    createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    _count: { applications: 18 },
  },
  {
    id: 'job-002',
    title: 'Chief Engineer — Container Vessel',
    companyName: 'Blue Horizon Shipping',
    institute: { name: 'Blue Horizon Shipping', city: 'Chennai', state: 'TN' },
    jobType: 'SHIPBOARD',
    rank: 'Chief Engineer',
    shipType: 'Container Ship',
    portOfJoining: 'Chennai',
    salary: 9500,
    currency: 'USD',
    contractDuration: '5 months on / 2 months off',
    isPremium: false,
    createdAt: new Date(Date.now() - 6 * 3600000).toISOString(),
    _count: { applications: 11 },
  },
  {
    id: 'job-003',
    title: '2nd Officer — Dynamic Positioning Vessel',
    companyName: 'Offshore Dynamics Global',
    institute: { name: 'Offshore Dynamics Ltd', city: 'Visakhapatnam', state: 'AP' },
    jobType: 'SHIPBOARD',
    rank: '2nd Officer',
    shipType: 'Offshore Vessel',
    portOfJoining: 'Visakhapatnam',
    salary: 5200,
    currency: 'USD',
    contractDuration: '3 months on / 3 months off',
    isPremium: true,
    createdAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    _count: { applications: 34 },
  },
  {
    id: 'job-004',
    title: 'Marine Superintendent (Tankers)',
    companyName: 'Apex Fleet Management',
    institute: { name: 'Apex Management', city: 'Karachi', state: 'SD' },
    jobType: 'SHORE_BASED',
    rank: 'Marine Superintendent',
    shipType: null,
    portOfJoining: null,
    salary: 180000,
    currency: 'PKR',
    contractDuration: 'Permanent',
    isPremium: false,
    createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    _count: { applications: 7 },
  },
  {
    id: 'job-005',
    title: 'QHSE Manager — Fleet Operations',
    companyName: 'NaviSafe Corp',
    institute: { name: 'NaviSafe Corp', city: 'Karachi', state: 'SD' },
    jobType: 'SHORE_BASED',
    rank: 'QHSE Officer',
    shipType: null,
    portOfJoining: null,
    salary: 120000,
    currency: 'PKR',
    contractDuration: 'Permanent',
    isPremium: true,
    createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    _count: { applications: 22 },
  },
  {
    id: 'job-006',
    title: 'Electrical Officer — LNG Carrier',
    companyName: 'GasFleet International',
    institute: { name: 'GasFleet Pvt Ltd', city: 'Mumbai', state: 'MH' },
    jobType: 'SHIPBOARD',
    rank: 'Electrical Officer',
    shipType: 'LNG Carrier',
    portOfJoining: 'Mumbai (JNPT)',
    salary: 6800,
    currency: 'USD',
    contractDuration: '4 months on / 2 months off',
    isPremium: false,
    createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    _count: { applications: 9 },
  },
];

// ── Computed Filtered Jobs ─────────────────────────────────────────────────
const filteredJobs = computed(() => {
  let result = [...mockJobs];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.rank.toLowerCase().includes(q) ||
        j.companyName.toLowerCase().includes(q)
    );
  }
  if (filters.jobType) result = result.filter((j) => j.jobType === filters.jobType);
  if (selectedRanks.value.length) result = result.filter((j) => selectedRanks.value.includes(j.rank));
  if (filters.shipType) result = result.filter((j) => j.shipType === filters.shipType);
  if (filters.portOfJoining) result = result.filter((j) => j.portOfJoining === filters.portOfJoining);

  return result;
});

// ── Lifecycle ──────────────────────────────────────────────────────────────
onMounted(() => {
  jobs.value = mockJobs;
  meta.value = { total: mockJobs.length, page: 1, limit: 20, totalPages: 1 };
});

watch(filteredJobs, (val) => {
  jobs.value = val;
  meta.value.total = val.length;
});

// ── Methods ────────────────────────────────────────────────────────────────
let searchTimer: ReturnType<typeof setTimeout> | null = null;
function debouncedSearch() {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilters, 300);
}

function applyFilters() {
  jobs.value = filteredJobs.value;
}

function toggleJobType(type: string) {
  filters.jobType = filters.jobType === type ? '' : (type as any);
}

function toggleRank(rank: string) {
  const idx = selectedRanks.value.indexOf(rank);
  if (idx === -1) selectedRanks.value.push(rank);
  else selectedRanks.value.splice(idx, 1);
  filters.rank = selectedRanks.value.join(',');
}

function clearFilters() {
  filters.search = '';
  filters.jobType = '';
  filters.rank = '';
  filters.shipType = '';
  filters.portOfJoining = '';
  selectedRanks.value = [];
  jobs.value = mockJobs;
  meta.value.total = mockJobs.length;
}

function goToPage(p: number) {
  meta.value.page = p;
}

function formatSalary(salary: number, currency: string): string {
  if (currency === 'USD') return `\$${salary.toLocaleString()}`;
  if (currency === 'PKR') return `PKR ${salary.toLocaleString()}`;
  if (currency === 'INR') return `₹${(salary / 1000).toFixed(0)}K`;
  return `${currency} ${salary.toLocaleString()}`;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}
</script>
