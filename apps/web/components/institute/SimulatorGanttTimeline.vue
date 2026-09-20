<template>
  <div class="space-y-4">
    <!-- Controls Header -->
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-xs font-bold font-mono uppercase tracking-wider text-slate-500">Timeline Window:</span>
        <div class="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200" role="group" aria-label="Timeline days">
          <button
            v-for="d in weekDays"
            :key="d.id"
            @click="selectedDay = d.id"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            :class="selectedDay === d.id
              ? 'bg-[#0A1936] text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'"
          >
            <span>{{ d.label }}</span>
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="d.hasActive ? 'bg-emerald-400 animate-pulse' : 'bg-transparent'"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      <!-- Filters & Actions -->
      <div class="flex items-center space-x-2.5">
        <select
          v-model="selectedBayFilter"
          aria-label="Filter by Simulator Bay"
          class="px-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ALL">All Simulator Bays (5)</option>
          <option v-for="bay in bays" :key="bay.id" :value="bay.id">{{ bay.shortName }}</option>
        </select>

        <button
          @click="$emit('quick-allocate')"
          type="button"
          class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-2xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Allocate Slot</span>
        </button>
      </div>
    </div>

    <!-- Collision Alert Banner (Dynamic) -->
    <div
      v-if="detectedCollisions.length > 0"
      class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs text-amber-900"
      role="alert"
    >
      <div class="flex items-center space-x-2 font-medium">
        <svg class="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>
          <strong class="font-bold">Collision Warning:</strong>
          {{ detectedCollisions.length }} simulator bay scheduling overlap detected in {{ selectedDayLabel }}.
        </span>
      </div>
      <span class="font-mono text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
        Audit Flag IMO-STCW I/12
      </span>
    </div>

    <!-- Main Gantt Canvas -->
    <div class="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">
      <!-- Top Time Axis Header -->
      <div class="overflow-x-auto">
        <div class="min-w-[900px]">
          <!-- Time Header Columns (08:00 to 18:00) -->
          <div class="grid grid-cols-12 border-b border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
            <div class="col-span-3 p-3.5 border-r border-slate-200 bg-slate-100/70 text-slate-700">
              SIMULATOR BAY &bull; HARDWARE SPECS
            </div>
            <div class="col-span-9 grid grid-cols-9 divide-x divide-slate-200 text-center">
              <div v-for="hour in timeHours" :key="hour" class="py-3">
                {{ hour }}
              </div>
            </div>
          </div>

          <!-- Bay Rows -->
          <div class="divide-y divide-slate-100">
            <div
              v-for="bay in filteredBays"
              :key="bay.id"
              class="grid grid-cols-12 min-h-[96px] hover:bg-slate-50/50 transition relative group"
            >
              <!-- Bay Info Column -->
              <div class="col-span-3 p-3.5 border-r border-slate-200 bg-white group-hover:bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="w-2 h-2 rounded-full shrink-0"
                      :class="bay.status === 'ONLINE' ? 'bg-emerald-500' : 'bg-amber-500'"
                      aria-hidden="true"
                    ></span>
                    <span class="font-bold text-xs text-slate-900 font-display tracking-tight leading-snug">
                      {{ bay.name }}
                    </span>
                  </div>
                  <div class="text-[10px] font-mono text-slate-500 mt-0.5">
                    {{ bay.specs }}
                  </div>
                </div>

                <div class="flex items-center justify-between text-[10px] font-mono mt-2 pt-2 border-t border-slate-100">
                  <span class="text-slate-600">Cap: <strong class="text-slate-900">{{ bay.capacity }} Seats</strong></span>
                  <span
                    class="px-1.5 py-0.5 rounded font-bold"
                    :class="bay.status === 'ONLINE' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'"
                  >
                    {{ bay.status }}
                  </span>
                </div>
              </div>

              <!-- Bay Timeline Canvas (9 Hours grid) -->
              <div class="col-span-9 relative grid grid-cols-9 divide-x divide-slate-100">
                <!-- Background Grid Columns -->
                <div
                  v-for="idx in 9"
                  :key="idx"
                  class="h-full pointer-events-none"
                  :class="idx % 2 === 0 ? 'bg-slate-50/20' : ''"
                ></div>

                <!-- Positioned Batch Blocks on this Bay for this Day -->
                <div
                  v-for="slot in getBaySlots(bay.id)"
                  :key="slot.id"
                  @click="$emit('select-slot', slot)"
                  class="absolute top-2 bottom-2 rounded-xl p-2.5 transition cursor-pointer shadow-xs border flex flex-col justify-between overflow-hidden group/block focus:outline-none focus:ring-2 focus:ring-blue-500"
                  :class="getBlockColor(slot)"
                  :style="computeSlotStyle(slot)"
                  role="button"
                  tabindex="0"
                  :aria-label="`${slot.batchCode} - ${slot.courseName}`"
                >
                  <div class="flex items-center justify-between gap-1">
                    <span class="font-bold text-xs tracking-tight truncate group-hover/block:underline">
                      {{ slot.batchCode }} &bull; {{ slot.courseName }}
                    </span>
                    <span
                      class="text-[9px] font-mono font-black uppercase px-1.5 py-0.2 rounded shrink-0"
                      :class="slot.status === 'LIVE' ? 'bg-emerald-500 text-slate-950 animate-pulse' : 'bg-white/40 text-current'"
                    >
                      {{ slot.status }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-[10px] font-mono mt-1 pt-1 border-t border-current/10">
                    <span class="truncate">{{ slot.instructor }}</span>
                    <span class="shrink-0 font-bold tabular-nums">
                      {{ slot.enrolled }}/{{ slot.capacity }} Seats
                    </span>
                  </div>
                </div>

                <!-- Empty Bay Hint if no slots -->
                <div
                  v-if="getBaySlots(bay.id).length === 0"
                  class="absolute inset-0 flex items-center justify-center pointer-events-none text-[11px] font-mono text-slate-300 italic"
                >
                  No scheduled simulator sessions &bull; Bay Available for Allocation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gantt Footer Legend -->
      <div class="p-3.5 bg-slate-50/80 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div class="flex items-center space-x-4">
          <span class="text-slate-500 font-mono text-[10px] font-bold uppercase">LEGEND:</span>
          <div class="flex items-center space-x-1.5 text-xs text-slate-700">
            <span class="w-3 h-3 rounded bg-emerald-600"></span>
            <span>Live in Session</span>
          </div>
          <div class="flex items-center space-x-1.5 text-xs text-slate-700">
            <span class="w-3 h-3 rounded bg-[#0A1936]"></span>
            <span>Scheduled Batch</span>
          </div>
          <div class="flex items-center space-x-1.5 text-xs text-slate-700">
            <span class="w-3 h-3 rounded bg-amber-500"></span>
            <span>Temporary Checkout Lock (10m)</span>
          </div>
          <div class="flex items-center space-x-1.5 text-xs text-slate-700">
            <span class="w-3 h-3 rounded bg-slate-400"></span>
            <span>Pre-Flight Calibration</span>
          </div>
        </div>

        <div class="text-[11px] font-mono text-slate-500">
          Total Fleet Capacity: <strong class="text-slate-900 font-bold">78 Concurrent Simulator Consoles</strong>
        </div>
      </div>
    </div>

    <!-- Quick Slot Inspector / Details Modal -->
    <div
      v-if="inspectedSlot"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="slot-modal-title"
      @click.self="inspectedSlot = null"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2.5">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 id="slot-modal-title" class="text-sm font-bold font-display text-slate-900">
                {{ inspectedSlot.batchCode }} &bull; Slot Telemetry
              </h3>
              <div class="text-[10px] font-mono text-blue-700 font-semibold">
                {{ inspectedSlot.courseName }}
              </div>
            </div>
          </div>
          <button
            @click="inspectedSlot = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close slot inspector"
          >
            ✕
          </button>
        </div>

        <div class="space-y-3 text-xs text-slate-700">
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 font-mono">
            <div class="flex justify-between">
              <span class="text-slate-500">FACILITY BAY:</span>
              <span class="font-bold text-slate-900">{{ getBayName(inspectedSlot.bayId) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">SESSION TIME:</span>
              <span class="font-bold text-slate-900">{{ inspectedSlot.startTime }} &ndash; {{ inspectedSlot.endTime }} ({{ selectedDayLabel }})</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">INSTRUCTOR:</span>
              <span class="font-bold text-slate-900">{{ inspectedSlot.instructor }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">QUOTA ENROLLMENT:</span>
              <span class="font-bold text-blue-700 tabular-nums">{{ inspectedSlot.enrolled }} / {{ inspectedSlot.capacity }} Seats</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">TEMP CHECKOUT LOCKS:</span>
              <span class="font-bold text-amber-700 tabular-nums">{{ inspectedSlot.tempLocks || 0 }} Holds</span>
            </div>
          </div>

          <div class="flex items-center space-x-2 text-[11px] text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>DNV Class-A Simulator Certification Active &bull; IMO Model 1.27 Compliant</span>
          </div>
        </div>

        <div class="pt-3 flex justify-between items-center border-t border-slate-100">
          <button
            @click="viewRosterFromSlot(inspectedSlot)"
            type="button"
            class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
          >
            Candidate Roster ({{ inspectedSlot.enrolled }})
          </button>
          <button
            @click="inspectedSlot = null"
            type="button"
            class="px-4 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const emit = defineEmits<{
  (e: 'quick-allocate'): void;
  (e: 'select-slot', slot: any): void;
  (e: 'view-roster', batchCode: string): void;
}>();

const selectedDay = ref('mon');
const selectedBayFilter = ref('ALL');
const inspectedSlot = ref<any>(null);

const weekDays = [
  { id: 'mon', label: 'Mon 22 Jun', hasActive: true },
  { id: 'tue', label: 'Tue 23 Jun', hasActive: true },
  { id: 'wed', label: 'Wed 24 Jun', hasActive: true },
  { id: 'thu', label: 'Thu 25 Jun', hasActive: true },
  { id: 'fri', label: 'Fri 26 Jun', hasActive: false },
  { id: 'sat', label: 'Sat 27 Jun', hasActive: false },
];

const selectedDayLabel = computed(() => {
  return weekDays.find((d) => d.id === selectedDay.value)?.label || 'Today';
});

const timeHours = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
];

const bays = [
  {
    id: 'bay-1',
    name: 'Wärtsilä 360° FMBS-A',
    shortName: 'Bay 1: Wärtsilä 360°',
    specs: 'DNV Class-A Full Mission · 360° Projection',
    capacity: 12,
    status: 'ONLINE',
  },
  {
    id: 'bay-2',
    name: 'Transas NTPRO 4000 Radar/ECDIS',
    shortName: 'Bay 2: Transas ECDIS',
    specs: 'IMO Model 1.27 · 16 Multi-Consoles',
    capacity: 16,
    status: 'ONLINE',
  },
  {
    id: 'bay-3',
    name: 'Kongsberg K-Chief Engine Room',
    shortName: 'Bay 3: Kongsberg Engine',
    specs: 'STCW A-III/1 & 2 · High Voltage 6.6kV',
    capacity: 10,
    status: 'ONLINE',
  },
  {
    id: 'bay-4',
    name: 'KPT Fire Ship & Davit Complex',
    shortName: 'Bay 4: Live Fire Ship',
    specs: 'SOLAS Fire Mock & Enclosed Space',
    capacity: 25,
    status: 'ONLINE',
  },
  {
    id: 'bay-5',
    name: 'Furuno GMDSS Radio Lab',
    shortName: 'Bay 5: Furuno GMDSS',
    specs: 'GOC/ROC Class · Inmarsat-C Dual Rack',
    capacity: 15,
    status: 'ONLINE',
  },
];

const filteredBays = computed(() => {
  if (selectedBayFilter.value === 'ALL') return bays;
  return bays.filter((b) => b.id === selectedBayFilter.value);
});

// Mocked Slots Data across Days & Bays
const allSlots = ref([
  {
    id: 'slot-1',
    day: 'mon',
    bayId: 'bay-1',
    batchCode: 'SIM-BRM-04',
    courseName: 'BRM Simulator',
    instructor: 'Capt. A. R. Khan',
    startHour: 9, // 09:00
    durationHours: 3.5, // until 12:30
    startTime: '09:00',
    endTime: '12:30',
    enrolled: 10,
    capacity: 12,
    tempLocks: 2,
    status: 'LIVE',
  },
  {
    id: 'slot-2',
    day: 'mon',
    bayId: 'bay-1',
    batchCode: 'FMBS-DOCK-02',
    courseName: 'Berthing & Ship Handling',
    instructor: 'Capt. Z. Abbas',
    startHour: 13.5, // 13:30
    durationHours: 3, // until 16:30
    startTime: '13:30',
    endTime: '16:30',
    enrolled: 12,
    capacity: 12,
    tempLocks: 0,
    status: 'SCHEDULED',
  },
  {
    id: 'slot-3',
    day: 'mon',
    bayId: 'bay-2',
    batchCode: 'ECDIS-IMO-12',
    courseName: 'ECDIS Type-Specific',
    instructor: 'Chief Mate Vance',
    startHour: 8.5,
    durationHours: 4,
    startTime: '08:30',
    endTime: '12:30',
    enrolled: 14,
    capacity: 16,
    tempLocks: 1,
    status: 'SCHEDULED',
  },
  {
    id: 'slot-4',
    day: 'mon',
    bayId: 'bay-3',
    batchCode: 'HV-ENG-05',
    courseName: 'High Voltage Marine Safety',
    instructor: 'Chief Engineer Farooq',
    startHour: 10,
    durationHours: 4,
    startTime: '10:00',
    endTime: '14:00',
    enrolled: 8,
    capacity: 10,
    tempLocks: 1,
    status: 'SCHEDULED',
  },
  {
    id: 'slot-5',
    day: 'mon',
    bayId: 'bay-4',
    batchCode: 'STCW-AFF-02',
    courseName: 'Advanced Fire Fighting',
    instructor: 'Fire Master S. Nadeem',
    startHour: 9,
    durationHours: 6,
    startTime: '09:00',
    endTime: '15:00',
    enrolled: 22,
    capacity: 25,
    tempLocks: 3,
    status: 'LIVE',
  },
  // Tuesday Slots
  {
    id: 'slot-6',
    day: 'tue',
    bayId: 'bay-1',
    batchCode: 'SIM-BRM-04',
    courseName: 'BRM Heavy Weather Drill',
    instructor: 'Capt. A. R. Khan',
    startHour: 9,
    durationHours: 4,
    startTime: '09:00',
    endTime: '13:00',
    enrolled: 10,
    capacity: 12,
    tempLocks: 0,
    status: 'SCHEDULED',
  },
  {
    id: 'slot-7',
    day: 'tue',
    bayId: 'bay-5',
    batchCode: 'GMDSS-GOC-03',
    courseName: 'GMDSS Radio Practical Lab',
    instructor: 'Radio Officer Dennis',
    startHour: 10,
    durationHours: 3.5,
    startTime: '10:00',
    endTime: '13:30',
    enrolled: 11,
    capacity: 15,
    tempLocks: 2,
    status: 'SCHEDULED',
  },
  // Wednesday Slots
  {
    id: 'slot-8',
    day: 'wed',
    bayId: 'bay-2',
    batchCode: 'ARPA-RADAR-07',
    courseName: 'Automatic Radar Plotting Aid',
    instructor: 'Capt. M. Tariq',
    startHour: 9,
    durationHours: 5,
    startTime: '09:00',
    endTime: '14:00',
    enrolled: 15,
    capacity: 16,
    tempLocks: 0,
    status: 'SCHEDULED',
  },
]);

function getBaySlots(bayId: string) {
  return allSlots.value.filter((s) => s.bayId === bayId && s.day === selectedDay.value);
}

// Compute percentage left & width based on 08:00 to 17:00 scale (9 hours total)
function computeSlotStyle(slot: any) {
  const baseHour = 8;
  const totalHours = 9;
  const leftPct = Math.max(0, ((slot.startHour - baseHour) / totalHours) * 100);
  const widthPct = Math.min(100 - leftPct, (slot.durationHours / totalHours) * 100);

  return {
    left: `${leftPct}%`,
    width: `${widthPct}%`,
  };
}

function getBlockColor(slot: any) {
  if (slot.status === 'LIVE') {
    return 'bg-emerald-900/90 text-emerald-100 border-emerald-500/80 hover:bg-emerald-800';
  }
  if (slot.tempLocks > 0) {
    return 'bg-[#0B1D3D] text-sky-200 border-sky-500/70 hover:bg-[#102752]';
  }
  return 'bg-[#0A1936] text-white border-white/20 hover:bg-[#112752]';
}

const detectedCollisions = computed(() => {
  const collisions: any[] = [];
  const currentSlots = allSlots.value.filter((s) => s.day === selectedDay.value);

  for (let i = 0; i < currentSlots.length; i++) {
    for (let j = i + 1; j < currentSlots.length; j++) {
      const a = currentSlots[i];
      const b = currentSlots[j];
      if (a.bayId === b.bayId) {
        const aEnd = a.startHour + a.durationHours;
        const bEnd = b.startHour + b.durationHours;
        if (Math.max(a.startHour, b.startHour) < Math.min(aEnd, bEnd)) {
          collisions.push({ a, b });
        }
      }
    }
  }
  return collisions;
});

function getBayName(bayId: string) {
  return bays.find((b) => b.id === bayId)?.name || bayId;
}

function viewRosterFromSlot(slot: any) {
  inspectedSlot.value = null;
  emit('view-roster', slot.batchCode);
}
</script>
