<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="closeModals"
  >
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs" role="banner">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/dashboard"
            class="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xl"
            aria-label="Back to Academy Console Home"
          >
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm" aria-hidden="true">/</span>
          <nav aria-label="Breadcrumb" class="hidden sm:inline-block">
            <span class="text-xs font-semibold text-slate-700">Batch Scheduling &amp; Seat Radar</span>
          </nav>
        </div>

        <button
          @click="showBatchModal = true"
          type="button"
          class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Schedule New Batch</span>
        </button>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full" role="main">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Batch Scheduling &amp; Real-Time Seat Radar
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              Live seat inventory management &bull; 10-minute temporary quota lock protection &bull; Simulator &amp; faculty allocation.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-3 py-1.5 rounded-xl border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true"></span>
            <span>Atomic Quota Locking Active</span>
          </div>
        </div>

        <!-- 4 Radar KPI Metrics -->
        <section aria-label="Batch Quota Metrics" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">TOTAL ACTIVE BATCHES</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">8 Batches</div>
            <div class="text-[11px] text-emerald-800 font-semibold">100% Fully Staffed</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">TOTAL CAPACITY</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">420 Seats</div>
            <div class="text-[11px] text-slate-600 font-medium">340 Enrolled</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">SEAT OCCUPANCY</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">84.2%</div>
            <div class="text-[11px] text-blue-800 font-semibold">High Demand Cycle</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">TEMPORARY CHECKOUT LOCKS</div>
            <div class="text-2xl font-bold text-amber-800 font-mono">12 Seats</div>
            <div class="text-[11px] text-slate-600 font-medium">10-min countdown</div>
          </div>
        </section>

        <!-- Search & Status Filter -->
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <div class="relative w-full sm:flex-1">
            <label for="batch-search-field" class="sr-only">Search batch</label>
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="batch-search-field"
              v-model="searchCode"
              type="text"
              placeholder="Search batch code (e.g. GP3-2026, SIM-BRM, HND)..."
              class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
          </div>

          <div class="flex items-center space-x-2 w-full sm:w-auto">
            <label for="batch-status-filter" class="text-xs font-semibold text-slate-600 shrink-0">Status:</label>
            <select
              id="batch-status-filter"
              v-model="filterStatus"
              class="px-3 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Batches ({{ batches.length }})</option>
              <option value="ACTIVE">Active Intake Only</option>
            </select>
          </div>
        </div>

        <!-- Batches Table -->
        <div class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs" aria-label="Active batches schedule radar">
              <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-5 py-3.5">BATCH &amp; PROGRAM</th>
                  <th scope="col" class="px-5 py-3.5">TIMELINE &amp; DATES</th>
                  <th scope="col" class="px-5 py-3.5">FACILITY &amp; INSTRUCTOR</th>
                  <th scope="col" class="px-5 py-3.5">SEAT RADAR &amp; QUOTA</th>
                  <th scope="col" class="px-5 py-3.5">FEE (PKR)</th>
                  <th scope="col" class="px-5 py-3.5">STATUS</th>
                  <th scope="col" class="px-5 py-3.5 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="b in filteredBatches" :key="b.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ b.title }}</div>
                    <div class="text-[11px] font-mono text-blue-700 font-semibold mt-0.5">{{ b.code }} &bull; {{ b.courseName }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono text-slate-700">
                    <div class="font-bold text-slate-900">{{ b.startDate }} &ndash; {{ b.endDate }}</div>
                    <div class="text-[10px] text-slate-500 mt-0.5">{{ b.timing }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-medium text-slate-900">{{ b.facility }}</div>
                    <div class="text-[10px] text-slate-500 mt-0.5">{{ b.instructor }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="flex items-center space-x-2">
                      <span class="font-bold text-slate-900 font-mono">{{ b.enrolled }} / {{ b.capacity }}</span>
                      <span
                        class="text-[10px] font-bold"
                        :class="getQuotaStatusColor(b.enrolled, b.capacity)"
                      >
                        ({{ b.capacity - b.enrolled }} left)
                      </span>
                    </div>
                    <div class="w-28 bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div
                        class="h-full rounded-full transition-all duration-300"
                        :class="getBarColor(b.enrolled, b.capacity)"
                        :style="{ width: `${Math.min(100, Math.round((b.enrolled / b.capacity) * 100))}%` }"
                      ></div>
                    </div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-900">
                    {{ b.fee.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {{ b.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="viewRosterModal(b)"
                      type="button"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      Roster ({{ b.enrolled }})
                    </button>
                    <button
                      @click="adjustCapacity(b)"
                      type="button"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      Edit Cap
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal: Candidate Roster Viewer -->
    <div
      v-if="selectedRosterBatch"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="roster-modal-title"
      @click.self="selectedRosterBatch = null"
    >
      <div class="max-w-xl w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="roster-modal-title" class="text-base font-bold text-slate-900">
              Candidate Roster &bull; {{ selectedRosterBatch.code }}
            </h3>
            <p class="text-xs text-slate-500">{{ selectedRosterBatch.title }} ({{ selectedRosterBatch.enrolled }} Enrolled)</p>
          </div>
          <button
            @click="selectedRosterBatch = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close roster modal"
          >
            ✕
          </button>
        </div>

        <div class="divide-y divide-slate-100 max-h-72 overflow-y-auto">
          <div
            v-for="cand in rosterCandidates"
            :key="cand.indos"
            class="py-3 flex items-center justify-between"
          >
            <div>
              <div class="font-bold text-xs text-slate-900">{{ cand.name }}</div>
              <div class="text-[10px] font-mono text-slate-500">INDoS: {{ cand.indos }} &bull; CDC: {{ cand.cdc }}</div>
            </div>
            <div class="text-right">
              <span class="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                {{ cand.attendance }} Attendance
              </span>
            </div>
          </div>
        </div>

        <div class="pt-3 flex justify-between items-center border-t border-slate-100">
          <NuxtLink
            to="/institute/certificates"
            class="text-xs font-bold text-blue-700 hover:underline"
          >
            Go to Certificate Issuance &rarr;
          </NuxtLink>
          <button
            @click="selectedRosterBatch = null"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Schedule New Batch -->
    <div
      v-if="showBatchModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-batch-title"
      @click.self="showBatchModal = false"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="new-batch-title" class="text-base font-bold text-slate-900">Schedule New Training Batch</h3>
            <p class="text-xs text-slate-500">Allocate intake quota, classroom, and instructor.</p>
          </div>
          <button
            @click="showBatchModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form @submit.prevent="saveBatch" class="space-y-4">
          <div>
            <label for="new-batch-course" class="block text-xs font-bold text-slate-700 mb-1">Select Course Program *</label>
            <select
              id="new-batch-course"
              v-model="newBatch.courseName"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="GP-III Pre-Sea">General Purpose Rating (GP-III)</option>
              <option value="Nautical Science SQA">Advance Diploma Nautical Science (OOW)</option>
              <option value="BRM Simulator">Bridge Resource Management (BRM)</option>
              <option value="Advanced Fire Fighting">Advanced Fire Fighting (AFF)</option>
              <option value="ECDIS IMO 1.27">ECDIS Type-Specific Simulator</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="new-batch-code" class="block text-xs font-bold text-slate-700 mb-1">Batch Code *</label>
              <input
                id="new-batch-code"
                v-model="newBatch.code"
                type="text"
                required
                placeholder="e.g. SIM-BRM-05"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
            <div>
              <label for="new-batch-cap" class="block text-xs font-bold text-slate-700 mb-1">Seat Capacity *</label>
              <input
                id="new-batch-cap"
                v-model.number="newBatch.capacity"
                type="number"
                required
                min="5"
                max="100"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="new-batch-start" class="block text-xs font-bold text-slate-700 mb-1">Start Date *</label>
              <input
                id="new-batch-start"
                v-model="newBatch.startDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
            <div>
              <label for="new-batch-end" class="block text-xs font-bold text-slate-700 mb-1">End Date *</label>
              <input
                id="new-batch-end"
                v-model="newBatch.endDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label for="new-batch-inst" class="block text-xs font-bold text-slate-700 mb-1">Instructor &bull; Facility</label>
            <input
              id="new-batch-inst"
              v-model="newBatch.instructor"
              type="text"
              placeholder="e.g. Capt. Z. Abbas &bull; Transas FMBS Bay"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showBatchModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
              Publish Batch
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Batch Scheduling & Seat Radar &bull; Academy Console',
});

const filterStatus = ref('ALL');
const searchCode = ref('');
const showBatchModal = ref(false);
const selectedRosterBatch = ref<any>(null);

const newBatch = ref({
  courseName: 'BRM Simulator',
  code: 'BATCH-2026-05',
  startDate: '2026-07-05',
  endDate: '2026-07-10',
  capacity: 15,
  instructor: 'Capt. A. R. Khan &bull; Wärtsilä 360 Bridge',
});

const rosterCandidates = [
  { name: 'Cadet Alex Mercer', indos: '08ZL9431', cdc: 'MUM-149028', attendance: '100%' },
  { name: 'Cadet Muhammad Tariq', indos: 'KHI-CDC-49102', cdc: 'PAK-883921', attendance: '98%' },
  { name: 'Capt. Rajesh Sharma', indos: '08ZL9431', cdc: 'MUM-149028', attendance: '100%' },
  { name: 'Cadet Fatima Noor', indos: '09ZM4821', cdc: 'PAK-991204', attendance: '100%' },
];

const batches = ref([
  {
    id: 'b1',
    code: 'GP3-2026-003',
    courseName: 'GP-III Pre-Sea',
    title: 'General Purpose Rating (GP-III) - 3rd Intake 2026',
    startDate: '10 Jun 2026',
    endDate: '10 Dec 2026',
    timing: '08:00 - 16:30 Daily',
    facility: 'KPT Yard Practical Grounds',
    instructor: 'Capt. Z. Abbas',
    enrolled: 40,
    capacity: 50,
    fee: 185000,
    status: 'ACTIVE',
  },
  {
    id: 'b2',
    code: 'HND-NAUT-01',
    courseName: 'Nautical Science SQA',
    title: 'Advance Diploma Nautical Science (OOW Route)',
    startDate: '15 Jul 2026',
    endDate: '15 Jul 2028',
    timing: 'Full-Time Academic Phase',
    facility: 'Transas NTPRO 4000 Bridge Lab',
    instructor: 'Capt. M. Tariq & Chief Mate Vance',
    enrolled: 28,
    capacity: 35,
    fee: 650000,
    status: 'ACTIVE',
  },
  {
    id: 'b3',
    code: 'SIM-BRM-04',
    courseName: 'BRM Simulator',
    title: 'Bridge Resource Management Simulator (Weekly)',
    startDate: '22 Jun 2026',
    endDate: '26 Jun 2026',
    timing: '09:00 - 17:00 Daily (5 Days)',
    facility: 'Wärtsilä 360 Navigation Bridge',
    instructor: 'Capt. A. R. Khan',
    enrolled: 10,
    capacity: 12,
    fee: 75000,
    status: 'ACTIVE',
  },
  {
    id: 'b4',
    code: 'STCW-AFF-02',
    courseName: 'Advanced Fire Fighting',
    title: 'AFF Practical Refresher Mandatory Drill',
    startDate: '29 Jun 2026',
    endDate: '03 Jul 2026',
    timing: '08:30 - 16:00 Daily',
    facility: 'KPT Live Fire Mock Ship',
    instructor: 'Chief Engineer Farooq',
    enrolled: 22,
    capacity: 25,
    fee: 45000,
    status: 'ACTIVE',
  },
]);

const filteredBatches = computed(() => {
  return batches.value.filter((b) => {
    const matchesStatus = filterStatus.value === 'ALL' || b.status === filterStatus.value;
    const matchesSearch = !searchCode.value || b.code.toLowerCase().includes(searchCode.value.toLowerCase()) || b.courseName.toLowerCase().includes(searchCode.value.toLowerCase());
    return matchesStatus && matchesSearch;
  });
});

function getQuotaStatusColor(enrolled: number, cap: number) {
  const pct = (enrolled / cap) * 100;
  if (pct >= 90) return 'text-rose-700';
  if (pct >= 70) return 'text-amber-700';
  return 'text-blue-700';
}

function getBarColor(enrolled: number, cap: number) {
  const pct = (enrolled / cap) * 100;
  if (pct >= 90) return 'bg-rose-600';
  if (pct >= 70) return 'bg-amber-600';
  return 'bg-blue-600';
}

function saveBatch() {
  batches.value.unshift({
    id: 'b_' + Date.now(),
    code: newBatch.value.code,
    courseName: newBatch.value.courseName,
    title: newBatch.value.courseName + ' Training Batch',
    startDate: newBatch.value.startDate,
    endDate: newBatch.value.endDate,
    timing: '09:00 - 17:00 Daily',
    facility: 'Simulator Lab Suite',
    instructor: newBatch.value.instructor,
    enrolled: 0,
    capacity: newBatch.value.capacity,
    fee: 75000,
    status: 'ACTIVE',
  });
  showBatchModal.value = false;
}

function adjustCapacity(batch: any) {
  const cap = window.prompt(`Adjust capacity for ${batch.code}:`, String(batch.capacity));
  if (cap && !isNaN(Number(cap))) {
    batch.capacity = Number(cap);
  }
}

function viewRosterModal(batch: any) {
  selectedRosterBatch.value = batch;
}

function closeModals() {
  showBatchModal.value = false;
  selectedRosterBatch.value = null;
}
</script>
