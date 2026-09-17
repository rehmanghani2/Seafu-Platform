<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-6 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · DOCUMENT VAULT</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Document Upload Center</h1>
          <p class="text-xs mt-0.5" style="color:#64748b;">Certificates, CDC, Passports, Medical reports — encrypted cloud storage</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono" style="color:#22c55e;">🔒 AES-256 ENCRYPTED</span>
          <NuxtLink to="/seafarer/vault" class="text-xs px-4 py-2 rounded-lg border transition"
            style="border-color:#0369A140; color:#00E5FF; background:#0369A115;">
            View Certificate Vault →
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-6">
      <!-- ── STORAGE USAGE BAR ────────────────────────────────────────── -->
      <div class="rounded-xl border p-4 mb-6 flex items-center gap-6" style="background:#0a1628; border-color:#0c1a2e;">
        <div class="flex-1">
          <div class="flex items-center justify-between text-xs mb-2">
            <span style="color:#94a3b8;">Vault Storage Used</span>
            <span class="font-mono font-bold" style="color:#00E5FF;">47 MB / 2 GB</span>
          </div>
          <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
            <div class="h-full rounded-full" style="width:2.3%; background:linear-gradient(90deg,#0369A1,#00E5FF);"></div>
          </div>
        </div>
        <div class="text-xs text-right shrink-0">
          <div style="color:#64748b;">{{ documents.length }} documents</div>
          <div class="font-bold mt-0.5" style="color:#22c55e;">Storage Healthy</div>
        </div>
      </div>

      <!-- ── DOCUMENT CATEGORY TABS ──────────────────────────────────── -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button v-for="cat in docCategories" :key="cat.value"
          class="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition"
          :style="activeDocCat === cat.value
            ? 'background:#0369A1; color:#fff;'
            : 'background:#0a1628; color:#64748b; border:1px solid #1e3a5f;'"
          @click="activeDocCat = cat.value">
          {{ cat.icon }} {{ cat.label }}
          <span class="px-1.5 py-0.5 rounded text-[10px] font-mono"
            :style="activeDocCat === cat.value ? 'background:#070D18; color:#00E5FF;' : 'background:#1e3a5f; color:#94a3b8;'">
            {{ documents.filter(d => cat.value === 'ALL' || d.category === cat.value).length }}
          </span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- ── UPLOADED DOCUMENTS LIST ──────────────────────────────── -->
        <div class="lg:col-span-2 space-y-3">
          <div v-for="doc in filteredDocuments" :key="doc.id"
            class="rounded-xl border p-4 flex items-start gap-4"
            style="background:#0a1628; border-color:#0c1a2e;">
            <!-- File Icon -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
              :style="doc.fileType === 'PDF' ? 'background:#dc262620; border:1px solid #dc262640;' : 'background:#0369A120; border:1px solid #0369A140;'">
              {{ doc.fileType === 'PDF' ? '📄' : '🖼️' }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <div class="font-bold text-sm" style="color:#e2e8f0;">{{ doc.name }}</div>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-mono"
                  :style="doc.verified ? 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e30;' : 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b30;'">
                  {{ doc.verified ? '✓ VERIFIED' : '⏳ PENDING' }}
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded-full" style="background:#0c1a2e; color:#64748b;">
                  {{ doc.category }}
                </span>
              </div>
              <div class="text-xs mt-1" style="color:#64748b;">{{ doc.fileType }} · {{ doc.size }} · Uploaded {{ doc.uploadedAt }}</div>
              <div v-if="doc.expiryDate" class="flex items-center gap-2 mt-2">
                <span class="text-xs" style="color:#475569;">Expires:</span>
                <span class="text-xs font-mono font-bold"
                  :style="doc.daysToExpiry && doc.daysToExpiry < 30 ? 'color:#f59e0b;' : 'color:#94a3b8;'">
                  {{ doc.expiryDate }}
                  <span v-if="doc.daysToExpiry && doc.daysToExpiry < 90"> ({{ doc.daysToExpiry }}d left)</span>
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-2 shrink-0">
              <button class="text-xs px-3 py-1.5 rounded border transition"
                style="border-color:#1e3a5f; color:#94a3b8;">
                ⬇ Download
              </button>
              <button class="text-xs px-3 py-1.5 rounded border transition"
                style="border-color:#dc262640; color:#f87171;">
                🗑 Delete
              </button>
            </div>
          </div>

          <div v-if="!filteredDocuments.length"
            class="rounded-xl border p-10 text-center" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl mb-3">📁</div>
            <p class="text-sm" style="color:#64748b;">No documents in this category</p>
          </div>
        </div>

        <!-- ── UPLOAD PANEL ─────────────────────────────────────────── -->
        <div class="space-y-4">
          <!-- Upload Drop Zone -->
          <div class="rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition"
            style="border-color:#0369A140; background:#0369A108;"
            @dragover.prevent @drop.prevent="handleDrop"
            @click="triggerUpload">
            <div class="text-4xl mb-3">📤</div>
            <div class="text-sm font-bold mb-1" style="color:#00E5FF;">Upload Document</div>
            <p class="text-xs mb-3" style="color:#64748b;">Drag & drop or click to browse<br/>PDF, JPEG, PNG, WebP · Max 15 MB</p>
            <input ref="fileInput" type="file" class="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              @change="handleFileSelect" />
            <button class="text-xs font-bold px-4 py-2 rounded-lg"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              Browse Files
            </button>
          </div>

          <!-- Upload Form (shown after file selected) -->
          <div v-if="pendingFile" class="rounded-xl border p-4 space-y-3" style="background:#0a1628; border-color:#0369A150;">
            <div class="flex items-center gap-3 p-3 rounded-lg" style="background:#070D18; border:1px solid #1e3a5f;">
              <span class="text-xl">📄</span>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium truncate" style="color:#e2e8f0;">{{ pendingFile.name }}</div>
                <div class="text-xs" style="color:#64748b;">{{ formatSize(pendingFile.size) }}</div>
              </div>
              <button class="text-xs" style="color:#dc2626;" @click="pendingFile = null">✕</button>
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider block mb-1" style="color:#64748b;">DOCUMENT TYPE *</label>
              <select v-model="uploadForm.category"
                class="w-full px-3 py-2 text-xs rounded-lg border outline-none"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;">
                <option value="" style="background:#070D18;">Select type...</option>
                <option v-for="cat in uploadCategories" :key="cat" :value="cat" style="background:#070D18;">{{ cat }}</option>
              </select>
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider block mb-1" style="color:#64748b;">DOCUMENT NAME</label>
              <input v-model="uploadForm.name" type="text"
                class="w-full px-3 py-2 text-xs rounded-lg border outline-none"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;"
                placeholder="e.g. AFF Certificate 2026" />
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider block mb-1" style="color:#64748b;">EXPIRY DATE (if applicable)</label>
              <input v-model="uploadForm.expiryDate" type="date"
                class="w-full px-3 py-2 text-xs rounded-lg border outline-none"
                style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
            </div>

            <button class="w-full py-2.5 rounded-lg text-xs font-bold transition"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
              :disabled="!uploadForm.category || uploading"
              @click="uploadDocument">
              {{ uploading ? 'Uploading...' : '⬆ Upload to Encrypted Vault' }}
            </button>
          </div>

          <!-- Document Types Guide -->
          <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-[10px] font-mono tracking-widest mb-3" style="color:#00E5FF;">ACCEPTED DOCUMENT TYPES</div>
            <div class="space-y-2">
              <div v-for="type in uploadCategories" :key="type"
                class="flex items-center gap-2 text-xs" style="color:#64748b;">
                <span style="color:#0369A1;">›</span>{{ type }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Document Vault · The Seafu' })
definePageMeta({ middleware: ['auth'] })

const activeDocCat = ref('ALL')
const fileInput = ref<HTMLInputElement | null>(null)
const pendingFile = ref<File | null>(null)
const uploading = ref(false)

const uploadForm = reactive({
  category: '',
  name: '',
  expiryDate: '',
})

const docCategories = [
  { value: 'ALL', label: 'All Documents', icon: '📁' },
  { value: 'STCW_CERTIFICATE', label: 'STCW Certificates', icon: '🏆' },
  { value: 'CDC', label: 'CDC / Passport', icon: '📘' },
  { value: 'MEDICAL', label: 'Medical Reports', icon: '🏥' },
  { value: 'WATCHKEEPING', label: 'Sea Service', icon: '📝' },
  { value: 'COC', label: 'CoC / INDOS', icon: '⚓' },
]

const uploadCategories = [
  'STCW_CERTIFICATE',
  'CDC (Continuous Discharge Certificate)',
  'Passport / Travel Document',
  'ENG-1 Medical Fitness',
  'Form 1 Medical Report',
  'Sea Service Record / Discharge Book',
  'COC (Certificate of Competency)',
  'INDoS Registration',
  'INDOS Seaman ID Card',
  'Training Completion Letter',
  'Employment Contract',
  'Insurance Document',
]

const documents = ref([
  {
    id: 'doc-001',
    name: 'Advanced Fire Fighting (AFF) Certificate',
    category: 'STCW_CERTIFICATE',
    fileType: 'PDF',
    size: '1.2 MB',
    uploadedAt: '3 days ago',
    verified: true,
    expiryDate: '12 Sep 2031',
    daysToExpiry: 1820,
  },
  {
    id: 'doc-002',
    name: 'PSCRB — Proficiency in Survival Craft',
    category: 'STCW_CERTIFICATE',
    fileType: 'PDF',
    size: '980 KB',
    uploadedAt: '3 days ago',
    verified: true,
    expiryDate: '15 Oct 2026',
    daysToExpiry: 28,
  },
  {
    id: 'doc-003',
    name: 'ENG-1 Medical Fitness Certificate',
    category: 'MEDICAL',
    fileType: 'PDF',
    size: '2.1 MB',
    uploadedAt: '1 week ago',
    verified: true,
    expiryDate: '27 Sep 2026',
    daysToExpiry: 11,
  },
  {
    id: 'doc-004',
    name: 'Continuous Discharge Certificate (CDC)',
    category: 'CDC',
    fileType: 'PDF',
    size: '4.5 MB',
    uploadedAt: '2 weeks ago',
    verified: true,
    expiryDate: null,
    daysToExpiry: null,
  },
  {
    id: 'doc-005',
    name: 'Indian Passport — PH4912341',
    category: 'CDC',
    fileType: 'PDF',
    size: '1.8 MB',
    uploadedAt: '2 weeks ago',
    verified: true,
    expiryDate: '20 Mar 2030',
    daysToExpiry: 1279,
  },
  {
    id: 'doc-006',
    name: 'STCW Basic Safety Training (BST)',
    category: 'STCW_CERTIFICATE',
    fileType: 'PDF',
    size: '890 KB',
    uploadedAt: '1 month ago',
    verified: true,
    expiryDate: '15 Dec 2026',
    daysToExpiry: 89,
  },
  {
    id: 'doc-007',
    name: 'COC Class I — Master Mariner',
    category: 'COC',
    fileType: 'PDF',
    size: '1.4 MB',
    uploadedAt: '1 month ago',
    verified: false,
    expiryDate: null,
    daysToExpiry: null,
  },
  {
    id: 'doc-008',
    name: 'Form 1 Medical Report — 2025',
    category: 'MEDICAL',
    fileType: 'PDF',
    size: '3.3 MB',
    uploadedAt: '2 months ago',
    verified: true,
    expiryDate: null,
    daysToExpiry: null,
  },
])

const filteredDocuments = computed(() => {
  if (activeDocCat.value === 'ALL') return documents.value
  return documents.value.filter(d => d.category === activeDocCat.value)
})

function triggerUpload() {
  fileInput.value?.click()
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files?.[0]) {
    pendingFile.value = target.files[0]
    uploadForm.name = target.files[0].name.replace(/\.[^.]+$/, '')
  }
}

function handleDrop(e: DragEvent) {
  if (e.dataTransfer?.files[0]) {
    pendingFile.value = e.dataTransfer.files[0]
    uploadForm.name = e.dataTransfer.files[0].name.replace(/\.[^.]+$/, '')
  }
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

async function uploadDocument() {
  if (!pendingFile.value || !uploadForm.category) return
  uploading.value = true
  await new Promise(r => setTimeout(r, 1500))

  documents.value.unshift({
    id: `doc-${Date.now()}`,
    name: uploadForm.name || pendingFile.value.name,
    category: uploadForm.category.split(' ')[0].toUpperCase().replace(/[^A-Z_]/g, '') || 'STCW_CERTIFICATE',
    fileType: pendingFile.value.name.toLowerCase().endsWith('.pdf') ? 'PDF' : 'IMAGE',
    size: formatSize(pendingFile.value.size),
    uploadedAt: 'Just now',
    verified: false,
    expiryDate: uploadForm.expiryDate || null,
    daysToExpiry: null,
  })

  uploading.value = false
  pendingFile.value = null
  uploadForm.category = ''
  uploadForm.name = ''
  uploadForm.expiryDate = ''
}
</script>
