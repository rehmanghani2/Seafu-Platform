<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-4 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · COMMUNITY HUB</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Start a Discussion</h1>
          <p class="text-sm mt-0.5" style="color:#64748b;">Share your knowledge with 18,000+ verified seafarers</p>
        </div>
        <NuxtLink to="/community" class="text-sm px-4 py-2 rounded-lg border" style="border-color:#1e3a5f; color:#94a3b8;">
          ← Back to Forum
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">
      <!-- Success State -->
      <div v-if="posted" class="rounded-xl border p-14 text-center" style="background:#0a1628; border-color:#22c55e40;">
        <div class="text-5xl mb-4">🌊</div>
        <h2 class="text-xl font-bold mb-2" style="color:#22c55e;">Discussion Posted!</h2>
        <p class="text-sm mb-6" style="color:#64748b;">Your post is now live in the maritime community</p>
        <div class="flex gap-3 justify-center">
          <NuxtLink to="/community"
            class="px-4 py-2 text-sm rounded-lg font-medium"
            style="background:#0369A1; color:#fff;">
            View Forum
          </NuxtLink>
          <button class="px-4 py-2 text-sm rounded-lg border" style="border-color:#1e3a5f; color:#94a3b8;"
            @click="posted = false; resetForm()">
            Post Another
          </button>
        </div>
      </div>

      <!-- Form -->
      <div v-else class="space-y-5">
        <!-- Guidelines banner -->
        <div class="flex items-start gap-3 p-4 rounded-xl" style="background:#0369A110; border:1px solid #0369A130;">
          <span class="text-xl">💡</span>
          <div class="text-xs leading-relaxed" style="color:#64748b;">
            <span class="font-semibold" style="color:#94a3b8;">Tip:</span>
            Posts that cite DG Shipping circulars, SOLAS regulations, or personal first-hand experience get ranked higher.
            Verified INDoS seafarers receive a ✓ badge.
          </div>
        </div>

        <!-- Category Select -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-3 block" style="color:#00E5FF;">CATEGORY *</label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button v-for="cat in categories" :key="cat.value"
              type="button"
              class="flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs font-medium text-left transition"
              :style="form.category === cat.value
                ? 'background:#0369A120; border-color:#0369A1; color:#38bdf8;'
                : 'background:transparent; border-color:#1e3a5f; color:#64748b;'"
              @click="form.category = cat.value">
              {{ cat.icon }} {{ cat.label }}
            </button>
          </div>
        </div>

        <!-- Title -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">TITLE *</label>
          <input v-model="form.title"
            type="text"
            maxlength="300"
            placeholder="e.g. Rotterdam PSC — Detained for SOLAS III/20 non-compliance — sharing deficiency list"
            class="w-full px-4 py-3 text-sm rounded-lg border outline-none"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
          <div class="flex justify-between mt-1.5">
            <span class="text-xs" style="color:#334155;">
              Write a clear, specific title that describes your question or experience
            </span>
            <span class="text-xs" :style="form.title.length > 250 ? 'color:#f59e0b;' : 'color:#334155;'">
              {{ form.title.length }}/300
            </span>
          </div>
        </div>

        <!-- Content -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">CONTENT *</label>
          <!-- Mini toolbar -->
          <div class="flex items-center gap-2 mb-2 pb-2 border-b" style="border-color:#1e3a5f;">
            <button v-for="tool in editorTools" :key="tool.label" type="button"
              class="w-7 h-7 rounded flex items-center justify-center text-xs transition"
              style="background:#0c1a2e; color:#64748b;"
              :title="tool.label"
              @click="insertMarkdown(tool.prefix, tool.suffix)">
              {{ tool.icon }}
            </button>
          </div>
          <textarea v-model="form.content"
            rows="12"
            :placeholder="contentPlaceholder"
            class="w-full px-4 py-3 text-sm rounded-lg border outline-none resize-none font-mono"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0; line-height:1.8;" />
          <div class="flex justify-between mt-1.5">
            <span class="text-xs" style="color:#334155;">
              Minimum 20 characters. Markdown supported.
            </span>
            <span class="text-xs" style="color:#334155;">{{ form.content.length }} chars</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <label class="text-xs font-mono tracking-widest mb-2 block" style="color:#00E5FF;">TAGS (Optional)</label>
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="tag in form.tags" :key="tag"
              class="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
              style="background:#0c1a2e; color:#94a3b8; border:1px solid #1e3a5f;">
              #{{ tag }}
              <button type="button" class="text-xs" style="color:#475569;" @click="removeTag(tag)">✕</button>
            </span>
          </div>
          <div class="flex gap-2">
            <input v-model="newTag" type="text" maxlength="30"
              placeholder="e.g. PSC, SOLAS, Rotterdam, ISM"
              class="flex-1 px-3 py-2 text-sm rounded-lg border outline-none"
              style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
              @keydown.enter.prevent="addTag"
              @keydown.comma.prevent="addTag" />
            <button type="button"
              class="px-4 py-2 text-sm rounded-lg"
              style="background:#0369A120; color:#00E5FF; border:1px solid #0369A140;"
              @click="addTag">+ Add</button>
          </div>
        </div>

        <!-- Submit Row -->
        <div class="flex gap-3 pt-2">
          <button
            class="flex-1 py-3 rounded-xl font-bold text-sm transition"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
            :disabled="!isFormValid || submitting"
            @click="submitPost">
            {{ submitting ? 'Posting…' : '🌊 Post Discussion' }}
          </button>
          <button type="button"
            class="px-5 py-3 rounded-xl text-sm border"
            style="border-color:#1e3a5f; color:#64748b;">
            Preview
          </button>
        </div>

        <!-- Validation hint -->
        <div v-if="!isFormValid && attemptedSubmit" class="text-xs text-center" style="color:#f87171;">
          Please select a category, write a title (min 10 chars) and content (min 20 chars)
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'New Discussion · The Seafu Community' })
definePageMeta({ middleware: ['auth'] })

