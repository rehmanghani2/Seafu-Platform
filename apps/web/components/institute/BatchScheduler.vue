<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <h3 class="text-base font-bold text-slate-900 tracking-tight">Batch Scheduling &amp; Real-Time Seat Radar</h3>
        </div>
        <p class="text-xs text-slate-500 mt-0.5">
          Atomic 10-minute seat reservation locking &bull; Classroom, instructor, and simulator bay allocation.
        </p>
      </div>

      <div class="flex items-center space-x-2">
        <button
          @click="$emit('create-batch')"
          class="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0A1936] hover:bg-[#112752] transition shadow-xs flex items-center space-x-1.5"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>New Intake Batch</span>
        </button>
      </div>
    </div>

    <!-- Batches Cards Grid -->
    <div class="space-y-3">
      <div
        v-for="batch in batchList"
        :key="batch.id"
        class="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition space-y-3"
      >
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 flex-wrap text-xs">
              <span class="font-mono font-bold px-2 py-0.5 rounded bg-blue-100/80 text-blue-800 text-[11px]">
                {{ batch.code }}
              </span>
              <span class="text-slate-500 font-mono text-[11px]">{{ batch.courseName }}</span>
              <span
                class="px-2 py-0.5 rounded-full text-[10px] font-bold"
                :class="batch.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'"
              >
                {{ batch.status }}
              </span>
            </div>
            <h4 class="text-sm font-bold text-slate-900 mt-1.5">{{ batch.title }}</h4>
            <div class="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span class="flex items-center space-x-1">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ batch.startDate }} &ndash; {{ batch.endDate }}</span>
              </span>
              <span class="text-slate-300">&bull;</span>
              <span class="flex items-center space-x-1">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{{ batch.facility }}</span>
              </span>
              <span class="text-slate-300">&bull;</span>
              <span class="flex items-center space-x-1">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{{ batch.instructor }}</span>
              </span>
            </div>
          </div>

          <div class="sm:text-right shrink-0">
            <div class="text-base font-bold text-slate-900 font-mono">
              PKR {{ batch.fee.toLocaleString() }}
            </div>
            <div class="text-[11px] text-emerald-700 font-semibold mt-0.5">
              {{ batch.capacity - batch.enrolled }} Seats Remaining
            </div>
          </div>
        </div>

        <!-- Quota Progress Bar -->
        <div class="space-y-1.5 pt-1">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-600 font-medium">
              Enrollment Quota: <strong class="text-slate-900">{{ batch.enrolled }} / {{ batch.capacity }}</strong>
              <span class="text-slate-400 text-[11px] ml-1">({{ Math.round((batch.enrolled / batch.capacity) * 100) }}%)</span>
            </span>
            <span class="text-[11px] font-mono text-blue-700 font-bold">
              {{ batch.capacity - batch.enrolled > 0 ? 'Accepting Applications' : 'Waitlist Only' }}
            </span>
          </div>
          <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500"
              :class="(batch.enrolled / batch.capacity) >= 0.9 ? 'bg-amber-600' : 'bg-blue-600'"
              :style="{ width: `${Math.min(100, Math.round((batch.enrolled / batch.capacity) * 100))}%` }"
            ></div>
          </div>
        </div>

        <!-- Actions -->
        <div class="pt-2 flex items-center justify-between border-t border-slate-200/60 text-xs">
          <span class="text-[11px] text-slate-500 flex items-center space-x-1">
            <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ batch.timing || '09:00 - 17:00 Daily' }}</span>
          </span>

          <div class="flex items-center space-x-2">
            <button
              @click="$emit('view-roster', batch)"
              class="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition"
            >
              Candidate Roster ({{ batch.enrolled }})
            </button>
            <button
              @click="$emit('edit-batch', batch)"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 transition"
            >
              Edit Capacity
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BatchItem {
  id: string | number;
  code: string;
  courseName: string;
  title: string;
  startDate: string;
  endDate: string;
  timing?: string;
  facility: string;
  instructor: string;
  enrolled: number;
  capacity: number;
  fee: number;
  status: string;
}

const props = withDefaults(
  defineProps<{
    batches?: BatchItem[];
  }>(),
  {
    batches: () => [
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
    ],
  }
);

const batchList = computed(() => props.batches);

defineEmits(['create-batch', 'edit-batch', 'view-roster']);
</script>
