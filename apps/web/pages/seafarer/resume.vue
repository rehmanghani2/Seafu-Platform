<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-6 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · DIGITAL MARITIME RESUME</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Auto-Updating Digital Maritime Profile</h1>
          <p class="text-xs mt-0.5" style="color:#64748b;">
            Auto-generates from your verified certificates, sea service records, and job history
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button class="text-xs font-bold px-4 py-2 rounded-lg border transition"
            style="border-color:#1e3a5f; color:#64748b;">
            ⬇ Export PDF
          </button>
          <button class="text-xs font-bold px-4 py-2 rounded-lg transition"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
            🔗 Share Public Profile
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- ══════════════════════════════════════════════════════════════ -->
      <!-- LEFT SIDEBAR                                                  -->
      <!-- ══════════════════════════════════════════════════════════════ -->
      <aside class="space-y-4">
        <!-- Profile Card -->
        <div class="rounded-xl border p-5 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl font-black mb-3"
            style="background:linear-gradient(135deg,#0369A1,#00E5FF); color:#070D18;">
            AN
          </div>
          <h2 class="text-base font-bold" style="color:#e2e8f0;">Capt. Arvind Nair</h2>
          <div class="text-xs font-mono mt-0.5" style="color:#00E5FF;">Master Mariner (Class I)</div>
          <div class="flex items-center justify-center gap-1.5 mt-2">
            <span class="text-xs px-2 py-0.5 rounded-full" style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e30;">
              ✓ INDoS VERIFIED
            </span>
          </div>

          <!-- Profile Completion Ring -->
          <div class="mt-4 p-3 rounded-lg" style="background:#070D18; border:1px solid #1e3a5f;">
            <div class="flex items-center justify-between text-xs mb-1">
              <span style="color:#64748b;">Profile Completeness</span>
              <span class="font-bold" style="color:#00E5FF;">{{ profileScore }}%</span>
            </div>
            <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
              <div class="h-full rounded-full"
                :style="{ width: profileScore + '%', background: 'linear-gradient(90deg,#0369A1,#00E5FF)' }"></div>
            </div>
          </div>
        </div>

        <!-- Identity Numbers -->
        <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-widest mb-3" style="color:#00E5FF;">DG SHIPPING IDENTIFIERS</div>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-xs" style="color:#64748b;">INDoS No.</span>
              <span class="text-xs font-mono font-bold" style="color:#e2e8f0;">08ZL9431</span>
            </div>
            <div class="flex justify-between">
              <span class="text-xs" style="color:#64748b;">CDC No.</span>
              <span class="text-xs font-mono" style="color:#e2e8f0;">MU-2018-441292</span>
            </div>
            <div class="flex justify-between">
              <span class="text-xs" style="color:#64748b;">Seafarer ID</span>
              <span class="text-xs font-mono" style="color:#e2e8f0;">IND-0827-M</span>
            </div>
            <div class="flex justify-between">
              <span class="text-xs" style="color:#64748b;">DG Auth. Code</span>
              <span class="text-xs font-mono" style="color:#00E5FF;">IND-AFF-7714-ECDSA</span>
            </div>
          </div>
        </div>

        <!-- Active Applications widget -->
        <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-widest mb-3" style="color:#00E5FF;">JOB APPLICATIONS</div>
          <div class="space-y-2">
            <div v-for="status in applicationSummary" :key="status.label"
              class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full" :style="`background:${status.color};`"></div>
                <span class="text-xs" style="color:#94a3b8;">{{ status.label }}</span>
              </div>
              <span class="text-xs font-bold" style="color:#e2e8f0;">{{ status.count }}</span>
            </div>
          </div>
          <NuxtLink to="/jobs/my-applications"
            class="mt-3 block text-center text-xs font-bold py-2 rounded-lg transition"
            style="background:#0369A120; color:#00E5FF; border:1px solid #0369A140;">
            Track Applications →
          </NuxtLink>
        </div>
      </aside>

      <!-- ══════════════════════════════════════════════════════════════ -->
      <!-- MAIN RESUME BODY                                              -->
      <!-- ══════════════════════════════════════════════════════════════ -->
      <div class="lg:col-span-2 space-y-5">
        <!-- Auto-update notice -->
        <div class="flex items-start gap-3 p-3 rounded-xl"
          style="background:#22c55e10; border:1px solid #22c55e30;">
          <span class="text-base mt-0.5">🔄</span>
          <div class="text-xs leading-relaxed" style="color:#64748b;">
            <span class="font-semibold" style="color:#22c55e;">Auto-Updated:</span>
            This profile syncs automatically with your STCW vault, booking history, and verified job applications. Last updated: <strong style="color:#94a3b8;">2 minutes ago</strong>.
          </div>
        </div>

        <!-- ── PERSONAL INFO ─────────────────────────────────────────── -->
        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between px-5 py-3.5 border-b" style="border-color:#0c1a2e;">
            <div class="text-xs font-mono tracking-widest" style="color:#00E5FF;">PERSONAL INFORMATION</div>
            <button class="text-xs" style="color:#64748b;">Edit ✎</button>
          </div>
          <div class="p-5 grid grid-cols-2 gap-4">
            <div v-for="field in personalInfo" :key="field.label">
              <div class="text-[10px] font-mono uppercase tracking-wider" style="color:#475569;">{{ field.label }}</div>
              <div class="text-sm mt-0.5 font-medium" style="color:#e2e8f0;">{{ field.value }}</div>
            </div>
          </div>
        </div>

        <!-- ── STCW CERTIFICATES (Auto-synced) ──────────────────────── -->
        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between px-5 py-3.5 border-b" style="border-color:#0c1a2e;">
            <div class="text-xs font-mono tracking-widest" style="color:#00E5FF;">STCW CERTIFICATES — AUTO-SYNCED FROM VAULT</div>
            <NuxtLink to="/seafarer/vault" class="text-xs" style="color:#64748b;">Manage →</NuxtLink>
          </div>
          <div class="divide-y" style="border-color:#0c1a2e;">
            <div v-for="cert in resumeCerts" :key="cert.name"
              class="flex items-center gap-4 px-5 py-3.5">
              <div class="text-xl shrink-0">{{ cert.icon }}</div>
              <div class="flex-1">
                <div class="text-sm font-medium" style="color:#e2e8f0;">{{ cert.name }}</div>
                <div class="text-xs font-mono mt-0.5" style="color:#64748b;">{{ cert.ref }} · {{ cert.institute }}</div>
              </div>
              <div class="text-right">
                <div class="text-xs" :style="cert.status === 'EXPIRED' ? 'color:#f87171;' : cert.status === 'EXPIRING' ? 'color:#f59e0b;' : 'color:#22c55e;'">
                  {{ cert.status }}
                </div>
                <div class="text-[11px] font-mono mt-0.5" style="color:#475569;">Until {{ cert.until }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ── SEA SERVICE EXPERIENCE ────────────────────────────────── -->
        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between px-5 py-3.5 border-b" style="border-color:#0c1a2e;">
            <div class="text-xs font-mono tracking-widest" style="color:#00E5FF;">SEA SERVICE EXPERIENCE</div>
            <button class="text-xs" style="color:#64748b;">Add Entry ✎</button>
          </div>
          <div class="divide-y" style="border-color:#0c1a2e;">
            <div v-for="job in seaService" :key="job.id" class="p-5">
              <div class="flex items-start justify-between gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style="background:#0369A120; border:1px solid #0369A140;">
                  {{ job.icon }}
                </div>
                <div class="flex-1">
                  <div class="font-bold text-sm" style="color:#e2e8f0;">{{ job.rank }}</div>
                  <div class="text-xs mt-0.5" style="color:#00E5FF;">{{ job.company }} — {{ job.vesselName }}</div>
                  <div class="text-xs mt-0.5" style="color:#64748b;">{{ job.vesselType }} · IMO: {{ job.imo }} · {{ job.flag }} flag</div>
                  <div class="text-xs font-mono mt-1" style="color:#475569;">{{ job.from }} — {{ job.to }}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-sm font-bold" style="color:#e2e8f0;">{{ job.months }} months</div>
                  <div class="text-[11px] font-mono" style="color:#64748b;">{{ job.grt }} GRT</div>
                </div>
              </div>
              <div class="mt-3 flex items-center gap-4 text-xs">
                <span class="px-2 py-0.5 rounded" style="background:#0c1a2e; color:#94a3b8;">{{ job.tradeArea }}</span>
                <span class="px-2 py-0.5 rounded" style="background:#0c1a2e; color:#94a3b8;">{{ job.propulsion }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ── OBJECTIVE ─────────────────────────────────────────────── -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">CAREER OBJECTIVE</div>
          <textarea v-model="objective" rows="3"
            class="w-full text-sm bg-transparent outline-none resize-none"
            style="color:#94a3b8; line-height:1.8;"
            placeholder="Write your career objective..."></textarea>
        </div>

        <!-- ── SKILLS & ENDORSEMENTS ─────────────────────────────────── -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">COMPETENCIES & ENDORSEMENTS</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill"
              class="text-xs px-3 py-1.5 rounded-full border"
              style="border-color:#1e3a5f; color:#94a3b8; background:#0c1a2e;">
              {{ skill }}
            </span>
            <button class="text-xs px-3 py-1.5 rounded-full border border-dashed transition"
              style="border-color:#0369A140; color:#0369A1;">
              + Add Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Digital Maritime Resume · The Seafu' })
definePageMeta({ middleware: ['auth'] })

const objective = ref('Highly experienced Master Mariner with 14 years of sea service aboard VLCCs, LNG carriers, and product tankers across international trade routes. Seeking a challenging command position with a leading shipping company.')

const profileScore = ref(85)

const personalInfo = [
  { label: 'Full Name', value: 'Arvind Shankar Nair' },
  { label: 'Date of Birth', value: '14 March 1985' },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Home Port', value: 'Mumbai, Maharashtra' },
  { label: 'Current Rank', value: 'Master Mariner (Class I)' },
  { label: 'Years at Sea', value: '14 Years' },
  { label: 'Email', value: 'arvind.nair@seafu.in' },
  { label: 'Phone', value: '+91 98765 43210' },
]

const applicationSummary = [
  { label: 'Applied', count: 12, color: '#64748b' },
  { label: 'Shortlisted', count: 4, color: '#0369A1' },
  { label: 'Interview Sched.', count: 2, color: '#f59e0b' },
  { label: 'Selected', count: 1, color: '#22c55e' },
  { label: 'Rejected', count: 5, color: '#dc2626' },
]

const resumeCerts = [
  { icon: '🔥', name: 'Advanced Fire Fighting (AFF)', ref: 'IND-AFF-7714-ECDSA', institute: 'MTAM', status: 'VALID', until: 'Sep 2031' },
  { icon: '🆘', name: 'Proficiency in Survival Craft (PSCRB)', ref: 'DG/CERT/MH/2021/44421', institute: 'MTAM', status: 'EXPIRING', until: 'Oct 2026' },
  { icon: '⛑️', name: 'Basic Safety Training (BST)', ref: 'DG/CERT/MH/2021/44398', institute: 'MTAM', status: 'EXPIRING', until: 'Dec 2026' },
  { icon: '🏥', name: 'Medical First Aid (MFA)', ref: 'DG/CERT/KL/2022/77012', institute: 'CMI', status: 'VALID', until: 'Jan 2027' },
  { icon: '🧭', name: 'ECDIS Navigation', ref: 'DG/CERT/MH/2023/51009', institute: 'MTAM', status: 'VALID', until: 'Apr 2028' },
  { icon: '⭐', name: 'Leadership & Management', ref: 'DG/CERT/MH/2019/30018', institute: 'MTAM', status: 'EXPIRED', until: 'Mar 2024' },
]

const seaService = [
  {
    id: 1,
    icon: '🛢️',
    rank: 'Master Mariner',
    company: 'Essence Shipping Pvt Ltd',
    vesselName: 'MV Ratna Asha',
    vesselType: 'VLCC (Very Large Crude Carrier)',
    imo: '9812441',
    flag: 'Indian',
    from: 'Apr 2023',
    to: 'Present',
    months: 18,
    grt: '156,000',
    tradeArea: 'International — Middle East / Singapore',
    propulsion: 'MAN B&W 7S80ME-C',
  },
  {
    id: 2,
    icon: '🛥️',
    rank: 'Chief Officer',
    company: 'IndiaShip Management',
    vesselName: 'MT Saraswati',
    vesselType: 'Product Tanker',
    imo: '9701822',
    flag: 'Bahamas',
    from: 'Sep 2020',
    to: 'Jan 2023',
    months: 28,
    grt: '42,500',
    tradeArea: 'Coastal + Short Sea',
    propulsion: 'MAN 6L35MC',
  },
  {
    id: 3,
    icon: '🚢',
    rank: 'Second Officer',
    company: 'Pacific Ship Management',
    vesselName: 'MV Himalaya Star',
    vesselType: 'Bulk Carrier',
    imo: '9445201',
    flag: 'Panama',
    from: 'Mar 2018',
    to: 'Jun 2020',
    months: 27,
    grt: '75,200',
    tradeArea: 'Pacific Trade — Australia / Japan',
    propulsion: 'Wartsila 7RT-flex68',
  },
]

const skills = [
  'VLCC Command',
  'ISM / ISPS Code',
  'MARPOL Compliance',
  'SOLAS Compliance',
  'Bridge Resource Management',
  'Cargo Calculations',
  'ECDIS Operation',
  'Port State Control',
  'AIS / GMDSS',
  'Dynamic Positioning',
  'Stability Calculations',
  'Crew Management',
]
</script>
