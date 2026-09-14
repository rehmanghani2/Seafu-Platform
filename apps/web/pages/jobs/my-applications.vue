<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-4 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · MY APPLICATIONS</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Application Tracker</h1>
          <p class="text-sm mt-0.5" style="color:#64748b;">Track your maritime job applications end-to-end</p>
        </div>
        <NuxtLink to="/jobs"
          class="px-4 py-2 text-sm font-medium rounded-lg border transition"
          style="border-color:#0369A1; color:#00E5FF; background:#0369A110;">
          ⚓ Browse Jobs
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 py-6">
      <!-- Status Summary Bar -->
      <div class="grid grid-cols-5 gap-3 mb-6">
        <div v-for="stat in statusStats" :key="stat.label"
          class="rounded-xl p-4 border text-center cursor-pointer transition"
          :style="activeFilter === stat.status
            ? 'background:#0369A120; border-color:#0369A1;'
            : 'background:#0a1628; border-color:#0c1a2e;'"
          @click="activeFilter = stat.status">
          <div class="text-2xl font-black" :style="{ color: stat.color }">{{ stat.count }}</div>
          <div class="text-xs mt-1" style="color:#64748b;">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Applications List -->
      <div v-if="filteredApplications.length" class="space-y-4">
        <div v-for="app in filteredApplications" :key="app.id"
          class="rounded-xl border overflow-hidden"
          style="background:#0a1628; border-color:#0c1a2e;">
          <!-- Application Header -->
          <div class="px-5 py-4 flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                {{ app.company.charAt(0) }}
              </div>
              <div>
                <h3 class="font-bold" style="color:#e2e8f0;">{{ app.jobTitle }}</h3>
                <p class="text-sm mt-0.5" style="color:#64748b;">{{ app.company }} · {{ app.location }}</p>
                <div class="flex items-center gap-2 mt-2 flex-wrap">
                  <span class="text-xs px-2.5 py-1 rounded-full"
                    :style="app.jobType === 'SHIPBOARD'
                      ? 'background:#0369A120; color:#38bdf8; border:1px solid #0369A140;'
                      : 'background:#10b98120; color:#34d399; border:1px solid #10b98140;'">
                    {{ app.jobType === 'SHIPBOARD' ? '⚓ Shipboard' : '🏢 Shore-based' }}
                  </span>
                  <span class="text-xs px-2.5 py-1 rounded-full" style="background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;">
                    {{ app.rank }}
                  </span>
                  <span class="text-xs" style="color:#475569;">Applied {{ app.appliedAgo }}</span>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0 text-right">
              <span class="text-xs px-3 py-1.5 rounded-full font-bold" :style="statusStyle(app.status)">
                {{ statusLabel(app.status) }}
              </span>
              <div class="text-lg font-bold mt-2" style="color:#00E5FF;">{{ app.salary }}</div>
            </div>
          </div>

          <!-- Progress Steps -->
          <div class="px-5 pb-4">
            <div class="flex items-center gap-0">
              <div v-for="(step, i) in progressSteps" :key="step.status" class="flex items-center flex-1">
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition"
                    :style="getStepStyle(app.status, step.status)">
                    <span v-if="isPastStep(app.status, step.status)">✓</span>
                    <span v-else>{{ i + 1 }}</span>
                  </div>
                  <div class="text-xs mt-1 text-center leading-tight" style="color:#475569; max-width:64px;">
                    {{ step.label }}
                  </div>
                </div>
                <div v-if="i < progressSteps.length - 1" class="flex-1 h-0.5 mx-1 mb-4"
                  :style="isPastStep(app.status, progressSteps[i+1].status) ? 'background:#0369A1;' : 'background:#1e3a5f;'">
                </div>
              </div>
            </div>
          </div>

          <!-- Action Bar -->
          <div class="px-5 py-3 border-t flex items-center justify-between" style="border-color:#0c1a2e; background:#070D18;">
            <NuxtLink :to="`/jobs/${app.jobId}`" class="text-xs font-medium transition" style="color:#00E5FF;">
              View Job Posting →
            </NuxtLink>
            <button v-if="app.status === 'APPLIED'"
              class="text-xs px-3 py-1 rounded border transition"
              style="border-color:#dc262630; color:#dc2626;">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="rounded-xl border p-16 text-center mt-4" style="background:#0a1628; border-color:#0c1a2e;">
        <div class="text-4xl mb-4">📋</div>
        <h3 class="text-lg font-semibold mb-2" style="color:#94a3b8;">No applications yet</h3>
        <p class="text-sm mb-4" style="color:#475569;">Start applying to maritime positions with your verified Seafu profile</p>
        <NuxtLink to="/jobs" class="px-4 py-2 text-sm rounded-lg font-medium" style="background:#0369A1; color:#fff;">
          Browse Job Board
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'My Applications · The Seafu' })
definePageMeta({ middleware: ['auth'] })