const submitting = ref(false)
const posted = ref(false)
const attemptedSubmit = ref(false)
const newTag = ref('')

const form = reactive({
  category: '',
  title: '',
  content: '',
  tags: [] as string[],
})

const categories = [
  { value: 'STCW_REGULATIONS', label: 'STCW & Regs', icon: '📋' },
  { value: 'PSC_INSPECTIONS', label: 'PSC Inspections', icon: '🔍' },
  { value: 'CAREER_PROMOTION', label: 'Career & Promo', icon: '🚀' },
  { value: 'VESSEL_OPERATIONS', label: 'Vessel Ops', icon: '⚓' },
  { value: 'NAVIGATION', label: 'Navigation', icon: '🧭' },
  { value: 'ENGINE_ROOM', label: 'Engine Room', icon: '⚙️' },
  { value: 'MEDICAL_FITNESS', label: 'Medical & Fitness', icon: '🏥' },
  { value: 'CONTRACTS_LEGAL', label: 'Contracts & Legal', icon: '⚖️' },
  { value: 'TRAINING_INSTITUTES', label: 'Institutes', icon: '🎓' },
  { value: 'ANNOUNCEMENTS', label: 'Announcements', icon: '📢' },
  { value: 'GENERAL', label: 'General', icon: '🌐' },
]

const editorTools = [
  { icon: 'B', label: 'Bold', prefix: '**', suffix: '**' },
  { icon: 'I', label: 'Italic', prefix: '_', suffix: '_' },
  { icon: '①', label: 'List', prefix: '\n1. ', suffix: '' },
  { icon: '—', label: 'Separator', prefix: '\n\n---\n\n', suffix: '' },
  { icon: '"', label: 'Quote', prefix: '\n> ', suffix: '' },
]

const contentPlaceholder = `Share your experience, question, or knowledge in detail.

For questions: Include context — your vessel type, trading area, flag state, and what you've already tried.

For experience/incident reports: Be specific about the regulation code, port, and what happened.

For advice: Cite the specific regulation or circular where possible (e.g. SOLAS Reg. III/20, DG Shipping Circular 12/2024).`

const isFormValid = computed(() =>
  form.category && form.title.length >= 10 && form.content.length >= 20
)

function insertMarkdown(prefix: string, suffix: string) {
  form.content += prefix + suffix
}

function addTag() {
  const t = newTag.value.trim().replace(/^#/, '').replace(/,/g, '')
  if (t && !form.tags.includes(t) && form.tags.length < 5) {
    form.tags.push(t)
    newTag.value = ''
  }
}

function removeTag(tag: string) {
  form.tags = form.tags.filter(t => t !== tag)
}

function resetForm() {
  form.category = ''
  form.title = ''
  form.content = ''
  form.tags = []
  attemptedSubmit.value = false
}

async function submitPost() {
  attemptedSubmit.value = true
  if (!isFormValid.value) return
  submitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  submitting.value = false
  posted.value = true
}
</script>
