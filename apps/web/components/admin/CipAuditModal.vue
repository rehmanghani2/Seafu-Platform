<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
    <div class="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative">
      <button @click="$emit('close')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
      
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-black">🏛️</div>
        <div>
          <h3 class="text-lg font-black text-slate-900">Comprehensive Inspection Programme (CIP) Audit</h3>
          <p class="text-xs text-slate-500">Statutory Regulatory Evaluation for {{ academyName }}</p>
        </div>
      </div>

      <div class="space-y-3 text-xs">
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
          <div class="flex justify-between font-bold text-slate-700">
            <span>DNV Maritime Audit Score:</span>
            <span class="text-blue-700">96.4% Outstanding</span>
          </div>
          <div class="flex justify-between font-bold text-slate-700">
            <span>Simulator Console Ratio:</span>
            <span class="text-slate-900">1 : 2 Trainees (Exceeds Cap)</span>
          </div>
          <div class="flex justify-between font-bold text-slate-700">
            <span>Faculty Sea-Time Compliance:</span>
            <span class="text-emerald-600">100% Certified Master Mariners</span>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-3 pt-3 border-t border-slate-200">
          <button @click="$emit('close')" class="px-4 py-2 border rounded-xl font-bold text-slate-700">Cancel</button>
          <button @click="$emit('assign-grade', 'A1')" class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-black">
            Grant Grade A1 Approval
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
