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
          <NuxtLink to="/institute/jobs" class="hidden sm:inline-block text-xs font-semibold text-slate-600 hover:text-blue-700">
            Recruiter Desk
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm">/</span>
          <span class="hidden sm:inline-block text-xs font-semibold text-slate-900">Post Vacancy</span>
        </div>

        <NuxtLink
          to="/institute/jobs"
          class="text-xs font-semibold text-slate-500 hover:text-slate-900 transition flex items-center space-x-1"
        >
          <span>&larr;</span>
          <span>Posted Vacancies</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto w-full">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Post a New Maritime Vacancy
          </h1>
          <p class="text-xs text-slate-500 mt-1">
            Reach verified academy cadets, certified watchkeeping officers, and marine engineers with DG Shipping credentials.
          </p>
        </div>

        <!-- Success State -->
        <div
          v-if="submitted"
          class="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center space-y-4"
        >
          <div class="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-slate-900">Position Successfully Posted</h2>
          <p class="text-xs text-slate-500 max-w-md mx-auto">
            Your job opening is now active on the Seafu Maritime Career Hub. Verified seafarers matching your criteria can apply with 1-click credential submission.
          </p>
          <div class="flex gap-3 justify-center pt-2">
            <NuxtLink
              to="/institute/jobs"
              class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition shadow-xs"
            >
              View in Recruiter Desk
            </NuxtLink>
            <button
              @click="submitted = false; resetForm()"
              class="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition"
            >
              Post Another Vacancy
            </button>
          </div>
        </div>

        <!-- Job Form -->
        <form v-else @submit.prevent="submitJob" class="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <!-- Job Type Toggle -->
          <div class="space-y-3">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider text-[11px]">
              Job Classification *
            </label>
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                @click="form.jobType = 'SHIPBOARD'"
                class="p-4 rounded-xl border text-left transition flex items-start space-x-3.5"
                :class="form.jobType === 'SHIPBOARD'
                  ? 'bg-blue-50/60 border-blue-600 ring-1 ring-blue-600 text-slate-900'
                  : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:bg-slate-50'"
              >
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  :class="form.jobType === 'SHIPBOARD' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <div class="font-bold text-sm">Shipboard / Seagoing</div>
                  <div class="text-xs text-slate-500 mt-0.5">Officers, engineers, ratings on trading vessels</div>
                </div>
              </button>

              <button
                type="button"
                @click="form.jobType = 'SHORE_BASED'"
                class="p-4 rounded-xl border text-left transition flex items-start space-x-3.5"
                :class="form.jobType === 'SHORE_BASED'
                  ? 'bg-blue-50/60 border-blue-600 ring-1 ring-blue-600 text-slate-900'
                  : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:bg-slate-50'"
              >
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  :class="form.jobType === 'SHORE_BASED' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div class="font-bold text-sm">Shore-based / Maritime Tech</div>
                  <div class="text-xs text-slate-500 mt-0.5">Fleet superintendents, academy instructors, port ops</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Position Details -->
          <div class="space-y-4 pt-2">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Position Details
              </h2>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Job Title *</label>
              <input
                v-model="form.title"
                type="text"
                required
                placeholder="e.g. Master Mariner — VLCC Tanker (FG)"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Rank / Position *</label>
                <select
                  v-model="form.rank"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="">Select rank...</option>
                  <option v-for="r in shipRanks" :key="r" :value="r">{{ r }}</option>
                </select>
              </div>

              <div v-if="form.jobType === 'SHIPBOARD'">
                <label class="block text-xs font-bold text-slate-700 mb-1">Vessel Type *</label>
                <select
                  v-model="form.shipType"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="">Select vessel type...</option>
                  <option v-for="s in shipTypes" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-if="form.jobType === 'SHIPBOARD'">
                <label class="block text-xs font-bold text-slate-700 mb-1">Port of Joining</label>
                <select
                  v-model="form.portOfJoining"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="">Select joining port...</option>
                  <option v-for="p in ports" :key="p" :value="p">{{ p }}</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Contract Duration</label>
                <input
                  v-model="form.contractDuration"
                  type="text"
                  placeholder="e.g. 4 months on / 2 months off"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <!-- Compensation -->
          <div class="space-y-4 pt-2">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Compensation &amp; Currency
              </h2>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">Monthly Salary *</label>
                <input
                  v-model.number="form.salary"
                  type="number"
                  min="0"
                  required
                  placeholder="e.g. 9500"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Currency</label>
                <select
                  v-model="form.currency"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-mono font-bold"
                >
                  <option value="USD">USD ($)</option>
                  <option value="PKR">PKR (₨)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Description & STCW Requirements -->
          <div class="space-y-4 pt-2">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Job Description &amp; STCW Requirements
              </h2>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Role Description *</label>
              <textarea
                v-model="form.description"
                rows="4"
                required
                placeholder="Detail role responsibilities, trading route, vessel deadweight, propulsion machinery, and safety standards..."
                class="w-full p-3.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 leading-relaxed"
              ></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Mandatory STCW Certificates &amp; Endorsements</label>
              <div class="space-y-2 mb-3">
                <div
                  v-for="(req, i) in form.requirements"
                  :key="i"
                  class="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-slate-800 font-medium">{{ req }}</span>
                  </div>
                  <button type="button" @click="removeRequirement(i)" class="text-slate-400 hover:text-rose-600 font-bold text-sm">✕</button>
                </div>
              </div>

              <div class="flex gap-2">
                <input
                  v-model="newRequirement"
                  type="text"
                  placeholder="e.g. Master (FG) Class 1 CoC, Advanced Oil Tanker Cargo Operations (TASCO)"
                  class="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                  @keydown.enter.prevent="addRequirement"
                />
                <button
                  type="button"
                  @click="addRequirement"
                  class="px-4 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>

          <!-- Submit Actions -->
          <div class="pt-4 border-t border-slate-200/80 flex items-center justify-between">
            <NuxtLink
              to="/institute/jobs"
              class="text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
            >
              Cancel
            </NuxtLink>

            <div class="flex items-center space-x-2">
              <button
                type="submit"
                :disabled="submitting"
                class="px-6 py-2.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 disabled:opacity-50"
              >
                <span>{{ submitting ? 'Publishing...' : 'Publish Vacancy' }}</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Post a Maritime Vacancy &bull; Academy Console',
});

