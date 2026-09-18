<template>
  <section class="py-24 bg-white border-b border-slate-100" aria-labelledby="sim-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Hands-On Maritime Technology</p>
        <h2 id="sim-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Advanced <span class="text-blue-700">Simulator Facilities</span>
        </h2>
        <div class="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
          <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
          <span class="w-3 h-0.5 bg-amber-400 rounded-full"></span>
          <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
        </div>
        <p class="text-sm text-slate-500 mt-5 leading-relaxed">
          Experience practical maritime training through modern simulation laboratories built to IMO Model Course standards.
        </p>
      </div>

      <!-- Simulator Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(sim, sIdx) in suites"
          :key="sIdx"
          class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group bg-white">

          <!-- Image -->
          <div class="relative h-44 overflow-hidden bg-slate-800">
            <img :src="sim.image" :alt="sim.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"></div>
            <!-- Type badge -->
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center space-x-1.5 text-[10px] font-semibold uppercase px-2 py-1 rounded-md bg-[#0A1936]/90 text-slate-200 border border-white/10 backdrop-blur-sm">
                <component :is="'svg'" class="w-3 h-3 shrink-0" v-html="sim.iconSvg" aria-hidden="true"></component>
                <span>{{ sim.badge }}</span>
              </span>
            </div>
            <!-- Title on image -->
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="text-sm font-bold text-white leading-snug">{{ sim.title }}</h3>
            </div>
          </div>

          <!-- Body -->
          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-xs text-slate-500 leading-relaxed">{{ sim.description }}</p>
            <div class="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
              <div class="flex items-center space-x-1.5 text-slate-500">
                <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
                <span class="font-medium">{{ sim.hardware }}</span>
              </div>
              <button @click="$emit('select-sim', sim)"
                class="font-semibold text-blue-700 hover:text-blue-900 hover:underline transition focus:outline-none focus:ring-1 focus:ring-blue-600 rounded">
                Lab Specs →
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- Campus Visit Strip -->
      <div class="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A1936] to-[#1a3a6b] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/30">
        <div>
          <h3 class="text-xl font-bold">Want to inspect our simulator labs in person?</h3>
          <p class="text-sm text-slate-300 mt-1">Book an official academy walkthrough for candidates, parents, and shipping executives.</p>
        </div>
        <div class="flex items-center space-x-3 shrink-0">
          <button @click="$emit('book-visit')"
            class="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wide bg-amber-400 hover:bg-amber-300 text-slate-950 transition focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm">
            Book a Campus Visit
          </button>
          <button @click="$emit('select-sim', null)"
            class="text-xs font-medium text-slate-300 hover:text-white underline underline-offset-2 transition">
            or view virtual tour
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  suites: Array<{
    title: string;
    badge: string;
    hardware: string;
    description: string;
    image: string;
    iconSvg?: string;
  }>;
}>();

defineEmits(['select-sim', 'book-visit']);
</script>
