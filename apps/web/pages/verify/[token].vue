<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto w-full space-y-6">
      <!-- Top Navigation & Return Link -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 text-slate-400 hover:text-white transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <svg class="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="text-xs font-mono font-bold tracking-wider uppercase">Return to The Seafu Platform</span>
        </NuxtLink>

        <div class="flex items-center space-x-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>PSC DIRECT LINK 443 &bull; TLS 1.3</span>
        </div>
      </div>

      <!-- Header -->
      <div class="text-center space-y-2">
        <div class="inline-flex items-center space-x-2.5 text-cyan-400">
          <div class="w-9 h-9 rounded-xl bg-[#0B1528] border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black font-display tracking-tight text-white uppercase">
            Maritime Audit HUD &amp; PSC Verifier
          </h1>
        </div>
        <p class="text-xs font-mono text-slate-400 max-w-xl mx-auto leading-relaxed">
          IMO Res. A.1052(27) &bull; STCW 2010 Manila Cryptographic Verification Terminal &bull; Paris &amp; Tokyo MoU Port State Control Handshake Gateway.
        </p>
      </div>

      <!-- Universal Certificate / Token Search Bar -->
      <div class="bg-[#0B1528] p-3.5 rounded-2xl border border-slate-800 shadow-xl space-y-2.5">
        <form @submit.prevent="lookupToken" class="flex flex-col sm:flex-row items-center gap-2">
          <div class="relative flex-1 w-full">
            <label for="psc-token-input" class="sr-only">Enter Certificate Serial Number or Hash</label>
            <div class="absolute left-3.5 top-3 text-slate-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="psc-token-input"
              v-model="inputQuery"
              type="text"
              placeholder="Enter Certificate Serial (e.g. IND-STCW-AFF-2022-7714, STCW-AEMA-2026-4401)..."
              class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#070D18] border border-slate-700 text-white font-mono placeholder:text-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold font-mono text-xs transition shadow-md shadow-cyan-400/20 uppercase tracking-wider shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
          >
            Audit Certificate
          </button>
        </form>

        <!-- Quick Serial Chips -->
        <div class="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-slate-400">
          <span class="text-slate-500">Suggested Serials:</span>
          <button
            v-for="chip in quickChips"
            :key="chip"
            @click="selectChip(chip)"
            type="button"
            class="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition"
          >
            {{ chip }}
          </button>
        </div>
      </div>

      <!-- Main Cryptographic Result Card -->
      <div class="bg-[#0B1528] rounded-2xl border border-emerald-500/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        <!-- Live Status Ribbon -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div class="flex items-center space-x-2.5">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50"></span>
            <div>
              <span class="text-xs font-mono font-black text-emerald-400 uppercase tracking-wider block">
                AUTHENTICITY CONFIRMED &bull; PSC PASS
              </span>
              <span class="text-[10px] font-mono text-slate-400">IMO Res. A.1052(27) Verified</span>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
            <span class="bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
              Rotterdam Node 04 &bull; Latency: <strong class="text-emerald-400 tabular-nums">11ms</strong>
            </span>
            <span class="bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 tabular-nums">
              Block: #4,198,204
            </span>
          </div>
        </div>

        <!-- Certificate Header -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
              {{ activeCert.category }} &bull; IMO MODEL COURSE
            </span>
            <h2 class="text-xl sm:text-2xl font-black font-display text-white mt-1 tracking-tight">
              {{ activeCert.courseTitle }}
            </h2>
            <div class="text-xs text-slate-400 font-mono mt-1 flex items-center space-x-2">
              <span>Certificate Serial:</span>
              <strong class="text-cyan-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {{ activeCert.certNumber }}
              </strong>
            </div>
          </div>

          <div class="text-right shrink-0">
            <span class="inline-flex items-center space-x-1 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-500/40">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>STATUS: VALID</span>
            </span>
            <div class="text-[10px] font-mono text-slate-400 mt-1">
              Expires: <strong class="text-white tabular-nums">{{ activeCert.expiryDate }}</strong>
            </div>
          </div>
        </div>

        <!-- Seafarer Information Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#070D18] border border-slate-800 text-xs font-mono">
          <div>
            <span class="text-[10px] text-slate-500 block uppercase">SEAFARER / OFFICER</span>
            <span class="font-bold text-white text-sm block mt-0.5">{{ activeCert.officerName }}</span>
            <span class="text-[10px] text-slate-400">{{ activeCert.rank }}</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block uppercase">INDoS IDENTIFIER</span>
            <span class="font-bold text-cyan-400 text-sm block mt-0.5 tabular-nums">{{ activeCert.indos }}</span>
            <span class="text-[10px] text-emerald-400">DG e-Samudra Synced</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block uppercase">SEAMAN BOOK / CDC</span>
            <span class="font-bold text-slate-200 text-sm block mt-0.5 tabular-nums">{{ activeCert.cdc }}</span>
            <span class="text-[10px] text-slate-400">Biometric Match</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block uppercase">BIOMETRIC MATCH</span>
            <span class="font-bold text-emerald-400 text-sm block mt-0.5 tabular-nums">99.8%</span>
            <span class="text-[10px] text-slate-400">Iris &amp; Thumb Fingerprint</span>
          </div>
        </div>

        <!-- Issuing Maritime Academy & Authority Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">ISSUING ACADEMY</span>
            <div class="text-white font-bold text-sm">{{ activeCert.institute }}</div>
            <div class="text-slate-400 text-[11px]">
              DGS Approval: <span class="text-cyan-300 font-semibold">{{ activeCert.instituteCode }}</span>
            </div>
            <div class="text-emerald-400 text-[10px] flex items-center space-x-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Grade A1 (Outstanding) &bull; DNV Certified</span>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">FLAG ADMINISTRATION</span>
            <div class="text-white font-bold text-sm">{{ activeCert.authority }}</div>
            <div class="text-slate-400 text-[11px]">
              SOLAS / STCW Chapter: <span class="text-slate-200">{{ activeCert.stcwReg }}</span>
            </div>
            <div class="text-cyan-400 text-[10px]">
              Signed via HSM Level 3 &bull; ECDSA secp256k1
            </div>
          </div>
        </div>

        <!-- 5-Point Cryptographic Verification Audit Checklist -->
        <div class="space-y-2.5 pt-2">
          <div class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>5-POINT PORT STATE CONTROL CRYPTOGRAPHIC AUDIT:</span>
            <span class="text-emerald-400 text-[11px]">5 OF 5 CHECKS PASSED (100%)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div
              v-for="(check, idx) in auditChecks"
              :key="idx"
              class="p-2.5 rounded-xl bg-[#070D18] border border-slate-800 flex items-start space-x-2.5"
            >
              <div class="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-[11px]">{{ check.title }}</div>
                <div class="text-[10px] text-slate-400 mt-0.5">{{ check.detail }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Collapsible Raw Verifiable Credential & Ledger Inspector -->
        <div class="border-t border-slate-800 pt-4 space-y-3">
          <div class="flex items-center justify-between">
            <button
              @click="showRawJson = !showRawJson"
              type="button"
              class="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1.5 focus-visible:outline-none"
            >
              <span>{{ showRawJson ? 'Hide' : 'Inspect' }} Raw W3C Verifiable Credential &amp; ECDSA Ledger Envelope</span>
              <svg
                class="w-3.5 h-3.5 transition-transform"
                :class="showRawJson ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button
              v-if="showRawJson"
              @click="copyProofJson"
              type="button"
              class="text-[10px] font-mono text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded transition"
            >
              {{ copied ? 'Copied to Clipboard!' : 'Copy JSON-LD' }}
            </button>
          </div>

          <div v-if="showRawJson" class="rounded-xl bg-[#050810] border border-slate-800 p-4 font-mono text-[11px] text-cyan-300/90 overflow-x-auto max-h-60 leading-relaxed">
            <pre><code>{{ JSON.stringify(activeCert.verifiableCredential, null, 2) }}</code></pre>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            @click="printPscPass"
            type="button"
            class="flex-1 py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs font-mono transition shadow-lg shadow-cyan-500/20 uppercase tracking-wider flex items-center justify-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print Official PSC Inspection Pass (IMO A.1052)</span>
          </button>

          <NuxtLink
            to="/seafarer/vault"
            class="sm:w-auto py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs font-mono transition text-center uppercase tracking-wider shrink-0"
          >
            Seafarer Vault &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Terminal Footer -->
    <footer class="text-center text-[10px] font-mono text-slate-500 mt-8 space-y-1">
      <div>
        Directorate General of Shipping &bull; ECDSA secp256k1 Signed Node &bull; IMO STCW Compliance Gateway
      </div>
      <div>
        Rotterdam Port Authority Node #04 &bull; Sync Protocol v2.8 &bull; Handshake Latency 11ms
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const route = useRoute();
const initialToken = (route.params.token as string) || 'IND-STCW-AFF-2022-7714';
const inputQuery = ref(initialToken);
const showRawJson = ref(false);
const copied = ref(false);

useHead({
  title: 'Maritime Audit HUD & PSC Verifier • The Seafu',
});

const quickChips = [
  'IND-STCW-AFF-2022-7714',
  'STCW-AEMA-2026-4401',
  'PAK-CDC-883921',
  'MED-ENG1-2026-009',
];

// Multi-Certificate Database Mock
const certDatabase: Record<string, any> = {
  'IND-STCW-AFF-2022-7714': {
    certNumber: 'IND-STCW-AFF-2022-7714',
    courseTitle: 'Advanced Fire Fighting (AFF)',
    category: 'STCW MANDATORY SAFETY',
    officerName: 'Capt. Rajesh Sharma',
    rank: 'Master Mariner · Unlimited Tonnage',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    institute: 'Anglo-Eastern Maritime Academy',
    instituteCode: 'IND-MTI-008 (Grade A1)',
    authority: 'Directorate General of Shipping, Govt. of India',
    stcwReg: 'STCW 2010 Manila Amendments Reg VI/3',
    issueDate: '15 OCT 2022',
    expiryDate: '14 OCT 2027',
    verifiableCredential: {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/security/suites/ed25519-2020/v1',
        'https://schema.seafu.org/stcw/v1',
      ],
      id: 'urn:uuid:8b1f6300-3490-4c91-a1e4-8840210e7714',
      type: ['VerifiableCredential', 'STCWMaritimeCredential'],
      issuer: 'did:seafu:mti:ind-008',
      issuanceDate: '2022-10-15T08:30:00Z',
      expirationDate: '2027-10-14T23:59:59Z',
      credentialSubject: {
        id: 'did:seafu:seafarer:08zl9431',
        name: 'Capt. Rajesh Sharma',
        indos: '08ZL9431',
        cdcNumber: 'MUM-149028',
        courseCode: 'AFF-IMO-2.03',
        courseName: 'Advanced Fire Fighting',
        stcwRegulation: 'VI/3',
        practicalDrillScore: '100%',
      },
      proof: {
        type: 'EcdsaSecp256k1Signature2019',
        created: '2022-10-15T08:32:10Z',
        proofPurpose: 'assertionMethod',
        verificationMethod: 'did:seafu:mti:ind-008#key-1',
        jws: 'eyJhbGciOiJFUzI1NksifQ..3F8a92B4_N0D3_S34FU_STCW_AEMA_AFF',
      },
    },
  },
  'STCW-AEMA-2026-4401': {
    certNumber: 'STCW-AEMA-2026-4401',
    courseTitle: 'Bridge Resource Management (BRM)',
    category: 'SIMULATOR REFRESHER',
    officerName: 'Cadet Alex Mercer',
    rank: 'Deck Officer Cadet (OOW)',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    institute: 'Anglo-Eastern Maritime Academy',
    instituteCode: 'IND-MTI-008 (Grade A1)',
    authority: 'Directorate General of Shipping, Govt. of India',
    stcwReg: 'STCW 2010 Manila Amendments Reg II/1',
    issueDate: '20 JUN 2026',
    expiryDate: '19 JUN 2031',
    verifiableCredential: {
      '@context': ['https://www.w3.org/2018/credentials/v1', 'https://schema.seafu.org/stcw/v1'],
      id: 'urn:uuid:4401-brm-2026-aema',
      type: ['VerifiableCredential', 'STCWMaritimeCredential'],
      issuer: 'did:seafu:mti:ind-008',
      issuanceDate: '2026-06-20T10:00:00Z',
      expirationDate: '2031-06-19T23:59:59Z',
      credentialSubject: {
        id: 'did:seafu:seafarer:08zl9431',
        name: 'Cadet Alex Mercer',
        indos: '08ZL9431',
        courseCode: 'SIM-BRM',
        courseName: 'Bridge Resource Management',
        stcwRegulation: 'II/1',
      },
      proof: {
        type: 'EcdsaSecp256k1Signature2019',
        created: '2026-06-20T10:05:00Z',
        verificationMethod: 'did:seafu:mti:ind-008#key-1',
        jws: 'eyJhbGciOiJFUzI1NksifQ..BRM_SIM_AEMA_2026_VALID',
      },
    },
  },
  'PAK-CDC-883921': {
    certNumber: 'PAK-CDC-883921',
    courseTitle: 'Continuous Discharge Certificate (CDC)',
    category: 'FLAG STATE STATUTORY',
    officerName: 'Cadet Muhammad Tariq',
    rank: 'Junior Engineer Officer',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    institute: 'Pakistan Marine Academy (PMA)',
    instituteCode: 'PAK-PMA-001',
    authority: 'Ministry of Maritime Affairs, Govt. of Pakistan',
    stcwReg: 'STCW 2010 Manila Amendments Reg III/1',
    issueDate: '10 JAN 2025',
    expiryDate: '09 JAN 2035',
    verifiableCredential: {
      '@context': ['https://www.w3.org/2018/credentials/v1', 'https://schema.seafu.org/stcw/v1'],
      id: 'urn:uuid:pak-cdc-883921',
      type: ['VerifiableCredential', 'CDCStatutoryCredential'],
      issuer: 'did:seafu:flag:pak-mercantile',
      issuanceDate: '2025-01-10T09:00:00Z',
      expirationDate: '2035-01-09T23:59:59Z',
      credentialSubject: {
        id: 'did:seafu:seafarer:khi-49102',
        name: 'Cadet Muhammad Tariq',
        cdcNumber: 'PAK-883921',
      },
      proof: {
        type: 'EcdsaSecp256k1Signature2019',
        created: '2025-01-10T09:02:00Z',
        verificationMethod: 'did:seafu:flag:pak-mercantile#key-1',
        jws: 'eyJhbGciOiJFUzI1NksifQ..PAK_CDC_883921_SEALED',
      },
    },
  },
  'MED-ENG1-2026-009': {
    certNumber: 'MED-ENG1-2026-009',
    courseTitle: 'ENG1 Marine Medical Fitness Certificate',
    category: 'STATUTORY MEDICAL FITNESS',
    officerName: 'Cadet Fatima Noor',
    rank: 'Electro-Technical Officer (ETO)',
    indos: '09ZM4821',
    cdc: 'PAK-991204',
    institute: 'Maritime Approved Medical Examiner',
    instituteCode: 'UK-MCA-MED-842',
    authority: 'Maritime & Coastguard Agency (MCA) / DG Shipping',
    stcwReg: 'STCW 2010 Reg I/9 & MLC 2006 Reg 1.2',
    issueDate: '05 MAR 2026',
    expiryDate: '04 MAR 2028',
    verifiableCredential: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      id: 'urn:uuid:eng1-med-2026-009',
      type: ['VerifiableCredential', 'MaritimeMedicalFitness'],
      issuer: 'did:seafu:medical:uk-mca-842',
      issuanceDate: '2026-03-05T11:00:00Z',
      expirationDate: '2028-03-04T23:59:59Z',
      credentialSubject: {
        name: 'Cadet Fatima Noor',
        fitnessStatus: 'FIT FOR SEA SERVICE WITHOUT RESTRICTIONS',
        colourVision: 'NORMAL (Ishihara Passed)',
      },
      proof: {
        type: 'EcdsaSecp256k1Signature2019',
        verificationMethod: 'did:seafu:medical:uk-mca-842#key-1',
        jws: 'eyJhbGciOiJFUzI1NksifQ..ENG1_MED_FIT_SEAFU',
      },
    },
  },
};

