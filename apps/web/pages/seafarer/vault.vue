<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-6 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · STCW CERTIFICATE VAULT</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Certificate Vault</h1>
          <p class="text-xs mt-0.5" style="color:#64748b;">
            All verified STCW, MLC & DG Shipping certificates with cryptographic integrity
          </p>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA"
            class="text-xs font-bold px-4 py-2 rounded-lg transition"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
            🔐 Full Cryptographic Dossier →
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-6 space-y-6">

      <!-- ── COMPLIANCE OVERVIEW ──────────────────────────────────────── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="rounded-xl border p-4 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-2xl font-black" style="color:#22c55e;">{{ validCount }}</div>
          <div class="text-[11px] font-mono mt-1" style="color:#64748b;">VALID CERTS</div>
        </div>
        <div class="rounded-xl border p-4 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-2xl font-black" style="color:#f59e0b;">{{ expiringSoonCount }}</div>
          <div class="text-[11px] font-mono mt-1" style="color:#64748b;">EXPIRING SOON</div>
        </div>
        <div class="rounded-xl border p-4 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-2xl font-black" style="color:#dc2626;">{{ expiredCount }}</div>
          <div class="text-[11px] font-mono mt-1" style="color:#64748b;">EXPIRED</div>
        </div>
        <div class="rounded-xl border p-4 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-2xl font-black" style="color:#00E5FF;">{{ certificates.length }}</div>
          <div class="text-[11px] font-mono mt-1" style="color:#64748b;">TOTAL CERTS</div>
        </div>
      </div>

      <!-- ── CERTIFICATE GRID ──────────────────────────────────────────── -->
      <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
        <div class="p-4 border-b flex items-center justify-between" style="border-color:#0c1a2e;">
          <div class="text-sm font-bold" style="color:#e2e8f0;">STCW Certificate Registry</div>
          <div class="flex gap-2">
            <button v-for="f in ['ALL', 'VALID', 'EXPIRING', 'EXPIRED']" :key="f"
              class="text-xs px-3 py-1.5 rounded transition"
              :style="vaultFilter === f
                ? 'background:#0369A1; color:#fff;'
                : 'background:#070D18; color:#64748b; border:1px solid #1e3a5f;'"
              @click="vaultFilter = f">
              {{ f }}
            </button>
          </div>
        </div>

        <div class="divide-y" style="border-color:#0c1a2e;">
          <div v-for="cert in filteredCerts" :key="cert.id"
            class="p-5 flex items-start gap-4 hover:bg-slate-900/30 transition">
            <!-- Category Icon -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
              style="background:#0369A120; border:1px solid #0369A140;">
              {{ cert.icon }}
            </div>

            <div class="flex-1 min-w-0">
              <!-- Name + badge -->
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="font-bold text-sm" style="color:#e2e8f0;">{{ cert.name }}</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold"
                  :style="certStatusStyle(cert)">
                  {{ certStatusText(cert) }}
                </span>
                <span v-if="cert.ecdsa" class="text-[10px] px-2 py-0.5 rounded-full font-mono"
                  style="background:#00E5FF15; color:#00E5FF; border:1px solid #00E5FF30;">
                  ECDSA ✓
                </span>
              </div>

              <!-- Meta info -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 text-xs mt-2">
                <div>
                  <div class="text-[10px]" style="color:#475569;">REF NO.</div>
                  <div class="font-mono" style="color:#94a3b8;">{{ cert.certNo }}</div>
                </div>
                <div>
                  <div class="text-[10px]" style="color:#475569;">ISSUING INSTITUTE</div>
                  <div style="color:#94a3b8;">{{ cert.institute }}</div>
                </div>
                <div>
                  <div class="text-[10px]" style="color:#475569;">ISSUED ON</div>
                  <div style="color:#94a3b8;">{{ cert.issuedOn }}</div>
                </div>
                <div>
                  <div class="text-[10px]" style="color:#475569;">VALID UNTIL</div>
                  <div :style="cert.daysLeft !== null && cert.daysLeft < 30 ? 'color:#f59e0b; font-weight:bold;' : 'color:#94a3b8;'">
                    {{ cert.validUntil || '—' }}
                  </div>
                </div>
              </div>

              <!-- Expiry progress bar -->
              <div v-if="cert.daysLeft !== null && cert.daysLeft <= 180" class="mt-3">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span style="color:#64748b;">Validity Remaining</span>
                  <span :style="cert.daysLeft <= 30 ? 'color:#dc2626; font-weight:bold;' : 'color:#f59e0b;'">
                    {{ cert.daysLeft > 0 ? cert.daysLeft + ' days left' : 'EXPIRED' }}
                  </span>
                </div>
                <div class="h-1.5 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full"
                    :style="{
                      width: Math.max(0, Math.min(100, (cert.daysLeft / 180) * 100)) + '%',
                      background: cert.daysLeft <= 30 ? '#dc2626' : '#f59e0b'
                    }"></div>
                </div>
              </div>

              <!-- STCW Regulation Reference -->
              <div class="mt-2 text-[11px] font-mono" style="color:#334155;">
                STCW Ref: {{ cert.stcwRef }} · {{ cert.convention }}
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-2 shrink-0">
              <a :href="'/verify/' + cert.certNo"
                class="text-xs px-3 py-1.5 rounded border text-center transition"
                style="border-color:#0369A140; color:#00E5FF;">
                QR Verify
              </a>
              <button class="text-xs px-3 py-1.5 rounded border transition text-center"
                style="border-color:#1e3a5f; color:#64748b;">
                Download
              </button>
              <NuxtLink v-if="cert.daysLeft !== null && cert.daysLeft <= 90"
                to="/courses"
                class="text-xs px-3 py-1.5 rounded text-center font-bold"
                style="background:#f59e0b; color:#070D18;">
                Renew
              </NuxtLink>
            </div>
          </div>

          <div v-if="!filteredCerts.length" class="p-10 text-center">
            <p class="text-sm" style="color:#64748b;">No certificates found for this filter</p>
          </div>
        </div>
      </div>

      <!-- ── STCW COMPLIANCE SUMMARY TABLE ──────────────────────────── -->
      <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
        <div class="p-4 border-b" style="border-color:#0c1a2e;">
          <div class="text-sm font-bold" style="color:#e2e8f0;">STCW Manila Amendment 2010 — Compliance Checklist</div>
          <p class="text-xs mt-0.5" style="color:#64748b;">Required certificates for Class I (Master Mariner) certification</p>
        </div>
        <div class="divide-y" style="border-color:#0c1a2e;">
          <div v-for="req in stcwRequirements" :key="req.code"
            class="flex items-center justify-between px-5 py-3.5">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                :style="req.status === 'HELD' ? 'background:#22c55e20; color:#22c55e;' : req.status === 'EXPIRING' ? 'background:#f59e0b20; color:#f59e0b;' : 'background:#dc262620; color:#f87171;'">
                {{ req.status === 'HELD' ? '✓' : req.status === 'EXPIRING' ? '!' : '✕' }}
              </span>
              <div>
                <div class="text-sm font-medium" style="color:#e2e8f0;">{{ req.name }}</div>
                <div class="text-xs font-mono" style="color:#64748b;">{{ req.code }} · {{ req.convention }}</div>
              </div>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-full font-bold"
              :style="req.status === 'HELD' ? 'background:#22c55e20; color:#22c55e;' : req.status === 'EXPIRING' ? 'background:#f59e0b20; color:#f59e0b;' : 'background:#dc262620; color:#f87171;'">
              {{ req.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Certificate Vault · The Seafu' })
definePageMeta({ middleware: ['auth'] })

const vaultFilter = ref('ALL')

const certificates = ref([
  {
    id: 'cert-001',
    name: 'Advanced Fire Fighting (AFF)',
    icon: '🔥',
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
    icon: '🆘',
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
    icon: '⛑️',
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
    icon: '🏥',
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
    icon: '🧭',
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
    icon: '🔒',
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
    icon: '⭐',
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
])

const stcwRequirements = [
  { code: 'STCW A-VI/1', name: 'Basic Safety Training (BST)', convention: 'SOLAS Reg. VI/1', status: 'EXPIRING' },
  { code: 'STCW A-VI/2-1', name: 'Proficiency in Survival Craft (PSCRB)', convention: 'SOLAS Reg. III/4', status: 'EXPIRING' },
  { code: 'STCW A-VI/3', name: 'Advanced Fire Fighting (AFF)', convention: 'SOLAS Reg. II-2', status: 'HELD' },
  { code: 'STCW A-VI/4-1', name: 'Medical First Aid', convention: 'SOLAS Reg. VI/4', status: 'HELD' },
  { code: 'STCW A-II/1', name: 'Navigation at Operational Level', convention: 'SOLAS Reg. V/19', status: 'HELD' },
  { code: 'STCW A-II/2', name: 'Navigation at Management Level', convention: 'STCW 2010 Manila', status: 'EXPIRED' },
  { code: 'STCW A-VI/5', name: 'Ship Security Officer', convention: 'ISPS Code', status: 'HELD' },
]

const filteredCerts = computed(() => {
  if (vaultFilter.value === 'ALL') return certificates.value
  return certificates.value.filter(c => {
    if (vaultFilter.value === 'VALID') return c.daysLeft === null || c.daysLeft > 90
    if (vaultFilter.value === 'EXPIRING') return c.daysLeft !== null && c.daysLeft > 0 && c.daysLeft <= 90
    if (vaultFilter.value === 'EXPIRED') return c.daysLeft !== null && c.daysLeft <= 0
    return true
  })
})

const validCount = computed(() => certificates.value.filter(c => c.daysLeft === null || c.daysLeft > 90).length)
const expiringSoonCount = computed(() => certificates.value.filter(c => c.daysLeft !== null && c.daysLeft > 0 && c.daysLeft <= 90).length)
const expiredCount = computed(() => certificates.value.filter(c => c.daysLeft !== null && c.daysLeft <= 0).length)

function certStatusStyle(cert: any): string {
  if (cert.daysLeft !== null && cert.daysLeft <= 0) return 'background:#dc262620; color:#f87171; border:1px solid #dc262640;'
  if (cert.daysLeft !== null && cert.daysLeft <= 90) return 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b40;'
  return 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;'
}

function certStatusText(cert: any): string {
  if (cert.daysLeft !== null && cert.daysLeft <= 0) return '● EXPIRED'
  if (cert.daysLeft !== null && cert.daysLeft <= 30) return '⚠ CRITICAL'
  if (cert.daysLeft !== null && cert.daysLeft <= 90) return '⚠ EXPIRING SOON'
  return '● VALID'
}
</script>
