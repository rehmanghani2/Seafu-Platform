<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-4 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · RECRUITER PORTAL</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Post a New Job</h1>
          <p class="text-sm mt-0.5" style="color:#64748b;">Reach verified seafarers with DG Shipping credentials</p>
        </div>
        <NuxtLink to="/institute/jobs"
          class="px-4 py-2 text-sm rounded-lg border"
          style="border-color:#1e3a5f; color:#94a3b8;">
          ← My Posted Jobs
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">
      <!-- Success State -->
      <div v-if="submitted"
        class="rounded-xl border p-12 text-center"
        style="background:#0a1628; border-color:#22c55e40;">
        <div class="text-5xl mb-4">✅</div>
        <h2 class="text-xl font-bold mb-2" style="color:#22c55e;">Job Posted Successfully</h2>
        <p class="text-sm mb-6" style="color:#64748b;">Your position is now live on the Seafu Maritime Job Board</p>
        <div class="flex gap-3 justify-center">
          <NuxtLink to="/jobs" class="px-4 py-2 text-sm rounded-lg font-medium" style="background:#0369A1; color:#fff;">
            View on Job Board
          </NuxtLink>
          <button class="px-4 py-2 text-sm rounded-lg border" style="border-color:#1e3a5f; color:#94a3b8;"
            @click="submitted = false; resetForm()">
            Post Another Job
          </button>
        </div>
      </div>

      <!-- Form -->
      <form v-else @submit.prevent="submitJob" class="space-y-5">
        <!-- Job Type Toggle -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">JOB TYPE *</label>
          <div class="grid grid-cols-2 gap-3">
            <button type="button"
              class="p-4 rounded-xl border text-center transition"
              :style="form.jobType === 'SHIPBOARD'
                ? 'background:#0369A120; border-color:#0369A1; color:#38bdf8;'
                : 'background:transparent; border-color:#1e3a5f; color:#64748b;'"
              @click="form.jobType = 'SHIPBOARD'">
              <div class="text-3xl mb-2">⚓</div>
              <div class="font-bold text-sm">Shipboard</div>
              <div class="text-xs mt-1" style="color:#475569;">Seagoing positions on vessels</div>
            </button>
            <button type="button"
              class="p-4 rounded-xl border text-center transition"
              :style="form.jobType === 'SHORE_BASED'
                ? 'background:#10b98120; border-color:#10b981; color:#34d399;'
                : 'background:transparent; border-color:#1e3a5f; color:#64748b;'"
              @click="form.jobType = 'SHORE_BASED'">
              <div class="text-3xl mb-2">🏢</div>
              <div class="font-bold text-sm">Shore-based</div>
              <div class="text-xs mt-1" style="color:#475569;">Office, management & technical roles</div>
            </button>
          </div>
        </div>

        <!-- Basic Info -->
        <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest block" style="color:#00E5FF;">POSITION DETAILS</label>

          <div>
            <label class="text-xs mb-1.5 block" style="color:#64748b;">Job Title *</label>
            <input v-model="form.title" type="text" required
              placeholder="e.g. Master Mariner — VLCC Tanker"
              class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
              style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Rank / Position *</label>
              <select v-model="form.rank" required
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
                <option value="">Select rank...</option>
                <option v-for="r in shipRanks" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
            <div v-if="form.jobType === 'SHIPBOARD'">
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Vessel Type</label>
              <select v-model="form.shipType"
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
                <option value="">Select vessel type...</option>
                <option v-for="s in shipTypes" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-if="form.jobType === 'SHIPBOARD'">
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Port of Joining</label>
              <select v-model="form.portOfJoining"
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
                <option value="">Select port...</option>
                <option v-for="p in ports" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>
            <div>
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Contract Duration</label>
              <input v-model="form.contractDuration" type="text"
                placeholder="e.g. 4 months on / 2 months off"
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
            </div>
          </div>
        </div>

        <!-- Salary -->
        <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest block" style="color:#00E5FF;">COMPENSATION</label>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Monthly Salary</label>
              <input v-model.number="form.salary" type="number" min="0"
                placeholder="e.g. 9500"
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
            </div>
            <div>
              <label class="text-xs mb-1.5 block" style="color:#64748b;">Currency</label>
              <select v-model="form.currency"
                class="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
                <option value="USD">USD ($)</option>
                <option value="INR">INR (₹)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">JOB DESCRIPTION *</label>
          <textarea v-model="form.description" rows="6" required
            placeholder="Describe the role, responsibilities, vessel details, trading area, expectations..."
            class="w-full px-4 py-3 rounded-lg border outline-none text-sm resize-none"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
          </textarea>
        </div>

        <!-- Requirements -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">STCW / CERTIFICATE REQUIREMENTS</label>
          <div class="space-y-2 mb-3">
            <div v-for="(req, i) in form.requirements" :key="i"
              class="flex items-center gap-2">
              <span class="text-sm" style="color:#0369A1;">✓</span>
              <span class="flex-1 text-sm" style="color:#94a3b8;">{{ req }}</span>
              <button type="button" class="text-xs" style="color:#475569;" @click="removeRequirement(i)">✕</button>
            </div>
          </div>
          <div class="flex gap-2">
            <input v-model="newRequirement" type="text"
              placeholder="e.g. Master (FG) CoC Class I"
              class="flex-1 px-3 py-2 text-sm rounded-lg border outline-none"
              style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
              @keydown.enter.prevent="addRequirement" />
            <button type="button"
              class="px-4 py-2 text-sm rounded-lg font-medium"
              style="background:#0369A120; color:#00E5FF; border:1px solid #0369A140;"
              @click="addRequirement">
              + Add
            </button>
          </div>
        </div>

        <!-- Submit -->
        <div class="flex gap-3 pt-2">
          <button type="submit"
            class="flex-1 py-3 rounded-xl font-bold text-sm"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
            :disabled="submitting">
            {{ submitting ? 'Posting...' : '⚓ Post Job Now' }}
          </button>
          <button type="button"
            class="px-6 py-3 rounded-xl text-sm border font-medium"
            style="border-color:#1e3a5f; color:#64748b;">
            Save Draft
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Post a Job · The Seafu Recruiter Portal' })
definePageMeta({ middleware: ['auth'] })

