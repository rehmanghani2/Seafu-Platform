<template>
  <div class="flex flex-col min-h-screen font-sans" style="background:#070D18; color:#e2e8f0;">
    <!-- ── TOP ANNOUNCEMENT & REGULATORY TICKER ────────────────────────── -->
    <div class="border-b py-2 px-4 text-[11px] font-mono" style="background:#040711; border-color:#0c1a2e; color:#94a3b8;">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-2 py-0.5 rounded font-bold" style="background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b40;">
            <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background:#fbbf24;"></span>
            <span>ADMISSIONS OPEN</span>
          </div>
          <span class="truncate" style="color:#cbd5e1;">
            Pre-Sea Cadet Batch 54 Intake (BS Nautical Science &amp; Marine Engineering) — Applications Closing Soon
          </span>
        </div>

        <div class="flex items-center gap-4 shrink-0 text-[11px]">
          <span class="hidden md:inline" style="color:#64748b;">DG Shipping &amp; IMO Model Compliant</span>
          <span class="hidden md:inline" style="color:#1e3a5f;">|</span>
          <a href="tel:+912261204000" class="hover:text-cyan-400 transition flex items-center gap-1" style="color:#38bdf8;">
            <span>📞</span>
            <span>+91 22 6120 4000</span>
          </a>
          <span style="color:#1e3a5f;">|</span>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="font-bold hover:text-cyan-300 transition flex items-center gap-1" style="color:#00E5FF;">
            <span>🛡️</span>
            <span>PSC QR Verifier</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ── MAIN NAVIGATION HEADER ──────────────────────────────────────── -->
    <header class="sticky top-0 z-50 border-b backdrop-blur-xl transition-all" style="background:#0a1628f2; border-color:#0f2238;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <!-- Brand / Crest Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg transition group-hover:scale-105"
            style="background:linear-gradient(135deg,#0369A1,#00E5FF); color:#070D18; box-shadow:0 0 20px #00e5ff30;">
            ⚓
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-black tracking-tight text-lg text-white group-hover:text-cyan-400 transition">
                THE SEAFU
              </span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                style="background:#0369A130; color:#38bdf8; border:1px solid #0369A160;">
                ACADEMY
              </span>
            </div>
            <div class="text-[9px] font-mono tracking-wider mt-0.5" style="color:#64748b;">
              DG SHIPPING GOVT. OF INDIA APPROVED · IND-MH-042
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Menu -->
        <nav class="hidden lg:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider">
          <NuxtLink to="/courses" class="hover:text-cyan-400 transition py-1"
            :style="route.path.startsWith('/courses') ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            Programs &amp; Courses
          </NuxtLink>
          <NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-400 transition py-1"
            :style="route.query.category === 'SIMULATOR' ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            Simulators
          </NuxtLink>
          <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition py-1"
            :style="route.path.startsWith('/vault') ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            STCW Dossier
          </NuxtLink>
          <NuxtLink to="/jobs" class="hover:text-cyan-400 transition py-1"
            :style="route.path.startsWith('/jobs') ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            Jobs &amp; Sea Service
          </NuxtLink>
          <NuxtLink to="/community" class="hover:text-cyan-400 transition py-1"
            :style="route.path.startsWith('/community') ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            Mariners Forum
          </NuxtLink>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition py-1"
            :style="route.path.startsWith('/verify') ? 'color:#00E5FF; border-bottom:2px solid #00E5FF;' : 'color:#cbd5e1;'">
            Verification
          </NuxtLink>
        </nav>

        <!-- Right Utility & Portal Actions -->
        <div class="flex items-center space-x-3">
          <template v-if="authStore.isAuthenticated">
            <NuxtLink :to="userDashboardRoute"
              class="text-xs font-bold px-4 py-2 rounded-lg border transition flex items-center gap-1.5"
              style="border-color:#0369A1; color:#00E5FF; background:#0369A125;">
              <span>🧭</span>
              <span>Portal Dashboard</span>
            </NuxtLink>
            <button @click="authStore.logout()"
              class="text-xs font-medium px-3 py-2 rounded-lg border transition"
              style="border-color:#1e3a5f; color:#64748b;">
              Sign Out
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login"
              class="text-xs font-semibold px-3 py-2 transition"
              style="color:#94a3b8;">
              Portal Login
            </NuxtLink>
            <NuxtLink to="/auth/register?role=SEAFARER"
              class="text-xs font-bold px-4 py-2.5 rounded-lg transition shadow-lg flex items-center gap-1.5"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff; box-shadow:0 4px 14px #0284c740;">
              <span>Apply for Admission</span>
              <span>→</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- ── MAIN PAGE CONTENT ───────────────────────────────────────────── -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- ── FOOTER: COMPLETE MARITIME DIRECTORY ─────────────────────────── -->
    <footer class="border-t py-16" style="background:#040711; border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <!-- Col 1: Academy Profile -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base"
                style="background:linear-gradient(135deg,#0369A1,#00E5FF); color:#070D18;">
                ⚓
              </div>
              <div>
                <div class="font-black tracking-tight text-lg text-white">THE SEAFU MARITIME ACADEMY</div>
                <div class="text-[9px] font-mono tracking-widest text-cyan-400">DG SHIPPING RECOGNISED MARITIME INSTITUTION</div>
              </div>
            </div>
            <p class="text-xs leading-relaxed max-w-sm" style="color:#64748b;">
              Premier centre of maritime excellence delivering pre-sea cadet diplomas, DNV-GL Class-A simulation, advanced STCW revalidations, and direct placement pipelines across 40+ international shipping fleets.
            </p>
            <div class="space-y-1.5 text-xs" style="color:#94a3b8;">
              <div class="flex items-center gap-2">
                <span style="color:#00E5FF;">📍</span>
                <span>Marine Campus: Sector 11, CBD Belapur, Navi Mumbai 400614, India</span>
              </div>
              <div class="flex items-center gap-2">
                <span style="color:#00E5FF;">✉️</span>
                <span>admissions@seafu.in · verification@seafu.in</span>
              </div>
              <div class="flex items-center gap-2">
                <span style="color:#00E5FF;">☎️</span>
                <span>Boardline: +91 22 6120 4000 / 4001 / 4002</span>
              </div>
            </div>
          </div>

          <!-- Col 2: Core Programs -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-4" style="color:#00E5FF;">
              PRE-SEA &amp; DEGREES
            </h4>
            <ul class="space-y-2.5 text-xs" style="color:#64748b;">
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">GP-III General Purpose Rating</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">BS Nautical Science (Deck)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">BE Marine Engineering (Engine)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">Electro-Technical Officer (ETO)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">Graduate Marine Engineering (GME)</NuxtLink></li>
              <li><NuxtLink to="/courses" class="hover:text-cyan-300 transition">Deck Cadet IMU-CET Prep</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 3: STCW Modular & Simulators -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-4" style="color:#00E5FF;">
              STCW &amp; SIMULATORS
            </h4>
            <ul class="space-y-2.5 text-xs" style="color:#64748b;">
              <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-300 transition">Advanced Fire Fighting (AFF)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-300 transition">PSCRB Survival Craft</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">Full Mission Bridge Simulator</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">Engine Room Simulator (ERS)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">Liquid Cargo Handling (LCHS)</NuxtLink></li>
              <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-300 transition">High Voltage Switchgear (HV-MEC)</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 4: Accreditation & Authority -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider mb-4" style="color:#00E5FF;">
              ACCREDITATIONS
            </h4>
            <div class="space-y-2 text-xs" style="color:#64748b;">
              <div class="p-2.5 rounded-lg border" style="background:#070D18; border-color:#1e3a5f;">
                <div class="font-bold text-white text-[11px]">DG SHIPPING, GOVT. OF INDIA</div>
                <div class="text-[10px] font-mono text-cyan-400 mt-0.5">Approval Code: DG/TR/MH/2026/01</div>
              </div>
              <div class="p-2.5 rounded-lg border" style="background:#070D18; border-color:#1e3a5f;">
                <div class="font-bold text-white text-[11px]">UK MCA / SQA GLASGOW ALLIANCE</div>
                <div class="text-[10px] font-mono text-cyan-400 mt-0.5">UK Outpost Validation ID: UK-MCA-9022</div>
              </div>
              <div class="p-2.5 rounded-lg border" style="background:#070D18; border-color:#1e3a5f;">
                <div class="font-bold text-white text-[11px]">DNV-GL MARITIME SIMULATORS</div>
                <div class="text-[10px] font-mono text-cyan-400 mt-0.5">Standard DNV-ST-0033 Class-A</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Statutory Bottom Bar -->
        <div class="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style="border-color:#0c1a2e; color:#475569;">
          <div>
            © 2026 The Seafu Platform &amp; Maritime Academy. Directorate General of Shipping Accredited.
          </div>
          <div class="flex items-center gap-4 font-mono text-[11px]">
            <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-400 transition">Online Verification</NuxtLink>
            <span>•</span>
            <NuxtLink to="/community" class="hover:text-cyan-400 transition">Circulars &amp; Notices</NuxtLink>
            <span>•</span>
            <NuxtLink to="/jobs" class="hover:text-cyan-400 transition">Cadet Placements</NuxtLink>
            <span>•</span>
            <span>SOLAS 1974 · STCW 2010 Manila · MLC 2006</span>
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
