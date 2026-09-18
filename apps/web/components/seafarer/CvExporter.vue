<template>
  <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-black uppercase tracking-wider text-slate-500">Live Professional CV</span>
        <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
          Auto-Updating Resume
        </span>
      </div>

      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
            <span>Profile Completeness</span>
            <span>98%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
            <div class="h-full bg-[#0A1936] rounded-full" style="width: 98%"></div>
          </div>
        </div>

        <div class="space-y-2 text-xs text-slate-600">
          <div class="flex items-center space-x-2">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>8 Verified STCW Certifications Attached</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>4 Merchant Vessels Logged (Container &amp; Bulk)</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Master Mariner Endorsement by Capt. H. Vance</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
      <NuxtLink to="/seafarer/resume" class="text-xs font-bold text-blue-700 hover:underline">
        Edit Resume &bull; View Formats
      </NuxtLink>
      <button
        @click="$emit('export-pdf')"
        class="px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0A1936] hover:bg-[#112752] shadow-xs transition">
        Export Verified CV (PDF)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['export-pdf']);
</script>
