<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-20">
    <!-- Statutory Top Banner -->
    <div class="bg-slate-50 border-b border-slate-200/80 text-xs py-2 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2 text-slate-600 text-[11px] tracking-wide">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-blue-700 font-bold uppercase tracking-wider text-[10px]">DG PORTS &amp; IMO MODEL ACCREDITED CURRICULUM</span>
          <span class="text-slate-300">|</span>
          <span>Statutory Training Standard STCW 2010 Manila Amendments</span>
        </div>
        <div class="flex items-center space-x-2">
          <NuxtLink to="/courses" class="text-blue-700 hover:text-blue-800 text-[11px] font-bold transition flex items-center space-x-1">
            <span>&larr; Back to Program Catalog</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center text-xs text-slate-500 mb-6 space-x-2">
        <NuxtLink to="/" class="hover:text-blue-700">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/courses" class="hover:text-blue-700">Courses</NuxtLink>
        <span>/</span>
        <span class="text-slate-900 font-semibold truncate">{{ course.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Main Course Information (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          <!-- Course Header Banner -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
                {{ course.category }}
              </span>
              <span v-if="course.isDgApproved" class="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>DG Approved Facility</span>
              </span>
              <span class="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                Code: {{ course.code }}
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {{ course.title }}
            </h1>

            <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {{ course.description }}
            </p>

            <!-- 4-Metrics Quick Spec Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100 text-xs">
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span class="text-[10px] text-slate-400 block uppercase font-bold">Duration</span>
                <span class="font-bold text-slate-900 text-sm">{{ course.durationDays }} Days Full-Time</span>
                <span class="text-[10px] text-slate-500 block mt-0.5">Hands-on Practicals</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span class="text-[10px] text-slate-400 block uppercase font-bold">Certification</span>
                <span class="font-bold text-blue-700 text-sm">STCW Certificate</span>
                <span class="text-[10px] text-slate-500 block mt-0.5">Instant QR Verified</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span class="text-[10px] text-slate-400 block uppercase font-bold">Training Lab</span>
                <span class="font-bold text-slate-900 text-sm">Wärtsilä / Transas</span>
                <span class="text-[10px] text-slate-500 block mt-0.5">High-Fidelity Simulators</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span class="text-[10px] text-slate-400 block uppercase font-bold">Sea-Time Credit</span>
                <span class="font-bold text-emerald-600 text-sm">Qualifying Hours</span>
                <span class="text-[10px] text-slate-500 block mt-0.5">DG Ports Endorsed</span>
              </div>
            </div>
          </div>

          <!-- Mandatory Prerequisites Section -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
            <div class="flex items-center space-x-2 mb-4">
              <svg class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 class="text-base font-black text-slate-900 uppercase tracking-wider">Mandatory Entry Prerequisites</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="(req, idx) in course.prerequisites"
                :key="idx"
                class="flex items-start text-xs text-slate-700 space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <span class="text-emerald-600 font-bold mt-0.5">&check;</span>
                <span>{{ req }}</span>
              </div>
            </div>
          </div>

          <!-- Course Syllabus & Practical Drill Modules -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h2 class="text-base font-black text-slate-900 uppercase tracking-wider">Curriculum &amp; Practical Drill Modules</h2>
              </div>
              <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
                IMO Model Standard
              </span>
            </div>
            <div class="space-y-3">
              <div
                v-for="(mod, idx) in syllabusModules"
                :key="idx"
                class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-900">{{ mod.title }}</span>
                  <span class="text-[10px] font-mono text-slate-500 font-semibold">{{ mod.hours }}</span>
                </div>
                <p class="text-xs text-slate-600 mt-1 leading-relaxed">{{ mod.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Sidebar: Institute & Batch Seat Reservation (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Available Batches Selector -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-black uppercase tracking-wider text-blue-700">LIVE BATCH RADAR</span>
              <span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                SEATS OPEN
              </span>
            </div>
            <h3 class="text-base font-black text-slate-900">Select Training Batch</h3>
            <p class="text-xs text-slate-500 mt-1 mb-4">Choose an official intake window to lock your seat quota:</p>

            <div class="space-y-3">
              <div
                v-for="batch in course.batches"
                :key="batch.id"
                @click="selectedBatchId = batch.id"
                :class="[
                  'p-4 rounded-xl border text-xs cursor-pointer transition',
                  selectedBatchId === batch.id
                    ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-600'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                ]"
              >
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">{{ formatDate(batch.startDate) }} &ndash; {{ formatDate(batch.endDate) }}</span>
                  <span class="font-mono font-black text-blue-700">PKR {{ batch.price.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between items-center text-slate-500 mt-2 text-[11px]">
                  <span>Seats: <strong class="text-emerald-600">{{ batch.availableSeats }} left</strong> / {{ batch.totalSeats }}</span>
                  <span class="text-[10px] font-mono uppercase text-blue-700 font-bold" v-if="selectedBatchId === batch.id">&bull; Selected</span>
                </div>
              </div>
            </div>

            <!-- Total Calculation & CTA -->
            <div class="mt-5 pt-4 border-t border-slate-100">
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs text-slate-500">Total Statutory Tuition:</span>
                <span class="text-lg font-black text-slate-900 font-mono">
                  PKR {{ selectedBatchPrice.toLocaleString() }}
                </span>
              </div>

              <button
                :disabled="!selectedBatchId"
                @click="proceedToBooking"
                class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-xs transition flex items-center justify-center space-x-2 disabled:opacity-40"
              >
                <span>Reserve Seat &amp; Proceed to Checkout &rarr;</span>
              </button>
              <p class="text-[10px] text-center text-slate-400 mt-2.5">
                Instant confirmation &bull; 10-minute quota lock &bull; Tax invoice generated instantly.
              </p>
            </div>
          </div>

          <!-- Institute Profile Card -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Conducted By Institute</span>
            <h3 class="text-base font-black text-slate-900 mt-1.5">{{ course.institute.name }}</h3>
            <p class="text-xs text-slate-500 mt-1">{{ course.institute.address }}, {{ course.institute.city }}</p>
            <div class="mt-3 py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700">
              DG Approval: <strong>{{ course.institute.dgApproval }}</strong>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500">Admissions Desk:</span>
              <a href="tel:+923366668475" class="text-blue-700 font-bold hover:text-blue-800">
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
