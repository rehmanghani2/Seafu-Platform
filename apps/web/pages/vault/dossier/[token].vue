<template>
  <div class="min-h-screen bg-[#070d18] text-slate-100 font-sans antialiased pb-20">
    <!-- Top Bar -->
    <header class="border-b border-slate-800 bg-[#091122] px-4 sm:px-8 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <span class="text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center">
          <span class="text-base mr-1">?</span> THE SEAFU <span class="text-slate-400 font-normal ml-2 font-mono">| Vault ? SEAFARER COMPANION</span>
        </span>
      </div>

      <div class="flex items-center space-x-4 text-xs font-mono">
        <span class="flex items-center space-x-1.5 text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-full text-[10px]">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>SYNCED</span>
        </span>
        <button class="text-slate-400 hover:text-white">??</button>
        <div class="w-7 h-7 rounded-full bg-cyan-900 border border-cyan-400/40 flex items-center justify-center text-[11px] font-bold text-cyan-200">
          RS
        </div>
      </div>
    </header>

    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <!-- Breadcrumb & Title Bar -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between pb-4 gap-4">
        <div>
          <div class="flex items-center space-x-2 text-[11px] font-mono text-cyan-400">
            <NuxtLink to="/seafarer/dashboard" class="hover:underline">&larr; CERTIFICATE VAULT</NuxtLink>
            <span>/</span>
            <span>STCW INSPECTION NODE</span>
            <span>/</span>
            <span class="text-slate-300">{{ dossier.ledgerMetadata.dossierId }}</span>
          </div>
          <div class="flex items-center space-x-3 mt-1.5">
            <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
              STCW Certificate Dossier & Cryptographic Ledger
            </h1>
            <span class="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700/60 uppercase">
              OFFICIAL DG RECORD
            </span>
          </div>
        </div>

        <!-- Top Actions -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-medium font-mono">
          <button @click="downloadPdf" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 transition flex items-center space-x-1.5">
            <span>??</span>
            <span>Verifiable PDF (Keystore)</span>
          </button>
          <button @click="copyUrl" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 transition flex items-center space-x-1.5">
            <span>??</span>
            <span>Signed Dossier URL</span>
          </button>
          <button @click="exportPscToken" class="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-600/50 hover:bg-cyan-900 text-cyan-300 transition flex items-center space-x-1.5">
            <span>???</span>
            <span>Export PSC Token</span>
          </button>
          <button class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 cursor-not-allowed flex items-center space-x-1.5">
            <span>??</span>
            <span>Physical DG Stamp</span>
          </button>
        </div>
      </div>

      <!-- Cryptographic Ledger Status Strip -->
      <div class="mt-4 p-4 rounded-xl bg-[#0c1628] border border-cyan-900/40 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-mono">
        <div class="col-span-2 sm:col-span-3 lg:col-span-2 flex items-center space-x-2">
          <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
          <div>
            <div class="font-bold text-white leading-tight">DG e-Samudra Verified ? ECDSA secp256k1 Signed</div>
            <div class="text-[10px] text-cyan-400">Non-Repudiation Lock Active ? State Level Verification High</div>
          </div>
        </div>

        <div>
          <div class="text-[10px] text-slate-500 uppercase">BLOCK & MERKLE ID</div>
          <div class="font-bold text-slate-200 text-[11px]">{{ dossier.ledgerMetadata.blockAndMerkleId }}</div>
        </div>

        <div>
          <div class="text-[10px] text-slate-500 uppercase">SHA-256 DIGEST</div>
          <div class="font-bold text-slate-200 text-[11px] font-mono">{{ dossier.ledgerMetadata.sha256Digest }}</div>
        </div>

        <div>
          <div class="text-[10px] text-slate-500 uppercase">LEDGER LATENCY</div>
          <div class="font-bold text-emerald-400 text-[11px]">{{ dossier.ledgerMetadata.ledgerLatency }}</div>
        </div>

        <div>
          <div class="text-[10px] text-slate-500 uppercase">FLAG STATE</div>
          <div class="font-bold text-amber-300 text-[11px]">{{ dossier.ledgerMetadata.flagState }}</div>
        </div>
      </div>

      <!-- Main Dossier Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <!-- LEFT COLUMN: Official DG Certificate Card -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-[#0b1528] rounded-2xl border border-cyan-800/40 p-6 shadow-2xl relative overflow-hidden">
            <!-- DG Shipping Emblem Header -->
            <div class="border-b border-slate-800/80 pb-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="text-2xl text-cyan-400">?</div>
                  <div>
                    <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">GOVERNMENT OF INDIA</div>
                    <div class="text-sm font-bold text-white leading-tight">Directorate General of Shipping</div>
                    <div class="text-[10px] text-cyan-400 font-mono">Maritime Training & STCW Certification Directorate</div>
                  </div>
                </div>
                <div class="text-right font-mono">
                  <div class="text-[10px] text-slate-400">DG MTI: <span class="text-white">{{ dossier.certificate.dgCode }}</span></div>
                  <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950 text-amber-300 border border-amber-700/50">
                    {{ dossier.certificate.cipGrade }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Certificate Title -->
            <div class="py-5 text-center border-b border-slate-800/80">
              <div class="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">CERTIFICATE OF PROFICIENCY IN</div>
              <h2 class="text-xl font-black text-white mt-1 tracking-tight">
                {{ dossier.certificate.title }}
              </h2>
              <div class="text-[10px] text-slate-400 font-mono mt-1">
                {{ dossier.certificate.regulation }}
              </div>
            </div>

            <!-- Candidate Profile Snippet -->
            <div class="py-4 border-b border-slate-800/80 flex items-center space-x-4">
              <div class="w-16 h-16 rounded-xl bg-slate-900 border-2 border-cyan-500/40 flex items-center justify-center text-2xl relative">
                ?????
                <span class="absolute -bottom-1 -right-1 px-1 py-0.2 bg-emerald-500 text-slate-950 text-[8px] font-bold rounded font-mono">
                  BIO-VERIFIED
                </span>
              </div>
              <div class="flex-grow text-xs">
                <div class="flex justify-between items-start">
                  <div>
                    <div class="text-[10px] text-slate-500 font-mono uppercase">FULL NAME OF SEAFARER</div>
                    <div class="text-base font-bold text-white">{{ dossier.certificate.candidate.name }}</div>
                    <div class="text-[11px] text-cyan-400">{{ dossier.certificate.candidate.rank }}</div>
                  </div>
                  <span class="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-800 text-slate-300">NAT: IND</span>
                </div>

                <div class="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 font-mono text-[10px] text-slate-400">
                  <div>INDoS NO: <strong class="text-slate-200">{{ dossier.certificate.candidate.indos }}</strong></div>
                  <div>SEAMAN BOOK / CDC: <strong class="text-slate-200">{{ dossier.certificate.candidate.cdc }}</strong></div>
                  <div>CoC CERTIFICATE: <strong class="text-slate-200">{{ dossier.certificate.candidate.coc }}</strong></div>
                  <div>DATE OF BIRTH: <strong class="text-slate-200">{{ dossier.certificate.candidate.dateOfBirth }}</strong></div>
                </div>
              </div>
            </div>

            <!-- Course Scope Paragraph -->
            <div class="py-4 border-b border-slate-800/80 text-[11px] text-slate-300 leading-relaxed font-sans">
              <div class="text-[10px] font-mono text-slate-500 uppercase mb-1">COURSE SCOPE & PRACTICAL EXECUTION</div>
              This is to certify that the holder has successfully completed a DG Shipping Approved 5-Day advanced curriculum comprising incident command, fixed extinguishing system deployment, high-pressure breathing apparatus operations under zero-visibility labyrinth smoke drills, and boundary cooling simulations in full compliance with IMO Model Course 2.03.
            </div>

            <!-- Validity & Dates -->
            <div class="py-3 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <div>
                <span class="text-[10px] text-slate-500 block">ISSUE DATE</span>
                <span class="font-bold text-slate-200">{{ dossier.certificate.issueDate }}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-500 block">EXPIRY DATE</span>
                <span class="font-bold text-slate-200">{{ dossier.certificate.expiryDate }}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-500 block">STATUS</span>
                <span class="font-bold text-emerald-400 flex items-center space-x-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{{ dossier.ledgerMetadata.status }}</span>
                </span>
              </div>
            </div>

            <!-- QR Code & Signatures -->
            <div class="pt-4 flex items-center justify-between gap-4">
              <!-- QR Code Block -->
              <div class="p-3 rounded-xl bg-white flex flex-col items-center">
                <!-- SVG Stylized QR code -->
                <div class="w-20 h-20 bg-slate-950 p-1.5 rounded flex items-center justify-center">
                  <div class="grid grid-cols-5 gap-1 w-full h-full">
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                    <div class="bg-slate-900 rounded-sm"></div>
                    <div class="bg-cyan-400 rounded-sm"></div>
                  </div>
                </div>
                <span class="text-[8px] font-mono text-slate-800 font-bold mt-1 tracking-tight">SECURE TAMPER-SEAL</span>
              </div>

              <!-- Signatories Details -->
              <div class="flex-grow text-[10px] font-mono text-slate-400 space-y-2">
                <div class="border-b border-slate-800/80 pb-1">
                  <div class="font-bold text-slate-200">Capt. K. R. Chawla</div>
                  <div class="text-[9px] text-slate-500">Course In-Charge (Extra Master)</div>
                </div>
                <div>
                  <div class="font-bold text-slate-200">Capt. A. D'Souza</div>
                  <div class="text-[9px] text-slate-500">Principal & Head of Institute</div>
                </div>
              </div>
            </div>

            <!-- Compliance Footer Tags -->
            <div class="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-[9px] font-mono text-slate-400">
              <span class="px-2 py-0.5 rounded bg-[#070d18] border border-slate-800">STCW White List (IMO)</span>
              <span class="px-2 py-0.5 rounded bg-[#070d18] border border-slate-800">Paris MoU Compliant</span>
              <span class="px-2 py-0.5 rounded bg-[#070d18] border border-slate-800">Tokyo MoU Compliant</span>
              <span class="px-2 py-0.5 rounded bg-[#070d18] border border-slate-800">USCG Reciprocal</span>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Ledger Handshake, Biometrics, Dual Invoicing & PSC History -->
        <div class="lg:col-span-7 space-y-6">
          <!-- 1. Cryptographic Handshake & Asymmetric Architecture -->
          <div class="p-5 rounded-2xl bg-[#0b1528] border border-slate-800">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400 text-sm">??</span>
                <h3 class="font-bold text-white text-sm">Cryptographic Handshake & Asymmetric Architecture</h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                {{ dossier.cryptographicHandshake.fipsCompliance }}
              </span>
            </div>

            <div class="mt-3 space-y-2 font-mono text-[11px]">
              <div>
                <span class="text-slate-500 block text-[10px]">SIGNER PUBLIC KEY (ECDSA SECP256K1)</span>
                <span class="text-cyan-300 break-all">{{ dossier.cryptographicHandshake.signerPublicKey }}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span class="text-slate-500 block text-[10px]">AUTHORITY ROOT HSM NODE</span>
                  <span class="text-slate-200 text-[10px]">{{ dossier.cryptographicHandshake.authorityRootHsmNode }}</span>
                </div>
                <div>
                  <span class="text-slate-500 block text-[10px]">INSTITUTE ISSUING NODE</span>
                  <span class="text-slate-200 text-[10px]">{{ dossier.cryptographicHandshake.instituteIssuingNode }}</span>
                </div>
              </div>
              <div class="pt-1">
                <span class="text-slate-500 block text-[10px]">STRATUM-1 ATOMIC TIMESTAMP</span>
                <span class="text-amber-300 text-[10px]">{{ dossier.cryptographicHandshake.atomicTimestamp }}</span>
              </div>
              <div class="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
                <span>MERKLE AUDIT TREE PROOF</span>
                <span class="text-emerald-400 font-bold">Tree Depth: 12 ? Leaf Index: #4820 ? Root Verified</span>
              </div>
            </div>
          </div>

          <!-- 2. Biometric Attendance & Practical Drill Log -->
          <div class="p-5 rounded-2xl bg-[#0b1528] border border-slate-800">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400 text-sm">??</span>
                <h3 class="font-bold text-white text-sm">Biometric Attendance & Practical Drill Log</h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                {{ dossier.biometricAttendanceLog.mandate }}
              </span>
            </div>

            <!-- Daily Check-in Grid -->
            <div class="grid grid-cols-5 gap-2 mt-4 text-center font-mono">
              <div
                v-for="d in dossier.biometricAttendanceLog.days"
                :key="d.day"
                class="p-2.5 rounded-lg bg-[#070d18] border border-slate-800"
              >
                <div class="text-[9px] text-slate-400">{{ d.day }}</div>
                <div class="text-emerald-400 text-sm my-0.5">?</div>
                <div class="text-[10px] text-slate-300 font-bold">{{ d.checkIn }} / {{ d.checkOut }}</div>
              </div>
            </div>

            <!-- Scores Breakdown -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-800 font-mono text-xs">
              <div class="p-3 rounded-lg bg-[#070d18] border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase">C.A.B.A. ENDURANCE</div>
                <div class="font-bold text-cyan-400 text-sm mt-0.5">98 / 100</div>
                <div class="text-[9px] text-slate-400 mt-1">Zero-visibility labyrinth drill in 11m 40s</div>
              </div>
              <div class="p-3 rounded-lg bg-[#070d18] border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase">PRACTICAL ASSESSMENT</div>
                <div class="font-bold text-emerald-400 text-sm mt-0.5">COMPETENT Grade O</div>
                <div class="text-[9px] text-slate-400 mt-1">Assessed by MOT 1st Class Surveyor</div>
              </div>
              <div class="p-3 rounded-lg bg-[#070d18] border border-slate-800">
                <div class="text-[10px] text-slate-500 uppercase">MEDICAL PREREQUISITE</div>
                <div class="font-bold text-white text-sm mt-0.5">FORM 1 FIT</div>
                <div class="text-[9px] text-slate-400 mt-1">DG Approved Doctor #DOC-401</div>
              </div>
            </div>
          </div>

          <!-- 3. Dual-Invoicing & Platform Escrow Clearance -->
          <div class="p-4 rounded-xl bg-[#0b1528] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div class="flex items-center space-x-3">
              <span class="text-xl">??</span>
              <div>
                <div class="font-bold text-white">Dual-Invoicing & Platform Escrow Clearance</div>
                <div class="text-[10px] text-slate-400">Razorpay Route Escrow Settlement UTR: <strong class="text-cyan-300">{{ dossier.dualInvoicingEscrow.settlementUtr }}</strong></div>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-[10px] font-bold">
              {{ dossier.dualInvoicingEscrow.status }}
            </span>
          </div>

          <!-- 4. External Inspections & Verification History -->
          <div class="p-5 rounded-2xl bg-[#0b1528] border border-slate-800">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400 text-sm">??</span>
                <h3 class="font-bold text-white text-sm">External Inspections & Verification History</h3>
              </div>
              <span class="text-[10px] font-mono text-slate-400">3 Cryptographic Inquiries</span>
            </div>

            <div class="mt-3 space-y-3 font-mono text-xs">
              <div
                v-for="(insp, idx) in dossier.externalInspectionsHistory"
                :key="idx"
                class="p-3 rounded-lg bg-[#070d18] border border-slate-800/80 flex items-start justify-between gap-3"
              >
                <div>
                  <div class="font-bold text-slate-200 text-xs flex items-center space-x-1.5">
                    <span>?</span>
                    <span>{{ insp.authority }}</span>
                  </div>
                  <div class="text-[10px] text-slate-400 mt-0.5">{{ insp.inspector }}</div>
                  <div class="text-[10px] text-emerald-400 font-bold mt-1">{{ insp.status }}</div>
                </div>
                <span class="text-[10px] text-slate-500 whitespace-nowrap">{{ insp.date }}</span>
              </div>
            </div>
          </div>

          <!-- 5. Port State Control & Inspector Actions -->
          <div class="p-5 rounded-2xl bg-[#081224] border border-cyan-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-sm">???</span>
                <h4 class="font-bold text-white text-sm">Port State Control & Inspector Actions</h4>
                <span class="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-700/40">
                  STCW-95 Section A-I/4
                </span>
              </div>
              <p class="text-[11px] text-slate-400 mt-1">
                Authorized maritime administrations may record immediate verification stamps or file compliance notices directly to the Government of India DG Shipping electronic gateway.
              </p>
            </div>

            <div class="flex items-center space-x-2 shrink-0">
              <button class="px-3 py-2 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-800/40 text-[11px] font-mono font-medium transition">
                Flag Inconsistency
              </button>
              <button class="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-mono font-medium transition">
                Audit Bundle (.JSON-LD)
              </button>
              <button class="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-mono font-bold transition shadow-lg shadow-cyan-500/20">
                Issue PSC Digital Endorsement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const token = (route.params.token as string) || 'IND-AFF-7714-ECDSA';

function downloadPdf() {
  alert('Cryptographically signed STCW Certificate PDF downloaded with embedded X.509 certificate.');
}

function copyUrl() {
  if (process.client) {
    navigator.clipboard.writeText(window.location.href);
    alert('Signed Dossier URL copied to clipboard.');
  }
}

function exportPscToken() {
  alert('PSC Inspection Token exported to mesh keychain.');
}

const dossier = ref({
  ledgerMetadata: {
    dossierId: 'IND-STCW-AFF-2022-7714',
    status: 'VALID (2y 10m)',
    blockAndMerkleId: '#DG-IND-8849201',
    sha256Digest: '7e89...01c3',
    ledgerLatency: '18ms (Atomic)',
    flagState: 'INDIA (INDoS)',
  },
  certificate: {
    title: 'ADVANCED FIRE FIGHTING (AFF)',
    regulation: 'STCW Convention 1978 as Amended ? Regulation VI/3, Table A-VI/3',
    dgCode: 'IND-MTI-008',
    cipGrade: 'CIP Grade A1 Outstanding',
    candidate: {
      name: 'CAPT. RAJESH SHARMA',
      rank: 'Chief Officer / Master FG Candidate',
      indos: '08ZL9431',
      cdc: 'MUM-149028',
      coc: 'IND-95-2018-00431',
      dateOfBirth: '18 JUL 1986',
    },
    issueDate: '15 OCT 2022',
    expiryDate: '14 OCT 2027',
  },
  cryptographicHandshake: {
    fipsCompliance: 'FIPS 140-2 Level 3',
    signerPublicKey: '04:3a:8f:99:c2:4e:11:08:bb:e7:d2:90:3c:91:ff:82:aa:19:44:de:56:01:4b:08:ec:09:aa:12:ef',
    authorityRootHsmNode: 'DG MMD-HSM-IN-04 (Mumbai) [ONLINE]',
    instituteIssuingNode: 'AEMA-SIGN-NODE-02 (Karjat Campus [MTI-008]) [SECURE]',
    atomicTimestamp: '14 OCT 2022 ? 16:42:19.041 IST',
  },
  biometricAttendanceLog: {
    mandate: 'DG CIP Mandatory',
    days: [
      { day: 'DAY 1 (THEORY)', checkIn: '08:58', checkOut: '17:02' },
      { day: 'DAY 2 (APPARATUS)', checkIn: '08:54', checkOut: '17:15' },
      { day: 'DAY 3 (SMOKE LAB)', checkIn: '08:49', checkOut: '17:30' },
      { day: 'DAY 4 (LIVE FIRE)', checkIn: '08:51', checkOut: '18:05' },
      { day: 'DAY 5 (EXAM/DRILL)', checkIn: '08:45', checkOut: '16:40' },
    ],
  },
  dualInvoicingEscrow: {
    status: '100% Tax Compliant',
    settlementUtr: 'HDFC222870192837',
  },
  externalInspectionsHistory: [
    {
      authority: 'Port of Rotterdam (NLD) ? Paris MoU',
      inspector: 'Capt. J. Van Dijk (ID: NLD-PSC-409)',
      date: '14 Days Ago',
      status: 'Code 00 Deficiencies ? SIG VALID via Offline Bluetooth Mesh Terminal',
    },
    {
      authority: 'Singapore MPA Digital Portal',
      inspector: 'Pre-boarding verification for vessel MV Atlantic Spirit (IMO 9401829)',
      date: '02 JAN 2023',
      status: 'Sign-On Cleared ? SYSTEM PASS',
    },
    {
      authority: 'Maersk Fleet Management Manning Vetting',
      inspector: 'Officer promotional matrix validation: Passed Chief Mate / Master requirements',
      date: '10 AUG 2023',
      status: 'Vetting Approved ? VERIFIED',
    },
  ],
});
</script>