<template>
  <div class="flex flex-col min-h-screen" style="background:#070D18; color:#e2e8f0;">
    <!-- ── TOP NETWORK STATUS TICKER ────────────────────────────────────── -->
    <div class="border-b py-1.5 px-4 text-xs font-mono" style="background:#050912; border-color:#0c1a2e; color:#64748b;">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></span>
            <span style="color:#00E5FF;">DG SHIPPING MESH: ONLINE</span>
          </div>
          <span class="hidden sm:inline" style="color:#1e3a5f;">|</span>
          <span class="hidden sm:inline">PARIS MOU / TOKYO MOU ECDSA COMPLIANT</span>
        </div>
        <div class="flex items-center gap-3">
          <span>PORT STATE CONTROL: 100% CLEARANCE</span>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition" style="color:#00E5FF;">
            [SCAN QR]
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ── NAVIGATION HEADER ────────────────────────────────────────────── -->
    <header class="sticky top-0 z-50 border-b backdrop-blur-md" style="background:#0a1628d9; border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
            style="background:linear-gradient(135deg,#0369A1,#00E5FF); color:#070D18;">
            ⚓
          </div>
          <div>
            <div class="font-black tracking-tight text-base leading-none" style="color:#e2e8f0;">
              THE SEAFU
            </div>
            <div class="text-[9px] font-mono tracking-widest mt-0.5" style="color:#00E5FF;">
              MARITIME AUTHORITY NETWORK
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider">
          <NuxtLink to="/courses" class="hover:text-cyan-400 transition"
            :style="route.path.startsWith('/courses') ? 'color:#00E5FF;' : 'color:#94a3b8;'">
            Course Catalog
          </NuxtLink>
          <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition"
            :style="route.path.startsWith('/vault') ? 'color:#00E5FF;' : 'color:#94a3b8;'">
            Certificate Dossier
          </NuxtLink>
          <NuxtLink to="/jobs" class="hover:text-cyan-400 transition"
            :style="route.path.startsWith('/jobs') ? 'color:#00E5FF;' : 'color:#94a3b8;'">
            Maritime Jobs
          </NuxtLink>
          <NuxtLink to="/community" class="hover:text-cyan-400 transition"
            :style="route.path.startsWith('/community') ? 'color:#00E5FF;' : 'color:#94a3b8;'">
            Community Hub
          </NuxtLink>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition"
            :style="route.path.startsWith('/verify') ? 'color:#00E5FF;' : 'color:#94a3b8;'">
            QR Verifier
          </NuxtLink>
        </nav>

        <!-- Auth CTAs -->
        <div class="flex items-center space-x-3">
          <template v-if="authStore.isAuthenticated">
            <NuxtLink :to="userDashboardRoute"
              class="text-xs font-bold px-3.5 py-2 rounded-lg border transition"
              style="border-color:#0369A1; color:#00E5FF; background:#0369A120;">
              Dashboard →
            </NuxtLink>
            <button @click="authStore.logout()"
              class="text-xs font-medium px-3 py-2 rounded-lg border transition"
              style="border-color:#1e3a5f; color:#64748b;">
              Sign Out
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login"
              class="text-xs font-medium px-3 py-2 transition"
              style="color:#94a3b8;">
              Log In
            </NuxtLink>
            <NuxtLink to="/auth/register"
              class="text-xs font-bold px-4 py-2 rounded-lg transition"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              Get Started
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- ── PAGE CONTENT ────────────────────────────────────────────────── -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- ── FOOTER ──────────────────────────────────────────────────────── -->
    <footer class="border-t py-14" style="background:#050912; border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <!-- Col 1: Brand -->
        <div class="md:col-span-2 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚓</span>
            <span class="text-lg font-black tracking-tight text-white">THE SEAFU</span>
          </div>
          <p class="text-xs leading-relaxed max-w-sm" style="color:#64748b;">
            The national maritime authority platform for DG Shipping approved course scheduling, atomic seat reservations, cryptographic ECDSA certificate vaults, and recruitment intelligence.
          </p>
          <div class="flex items-center gap-2 pt-2 text-xs font-mono" style="color:#00E5FF;">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>DIRECTORATE GENERAL OF SHIPPING COMPLIANT</span>
          </div>
        </div>

        <!-- Col 2: Training -->
        <div>
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-3" style="color:#00E5FF;">STCW COURSES</h4>
          <ul class="space-y-2 text-xs" style="color:#64748b;">
            <li><NuxtLink to="/courses?category=STCW_BASIC" class="hover:text-cyan-400 transition">Basic Safety Training (BST)</NuxtLink></li>
            <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-400 transition">Advanced Fire Fighting (AFF)</NuxtLink></li>
            <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-400 transition">PSCRB Survival Craft</NuxtLink></li>
            <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-400 transition">ECDIS & Radar Simulator</NuxtLink></li>
            <li><NuxtLink to="/courses?category=REFRESHER" class="hover:text-cyan-400 transition">Modular Revalidation</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Seafarer Services -->
        <div>
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-3" style="color:#00E5FF;">SEAFARER SERVICES</h4>
          <ul class="space-y-2 text-xs" style="color:#64748b;">
            <li><NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition">Cryptographic STCW Dossier</NuxtLink></li>
            <li><NuxtLink to="/jobs" class="hover:text-cyan-400 transition">Shipboard & Shore Jobs</NuxtLink></li>
            <li><NuxtLink to="/community" class="hover:text-cyan-400 transition">Knowledge Community</NuxtLink></li>
            <li><NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition">Instant PSC QR Verifier</NuxtLink></li>
            <li><NuxtLink to="/auth/register?role=SEAFARER" class="hover:text-cyan-400 transition">Create INDoS Profile</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Governance -->
        <div>
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-3" style="color:#00E5FF;">INSTITUTES & GOVERNANCE</h4>
          <ul class="space-y-2 text-xs" style="color:#64748b;">
            <li><NuxtLink to="/auth/register?role=INSTITUTE" class="hover:text-cyan-400 transition">Institute Accreditation</NuxtLink></li>
            <li><NuxtLink to="/admin/dashboard" class="hover:text-cyan-400 transition">Admin Governance Console</NuxtLink></li>
            <li><NuxtLink to="/bookings/checkout" class="hover:text-cyan-400 transition">Dual Invoicing Engine</NuxtLink></li>
            <li><NuxtLink to="/jobs/my-applications" class="hover:text-cyan-400 transition">Recruiter ATS Hub</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs"
        style="border-color:#0c1a2e; color:#475569;">
        <div>© 2026 The Seafu Platform. Merchant Navy Training & Cryptographic Authority.</div>
        <div class="flex items-center gap-4 mt-3 sm:mt-0 font-mono text-[11px]">
          <span>DG/TR/IN/2026</span>
          <span>•</span>
          <span>SOLAS / STCW 2010</span>
          <span>•</span>
          <span>MLC 2006</span>
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
