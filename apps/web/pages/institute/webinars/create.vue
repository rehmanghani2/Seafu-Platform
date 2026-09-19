<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/webinars"
            class="flex items-center space-x-2.5 group rounded-xl"
          >
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">Return to Webinars</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Institute Console</span>
            </div>
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-2">
          <NuxtLink
            to="/institute/webinars"
            class="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition"
          >
            Cancel
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <div class="mb-6">
          <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Schedule a Maritime Webinar or Masterclass
          </h1>
          <p class="text-xs text-slate-600 mt-1">
            Publish an interactive technical session to thousands of seafarers on The Seafu platform.
          </p>
        </div>

        <!-- Success Toast -->
        <div v-if="isCreated" class="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs font-semibold">
            <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Webinar scheduled successfully! It is now published in the public directory.</span>
          </div>
          <NuxtLink to="/webinars" class="text-xs font-bold text-emerald-700 underline">View Public Page</NuxtLink>
        </div>

        <!-- Form Card -->
        <form @submit.prevent="createWebinar" class="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <!-- Basic Info -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">1. Session Meta &amp; Classification</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Webinar Title</label>
                <input
                  v-model="form.title"
                  required
                  type="text"
                  placeholder="e.g. Ballast Water Management D-2 Compliance &amp; USCG Regulations"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    v-model="form.category"
                    class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    <option value="NAVIGATION">Bridge &amp; Navigation</option>
                    <option value="ENGINEERING">Marine Engineering</option>
                    <option value="MARITIME_LAW">Maritime Law &amp; PSC</option>
                    <option value="SAFETY">STCW Safety &amp; Drills</option>
                    <option value="OFFSHORE">DP &amp; Offshore</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Duration (Minutes)</label>
                  <input
                    v-model.number="form.duration"
                    required
                    type="number"
                    min="30"
                    max="240"
                    placeholder="90"
                    class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Description &amp; Syllabus Synopsis</label>
                <textarea
                  v-model="form.description"
                  required
                  rows="3"
                  placeholder="Detailed technical synopsis of topics covered..."
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Schedule & Broadcast Bridge -->
          <div class="pt-6 border-t border-slate-200">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">2. Schedule &amp; Streaming Bridge</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Date &amp; Time (UTC)</label>
                <input
                  v-model="form.dateTime"
                  required
                  type="datetime-local"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Max Attendee Capacity</label>
                <input
                  v-model.number="form.maxSeats"
                  required
                  type="number"
                  placeholder="250"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Stream Bridge URL (Zoom / MS Teams / WebRTC / YouTube Live)</label>
                <input
                  v-model="form.streamUrl"
                  required
                  type="url"
                  placeholder="https://zoom.us/j/99201488102"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          <!-- Faculty & Speaker Details -->
          <div class="pt-6 border-t border-slate-200">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">3. Faculty &amp; Keynote Speaker</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Speaker Full Name</label>
                <input
                  v-model="form.speakerName"
                  required
                  type="text"
                  placeholder="Capt. Arun Varma"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Rank &amp; Title</label>
                <input
                  v-model="form.speakerTitle"
                  required
                  type="text"
                  placeholder="Master Mariner (FG) · Senior Marine Pilot"
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Speaker Brief Bio</label>
                <textarea
                  v-model="form.speakerBio"
                  rows="2"
                  placeholder="Over 20 years commanding container and tanker fleets..."
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Commercials & Escrow -->
          <div class="pt-6 border-t border-slate-200">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">4. Pricing &amp; Escrow Configuration</h3>
            <div class="flex items-center gap-6">
              <label class="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                <input type="radio" :value="true" v-model="form.isFree" class="text-blue-600 focus:ring-blue-500" />
                <span>Free Access (Complimentary CPD)</span>
              </label>
              <label class="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                <input type="radio" :value="false" v-model="form.isFree" class="text-blue-600 focus:ring-blue-500" />
                <span>Paid Masterclass (Ticketed)</span>
              </label>
            </div>

            <div v-if="!form.isFree" class="mt-4 max-w-xs">
              <label class="block text-xs font-semibold text-slate-700 mb-1">Ticket Fee (INR)</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">₹</span>
                <input
                  v-model.number="form.price"
                  type="number"
                  min="99"
                  placeholder="799"
                  class="w-full pl-8 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>
              <p class="text-[10px] text-slate-500 mt-1">Platform fee: 10% deducted upon successful broadcast completion.</p>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-200 flex justify-end gap-3">
            <NuxtLink
              to="/institute/webinars"
              class="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition"
            >
              Cancel
            </NuxtLink>
            <button
              type="submit"
              class="px-6 py-2.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold transition shadow-xs flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Publish Webinar to Seafu Directory</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCreated = ref(false)

const form = ref({
  title: '',
  category: 'NAVIGATION',
  duration: 90,
  description: '',
  dateTime: '',
  maxSeats: 200,
  streamUrl: '',
  speakerName: '',
  speakerTitle: '',
  speakerBio: '',
  isFree: true,
  price: 799
})

function createWebinar() {
  isCreated.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
