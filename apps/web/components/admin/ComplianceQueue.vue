<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-2xs shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h3 class="text-base font-black text-slate-900">3-Tier Statutory Approval Queue</h3>
          <p class="text-xs text-slate-500 mt-0.5">Review pending academies, course syllabi, and certificate signing requests.</p>
        </div>
      </div>
      <span class="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
        4 Pending Audits
      </span>
    </div>

    <div class="divide-y divide-slate-100 text-xs">
      <div class="py-3.5 flex items-center justify-between gap-4">
        <div>
          <div class="font-bold text-slate-900 text-sm">National Maritime Academy</div>
          <div class="text-slate-500 text-xs mt-0.5">CIP Accreditation Review &bull; Grade A1 Audit</div>
        </div>
        <button
          @click="$emit('open-cip-modal', 'National Maritime Academy')"
          class="px-3.5 py-1.5 bg-[#0A1936] hover:bg-[#112752] text-white rounded-xl font-bold shadow-2xs transition inline-flex items-center gap-1.5 shrink-0"
        >
          <span>Inspect CIP</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div class="py-3.5 flex items-center justify-between gap-4">
        <div>
          <div class="font-bold text-slate-900 text-sm">Oceanic Training Hub &bull; ECDIS Simulator</div>
          <div class="text-slate-500 text-xs mt-0.5">IMO Model Course 1.27 Syllabus Review</div>
        </div>
        <button
          @click="$emit('approve-course', 'ECDIS')"
          class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-2xs transition inline-flex items-center gap-1.5 shrink-0"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Approve</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['open-cip-modal', 'approve-course']);
</script>

