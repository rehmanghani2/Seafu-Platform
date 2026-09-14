<template>
  <div class="min-h-screen" style="background:#070D18; color:#e2e8f0;">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. HERO SECTION                                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="relative pt-16 pb-24 overflow-hidden border-b" style="border-color:#0c1a2e; background:radial-gradient(ellipse at 50% 0%, #0369a118 0%, #070d18 70%);">
      <!-- Background Cyber Grid Accent -->
      <div class="absolute inset-0 opacity-10 pointer-events-none"
        style="background-image:linear-gradient(to right, #00E5FF 1px, transparent 1px), linear-gradient(to bottom, #00E5FF 1px, transparent 1px); background-size:48px 48px;">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Authority Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 border"
            style="background:#0369A115; border-color:#0369A140; color:#00E5FF;">
            <span class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></span>
            <span>DIRECTORATE GENERAL OF SHIPPING APPROVED NETWORK</span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            The Maritime Authority & <br />
            <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Certification Operating System
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style="color:#94a3b8;">
            Search, reserve, and complete DG-approved STCW courses with atomic seat guarantees. Hold cryptographic ECDSA certificate dossiers verified at ports worldwide.
          </p>

          <!-- ── Interactive Live Search Bar ────────────────────────────── -->
          <div class="mt-10 p-3 rounded-2xl border shadow-2xl max-w-3xl mx-auto"
            style="background:#0a1628e6; border-color:#0369A150; backdrop-filter:blur(12px);">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
              <!-- Search Input -->
              <div class="p-2.5 rounded-xl border" style="background:#070D18; border-color:#1e3a5f;">
                <label class="text-[10px] font-mono tracking-wider block" style="color:#64748b;">COURSE / KEYWORD</label>
                <input v-model="searchQuery" type="text" placeholder="e.g. Advanced Fire Fighting"
                  class="w-full bg-transparent text-xs text-white outline-none mt-0.5" />
              </div>

              <!-- Category Select -->
              <div class="p-2.5 rounded-xl border" style="background:#070D18; border-color:#1e3a5f;">
                <label class="text-[10px] font-mono tracking-wider block" style="color:#64748b;">CATEGORY</label>
                <select v-model="selectedCategory" class="w-full bg-transparent text-xs text-slate-200 outline-none mt-0.5">
                  <option value="" style="background:#070D18;">All STCW Categories</option>
                  <option value="STCW_BASIC" style="background:#070D18;">Basic Safety (BST)</option>
                  <option value="STCW_ADVANCED" style="background:#070D18;">Advanced Modular (AFF/PSCRB)</option>
                  <option value="SIMULATOR" style="background:#070D18;">Simulator (ECDIS/Radar)</option>
                  <option value="REFRESHER" style="background:#070D18;">Refresher Revalidation</option>
                </select>
              </div>

              <!-- Action Button -->
              <button @click="handleSearch"
                class="flex items-center justify-center gap-2 rounded-xl font-bold text-xs py-3 sm:py-0 transition"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                <span>⚓ Search Courses</span>
              </button>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="flex items-center justify-center gap-4 mt-6 text-xs font-medium" style="color:#64748b;">
            <span>Popular:</span>
            <NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-400 transition underline">Advanced Fire Fighting</NuxtLink>
            <NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-cyan-400 transition underline">PSCRB</NuxtLink>
            <NuxtLink to="/courses?category=SIMULATOR" class="hover:text-cyan-400 transition underline">ECDIS</NuxtLink>
            <NuxtLink to="/jobs" class="hover:text-cyan-400 transition underline">Master Mariner Jobs</NuxtLink>
          </div>
        </div>

        <!-- ── Live Metrics Ticker Bar ──────────────────────────────────── -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          <div class="rounded-xl p-5 border text-center" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-2xl sm:text-3xl font-black" style="color:#00E5FF;">42+</div>
            <div class="text-xs font-mono mt-1" style="color:#64748b;">DG APPROVED ACADEMIES</div>
          </div>
          <div class="rounded-xl p-5 border text-center" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-2xl sm:text-3xl font-black" style="color:#00E5FF;">18,400+</div>
            <div class="text-xs font-mono mt-1" style="color:#64748b;">VERIFIED INDOS SEAFARERS</div>
          </div>
          <div class="rounded-xl p-5 border text-center" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-2xl sm:text-3xl font-black" style="color:#22c55e;">100%</div>
            <div class="text-xs font-mono mt-1" style="color:#64748b;">ECDSA CRYPTO INTEGRITY</div>
          </div>
          <div class="rounded-xl p-5 border text-center" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-2xl sm:text-3xl font-black" style="color:#a78bfa;">0%</div>
            <div class="text-xs font-mono mt-1" style="color:#64748b;">SEAT OVERBOOKING RISK</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. FOUR PILLARS OF THE SEAFU PLATFORM                           -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="text-xs font-mono tracking-widest uppercase mb-2" style="color:#00E5FF;">
            CORE CAPABILITIES
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            Engineered for India's Merchant Navy
          </h2>
          <p class="mt-3 text-sm sm:text-base" style="color:#64748b;">
            Eliminating paperwork friction, fake certificates, and booking uncertainty with DG Shipping compliance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Pillar 1 -->
          <div class="rounded-2xl p-6 border transition flex flex-col justify-between group hover:border-cyan-500"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style="background:#0369A120; border:1px solid #0369A140;">
                ⚓
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                Atomic Seat Quota Booking
              </h3>
              <p class="text-xs leading-relaxed" style="color:#64748b;">
                10-minute atomic reservation engine ensures zero double-booking. Dual invoicing with GST 18%, TDS 1%, and instant payment verification via Razorpay & Stripe.
              </p>
            </div>
            <NuxtLink to="/courses" class="mt-6 text-xs font-bold flex items-center gap-1" style="color:#00E5FF;">
              <span>Explore Batches</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- Pillar 2 -->
          <div class="rounded-2xl p-6 border transition flex flex-col justify-between group hover:border-cyan-500"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style="background:#00E5FF15; border:1px solid #00E5FF30;">
                🔐
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                Cryptographic STCW Dossier
              </h3>
              <p class="text-xs leading-relaxed" style="color:#64748b;">
                Tamper-proof digital credentials signed with ECDSA asymmetric keypairs. Incorporates biometric attendance records and offline Paris/Tokyo MOU PSC verification.
              </p>
            </div>
            <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA" class="mt-6 text-xs font-bold flex items-center gap-1" style="color:#00E5FF;">
              <span>View Sample Dossier</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- Pillar 3 -->
          <div class="rounded-2xl p-6 border transition flex flex-col justify-between group hover:border-cyan-500"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style="background:#22c55e15; border:1px solid #22c55e30;">
                💼
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                Maritime Recruitment ATS
              </h3>
              <p class="text-xs leading-relaxed" style="color:#64748b;">
                Shipboard and shore-based job portal. 1-click apply automatically links your verified INDoS credentials, CDC records, and STCW certificate vault to recruiters.
              </p>
            </div>
            <NuxtLink to="/jobs" class="mt-6 text-xs font-bold flex items-center gap-1" style="color:#00E5FF;">
              <span>Browse Maritime Jobs</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- Pillar 4 -->
          <div class="rounded-2xl p-6 border transition flex flex-col justify-between group hover:border-cyan-500"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style="background:#8b5cf615; border:1px solid #8b5cf630;">
                🌊
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                Maritime Knowledge Forum
              </h3>
              <p class="text-xs leading-relaxed" style="color:#64748b;">
                11 domain discussion channels covering STCW Manila amendments, PSC inspection checklists, CoC promotion oral prep, and maritime law with verified mariners.
              </p>
            </div>
            <NuxtLink to="/community" class="mt-6 text-xs font-bold flex items-center gap-1" style="color:#00E5FF;">
              <span>Join Discussions</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. INTERACTIVE VERIFICATION PREVIEW                             -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#0a162850;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-2" style="color:#00E5FF;">
              ZERO FORGERY · INSTANT SCAN
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Port State Control Verification Terminal
            </h2>
            <p class="mt-4 text-sm leading-relaxed" style="color:#94a3b8;">
              When signing onto vessels in Rotterdam, Singapore, or Mumbai, port officers scan your unique cryptographic QR code to instantly verify your DG credentials without relying on fragile internet connections.
            </p>

            <div class="space-y-4 mt-8">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style="background:#22c55e20; color:#22c55e;">✓</span>
                <div>
                  <div class="text-sm font-bold text-white">secp256k1 ECDSA Asymmetric Signing</div>
                  <div class="text-xs mt-0.5" style="color:#64748b;">Mathematically unforgeable digital signature verified against DG Shipping root authority.</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style="background:#22c55e20; color:#22c55e;">✓</span>
                <div>
                  <div class="text-sm font-bold text-white">Biometric Attendance Logs & Merkle Proof</div>
                  <div class="text-xs mt-0.5" style="color:#64748b;">100% verified classroom and practical simulator hours linked directly to the candidate's dossier.</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style="background:#22c55e20; color:#22c55e;">✓</span>
                <div>
                  <div class="text-sm font-bold text-white">Paris MOU & Tokyo MOU Compliant</div>
                  <div class="text-xs mt-0.5" style="color:#64748b;">Directly accepted by PSC inspection officers across 40+ international maritime conventions.</div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex gap-4">
              <NuxtLink to="/verify/IND-AFF-7714-ECDSA"
                class="px-5 py-3 rounded-xl font-bold text-xs transition"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                Test Live QR Verifier
              </NuxtLink>
              <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA"
                class="px-5 py-3 rounded-xl font-bold text-xs border transition"
                style="border-color:#1e3a5f; color:#94a3b8;">
                Inspect Dossier Ledger
              </NuxtLink>
            </div>
          </div>

          <!-- Interactive Mock Card -->
          <div class="rounded-2xl border p-6 shadow-2xl relative"
            style="background:#070D18; border-color:#0369A150;">
            <div class="flex items-center justify-between border-b pb-4 mb-4" style="border-color:#0c1a2e;">
              <div class="flex items-center gap-2">
                <span class="text-lg">🇮🇳</span>
                <div>
                  <div class="text-xs font-bold text-white">DIRECTORATE GENERAL OF SHIPPING</div>
                  <div class="text-[10px] font-mono" style="color:#00E5FF;">GOVT. OF INDIA · STCW DOSSIER</div>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold font-mono" style="background:#22c55e20; color:#22c55e;">
                ● AUTHENTIC
              </span>
            </div>

            <div class="space-y-3">
              <div class="p-3 rounded-lg" style="background:#0a1628; border:1px solid #1e3a5f;">
                <div class="text-[10px] font-mono text-slate-400">SEAFARER / HOLDER</div>
                <div class="text-sm font-bold text-white mt-0.5">Capt. Arvind Nair</div>
                <div class="text-xs font-mono" style="color:#00E5FF;">INDoS: 08ZL9431 · Master FG (Class I)</div>
              </div>

              <div class="p-3 rounded-lg" style="background:#0a1628; border:1px solid #1e3a5f;">
                <div class="text-[10px] font-mono text-slate-400">CERTIFICATE TITLE</div>
                <div class="text-sm font-bold text-white mt-0.5">Advanced Fire Fighting (AFF) — STCW VI/3</div>
                <div class="text-xs text-slate-400">Maritime Training Academy Mumbai · Valid to 2029</div>
              </div>

              <div class="p-3 rounded-lg font-mono text-[10px] break-all" style="background:#050912; border:1px solid #0c1a2e; color:#38bdf8;">
                ECDSA SIG: 0x3f8a9b1c7d2e4f5a6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. CALL TO ACTION BANNER                                        -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 relative overflow-hidden" style="background:linear-gradient(135deg, #0369a125 0%, #0a1628 100%);">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="text-xs font-mono tracking-widest uppercase mb-3" style="color:#00E5FF;">
          JOIN THE NATIONAL MARITIME NETWORK
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-white leading-tight">
          Ready to Command Your Maritime Career?
        </h2>
        <p class="mt-4 text-sm sm:text-base max-w-2xl mx-auto" style="color:#94a3b8;">
          Join over 18,000+ Indian seafarers booking DG-approved courses, managing cryptographic certificates, and securing top shipboard postings.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/auth/register?role=SEAFARER"
            class="px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
            ⚓ Register as Seafarer
          </NuxtLink>
          <NuxtLink to="/auth/register?role=INSTITUTE"
            class="px-8 py-3.5 rounded-xl font-bold text-sm border transition"
            style="border-color:#0369A1; color:#00E5FF; background:#0369A115;">
            🏛️ Onboard Training Institute
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

useHead({
  title: 'The Seafu · Maritime Authority Network & STCW Platform',
  meta: [
    {
      name: 'description',
      content: 'National digital platform for DG Shipping approved Merchant Navy courses, cryptographic STCW certificate dossiers, and maritime recruitment.',
    },
  ],
});

const router = useRouter();
const searchQuery = ref('');
const selectedCategory = ref('');

function handleSearch() {
  const query: Record<string, string> = {};
  if (searchQuery.value) query.search = searchQuery.value;
  if (selectedCategory.value) query.category = selectedCategory.value;
  router.push({ path: '/courses', query });
}
</script>
