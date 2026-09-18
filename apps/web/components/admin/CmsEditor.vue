<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-black text-slate-900">Statutory Circulars &amp; CMS Notices</h3>
        <p class="text-xs text-slate-500">Publish statutory advisories to Public Landing, Seafarer OS, or Academy Desk.</p>
      </div>
      <button @click="$emit('new-announcement')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition">
        + Publish Circular
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['new-announcement']);
</script>
