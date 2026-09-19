<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/institute/dashboard" class="flex items-center space-x-2.5 group">
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
          <span class="hidden sm:inline-block text-xs font-semibold text-slate-600">Batch Scheduling &amp; Seat Radar</span>
        </div>

        <button
          @click="showBatchModal = true"
          class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Schedule New Batch</span>
        </button>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Batch Scheduling &amp; Real-Time Seat Radar
            </h1>
            <p class="text-xs text-slate-500 mt-1">
              Live seat inventory management &bull; 10-minute temporary quota lock protection &bull; Simulator &amp; faculty allocation.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Atomic Quota Locking Active</span>
          </div>
        </div>

        <!-- 4 Radar KPI Metrics -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">TOTAL ACTIVE BATCHES</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">8 Batches</div>
            <div class="text-[11px] text-emerald-700 font-semibold">● All Facilitated</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">TOTAL CAPACITY</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">420 Seats</div>
            <div class="text-[11px] text-slate-500 font-medium">340 Currently Enrolled</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">SEAT OCCUPANCY</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">84.2%</div>
            <div class="text-[11px] text-blue-700 font-semibold">High Demand Cycle</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">CHECKOUT LOCKS</div>
            <div class="text-2xl font-bold text-amber-700 font-mono">12 Seats</div>
            <div class="text-[11px] text-slate-500 font-medium">10-min countdown</div>
          </div>
        </div>

        <!-- Batches Table -->
        <div class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Configured Training Batches ({{ batches.length }} Batches)
            </div>
            <div class="flex items-center space-x-2 text-xs">
              <span class="text-slate-500">Filter Status:</span>
              <select v-model="filterStatus" class="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 outline-none">
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">Active</option>
                <option value="UPCOMING">Upcoming</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">BATCH &amp; PROGRAM</th>
                  <th class="px-5 py-3.5">TIMELINE &amp; DATES</th>
                  <th class="px-5 py-3.5">FACILITY &amp; INSTRUCTOR</th>
                  <th class="px-5 py-3.5">SEAT RADAR</th>
                  <th class="px-5 py-3.5">FEE (PKR)</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="b in filteredBatches" :key="b.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ b.title }}</div>
                    <div class="text-[11px] font-mono text-blue-700 font-semibold mt-0.5">{{ b.code }} &bull; {{ b.courseName }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono text-slate-600">
                    <div class="font-semibold text-slate-800">{{ b.startDate }} &ndash; {{ b.endDate }}</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">{{ b.timing }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-medium text-slate-900">{{ b.facility }}</div>
                    <div class="text-[10px] text-slate-500 mt-0.5">{{ b.instructor }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="flex items-center space-x-2">
                      <span class="font-bold text-slate-900 font-mono">{{ b.enrolled }} / {{ b.capacity }}</span>
                      <span class="text-[10px] font-bold text-amber-700">({{ b.capacity - b.enrolled }} left)</span>
                    </div>
                    <div class="w-28 bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div
                        class="bg-blue-600 h-full rounded-full transition-all"
                        :style="{ width: `${(b.enrolled / b.capacity) * 100}%` }"
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
                      @click="viewRoster(b)"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition"
                    >
                      Roster ({{ b.enrolled }})
                    </button>
                    <button
                      @click="adjustCapacity(b)"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
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

    <!-- Modal: Schedule New Batch -->
    <div
      v-if="showBatchModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Schedule New Training Batch</h3>
            <p class="text-xs text-slate-500">Allocate intake quota, classroom, and instructor.</p>
          </div>
          <button @click="showBatchModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-sm">✕</button>
        </div>

        <form @submit.prevent="saveBatch" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Select Course Program *</label>
            <select
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
              <label class="block text-xs font-bold text-slate-700 mb-1">Batch Code *</label>
              <input
                v-model="newBatch.code"
                type="text"
                required
                placeholder="e.g. SIM-BRM-05"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Seat Capacity *</label>
              <input
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
              <label class="block text-xs font-bold text-slate-700 mb-1">Start Date *</label>
              <input
                v-model="newBatch.startDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">End Date *</label>
              <input
                v-model="newBatch.endDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Instructor &bull; Facility</label>
            <input
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
              class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
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
const showBatchModal = ref(false);

const newBatch = ref({
  courseName: 'BRM Simulator',
  code: 'BATCH-2026-05',
  startDate: '2026-07-05',
  endDate: '2026-07-10',
  capacity: 15,
  instructor: 'Capt. A. R. Khan &bull; Wärtsilä 360 Bridge',
});

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
  if (filterStatus.value === 'ALL') return batches.value;
  return batches.value.filter((b) => b.status === filterStatus.value);
});

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

function viewRoster(batch: any) {
  navigateTo('/institute/certificates');
}
</script>
