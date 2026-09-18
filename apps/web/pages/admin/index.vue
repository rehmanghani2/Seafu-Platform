<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50">
    <div class="text-center">
      <div class="w-10 h-10 mx-auto mb-3 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
      <div class="text-sm font-bold text-slate-700">Redirecting to Regulatory Admin Console...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/admin/dashboard');
    },
  ],
});
</script>
