<template>
  <div class="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
    <!-- ── TOP STATUTORY TICKER & STATUTORY NOTICE ────────────────────────── -->
    <div class="bg-slate-50 border-b border-slate-200/80 text-[11px] py-2 px-4 text-slate-600">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2.5">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
          </span>
          <span class="text-blue-700 font-bold uppercase tracking-wider text-[10px]">
            PORT/STATE CONTROL COMPLIANCE &bull; IMO STCW 2010 ACCREDITED
          </span>
          <span class="text-slate-300 hidden sm:inline">|</span>
          <span class="text-slate-500 hidden sm:inline">Official Global Maritime Digital Certification Infrastructure</span>
        </div>

        <div class="flex items-center space-x-3 text-slate-500 text-[11px]">
          <span class="hidden md:inline">MLC 2006 &bull; SOLAS &bull; DG Approved</span>
          <span class="text-slate-300 hidden md:inline">|</span>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="text-blue-700 hover:text-blue-800 font-bold flex items-center space-x-1">
            <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Verify Certificate</span>
          </NuxtLink>
          <span class="text-slate-300">|</span>
          <CommonCurrencySelector />
          <span class="text-slate-300">|</span>
          <CommonLanguageSelector />
        </div>
      </div>
    </div>

    <!-- ── MAIN NAVIGATION HEADER ──────────────────────────────────────── -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <!-- Brand / Maritime Crest -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group shrink-0">
          <img
            src="/logo-crest.png"
            alt="The Seafu Crest"
            class="w-9 h-9 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
          />
          <span class="text-lg font-black text-slate-900 tracking-tight">The Seafu</span>
        </NuxtLink>

        <!-- Navigation Menu -->
        <nav class="hidden lg:flex items-center space-x-4 text-xs font-semibold text-slate-600">
          <NuxtLink to="/" class="hover:text-blue-700 transition" :class="route.path === '/' ? 'text-blue-700 font-bold' : ''">
            Home
          </NuxtLink>
          <NuxtLink to="/courses" class="hover:text-blue-700 transition" :class="route.path === '/courses' ? 'text-blue-700 font-bold' : ''">
            Courses
          </NuxtLink>
          <NuxtLink to="/courses/bundles" class="text-emerald-700 hover:text-emerald-800 transition font-bold" :class="route.path.startsWith('/courses/bundles') ? 'text-emerald-900 underline' : ''">
            Bundles
          </NuxtLink>
          <NuxtLink to="/institutes/compare" class="hover:text-blue-700 transition" :class="route.path.startsWith('/institutes') ? 'text-blue-700 font-bold' : ''">
            Compare
          </NuxtLink>
          <NuxtLink to="/webinars" class="hover:text-blue-700 transition" :class="route.path.startsWith('/webinars') ? 'text-blue-700 font-bold' : ''">
            Webinars
          </NuxtLink>
          <NuxtLink to="/publications" class="hover:text-blue-700 transition" :class="route.path.startsWith('/publications') ? 'text-blue-700 font-bold' : ''">
            Library
          </NuxtLink>
          <NuxtLink to="/jobs" class="hover:text-blue-700 transition" :class="route.path.startsWith('/jobs') ? 'text-blue-700 font-bold' : ''">
            Jobs
          </NuxtLink>
          <NuxtLink to="/community" class="hover:text-blue-700 transition" :class="route.path.startsWith('/community') ? 'text-blue-700 font-bold' : ''">
            Community
          </NuxtLink>
          <NuxtLink to="/seafarer/dashboard" class="text-blue-700 hover:text-blue-800 transition" :class="route.path.startsWith('/seafarer') ? 'font-bold' : ''">
            Seafarer Portal
          </NuxtLink>
          <NuxtLink to="/institute/dashboard" class="text-amber-700 hover:text-amber-800 transition" :class="route.path.startsWith('/institute') ? 'font-bold' : ''">
            Academy
          </NuxtLink>
          <NuxtLink to="/admin/dashboard" class="text-rose-700 hover:text-rose-800 transition" :class="route.path.startsWith('/admin') ? 'font-bold' : ''">
            Admin
          </NuxtLink>
        </nav>

        <!-- Right User / Auth Controls -->
        <div class="flex items-center space-x-3 shrink-0">
          <template v-if="authStore.isAuthenticated">
            <NuxtLink
              :to="userDashboardRoute"
              class="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition flex items-center space-x-1.5 shadow-sm"
            >
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{{ authStore.user?.fullName?.split(' ')[0] || 'Dashboard' }}</span>
            </NuxtLink>
            <button
              @click="authStore.logout()"
              class="text-xs font-medium text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
            >
              Sign Out
            </button>
          </template>

          <template v-else>
            <NuxtLink
              to="/auth/login"
              class="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg transition"
            >
              Login
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="text-xs font-bold text-white bg-[#0A1936] hover:bg-[#112752] px-4 py-2 rounded-xl shadow-sm transition flex items-center space-x-1.5"
            >
              <span>Register</span>
              <svg class="w-3.5 h-3.5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- ── MAIN PAGE CONTENT ───────────────────────────────────────────── -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- ── FOOTER: CLEAN 4-COLUMN MARITIME DIRECTORY ────────────────────── -->
    <footer class="bg-white border-t border-slate-200 pt-16 pb-12 text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
          <!-- Col 1: Brand -->
          <div class="space-y-3">
            <div class="flex items-center space-x-2.5">
              <img
                src="/logo-crest.png"
                alt="The Seafu Crest"
                class="w-8 h-8 object-contain rounded-full shadow-xs"
              />
              <span class="text-base font-extrabold text-slate-900 tracking-tight">The Seafu</span>
            </div>
            <p class="text-slate-500 leading-relaxed max-w-xs text-xs">
              Professional training and accreditation ecosystem for Merchant Navy officers and global mariners.
            </p>
          </div>

          <!-- Col 2: Quick Links -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Quick Links</div>
            <ul class="space-y-2">
              <li><NuxtLink to="/#about" class="hover:text-blue-700 transition">About Us</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-blue-700 transition">All Courses</NuxtLink></li>
              <li><NuxtLink to="/institutes/compare" class="hover:text-blue-700 transition">Compare Academies</NuxtLink></li>
              <li><NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-blue-700 transition">Certificate Audit</NuxtLink></li>
              <li><NuxtLink to="/#contact" class="hover:text-blue-700 transition">Contact Support</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 3: Legal & Privacy -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Legal &amp; Privacy</div>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-blue-700 transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-blue-700 transition">Terms of Service</a></li>
              <li><a href="#" class="hover:text-blue-700 transition">Compliance</a></li>
            </ul>
          </div>

          <!-- Col 4: Global Headquarters -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Global Headquarters</div>
            <p class="text-slate-500 leading-relaxed text-xs">
              Maritime Examination Center, Suite 400<br />
              Canary Wharf, London, UK
            </p>
          </div>
        </div>

        <div class="pt-8 text-center text-slate-400 text-[11px]">
          &copy; 2026 The Seafu. All rights reserved. Autonomous Maritime Training Systems.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const route = useRoute();
const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuth();
});

const userDashboardRoute = computed(() => {
  if (authStore.user?.role === 'SUPER_ADMIN' || authStore.user?.role === 'ADMIN') {
    return '/admin/dashboard';
  }
  if (authStore.user?.role === 'INSTITUTE_ADMIN' || authStore.user?.role === 'INSTITUTE_STAFF') {
    return '/institute/dashboard';
  }
  return '/seafarer/dashboard';
});
</script>
