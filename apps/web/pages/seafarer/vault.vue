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
            <span class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">STCW CERTIFICATE VAULT</span>
          </div>
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Certificate Vault</h1>
          <p class="text-xs text-slate-500 mt-0.5">
            All verified STCW, MLC &amp; DG Shipping certificates with cryptographic integrity
          </p>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/vault/dossier/IND-AFF-7714-ECDSA"
            class="text-xs font-semibold px-4 py-2.5 rounded-xl transition bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Full Cryptographic Dossier &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      <!-- ── COMPLIANCE OVERVIEW ──────────────────────────────────────── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <div class="text-3xl font-bold text-emerald-600 font-mono">{{ validCount }}</div>
          <div class="text-[11px] font-mono font-semibold mt-1 text-slate-500 uppercase">VALID CERTS</div>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <div class="text-3xl font-bold text-amber-500 font-mono">{{ expiringSoonCount }}</div>
          <div class="text-[11px] font-mono font-semibold mt-1 text-slate-500 uppercase">EXPIRING SOON</div>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <div class="text-3xl font-bold text-rose-600 font-mono">{{ expiredCount }}</div>
          <div class="text-[11px] font-mono font-semibold mt-1 text-slate-500 uppercase">EXPIRED</div>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <div class="text-3xl font-bold text-blue-700 font-mono">{{ certificates.length }}</div>
          <div class="text-[11px] font-mono font-semibold mt-1 text-slate-500 uppercase">TOTAL CERTS</div>
        </div>
      </div>

      <!-- ── CERTIFICATE GRID ──────────────────────────────────────────── -->
      <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        <div class="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="text-base font-bold text-slate-900">STCW Certificate Registry</div>
            <p class="text-xs text-slate-500 mt-0.5">Audited tamper-evident credentials</p>
          </div>
          <div class="flex gap-2 flex-wrap" role="tablist" aria-label="Certificate Status Filters">
            <button
              v-for="f in ['ALL', 'VALID', 'EXPIRING', 'EXPIRED']"
              :key="f"
              class="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition focus:outline-none focus:ring-1 focus:ring-blue-600"
              :class="vaultFilter === f ? 'bg-[#0A1936] text-white shadow-xs' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'"
              @click="vaultFilter = f"
            >
              {{ f }}
            </button>
          </div>
        </div>

        <div class="divide-y divide-slate-100">
          <div
            v-for="cert in filteredCerts"
            :key="cert.id"
            class="p-5 flex flex-col sm:flex-row items-start gap-4 hover:bg-slate-50/60 transition"
          >
            <!-- Category Icon -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 border border-blue-200/80 text-blue-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <!-- Name + badge -->
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="font-bold text-sm text-slate-900">{{ cert.name }}</span>
                <span
                  class="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold border"
                  :class="certStatusClass(cert)"
                >
                  {{ certStatusText(cert) }}
                </span>
                <span
                  v-if="cert.ecdsa"
                  class="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200"
                >
                  <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>ECDSA Verified</span>
                </span>
              </div>

              <!-- Meta info -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1.5 text-xs mt-2.5">
                <div>
                  <div class="text-[10px] uppercase font-semibold text-slate-400">REF NO.</div>
                  <div class="font-mono text-slate-700 font-semibold">{{ cert.certNo }}</div>
                </div>
                <div>
                  <div class="text-[10px] uppercase font-semibold text-slate-400">ISSUING INSTITUTE</div>
                  <div class="text-slate-700 font-medium">{{ cert.institute }}</div>
                </div>
                <div>
                  <div class="text-[10px] uppercase font-semibold text-slate-400">ISSUED ON</div>
                  <div class="text-slate-700">{{ cert.issuedOn }}</div>
                </div>
                <div>
                  <div class="text-[10px] uppercase font-semibold text-slate-400">VALID UNTIL</div>
                  <div :class="cert.daysLeft !== null && cert.daysLeft < 30 ? 'text-amber-600 font-bold' : 'text-slate-700'">
                    {{ cert.validUntil || 'Lifetime' }}
                  </div>
                </div>
              </div>

              <!-- Expiry progress bar -->
              <div v-if="cert.daysLeft !== null && cert.daysLeft <= 180" class="mt-3">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="text-slate-500">Validity Remaining</span>
                  <span :class="cert.daysLeft <= 30 ? 'text-rose-600 font-bold' : 'text-amber-600 font-semibold'">
                    {{ cert.daysLeft > 0 ? cert.daysLeft + ' days left' : 'EXPIRED' }}
                  </span>
                </div>
                <div class="h-1.5 rounded-full overflow-hidden bg-slate-100">
                  <div
                    class="h-full rounded-full"
                    :class="cert.daysLeft <= 30 ? 'bg-rose-600' : 'bg-amber-500'"
                    :style="{ width: Math.max(0, Math.min(100, (cert.daysLeft / 180) * 100)) + '%' }"
                  ></div>
                </div>
              </div>

              <!-- STCW Regulation Reference -->
              <div class="mt-2.5 text-[11px] font-mono text-slate-400">
                STCW Ref: {{ cert.stcwRef }} &bull; {{ cert.convention }}
              </div>
            </div>

            <!-- Actions -->
            <div class="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto mt-3 sm:mt-0">
              <NuxtLink
                :to="'/verify/' + cert.certNo"
                class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-200 text-blue-700 bg-blue-50/50 hover:bg-blue-100 text-center transition"
              >
                QR Verify
              </NuxtLink>
              <button
                @click="downloadCert(cert)"
                class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-center"
              >
                Download
              </button>
              <NuxtLink
                v-if="cert.daysLeft !== null && cert.daysLeft <= 90"
                to="/courses"
                class="text-xs px-3 py-1.5 rounded-lg text-center font-semibold bg-amber-500 hover:bg-amber-600 text-white transition shadow-2xs"
              >
                Renew
              </NuxtLink>
            </div>
          </div>

          <div v-if="!filteredCerts.length" class="p-12 text-center">
            <p class="text-sm text-slate-500 font-normal">No certificates found for this filter.</p>
          </div>
        </div>
      </div>

      <!-- ── STCW COMPLIANCE SUMMARY TABLE ──────────────────────────── -->
      <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        <div class="p-5 border-b border-slate-100">
          <div class="text-base font-bold text-slate-900">STCW Manila Amendment 2010 — Compliance Checklist</div>
          <p class="text-xs text-slate-500 mt-0.5">Required certificates for Class I (Master Mariner) certification</p>
        </div>
        <div class="divide-y divide-slate-100">
          <div
            v-for="req in stcwRequirements"
            :key="req.code"
            class="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50/50 transition"
          >
            <div class="flex items-center gap-3">
              <span
                class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                :class="req.status === 'HELD' ? 'bg-emerald-100 text-emerald-700' : req.status === 'EXPIRING' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'"
              >
                <svg v-if="req.status === 'HELD'" class="w-4 h-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <svg v-else-if="req.status === 'EXPIRING'" class="w-4 h-4 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-4 h-4 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </span>
              <div>
                <div class="text-sm font-semibold text-slate-800">{{ req.name }}</div>
                <div class="text-xs font-mono text-slate-400">{{ req.code }} &bull; {{ req.convention }}</div>
              </div>
            </div>
            <span
              class="text-xs px-2.5 py-1 rounded-full font-bold"
              :class="req.status === 'HELD' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : req.status === 'EXPIRING' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200'"
            >
              {{ req.status }}
            </span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

