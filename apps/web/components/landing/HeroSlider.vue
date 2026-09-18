<template>
  <section class="relative bg-gradient-to-br from-[#0A1936] via-[#102347] to-[#1a3060] text-white overflow-hidden" aria-label="Hero — Maritime Training Programs">
    <!-- Subtle dot grid background -->
    <div class="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" aria-hidden="true"></div>
    <!-- Ambient glow -->
    <div class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-amber-400/8 blur-3xl pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">

      <!-- Slide Tabs -->
      <div class="flex items-center justify-center sm:justify-start gap-2 mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Program selection">
        <button
          v-for="(slide, idx) in slides"
          :key="idx"
          @click="goToSlide(idx)"
          role="tab"
          :aria-selected="currentSlide === idx"
          class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center space-x-2 shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-400"
          :class="currentSlide === idx
            ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
            : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'">
          <span class="w-1.5 h-1.5 rounded-full transition" :class="currentSlide === idx ? 'bg-slate-900' : 'bg-slate-500'"></span>
          <span>{{ slide.tabTitle }}</span>
        </button>

        <!-- Auto-play progress bar -->
        <div class="ml-auto hidden sm:flex items-center space-x-2 shrink-0">
          <button @click="paused = !paused"
            class="p-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-white"
            :aria-label="paused ? 'Resume slideshow' : 'Pause slideshow'">
            <!-- Pause icon -->
            <svg v-if="!paused" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            <!-- Play icon -->
            <svg v-else class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div class="flex space-x-1" aria-hidden="true">
            <span v-for="(_, idx) in slides" :key="idx"
              class="h-1 rounded-full transition-all duration-300"
              :class="currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/25'"></span>
          </div>
        </div>
      </div>

      <!-- Slide Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center" aria-live="polite" aria-atomic="true">

        <!-- Left: Text Content -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-blue-500/20 border border-blue-400/30 text-blue-200">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span>{{ slides[currentSlide].badge }}</span>
          </div>

          <div class="space-y-3">
            <div class="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
              {{ slides[currentSlide].subheading }}
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1]">
              {{ slides[currentSlide].heading }}
            </h1>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {{ slides[currentSlide].description }}
            </p>
          </div>

          <!-- Feature list with SVG checks -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
            <div v-for="(feat, fIdx) in slides[currentSlide].features" :key="fIdx"
              class="flex items-center space-x-2.5 text-slate-200 text-sm">
              <span class="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              <span class="font-medium text-xs sm:text-sm">{{ feat }}</span>
            </div>
          </div>

          <!-- CTAs — max 2 primary -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button
              @click="$emit('open-admission', slides[currentSlide].tabTitle)"
              class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/25 transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400">
              <span>{{ slides[currentSlide].primaryBtn }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>

            <a href="https://wa.me/923366668475" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <!-- WhatsApp icon -->
              <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Counselor</span>
            </a>

            <button @click="$emit('open-prospectus')"
              class="text-slate-400 hover:text-slate-200 text-xs font-medium underline underline-offset-2 transition focus:outline-none">
              Download Prospectus 2026
            </button>
          </div>
        </div>

        <!-- Right: Image Card -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
            <img
              :src="slides[currentSlide].image"
              :alt="slides[currentSlide].heading"
              class="w-full h-72 sm:h-96 object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A1936]/90 via-[#0A1936]/30 to-transparent pointer-events-none"></div>

            <!-- Play button -->
            <button
              @click="$emit('open-video')"
              class="absolute inset-0 flex items-center justify-center"
              aria-label="Watch campus tour video">
              <div class="w-16 h-16 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>

            <!-- Card overlay info -->
            <div class="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <!-- Anchor icon -->
                  <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6M12 4a2 2 0 100-4 2 2 0 000 4zm0 16c-4.418 0-8-2.686-8-6"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-bold text-white">{{ slides[currentSlide].cardHighlight }}</div>
                  <div class="text-[10px] text-slate-400">IMO Model Course · CIP Grade A1</div>
                </div>
              </div>
              <span class="text-[10px] font-semibold uppercase px-2 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">Watch Tour</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Trust Strip -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <p class="text-[10px] font-semibold uppercase tracking-widest text-slate-500 text-center mb-4">Recognised &amp; Accredited By</p>
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span v-for="badge in trustBadges" :key="badge.label"
            class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/30 transition">
            <span class="text-amber-400" aria-hidden="true">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </span>
            <span class="text-xs font-semibold text-slate-300">{{ badge.label }}</span>
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
const paused = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

const trustBadges = [
  { label: 'IMO STCW Manila 2010' },
  { label: 'DG Shipping Approved' },
  { label: 'UK MCA Compliant' },
  { label: 'CIP Grade A1 Outstanding' },
  { label: 'City of Glasgow Articulation' },
];

function goToSlide(idx: number) {
  currentSlide.value = idx;
  resetTimer();
}

function nextSlide() {
  if (!paused.value) {
    currentSlide.value = (currentSlide.value + 1) % 3;
  }
}

function resetTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

onMounted(() => resetTimer());
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>
