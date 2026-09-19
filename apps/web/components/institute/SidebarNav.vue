<template>
  <div>
    <!-- Mobile Hamburger Bar (visible on < lg screens) -->
    <div class="lg:hidden flex items-center justify-between p-3.5 bg-white border-b border-slate-200/80 sticky top-16 z-30">
      <div class="flex items-center space-x-2.5">
        <div class="w-8 h-8 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
          <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-900 leading-tight">MTI Karachi</div>
          <div class="text-[10px] text-slate-500 font-medium">Academy Console</div>
        </div>
      </div>

      <button
        @click="mobileOpen = !mobileOpen"
        type="button"
        class="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
        :aria-expanded="mobileOpen"
        aria-label="Toggle academy navigation menu"
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
      <nav role="navigation" aria-label="Mobile Academy Navigation" class="space-y-1">
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
          to="/institute/batches"
          @click="mobileOpen = false"
          class="w-full py-2.5 px-3 rounded-xl bg-[#0A1936] text-white text-xs font-bold text-center block"
        >
          + Schedule New Batch
        </NuxtLink>
      </div>
    </div>

    <!-- Desktop Sidebar (Hidden on mobile, block on lg+) -->
    <aside
      class="hidden lg:flex w-64 bg-white border-r border-slate-200/80 shrink-0 flex-col justify-between min-h-[calc(100vh-4rem)] sticky top-16"
      role="navigation"
      aria-label="Academy Console Primary Navigation"
    >
      <div class="p-5 space-y-6">
        <!-- Academy Identity Card -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div class="min-w-0">
              <div class="text-xs font-bold text-slate-900 truncate">MTI Karachi</div>
              <div class="text-[11px] text-slate-600 truncate font-medium">Estd. 1998 &bull; UK MCA SQA</div>
            </div>
          </div>

          <div class="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[10px]">
            <span class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-900 font-bold border border-blue-200/80">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" aria-hidden="true"></span>
              <span>MINISTRY REG 2019</span>
            </span>
            <span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-200/80">
              CIP GRADE 1
            </span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-1">
          <div class="px-3 pb-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            Academy Operations
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

        <!-- Quick Action: Schedule Batch CTA -->
        <div class="pt-2">
          <NuxtLink
            to="/institute/batches"
            class="w-full py-2.5 px-3 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold transition shadow-xs flex items-center justify-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Schedule New Batch</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom System Status & Version -->
      <div class="p-5 border-t border-slate-200/80 space-y-2.5">
        <div class="flex items-center justify-between text-[11px]">
          <span class="text-slate-600 font-medium">Academy Operating System</span>
          <span class="font-mono text-[10px] text-emerald-800 font-bold flex items-center space-x-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
            <span>Online</span>
          </span>
        </div>
        <div class="text-[10px] font-mono text-slate-500 flex items-center justify-between">
          <span>v1.2.0 Academy OS</span>
          <NuxtLink
            to="/"
            class="hover:text-blue-700 font-sans font-semibold transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded"
          >
            Public Site &rarr;
          </NuxtLink>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileOpen = ref(false);

function isActive(path: string) {
  if (path === '/institute/dashboard') {
    return route.path === '/institute/dashboard' || route.path === '/institute' || route.path === '/institute/';
  }
  return route.path.startsWith(path);
}

const navItems = [
  {
    path: '/institute/dashboard',
    label: 'Ops Command',
    badge: 'Live',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
  },
  {
    path: '/institute/courses',
    label: 'Course Catalog',
    badge: '18',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
  },
  {
    path: '/institute/batches',
    label: 'Batch & Seat Radar',
    badge: '8 Batches',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
  },
  {
    path: '/institute/certificates',
    label: 'Certificate Issuance',
    badge: 'QR Stamped',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
  },
  {
    path: '/institute/revenue',
    label: 'Escrow & Revenue',
    badge: '90% Escrow',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  },
  {
    path: '/institute/jobs',
    label: 'Recruiter & Jobs',
    badge: 'ATS',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
  },
  {
    path: '/institute/webinars',
    label: 'Webinars & Streams',
    badge: 'Live Bridge',
    iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`,
  },
];
</script>
