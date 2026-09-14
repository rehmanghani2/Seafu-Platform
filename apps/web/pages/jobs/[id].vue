<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- TOP NAV -->
    <div class="border-b px-4 py-3 flex items-center gap-3" style="border-color:#0c1a2e; background:#0a1628;">
      <NuxtLink to="/jobs" class="text-sm transition" style="color:#64748b;">← Job Board</NuxtLink>
      <span style="color:#1e3a5f;">›</span>
      <span class="text-sm font-medium" style="color:#94a3b8;">{{ job.title }}</span>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 gap-6">
      <!-- LEFT: Job Detail -->
      <div class="col-span-2 space-y-4">
        <!-- Header Card -->
        <div class="rounded-xl border p-6" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black shrink-0"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                {{ job.companyInitial }}
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-mono tracking-wider px-2 py-0.5 rounded"
                    :style="job.jobType === 'SHIPBOARD'
                      ? 'background:#0369A120; color:#38bdf8; border:1px solid #0369A140;'
                      : 'background:#10b98120; color:#34d399; border:1px solid #10b98140;'">
                    {{ job.jobType === 'SHIPBOARD' ? '⚓ SHIPBOARD' : '🏢 SHORE-BASED' }}
                  </span>
                  <span v-if="job.isPremium" class="text-xs px-2 py-0.5 rounded font-bold"
                    style="background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b30;">
                    ★ PREMIUM
                  </span>
                  <span class="text-xs px-2 py-0.5 rounded" style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e30;">
                    ● ACTIVE
                  </span>
                </div>
                <h1 class="text-2xl font-bold" style="color:#e2e8f0;">{{ job.title }}</h1>
                <p class="mt-1 text-sm" style="color:#64748b;">{{ job.company }} · {{ job.location }}</p>
              </div>
            </div>
            <div class="text-right shrink-0">
              <div class="text-2xl font-black" style="color:#00E5FF;">{{ job.salaryDisplay }}</div>
              <div class="text-xs mt-0.5" style="color:#64748b;">per month</div>
              <div class="text-xs mt-2" style="color:#475569;">{{ job.applicantsCount }} applicants</div>
            </div>
          </div>

          <!-- Meta Tags -->
          <div class="flex flex-wrap gap-2 mt-5 pt-5 border-t" style="border-color:#0c1a2e;">
            <span class="text-xs px-3 py-1.5 rounded-full" style="background:#1e3a5f20; color:#94a3b8; border:1px solid #1e3a5f;">
              🎖️ {{ job.rank }}
            </span>
            <span v-if="job.shipType" class="text-xs px-3 py-1.5 rounded-full" style="background:#1e3a5f20; color:#94a3b8; border:1px solid #1e3a5f;">
              🚢 {{ job.shipType }}
            </span>
            <span v-if="job.portOfJoining" class="text-xs px-3 py-1.5 rounded-full" style="background:#1e3a5f20; color:#94a3b8; border:1px solid #1e3a5f;">
              📍 POJ: {{ job.portOfJoining }}
            </span>
            <span v-if="job.contractDuration" class="text-xs px-3 py-1.5 rounded-full" style="background:#1e3a5f20; color:#94a3b8; border:1px solid #1e3a5f;">
              🕐 {{ job.contractDuration }}
            </span>
            <span class="text-xs px-3 py-1.5 rounded-full" style="background:#1e3a5f20; color:#94a3b8; border:1px solid #1e3a5f;">
              📅 {{ job.postedAgo }}
            </span>
          </div>
        </div>

        <!-- Description -->
        <div class="rounded-xl border p-6" style="background:#0a1628; border-color:#0c1a2e;">
          <h2 class="text-sm font-mono tracking-widest mb-4" style="color:#00E5FF;">JOB DESCRIPTION</h2>
          <p class="text-sm leading-7 whitespace-pre-line" style="color:#94a3b8;">{{ job.description }}</p>
        </div>

        <!-- Requirements -->
        <div class="rounded-xl border p-6" style="background:#0a1628; border-color:#0c1a2e;">
          <h2 class="text-sm font-mono tracking-widest mb-4" style="color:#00E5FF;">REQUIREMENTS & STCW CERTIFICATES</h2>
          <ul class="space-y-2">
            <li v-for="req in job.requirements" :key="req" class="flex items-start gap-2.5 text-sm" style="color:#94a3b8;">
              <span class="mt-0.5 text-base" style="color:#0369A1;">✓</span>
              {{ req }}
            </li>
          </ul>
        </div>

        <!-- ATS Panel (Recruiter View) -->
        <div v-if="isRecruiter" class="rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="px-6 py-4 border-b flex items-center justify-between" style="border-color:#0c1a2e;">
            <h2 class="text-sm font-mono tracking-widest" style="color:#00E5FF;">
              ATS — APPLICANT TRACKING
              <span class="ml-2 px-2 py-0.5 rounded text-xs" style="background:#0369A120; color:#38bdf8;">
                {{ atsApplicants.length }} applicants
              </span>
            </h2>
            <div class="flex gap-1.5 flex-wrap">
              <button v-for="s in atsStatuses" :key="s"
                class="text-xs px-2.5 py-1 rounded transition font-medium"
                :style="atsFilter === s ? 'background:#0369A1; color:#fff;' : 'color:#64748b; background:#0c1a2e;'"
                @click="atsFilter = s">
                {{ s === 'ALL' ? 'All' : s.replace('_', ' ') }}
              </button>
            </div>
          </div>
          <div class="divide-y" style="border-color:#0c1a2e;">
            <div v-for="app in filteredApplicants" :key="app.id" class="px-6 py-4 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style="background:#0369A120; color:#00E5FF;">
                  {{ app.seafarer.fullName.charAt(0) }}
                </div>
                <div>
                  <div class="font-semibold text-sm" style="color:#e2e8f0;">{{ app.seafarer.fullName }}</div>
                  <div class="text-xs" style="color:#64748b;">
                    INDoS: {{ app.seafarer.indosNumber }} · {{ app.seafarer.rank }}
                  </div>
                  <div class="text-xs mt-0.5" style="color:#475569;">
                    🏅 {{ app.seafarer.certCount }} verified certificates
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded-full font-semibold" :style="statusStyle(app.status)">
                  {{ app.status.replace('_', ' ') }}
                </span>
                <select class="text-xs rounded px-2 py-1 border outline-none"
                  style="background:#070D18; border-color:#1e3a5f; color:#94a3b8;"
                  :value="app.status"
                  @change="(e) => updateStatus(app.id, (e.target as HTMLSelectElement).value)">
                  <option value="APPLIED">Applied</option>
                  <option value="SHORTLISTED">Shortlisted</option>
                  <option value="INTERVIEW_SCHEDULED">Interview</option>
                  <option value="SELECTED">Selected</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>
            <div v-if="!filteredApplicants.length" class="px-6 py-8 text-center text-sm" style="color:#475569;">
              No applicants in this category
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Apply Sidebar -->
      <div class="col-span-1 space-y-4">
        <!-- Apply Card -->
        <div class="rounded-xl border p-5 sticky top-4" style="background:#0a1628; border-color:#0369A140;">
          <!-- Verified Badge -->
          <div class="flex items-center gap-2 mb-4 p-3 rounded-lg" style="background:#0369A110; border:1px solid #0369A130;">
            <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background:#0369A1;">
              <span class="text-white text-sm font-bold">✓</span>
            </div>
            <div>
              <div class="text-xs font-bold" style="color:#00E5FF;">SEAFU VERIFIED PROFILE</div>
              <div class="text-xs" style="color:#64748b;">INDoS · CDC · CoC auto-attached</div>
            </div>
          </div>

          <!-- Applied state -->
          <div v-if="hasApplied">
            <div class="text-center py-4">
              <div class="text-4xl mb-2">✅</div>
              <div class="font-bold text-sm mb-1" style="color:#22c55e;">Application Submitted</div>
              <div class="text-xs" style="color:#64748b;">Your verified Seafu profile was shared with the recruiter</div>
            </div>
            <!-- Status tracker -->
            <div class="mt-4 space-y-2">
              <div v-for="step in applicationSteps" :key="step.label"
                class="flex items-center gap-3 p-2.5 rounded-lg"
                :style="step.active ? 'background:#0369A110; border:1px solid #0369A130;' : 'opacity:0.4;'">
                <div class="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  :style="step.done ? 'background:#22c55e; color:#fff;' : step.active ? 'background:#0369A1; color:#fff;' : 'background:#1e3a5f; color:#64748b;'">
                  {{ step.done ? '✓' : step.num }}
                </div>
                <span class="text-xs font-medium" :style="step.active ? 'color:#e2e8f0;' : 'color:#64748b;'">
                  {{ step.label }}
                </span>
              </div>
            </div>
            <button class="w-full mt-4 py-2 text-sm rounded-lg border transition"
              style="border-color:#dc262630; color:#dc2626;"
              @click="hasApplied = false">
              Withdraw Application
            </button>
          </div>

          <!-- Apply Form -->
          <div v-else>
            <label class="text-xs font-mono tracking-wider mb-2 block" style="color:#64748b;">
              COVER NOTE (Optional)
            </label>
            <textarea v-model="coverNote"
              rows="4" placeholder="Briefly mention your CoC grade, sea service on similar vessels..."
              class="w-full px-3 py-2 text-sm rounded-lg border outline-none resize-none"
              style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
            </textarea>
            <button class="w-full mt-3 py-3 rounded-xl font-bold text-sm transition"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
              :disabled="applying"
              @click="applyToJob">
              <span v-if="applying">Submitting…</span>
              <span v-else>⚓ Apply with Verified Profile</span>
            </button>
            <p class="text-xs text-center mt-2" style="color:#475569;">
              INDoS, CDC and certificate vault will be shared with recruiter
            </p>
          </div>
        </div>

        <!-- Company Card -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">RECRUITER</h3>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
              style="background:#0369A120; color:#00E5FF; border:1px solid #0369A130;">
              {{ job.companyInitial }}
            </div>
            <div>
              <div class="font-semibold text-sm" style="color:#e2e8f0;">{{ job.company }}</div>
              <div class="text-xs" style="color:#64748b;">{{ job.location }}</div>
            </div>
          </div>
          <div class="text-xs" style="color:#22c55e;">● DG Shipping Verified Recruiter</div>
        </div>

        <!-- Similar Jobs -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">SIMILAR POSITIONS</h3>
          <div class="space-y-2">
            <NuxtLink v-for="similar in similarJobs" :key="similar.id"
              :to="`/jobs/${similar.id}`"
              class="block p-3 rounded-lg border" style="border-color:#0c1a2e;">
              <div class="text-sm font-medium" style="color:#e2e8f0;">{{ similar.title }}</div>
              <div class="text-xs mt-1" style="color:#64748b;">{{ similar.rank }} · {{ similar.salaryDisplay }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const jobId = route.params.id as string
useHead({ title: 'Maritime Job Detail · The Seafu' })

const applying = ref(false)
const hasApplied = ref(false)
const coverNote = ref('')
const atsFilter = ref('ALL')
const isRecruiter = ref(false)

const atsStatuses = ['ALL', 'APPLIED', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'SELECTED', 'REJECTED']

const job = reactive({
  id: jobId,
  title: 'Master Mariner — VLCC Tanker',
  company: 'Essence Shipping Pvt Ltd',
  companyInitial: 'E',
  location: 'Mumbai, MH',
  jobType: 'SHIPBOARD',
  rank: 'Master',
  shipType: 'VLCC',
  portOfJoining: 'Mumbai (JNPT)',
  contractDuration: '4 months on / 2 months off',
  salaryDisplay: '$12,000',
  salary: 12000,
  currency: 'USD',
  isPremium: true,
  applicantsCount: 18,
  postedAgo: '2h ago',
  description: `We are seeking an experienced Master Mariner to command our VLCC fleet operating on international tanker routes including Arabian Gulf, West Africa, and Southeast Asia corridors.

The successful candidate will be responsible for safe navigation, cargo operations, ISM compliance, and overall management of vessel and crew in accordance with SOLAS, MARPOL, and company QHSE policies.`,
  requirements: [
    'Master (Foreign Going) Certificate of Competency (CoC) — Class I',
    'Minimum 12 months sea service as Chief Officer on VLCC / large tanker',
    'Valid STCW Basic Safety Training (BST) certificates',
    'Advanced Tanker Training (VLCC/Crude) certificate',
    'Crowd Management and Crisis Management certificate',
    'Valid Medical Fitness Certificate (ENG1 or equivalent)',
    'INDoS Registration mandatory',
    'GMDSS-GOC or GMDSS-ROC certificate',
    'No adverse PSC deficiency record in last 2 years',
  ],
})

const applicationSteps = [
  { num: '1', label: 'Applied', done: true, active: true },
  { num: '2', label: 'Under Review', done: false, active: true },
  { num: '3', label: 'Shortlisted', done: false, active: false },
  { num: '4', label: 'Interview', done: false, active: false },
  { num: '5', label: 'Selected', done: false, active: false },
]

const atsApplicants = ref([
  {
    id: 'app-001', status: 'SHORTLISTED',
    seafarer: { fullName: 'Capt. Arvind Nair', indosNumber: 'IND-1234567', rank: 'Master', certCount: 5 }
  },
  {
    id: 'app-002', status: 'APPLIED',
    seafarer: { fullName: 'Capt. Ramesh Shetty', indosNumber: 'IND-7654321', rank: 'Master', certCount: 3 }
  },
  {
    id: 'app-003', status: 'INTERVIEW_SCHEDULED',
    seafarer: { fullName: 'Capt. Suresh Kumar', indosNumber: 'IND-9988776', rank: 'Chief Officer', certCount: 7 }
  },
  {
    id: 'app-004', status: 'REJECTED',
    seafarer: { fullName: 'Capt. Mohan Das', indosNumber: 'IND-1122334', rank: 'Master', certCount: 2 }
  },
  {
    id: 'app-005', status: 'SELECTED',
    seafarer: { fullName: 'Capt. Vijay Pillai', indosNumber: 'IND-5544332', rank: 'Master', certCount: 8 }
  },
])

const similarJobs = [
  { id: 'job-002', title: 'Chief Engineer — Container Vessel', rank: 'Chief Engineer', salaryDisplay: '$9,500/mo' },
  { id: 'job-006', title: 'Electrical Officer — LNG Carrier', rank: 'Electrical Officer', salaryDisplay: '$6,800/mo' },
  { id: 'job-003', title: '2nd Officer — DP Vessel', rank: '2nd Officer', salaryDisplay: '$5,200/mo' },
]

const filteredApplicants = computed(() => {
  if (atsFilter.value === 'ALL') return atsApplicants.value
  return atsApplicants.value.filter((a) => a.status === atsFilter.value)
})

function statusStyle(status: string): string {
  const map: Record<string, string> = {
    APPLIED: 'background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;',
    SHORTLISTED: 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b30;',
    INTERVIEW_SCHEDULED: 'background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf630;',
    SELECTED: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e30;',
    REJECTED: 'background:#dc262620; color:#dc2626; border:1px solid #dc262630;',
  }
  return map[status] || ''
}

async function applyToJob() {
  applying.value = true
  await new Promise((r) => setTimeout(r, 1200))
  hasApplied.value = true
  applying.value = false
}

function updateStatus(applicationId: string, newStatus: string) {
  const app = atsApplicants.value.find((a) => a.id === applicationId)
  if (app) app.status = newStatus
}
</script>
