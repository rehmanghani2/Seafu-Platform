<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-black text-slate-900">3-Tier Statutory Approval Queue</h3>
        <p class="text-xs text-slate-500">Review pending academies, course syllabi, and certificate signing requests.</p>
      </div>
      <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
        4 Pending Audits
      </span>
    </div>

    <div class="divide-y divide-slate-100 text-xs">
      <div class="py-3 flex items-center justify-between">
        <div>
          <div class="font-bold text-slate-900">National Maritime Academy</div>
          <div class="text-slate-500">CIP Accreditation Review &bull; Grade A1 Audit</div>
        </div>
        <button @click="$emit('open-cip-modal', 'National Maritime Academy')" class="px-3 py-1 bg-[#0A1936] text-white rounded-lg font-bold">
          Inspect CIP
        </button>
      </div>
      <div class="py-3 flex items-center justify-between">
        <div>
          <div class="font-bold text-slate-900">Oceanic Training Hub &bull; ECDIS Simulator</div>
          <div class="text-slate-500">IMO Model Course 1.27 Syllabus Review</div>
        </div>
        <button @click="$emit('approve-course', 'ECDIS')" class="px-3 py-1 bg-emerald-700 text-white rounded-lg font-bold">
          Approve
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['open-cip-modal', 'approve-course']);
</script>