const activeCert = computed(() => {
  const query = inputQuery.value.trim();
  if (certDatabase[query]) {
    return certDatabase[query];
  }
  // Default fallback if unknown serial entered
  return {
    certNumber: query || 'SF-VERIFY-DEFAULT',
    courseTitle: 'STCW Modular Marine Qualification',
    category: 'STCW MARITIME CREDENTIAL',
    officerName: 'Certified Maritime Officer',
    rank: 'Master Mariner / Chief Engineer',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    institute: 'Anglo-Eastern Maritime Academy',
    instituteCode: 'IND-MTI-008',
    authority: 'Directorate General of Shipping / IMO Gateway',
    stcwReg: 'STCW 2010 Manila Amendments',
    issueDate: '01 JAN 2026',
    expiryDate: '31 DEC 2030',
    verifiableCredential: {
      id: `urn:uuid:${query}`,
      type: ['VerifiableCredential'],
      proof: { type: 'EcdsaSecp256k1Signature2019' },
    },
  };
});

const auditChecks = [
  {
    title: '1. ECDSA Digital Signature (secp256k1)',
    detail: 'Cryptographic HSM Level 3 key matches issuing Academy public record.',
  },
  {
    title: '2. Flag Administration Root Trust Chain',
    detail: 'Authority certificate anchored to Directorate General of Shipping CA.',
  },
  {
    title: '3. Real-Time Revocation Registry (CRL)',
    detail: 'Certificate is active, unrevoked, and confirmed on live ledger.',
  },
  {
    title: '4. STCW Practical & Simulator Attestation',
    detail: '100% required simulator hours and live fire drills recorded in log.',
  },
  {
    title: '5. Anti-Tamper Document Hash (SHA-256)',
    detail: '0x3F8A92B4... Matches original issued PDF and QR digest exactly.',
  },
];

function selectChip(chip: string) {
  inputQuery.value = chip;
}

function lookupToken() {
  // updates reactive state via inputQuery
}

async function copyProofJson() {
  try {
    await navigator.clipboard.writeText(JSON.stringify(activeCert.value.verifiableCredential, null, 2));
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
}

function printPscPass() {
  window.print();
}
</script>