const activeFilter = ref('ALL')

const applications = [
  {
    id: 'app-001', jobId: 'job-001',
    jobTitle: 'Master Mariner — VLCC Tanker', company: 'Essence Shipping Pvt Ltd',
    location: 'Mumbai, MH', jobType: 'SHIPBOARD', rank: 'Master',
    salary: '$12,000/mo', status: 'SHORTLISTED', appliedAgo: '3 days ago'
  },
  {
    id: 'app-002', jobId: 'job-003',
    jobTitle: '2nd Officer — DP Vessel', company: 'Offshore Dynamics Ltd',
    location: 'Visakhapatnam, AP', jobType: 'SHIPBOARD', rank: '2nd Officer',
    salary: '$5,200/mo', status: 'APPLIED', appliedAgo: '1 day ago'
  },
  {
    id: 'app-003', jobId: 'job-004',
    jobTitle: 'Marine Superintendent (Tankers)', company: 'IndiaShip Management',
    location: 'Mumbai, MH', jobType: 'SHORE_BASED', rank: 'Marine Superintendent',
    salary: '₹1.8L/mo', status: 'INTERVIEW_SCHEDULED', appliedAgo: '5 days ago'
  },
]

const progressSteps = [
  { status: 'APPLIED', label: 'Applied' },
  { status: 'SHORTLISTED', label: 'Shortlisted' },
  { status: 'INTERVIEW_SCHEDULED', label: 'Interview' },
  { status: 'SELECTED', label: 'Selected' },
]

const stepOrder = ['APPLIED', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'SELECTED', 'REJECTED']

const statusStats = computed(() => [
  { status: 'ALL', label: 'Total', count: applications.length, color: '#e2e8f0' },
  { status: 'APPLIED', label: 'Applied', count: applications.filter(a => a.status === 'APPLIED').length, color: '#94a3b8' },
  { status: 'SHORTLISTED', label: 'Shortlisted', count: applications.filter(a => a.status === 'SHORTLISTED').length, color: '#f59e0b' },
  { status: 'INTERVIEW_SCHEDULED', label: 'Interview', count: applications.filter(a => a.status === 'INTERVIEW_SCHEDULED').length, color: '#a78bfa' },
  { status: 'SELECTED', label: 'Selected', count: applications.filter(a => a.status === 'SELECTED').length, color: '#22c55e' },
])

const filteredApplications = computed(() => {
  if (activeFilter.value === 'ALL') return applications
  return applications.filter(a => a.status === activeFilter.value)
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

function statusLabel(status: string): string {
  const map: Record<string, string> = {
    APPLIED: '📤 Applied',
    SHORTLISTED: '⭐ Shortlisted',
    INTERVIEW_SCHEDULED: '📅 Interview',
    SELECTED: '✅ Selected',
    REJECTED: '✕ Rejected',
  }
  return map[status] || status
}

function getStepStyle(appStatus: string, stepStatus: string): string {
  const appIdx = stepOrder.indexOf(appStatus)
  const stepIdx = stepOrder.indexOf(stepStatus)
  if (appStatus === 'REJECTED') return 'background:#1e3a5f; color:#475569;'
  if (appIdx >= stepIdx) return 'background:#0369A1; color:#fff;'
  return 'background:#1e3a5f; color:#475569;'
}

function isPastStep(appStatus: string, stepStatus: string): boolean {
  const appIdx = stepOrder.indexOf(appStatus)
  const stepIdx = stepOrder.indexOf(stepStatus)
  return appIdx > stepIdx && appStatus !== 'REJECTED'
}
</script>
