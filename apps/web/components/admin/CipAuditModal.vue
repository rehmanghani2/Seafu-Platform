<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs" @keydown.esc="$emit('close')">
    <div class="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition focus:outline-hidden focus:ring-2 focus:ring-blue-500"
        aria-label="Close modal"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex items-center space-x-3 mb-5">
        <div class="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-xs shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              CIP STATUTORY AUDIT
            </span>
            <span class="text-[10px] font-mono text-emerald-600 font-bold">DNV VERIFIED</span>
          </div>
          <h3 class="text-base font-black text-slate-900 mt-0.5">Comprehensive Inspection Programme</h3>
          <p class="text-xs text-slate-500 font-medium">Regulatory Evaluation for {{ academyName }}</p>
        </div>
      </div>

      <div class="space-y-4 text-xs">
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
          <div class="flex justify-between items-center text-slate-700">
            <span class="font-medium">DNV Maritime Audit Score:</span>
            <span class="font-mono font-bold text-blue-700 text-sm">96.4% Outstanding</span>
          </div>
          <div class="flex justify-between items-center text-slate-700">
            <span class="font-medium">Simulator Console Ratio:</span>
            <span class="font-mono font-bold text-slate-900">1 : 2 Trainees (Exceeds Cap)</span>
          </div>
          <div class="flex justify-between items-center text-slate-700">
            <span class="font-medium">Faculty Sea-Time Compliance:</span>
            <span class="font-mono font-bold text-emerald-600">100% Certified Master Mariners</span>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-3 pt-3 border-t border-slate-200">
          <button
            @click="$emit('close')"
            class="px-4 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            @click="$emit('assign-grade', 'A1')"
            class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-xs transition inline-flex items-center gap-1.5"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Grant Grade A1 Approval</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  academyName: string;
}>();

defineEmits(['close', 'assign-grade']);
</script>
