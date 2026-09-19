<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- Card 1: Cadet Alex Mercer Profile (8 cols) -->
    <div class="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
      <div class="flex items-center space-x-4 min-w-0">
        <!-- Avatar -->
        <div class="relative shrink-0">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs"
          />
          <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Active on duty"></span>
        </div>

        <!-- Info -->
        <div class="space-y-1 min-w-0">
          <div class="flex items-center space-x-2.5 flex-wrap">
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {{ profile.name }}
            </h2>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/80 tracking-wide">
              {{ profile.badge }}
            </span>
          </div>

          <p class="text-xs text-slate-600 font-medium truncate">
            {{ profile.rank }} &bull; {{ profile.vessel }} (IMO: {{ profile.imo }})
          </p>

          <div class="flex items-center space-x-3 text-[11px] text-slate-500 pt-1 flex-wrap gap-y-1">
            <span class="inline-flex items-center gap-1 font-mono">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m-8-8h16m-4-6l4 6-4 6M8 6L4 12l4 6" />
              </svg>
              <span>CDC No: {{ profile.cdcNo }}</span>
            </span>
            <span class="text-slate-300" aria-hidden="true">&bull;</span>
            <span class="inline-flex items-center gap-1 font-semibold text-emerald-800">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ profile.compliance }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col items-start sm:items-end shrink-0 w-full sm:w-auto">
        <NuxtLink
          to="/seafarer/resume"
          class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs text-center focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          View Digital Resume
        </NuxtLink>
        <span class="text-[10px] text-slate-400 font-mono mt-2 self-center sm:self-end">
          Last Synced: Today, 08:30 UTC
        </span>
      </div>
    </div>

    <!-- Card 2: Sea Service Log (4 cols) -->
    <div class="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-sm font-bold text-slate-800 tracking-tight">Sea Service Log</span>
        <svg class="w-5 h-5 text-[#0A1936]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <div>
        <div class="flex items-baseline space-x-2">
          <span class="text-4xl font-bold font-mono text-slate-900">{{ seaDays }}</span>
          <span class="text-xs font-semibold text-slate-500">Total Sea Days</span>
        </div>

        <div class="mt-3 h-2.5 rounded-full overflow-hidden bg-slate-200">
          <div
            class="h-full rounded-full bg-[#38BDF8] transition-all duration-700"
            :style="{ width: Math.min(100, Math.round((seaDays / requirementDays) * 100)) + '%' }"
          ></div>
        </div>
      </div>

      <div class="flex items-center justify-between text-xs pt-1">
        <span class="text-slate-500 font-normal">Rank requirement: {{ requirementDays }} days</span>
        <span class="font-bold text-blue-700">Target Met</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    profile?: {
      name: string;
      badge: string;
      rank: string;
      vessel: string;
      imo: string;
      cdcNo: string;
      compliance: string;
      avatar: string;
    };
    seaDays?: number;
    requirementDays?: number;
  }>(),
  {
    profile: () => ({
      name: 'Cadet Alex Mercer',
      badge: 'Verified Seafarer',
      rank: 'Deck Officer Cadet',
      vessel: 'MV Atlantic Pioneer',
      imo: '9876543',
      cdcNo: 'IN-98765',
      compliance: 'STCW Compliant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    }),
    seaDays: 420,
    requirementDays: 360,
  }
);
</script>
