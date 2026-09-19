<template>
  <header class="sticky top-0 z-50 w-full" :class="scrolled ? 'shadow-xl shadow-slate-900/40' : ''" role="banner">

    <!-- TOP TICKER -->
    <div class="bg-[#04142E] text-white text-[11px] py-1.5 px-4 border-b border-white/10" role="region" aria-label="Admissions and Maritime Announcements">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2.5 overflow-hidden min-w-0">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-400 text-slate-950 tracking-wider shrink-0">Admissions 2026</span>
          <span class="truncate text-slate-300 font-medium hidden sm:block">
            <span class="text-amber-300 font-semibold">THE SEAFU:</span>
            Centralized STCW Training &amp; Cadetships · 100% Escrow-Protected Booking · Instant QR Verification
          </span>
        </div>
        <div class="flex items-center space-x-4 text-slate-300 shrink-0">
          <a href="https://wa.me/923366668475" target="_blank" rel="noopener noreferrer"
            class="hover:text-emerald-300 transition flex items-center space-x-1.5 font-medium text-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded"
            aria-label="WhatsApp admissions assistance">
            <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span class="hidden sm:inline">+92 336 6668475</span>
          </a>
          <span class="text-slate-700 hidden md:inline" aria-hidden="true">|</span>
          <a href="tel:+922135681234"
            class="hover:text-white transition hidden md:flex items-center space-x-1.5 font-medium focus:outline-none focus:ring-1 focus:ring-white rounded"
            aria-label="Admissions helpline">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>+92 21 3568 1234</span>
          </a>
          <span class="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA"
            class="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-300 rounded"
            aria-label="Instant certificate verification">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="hidden sm:inline">Verify Certificate</span>
          </NuxtLink>
          <span class="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
          <CommonCurrencySelector />
        </div>
      </div>
    </div>

    <!-- MAIN NAVBAR -->
    <div class="bg-[#04142E] border-b border-white/10 text-white transition-all duration-300"
      :class="scrolled ? 'bg-[#04142E]/97 backdrop-blur-sm' : ''">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">

        <!-- Brand -->
        <NuxtLink to="/"
          class="flex items-center space-x-3 group shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl p-1"
          aria-label="The Seafu Platform Home">
          <div class="w-10 h-10 shrink-0">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full group-hover:scale-105 transition-transform" aria-hidden="true">
              <circle cx="40" cy="40" r="38" stroke="#B8941F" stroke-width="3"/>
              <circle cx="40" cy="40" r="31" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
              <path d="M40 13l2.5 11h-5L40 13z" fill="#B8941F"/>
              <path d="M40 67l-2.5-11h5L40 67z" fill="#B8941F" opacity="0.45"/>
              <path d="M13 40l11-2.5v5L13 40z" fill="#B8941F" opacity="0.45"/>
              <path d="M67 40l-11 2.5v-5L67 40z" fill="#B8941F"/>
              <rect x="37.5" y="21" width="5" height="29" rx="2.5" fill="white"/>
              <circle cx="40" cy="21" r="5.5" stroke="white" stroke-width="3" fill="none"/>
              <rect x="27" y="31" width="26" height="4.5" rx="2.25" fill="white"/>
              <path d="M31 51 Q26 58 28.5 63 Q32.5 67 37 59 L40 51" fill="white"/>
              <path d="M49 51 Q54 58 51.5 63 Q47.5 67 43 59 L40 51" fill="white"/>
            </svg>
          </div>
          <div class="flex flex-col">
            <div class="flex items-baseline space-x-2">
              <span class="text-[20px] font-bold text-white tracking-tight leading-none">The Seafu</span>
              <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 leading-none">MTI</span>
            </div>
            <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Maritime Training &amp; Credentialing</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center text-[13px] font-medium text-slate-300" aria-label="Primary Navigation">
          <NuxtLink to="/"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'home' ? 'text-white' : ''">
            Home
          </NuxtLink>
          <a href="#about"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'about' ? 'text-white' : ''">
            About Us
          </a>

          <!-- Courses Mega Menu -->
          <div class="relative" @mouseenter="coursesOpen = true" @mouseleave="coursesOpen = false">
            <a href="#courses"
              class="px-3.5 py-2 rounded-lg flex items-center space-x-1 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
              :class="(coursesOpen || activeSection === 'courses') ? 'text-white' : ''"
              aria-haspopup="true" :aria-expanded="coursesOpen">
              <span>Courses</span>
              <svg class="w-3 h-3 transition-transform duration-200" :class="coursesOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <div v-show="coursesOpen" class="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[660px] z-50">
              <div class="bg-[#071C42] border border-white/10 rounded-2xl p-5 shadow-2xl grid grid-cols-2 gap-5">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 pb-2 border-b border-white/10">Academic Pathways</p>
                  <ul class="space-y-1.5">
                    <li v-for="item in courseOverview" :key="item.label">
                      <a :href="item.href" class="flex items-center space-x-2 py-1 text-slate-300 hover:text-white transition group/item text-xs">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-amber-400 transition shrink-0"></span>
                        <span>{{ item.label }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 pb-2 border-b border-white/10">Simulators &amp; Safety</p>
                  <ul class="space-y-1.5">
                    <li v-for="item in courseHighlights" :key="item.label">
                      <a :href="item.href" class="flex items-center space-x-2 py-1 text-slate-300 hover:text-white transition group/item text-xs">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-cyan-400 transition shrink-0"></span>
                        <span>{{ item.label }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span class="text-[11px] text-slate-500">IMO Model Courses · DG Shipping · UK MCA Accredited</span>
                  <NuxtLink to="/courses" class="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center space-x-1">
                    <span>Browse Full Catalogue</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink to="/courses"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400">
            Courses
          </NuxtLink>
          <NuxtLink to="/webinars"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400">
            Webinars
          </NuxtLink>
          <NuxtLink to="/publications"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400">
            Publications
          </NuxtLink>
          <NuxtLink to="/jobs"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400">
            Jobs
          </NuxtLink>
          <a href="#about"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'about' ? 'text-white' : ''">
            About Us
          </a>
          <a href="#testimonials"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'testimonials' ? 'text-white' : ''">Testimonials</a>
          <a href="#faqs"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'faqs' ? 'text-white' : ''">FAQs</a>
          <a href="#contact"
            class="px-3.5 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
            :class="activeSection === 'contact' ? 'text-white' : ''">Contact</a>
        </nav>

        <!-- CTAs -->
        <div class="flex items-center space-x-2 shrink-0">
          <button @click="$emit('open-admission')"
            class="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400">
            <span>Apply Now</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <NuxtLink to="/auth/login"
            class="inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/8 hover:bg-white/12 border border-white/12 transition focus:outline-none focus:ring-2 focus:ring-slate-400">
            Login
          </NuxtLink>
          <NuxtLink to="/auth/register"
            class="inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400">
            Register
          </NuxtLink>
          <button @click="mobileOpen = !mobileOpen"
            class="lg:hidden p-2 rounded-lg text-white bg-white/10 hover:bg-white/15 border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-400"
            :aria-expanded="mobileOpen" aria-label="Toggle navigation menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <div v-if="mobileOpen" class="lg:hidden bg-[#071C42] border-t border-white/10 px-4 pt-4 pb-6">
          <nav class="flex flex-col space-y-0.5 text-sm font-medium text-slate-300" aria-label="Mobile Navigation">
            <NuxtLink to="/" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Home</NuxtLink>
            <NuxtLink to="/courses" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Courses &amp; Programs</NuxtLink>
            <NuxtLink to="/webinars" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Webinars &amp; Masterclasses</NuxtLink>
            <NuxtLink to="/publications" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Publications &amp; Library</NuxtLink>
            <NuxtLink to="/jobs" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Maritime Jobs</NuxtLink>
            <a href="#about" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">About Us</a>
            <a href="#testimonials" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Testimonials</a>
            <a href="#faqs" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">FAQs</a>
            <a href="#contact" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition">Contact</a>
          </nav>
          <div class="pt-4 mt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <NuxtLink to="/auth/login" @click="mobileOpen = false" class="py-2.5 text-center text-xs font-medium text-white bg-white/10 rounded-xl border border-white/15 hover:bg-white/15 transition">Login</NuxtLink>
            <NuxtLink to="/auth/register" @click="mobileOpen = false" class="py-2.5 text-center text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition">Register</NuxtLink>
            <button @click="$emit('open-admission'); mobileOpen = false" class="col-span-2 py-3 text-center text-xs font-semibold uppercase tracking-wide bg-amber-400 text-slate-950 rounded-xl hover:bg-amber-300 transition">Apply for Admission</button>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineEmits(['open-admission', 'open-video']);

const coursesOpen = ref(false);
const mobileOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('home');

const courseOverview = [
  { label: 'GP-III Pre-Sea Rating Course (6 Months)', href: '#courses' },
  { label: 'Advance Diploma in Nautical Science (HND)', href: '#courses' },
  { label: 'Advance Diploma in Marine Engineering (HND)', href: '#courses' },
  { label: 'Basic Safety Training (BST STCW 2010)', href: '#courses' },
];
const courseHighlights = [
  { label: 'GMDSS General Operator Certificate (GOC)', href: '#courses' },
  { label: 'ECDIS Model Course 1.27 (Generic & Type)', href: '#courses' },
  { label: 'Advanced Fire Fighting (AFF) Refresher', href: '#courses' },
  { label: 'High Voltage Marine Systems', href: '#courses' },
];

function onScroll() {
  scrolled.value = window.scrollY > 20;
  const sections = ['contact', 'faqs', 'testimonials', 'blog', 'numbers', 'simulators', 'courses', 'about'];
  let current = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = id;
      break;
    }
  }
  activeSection.value = current;
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
