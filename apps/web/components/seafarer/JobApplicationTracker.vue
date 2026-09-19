<template>
  <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs space-y-4">
    <div>
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
          CAREER PLACEMENT
        </span>
        <NuxtLink to="/seafarer/jobs" class="text-xs font-semibold text-blue-700 hover:text-blue-900 transition flex items-center space-x-1">
          <span>View All Openings</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <h3 class="text-xl font-bold text-slate-900 tracking-tight mt-1">
        Job Application Tracker
      </h3>

      <!-- 3 Pipeline Columns Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">

        <!-- Column 1: Applied -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-700 px-1">
            <span>Applied</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">2</span>
          </div>

          <div class="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs space-y-2 group hover:border-slate-300 transition">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
              Apex Tankers Ltd.
            </span>
            <div class="text-xs font-bold text-slate-900 leading-snug">
              Third Officer (Chemical)
            </div>
            <div class="flex items-center justify-between pt-1 text-[11px] text-slate-400">
              <span>Applied 2d ago</span>
              <button
                @click="$emit('open-chat', { recruiter: 'Capt. Roger Hayes', company: 'Apex Tankers Ltd.', role: 'Third Officer (Chemical)' })"
                class="p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 transition focus:outline-none focus:ring-1 focus:ring-blue-600"
                title="Message Recruiter"
                aria-label="Message Apex Tankers Recruiter"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Column 2: Shortlisted -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-700 px-1">
            <span>Shortlisted</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#38BDF8] text-white">1</span>
          </div>

          <div class="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs space-y-2 group hover:border-slate-300 transition">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
              Global Container Lines
            </span>
            <div class="text-xs font-bold text-slate-900 leading-snug">
              Deck Cadet - Ultra Large
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-[10px] font-semibold text-blue-700">Interview Pending</span>
              <button
                @click="$emit('open-chat', { recruiter: 'Sarah Jenkins', company: 'Global Container Lines', role: 'Deck Cadet - Ultra Large' })"
                class="p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 transition focus:outline-none focus:ring-1 focus:ring-blue-600"
                title="Message Recruiter"
                aria-label="Message Global Container HR"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Column 3: Selected -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-700 px-1">
            <span>Selected</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">1</span>
          </div>

          <div class="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs space-y-2 group hover:border-slate-300 transition">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
              Atlantic Maritime
            </span>
            <div class="text-xs font-bold text-slate-900 leading-snug">
              Junior Officer Pool
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-[10px] font-semibold text-emerald-600">Contract Signed</span>
              <button
                @click="$emit('open-chat', { recruiter: 'Capt. Thomas Vance', company: 'Atlantic Maritime', role: 'Junior Officer Pool' })"
                class="p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 transition focus:outline-none focus:ring-1 focus:ring-blue-600"
                title="Message Fleet Manager"
                aria-label="Message Atlantic Maritime Fleet Manager"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['open-chat']);
</script>
