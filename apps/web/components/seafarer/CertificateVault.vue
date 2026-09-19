<template>
  <div class="space-y-4">
    <!-- Header -->
    <div class="flex items-center justify-between flex-wrap gap-4">
      <div>
        <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
          COMPLIANCE &amp; CREDENTIALING
        </span>
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
          Centralized Certificate Vault
        </h2>
      </div>

      <button
        @click="$emit('upload-doc')"
        class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-sky-600"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span>Upload New Document</span>
      </button>
    </div>

    <!-- Drag & Drop Dropzone -->
    <div
      @click="$emit('upload-doc')"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="onDrop"
      class="bg-slate-100/70 border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition shadow-2xs group"
      :class="isDragging ? 'border-blue-600 bg-blue-50/50' : 'border-slate-300/80 hover:border-blue-400 hover:bg-slate-100'"
      role="button"
      tabindex="0"
      aria-label="Upload certificates or medical reports"
    >
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs group-hover:scale-105 transition-transform">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>
      <h4 class="font-bold text-slate-900 text-sm sm:text-base">
        Drag &amp; drop your certificates, IDs, or medical reports here
      </h4>
      <p class="text-xs text-slate-500 mt-1">
        Supports PDF, JPG, PNG up to 25MB with instant OCR validation
      </p>
      <button
        type="button"
        class="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 transition shadow-2xs"
      >
        Browse Files
      </button>
    </div>

    <!-- Document Registry Table -->
    <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50/80 text-slate-500 font-semibold text-[11px] border-b border-slate-200">
            <tr>
              <th scope="col" class="px-6 py-3.5">Document Name</th>
              <th scope="col" class="px-6 py-3.5">Type</th>
              <th scope="col" class="px-6 py-3.5">Expiry Date</th>
              <th scope="col" class="px-6 py-3.5">Status / Badge</th>
              <th scope="col" class="px-6 py-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="(doc, idx) in registryDocuments"
              :key="idx"
              class="hover:bg-slate-50/60 transition"
            >
              <!-- Name & SVG Icon -->
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    :class="doc.status === 'EXPIRING' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-700'"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-slate-900 leading-snug">{{ doc.title }}</div>
                    <div class="text-[11px] text-slate-400 font-mono">{{ doc.certNo }}</div>
                  </div>
                </div>
              </td>

              <!-- Type -->
              <td class="px-6 py-4 text-slate-600 font-medium">{{ doc.type }}</td>

              <!-- Expiry Date -->
              <td class="px-6 py-4 font-mono" :class="doc.status === 'EXPIRING' ? 'text-rose-600 font-bold' : 'text-slate-700'">
                {{ doc.expiry }}
              </td>

              <!-- Badge -->
              <td class="px-6 py-4">
                <span
                  v-if="doc.status === 'VALID'"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#38BDF8] text-white tracking-wide shadow-2xs"
                >
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Valid &amp; Verified</span>
                </span>
                <span
                  v-else
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-200"
                >
                  <svg class="w-3 h-3 text-rose-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span>Expiring Soon</span>
                </span>
              </td>

              <!-- Action -->
              <td class="px-6 py-4 text-right">
                <button
                  @click="$emit('preview-doc', doc)"
                  class="p-2 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition focus:outline-none focus:ring-1 focus:ring-blue-600"
                  title="Preview Verified Document"
                  aria-label="Preview Document"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineEmits(['upload-doc', 'preview-doc']);

const isDragging = ref(false);

const registryDocuments = [
  {
    title: 'STCW Watchkeeping Certificate',
    certNo: 'IND-WKC-4091-ECDSA',
    type: 'Certificate',
    expiry: '14 Oct 2027',
    status: 'VALID',
  },
  {
    title: 'ENG1 Medical Fitness Certificate',
    certNo: 'DG-MED-8820-VALID',
    type: 'Medical',
    expiry: '05 Jan 2026',
    status: 'VALID',
  },
  {
    title: 'Advanced Fire Fighting (AFF)',
    certNo: 'IND-AFF-7714-ECDSA',
    type: 'STCW Training',
    expiry: 'In 14 Days',
    status: 'EXPIRING',
  },
];

function onDrop(e: DragEvent) {
  isDragging.value = false;
  if (e.dataTransfer?.files?.length) {
    // Drop handled
  }
}
</script>