useHead({ title: 'Certificate Vault · The Seafu' });
definePageMeta({ layout: false });

const vaultFilter = ref('ALL');

const certificates = ref([
  {
    id: 'cert-001',
    name: 'Advanced Fire Fighting (AFF)',
    certNo: 'IND-AFF-7714-ECDSA',
    institute: 'Maritime Training Academy Mumbai',
    issuedOn: '12 Sep 2026',
    validUntil: '12 Sep 2031',
    daysLeft: 1820,
    ecdsa: true,
    stcwRef: 'STCW A-VI/3',
    convention: 'SOLAS Reg. II-2',
    status: 'VALID',
  },
  {
    id: 'cert-002',
    name: 'Proficiency in Survival Craft (PSCRB)',
    certNo: 'DG/CERT/MH/2021/44421',
    institute: 'Maritime Training Academy Mumbai',
    issuedOn: '15 Oct 2021',
    validUntil: '15 Oct 2026',
    daysLeft: 28,
    ecdsa: true,
    stcwRef: 'STCW A-VI/2-1',
    convention: 'SOLAS Reg. III/4',
    status: 'EXPIRING',
  },
  {
    id: 'cert-003',
    name: 'Basic Safety Training (BST)',
    certNo: 'DG/CERT/MH/2021/44398',
    institute: 'Maritime Training Academy Mumbai',
    issuedOn: '15 Dec 2021',
    validUntil: '15 Dec 2026',
    daysLeft: 89,
    ecdsa: false,
    stcwRef: 'STCW A-VI/1',
    convention: 'SOLAS Reg. VI/1',
    status: 'EXPIRING',
  },
  {
    id: 'cert-004',
    name: 'Medical First Aid (MFA)',
    certNo: 'DG/CERT/KL/2022/77012',
    institute: 'Cochin Maritime Institute',
    issuedOn: '20 Jan 2022',
    validUntil: '20 Jan 2027',
    daysLeft: 490,
    ecdsa: false,
    stcwRef: 'STCW A-VI/4-1',
    convention: 'SOLAS Reg. VI/4',
    status: 'VALID',
  },
  {
    id: 'cert-005',
    name: 'ECDIS Navigation (Type Specific)',
    certNo: 'DG/CERT/MH/2023/51009',
    institute: 'Maritime Training Academy Mumbai',
    issuedOn: '05 Apr 2023',
    validUntil: '05 Apr 2028',
    daysLeft: 921,
    ecdsa: false,
    stcwRef: 'STCW A-II/1',
    convention: 'SOLAS Reg. V/19-1',
    status: 'VALID',
  },
  {
    id: 'cert-006',
    name: 'Ship Security Officer (SSO)',
    certNo: 'DG/CERT/TN/2020/18771',
    institute: 'Southern Maritime Institute',
    issuedOn: '10 Aug 2020',
    validUntil: null,
    daysLeft: null,
    ecdsa: false,
    stcwRef: 'STCW A-VI/5',
    convention: 'ISPS Code Reg. XI-2',
    status: 'VALID',
  },
  {
    id: 'cert-007',
    name: 'Leadership & Management (Management Level)',
    certNo: 'DG/CERT/MH/2019/30018',
    institute: 'Maritime Training Academy Mumbai',
    issuedOn: '10 Mar 2019',
    validUntil: '10 Mar 2024',
    daysLeft: -180,
    ecdsa: false,
    stcwRef: 'STCW A-II/2',
    convention: 'STCW 2010 Manila',
    status: 'EXPIRED',
  },
]);

