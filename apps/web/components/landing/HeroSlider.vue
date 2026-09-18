<template>
  <section class="relative bg-gradient-to-br from-[#0A1936] via-[#102347] to-[#1E3A8A] text-white py-16 lg:py-24 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
    <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Slide Tabs -->
      <div class="flex items-center justify-center sm:justify-start gap-2 mb-8 overflow-x-auto pb-2">
        <button
          v-for="(slide, idx) in slides"
          :key="idx"
          @click="currentSlide = idx"
          class="px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center space-x-2 shrink-0"
          :class="currentSlide === idx ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'bg-white/10 text-slate-200 hover:bg-white/20'">
          <span class="w-2 h-2 rounded-full" :class="currentSlide === idx ? 'bg-slate-900' : 'bg-slate-400'"></span>
          <span>{{ slide.tabTitle }}</span>
        </button>
      </div>

      <!-- Active Slide Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <div class="lg:col-span-7 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-500/20 border border-blue-400/40 text-blue-200">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{{ slides[currentSlide].badge }}</span>
          </div>

          <div class="space-y-3">
            <div class="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest">
              {{ slides[currentSlide].subheading }}
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {{ slides[currentSlide].heading }}
            </h1>
            <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              {{ slides[currentSlide].description }}
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 gap-2.5 py-2 max-w-xl text-xs sm:text-sm text-slate-200 font-semibold">
            <div v-for="(feat, fIdx) in slides[currentSlide].features" :key="fIdx" class="flex items-center space-x-2">
              <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
              <span>{{ feat }}</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              @click="$emit('open-admission', slides[currentSlide].tabTitle)"
              class="px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20 transition transform hover:-translate-y-0.5 flex items-center space-x-2">
              <span>{{ slides[currentSlide].primaryBtn }}</span>
              <span>→</span>
            </button>

            <a
              href="https://wa.me/923366668475"
              target="_blank"
              class="px-5 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition flex items-center space-x-2">
              <span>💬 WhatsApp Counselor</span>
            </a>

            <button
              @click="$emit('open-prospectus')"
              class="px-5 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs transition flex items-center space-x-2">
              <span>📥 Prospectus 2026</span>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group">
            <img
              :src="slides[currentSlide].image"
              :alt="slides[currentSlide].heading"
              class="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A1936] via-[#0A1936]/40 to-transparent"></div>

            <button
              @click="$emit('open-video')"
              class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div class="w-18 h-18 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-400/50">
                <svg class="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-sm">
                  ⚓
                </div>
                <div>
                  <div class="text-xs font-black text-white">{{ slides[currentSlide].cardHighlight }}</div>
                  <div class="text-[10px] text-slate-300">IMO Model Course &bull; CIP Grade A1</div>
                </div>
              </div>
              <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Watch Tour
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
        <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
          <div class="text-amber-400 font-extrabold text-sm mb-1">Pre-Sea Maritime Training</div>
          <div class="text-xs text-slate-300">GP-III Deck &amp; Engine structured programs for merchant navy induction.</div>
        </div>
        <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
          <div class="text-amber-400 font-extrabold text-sm mb-1">Modern Simulator Fleet</div>
          <div class="text-xs text-slate-300">Full-Mission 360° Bridge, Engine Room, ECDIS, GMDSS, and LICOS suites.</div>
        </div>
        <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
          <div class="text-amber-400 font-extrabold text-sm mb-1">Global Sea Placement</div>
          <div class="text-xs text-slate-300">Captive intake partnerships with leading international shipping lines.</div>
        </div>
        <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
          <div class="text-amber-400 font-extrabold text-sm mb-1">100% Escrow Protection</div>
          <div class="text-xs text-slate-300">Guaranteed fee refund protection backed by smart maritime contract escrow.</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  slides: Array<{
    tabTitle: string;
    badge: string;
    subheading: string;
    heading: string;
    description: string;
    features: string[];
    primaryBtn: string;
    cardHighlight: string;
    image: string;
  }>;
}>();

defineEmits(['open-admission', 'open-prospectus', 'open-video']);

const currentSlide = ref(0);
</script>
