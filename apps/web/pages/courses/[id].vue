<template>
  <div class="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 pb-20">
    <!-- Statutory Top Banner -->
    <div class="bg-[#0b1626] border-b border-cyan-900/40 text-xs py-2 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2 text-slate-300 text-[11px] tracking-wide">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-cyan-400 font-semibold uppercase tracking-wider text-[10px]">DG PORTS & IMO MODEL ACCREDITED CURRICULUM</span>
          <span class="text-slate-600">|</span>
          <span class="text-slate-300">Statutory Training Standard STCW 2010 Manila Amendments</span>
        </div>
        <div class="flex items-center space-x-2">
          <NuxtLink to="/courses" class="text-cyan-400 hover:text-cyan-300 text-[11px] font-bold transition flex items-center space-x-1">
            <span>&larr; Back to Program Catalog</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center text-xs text-slate-500 mb-6 space-x-2">
        <NuxtLink to="/" class="hover:text-cyan-400">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/courses" class="hover:text-cyan-400">Courses</NuxtLink>
        <span>/</span>
        <span class="text-cyan-300 font-medium truncate">{{ course.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Main Course Information (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          <!-- Course Header Banner -->
          <div class="bg-[#0a1424] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {{ course.category }}
              </span>
              <span v-if="course.isDgApproved" class="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center space-x-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>DG Approved Facility</span>
              </span>
              <span class="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                Code: {{ course.code }}
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">
              {{ course.title }}
            </h1>

            <p class="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              {{ course.description }}
            </p>

            <!-- 4-Metrics Quick Spec Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs">
              <div class="p-3 bg-[#070e1a] rounded-xl border border-slate-800">
                <span class="text-[10px] text-slate-500 block uppercase font-bold">Duration</span>
                <span class="font-bold text-white text-sm">{{ course.durationDays }} Days Full-Time</span>
                <span class="text-[10px] text-slate-400 block mt-0.5">Hands-on Practicals</span>
              </div>
              <div class="p-3 bg-[#070e1a] rounded-xl border border-slate-800">
                <span class="text-[10px] text-slate-500 block uppercase font-bold">Certification</span>
                <span class="font-bold text-cyan-300 text-sm">STCW Certificate</span>
                <span class="text-[10px] text-slate-400 block mt-0.5">Instant QR Verified</span>
              </div>
              <div class="p-3 bg-[#070e1a] rounded-xl border border-slate-800">
                <span class="text-[10px] text-slate-500 block uppercase font-bold">Training Lab</span>
                <span class="font-bold text-white text-sm">Wärtsilä / Transas</span>
                <span class="text-[10px] text-slate-400 block mt-0.5">High-Fidelity Simulators</span>
              </div>
              <div class="p-3 bg-[#070e1a] rounded-xl border border-slate-800">
                <span class="text-[10px] text-slate-500 block uppercase font-bold">Sea-Time Credit</span>
                <span class="font-bold text-emerald-300 text-sm">Qualifying Hours</span>
                <span class="text-[10px] text-slate-400 block mt-0.5">DG Ports Endorsed</span>
              </div>
            </div>
          </div>

          <!-- Mandatory Prerequisites Section -->
          <div class="bg-[#0a1424] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg">
            <div class="flex items-center space-x-2 mb-4">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 class="text-base font-black text-white uppercase tracking-wider">Mandatory Entry Prerequisites</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="(req, idx) in course.prerequisites"
                :key="idx"
                class="flex items-start text-xs text-slate-300 space-x-2.5 p-3 rounded-xl bg-[#070e1a] border border-slate-800/80"
              >
                <span class="text-emerald-400 font-bold mt-0.5">&check;</span>
                <span>{{ req }}</span>
              </div>
            </div>
          </div>

          <!-- Course Syllabus & Practical Drill Modules -->
          <div class="bg-[#0a1424] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h2 class="text-base font-black text-white uppercase tracking-wider">Curriculum & Practical Drill Modules</h2>
              </div>
              <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                IMO Model Standard
              </span>
            </div>
            <div class="space-y-3">
              <div
                v-for="(mod, idx) in syllabusModules"
                :key="idx"
                class="p-4 rounded-xl bg-[#070e1a] border border-slate-800/80 hover:border-cyan-500/30 transition"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">{{ mod.title }}</span>
                  <span class="text-[10px] font-mono text-slate-400">{{ mod.hours }}</span>
                </div>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">{{ mod.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Sidebar: Institute & Batch Seat Reservation (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Available Batches Selector -->
          <div class="bg-[#0a1424] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-black uppercase tracking-wider text-cyan-400">LIVE BATCH RADAR</span>
              <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                SEATS OPEN
              </span>
            </div>
            <h3 class="text-base font-black text-white">Select Training Batch</h3>
            <p class="text-xs text-slate-400 mt-1 mb-4">Choose an official intake window to lock your seat quota:</p>

            <div class="space-y-3">
              <div
                v-for="batch in course.batches"
                :key="batch.id"
                @click="selectedBatchId = batch.id"
                :class="[
                  'p-4 rounded-xl border text-xs cursor-pointer transition',
                  selectedBatchId === batch.id
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-md shadow-cyan-950/60 ring-1 ring-cyan-400'
                    : 'border-slate-800 bg-[#070e1a] hover:border-slate-700'
                ]"
              >
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-white">{{ formatDate(batch.startDate) }} &ndash; {{ formatDate(batch.endDate) }}</span>
                  <span class="font-mono font-black text-cyan-300">PKR {{ batch.price.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between items-center text-slate-400 mt-2 text-[11px]">
                  <span>Seats: <strong class="text-emerald-400">{{ batch.availableSeats }} left</strong> / {{ batch.totalSeats }}</span>
                  <span class="text-[10px] font-mono uppercase text-cyan-400" v-if="selectedBatchId === batch.id">&bull; Selected</span>
                </div>
              </div>
            </div>

            <!-- Total Calculation & CTA -->
            <div class="mt-5 pt-4 border-t border-slate-800">
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs text-slate-400">Total Statutory Tuition:</span>
                <span class="text-lg font-black text-white font-mono">
                  PKR {{ selectedBatchPrice.toLocaleString() }}
                </span>
              </div>

              <button
                :disabled="!selectedBatchId"
                @click="proceedToBooking"
                class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-500/25 transition flex items-center justify-center space-x-2 disabled:opacity-40"
              >
                <span>Reserve Seat & Proceed to Checkout &rarr;</span>
              </button>
              <p class="text-[10px] text-center text-slate-500 mt-2.5">
                Instant confirmation &bull; 10-minute quota lock &bull; Tax invoice generated instantly.
              </p>
            </div>
          </div>

          <!-- Institute Profile Card -->
          <div class="bg-[#0a1424] border border-slate-800 rounded-2xl p-6 shadow-lg">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Conducted By Institute</span>
            <h3 class="text-base font-black text-white mt-1.5">{{ course.institute.name }}</h3>
            <p class="text-xs text-slate-400 mt-1">{{ course.institute.address }}, {{ course.institute.city }}</p>
            <div class="mt-3 py-2 px-3 rounded-lg bg-[#070e1a] border border-slate-800 text-xs font-mono text-cyan-400">
              DG Approval: <strong>{{ course.institute.dgApproval }}</strong>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span class="text-slate-400">Admissions Desk:</span>
              <a href="tel:+923366668475" class="text-cyan-400 font-bold hover:text-cyan-300">
                +92 336 6668475
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const route = useRoute();
const selectedBatchId = ref<string | null>('batch-01');

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function proceedToBooking() {
  if (!selectedBatchId.value) return;
  navigateTo(`/bookings/checkout?batchId=${selectedBatchId.value}`);
}

const syllabusModules = [
  {
    title: 'Module 1: Statutory Framework & Emergency Distress Principles',
    hours: '8 Hours',
    description: 'International regulations, SOLAS, STCW Code Manila requirements, and command hierarchy during shipboard distress.',
  },
  {
    title: 'Module 2: Practical Simulator Operations & Console Workstations',
    hours: '16 Hours',
    description: 'Hands-on console maneuvers on high-fidelity Wärtsilä / Transas workstations with live scenario injection.',
  },
  {
    title: 'Module 3: Emergency Procedures, Safety Equipment & LSA Deployment',
    hours: '8 Hours',
    description: 'Safe deployment of specialized apparatus, PPE inspections, vacuum switchboards, and emergency containment.',
  },
  {
    title: 'Module 4: Practical Assessment & DG Ports Verification Exam',
    hours: '8 Hours',
    description: 'Statutory examination supervised by Master Mariners & Chief Engineers leading to cryptographic QR certification.',
  },
];

const course = ref({
  id: route.params.id as string,
  title: 'Electronic Chart Display & Information Systems (ECDIS) Simulator Course',
  code: 'IMO-1.27-ECDIS',
  category: 'Full-Mission Simulator',
  isDgApproved: true,
  durationDays: 5,
  description:
    'Official IMO Model Course 1.27 compliant simulator navigation training on operational use of electronic navigational charts, ECDIS route planning, route monitoring, and sensor integration in accordance with STCW Reg II/1, II/2, and II/3.',
  prerequisites: [
    'Valid INDoS / CDC (Continuous Discharge Certificate) or Seaman Book',
    'Medical fitness certificate issued by DG Approved Maritime Medical Practitioner',
    'Valid Passport or National Identity CNIC',
    'Deck Officer Certificate of Competency (CoC) or Pre-Sea Nautical Science Cadet status',
  ],
  institute: {
    name: 'Maritime Training Institute (MTI Karachi)',
    address: 'KPT Apprentice Yard Practical Training Facility',
    city: 'Karachi, Pakistan',
    dgApproval: 'DG/PORTS/KHI/2026/01',
  },
  batches: [
    {
      id: 'batch-01',
      startDate: '2026-06-08T09:00:00Z',
      endDate: '2026-06-12T17:00:00Z',
      totalSeats: 16,
      availableSeats: 5,
      price: 35000,
    },
    {
      id: 'batch-02',
      startDate: '2026-06-22T09:00:00Z',
      endDate: '2026-06-26T17:00:00Z',
      totalSeats: 16,
      availableSeats: 9,
      price: 35000,
    },
  ],
});

const selectedBatchPrice = computed(() => {
  const b = course.value.batches.find(x => x.id === selectedBatchId.value);
  return b ? b.price : 35000;
});
</script>