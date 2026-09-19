<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
      <div>
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <h3 class="text-base font-bold text-slate-900 tracking-tight">Course Curriculum &amp; IMO Model Course Alignment</h3>
        </div>
        <p class="text-xs text-slate-500 mt-0.5">
          Configure STCW training standards, contact hour breakdown, simulator allocations, and tuition pricing.
        </p>
      </div>

      <NuxtLink
        to="/institute/courses/create"
        class="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs shrink-0"
      >
        <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Launch Full Form Wizard</span>
      </NuxtLink>
    </div>

    <!-- 3-Pillar Architecture Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Pillar 1: Regulatory Standard -->
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono font-bold text-xs">
            01
          </div>
          <span class="text-xs font-bold text-slate-900">IMO &amp; STCW Standard</span>
        </div>
        <p class="text-xs text-slate-500 leading-relaxed">
          Select standard compliance profile: STCW 78 as amended (Reg II/1, II/2, III/1, III/2) and IMO Model Course (1.22 Ship Sim, 1.27 ECDIS, 2.03 AFF).
        </p>
        <div class="flex flex-wrap gap-1 pt-1">
          <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">IMO 1.22</span>
          <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">IMO 1.27</span>
          <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">IMO 2.03</span>
        </div>
      </div>

      <!-- Pillar 2: Contact Hours & Lab Quota -->
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono font-bold text-xs">
            02
          </div>
          <span class="text-xs font-bold text-slate-900">Practical &bull; Simulator Ratio</span>
        </div>
        <p class="text-xs text-slate-500 leading-relaxed">
          Define classroom theory vs. hands-on simulator contact hours. Enforce minimum seat time required by Flag State administrations.
        </p>
        <div class="flex items-center justify-between text-xs pt-1">
          <span class="text-slate-600 font-medium">Recommended:</span>
          <span class="font-mono font-bold text-blue-700">40% Theory / 60% Lab</span>
        </div>
      </div>

      <!-- Pillar 3: Cryptographic Certificate Stamp -->
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono font-bold text-xs">
            03
          </div>
          <span class="text-xs font-bold text-slate-900">Tamper-Proof QR Stamp</span>
        </div>
        <p class="text-xs text-slate-500 leading-relaxed">
          Completed batches automatically generate ECDSA SHA-256 signed digital certificates directly discoverable via Port State Control scanners.
        </p>
        <div class="flex items-center space-x-1.5 text-xs text-emerald-700 font-medium pt-1">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>DG Verification Instant Hook</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Interactive course wizard overview card
</script>
