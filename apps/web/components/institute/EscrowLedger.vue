<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-black text-slate-900">Real-Time Revenue &amp; Escrow Ledger</h3>
        <p class="text-xs text-slate-500">Dual-invoicing ledger with 90% institute payout protection.</p>
      </div>
      <button @click="$emit('export-ledger')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition">
        Export CSV Ledger
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <div class="text-xl font-black text-slate-900">$48,250</div>
        <div class="text-[10px] font-bold text-slate-400 uppercase mt-1">Total Gross GMV</div>
      </div>
      <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div class="text-xl font-black text-emerald-700">$43,425</div>
        <div class="text-[10px] font-bold text-emerald-800 uppercase mt-1">90% Academy Escrow</div>
      </div>
      <div class="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div class="text-xl font-black text-blue-700">$4,825</div>
        <div class="text-[10px] font-bold text-blue-800 uppercase mt-1">10% Platform Commission</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['export-ledger']);
</script>
