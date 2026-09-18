<template>
  <section class="py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Hands-On Maritime Technology</div>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Advanced <span class="text-blue-700">Simulator Facilities</span>
        </h2>
        <div class="flex items-center justify-center gap-2 mt-3">
          <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
          <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
        </div>
        <p class="text-sm text-slate-600 mt-4">
          Experience practical maritime training through modern simulation laboratories designed to enhance technical skills, operational confidence, and compliance with IMO Model Courses.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(sim, sIdx) in suites" :key="sIdx" class="rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col group">
          <div class="relative h-48 overflow-hidden bg-slate-800">
            <img :src="sim.image" :alt="sim.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-600 text-white tracking-wider">
                {{ sim.badge }}
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <h4 class="text-base font-bold leading-tight">{{ sim.title }}</h4>
            </div>
          </div>
          
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ sim.description }}
            </p>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="font-semibold text-slate-500">{{ sim.hardware }}</span>
              <button @click="$emit('select-sim', sim)" class="font-bold text-blue-700 hover:underline">
                Lab Specs →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A1936] to-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 class="text-xl font-black">Want to inspect our campus and simulator labs in person?</h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-1">Book an official academy walkthrough for candidates, parents, and shipping executives.</p>
        </div>
        <button
          @click="$emit('book-visit')"
          class="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shrink-0 transition">
          Book a Campus Visit
        </button>
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
  }>;
}>();

defineEmits(['select-sim', 'book-visit']);
</script>
