<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-24">
    <!-- Header -->
    <header class="border-b border-slate-200 bg-white px-6 py-5 sticky top-0 z-30 shadow-xs">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <NuxtLink to="/seafarer/dashboard" class="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span>Seafarer Panel</span>
            </NuxtLink>
            <span class="text-slate-300">&bull;</span>
            <span class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">DIGITAL RESUME</span>
          </div>
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Auto-Updating Maritime Profile</h1>
          <p class="text-xs text-slate-500 mt-0.5">
            Auto-generates from your verified certificates, sea service records, and job history
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button
            @click="exportPdf"
            class="text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs flex items-center space-x-1.5 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>Export Verified PDF</span>
          </button>
          <button
            @click="shareProfile"
            class="text-xs font-semibold px-4 py-2.5 rounded-xl transition bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            <span>Share Public Profile</span>
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- ══════════════════════════════════════════════════════════════ -->
      <!-- LEFT SIDEBAR                                                  -->
      <!-- ══════════════════════════════════════════════════════════════ -->
      <aside class="space-y-4">
        <!-- Profile Card -->
        <div class="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs">
          <div class="relative w-24 h-24 rounded-2xl mx-auto mb-3 overflow-hidden border border-slate-200 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Cadet Alex Mercer"
              class="w-full h-full object-cover"
            />
          </div>
          <h2 class="text-lg font-bold text-slate-900">Cadet Alex Mercer</h2>
          <div class="text-xs font-semibold text-blue-700 mt-0.5">Deck Officer Cadet</div>
          <div class="flex items-center justify-center gap-1.5 mt-2">
            <span class="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>INDoS VERIFIED</span>
            </span>
          </div>

          <!-- Profile Completion Ring -->
          <div class="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
            <div class="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span class="text-slate-600">Profile Completeness</span>
              <span class="font-mono font-bold text-[#0A1936]">98%</span>
            </div>
            <div class="h-2 rounded-full overflow-hidden bg-slate-200">
              <div class="h-full rounded-full bg-[#0A1936]" style="width: 98%;"></div>
            </div>
          </div>
        </div>

        <!-- Identity Numbers -->
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div class="text-[10px] font-mono tracking-widest mb-3 font-bold text-slate-400 uppercase">MARITIME IDENTIFIERS</div>
          <div class="space-y-2.5 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-slate-500">INDoS No.</span>
              <span class="font-mono font-bold text-slate-900">08ZL9431</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500">CDC No.</span>
              <span class="font-mono font-bold text-slate-900">IN-98765</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500">Seafarer ID</span>
              <span class="font-mono font-bold text-slate-900">SEAFU-0827-M</span>
            </div>
            <div class="flex justify-between items-center pt-1 border-t border-slate-100">
              <span class="text-slate-500">DGS Auth Hash</span>
              <span class="font-mono text-[11px] text-blue-700 font-semibold">0x7F9B...8A12</span>
            </div>
          </div>
        </div>

        <!-- Active Applications widget -->
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div class="text-[10px] font-mono tracking-widest mb-3 font-bold text-slate-400 uppercase">JOB APPLICATIONS</div>
          <div class="space-y-2">
            <div v-for="status in applicationSummary" :key="status.label" class="flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full" :class="status.bg"></div>
                <span class="text-slate-600 font-medium">{{ status.label }}</span>
              </div>
              <span class="font-bold text-slate-900 font-mono">{{ status.count }}</span>
            </div>
          </div>
          <NuxtLink
            to="/jobs"
            class="mt-4 block text-center text-xs font-semibold py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition"
          >
            Track Applications &rarr;
          </NuxtLink>
        </div>
      </aside>

      <!-- ══════════════════════════════════════════════════════════════ -->
      <!-- MAIN RESUME BODY                                              -->
      <!-- ══════════════════════════════════════════════════════════════ -->
      <div class="lg:col-span-2 space-y-5">
        <!-- Auto-update notice -->
        <div class="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <svg class="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <div class="text-xs leading-relaxed text-emerald-900 font-normal">
            <strong class="font-semibold text-emerald-950">Auto-Updated Live CV:</strong>
            This profile syncs automatically with your STCW certificate vault, verified sea service logs, and approved cadet training records. Last synced: <span class="font-mono font-semibold">Today, 08:30 UTC</span>.
          </div>
        </div>

        <!-- ── PERSONAL INFO ─────────────────────────────────────────── -->
        <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div class="text-xs font-mono tracking-widest font-bold text-slate-400 uppercase">PERSONAL INFORMATION</div>
            <span class="text-[11px] font-semibold text-emerald-600">✓ Verified via Passport</span>
          </div>
          <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="field in personalInfo" :key="field.label">
              <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">{{ field.label }}</div>
              <div class="text-sm mt-0.5 font-semibold text-slate-900">{{ field.value }}</div>
            </div>
          </div>
        </div>

        <!-- ── STCW CERTIFICATES (Auto-synced) ──────────────────────── -->
        <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div class="text-xs font-mono tracking-widest font-bold text-slate-400 uppercase">STCW CERTIFICATES &bull; AUTO-SYNCED</div>
            <NuxtLink to="/seafarer/vault" class="text-xs font-semibold text-blue-700 hover:underline">Manage Vault &rarr;</NuxtLink>
          </div>
          <div class="divide-y divide-slate-100">
            <div
              v-for="cert in resumeCerts"
              :key="cert.name"
              class="flex items-center justify-between p-5 hover:bg-slate-50/60 transition gap-4"
            >
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-slate-900">{{ cert.name }}</div>
                  <div class="text-xs font-mono text-slate-400 mt-0.5">{{ cert.ref }} &bull; {{ cert.institute }}</div>
                </div>
              </div>

              <div class="text-right shrink-0">
                <div
                  class="text-xs font-bold"
                  :class="cert.status === 'EXPIRED' ? 'text-rose-600' : cert.status === 'EXPIRING' ? 'text-amber-600' : 'text-emerald-600'"
                >
                  {{ cert.status }}
                </div>
                <div class="text-[11px] font-mono text-slate-400 mt-0.5">Until {{ cert.until }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ── SEA SERVICE EXPERIENCE ────────────────────────────────── -->
        <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div class="text-xs font-mono tracking-widest font-bold text-slate-400 uppercase">SEA SERVICE LOGBOOK</div>
            <span class="text-xs font-mono font-bold text-slate-700">420 Days Logged</span>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-for="job in seaService" :key="job.id" class="p-6">
              <div class="flex items-start justify-between gap-4">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-sm text-slate-900">{{ job.rank }}</div>
                  <div class="text-xs font-semibold text-blue-700 mt-0.5">{{ job.company }} &bull; {{ job.vesselName }}</div>
                  <div class="text-xs text-slate-500 mt-0.5">{{ job.vesselType }} &bull; IMO: {{ job.imo }} &bull; {{ job.flag }} Flag</div>
                  <div class="text-xs font-mono text-slate-400 mt-1">{{ job.from }} — {{ job.to }}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-sm font-bold text-slate-900 font-mono">{{ job.months }} mo</div>
                  <div class="text-[11px] font-mono text-slate-400">{{ job.grt }} GRT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({ title: 'Digital Resume · The Seafu' });
definePageMeta({ layout: false });

const personalInfo = [
  { label: 'Full Name', value: 'Cadet Alex Mercer' },
  { label: 'Rank / Title', value: 'Deck Officer Cadet' },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Date of Birth', value: '14 August 2002' },
  { label: 'Email', value: 'alex.mercer@seafu.org' },
  { label: 'Contact Phone', value: '+91 98201 44520' },
  { label: 'Passport No.', value: 'PH4912341 (Valid to 2030)' },
  { label: 'Medical Fitness', value: 'ENG1 Valid to Jan 2026' },
];

const resumeCerts = [
  { name: 'STCW Watchkeeping Officer Cert', ref: 'IND-WKC-4091', institute: 'Maritime Training Academy Mumbai', status: 'VALID', until: '14 Oct 2027' },
  { name: 'ENG1 Medical Fitness Certificate', ref: 'DG-MED-8820', institute: 'DG Approved Medical Examiner', status: 'VALID', until: '05 Jan 2026' },
  { name: 'Advanced Fire Fighting (AFF)', ref: 'IND-AFF-7714', institute: 'National Maritime Institute', status: 'EXPIRING', until: 'In 14 Days' },
  { name: 'ECDIS Type-Specific (Raytheon Anschütz)', ref: 'ECDIS-RA-2023', institute: 'Oceanic Training Hub', status: 'VALID', until: '05 Apr 2028' },
];

const seaService = [
  {
    id: 1,
    rank: 'Deck Cadet',
    company: 'Atlantic Maritime Fleets',
    vesselName: 'MV Atlantic Pioneer',
    vesselType: 'Crude Oil Tanker (VLCC)',
    imo: '9876543',
    flag: 'Panama',
    from: '10 Jan 2025',
    to: 'Present',
    months: '8',
    grt: '160,000',
  },
  {
    id: 2,
    rank: 'Trainee Deck Rating',
    company: 'Global Container Lines Ltd.',
    vesselName: 'MV Ocean Voyager',
    vesselType: 'Ultra-Large Container Ship',
    imo: '9741209',
    flag: 'Liberia',
    from: '01 Mar 2024',
    to: '30 Sep 2024',
    months: '6',
    grt: '120,000',
  },
];

const applicationSummary = [
  { label: 'Applied', count: 2, bg: 'bg-slate-400' },
  { label: 'Shortlisted', count: 1, bg: 'bg-[#38BDF8]' },
  { label: 'Selected', count: 1, bg: 'bg-amber-400' },
];

function exportPdf() {
  alert('Exporting official verified Seafarer CV with ECDSA digital stamp...');
}

function shareProfile() {
  alert('Public verified profile link copied to clipboard: https://seafu.org/profile/alex-mercer-08ZL9431');
}
</script>
