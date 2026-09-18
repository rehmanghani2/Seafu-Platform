<template>
  <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h3 class="text-lg font-black text-[#0A1936] tracking-tight">Centralized Certificate Vault</h3>
        <p class="text-xs text-slate-500 mt-0.5">Tamper-proof STCW credentials, flag state endorsements, and medical fitness certificates.</p>
      </div>
      <button
        @click="$emit('upload-doc')"
        class="px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0A1936] hover:bg-[#112752] shadow-xs transition flex items-center space-x-1.5 shrink-0">
        <span>+ Upload New Document</span>
      </button>
    </div>

    <!-- Drag & Drop Upload Zone -->
    <div
      @click="$emit('upload-doc')"
      class="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 mb-6 text-center bg-white/70 hover:bg-blue-50/40 transition cursor-pointer group">
      <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
        ☁️
      </div>
      <div class="text-xs font-black text-slate-800">Drag &amp; drop your certificates, IDs, or medical reports here</div>
      <div class="text-[11px] text-slate-400 mt-1">Supports PDF, JPG, PNG up to 25MB with instant OCR validation</div>
      <button class="mt-3 px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300">
        Browse Files
      </button>
    </div>

    <!-- Certificate Table -->
    <div class="overflow-x-auto bg-white rounded-xl border border-slate-200">
      <table class="w-full text-left text-xs text-slate-600">
        <thead class="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold text-[11px] uppercase tracking-wider">
          <tr>
            <th class="py-3 px-4">Certificate / Qualification</th>
            <th class="py-3 px-4">Category</th>
            <th class="py-3 px-4">Validity</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="(doc, idx) in documents" :key="idx" class="hover:bg-slate-50/80 transition">
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900">{{ doc.title }}</div>
              <div class="text-[11px] text-slate-400">{{ doc.issuer }} &bull; {{ doc.certNo }}</div>
            </td>
            <td class="py-3.5 px-4 font-semibold text-slate-700">{{ doc.type }}</td>
            <td class="py-3.5 px-4 font-semibold" :class="doc.isExpiring ? 'text-red-600 font-bold' : 'text-slate-700'">
              {{ doc.validUntil }}
            </td>
            <td class="py-3.5 px-4">
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide" :class="doc.statusClass">
                {{ doc.status }}
              </span>
            </td>
            <td class="py-3.5 px-4 text-right space-x-2">
              <button @click="$emit('preview-doc', doc)" class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition" title="Preview Document">
                👁️
              </button>
              <button @click="$emit('download-doc', doc)" class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition" title="Download Verified PDF">
                📥
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  documents: Array<{
    title: string;
    issuer: string;
    certNo: string;
    type: string;
    validUntil: string;
    status: string;
    statusClass: string;
    isExpiring?: boolean;
  }>;
}>();

defineEmits(['upload-doc', 'preview-doc', 'download-doc']);
</script>
