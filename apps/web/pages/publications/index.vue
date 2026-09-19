<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
    <!-- Top Nav Header -->
    <header class="sticky top-0 z-40 bg-[#04142E]/95 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-base font-bold tracking-tight text-white">The Seafu</span>
              <span class="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">LIBRARY</span>
            </div>
            <p class="text-[10px] text-slate-400 font-mono">Maritime Publications &amp; Regulatory Archives</p>
          </div>
        </NuxtLink>

        <div class="flex items-center gap-3">
          <NuxtLink to="/courses" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Courses
          </NuxtLink>
          <NuxtLink to="/webinars" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Webinars
          </NuxtLink>
          <NuxtLink to="/jobs" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Jobs
          </NuxtLink>
          <NuxtLink to="/seafarer/vault" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0369A1] hover:bg-[#0284C7] text-white text-xs font-semibold transition border border-sky-400/30">
            <svg class="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>My Digital Vault</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="border-b border-white/10 bg-gradient-to-b from-[#0A1628] to-[#070D18] py-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold mb-3">
            <svg class="w-3.5 h-3.5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>OFFICIAL MARITIME REPOSITORY</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Maritime Knowledge &amp; Regulatory Library
          </h1>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">
            Verified statutory documents, Directorate General of Shipping circular archives, IMO Model Course manuals, Solas checklists, and MMD competency examination question banks.
          </p>
        </div>

        <!-- Search & Category Filters -->
        <div class="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <!-- Search input -->
          <div class="relative flex-1 max-w-md">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by circular number, IMO code, or subject..."
              class="w-full pl-10 pr-4 py-2.5 bg-[#0C1628] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
            />
          </div>

          <!-- Category Chips -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition"
              :class="selectedCategory === cat.id ? 'bg-[#00E5FF] text-[#070D18] font-bold shadow-md shadow-cyan-500/20' : 'bg-[#0C1628] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div v-if="filteredPublications.length === 0" class="text-center py-16 bg-[#0C1628] rounded-2xl border border-white/10">
        <svg class="mx-auto w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p class="mt-4 text-sm font-semibold text-slate-300">No matching publications found</p>
        <p class="mt-1 text-xs text-slate-500">Try changing your search keywords or active category.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in filteredPublications"
          :key="item.id"
          class="group bg-[#0C1628] border border-white/10 hover:border-[#00E5FF]/40 rounded-2xl p-5 flex flex-col justify-between transition duration-300 hover:shadow-xl hover:shadow-[#00E5FF]/5"
        >
          <div>
            <!-- Top Metadata -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#071324] text-cyan-300 border border-cyan-500/30">
                {{ item.categoryLabel }}
              </span>
              <span class="text-[10px] font-mono text-slate-400">
                {{ item.docCode }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-sm sm:text-base font-bold text-white group-hover:text-[#00E5FF] transition leading-snug">
              {{ item.title }}
            </h2>

            <p class="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Publisher & Date -->
            <div class="mt-4 p-3 bg-[#070D18] rounded-xl border border-white/5 space-y-1 text-[11px] font-mono">
              <div class="flex justify-between text-slate-400">
                <span>AUTHORITY:</span>
                <span class="text-slate-200 truncate max-w-[170px]">{{ item.author }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>PUBLISHED:</span>
                <span class="text-slate-200">{{ item.publishedDate }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>FORMAT / SIZE:</span>
                <span class="text-[#00E5FF] font-bold">{{ item.format }} · {{ item.fileSize }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono text-slate-500 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>{{ item.downloadsCount }} downloads</span>
            </span>

            <div class="flex items-center gap-2">
              <button
                @click="openPreview(item)"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition border border-white/10"
              >
                Preview
              </button>
              <button
                @click="downloadDoc(item)"
                class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0369A1] hover:bg-[#0284C7] text-white transition flex items-center gap-1.5 shadow-sm"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>Download</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>

    <!-- Document Preview Modal -->
    <div v-if="previewDoc" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div class="bg-[#0C1628] border border-white/10 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] flex flex-col">
        <!-- Close Button -->
        <button
          @click="previewDoc = null"
          class="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
          <span>OFFICIAL DOCUMENT PREVIEW</span>
        </div>
        <h3 class="text-lg font-bold text-white leading-snug">{{ previewDoc.title }}</h3>
        <p class="text-xs text-slate-400 mt-0.5">
          {{ previewDoc.author }} · Ref: {{ previewDoc.docCode }} · Published {{ previewDoc.publishedDate }}
        </p>

        <!-- Document Preview Canvas Box -->
        <div class="mt-4 flex-1 p-6 bg-[#070D18] border border-white/10 rounded-xl overflow-y-auto font-serif text-slate-300 text-xs leading-relaxed space-y-4 relative">
          <!-- Watermark -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <span class="text-6xl font-black text-white transform -rotate-45">THE SEAFU MARITIME</span>
          </div>

          <div class="border-b border-white/10 pb-3 font-sans font-mono text-[11px] text-cyan-400">
            GOVERNMENT OF INDIA · DIRECTORATE GENERAL OF SHIPPING · STATUTORY RECORD
          </div>

          <p class="font-bold text-sm text-white font-sans">
            SUBJECT: {{ previewDoc.title }}
          </p>

          <p>
            1. Notice is hereby given to all Recognized Maritime Training Institutes, Ship Owners, Crewing Agents, and Seafarers serving aboard Indian and foreign flag commercial vessels.
          </p>
          <p>
            2. In compliance with the International Convention on Standards of Training, Certification and Watchkeeping for Seafarers (STCW), 1978, as amended, the following procedural directives shall take effect immediately across all approved simulation facilities.
          </p>
          <p>
            3. Detailed operational guidelines, equipment type-approval specifications, instructor qualification ratios, and practical candidate assessment rubrics are detailed in appendices A through D attached hereto.
          </p>

          <div class="p-3 bg-[#0A1628] rounded-lg border border-white/5 font-sans font-mono text-[10px] text-slate-400">
            SHA-256 HSM Cryptographic Ledger Digest: <br />
            <span class="text-[#00E5FF]">8f4b238a9d1209cc14e872ba4190c1f4e198754b21901a5b8281149e</span>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="mt-5 flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <span class="text-xs font-mono text-slate-400">
            {{ previewDoc.format }} · {{ previewDoc.fileSize }}
          </span>
          <div class="flex gap-2">
            <button
              @click="previewDoc = null"
              class="px-4 py-2 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
            <button
              @click="downloadDoc(previewDoc); previewDoc = null"
              class="px-5 py-2 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18] text-xs font-bold transition flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Download Official PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('ALL')
const previewDoc = ref<any>(null)

const categories = [
  { id: 'ALL', label: 'All Resources' },
  { id: 'DG_CIRCULARS', label: 'DG Shipping Circulars' },
  { id: 'IMO_MODEL', label: 'IMO Model Courses' },
  { id: 'SOLAS_MARPOL', label: 'SOLAS & MARPOL Guidelines' },
  { id: 'EXAM_PREP', label: 'Competency Exam Question Banks' },
  { id: 'SIMULATOR_MANUALS', label: 'Bridge Simulator Manuals' }
]

const publications = ref([
  {
    id: 'pub-dgs-circ-14-2026',
    docCode: 'DGS TRAINING CIRCULAR 14/2026',
    title: 'Revised Standard Operating Procedures for STCW Refresher Training & Biometric SID Verification',
    description: 'Mandatory guidelines for recognized maritime training institutes regarding biometric authentication, live facial match on attendance registers, and automated transmission of candidate logs to the e-Samudra portal.',
    category: 'DG_CIRCULARS',
    categoryLabel: 'DG Shipping Circulars',
    author: 'Directorate General of Shipping, Mumbai',
    publishedDate: '15 Aug 2026',
    format: 'Official PDF',
    fileSize: '1.4 MB',
    downloadsCount: 3840
  },
  {
    id: 'pub-imo-model-127',
    docCode: 'IMO MODEL COURSE 1.27 (ED. 2026)',
    title: 'The Operational Use of Electronic Chart Display and Information Systems (ECDIS)',
    description: 'Comprehensive syllabus and instructor guidance for ECDIS training complying with Regulation II/1, II/2, and Table A-II/1 of the STCW Convention. Includes ECDIS failure scenarios and manual radar plotting overlays.',
    category: 'IMO_MODEL',
    categoryLabel: 'IMO Model Courses',
    author: 'International Maritime Organization',
    publishedDate: '01 Jun 2026',
    format: 'Official PDF',
    fileSize: '4.8 MB',
    downloadsCount: 5210
  },
  {
    id: 'pub-solas-ch2-fire-safety',
    docCode: 'SOLAS AMENDMENTS CH. II-2 / MSC.482',
    title: 'Fire Safety Systems (FSS) Code Compliance: Fixed Fire-Extinguishing & Thermal Sensor Systems',
    description: 'Regulatory manual detailing aerosol fire extinguishing arrangements in machinery spaces, emergency fire pump suction requirements, and international shore connection pressure specifications.',
    category: 'SOLAS_MARPOL',
    categoryLabel: 'SOLAS & MARPOL Guidelines',
    author: 'Maritime Safety Committee (MSC)',
    publishedDate: '10 May 2026',
    format: 'Official PDF',
    fileSize: '3.1 MB',
    downloadsCount: 2940
  },
  {
    id: 'pub-mmd-chief-mate-fn1',
    docCode: 'MMD QUESTION BANK · CHIEF MATE',
    title: 'Chief Mate Phase I & Phase II Competency Written Exam Bank: Terrestrial & Celestial Navigation',
    description: 'Past 10 years solved examination papers for MMD written examinations. Includes ship stability (draft surveys, transverse statical stability, grain loading), bridge watchkeeping, and tidal stream calculations.',
    category: 'EXAM_PREP',
    categoryLabel: 'Competency Exam Question Banks',
    author: 'Mercantile Marine Department Examination Board',
    publishedDate: '20 Jul 2026',
    format: 'PDF Deck',
    fileSize: '6.2 MB',
    downloadsCount: 7120
  },
  {
    id: 'pub-kongsberg-pscrb-manual',
    docCode: 'SIM-PROC-K-POS-V3',
    title: 'Full-Mission Navigation Simulator Bridge Operational Procedures & Emergency Scenarios',
    description: 'Standardized drill book for Kongsberg K-Sim navigation bridges. Covers engine failure in the English Channel TSS, high-wind mooring assistance, tug coordination, and gyro failure handovers.',
    category: 'SIMULATOR_MANUALS',
    categoryLabel: 'Bridge Simulator Manuals',
    author: 'Tolani Maritime Simulator Research Group',
    publishedDate: '04 Apr 2026',
    format: 'Interactive PDF',
    fileSize: '5.5 MB',
    downloadsCount: 1890
  },
  {
    id: 'pub-marpol-annex6-cii-handbook',
    docCode: 'MARPOL ANNEX VI / MEPC.354',
    title: 'Carbon Intensity Indicator (CII) & Ship Energy Efficiency Management Plan (SEEMP Part III) Handbook',
    description: 'Technical guidance for shipboard superintendents, chief engineers, and navigating officers on fuel consumption reporting, bio-fuel blends, rotor sail aerodynamic coefficients, and energy efficiency ratings.',
    category: 'SOLAS_MARPOL',
    categoryLabel: 'SOLAS & MARPOL Guidelines',
    author: 'Marine Environment Protection Committee',
    publishedDate: '18 Mar 2026',
    format: 'Official PDF',
    fileSize: '2.9 MB',
    downloadsCount: 2450
  }
])

const filteredPublications = computed(() => {
  return publications.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.docCode.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = selectedCategory.value === 'ALL' || item.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

function openPreview(doc: any) {
  previewDoc.value = doc
}

function downloadDoc(doc: any) {
  doc.downloadsCount += 1
  alert('Downloading document: ' + doc.title)
}
</script>
