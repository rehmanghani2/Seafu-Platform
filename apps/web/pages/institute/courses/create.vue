<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/institute/dashboard" class="flex items-center space-x-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm">/</span>
          <NuxtLink to="/institute/courses" class="hidden sm:inline-block text-xs font-semibold text-slate-600 hover:text-blue-700">
            Courses
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm">/</span>
          <span class="hidden sm:inline-block text-xs font-semibold text-slate-900">New Course Creation</span>
        </div>

        <NuxtLink
          to="/institute/courses"
          class="text-xs font-semibold text-slate-500 hover:text-slate-900 transition flex items-center space-x-1"
        >
          <span>&larr;</span>
          <span>Back to Catalog</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto w-full">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Publish New Maritime Course &amp; Syllabus
          </h1>
          <p class="text-xs text-slate-500 mt-1">
            Specify IMO Model Course alignment, Flag State accreditations, simulator laboratory contact hours, and tuition structure.
          </p>
        </div>

        <!-- Success Toast -->
        <div
          v-if="submitted"
          class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
        >
          <div class="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-base font-bold text-emerald-900">Course Registered &amp; Submitted for Audit</h2>
          <p class="text-xs text-emerald-700 max-w-md mx-auto">
            Your course curriculum has been submitted and is ready for DG compliance verification. You can now schedule batches.
          </p>
          <div class="pt-2 flex justify-center space-x-3">
            <NuxtLink
              to="/institute/courses"
              class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition"
            >
              View in Catalog
            </NuxtLink>
            <NuxtLink
              to="/institute/batches"
              class="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
            >
              Schedule Batch &rarr;
            </NuxtLink>
          </div>
        </div>

        <!-- Form Card -->
        <form v-else @submit.prevent="submitCourse" class="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <!-- Section 1: Course Identity -->
          <div class="space-y-4">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                1. Course Identification &amp; Regulatory Standard
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">Course Official Title *</label>
                <input
                  v-model="form.title"
                  type="text"
                  required
                  placeholder="e.g. Bridge Resource Management (BRM Full-Mission Simulator)"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Course / IMO Code *</label>
                <input
                  v-model="form.code"
                  type="text"
                  required
                  placeholder="e.g. STCW-BRM-01"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 uppercase font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                <select
                  v-model="form.category"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="PRE_SEA">Pre-Sea Cadet Training</option>
                  <option value="HND">Advance Diploma (AD / SQA)</option>
                  <option value="SIMULATOR">Simulator Suite Course</option>
                  <option value="STCW_MODULAR">STCW Advanced Modular</option>
                  <option value="REFRESHER">Mandatory Refresher</option>
                  <option value="OFFSHORE">Offshore &amp; DP Operations</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 2: Contact Hours & Practical Lab -->
          <div class="space-y-4 pt-2">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                2. Contact Hours &amp; Practical Infrastructure
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Duration (Days) *</label>
                <input
                  v-model.number="form.durationDays"
                  type="number"
                  min="1"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Simulator Lab Hours</label>
                <input
                  v-model.number="form.simulatorHours"
                  type="number"
                  min="0"
                  placeholder="e.g. 24"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Tuition Fee (PKR) *</label>
                <input
                  v-model.number="form.basePrice"
                  type="number"
                  min="1000"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Assigned Simulator Suites &amp; Labs</label>
              <input
                v-model="form.labs"
                type="text"
                placeholder="e.g. Transas NTPRO 4000 Full Mission Bridge, ARPA Radar Bay"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Section 3: Description & Syllabus -->
          <div class="space-y-4 pt-2">
            <div class="border-b border-slate-100 pb-2">
              <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                3. Description &amp; Syllabus Outline
              </h2>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Course Description *</label>
              <textarea
                v-model="form.description"
                rows="3"
                required
                placeholder="Comprehensive summary of learning objectives, STCW competency requirements, and hands-on exercises..."
                class="w-full p-3.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 leading-relaxed"
              ></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Prerequisites (Comma separated)</label>
              <input
                v-model="form.prerequisites"
                type="text"
                placeholder="e.g. Valid INDoS Number, 6 Months Sea Service, CoC / CDC"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Form Actions -->
          <div class="pt-4 border-t border-slate-200/80 flex items-center justify-between">
            <NuxtLink
              to="/institute/courses"
              class="text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
            >
              Cancel
            </NuxtLink>

            <button
              type="submit"
              class="px-6 py-2.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5"
            >
              <span>Submit Course for DG Review</span>
              <span>&rarr;</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Publish New Course &bull; Academy Console',
});

const submitted = ref(false);

const form = ref({
  title: '',
  code: '',
  category: 'SIMULATOR',
  durationDays: 5,
  simulatorHours: 20,
  basePrice: 75000,
  labs: 'Transas NTPRO 4000 Bridge Lab',
  description: '',
  prerequisites: 'Valid INDoS Number, CDC Seaman Book',
});

function submitCourse() {
  submitted.value = true;
}
</script>