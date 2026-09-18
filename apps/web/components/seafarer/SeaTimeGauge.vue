<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
    <!-- Cadet Alex Mercer Card (8 cols) -->
    <div class="lg:col-span-8 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center space-x-4">
          <div class="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
              alt="Cadet Alex Mercer"
              class="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
            />
            <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h2 class="text-xl font-black text-[#0A1936] tracking-tight">Cadet Alex Mercer</h2>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide bg-[#38BDF8] text-[#0A1936]">
                Verified Seafarer
              </span>
            </div>
            <p class="text-xs font-semibold text-slate-500 mt-0.5">
              Deck Officer Cadet &bull; MV Atlantic Pioneer (IMO: 9876543)
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-2 shrink-0">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600">
            CDC: IN-98765
          </span>
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600">
            STCW Compliant
          </span>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-6 text-xs text-slate-500">
          <div>
            <span class="font-medium">Flag State:</span>
            <span class="font-bold text-slate-800 ml-1">India (DG Shipping)</span>
          </div>
          <div>
            <span class="font-medium">Sea Experience:</span>
            <span class="font-bold text-slate-800 ml-1">14 Months Logged</span>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <span class="text-[11px] text-slate-400 font-medium">Last Synced: Today, 08:30 UTC</span>
          <NuxtLink
            to="/seafarer/resume"
            class="px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0A1936] hover:bg-[#112752] shadow-xs transition">
            View Digital Resume
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Sea Service Log Card (4 cols) -->
    <div class="lg:col-span-4 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
      <div>
        <div class="flex items-center justify-between">
          <span class="text-xs font-black uppercase tracking-wider text-slate-500">Sea Service Log</span>
          <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
            Target Met
          </span>
        </div>
        
        <div class="mt-4 flex items-baseline space-x-2">
          <span class="text-4xl font-black text-[#0A1936] tracking-tight">420</span>
          <span class="text-xs font-bold text-slate-500">Total Sea Days</span>
        </div>

        <div class="mt-4">
          <div class="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
            <div class="h-full bg-[#38BDF8] rounded-full" style="width: 100%"></div>
          </div>
          <div class="flex justify-between text-[11px] font-semibold text-slate-500 mt-2">
            <span>Rank requirement: 360 days</span>
            <span class="font-bold text-[#0A1936]">116% Complete</span>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
        <span class="text-slate-500">Eligible for 2nd Mate Examination</span>
        <span class="text-blue-700 font-bold">Audit Passed ✓</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props can be expanded as needed
</script>
