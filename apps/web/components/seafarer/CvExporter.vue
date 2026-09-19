<template>
  <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs space-y-4">
    <div>
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
          LIVE PROFESSIONAL CV
        </span>
        <svg class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <h3 class="text-xl font-bold text-slate-900 tracking-tight mt-1">
        Auto-Updating Resume
      </h3>

      <p class="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
        Your CV dynamically syncs with newly verified STCW certificates, sea service day counts, and vessel assignments in real time.
      </p>

      <!-- Profile Completeness Bar -->
      <div class="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
        <div class="flex items-center justify-between text-xs mb-1.5 font-medium">
          <span class="text-slate-700">Profile Completeness</span>
          <span class="font-mono font-bold text-[#0A1936]">98%</span>
        </div>
        <div class="h-2 rounded-full overflow-hidden bg-slate-100">
          <div class="h-full rounded-full bg-[#0A1936] transition-all duration-500" style="width: 98%;"></div>
        </div>
      </div>

      <!-- Verified Items Checklist -->
      <div class="mt-4 space-y-2 text-xs text-slate-700">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="font-medium">8 Verified Certifications Linked</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="font-medium">4 Vessels Logged &amp; Verified</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="font-medium">Endorsed by Captain H. Vance</span>
        </div>
      </div>
    </div>

    <!-- Export Button -->
    <button
      @click="$emit('export-pdf')"
      type="button"
      class="w-full py-3 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center justify-center space-x-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>Export Verified CV (PDF)</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['export-pdf']);
</script>
