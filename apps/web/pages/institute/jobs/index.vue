<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="selectedCandidate = null"
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
            <span class="text-xs font-semibold text-slate-700">Recruiter Desk &amp; ATS</span>
          </nav>
        </div>

        <NuxtLink
          to="/institute/jobs/post"
          class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Post New Vacancy</span>
        </NuxtLink>
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
              Maritime Recruiter ATS &amp; Vacancies
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              Connect verified academy cadets and certified officers with maritime shipping companies and fleet managers.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-3 py-1.5 rounded-xl border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true"></span>
            <span>Verified Vault Matching Active</span>
          </div>
        </div>

        <!-- 4 ATS KPI Cards -->
        <section aria-label="Recruitment Statistics" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">ACTIVE POSTINGS</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">4 Open</div>
            <div class="text-[11px] text-blue-800 font-semibold">Shipboard &bull; Shore-based</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">TOTAL APPLICANTS</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">48 Cadets</div>
            <div class="text-[11px] text-emerald-800 font-semibold">● 100% STCW Verified</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">SHORTLISTED</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">14 Officers</div>
            <div class="text-[11px] text-slate-600 font-medium">Interview ready</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase">PLACEMENTS</div>
            <div class="text-2xl font-bold text-emerald-800 font-mono">8 Hired</div>
            <div class="text-[11px] text-emerald-800 font-semibold">This Quarter</div>
          </div>
        </section>

        <!-- Active Vacancies Grid -->
        <section aria-label="Active Vacancies" class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Active Recruitment Postings
            </h2>
            <NuxtLink to="/institute/jobs/post" class="text-xs font-bold text-blue-700 hover:underline">
              + Post Another Job
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="job in postedJobs"
              :key="job.id"
              class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition space-y-3"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <div class="flex items-center space-x-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                      {{ job.type }}
                    </span>
                    <span class="text-xs text-slate-600 font-medium">{{ job.vessel }}</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 mt-1">{{ job.title }}</h3>
                  <div class="text-xs text-slate-600 mt-0.5">{{ job.location }} &bull; Contract: {{ job.contract }}</div>
                </div>

                <div class="text-right shrink-0">
                  <div class="text-sm font-bold font-mono text-slate-900">{{ job.salary }}</div>
                  <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                    {{ job.applicants }} Applicants
                  </span>
                </div>
              </div>

              <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[11px] text-slate-500">Posted {{ job.postedDate }}</span>
                <span class="text-xs font-bold text-blue-700 flex items-center space-x-1">
                  <span>{{ job.applicants }} Candidates in Review</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Candidate Applicant Pipeline Table -->
        <div class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Recent Cadet &amp; Officer Applications
            </h2>
            <span class="text-xs text-blue-700 font-mono font-bold">1-Click Vault Inspection</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs" aria-label="Applicant candidate pipeline">
              <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-5 py-3.5">CANDIDATE</th>
                  <th scope="col" class="px-5 py-3.5">RANK &bull; POSITION</th>
                  <th scope="col" class="px-5 py-3.5">SEA SERVICE</th>
                  <th scope="col" class="px-5 py-3.5">CREDENTIALS</th>
                  <th scope="col" class="px-5 py-3.5">PIPELINE STATUS</th>
                  <th scope="col" class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="app in applications" :key="app.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ app.name }}</div>
                    <div class="text-[10px] text-slate-500 font-mono">INDoS: {{ app.indos }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="font-semibold text-slate-800">{{ app.position }}</div>
                    <div class="text-[10px] text-slate-500">{{ app.vessel }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono">
                    <div class="font-bold text-slate-900">{{ app.seaTime }} Days</div>
                    <div class="text-[10px] text-emerald-800 font-semibold">Requirement Met</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                      <svg class="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Vault Verified</span>
                    </span>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :class="app.status === 'Shortlisted' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'"
                    >
                      {{ app.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="reviewCandidate(app)"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      Review Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal: Review Candidate -->
    <div
      v-if="selectedCandidate"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="candidate-modal-title"
      @click.self="selectedCandidate = null"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="candidate-modal-title" class="text-sm font-bold text-slate-900">{{ selectedCandidate.name }}</h3>
            <div class="text-[10px] font-mono text-slate-500">INDoS: {{ selectedCandidate.indos }}</div>
          </div>
          <button
            @click="selectedCandidate = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close candidate modal"
          >
            ✕
          </button>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div class="flex justify-between">
            <span class="text-slate-600">Position Applied:</span>
            <span class="font-bold text-slate-900">{{ selectedCandidate.position }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Logged Sea Service:</span>
            <span class="font-mono font-bold text-slate-900">{{ selectedCandidate.seaTime }} Days</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">STCW Status:</span>
            <span class="font-semibold text-emerald-800">100% Compliant</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Current Pipeline:</span>
            <span class="font-bold text-blue-700">{{ selectedCandidate.status }}</span>
          </div>
        </div>

        <div class="flex justify-end space-x-2 pt-2">
          <button
            @click="selectedCandidate = null"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Close
          </button>
          <button
            @click="updatePipelineStatus('Interview Scheduled')"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Schedule Interview &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Maritime Recruiter ATS &bull; Academy Console',
});

const selectedCandidate = ref<any>(null);

const postedJobs = ref([
  {
    id: 'j1',
    title: 'Master Mariner — VLCC Tanker',
    type: 'SHIPBOARD',
    vessel: 'Crude Oil Tanker (300k DWT)',
    location: 'Port of Joining: Singapore',
    contract: '4 months on / 2 off',
    salary: '$9,500 / month',
    applicants: 18,
    postedDate: '3 days ago',
  },
  {
    id: 'j2',
    title: 'Chief Officer — LNG Carrier',
    type: 'SHIPBOARD',
    vessel: 'Membrane Type LNG (174k CBM)',
    location: 'Port of Joining: Dubai (Jebel Ali)',
    contract: '3 months on / 3 off',
    salary: '$8,200 / month',
    applicants: 12,
    postedDate: '5 days ago',
  },
  {
    id: 'j3',
    title: '2nd Engineer — Container Fleet',
    type: 'SHIPBOARD',
    vessel: '14,000 TEU Ultra-Large Container',
    location: 'Port of Joining: Rotterdam',
    contract: '4 months on / 2 off',
    salary: '$6,800 / month',
    applicants: 14,
    postedDate: '1 week ago',
  },
  {
    id: 'j4',
    title: 'Marine Simulator Instructor (Shore-based)',
    type: 'SHORE_BASED',
    vessel: 'MTI Navigation Faculty',
    location: 'Karachi Campus',
    contract: 'Permanent Full-Time',
    salary: 'PKR 250,000 / month',
    applicants: 4,
    postedDate: '2 weeks ago',
  },
]);

const applications = ref([
  {
    id: 'a1',
    name: 'Cadet Alex Mercer',
    indos: '08ZL9431',
    position: 'Chief Officer — LNG Carrier',
    vessel: 'Membrane Type LNG',
    seaTime: 420,
    status: 'Shortlisted',
  },
  {
    id: 'a2',
    name: 'Capt. Rajesh Sharma',
    indos: '08ZL9431',
    position: 'Master Mariner — VLCC Tanker',
    vessel: 'Crude Oil Tanker',
    seaTime: 1240,
    status: 'Shortlisted',
  },
  {
    id: 'a3',
    name: 'Officer Tariq Mahmood',
    indos: 'KHI-CDC-49102',
    position: '2nd Engineer — Container Fleet',
    vessel: '14,000 TEU Container',
    seaTime: 580,
    status: 'Under Review',
  },
]);

function reviewCandidate(cand: any) {
  selectedCandidate.value = cand;
}

function updatePipelineStatus(newStatus: string) {
  if (selectedCandidate.value) {
    selectedCandidate.value.status = newStatus;
  }
  selectedCandidate.value = null;
}
</script>
