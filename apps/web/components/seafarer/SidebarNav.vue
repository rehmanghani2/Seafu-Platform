<template>
  <aside class="w-full lg:w-56 shrink-0 space-y-8 lg:sticky lg:top-24" aria-label="Seafarer Navigation">
    <nav class="space-y-1 text-xs font-semibold">
      <NuxtLink
        to="/"
        class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-1 focus:ring-blue-600"
      >
        Home
      </NuxtLink>

      <NuxtLink
        to="/seafarer/dashboard"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/dashboard' || route.path === '/seafarer' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Seafarer Panel
      </NuxtLink>

      <NuxtLink
        to="/seafarer/courses"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/courses' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Courses
      </NuxtLink>

      <NuxtLink
        to="/seafarer/vault"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/vault' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Certificate Vault
      </NuxtLink>

      <NuxtLink
        to="/seafarer/documents"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/documents' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Document Uploads
      </NuxtLink>

      <NuxtLink
        to="/seafarer/resume"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/resume' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Digital Resume
      </NuxtLink>

      <NuxtLink
        to="/seafarer/jobs"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/jobs' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Job Applications
      </NuxtLink>

      <NuxtLink
        to="/seafarer/notifications"
        class="block px-3.5 py-2.5 rounded-xl transition shadow-2xs"
        :class="route.path === '/seafarer/notifications' ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
      >
        Notifications
      </NuxtLink>
    </nav>

    <!-- Version Tag -->
    <div class="pt-6 text-[11px] font-mono text-slate-400 px-3.5 border-t border-slate-200/60">
      v1.2.0 Seafarer OS
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
