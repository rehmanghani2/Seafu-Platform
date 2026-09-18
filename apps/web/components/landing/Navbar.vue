<template>
  <header class="sticky top-0 z-50 w-full shadow-md" role="banner">
    
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP STATUTORY & ADMISSIONS TICKER                            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="bg-[#04142E] text-white text-[11px] py-2 px-4 border-b border-white/10" role="region" aria-label="Admissions & Maritime Announcements">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        <!-- Platform Value & Process Announcement -->
        <div class="flex items-center space-x-2.5 overflow-hidden">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-400 text-slate-950 tracking-wider animate-pulse shrink-0">
            Admissions 2026
          </span>
          <div class="truncate text-slate-200 font-medium text-[11px]">
            <span class="text-amber-300 font-bold">THE SEAFU GATEWAY:</span> Centralized STCW Training, Cadetships &bull; 100% Escrow Protected Booking &bull; Instant QR Verification
          </div>
        </div>

        <!-- Quick Contacts & Instant Verification -->
        <div class="flex items-center space-x-5 text-slate-300 text-[11px] shrink-0">
          <a
            href="https://wa.me/923366668475"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-400 transition flex items-center space-x-1.5 font-semibold text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded"
            aria-label="Admissions WhatsApp Assistance">
            <span>💬 WhatsApp:</span>
            <span>+92 336 6668475</span>
          </a>
          <span class="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
          <a
            href="tel:+922135681234"
            class="hover:text-white transition hidden md:flex items-center space-x-1 focus:outline-none focus:ring-1 focus:ring-white rounded"
            aria-label="Admissions Telephone Helpline">
            <span>📞 Helpline:</span>
            <span>+92 21 3568 1234</span>
          </a>
          <span class="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
          <NuxtLink
            to="/verify/IND-AFF-7714-ECDSA"
            class="text-cyan-300 hover:text-cyan-200 font-bold flex items-center space-x-1 focus:outline-none focus:ring-1 focus:ring-cyan-300 rounded"
            aria-label="Instant Cryptographic Certificate Verification">
            <span>🛡️ Verify Certificate</span>
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN NAVBAR: KEY SECTIONS & WEB APP DIRECTION                -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="bg-gradient-to-r from-[#04142E] via-[#071C42] to-[#04142E] border-b border-white/10 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[86px] flex items-center justify-between gap-4">
        
        <!-- Brand / Identity (Building Trust & Credibility) -->
        <NuxtLink to="/" class="flex items-center space-x-3.5 group shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl p-1" aria-label="The Seafu Platform Gateway Home">
          <div class="w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center relative">
            <img
              src="/logo-crest.png"
              alt="The Seafu Maritime Platform Official Crest"
              class="w-full h-full object-contain rounded-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
            />
            <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 border-2 border-[#04142E] rounded-full flex items-center justify-center text-[8px] text-white font-black" aria-hidden="true">⚓</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center space-x-2">
              <span class="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">The Seafu</span>
              <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">MTI PLATFORM</span>
            </div>
            <span class="text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Maritime Training &amp; Credentialing Gateway</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation: Exactly Based on A. Landing Website Key Sections -->
        <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13.5px] font-bold text-slate-200" aria-label="Landing Website Primary Sections">
          
          <!-- Key Section 1: Home -->
          <NuxtLink
            to="/"
            class="px-3 py-2 rounded-xl text-white hover:bg-white/10 transition font-extrabold focus:outline-none focus:ring-1 focus:ring-blue-400">
            Home
          </NuxtLink>

          <!-- Key Section 2: About Us -->
          <a
            href="#about"
            class="px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400">
            About Us
          </a>

          <!-- Key Section 3: Courses (Overview and Highlights Dropdown) -->
          <div class="relative group" @mouseenter="coursesOpen = true" @mouseleave="coursesOpen = false">
            <a
              href="#courses"
              class="px-3 py-2 rounded-xl flex items-center space-x-1.5 hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400"
              :class="coursesOpen ? 'bg-white/10 text-white' : 'text-slate-200'"
              aria-haspopup="true"
              :aria-expanded="coursesOpen">
              <span>Courses</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="coursesOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <!-- Courses Dropdown Panel: Overview & Highlights -->
            <div
              v-show="coursesOpen"
              class="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] z-50">
              <div class="bg-gradient-to-b from-[#081837] to-[#0A1D40] border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-6">
                
                <!-- Overview Column -->
                <div>
                  <div class="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <h4 class="text-xs font-black uppercase tracking-wider text-amber-400">Course Overview</h4>
                    <span class="text-[10px] text-slate-400">Academic Pathways</span>
                  </div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; GP-III Pre-Sea Rating Course (6 Months)
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; Advance Diploma in Nautical Science (HND Deck)
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; Advance Diploma in Marine Engineering (HND Engine)
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; Basic Safety Training (BST STCW 2010)
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Highlights Column -->
                <div>
                  <div class="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <h4 class="text-xs font-black uppercase tracking-wider text-cyan-400">Course Highlights</h4>
                    <span class="text-[10px] text-slate-400">Simulators &amp; Safety</span>
                  </div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; GMDSS General Operator Certificate (GOC)
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; ECDIS Model Course 1.27 (Generic &amp; Type)
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; Advanced Fire Fighting (AFF) Refresher
                      </a>
                    </li>
                    <li>
                      <a href="#courses" class="hover:text-white hover:translate-x-1 inline-block transition font-semibold">
                        &bull; High Voltage Marine Systems (Management)
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Bottom Full Catalog Strip -->
                <div class="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span class="text-slate-400">IMO Model Courses &bull; DG / UK MCA Accredited</span>
                  <NuxtLink to="/courses" class="text-amber-400 hover:text-amber-300 font-extrabold flex items-center space-x-1">
                    <span>Explore Full Courses Catalog</span>
                    <span>→</span>
                  </NuxtLink>
                </div>

              </div>
            </div>
          </div>

          <!-- Key Section 4: Testimonials -->
          <a
            href="#testimonials"
            class="px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400">
            Testimonials
          </a>

          <!-- Key Section 5: FAQs -->
          <a
            href="#faqs"
            class="px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400">
            FAQs
          </a>

          <!-- Key Section 6: Contact Form -->
          <a
            href="#contact"
            class="px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400">
            Contact Form
          </a>

          <!-- Key Section 7: Blog / Knowledge Section -->
          <a
            href="#blog"
            class="px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-blue-400">
            Blog
          </a>

        </nav>

        <!-- Functions: Directs Users to Register or Log in to Web App -->
        <div class="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
          
          <!-- Apply Action Button -->
          <button
            @click="$emit('open-admission')"
            class="hidden sm:inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-400/20 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400">
            <span>Apply Now</span>
            <span class="ml-1" aria-hidden="true">⚡</span>
          </button>

          <!-- Function 1: Directs Users to Login to Web App -->
          <NuxtLink
            to="/auth/login"
            class="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Login to Seafu Web Application">
            <span>Login</span>
          </NuxtLink>

          <!-- Function 2: Directs Users to Register on Web App -->
          <NuxtLink
            to="/auth/register"
            class="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-black text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Register New Account on Seafu Web Application">
            <span>Register</span>
          </NuxtLink>

          <!-- Mobile Hamburger Toggle -->
          <button
            @click="mobileOpen = !mobileOpen"
            class="lg:hidden p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/15 border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-400"
            :aria-expanded="mobileOpen"
            aria-label="Toggle Landing Navigation Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>

      </div>

      <!-- Mobile Navigation Drawer: All 7 Key Sections -->
      <div v-if="mobileOpen" class="lg:hidden bg-[#071C42] border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
        <nav class="flex flex-col space-y-1.5 text-sm font-bold text-slate-200" aria-label="Mobile Landing Navigation">
          <NuxtLink to="/" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg bg-white/10 text-white font-extrabold">Home</NuxtLink>
          <a href="#about" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">About Us</a>
          <a href="#courses" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">Courses (Overview &amp; Highlights)</a>
          <a href="#testimonials" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">Testimonials</a>
          <a href="#faqs" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">FAQs</a>
          <a href="#contact" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">Contact Form</a>
          <a href="#blog" @click="mobileOpen = false" class="py-2.5 px-3 rounded-lg hover:bg-white/5">Blog &amp; Knowledge</a>
        </nav>

        <!-- Mobile Web App Direction Controls -->
        <div class="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
          <NuxtLink to="/auth/login" @click="mobileOpen = false" class="py-2.5 text-center text-xs font-bold text-white bg-white/10 rounded-xl">
            Login
          </NuxtLink>
          <NuxtLink to="/auth/register" @click="mobileOpen = false" class="py-2.5 text-center text-xs font-black text-white bg-blue-600 rounded-xl">
            Register
          </NuxtLink>
          <button @click="$emit('open-admission'); mobileOpen = false" class="col-span-2 py-3 text-center text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 rounded-xl shadow-md">
            Apply for Admission ⚡
          </button>
        </div>
      </div>

    </div>

  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineEmits(['open-admission']);

const coursesOpen = ref(false);
const mobileOpen = ref(false);
</script>