const stcwRequirements = [
  { code: 'STCW A-VI/1', name: 'Basic Safety Training (BST)', convention: 'SOLAS Reg. VI/1', status: 'EXPIRING' },
  { code: 'STCW A-VI/2-1', name: 'Proficiency in Survival Craft (PSCRB)', convention: 'SOLAS Reg. III/4', status: 'EXPIRING' },
  { code: 'STCW A-VI/3', name: 'Advanced Fire Fighting (AFF)', convention: 'SOLAS Reg. II-2', status: 'HELD' },
  { code: 'STCW A-VI/4-1', name: 'Medical First Aid', convention: 'SOLAS Reg. VI/4', status: 'HELD' },
  { code: 'STCW A-II/1', name: 'Navigation at Operational Level', convention: 'SOLAS Reg. V/19', status: 'HELD' },
  { code: 'STCW A-II/2', name: 'Navigation at Management Level', convention: 'STCW 2010 Manila', status: 'EXPIRED' },
  { code: 'STCW A-VI/5', name: 'Ship Security Officer', convention: 'ISPS Code', status: 'HELD' },
];

const filteredCerts = computed(() => {
  if (vaultFilter.value === 'ALL') return certificates.value;
  return certificates.value.filter(c => {
    if (vaultFilter.value === 'VALID') return c.daysLeft === null || c.daysLeft > 90;
    if (vaultFilter.value === 'EXPIRING') return c.daysLeft !== null && c.daysLeft > 0 && c.daysLeft <= 90;
    if (vaultFilter.value === 'EXPIRED') return c.daysLeft !== null && c.daysLeft <= 0;
    return true;
  });
});

const validCount = computed(() => certificates.value.filter(c => c.daysLeft === null || c.daysLeft > 90).length);
const expiringSoonCount = computed(() => certificates.value.filter(c => c.daysLeft !== null && c.daysLeft > 0 && c.daysLeft <= 90).length);
const expiredCount = computed(() => certificates.value.filter(c => c.daysLeft !== null && c.daysLeft <= 0).length);

function certStatusClass(cert: any): string {
  if (cert.daysLeft !== null && cert.daysLeft <= 0) return 'bg-rose-50 text-rose-700 border-rose-200';
  if (cert.daysLeft !== null && cert.daysLeft <= 90) return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-emerald-50 text-emerald-700 border-emerald-200';
}

function certStatusText(cert: any): string {
  if (cert.daysLeft !== null && cert.daysLeft <= 0) return 'EXPIRED';
  if (cert.daysLeft !== null && cert.daysLeft <= 30) return 'CRITICAL';
  if (cert.daysLeft !== null && cert.daysLeft <= 90) return 'EXPIRING SOON';
  return 'VALID';
}

function downloadCert(cert: any) {
  alert(`Downloading signed digital certificate for ${cert.name}...`);
}
</script>
