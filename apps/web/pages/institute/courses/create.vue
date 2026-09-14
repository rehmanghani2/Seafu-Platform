<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-6 pb-4 border-b border-slate-200">
      <NuxtLink to="/institute/dashboard" class="text-xs text-ocean-600 hover:text-ocean-700 font-medium">
        &larr; Back to Institute Dashboard
      </NuxtLink>
      <h1 class="text-2xl font-bold text-slate-900 mt-2">Publish New Course & Batch</h1>
      <p class="text-xs text-slate-500 mt-1">
        Define course curriculum, DG Shipping compliance, prerequisites, and launch your first schedule batch.
      </p>
    </div>

    <form @submit.prevent="submitCourse" class="space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-slate-700">Course Official Title *</label>
          <input
            v-model="form.title"
            type="text"
            required
            placeholder="e.g. Proficiency in Survival Craft and Rescue Boats (PSCRB)"
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700">Course Code *</label>
          <input
            v-model="form.code"
            type="text"
            required
            placeholder="e.g. STCW-PSCRB-01"
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs uppercase"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700">Category *</label>
          <select
            v-model="form.category"
            required
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          >
            <option value="STCW_BASIC">STCW Basic Safety</option>
            <option value="STCW_ADVANCED">STCW Advanced Modular</option>
            <option value="REFRESHER">Refresher Training</option>
            <option value="SIMULATOR">Simulator Training</option>
            <option value="OFFSHORE">Offshore Training</option>
            <option value="COMPETENCY">Competency Course</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700">Duration (Days) *</label>
          <input
            v-model.number="form.durationDays"
            type="number"
            min="1"
            required
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700">Base Course Fee (INR) *</label>
          <input
            v-model.number="form.basePrice"
            type="number"
            min="500"
            required
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-slate-700">Detailed Description *</label>
          <textarea
            v-model="form.description"
            rows="3"
            required
            placeholder="Provide a comprehensive summary of course learning outcomes, equipment used, and maritime regulations."
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          ></textarea>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-slate-700">Curriculum & Syllabus Outline</label>
          <textarea
            v-model="form.syllabus"
            rows="4"
            placeholder="Module-by-module breakdown, theory sessions, pool exercises, practical simulator hours."
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          ></textarea>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold text-slate-700">Prerequisites (Comma separated)</label>
          <input
            v-model="prerequisitesInput"
            type="text"
            placeholder="e.g. Valid INDoS, 6 months sea service, Medical Fitness Certificate"
            class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          />
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <NuxtLink to="/institute/dashboard" class="text-xs text-slate-500 hover:text-slate-700">
          Cancel
        </NuxtLink>
        <button
          type="submit"
          class="px-6 py-2.5 rounded-lg bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-xs transition shadow-sm"
        >
          Submit Course for DG Review &rarr;
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  middleware: ['auth'],
});

const form = ref({
  title: '',
  code: '',
  category: 'STCW_BASIC',
  durationDays: 3,
  basePrice: 5000,
  description: '',
  syllabus: '',
});

const prerequisitesInput = ref('Valid INDoS Number, Medical Fitness Certificate');

function submitCourse() {
  alert('Course submitted for DG compliance verification!');
  navigateTo('/institute/dashboard');
}
</script>