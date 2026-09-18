<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-24">
    <!-- Header -->
    <div class="border-b border-slate-200 bg-white px-6 py-5 sticky top-0 z-30 shadow-xs">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">THE SEAFU &bull; DOCUMENT VAULT</span>
          </div>
          <h1 class="text-2xl font-black text-slate-900 tracking-tight">Document Upload Center</h1>
          <p class="text-xs text-slate-500 mt-0.5">Certificates, CDC, Passports, Medical reports &bull; Encrypted cloud storage</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            🔒 AES-256 ENCRYPTED
          </span>
          <NuxtLink
            to="/seafarer/vault"
            class="text-xs font-bold px-4 py-2 rounded-xl border border-blue-200 text-blue-700 bg-blue-50/60 hover:bg-blue-100 transition shadow-2xs"
          >
            View Certificate Vault &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <!-- ── STORAGE USAGE BAR ────────────────────────────────────────── -->
      <div class="rounded-2xl border border-slate-200 bg-white p-5 mb-6 flex items-center gap-6 shadow-xs">
        <div class="flex-1">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="text-slate-600 font-medium">Vault Storage Used</span>
            <span class="font-mono font-bold text-blue-700">47 MB / 2 GB</span>
          </div>
          <div class="h-2 rounded-full overflow-hidden bg-slate-100">
            <div class="h-full rounded-full bg-blue-600" style="width: 2.3%;"></div>
          </div>
        </div>
        <div class="text-xs text-right shrink-0">
          <div class="text-slate-500">{{ documents.length }} documents stored</div>
          <div class="font-bold mt-0.5 text-emerald-600">Storage Healthy</div>
        </div>
      </div>

      <!-- ── DOCUMENT CATEGORY TABS ──────────────────────────────────── -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button
          v-for="cat in docCategories"
          :key="cat.value"
          class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-2xs"
          :class="activeDocCat === cat.value ? 'bg-[#0A1936] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'"
          @click="activeDocCat = cat.value"
        >
          <span>{{ cat.icon }}</span>
          <span>{{ cat.label }}</span>
          <span
            class="px-1.5 py-0.5 rounded text-[10px] font-mono"
            :class="activeDocCat === cat.value ? 'bg-blue-900 text-blue-200' : 'bg-slate-100 text-slate-500'"
          >
            {{ documents.filter(d => cat.value === 'ALL' || d.category === cat.value).length }}
          </span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- ── UPLOADED DOCUMENTS LIST ──────────────────────────────── -->
        <div class="lg:col-span-2 space-y-3">
          <div
            v-for="doc in filteredDocuments"
            :key="doc.id"
            class="rounded-2xl border border-slate-200 bg-white p-4.5 flex items-start gap-4 shadow-xs hover:border-slate-300 transition"
          >
            <!-- File Icon -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 border"
              :class="doc.fileType === 'PDF' ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-blue-50 border-blue-200 text-blue-700'"
            >
              {{ doc.fileType === 'PDF' ? '📄' : '🖼️' }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <div class="font-bold text-sm text-slate-900">{{ doc.name }}</div>
                <span
                  class="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border"
                  :class="doc.verified ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'"
                >
                  {{ doc.verified ? '✓ VERIFIED' : '⏳ PENDING' }}
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                  {{ doc.category }}
                </span>
              </div>
              <div class="text-xs mt-1 text-slate-500">{{ doc.fileType }} &bull; {{ doc.size }} &bull; Uploaded {{ doc.uploadedAt }}</div>
              <div v-if="doc.expiryDate" class="flex items-center gap-2 mt-2">
                <span class="text-xs text-slate-400 font-medium">Expires:</span>
                <span
                  class="text-xs font-mono font-bold"
                  :class="doc.daysToExpiry && doc.daysToExpiry < 30 ? 'text-rose-600' : 'text-slate-700'"
                >
                  {{ doc.expiryDate }}
                  <span v-if="doc.daysToExpiry && doc.daysToExpiry < 90"> ({{ doc.daysToExpiry }}d left)</span>
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-2 shrink-0">
              <button class="text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-2xs">
                ⬇ Download
              </button>
              <button class="text-xs px-3 py-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition shadow-2xs">
                🗑 Delete
              </button>
            </div>
          </div>

          <div
            v-if="!filteredDocuments.length"
            class="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-xs"
          >
            <div class="text-3xl mb-3">📁</div>
            <p class="text-sm text-slate-500">No documents found in this category.</p>
          </div>
        </div>

        <!-- ── UPLOAD PANEL ─────────────────────────────────────────── -->
        <div class="space-y-4">
          <!-- Upload Drop Zone -->
          <div
            class="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 p-6 text-center cursor-pointer hover:bg-blue-50/70 transition shadow-xs"
            @dragover.prevent
            @drop.prevent="handleDrop"
            @click="triggerUpload"
          >
            <div class="text-4xl mb-3">📤</div>
            <div class="text-sm font-black mb-1 text-slate-900">Upload Document</div>
            <p class="text-xs mb-4 text-slate-500">Drag &amp; drop or click to browse<br />PDF, JPEG, PNG, WebP &bull; Max 15 MB</p>
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              @change="handleFileSelect"
            />
            <button
              class="text-xs font-bold px-4 py-2 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs transition"
            >
              Browse Files
            </button>
          </div>

          <!-- Upload Form (shown after file selected) -->
          <div v-if="pendingFile" class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3.5 shadow-xs">
            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-xl">📄</span>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-bold text-slate-900 truncate">{{ pendingFile.name }}</div>
                <div class="text-xs text-slate-500">{{ formatSize(pendingFile.size) }}</div>
              </div>
              <button class="text-xs text-rose-600 font-bold p-1" @click="pendingFile = null">✕</button>
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider font-bold block mb-1 text-slate-500 uppercase">DOCUMENT TYPE *</label>
              <select
                v-model="uploadForm.category"
                class="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
              >
                <option value="">Select type...</option>
                <option v-for="cat in uploadCategories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider font-bold block mb-1 text-slate-500 uppercase">DOCUMENT NAME</label>
              <input
                v-model="uploadForm.name"
                type="text"
                class="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                placeholder="e.g. AFF Certificate 2026"
              />
            </div>

            <div>
              <label class="text-[10px] font-mono tracking-wider font-bold block mb-1 text-slate-500 uppercase">EXPIRY DATE (if applicable)</label>
              <input
                v-model="uploadForm.expiryDate"
                type="date"
                class="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
              />
            </div>

            <button
              class="w-full py-2.5 rounded-xl text-xs font-bold transition bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
              :disabled="!uploadForm.category || uploading"
              @click="uploadDocument"
            >
              {{ uploading ? 'Uploading...' : '⬆ Upload to Encrypted Vault' }}
            </button>
          </div>

          <!-- Document Types Guide -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div class="text-[10px] font-mono font-bold tracking-widest mb-3 text-blue-700 uppercase">ACCEPTED DOCUMENT TYPES</div>
            <div class="space-y-2">
              <div
                v-for="type in uploadCategories"
                :key="type"
                class="flex items-center gap-2 text-xs text-slate-600"
              >
                <span class="text-blue-700 font-bold">&rsaquo;</span>{{ type }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

useHead({ title: 'Document Vault · The Seafu' });
definePageMeta({ middleware: ['auth'] });

const activeDocCat = ref('ALL');
const fileInput = ref<HTMLInputElement | null>(null);
const pendingFile = ref<File | null>(null);
const uploading = ref(false);

const uploadForm = reactive({
  category: '',
  name: '',
  expiryDate: '',
});

const docCategories = [
  { value: 'ALL', label: 'All Documents', icon: '📁' },
  { value: 'STCW_CERTIFICATE', label: 'STCW Certificates', icon: '🏆' },
  { value: 'CDC', label: 'CDC / Passport', icon: '📘' },
  { value: 'MEDICAL', label: 'Medical Reports', icon: '🏥' },
  { value: 'WATCHKEEPING', label: 'Sea Service', icon: '📝' },
  { value: 'COC', label: 'CoC / INDOS', icon: '⚓' },
];

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
];

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
]);

const filteredDocuments = computed(() => {
  if (activeDocCat.value === 'ALL') return documents.value;
  return documents.value.filter(d => d.category === activeDocCat.value);
});

function triggerUpload() {
  fileInput.value?.click();
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files?.[0]) {
    pendingFile.value = target.files[0];
    uploadForm.name = target.files[0].name.replace(/.[^.]+$/, '');
  }
}

function handleDrop(e: DragEvent) {
  if (e.dataTransfer?.files[0]) {
    pendingFile.value = e.dataTransfer.files[0];
    uploadForm.name = e.dataTransfer.files[0].name.replace(/.[^.]+$/, '');
  }
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function uploadDocument() {
  if (!pendingFile.value || !uploadForm.category) return;
  uploading.value = true;
  await new Promise(r => setTimeout(r, 1500));

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
  });

  uploading.value = false;
  pendingFile.value = null;
  uploadForm.category = '';
  uploadForm.name = '';
  uploadForm.expiryDate = '';
}
</script>
