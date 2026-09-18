<template>
  <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-black uppercase tracking-wider text-slate-500">Career Placement</span>
        <NuxtLink to="/jobs/my-applications" class="text-xs font-bold text-blue-700 hover:underline">
          View All Openings &bull; 42 Active
        </NuxtLink>
      </div>

      <div class="grid grid-cols-3 gap-3 text-center">
        <div class="p-3 bg-white rounded-xl border border-slate-200">
          <div class="text-lg font-black text-[#0A1936]">2</div>
          <div class="text-[10px] font-bold uppercase text-slate-400 mt-0.5">Applied</div>
          <div class="text-[10px] text-blue-700 font-semibold mt-1 truncate">Apex Tankers</div>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200">
          <div class="text-lg font-black text-blue-700">1</div>
          <div class="text-[10px] font-bold uppercase text-slate-400 mt-0.5">Shortlisted</div>
          <div class="text-[10px] text-blue-700 font-semibold mt-1 truncate">Global Container</div>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200">
          <div class="text-lg font-black text-emerald-600">1</div>
          <div class="text-[10px] font-bold uppercase text-slate-400 mt-0.5">Selected</div>
          <div class="text-[10px] text-emerald-700 font-semibold mt-1 truncate">Atlantic Maritime</div>
        </div>
      </div>
    </div>

    <div class="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
      <span class="text-xs text-slate-500">Next Interview: Tomorrow 10:00 UTC</span>
      <NuxtLink
        to="/jobs"
        class="px-4 py-2 rounded-xl text-xs font-black text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs transition">
        Browse Jobs
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props or events if needed
</script>