const submitting = ref(false)
const submitted = ref(false)
const newRequirement = ref('')

const form = reactive({
  jobType: 'SHIPBOARD' as 'SHIPBOARD' | 'SHORE_BASED',
  title: '',
  rank: '',
  shipType: '',
  portOfJoining: '',
  contractDuration: '',
  salary: null as number | null,
  currency: 'USD',
  description: '',
  requirements: [] as string[],
})

const shipRanks = [
  'Master', 'Chief Officer', '2nd Officer', '3rd Officer',
  'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer',
  'Electrical Officer', 'Bosun', 'AB Seaman', 'OS', 'Fitter', 'Wiper', 'Cook/Steward',
  'Port Captain', 'Marine Superintendent', 'Ship Manager', 'QHSE Officer',
]
const shipTypes = [
  'Bulk Carrier', 'Container Ship', 'Tanker (Crude)', 'Tanker (Product)',
  'LNG Carrier', 'LPG Carrier', 'General Cargo', 'Ro-Ro', 'VLCC', 'Offshore Vessel',
  'Dredger', 'Tug', 'Chemical Tanker',
]
const ports = [
  'Mumbai (JNPT)', 'Chennai', 'Kolkata', 'Visakhapatnam', 'Cochin',
  'Mundra', 'Paradip', 'Haldia', 'Kandla', 'Mormugao',
  'Singapore', 'Dubai', 'Rotterdam',
]

function addRequirement() {
  if (newRequirement.value.trim()) {
    form.requirements.push(newRequirement.value.trim())
    newRequirement.value = ''
  }
}

function removeRequirement(i: number) {
  form.requirements.splice(i, 1)
}

function resetForm() {
  form.title = ''
  form.rank = ''
  form.shipType = ''
  form.portOfJoining = ''
  form.contractDuration = ''
  form.salary = null
  form.currency = 'USD'
  form.description = ''
  form.requirements = []
}

async function submitJob() {
  submitting.value = true
  await new Promise((r) => setTimeout(r, 1500))
  submitting.value = false
  submitted.value = true
}
</script>
