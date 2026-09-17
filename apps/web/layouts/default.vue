<template>
  <div class="flex flex-col min-h-screen bg-[#070D18] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 antialiased">
    <!-- ── TOP STATUTORY TICKER & STATUTORY NOTICE ────────────────────────── -->
    <div class="bg-[#050A14] border-b border-[#0c1a2e] text-[11px] py-1.5 px-4 font-mono">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2.5 text-slate-300">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span class="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">
            PORT/STATE CONTROL COMPLIANCE NOTICE &bull; DG PORTS &amp; IMO ACCREDITED
          </span>
          <span class="text-slate-600 hidden sm:inline">|</span>
          <span class="text-slate-400 hidden sm:inline">KPT Apprentice Practical Grounds &bull; June 2026 Batch Intake Active</span>
        </div>

        <div class="flex items-center space-x-4 text-slate-400 text-[11px]">
          <span class="hidden md:inline text-slate-500">STCW 2010 Manila &bull; SOLAS &bull; MLC 2006</span>
          <span class="text-slate-700 hidden md:inline">|</span>
          <a href="tel:+923366668475" class="hover:text-cyan-300 transition flex items-center space-x-1">
            <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+92 336 6668475</span>
          </a>
          <span class="text-slate-700">|</span>
          <NuxtLink to="/verification" class="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1">
            <svg class="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>mtiverification.com</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ── MAIN NAVIGATION HEADER ──────────────────────────────────────── -->
    <header class="sticky top-0 z-50 bg-[#081220]/95 backdrop-blur-md border-b border-[#0f243d] transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <!-- Brand / Maritime Crest -->
        <NuxtLink to="/" class="flex items-center space-x-3 group shrink-0">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-slate-950 p-0.5 shadow-lg shadow-cyan-500/20">
            <div class="w-full h-full bg-[#08101d] rounded-[9px] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <span class="font-black text-white text-base tracking-wider group-hover:text-cyan-400 transition">
                THE SEAFU
              </span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded font-black text-cyan-300 bg-cyan-950/80 border border-cyan-800/50 uppercase">
                MARITIME
              </span>
            </div>
            <div class="text-[9px] font-mono text-slate-400 tracking-wider">
              DG PORTS &amp; SHIPPING APPROVED &bull; MTI ECOSYSTEM
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Menu -->
        <nav class="hidden lg:flex items-center space-x-5 text-xs font-bold uppercase tracking-wider font-mono">
          <NuxtLink
            to="/courses"
            class="py-1 transition hover:text-cyan-400"
            :class="route.path.startsWith('/courses') && !route.query.category ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Programs &amp; Batches
          </NuxtLink>
          <NuxtLink
            to="/courses?category=SIMULATOR"
            class="py-1 transition hover:text-cyan-400"
            :class="route.query.category === 'SIMULATOR' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Simulators
          </NuxtLink>
          <NuxtLink
            to="/seafarer/dashboard"
            class="py-1 transition hover:text-cyan-400"
            :class="route.path.startsWith('/seafarer') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Cadet Vault
          </NuxtLink>
          <NuxtLink
            to="/institute/dashboard"
            class="py-1 transition hover:text-cyan-400"
            :class="route.path.startsWith('/institute') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Institute Ops
          </NuxtLink>
          <NuxtLink
            to="/jobs"
            class="py-1 transition hover:text-cyan-400"
            :class="route.path.startsWith('/jobs') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Sea Service Jobs
          </NuxtLink>
          <NuxtLink
            to="/community"
            class="py-1 transition hover:text-cyan-400"
            :class="route.path.startsWith('/community') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            Mariners Forum
          </NuxtLink>
          <NuxtLink
            to="/verify/IND-AFF-7714-ECDSA"
            class="py-1 transition hover:text-cyan-400 flex items-center space-x-1"
            :class="route.path.startsWith('/verify') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'"
          >
            <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Verification</span>
          </NuxtLink>
        </nav>

        <!-- Right User / Auth Controls -->
        <div class="flex items-center space-x-3 shrink-0">
          <template v-if="authStore.isAuthenticated">
            <NuxtLink
              :to="userDashboardRoute"
              class="text-xs font-bold px-3.5 py-1.5 rounded-xl border border-cyan-500/40 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 transition flex items-center space-x-1.5 font-mono"
            >
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{{ authStore.user?.fullName?.split(' ')[0] || 'Command' }}</span>
            </NuxtLink>
            <button
              @click="authStore.logout()"
              class="text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition font-mono"
            >
              Sign Out
            </button>
          </template>

          <template v-else>
            <NuxtLink
              to="/auth/login"
              class="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/40 hover:bg-slate-800 transition font-mono"
            >
              Portal Login
            </NuxtLink>
            <NuxtLink
              to="/courses"
              class="text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center space-x-1.5 uppercase font-mono"
            >
              <span>Apply &bull; June 2026</span>
              <svg class="w-3 h-3 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

    <!-- ── FOOTER: AUTHORITATIVE MARITIME DIRECTORY ────────────────────── -->
    <footer class="bg-[#050A14] border-t border-[#0c1a2e] pt-14 pb-8 text-slate-400 text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          <!-- Col 1: Brand & Profile -->
          <div class="lg:col-span-2 space-y-3.5">
            <div class="flex items-center space-x-3">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shadow-md">
                <div class="w-full h-full bg-[#08101d] rounded-[9px] flex items-center justify-center text-cyan-400 font-bold">
                  ⚓
                </div>
              </div>
              <div>
                <div class="font-black text-white text-base tracking-wide">THE SEAFU MARITIME PLATFORM</div>
                <div class="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">
                  CENTRALIZED MERCHANT NAVY TRAINING INFRASTRUCTURE
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
              The statutory digital ecosystem for maritime training, DG-approved pre-sea cadet programs, DNV-GL Class-A simulation suites, instant online certificate verification, and sea-time crewing articulation.
            </p>

            <div class="space-y-1.5 text-xs text-slate-400 font-mono">
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400">&bull;</span>
                <span>Practical Grounds: KPT Apprentice Training Yard, Keamari, Karachi</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400">&bull;</span>
                <span>Admissions &amp; Helpline: +92 336 6668475 &bull; info@mti.edu.pk</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400">&bull;</span>
                <span>Public Verification Registry: mtiverification.com</span>
              </div>
            </div>
          </div>

          <!-- Col 2: Pre-Sea & Diplomas -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              PRE-SEA &amp; DIPLOMAS
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">GP-III General Purpose Rating</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">AD Nautical Science (SQA Level 8)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">AD Marine Engineering (HND)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">City of Glasgow College Route</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">Electro-Technical Officer (ETO)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">Pre-Sea Cadet Placement Roster</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 3: Simulators & STCW -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              SIMULATORS &amp; STCW
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">ECDIS Simulator (IMO 1.27)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">5-Console Engine Room Simulator</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">Liquid Cargo Handling (LCHS)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">High Voltage 6.6 kV Switchgear</NuxtLink></li>
              <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-300 transition">Advance Fire Fighting (AFF)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=COMPETENCY" class="hover:text-cyan-300 transition">GMDSS General Operator (GOC)</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 4: Statutory Accreditations -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              ACCREDITATIONS
            </h4>
            <div class="space-y-2 text-xs font-mono">
              <div class="p-2 rounded-xl bg-[#081220] border border-slate-800">
                <div class="font-bold text-white text-[11px]">DG PORTS &amp; SHIPPING</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">&check; Statutory Approval Grade 1</div>
              </div>
              <div class="p-2 rounded-xl bg-[#081220] border border-slate-800">
                <div class="font-bold text-white text-[11px]">CITY OF GLASGOW COLLEGE</div>
                <div class="text-[10px] text-cyan-300 mt-0.5">&check; UK MCA OOW Articulation</div>
              </div>
              <div class="p-2 rounded-xl bg-[#081220] border border-slate-800">
                <div class="font-bold text-white text-[11px]">DNV-GL SIMULATOR SUITE</div>
                <div class="text-[10px] text-cyan-300 mt-0.5">&check; Standard DNV-ST-0033 Class-A</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright & Statutory Strip -->
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; 1998&ndash;2026 The Seafu Platform &bull; MTI Karachi Maritime Ecosystem. All rights reserved.
          </div>
          <div class="flex items-center space-x-3">
            <NuxtLink to="/verification" class="text-amber-400 hover:text-amber-300">mtiverification.com</NuxtLink>
            <span>&bull;</span>
            <NuxtLink to="/community" class="hover:text-slate-300">Mariners Forum</NuxtLink>
            <span>&bull;</span>
            <NuxtLink to="/jobs" class="hover:text-slate-300">PNSC Placements</NuxtLink>
            <span>&bull;</span>
            <span class="text-slate-400">STCW 2010 Manila &bull; SOLAS 1974</span>
          </div>
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
