<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center space-x-3.5">
        <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-2xs shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <div>
          <h3 class="text-base font-black text-slate-900">Statutory Circulars &amp; CMS Notices</h3>
          <p class="text-xs text-slate-500 mt-0.5">Publish statutory advisories to Public Landing, Seafarer OS, or Academy Desk.</p>
        </div>
      </div>
      <button
        @click="$emit('new-announcement')"
        class="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0A1936] hover:bg-[#112752] transition shadow-xs inline-flex items-center justify-center gap-1.5 shrink-0"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Publish Circular</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['new-announcement']);
</script>

