<template>
  <div>
    <!-- Mobile Hamburger Bar (visible on < lg screens) -->
    <div class="lg:hidden flex items-center justify-between p-3.5 bg-white border-b border-slate-200/80 sticky top-16 z-30">
      <div class="flex items-center space-x-2.5">
        <div class="w-8 h-8 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
          <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-900 leading-tight">Cadet Alex Mercer</div>
          <div class="text-[10px] text-slate-500 font-medium">Seafarer OS &bull; MV Atlantic Pioneer</div>
        </div>
      </div>

      <button
        @click="mobileOpen = !mobileOpen"
        type="button"
        class="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
        :aria-expanded="mobileOpen"
        aria-label="Toggle seafarer navigation menu"
      >
        <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Slide-Down Drawer Overlay -->
    <div
      v-if="mobileOpen"
      class="lg:hidden fixed inset-x-0 top-[125px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl p-4 space-y-4"
    >
      <nav role="navigation" aria-label="Mobile Seafarer Navigation" class="space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="mobileOpen = false"
          class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition"
          :class="isActive(item.path)
            ? 'bg-[#0A1936] text-white font-bold shadow-xs'
            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'"
          :aria-current="isActive(item.path) ? 'page' : undefined"
        >
          <div class="flex items-center space-x-3">
            <span
              class="w-7 h-7 rounded-lg flex items-center justify-center"
              :class="isActive(item.path) ? 'text-blue-300 bg-white/10' : 'text-slate-500 bg-slate-100'"
              v-html="item.iconSvg"
            ></span>
            <span>{{ item.label }}</span>
          </div>
          <span
            v-if="item.badge"
            class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
            :class="isActive(item.path) ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-200 text-slate-800'"
          >
            {{ item.badge }}
          </span>
        </NuxtLink>
      </nav>

      <div class="pt-2 border-t border-slate-200">
        <NuxtLink
          to="/seafarer/vault"
          @click="mobileOpen = false"
          class="w-full py-2.5 px-3 rounded-xl bg-[#0A1936] text-white text-xs font-bold text-center block"
        >
          View Verified Vault
        </NuxtLink>
      </div>
    </div>

    <!-- Desktop Sidebar (Hidden on mobile, block on lg+) -->
    <aside
      class="hidden lg:flex w-64 bg-white border-r border-slate-200/80 shrink-0 flex-col justify-between min-h-[calc(100vh-4rem)] sticky top-16"
      role="navigation"
      aria-label="Seafarer Console Primary Navigation"
    >
      <div class="p-5 space-y-6">
        <!-- Seafarer Identity Card -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="min-w-0">
              <div class="text-xs font-bold text-slate-900 truncate">Alex Mercer</div>
              <div class="text-[11px] text-slate-600 truncate font-medium">Deck Officer Cadet &bull; MTI</div>
            </div>
          </div>

          <div class="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[10px]">
            <span class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-900 font-bold border border-blue-200/80">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" aria-hidden="true"></span>
              <span>VERIFIED SEAFARER</span>
            </span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 font-bold border border-emerald-200/80">
              STCW READY
            </span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-1">
          <div class="px-3 pb-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            Seafarer Portal
          </div>

          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            :class="isActive(item.path)
              ? 'bg-[#0A1936] text-white shadow-xs font-bold'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <div class="flex items-center space-x-2.5 min-w-0">
              <span
                class="w-7 h-7 rounded-lg flex items-center justify-center transition shrink-0"
                :class="isActive(item.path) ? 'text-blue-300 bg-white/10' : 'text-slate-500 group-hover:text-blue-700 bg-slate-100'"
                v-html="item.iconSvg"
              ></span>
              <span class="truncate">{{ item.label }}</span>
            </div>

            <span
              v-if="item.badge"
              class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full shrink-0"
              :class="isActive(item.path) ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-200 text-slate-800'"
            >
              {{ item.badge }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Compliance Footnote -->
      <div class="p-5 border-t border-slate-200/80 space-y-3">
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
          <div class="font-bold text-slate-900 flex items-center space-x-1">
            <svg class="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>IMO / DG Shipping Sync</span>
          </div>
          <p class="text-[10px] text-slate-500 leading-tight">
            CDC &amp; STCW credentials verified against international flag registries.
          </p>
        </div>

        <div class="text-[10px] font-mono text-slate-400 text-center">
          v1.2.0 Seafarer OS &bull; ECDSA SHA-256
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const mobileOpen = ref(false);

const navItems = [
  {
    label: 'Home',
    path: '/',
    badge: null,
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  },
  {
    label: 'Seafarer Panel',
    path: '/seafarer/dashboard',
    badge: null,
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
  },
  {
    label: 'Courses',
    path: '/seafarer/courses',
    badge: 'STCW',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
  },
  {
    label: 'Certificate Vault',
    path: '/seafarer/vault',
    badge: '3 Valid',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  },
  {
    label: 'Document Uploads',
    path: '/seafarer/documents',
    badge: null,
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>`,
  },
  {
    label: 'Digital Resume',
    path: '/seafarer/resume',
    badge: null,
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  },
  {
    label: 'Job Applications',
    path: '/seafarer/jobs',
    badge: '4 Active',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: 'Bridge Messages',
    path: '/community/messages',
    badge: 'Direct',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
  },
  {
    label: 'Community Forum',
    path: '/community',
    badge: 'Peer OS',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  },
  {
    label: 'Career Bundles',
    path: '/courses/bundles',
    badge: 'Save 25%',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  },
  {
    label: 'Notifications',
    path: '/seafarer/notifications',
    badge: '1 New',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`,
  },
];

function isActive(path: string): boolean {
  if (path === '/seafarer/dashboard') {
    return route.path === '/seafarer/dashboard' || route.path === '/seafarer';
  }
  return route.path === path;
}
</script>
