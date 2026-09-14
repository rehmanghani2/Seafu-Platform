<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- ── HEADER BAR ───────────────────────────────────────────── -->
    <div class="border-b" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · MARITIME JOBS</span>
          </div>
          <h1 class="text-2xl font-bold mt-1" style="color:#e2e8f0;">
            Maritime Recruitment Portal
          </h1>
          <p class="text-sm mt-0.5" style="color:#64748b;">
            DG Shipping certified vessels · Verified recruiters · 1-click verified apply
          </p>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="/jobs/my-applications"
            class="px-4 py-2 text-sm font-medium rounded border transition"
            style="border-color:#1e3a5f; color:#94a3b8; background:transparent;"
            @mouseenter="e => { e.target.style.borderColor='#00E5FF'; e.target.style.color='#00E5FF'; }"
            @mouseleave="e => { e.target.style.borderColor='#1e3a5f'; e.target.style.color='#94a3b8'; }">
            My Applications
          </NuxtLink>
          <button
            class="px-4 py-2 text-sm font-bold rounded transition"
            style="background:linear-gradient(135deg,#0369A1,#00E5FF20); color:#00E5FF; border:1px solid #0369A1;"
            @click="navigateTo('/institute/jobs/post')">
            + Post a Job
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-6 flex gap-6">
      <!-- ── FILTER SIDEBAR ──────────────────────────────────────── -->
      <aside class="w-64 flex-shrink-0 space-y-4">
        <!-- Search -->
        <div class="rounded-xl p-4 border" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">SEARCH</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-base" style="color:#475569;">⌕</span>
            <input v-model="filters.search" type="text" placeholder="Role, rank, vessel..."
              class="w-full pl-8 pr-3 py-2 text-sm rounded-lg border outline-none transition"
              style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
              @focus="e => e.target.style.borderColor='#00E5FF'"
              @blur="e => e.target.style.borderColor='#1e3a5f'"
              @input="debouncedSearch" />
          </div>
        </div>

        <!-- Job Type -->
        <div class="rounded-xl p-4 border" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">JOB TYPE</label>
          <div class="space-y-2">
            <button v-for="type in jobTypes" :key="type.value"
              class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition"
              :style="filters.jobType === type.value
                ? 'background:#0369A120; color:#00E5FF; border:1px solid #0369A1;'
                : 'color:#94a3b8; border:1px solid #1e3a5f; background:transparent;'"
              @click="toggleJobType(type.value)">
              <span class="mr-2">{{ type.icon }}</span>{{ type.label }}
            </button>
          </div>
        </div>

        <!-- Rank Filter -->
        <div class="rounded-xl p-4 border" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">RANK / POSITION</label>
          <div class="space-y-1 max-h-56 overflow-y-auto">
            <button v-for="rank in shipRanks" :key="rank"
              class="w-full text-left px-3 py-1.5 rounded text-xs transition"
              :style="selectedRanks.includes(rank)
                ? 'color:#00E5FF; background:#0369A115;'
                : 'color:#64748b;'"
              @click="toggleRank(rank)">
              <span class="mr-1.5" :style="selectedRanks.includes(rank) ? 'color:#00E5FF;' : 'color:#1e3a5f;'">▸</span>
              {{ rank }}
            </button>
          </div>
        </div>

        <!-- Port of Joining -->
        <div class="rounded-xl p-4 border" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">PORT OF JOINING</label>
          <select v-model="filters.portOfJoining"
            class="w-full px-3 py-2 text-sm rounded-lg border outline-none"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
            @change="applyFilters">
            <option value="">All Ports</option>
            <option v-for="port in ports" :key="port" :value="port">{{ port }}</option>
          </select>
        </div>

        <!-- Ship Type -->
        <div class="rounded-xl p-4 border" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">VESSEL TYPE</label>
          <select v-model="filters.shipType"
            class="w-full px-3 py-2 text-sm rounded-lg border outline-none"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
            @change="applyFilters">
            <option value="">All Vessel Types</option>
            <option v-for="ship in shipTypes" :key="ship" :value="ship">{{ ship }}</option>
          </select>
        </div>

        <!-- Clear Filters -->
        <button class="w-full py-2 text-sm rounded-lg border transition"
          style="border-color:#1e3a5f; color:#64748b;"
          @click="clearFilters"
          @mouseenter="e => { e.target.style.color='#e2e8f0'; e.target.style.borderColor='#334155'; }"
          @mouseleave="e => { e.target.style.color='#64748b'; e.target.style.borderColor='#1e3a5f'; }">
          ✕ Clear Filters
        </button>
      </aside>

      <!-- ── JOB LISTINGS ────────────────────────────────────────── -->
      <div class="flex-1 min-w-0">
        <!-- Results Meta -->
        <div class="flex items-center justify-between mb-4">
          <div class="text-sm" style="color:#64748b;">
            <span style="color:#e2e8f0; font-weight:600;">{{ meta.total }}</span> positions found
            <span v-if="filters.jobType" class="ml-2 px-2 py-0.5 rounded text-xs" style="background:#0369A120; color:#00E5FF;">
              {{ filters.jobType === 'SHIPBOARD' ? '⚓ Shipboard' : '🏢 Shore-based' }}
            </span>
          </div>
          <select v-model="sortBy" class="text-sm rounded-lg px-3 py-1.5 border outline-none"
            style="background:#0a1628; border-color:#0c1a2e; color:#94a3b8;">
            <option value="newest">Newest First</option>
            <option value="salary">Highest Salary</option>
            <option value="premium">Premium First</option>
          </select>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 5" :key="i"
            class="rounded-xl p-5 border animate-pulse"
            style="background:#0a1628; border-color:#0c1a2e; height:130px;">
          </div>
        </div>

        <!-- Job Cards -->
        <div v-else-if="jobs.length" class="space-y-3">
          <div v-for="job in jobs" :key="job.id"
            class="rounded-xl border transition cursor-pointer group"
            style="background:#0a1628; border-color:#0c1a2e;"
            @click="navigateTo(`/jobs/${job.id}`)"
            @mouseenter="e => e.currentTarget.style.borderColor='#0369A1'"
            @mouseleave="e => e.currentTarget.style.borderColor='#0c1a2e'">
            <div class="p-5">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <!-- Company & Premium badge -->
                  <div class="flex items-center gap-2 mb-1.5">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      style="background:#0369A120; color:#00E5FF; border:1px solid #0369A130;">
                      {{ (job.institute?.name || job.companyName).charAt(0) }}
                    </div>
                    <div>
                      <span class="text-sm font-medium" style="color:#94a3b8;">
                        {{ job.institute?.name || job.companyName }}
                      </span>
                      <span v-if="job.isPremium"
                        class="ml-2 text-xs px-2 py-0.5 rounded font-semibold"
                        style="background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b30;">
                        ★ PREMIUM
                      </span>
                    </div>
                  </div>

                  <!-- Job Title -->
                  <h3 class="text-base font-bold mb-2 group-hover:text-cyan-300 transition"
                    style="color:#e2e8f0;">
                    {{ job.title }}
                  </h3>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
                      :style="job.jobType === 'SHIPBOARD'
                        ? 'background:#0369A120; color:#38bdf8; border:1px solid #0369A140;'
                        : 'background:#10b98120; color:#34d399; border:1px solid #10b98140;'">
                      {{ job.jobType === 'SHIPBOARD' ? '⚓ Shipboard' : '🏢 Shore-based' }}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs"
                      style="background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;">
                      {{ job.rank }}
                    </span>
                    <span v-if="job.shipType" class="px-2.5 py-1 rounded-full text-xs"
                      style="background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;">
                      🚢 {{ job.shipType }}
                    </span>
                    <span v-if="job.portOfJoining" class="px-2.5 py-1 rounded-full text-xs"
                      style="background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;">
                      📍 {{ job.portOfJoining }}
                    </span>
                    <span v-if="job.contractDuration" class="px-2.5 py-1 rounded-full text-xs"
                      style="background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;">
                      🕐 {{ job.contractDuration }}
                    </span>
                  </div>
                </div>

                <!-- Right: Salary + Apply CTA -->
                <div class="flex-shrink-0 text-right">
                  <div v-if="job.salary" class="font-bold text-lg" style="color:#00E5FF;">
                    {{ formatSalary(job.salary, job.currency) }}
                    <div class="text-xs font-normal" style="color:#64748b;">per month</div>
                  </div>
                  <div v-else class="text-sm font-medium" style="color:#64748b;">Salary TBD</div>
                  <div class="text-xs mt-2" style="color:#475569;">
                    {{ job._count?.applications || 0 }} applied
                  </div>
                  <div class="text-xs mt-1" style="color:#334155;">
                    {{ timeAgo(job.createdAt) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="rounded-xl border p-16 text-center"
          style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-4xl mb-4">⚓</div>
          <h3 class="text-lg font-semibold mb-2" style="color:#94a3b8;">No positions found</h3>
          <p class="text-sm" style="color:#475569;">Try adjusting your filters or check back later</p>
          <button class="mt-4 px-4 py-2 text-sm rounded-lg border border-cyan-500/30 text-cyan-400"
            @click="clearFilters">Clear all filters</button>
        </div>

        <!-- Pagination -->
        <div v-if="meta.totalPages > 1" class="mt-6 flex items-center justify-center gap-2">
          <button v-for="p in meta.totalPages" :key="p"
            class="w-9 h-9 rounded-lg text-sm font-medium transition border"
            :style="meta.page === p
              ? 'background:#0369A1; color:#e2e8f0; border-color:#0369A1;'
              : 'background:transparent; color:#64748b; border-color:#1e3a5f;'"
            @click="goToPage(p)">
            {{ p }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Maritime Jobs Board · The Seafu' })

const config = useRuntimeConfig()
const apiBase = config.public.apiBase

// ── State ──────────────────────────────────────────────────────────────────
const loading = ref(false)
const jobs = ref<any[]>([])
const meta = ref({ total: 0, page: 1, limit: 20, totalPages: 1 })
const sortBy = ref('newest')
const selectedRanks = ref<string[]>([])

const filters = reactive({
  search: '',
  jobType: '' as '' | 'SHIPBOARD' | 'SHORE_BASED',
  rank: '',
  shipType: '',
  portOfJoining: '',
})

// ── Static Filter Options ──────────────────────────────────────────────────
const jobTypes = [
  { value: 'SHIPBOARD', label: 'Shipboard', icon: '⚓' },
  { value: 'SHORE_BASED', label: 'Shore-based', icon: '🏢' },
]

const shipRanks = [
  'Master', 'Chief Officer', '2nd Officer', '3rd Officer',
  'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer',
  'Electrical Officer', 'Radio Officer', 'Bosun', 'AB Seaman',
  'OS (Ordinary Seaman)', 'Fitter', 'Wiper', 'Cook/Steward',
  'Port Captain', 'Marine Superintendent', 'Ship Manager', 'QHSE Officer',
]

const shipTypes = [
  'Bulk Carrier', 'Container Ship', 'Tanker (Crude)', 'Tanker (Product)',
  'LNG Carrier', 'LPG Carrier', 'General Cargo', 'Ro-Ro',
  'VLCC', 'Offshore Vessel', 'Dredger', 'Tug', 'Chemical Tanker',
]

const ports = [
  'Mumbai (JNPT)', 'Chennai', 'Kolkata', 'Visakhapatnam', 'Cochin',
  'Mundra', 'Paradip', 'Haldia', 'Kandla', 'Mormugao',
  'Singapore', 'Dubai', 'Rotterdam', 'Hamburg',
]

// ── Mock Data for display ──────────────────────────────────────────────────
const mockJobs = [
  {
    id: 'job-001', title: 'Master Mariner — VLCC Tanker', companyName: 'Essence Maritime',
    institute: { name: 'Essence Shipping Pvt Ltd', city: 'Mumbai', state: 'MH' },
    jobType: 'SHIPBOARD', rank: 'Master', shipType: 'VLCC', portOfJoining: 'Mumbai (JNPT)',
    salary: 12000, currency: 'USD', contractDuration: '4 months on / 2 months off',
    isPremium: true, createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    _count: { applications: 18 },
  },
  {
    id: 'job-002', title: 'Chief Engineer — Container Vessel', companyName: 'Blue Horizon Shipping',
    institute: { name: 'Blue Horizon Shipping', city: 'Chennai', state: 'TN' },
    jobType: 'SHIPBOARD', rank: 'Chief Engineer', shipType: 'Container Ship',
    portOfJoining: 'Chennai', salary: 9500, currency: 'USD', contractDuration: '5 months on / 2 months off',
    isPremium: false, createdAt: new Date(Date.now() - 6 * 3600000).toISOString(),
    _count: { applications: 11 },
  },
  {
    id: 'job-003', title: '2nd Officer — Dynamic Positioning Vessel', companyName: 'Offshore Dynamics',
    institute: { name: 'Offshore Dynamics Ltd', city: 'Visakhapatnam', state: 'AP' },
    jobType: 'SHIPBOARD', rank: '2nd Officer', shipType: 'Offshore Vessel',
    portOfJoining: 'Visakhapatnam', salary: 5200, currency: 'USD', contractDuration: '3 months on / 3 months off',
    isPremium: true, createdAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    _count: { applications: 34 },
  },
  {
    id: 'job-004', title: 'Marine Superintendent (Tankers)', companyName: 'IndiaShip Management',
    institute: { name: 'IndiaShip Management', city: 'Mumbai', state: 'MH' },
    jobType: 'SHORE_BASED', rank: 'Marine Superintendent', shipType: null,
    portOfJoining: null, salary: 180000, currency: 'INR', contractDuration: 'Permanent',
    isPremium: false, createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    _count: { applications: 7 },
  },
  {
    id: 'job-005', title: 'QHSE Manager — Fleet Operations', companyName: 'NaviSafe Corp',
    institute: { name: 'NaviSafe Corp', city: 'Cochin', state: 'KL' },
    jobType: 'SHORE_BASED', rank: 'QHSE Officer', shipType: null,
    portOfJoining: null, salary: 120000, currency: 'INR', contractDuration: 'Permanent',
    isPremium: true, createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    _count: { applications: 22 },
  },
  {
    id: 'job-006', title: 'Electrical Officer — LNG Carrier', companyName: 'GasFleet India',
    institute: { name: 'GasFleet India Pvt Ltd', city: 'Mumbai', state: 'MH' },
    jobType: 'SHIPBOARD', rank: 'Electrical Officer', shipType: 'LNG Carrier',
    portOfJoining: 'Mumbai (JNPT)', salary: 6800, currency: 'USD', contractDuration: '4 months on / 2 months off',
    isPremium: false, createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    _count: { applications: 9 },
  },
]

// ── Computed Filtered Jobs ─────────────────────────────────────────────────
const filteredJobs = computed(() => {
  let result = [...mockJobs]

  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.rank.toLowerCase().includes(q) ||
      j.companyName.toLowerCase().includes(q)
    )
  }
  if (filters.jobType) result = result.filter(j => j.jobType === filters.jobType)
  if (selectedRanks.value.length) result = result.filter(j => selectedRanks.value.includes(j.rank))
  if (filters.shipType) result = result.filter(j => j.shipType === filters.shipType)
  if (filters.portOfJoining) result = result.filter(j => j.portOfJoining === filters.portOfJoining)

  return result
})

// ── Lifecycle ──────────────────────────────────────────────────────────────
onMounted(() => {
  jobs.value = mockJobs
  meta.value = { total: mockJobs.length, page: 1, limit: 20, totalPages: 1 }
})

watch(filteredJobs, (val) => {
  jobs.value = val
  meta.value.total = val.length
})

// ── Methods ────────────────────────────────────────────────────────────────
let searchTimer: ReturnType<typeof setTimeout> | null = null
function debouncedSearch() {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(applyFilters, 300)
}

function applyFilters() {
  jobs.value = filteredJobs.value
}

function toggleJobType(type: string) {
  filters.jobType = filters.jobType === type ? '' : type as any
}

function toggleRank(rank: string) {
  const idx = selectedRanks.value.indexOf(rank)
  if (idx === -1) selectedRanks.value.push(rank)
  else selectedRanks.value.splice(idx, 1)
  filters.rank = selectedRanks.value.join(',')
}

function clearFilters() {
  filters.search = ''
  filters.jobType = ''
  filters.rank = ''
  filters.shipType = ''
  filters.portOfJoining = ''
  selectedRanks.value = []
  jobs.value = mockJobs
  meta.value.total = mockJobs.length
}

function goToPage(p: number) {
  meta.value.page = p
}

function formatSalary(salary: number, currency: string): string {
  if (currency === 'USD') return `\$${salary.toLocaleString()}`
  if (currency === 'INR') return `₹${(salary / 1000).toFixed(0)}K`
  return `${currency} ${salary.toLocaleString()}`
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const h = Math.floor(diff / 3600000)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}
</script>