const submitting = ref(false);
const submitted = ref(false);
const newRequirement = ref('');

const form = reactive({
  jobType: 'SHIPBOARD' as 'SHIPBOARD' | 'SHORE_BASED',
  title: '',
  rank: '',
  shipType: '',
  portOfJoining: '',
  contractDuration: '4 months on / 2 off',
  salary: 9500,
  currency: 'USD',
  description: '',
  requirements: [
    'Valid STCW 2010 Certificate of Competency (CoC)',
    'Continuous Discharge Certificate (CDC) with minimum 12 months sea service',
    'Advanced Fire Fighting (AFF) & Medical First Aid',
  ],
});

const shipRanks = [
  'Master Mariner', 'Chief Officer', '2nd Officer', '3rd Officer',
  'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer',
  'Electro-Technical Officer (ETO)', 'Bosun', 'Able Seaman (AB)', 'Ordinary Seaman (OS)',
  'Dynamic Positioning Officer (DPO)', 'Fleet Marine Superintendent', 'Simulator Instructor',
];

const shipTypes = [
  'VLCC / Crude Oil Tanker', 'LNG Membrane Carrier', 'LPG Tanker', 'Ultra Large Container Vessel (ULCV)',
  'Capesize Bulk Carrier', 'Chemical Tanker (Type II)', 'Offshore Supply / PSV', 'Dredger & Tug',
];

const ports = [
  'Singapore', 'Dubai (Jebel Ali)', 'Rotterdam', 'Houston', 'Mumbai (JNPT)', 'Karachi (KPT)', 'Port Said',
];

function addRequirement() {
  if (newRequirement.value.trim()) {
    form.requirements.push(newRequirement.value.trim());
    newRequirement.value = '';
  }
}

function removeRequirement(i: number) {
  form.requirements.splice(i, 1);
}

function resetForm() {
  form.title = '';
  form.rank = '';
  form.shipType = '';
  form.description = '';
}

async function submitJob() {
  submitting.value = true;
  await new Promise((r) => setTimeout(r, 600));
  submitting.value = false;
  submitted.value = true;
}
</script>
