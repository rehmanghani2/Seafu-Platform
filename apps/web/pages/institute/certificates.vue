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
          <span class="hidden sm:inline-block text-xs font-semibold text-slate-600">Certificate Issuance &amp; QR</span>
        </div>

        <button
          @click="openNewCertModal"
          class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Issue New Certificate</span>
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
              Cryptographic Certificate Issuance &amp; Public QR Ledger
            </h1>
            <p class="text-xs text-slate-500 mt-1">
              ECDSA SHA-256 digital stamp &bull; Instant Port State Control scanner verification &bull; Direct sync with Seafarer Vault.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
            <span>ECDSA SHA-256 SEALED</span>
          </div>
        </div>

        <!-- 4 Certificate KPIs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">TOTAL ISSUED</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">1,420</div>
            <div class="text-[11px] text-emerald-700 font-semibold">100% Cryptographic Match</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">PENDING ASSESSMENTS</div>
            <div class="text-2xl font-bold text-amber-700 font-mono">12</div>
            <div class="text-[11px] text-slate-500 font-medium">Practical Fire &bull; Bridge Drill</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">READY FOR SIGNING</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">18</div>
            <div class="text-[11px] text-blue-700 font-semibold">Drills Complete</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">PSC VERIFICATIONS</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">99.8%</div>
            <div class="text-[11px] text-emerald-700 font-semibold">Zero Fraud Incidents</div>
          </div>
        </div>

        <!-- Candidate Certificates Table -->
        <div class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Enrolled Candidates &amp; Certification Ledger
            </div>
            <div class="text-xs text-slate-500 font-mono">
              Auto-syncs with Candidate Seafarer Vault
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">CANDIDATE</th>
                  <th class="px-5 py-3.5">INDoS &bull; CDC</th>
                  <th class="px-5 py-3.5">PROGRAM &bull; BATCH</th>
                  <th class="px-5 py-3.5">ATTENDANCE &amp; SCORE</th>
                  <th class="px-5 py-3.5">CERTIFICATE #</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="cand in candidateCertificates" :key="cand.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ cand.name }}</div>
                    <div class="text-[11px] text-slate-500">{{ cand.email }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono">
                    <div class="font-bold text-blue-700">{{ cand.indos }}</div>
                    <div class="text-[10px] text-slate-400">CDC: {{ cand.cdc }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-semibold text-slate-900">{{ cand.course }}</div>
                    <div class="text-[10px] text-slate-500 font-mono">Batch: {{ cand.batchCode }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="font-bold text-emerald-700">{{ cand.attendance }}</span>
                    <div class="text-[10px] text-slate-400">Exam: {{ cand.examScore }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono text-[11px]">
                    <span v-if="cand.certNumber" class="text-slate-900 font-bold">{{ cand.certNumber }}</span>
                    <span v-else class="text-slate-400 italic">Not Generated</span>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :class="cand.status === 'ISSUED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
                    >
                      {{ cand.status === 'ISSUED' ? 'Issued' : 'Pending' }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      v-if="cand.status !== 'ISSUED'"
                      @click="issueCert(cand)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-2xs"
                    >
                      Sign &amp; Issue QR
                    </button>
                    <NuxtLink
                      v-else
                      :to="`/verify/${cand.certNumber}`"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition inline-flex items-center space-x-1"
                    >
                      <span>View Live QR</span>
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal: Cryptographic Certificate Issuance -->
    <div
      v-if="showCertModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Cryptographic Certificate Issuance</h3>
            <p class="text-xs text-slate-500">Sign with ECDSA SHA-256 and generate public QR code.</p>
          </div>
          <button @click="showCertModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-sm">✕</button>
        </div>

        <form @submit.prevent="confirmIssue" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Candidate Name</label>
            <input
              v-model="modalData.name"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">INDoS ID</label>
              <input
                v-model="modalData.indos"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">CDC Seaman Book #</label>
              <input
                v-model="modalData.cdc"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Course &bull; Batch</label>
            <input
              v-model="modalData.course"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Attach Signed Scanned Certificate</label>
            <div class="p-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center text-xs text-slate-500 hover:border-blue-400 transition cursor-pointer">
              <svg class="w-6 h-6 mx-auto text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Click or drag signed official certificate (PDF / Image)</span>
            </div>
          </div>

          <div class="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-800 space-y-1">
            <div class="font-bold flex items-center space-x-1">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Cryptographic Seal</span>
            </div>
            <p class="text-[11px] leading-relaxed">
              Upon issuance, this certificate is stamped with MTI's cryptographic signature and published to the public verifier for instant PSC validation.
            </p>
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showCertModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
            >
              Sign &amp; Issue Certificate
            </button>
          </div>
        </form>
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
  title: 'Certificate Issuance & QR &bull; Academy Console',
});

const showCertModal = ref(false);
const modalData = ref({
  name: '',
  indos: '',
  cdc: '',
  course: '',
});

const candidateCertificates = ref([
  {
    id: 'cand1',
    name: 'Cadet Alex Mercer',
    email: 'alex.mercer@seafu.org',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Bridge Resource Management (BRM)',
    batchCode: 'SIM-BRM-04',
    attendance: '100% (40 hrs)',
    examScore: '94% Pass',
    certNumber: 'IND-STCW-BRM-2026-9431',
    status: 'ISSUED',
  },
  {
    id: 'cand2',
    name: 'Cadet Muhammad Tariq',
    email: 'cadet.tariq@gmail.com',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
    batchCode: 'GP3-2026-003',
    attendance: '98% (180 days)',
    examScore: '89% Pass',
    certNumber: '',
    status: 'PENDING_ASSESSMENT',
  },
  {
    id: 'cand3',
    name: 'Officer Rajesh Sharma',
    email: 'r.sharma@merchantnavy.in',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Advanced Fire Fighting (AFF)',
    batchCode: 'STCW-AFF-02',
    attendance: '100% (40 hrs)',
    examScore: '98% Pass',
    certNumber: 'IND-AFF-7714-ECDSA',
    status: 'ISSUED',
  },
  {
    id: 'cand4',
    name: 'Cadet Fatima Noor',
    email: 'fatima.noor@mti.edu.pk',
    indos: '09ZM4821',
    cdc: 'PAK-991204',
    course: 'ECDIS Type-Specific (IMO 1.27)',
    batchCode: 'SIM-ECDIS-01',
    attendance: '100% (24 hrs)',
    examScore: '92% Pass',
    certNumber: '',
    status: 'READY_FOR_ISSUE',
  },
]);

function openNewCertModal() {
  modalData.value = {
    name: 'Cadet Muhammad Tariq',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
  };
  showCertModal.value = true;
}

function issueCert(cand: any) {
  modalData.value = {
    name: cand.name,
    indos: cand.indos,
    cdc: cand.cdc,
    course: cand.course,
  };
  showCertModal.value = true;
}

function confirmIssue() {
  const target = candidateCertificates.value.find((c) => c.indos === modalData.value.indos);
  if (target) {
    target.status = 'ISSUED';
    target.certNumber = `MTI-DG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  showCertModal.value = false;
}
</script>
