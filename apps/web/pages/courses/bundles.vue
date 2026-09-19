<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
    <!-- Top Nav Header -->
    <header class="sticky top-0 z-40 bg-[#04142E]/95 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-base font-bold tracking-tight text-white">The Seafu</span>
              <span class="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">BUNDLES</span>
            </div>
            <p class="text-[10px] text-slate-400 font-mono">STCW Training Packages &amp; Career Combos</p>
          </div>
        </NuxtLink>

        <div class="flex items-center gap-3">
          <NuxtLink to="/courses" class="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Individual Courses
          </NuxtLink>
          <NuxtLink to="/webinars" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Webinars
          </NuxtLink>
          <NuxtLink to="/publications" class="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition hover:bg-white/5">
            Library
          </NuxtLink>
          <CommonCurrencySelector />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="border-b border-white/10 bg-gradient-to-b from-[#0A1628] via-[#071324] to-[#070D18] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold mb-3">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>CAREER BUNDLE PROMOTIONS · SAVE UP TO 25%</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              STCW Career Packages &amp; Simulator Combos
            </h1>
            <p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
              Consolidated training packages designed for maritime rank promotions, cadet entry, and mandatory revalidations. Single checkout holds atomic seat locks across all bundled courses simultaneously with 100% Escrow Shield protection.
            </p>
          </div>

          <!-- Active Promo Code Highlights -->
          <div class="p-4 bg-[#0C1A30] border border-white/10 rounded-2xl shadow-lg max-w-sm w-full">
            <div class="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span class="font-bold">ACTIVE PROMO CODES</span>
              <span class="text-emerald-400 font-bold">VERIFIED</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2 bg-[#070D18] rounded-xl border border-white/5 flex items-center justify-between font-mono">
                <div>
                  <span class="text-amber-300 font-bold">WOMENMARITIME</span>
                  <p class="text-[10px] text-slate-400 font-sans">30% Women Seafarer Scholarship</p>
                </div>
                <button @click="copyCoupon('WOMENMARITIME')" class="text-[10px] text-cyan-400 hover:text-white underline">Copy</button>
              </div>
              <div class="p-2 bg-[#070D18] rounded-xl border border-white/5 flex items-center justify-between font-mono">
                <div>
                  <span class="text-emerald-300 font-bold">CADET2026</span>
                  <p class="text-[10px] text-slate-400 font-sans">15% Cadetship Discount</p>
                </div>
                <button @click="copyCoupon('CADET2026')" class="text-[10px] text-cyan-400 hover:text-white underline">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bundles Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article
          v-for="bundle in bundles"
          :key="bundle.id"
          class="bg-[#0C1628] border border-white/10 hover:border-amber-400/50 rounded-2xl p-6 flex flex-col justify-between transition duration-300 shadow-xl relative overflow-hidden"
        >
          <!-- Top Tag & Savings Badge -->
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-mono font-bold uppercase tracking-wider">
                {{ bundle.savingsBadge }}
              </span>
              <span class="text-xs font-mono font-bold text-slate-400">
                CODE: <span class="text-cyan-400">{{ bundle.bundleCode }}</span>
              </span>
            </div>

            <h2 class="text-xl font-bold text-white leading-snug">
              {{ bundle.title }}
            </h2>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              {{ bundle.description }}
            </p>

            <!-- Metrics Chips -->
            <div class="flex flex-wrap items-center gap-3 my-4 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-lg bg-[#070D18] border border-white/5 text-slate-300">
                ⏱ {{ bundle.totalDays }} Days Total
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-[#070D18] border border-white/5 text-emerald-400 font-bold">
                📜 {{ bundle.certificateCount }} STCW Certificates
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-[#070D18] border border-white/5 text-cyan-300">
                🏛 {{ bundle.instituteName }}
              </span>
            </div>

            <!-- Included Courses List -->
            <div class="p-4 bg-[#070D18] rounded-xl border border-white/5 space-y-2 mb-4">
              <p class="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                Courses Included in this Bundle:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div
                  v-for="(course, cIdx) in bundle.courses"
                  :key="cIdx"
                  class="flex items-center gap-2 text-xs text-slate-300"
                >
                  <svg class="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="truncate">{{ course }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Price & Action Footer -->
          <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-baseline gap-2">
                <span class="text-xs text-slate-500 line-through font-mono">
                  {{ currencyStore.format(bundle.originalPriceINR) }}
                </span>
                <span class="text-2xl font-black font-mono text-[#00E5FF]">
                  {{ currencyStore.format(bundle.bundlePriceINR) }}
                </span>
              </div>
              <p class="text-[10px] text-emerald-400 font-mono font-semibold">
                You save {{ currencyStore.format(bundle.originalPriceINR - bundle.bundlePriceINR) }} ({{ bundle.savingsPercentage }}% Off)
              </p>
            </div>

            <button
              @click="openEnrollModal(bundle)"
              class="px-5 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 text-[#070D18] font-bold text-xs transition shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <span>Lock Bundle Seats</span>
            </button>
          </div>
        </article>
      </div>
    </main>

    <!-- Bundle Enrollment & Coupon Modal -->
    <div v-if="selectedBundle" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div class="bg-[#0C1628] border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          @click="selectedBundle = null"
          class="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
          <span>ATOMIC 10-MIN BUNDLE SEAT LOCK</span>
        </div>
        <h3 class="text-lg font-bold text-white leading-snug">{{ selectedBundle.title }}</h3>
        <p class="text-xs text-slate-400 mt-1">
          {{ selectedBundle.courses.length }} DG-approved modules · {{ selectedBundle.totalDays }} training days
        </p>

        <!-- Live 10-Min Atomic Timer -->
        <div class="my-4 p-3 bg-[#070D18] border border-cyan-500/30 rounded-xl flex items-center justify-between font-mono text-xs">
          <span class="flex items-center gap-2 text-slate-300">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>HOLDING SEATS ON DG QUOTA</span>
          </span>
          <span class="text-amber-300 font-bold text-sm">09:48</span>
        </div>

        <!-- Candidate Details -->
        <div class="space-y-3 text-xs mb-4">
          <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 space-y-1.5 font-mono">
            <div class="flex justify-between text-slate-400">
              <span>CANDIDATE:</span>
              <span class="text-white font-bold">Capt. Rajesh Sharma</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>INDOS NUMBER:</span>
              <span class="text-[#00E5FF] font-bold">08ZL9431</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>CDC NUMBER:</span>
              <span class="text-white">MUM-149028</span>
            </div>
          </div>

          <!-- Coupon Code Input Box -->
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Promotional Coupon / Scholarship Code</label>
            <div class="flex gap-2">
              <input
                v-model="couponCode"
                type="text"
                placeholder="e.g. WOMENMARITIME or CADET2026"
                class="flex-1 px-3 py-2 bg-[#070D18] border border-white/10 rounded-xl text-xs font-mono uppercase text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
              <button
                type="button"
                @click="applyCoupon"
                class="px-4 py-2 bg-[#0369A1] hover:bg-[#0284C7] text-white font-bold text-xs rounded-xl transition"
              >
                Apply
              </button>
            </div>
            <p v-if="couponMessage" class="text-[11px] mt-1 font-mono font-semibold" :class="couponValid ? 'text-emerald-400' : 'text-red-400'">
              {{ couponMessage }}
            </p>
          </div>

          <!-- Fee Calculation Table -->
          <div class="p-3 bg-[#070D18] rounded-xl border border-white/5 space-y-1.5 font-mono text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Individual Courses Total:</span>
              <span class="line-through">{{ currencyStore.format(selectedBundle.originalPriceINR) }}</span>
            </div>
            <div class="flex justify-between text-slate-300">
              <span>Bundle Discount ({{ selectedBundle.savingsPercentage }}%):</span>
              <span class="text-emerald-400">-{{ currencyStore.format(selectedBundle.originalPriceINR - selectedBundle.bundlePriceINR) }}</span>
            </div>
            <div v-if="appliedDiscountPercentage > 0" class="flex justify-between text-amber-300 font-bold">
              <span>Promo Code ({{ appliedCouponCode }} -{{ appliedDiscountPercentage }}%):</span>
              <span>-{{ currencyStore.format(couponSavingsINR) }}</span>
            </div>
            <div class="pt-2 border-t border-white/10 flex justify-between text-sm font-bold text-white">
              <span>Net Escrow Hold Amount:</span>
              <span class="text-[#00E5FF]">{{ currencyStore.format(finalPayableINR) }}</span>
            </div>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            @click="selectedBundle = null"
            class="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold hover:border-white/20"
          >
            Cancel
          </button>
          <NuxtLink
            to="/bookings/checkout"
            class="flex-1 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-[#070D18] font-bold text-xs text-center transition flex items-center justify-center gap-1.5"
          >
            <span>Proceed to Dual-Invoice</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCurrencyStore } from '~/stores/currency'

const currencyStore = useCurrencyStore()

const selectedBundle = ref<any>(null)
const couponCode = ref('')
const couponMessage = ref('')
const couponValid = ref(false)
const appliedDiscountPercentage = ref(0)
const appliedCouponCode = ref('')

const bundles = ref([
  {
    id: 'bundle-stcw-basic-5in1',
    bundleCode: 'STCW-BASIC-5X',
    title: 'STCW Basic Safety Mandatory Combo (5-in-1)',
    description: 'Mandatory statutory qualification for all merchant marine officers and ratings prior to first vessel sign-on. Covers safety, firefighting, survival, first aid, and maritime security.',
    savingsBadge: 'SAVE 25% · MOST POPULAR',
    savingsPercentage: 25,
    originalPriceINR: 24000,
    bundlePriceINR: 17999,
    totalDays: 12,
    certificateCount: 5,
    instituteName: 'Anglo-Eastern Maritime Academy (AEMA)',
    courses: [
      'Personal Survival Techniques (PST - A-VI/1-1)',
      'Fire Prevention & Fire Fighting (FPFF - A-VI/1-2)',
      'Elementary First Aid (EFA - A-VI/1-3)',
      'Personal Safety & Social Resp. (PSSR - A-VI/1-4)',
      'Security Duties (STSDSD - A-VI/6-2)'
    ]
  },
  {
    id: 'bundle-advanced-safety-3in1',
    bundleCode: 'ADV-SAFETY-3X',
    title: 'Advanced Safety, Fire & Survival Package (3-in-1)',
    description: 'Required for Chief Mate, 2nd Mate, and Master Mariner competency exams and statutory 5-year refits. Conducted with live fire ground simulations and lifeboats.',
    savingsBadge: 'SAVE 22% · SENIOR OFFICER',
    savingsPercentage: 22,
    originalPriceINR: 32000,
    bundlePriceINR: 24999,
    totalDays: 10,
    certificateCount: 3,
    instituteName: 'Tolani Maritime Institute (TMI Pune)',
    courses: [
      'Advanced Fire Fighting (AFF - STCW A-VI/3)',
      'Survival Craft & Rescue Boats (PSCRB - A-VI/2-1)',
      'Medical First Aid (MFA - STCW A-VI/4-1)'
    ]
  },
  {
    id: 'bundle-bridge-simulator-3in1',
    bundleCode: 'BRIDGE-SIM-3X',
    title: 'Bridge Officer Simulator & Electronic Navigation Combo',
    description: 'Hands-on mission simulation on Kongsberg Polaris K-Sim full-mission navigation bridge. Fulfills IMO Model Course 1.27 and bridge team resource management regulations.',
    savingsBadge: 'SAVE 22% · SIMULATOR SUITE',
    savingsPercentage: 22,
    originalPriceINR: 36500,
    bundlePriceINR: 28500,
    totalDays: 11,
    certificateCount: 3,
    instituteName: 'Samundra Institute of Maritime Studies (SIMS)',
    courses: [
      'ECDIS Model Course 1.27 (Type Specific & Generic)',
      'Bridge Resource Management (BRM - STCW A-II/1)',
      'Radar Navigation & ARPA (RANSCO Simulator)'
    ]
  },
  {
    id: 'bundle-high-voltage-engine',
    bundleCode: 'MEO-HV-AUTO',
    title: 'Marine High Voltage & Automation Master Combo',
    description: 'Mandatory technical upgrade for Marine Engineers operating on diesel-electric, LNG, and modern container vessels with 6.6kV vacuum circuit breakers.',
    savingsBadge: 'SAVE 21% · ENGINE ROOM',
    savingsPercentage: 21,
    originalPriceINR: 35000,
    bundlePriceINR: 27500,
    totalDays: 12,
    certificateCount: 2,
    instituteName: 'AMET University Chennai',
    courses: [
      'Marine High Voltage (STCW A-III/2 Management)',
      'Engine Room Full Mission Simulator (ERS Level 2)'
    ]
  }
])

function copyCoupon(code: string) {
  couponCode.value = code
  applyCoupon()
}

function applyCoupon() {
  const code = couponCode.value.trim().toUpperCase()
  if (code === 'WOMENMARITIME') {
    appliedDiscountPercentage.value = 30
    appliedCouponCode.value = code
    couponValid.value = true
    couponMessage.value = '30% Women in Maritime scholarship discount applied!'
  } else if (code === 'CADET2026') {
    appliedDiscountPercentage.value = 15
    appliedCouponCode.value = code
    couponValid.value = true
    couponMessage.value = '15% Maritime Academy Cadet discount applied!'
  } else if (code === 'SEAFU10') {
    appliedDiscountPercentage.value = 10
    appliedCouponCode.value = code
    couponValid.value = true
    couponMessage.value = '10% Early Bird seat lock discount applied!'
  } else {
    appliedDiscountPercentage.value = 0
    appliedCouponCode.value = ''
    couponValid.value = false
    couponMessage.value = 'Invalid promo code. Try WOMENMARITIME or CADET2026'
  }
}

const couponSavingsINR = computed(() => {
  if (!selectedBundle.value || appliedDiscountPercentage.value === 0) return 0
  return Math.round((selectedBundle.value.bundlePriceINR * appliedDiscountPercentage.value) / 100)
})

const finalPayableINR = computed(() => {
  if (!selectedBundle.value) return 0
  return selectedBundle.value.bundlePriceINR - couponSavingsINR.value
})

function openEnrollModal(bundle: any) {
  selectedBundle.value = bundle
  couponCode.value = ''
  couponMessage.value = ''
  couponValid.value = false
  appliedDiscountPercentage.value = 0
  appliedCouponCode.value = ''
}
</script>
