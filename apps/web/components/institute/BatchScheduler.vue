<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-black text-slate-900">Batch Scheduling &amp; Seat Allocation</h3>
        <p class="text-xs text-slate-500">Manage class intakes, instructor assignment, and atomic quota locks.</p>
      </div>
      <button @click="$emit('create-batch')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition">
        + New Intake Batch
      </button>
    </div>

    <div class="space-y-3">
      <div v-for="(batch, bIdx) in batches" :key="bIdx" class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4">
        <div>
          <div class="flex items-center space-x-2">
            <span class="font-extrabold text-xs text-slate-900">{{ batch.courseName }}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">{{ batch.code }}</span>
          </div>
          <div class="text-[11px] text-slate-500 mt-1">
            📅 {{ batch.startDate }} &bull; Instructor: {{ batch.instructor }} &bull; Lab: {{ batch.lab }}
          </div>
        </div>
        <div class="flex items-center space-x-4 shrink-0">
          <div class="text-right">
            <div class="text-xs font-black text-slate-900">{{ batch.enrolled }} / {{ batch.capacity }} Seats</div>
            <div class="text-[10px] text-emerald-600 font-bold">{{ batch.capacity - batch.enrolled }} Remaining</div>
          </div>
          <button @click="$emit('edit-batch', batch)" class="px-2.5 py-1 rounded border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  batches: Array<{
    code: string;
    courseName: string;
    startDate: string;
    instructor: string;
    lab: string;
    enrolled: number;
    capacity: number;
  }>;
}>();

defineEmits(['create-batch', 'edit-batch']);
</script>
