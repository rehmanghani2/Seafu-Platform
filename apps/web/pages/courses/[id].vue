<template>
  <div class="bg-slate-50 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex text-xs text-slate-500 mb-6 space-x-2">
        <NuxtLink to="/" class="hover:text-ocean-600">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/courses" class="hover:text-ocean-600">Courses</NuxtLink>
        <span>/</span>
        <span class="text-slate-800 font-medium">{{ course.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Course Information -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Course Header Banner -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-ocean-100 text-ocean-800">
                {{ course.category }}
              </span>
              <span v-if="course.isDgApproved" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Shield DG Approved
              </span>
              <span class="text-xs text-slate-400 font-mono">{{ course.code }}</span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {{ course.title }}
            </h1>

            <p class="text-sm text-slate-600 mt-4 leading-relaxed">
              {{ course.description }}
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
              <div>
                <span class="text-slate-400 block">Duration</span>
                <span class="font-bold text-slate-800 text-sm">{{ course.durationDays }} Days Full Time</span>
              </div>
              <div>
                <span class="text-slate-400 block">Certification</span>
                <span class="font-bold text-slate-800 text-sm">DG Shipping Approved Certificate</span>
              </div>
              <div>
                <span class="text-slate-400 block">Delivery Mode</span>
                <span class="font-bold text-slate-800 text-sm">Classroom & Practical Drills</span>
              </div>
            </div>
          </div>

          <!-- Prerequisites Section -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 class="text-lg font-bold text-slate-900 mb-4">Mandatory Prerequisites</h2>
            <ul class="space-y-2.5">
              <li
                v-for="(req, idx) in course.prerequisites"
                :key="idx"
                class="flex items-start text-xs text-slate-700 space-x-2"
              >
                <span class="text-emerald-500 font-bold">OK</span>
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>

          <!-- Syllabus Section -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 class="text-lg font-bold text-slate-900 mb-4">Course Syllabus & Modules</h2>
            <div class="prose prose-sm text-slate-600 text-xs leading-relaxed whitespace-pre-line">
              {{ course.syllabus }}
            </div>
          </div>
        </div>

        <!-- Sidebar: Institute & Batch Booking -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Institute Profile Card -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Conducted By</span>
            <h3 class="text-base font-bold text-slate-900 mt-1">{{ course.institute.name }}</h3>
            <p class="text-xs text-slate-500 mt-1">{{ course.institute.address }}, {{ course.institute.city }}</p>
            <div class="mt-3 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-600">
              DG Code: <strong>{{ course.institute.dgApproval }}</strong>
            </div>
          </div>

          <!-- Available Batches Selector -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-base font-bold text-slate-900 mb-3">Available Batches</h3>
            <p class="text-xs text-slate-500 mb-4">Select an upcoming schedule to reserve your seat instantly:</p>

            <div class="space-y-3">
              <div
                v-for="batch in course.batches"
                :key="batch.id"
                @click="selectedBatchId = batch.id"
                :class="[
                  'p-4 rounded-xl border text-xs cursor-pointer transition',
                  selectedBatchId === batch.id
                    ? 'border-ocean-600 bg-ocean-50/40 ring-1 ring-ocean-500'
                    : 'border-slate-200 hover:border-slate-300'
                ]"
              >
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">{{ formatDate(batch.startDate) }} - {{ formatDate(batch.endDate) }}</span>
                  <span class="font-mono font-bold text-slate-900">INR {{ batch.price.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between items-center text-slate-500 mt-2">
                  <span>Seats: <strong class="text-emerald-700">{{ batch.availableSeats }} available</strong> / {{ batch.totalSeats }}</span>
                  <input type="radio" :checked="selectedBatchId === batch.id" class="text-ocean-600" />
                </div>
              </div>
            </div>

            <button
              :disabled="!selectedBatchId"
              @click="proceedToBooking"
              class="w-full mt-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-xs rounded-xl transition shadow-md disabled:opacity-40"
            >
              Reserve Seat & Proceed to Checkout
            </button>
            <p class="text-[10px] text-center text-slate-400 mt-2">
              Instant confirmation & dual tax receipt generated upon payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const selectedBatchId = ref<string | null>('batch-01');

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function proceedToBooking() {
  if (!selectedBatchId.value) return;
  navigateTo(`/bookings/checkout?batchId=${selectedBatchId.value}`);
}

const course = ref({
  id: route.params.id as string,
  title: 'Personal Survival Techniques (PST)',
  code: 'STCW-PST-01',
  category: 'STCW Basic Safety',
  isDgApproved: true,
  durationDays: 3,
  description:
    'Mandatory STCW safety course covering emergency procedures, life jackets, survival craft, and survival at sea following vessel distress. Complies with DG Shipping Order and IMO STCW Code Section A-VI/1-1.',
  prerequisites: [
    'Valid INDoS (Indian National Database of Seafarers) Number',
    'Medical fitness certificate issued by DG Approved Maritime Doctor',
    'Valid Passport or National Identity Proof',
    'Minimum 16 years of age',
  ],
  syllabus:
    'Module 1: Emergency Situations & Principles of Survival at Sea\nModule 2: Life Saving Appliances (LSA) & Lifejackets\nModule 3: Inflatable Liferafts, Davit-Launched Lifeboats & Survival Craft\nModule 4: Practical Wet Pool Drills: Water entry, boarding life raft, righting inverted raft, pyrotechnics simulator\nModule 5: Cold Water Shock & Hypothermia Prevention\nModule 6: Written & Practical Assessment',
  institute: {
    name: 'Anglo-Eastern Maritime Training Academy',
    address: 'Khandpe, Post-Karjat',
    city: 'Mumbai',
    dgApproval: 'DG/TR/MH/2024/001',
  },
  batches: [
    {
      id: 'batch-01',
      startDate: '2026-09-22T09:00:00Z',
      endDate: '2026-09-24T17:00:00Z',
      totalSeats: 24,
      availableSeats: 12,
      price: 4500,
    },
    {
      id: 'batch-02',
      startDate: '2026-09-29T09:00:00Z',
      endDate: '2026-10-01T17:00:00Z',
      totalSeats: 24,
      availableSeats: 8,
      price: 4500,
    },
  ],
});
</script>