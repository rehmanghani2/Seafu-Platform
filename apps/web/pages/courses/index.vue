<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-20">

    <!-- Hero Header -->
    <header class="relative pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>The Seafu Platform &bull; DG Shipping &amp; IMO STCW Accredited Academies</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-tight">
            The Seafu — Maritime Training Academy & STCW Course Discovery
          </h1>
          <p class="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct verified enrollment for DG Shipping approved Pre-Sea Cadet Programs, SQA HND Maritime Diplomas, and mandatory IMO STCW Modular Simulators across accredited maritime academies.
          </p>
        </div>

        <!-- Right Placement Badge -->
        <div class="lg:shrink-0 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex items-center space-x-4">
          <div class="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Placements June 2026</div>
            <div class="text-lg font-black text-slate-900">350+ Pre-Sea Cadets</div>
            <div class="text-[10px] text-slate-600">PNSC &bull; Anglo-Eastern &bull; Bernhard Schulte</div>
          </div>
        </div>
      </div>

      <!-- 3-Field Interactive Search Bar -->
      <div class="mt-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          <!-- Col 1: Program Level -->
          <div class="md:col-span-4">
            <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1.5">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Program Level or STCW Type</span>
            </label>
            <div class="relative">
              <select
                v-model="selectedCategory"
                class="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white pr-8 font-medium"
              >
                <option value="ALL">All Official Programs (18 Verified)</option>
                <option value="PRE_SEA">Pre-Sea GP-III Rating & Cadet Programs</option>
                <option value="HND">Advance Diplomas (HND SQA Level 8)</option>
                <option value="SIMULATOR">Full-Mission Simulators (ECDIS/LCHS/ERS)</option>
                <option value="STCW_MODULAR">STCW Mandatory Modular & Safety Refresher</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Col 2: Practical Grounds / Campus -->
          <div class="md:col-span-3">
            <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1.5">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Practical Grounds / Campus</span>
            </label>
            <div class="relative">
              <select
                v-model="selectedFacility"
                class="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white pr-8 font-medium"
              >
                <option value="ALL">All Verified Academy Simulator Suites</option>
                <option value="KPT">KPT Apprentice Yard Practical Field</option>
                <option value="TRANSAS">Transas NTPRO 4000 Bridge Suite</option>
                <option value="WARTSILA">Wärtsilä 5-Console Engine Lab</option>
                <option value="LCHS">Liquid Cargo Handling Simulator Hub</option>
                <option value="GMDSS">GMDSS Sailor Transceiver Bay</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Col 3: Intake / Session Window -->
          <div class="md:col-span-3">
            <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1.5">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Intake / Session Window</span>
            </label>
            <div class="relative">
              <select
                v-model="selectedIntake"
                class="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white pr-8 font-medium"
              >
                <option value="ALL">All 2026 Batch Windows</option>
                <option value="JUNE">June 2026 Intake Active</option>
                <option value="WEEKLY">Weekly Simulator Batches (Immediate)</option>
                <option value="WINTER">Winter Dec 2026 (Registration Open)</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Col 4: Action Button -->
          <div class="md:col-span-2">
            <button
              @click="triggerSearch"
              class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs transition flex items-center justify-center space-x-1.5"
            >
              <span>Search Batches</span>
              <svg class="w-3.5 h-3.5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Guaranteed Seats Pills -->
        <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mr-1">GUARANTEED SEATS:</span>
          <button
            @click="selectedCategory = 'ALL'"
            :class="selectedCategory === 'ALL' ? 'bg-blue-50 text-blue-700 border-blue-300 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'"
            class="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition"
          >
            ALL OFFICIAL PROGRAMS (18)
          </button>
          <button
            @click="selectedCategory = 'PRE_SEA'"
            :class="selectedCategory === 'PRE_SEA' ? 'bg-blue-50 text-blue-700 border-blue-300 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'"
            class="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition"
          >
            Pre-Sea Cadet Training (GP-III)
          </button>
          <button
            @click="selectedCategory = 'HND'"
            :class="selectedCategory === 'HND' ? 'bg-blue-50 text-blue-700 border-blue-300 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'"
            class="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition"
          >
            HND Diplomas (Nautical & Marine Eng)
          </button>
          <button
            @click="selectedCategory = 'SIMULATOR'"
            :class="selectedCategory === 'SIMULATOR' ? 'bg-blue-50 text-blue-700 border-blue-300 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'"
            class="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition"
          >
            Simulators (ECDIS / GOC / LCHS)
          </button>
          <button
            @click="showFaqModal = true"
            class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-600 border border-slate-200 hover:text-blue-700 transition"
          >
            FAQ
          </button>
          <NuxtLink
            to="/courses/bundles"
            class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition flex items-center gap-1.5 ml-auto"
          >
            <span>Career Combos &amp; Bundles (Save 25%)</span>
            <svg class="w-3 h-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content Area: 2-Column Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- LEFT SIDEBAR: 3.5 Columns -->
        <aside class="lg:col-span-4 space-y-6">
          <!-- Card 1: UK Objective Partner -->
          <div id="glasgow-partner" class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs relative overflow-hidden">
            <div class="absolute -right-8 -top-8 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-black uppercase tracking-wider text-blue-700">UK OBJECTIVE PARTNER</span>
              <span class="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase">
                FLAGSHIP INT.
              </span>
            </div>
            <h3 class="text-base font-black text-slate-900 leading-snug">
              City of Glasgow College (UK)
            </h3>
            <p class="mt-2 text-xs text-slate-600 leading-relaxed">
              Pre-Sea Nautical Science & Marine Engineering SQA Level 8 leading to UK MCA Officer of the Watch (OOW) Certificate of Competency.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
              <a
                href="#glasgow-articulation"
                @click.prevent="openArticulationDetails"
                class="text-xs font-bold text-blue-700 hover:text-blue-700 inline-flex items-center space-x-1"
              >
                <span>Check UK Route Articulation</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span class="text-[10px] text-slate-600">UK MCA CoC</span>
            </div>
          </div>

          <!-- Card 2: Filter Maritime Programs Widget -->
          <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h4 class="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Filter Maritime Programs</h4>
              </div>
              <button
                @click="resetAllFilters"
                class="text-[10px] font-bold text-blue-700 hover:text-blue-700 uppercase tracking-wider"
              >
                RESET
              </button>
            </div>

            <!-- Program Category -->
            <div>
              <div class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-2.5">
                PROGRAM CATEGORY
              </div>
              <div class="space-y-2">
                <label class="flex items-center justify-between text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <div class="flex items-center space-x-2.5">
                    <input type="checkbox" v-model="filterChecks.gp3" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                    <span>Pre-Sea Training (GP-III)</span>
                  </div>
                  <span class="text-[10px] text-blue-700 font-mono bg-blue-50 px-1.5 py-0.5 rounded">1 Active</span>
                </label>
                <label class="flex items-center justify-between text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <div class="flex items-center space-x-2.5">
                    <input type="checkbox" v-model="filterChecks.hnd" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                    <span>Advance Diplomas (AD / HND)</span>
                  </div>
                  <span class="text-[10px] text-slate-600 font-mono bg-slate-800 px-1.5 py-0.5 rounded">2 Streams</span>
                </label>
                <label class="flex items-center justify-between text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <div class="flex items-center space-x-2.5">
                    <input type="checkbox" v-model="filterChecks.simulators" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                    <span>Full-Mission Simulators</span>
                  </div>
                  <span class="text-[10px] text-slate-600 font-mono bg-slate-800 px-1.5 py-0.5 rounded">3 Suites</span>
                </label>
                <label class="flex items-center justify-between text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <div class="flex items-center space-x-2.5">
                    <input type="checkbox" v-model="filterChecks.stcw" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                    <span>STCW Modular Refresher</span>
                  </div>
                  <span class="text-[10px] text-slate-600 font-mono bg-slate-800 px-1.5 py-0.5 rounded">12 Modules</span>
                </label>
              </div>
            </div>

            <!-- Minimum Qualification -->
            <div class="pt-3 border-t border-slate-100">
              <div class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-2.5">
                MINIMUM QUALIFICATION
              </div>
              <div class="space-y-2">
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterQuals.matric" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>Matric / Intermediate (GP-III)</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterQuals.fsc" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>F.Sc Pre-Eng (min 55% for HND Streams)</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterQuals.coc" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>Sea-Time / CoC (Offshore Competency)</span>
                </label>
              </div>
            </div>

            <!-- Campus Simulator Labs -->
            <div class="pt-3 border-t border-slate-100">
              <div class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-2.5">
                CAMPUS SIMULATOR LABS
              </div>
              <div class="space-y-2">
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterLabs.transas" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>Wärtsilä Transas Bridge Simulator</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterLabs.ers" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>5-Console Engine Room Simulator</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterLabs.lchs" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>Liquid Cargo Handling (LCHS)</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterLabs.gmdss" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>GMDSS / Sailor Transceiver Hub</span>
                </label>
                <label class="flex items-center space-x-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" v-model="filterLabs.hv" class="rounded border-slate-200 bg-slate-900 text-cyan-500 focus:ring-0" />
                  <span>High Voltage 6.6 kV Breaker Bay</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Card 3: Admissions Helpline -->
          <div class="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 shadow-xs">
            <div class="flex items-center space-x-2 text-amber-400 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-xs font-black uppercase tracking-wider">ADMISSIONS HELPLINE</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Speak directly with Captains & Chief Engineers for cadet counselling, batch reservation, and sea-time articulation.
            </p>
            <a
              href="tel:+923366668475"
              class="w-full bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Direct Line: +92 336 6668475</span>
            </a>
          </div>
        </aside>

        <!-- RIGHT CATALOG: 8 Columns -->
        <section class="lg:col-span-8 space-y-6">
          <!-- Catalog Header Bar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div>
              <div class="flex items-center space-x-2">
                <h2 class="text-base font-extrabold text-slate-900">8 Official Programs Verified</h2>
                <span class="text-slate-600">&bull;</span>
                <span class="text-xs font-bold text-emerald-400 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  DG Ports & Shipping Approved
                </span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5">DG Shipping &amp; IMO Accredited &bull; Full-Time Campus Training &amp; Kongsberg Simulators</p>
            </div>

            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider">SORT BY:</span>
              <select
                v-model="sortOrder"
                class="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-cyan-400 font-medium"
              >
                <option value="priority">PRIORITY ADMISSIONS (JUNE 2026)</option>
                <option value="duration">COURSE DURATION</option>
                <option value="fee_asc">FEE: LOW TO HIGH</option>
                <option value="fee_desc">FEE: HIGH TO LOW</option>
              </select>
            </div>
          </div>

          <!-- Featured Top Card: Glasgow College (UK) Partnership Program -->
          <div class="bg-white border-2 border-blue-300 rounded-2xl p-6 shadow-xs relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="bg-cyan-500/20 text-blue-700 border border-blue-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                FLAGSHIP INTERNATIONAL ROUTE
              </span>
              <span class="bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                PARTNER ARTICULATION
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div class="md:col-span-8 space-y-2.5">
                <h3 class="text-xl font-black text-slate-900">
                  City of Glasgow College (UK) Partnership Program — HND SQA Level 8
                </h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Comprehensive Scottish Qualifications Authority (SQA) accredited Higher National Diploma in Nautical Science or Marine Engineering across accredited academies. Complete Year 1 & 2 at an accredited institute, then transfer to City of Glasgow College, leading to the prestigious UK MCA Officer of the Watch (OOW) Certificate of Competency.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="inline-flex items-center text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    &check; Scottish Qualifications Authority (SQA) Level 8
                  </span>
                  <span class="inline-flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    &check; UK MCA Dual Exam Pathway
                  </span>
                </div>
              </div>

              <!-- Right Box CTA -->
              <div class="md:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                <div class="text-[10px] font-bold uppercase text-amber-400 tracking-wider">ENROLL ACTIVE</div>
                <div class="text-lg font-black text-slate-900">June 2026 Batch</div>
                <div class="text-[10px] text-slate-600">Eligibility: F.Sc Pre-Eng (Min 55%)</div>
                <button
                  @click="openEnrollModal('City of Glasgow College HND SQA Level 8')"
                  class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-black text-xs py-2.5 px-3 rounded-lg shadow-md shadow-cyan-500/20 transition uppercase tracking-wide"
                >
                  Inquire and Pre-Enroll
                </button>
              </div>
            </div>
          </div>

          <!-- 8 DETAILED PROGRAM CARDS -->
          <div class="space-y-5">
            <!-- Card 1: GP-III General Purpose Rating -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                    alt="GP-III Cadet Training"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-cyan-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    PRE-SEA CADET MANDATORY
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>KPT Apprentice Yard Field</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">DG-Approved #1</span>
                        <span class="text-xs text-slate-600">&bull; General Purpose Rating</span>
                      </div>
                      <span class="text-[10px] font-bold text-amber-400 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        June 2026 Intake
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      GP-III General Purpose Rating (Pre-Sea Mandatory Course)
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Official pre-sea training program equipping seafarers for deck and engine watchkeeping duties in accordance with the International Convention on STCW Code A-II/4 & A-III/4.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">6 Months</div>
                        <div class="text-[9px] text-slate-600">Full-Time Residential</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">SESSION WINDOW</div>
                        <div class="font-bold text-blue-700">Summer / Winter</div>
                        <div class="text-[9px] text-slate-600">June 2026 &bull; Dec 2026</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">TRAINING GROUNDS</div>
                        <div class="font-bold text-slate-900">KPT Yard</div>
                        <div class="text-[9px] text-slate-600">Workshops & Seamanship</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">MIN REQUIREMENT</div>
                        <div class="font-bold text-amber-300">Matric Science</div>
                        <div class="text-[9px] text-slate-600">SSC 50% min, Max 25 yrs</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">TOTAL FEE / TUITION</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 185,000 <span class="text-[10px] text-slate-600 font-normal">+ Govt. Pre-Sea Medical</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('GP-III')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Download Syllabus
                      </button>
                      <button @click="openEnrollModal('GP-III General Purpose Rating')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Apply for GP-III
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2: Advance Diploma (AD) Nautical Science -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                    alt="Transas NTPRO 4000 Bridge"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-blue-500 text-slate-900 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    UK MCA DUAL PATHWAY
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Transas NTPRO 4000 Bridge</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">SQA LEVEL 8</span>
                        <span class="text-xs text-slate-600">&bull; City of Glasgow College</span>
                      </div>
                      <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        3-Year Cadet Route
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      Advance Diploma (AD) Nautical Science (Leading to OOW UK MCA)
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Two years intensive cadet pre-sea academic foundation and navigational simulator practice, forming a direct transfer credit route to City of Glasgow College leading to UK MCA Officer of the Watch (OOW).
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">2 Academic Years</div>
                        <div class="text-[9px] text-slate-600">Phase 1: Karachi</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">INTAKE CAPACITY</div>
                        <div class="font-bold text-blue-700">7 Seats Pre-Sea</div>
                        <div class="text-[9px] text-slate-600">Strict Merit Interview</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">SIMULATOR LAB</div>
                        <div class="font-bold text-slate-900">Transas Bridge</div>
                        <div class="text-[9px] text-slate-600">Visual Navigation Suite</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">EXAM / COC ROUTE</div>
                        <div class="font-bold text-emerald-300">UK MCA OOW</div>
                        <div class="text-[9px] text-slate-600">Glasgow Articulation</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">TUITION & SQA REGISTRATION</div>
                      <div class="text-base font-black text-slate-900">
                        Structured Installments <span class="text-[10px] text-slate-600 font-normal">Semester Based Fees</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('AD Nautical Science')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Prospectus
                      </button>
                      <button @click="openEnrollModal('AD Nautical Science')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Enroll Nautical AD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 3: Advance Diploma (AD) Marine Engineering -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                    alt="Wärtsilä 5-Console ERS"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-cyan-600 text-slate-900 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    FLAGSHIP ENGINEERING
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Wärtsilä 5-Console ERS</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">SQA LEVEL 8</span>
                        <span class="text-xs text-slate-600">&bull; SQA Unit Credit Hub</span>
                      </div>
                      <span class="text-[10px] font-bold text-amber-400 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        Phase 1 & II / Karachi
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      Advance Diploma (AD) Marine Engineering (HND SQA Level 8)
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Pre-sea marine engineer officer course providing in-depth understanding of shipboard auxiliary systems, marine diesel engines, steam plant operations, and electrical troubleshooting.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">2 Years Full-Time</div>
                        <div class="text-[9px] text-slate-600">Karachi Campus</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">ENTRY REQUIREMENT</div>
                        <div class="font-bold text-blue-700">F.Sc / DAE</div>
                        <div class="text-[9px] text-slate-600">Min 55% or Mech/Elec</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">ENGINE LAB</div>
                        <div class="font-bold text-slate-900">Wärtsilä 5-Console</div>
                        <div class="text-[9px] text-slate-600">High-fidelity Machinery</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">ACADEMIC VALUE</div>
                        <div class="font-bold text-emerald-300">Level 8 Credits</div>
                        <div class="text-[9px] text-slate-600">Glasgow Transfer Option</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">ENROLLMENT STATUS</div>
                      <div class="text-base font-black text-slate-900">
                        June 2026 Batch <span class="text-[10px] text-blue-700 font-normal">Admissions Underway</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('AD Marine Engineering')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Curriculum
                      </button>
                      <button @click="openEnrollModal('AD Marine Engineering')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Apply Marine Eng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4: ECDIS Simulator Course -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                    alt="Radar Simulator ECDIS Lab"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    IMO MODEL 1.27
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Radar Simulator ECDIS Lab</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">STCW Reg II/1, II/2, II/3</span>
                        <span class="text-xs text-slate-600">&bull; Transas Navi-Sailor 4000</span>
                      </div>
                      <span class="text-[10px] font-bold text-emerald-400 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        Weekly Batches
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      Electronic Chart Display & Information Systems (ECDIS) Simulator Course
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Official IMO Model Course 1.27 compliant simulator navigation training on operational use of electronic navigational charts, ECDIS route planning, route monitoring, and sensor integration.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">5 Days (40 hrs)</div>
                        <div class="text-[9px] text-slate-600">Hands-on Console</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">TARGET AUDIENCE</div>
                        <div class="font-bold text-blue-700">Deck Officers</div>
                        <div class="text-[9px] text-slate-600">Captains, Chief Mates, OOW</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">TECHNOLOGY</div>
                        <div class="font-bold text-slate-900">Transas 4000</div>
                        <div class="text-[9px] text-slate-600">Dual Electronic Station</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">CERTIFICATION</div>
                        <div class="font-bold text-emerald-300">IMO & DG Approved</div>
                        <div class="text-[9px] text-slate-600">Instant QR Verified</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">COURSE INVESTMENT</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 35,000 <span class="text-[10px] text-slate-600 font-normal">Per Candidate (Net)</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('ECDIS 1.27')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Brochure
                      </button>
                      <button @click="openEnrollModal('ECDIS Simulator Course')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Book ECDIS Seat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 5: GMDSS General Operator's Certificate (GOC) -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
                    alt="GMDSS / Sailor Transceiver Lab"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-blue-600 text-slate-900 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    GMDSS CONSOLE
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Sailor 4000 Transceiver Lab</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">STCW A-IV/2</span>
                        <span class="text-xs text-slate-600">&bull; PTA / DG Shipping Approved</span>
                      </div>
                      <span class="text-[10px] font-bold text-amber-400 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        2nd & 4th Sat
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      GMDSS General Operator's Certificate (GOC) & Exam Prep
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Intensive maritime telecommunications course including MF/HF radiotelephony, Inmarsat-C, EPIRB, SART, NAVTEX, and distress communication protocols with full DG Examination preparation.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">12 Working Days</div>
                        <div class="text-[9px] text-slate-600">Theory & Live Practice</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">EQUIPMENT</div>
                        <div class="font-bold text-blue-700">Sailor 6000 Series</div>
                        <div class="text-[9px] text-slate-600">Console Simulation</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">COVERAGE</div>
                        <div class="font-bold text-slate-900">Sea Areas A1-A4</div>
                        <div class="text-[9px] text-slate-600">Distress / Commercial</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">EXAM BODY</div>
                        <div class="font-bold text-emerald-300">DG Ports Exam</div>
                        <div class="text-[9px] text-slate-600">Statutory Committee</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">COURSE INVESTMENT</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 45,000 <span class="text-[10px] text-slate-600 font-normal">Exclusive Exam Fee</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('GMDSS GOC')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Syllabus
                      </button>
                      <button @click="openEnrollModal('GMDSS GOC')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Reserve GOC
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 6: Liquid Cargo Handling Simulator (LCHS) -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
                    alt="LCHS / Cargo Simulator Room"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-amber-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    TANKER SPECIALIZED
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>LCHS / Complex Cargo Room</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">STCW Reg V/1-1, & V/1-2</span>
                        <span class="text-xs text-slate-600">&bull; Multi-Tanker Cargo Model</span>
                      </div>
                      <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        Advanced Level
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      Liquid Cargo Handling Simulator (LCHS / LICOS) Tanker Course
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Advanced hands-on cargo loading, discharge, inerting, tank cleaning and ballast operations on simulated chemical, crude oil, and liquefied gas carrier cargo systems.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">5 Days</div>
                        <div class="text-[9px] text-slate-600">Software Scenarios 30h</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">VESSEL TYPES</div>
                        <div class="font-bold text-blue-700">VLCC / Chem / LNG</div>
                        <div class="text-[9px] text-slate-600">Multi-Cargo Setups</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">ELIGIBILITY</div>
                        <div class="font-bold text-slate-900">Tanker Sea-Time</div>
                        <div class="text-[9px] text-slate-600">Deck/Engine Officers</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">INSTRUCTOR</div>
                        <div class="font-bold text-emerald-300">Master Mariners</div>
                        <div class="text-[9px] text-slate-600">Extensive Tanker Cmd</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">FEE</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 55,000 <span class="text-[10px] text-slate-600 font-normal">Advanced Certification</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('LCHS Tanker')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Details
                      </button>
                      <button @click="openEnrollModal('LCHS Tanker Simulator')" class="text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-lg shadow-md shadow-amber-500/20 transition">
                        Book LCHS Batch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 7: High Voltage (HV) Safety & Switch Gear -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
                    alt="6.6 kV Switchboard Cubicle Bay"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-cyan-600 text-slate-900 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    HIGH VOLTAGE LAB
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>6.6 kV Switch Breaker Bay</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">STCW Reg III/1, III/2, III/6</span>
                        <span class="text-xs text-slate-600">&bull; Operational & Management</span>
                      </div>
                      <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        Automated HV Test Bay
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      High Voltage (HV) Safety & Switch Gear (Operational & Management Level)
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Comprehensive safe electrical switching, vacuum circuit breaker servicing, earthing procedures and fault troubleshooting on 6.6 kV marine electrical distribution installations.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">5 Days Hands-on</div>
                        <div class="text-[9px] text-slate-600">HV Breaker Bay</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">TARGET LEVEL</div>
                        <div class="font-bold text-blue-700">EOOW / 2/E / C/E</div>
                        <div class="text-[9px] text-slate-600">Chief Electricians</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">FACILITY</div>
                        <div class="font-bold text-slate-900">Live 6.6 kV Panel</div>
                        <div class="text-[9px] text-slate-600">Vacuum / SF6 Switchgear</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">STANDARDS</div>
                        <div class="font-bold text-emerald-300">STCW 2010 Manila</div>
                        <div class="text-[9px] text-slate-600">Mandatory HV Req.</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">COURSE FEE</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 50,000 <span class="text-[10px] text-slate-600 font-normal">Includes PPE Gear Usage</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('HV Safety')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Lab Overview
                      </button>
                      <button @click="openEnrollModal('High Voltage Safety & Switch Gear')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Apply HV Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 8: Advance Fire Fighting (AFF) -->
            <div class="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Image Col -->
                <div class="md:col-span-4 relative min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                    alt="KPT Practical Fire Ground"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div class="absolute top-2.5 left-2.5 bg-amber-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    STCW SAFETY DRILL
                  </div>
                  <div class="absolute bottom-2 left-2.5 text-[10px] text-slate-600 flex items-center space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>KPT Practical Fire Field</span>
                  </div>
                </div>

                <!-- Info Col -->
                <div class="md:col-span-8 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">STCW Reg A-VI/3</span>
                        <span class="text-xs text-slate-600">&bull; Fire Fighting Ground KPT</span>
                      </div>
                      <span class="text-[10px] font-bold text-emerald-400 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        Continuous Batches
                      </span>
                    </div>
                    <h3 class="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      Advance Fire Fighting (AFF) & Refresher Updating Training
                    </h3>
                    <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      Practical and theoretical command training in organizing and controlling shipboard fire parties, tactics, smoke diving, BA cylinder operation, and chemical fire extinguishing.
                    </p>

                    <!-- 4 Specs Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">DURATION</div>
                        <div class="font-bold text-slate-900">4 Days Practical</div>
                        <div class="text-[9px] text-slate-600">Live Smoke & Burn Field</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">ENTRY PREREQUISITE</div>
                        <div class="font-bold text-blue-700">FPFF & Seaman Book</div>
                        <div class="text-[9px] text-slate-600">Safety Drill Validation</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">GROUNDS</div>
                        <div class="font-bold text-slate-900">KPT Fire Field</div>
                        <div class="text-[9px] text-slate-600">Real Ship Compartment</div>
                      </div>
                      <div>
                        <div class="text-[9px] uppercase font-bold text-slate-500">APPROVED BY</div>
                        <div class="font-bold text-emerald-300">DG Ports PK</div>
                        <div class="text-[9px] text-slate-600">Statutory Certificate</div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer Actions -->
                  <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-[9px] text-slate-500 uppercase font-bold">COURSE FEE</div>
                      <div class="text-lg font-black text-slate-900">
                        PKR 18,000 <span class="text-[10px] text-slate-600 font-normal">Full Practical Fee</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="downloadSyllabus('AFF')" class="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 bg-white transition">
                        Field Specs
                      </button>
                      <button @click="openEnrollModal('Advance Fire Fighting (AFF)')" class="text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition">
                        Book AFF Batch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Certificate Verification Banner -->
          <div class="bg-white border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-extrabold text-slate-900">Instant Online Certificate Verification System</h4>
                <p class="text-xs text-slate-600 mt-0.5 max-w-xl">
                  All maritime academy certificates are issued with instantaneous QR-code validation and stored permanently on The Seafu verified ledger for port authorities and international shipowners.
                </p>
              </div>
            </div>
            <NuxtLink
              to="/verification"
              class="shrink-0 bg-cyan-500/10 hover:bg-cyan-500/20 border border-blue-300 text-blue-700 font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center space-x-1.5"
            >
              <span>Verify via The Seafu Ledger</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- Bottom Authority Strip (3-Column) -->
      <section class="mt-16 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white border border-slate-100 rounded-xl p-5">
          <div class="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-blue-700 mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h4 class="text-sm font-bold text-slate-900">DG Ports & Shipping Approved</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            Accredited by the Directorate General of Ports and Shipping, Ministry of Maritime Affairs, Govt. of Pakistan under statutory STCW Manila Amendments and national training requirements.
          </p>
        </div>

        <div class="bg-white border border-slate-100 rounded-xl p-5">
          <div class="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-sm font-bold text-slate-900">City of Glasgow College Link</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            Academic articulation with Scotland's premier nautical college providing seafarers direct transfer pathways towards UK MCA maritime certificates of competency.
          </p>
        </div>

        <div class="bg-white border border-slate-100 rounded-xl p-5">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-sm font-bold text-slate-900">25+ Years of Excellence (1998)</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            Over two decades producing top maritime professionals, Chief Engineers, and Master Mariners serving onboard premier international merchant fleets worldwide.
          </p>
        </div>
      </section>

      <!-- Footer Bar -->
      <footer class="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>The Seafu Maritime Training Network &bull; DG Approved Maritime Training Excellence &bull; International Academic Partners</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="tel:+923366668475" class="hover:text-blue-700 transition-colors">+92 336 6668475</a>
          <span class="text-slate-700">&bull;</span>
          <a href="mailto:info@mti.edu.pk" class="hover:text-blue-700 transition-colors">info@mti.edu.pk</a>
          <span class="text-slate-700">&bull;</span>
          <span class="text-slate-500">mti-karachi.edu.pk</span>
        </div>
      </footer>
    </main>

    <!-- INTERACTIVE MODAL: Batch Booking & Enrollment -->
    <div v-if="bookingModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="bg-white border border-blue-300 rounded-2xl max-w-lg w-full p-6 shadow-xs shadow-cyan-950/80 relative">
        <button
          @click="bookingModalOpen = false"
          class="absolute top-4 right-4 text-slate-600 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-800"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div v-if="!bookingConfirmed">
          <div class="flex items-center space-x-2 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Batch Registration & Seat Lock</span>
          </div>
          <h3 class="text-xl font-black text-slate-900">{{ selectedCourseForBooking }}</h3>
          <p class="text-xs text-slate-600 mt-1">
            Provide your seafarer details to reserve your seat in the upcoming batch cycle.
          </p>

          <form @submit.prevent="submitBooking" class="mt-5 space-y-3">
            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Candidate Full Name</label>
              <input
                v-model="bookingForm.fullName"
                type="text"
                required
                placeholder="e.g. Cadet Muhammad Tariq"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">CDC / Passport / CNIC</label>
                <input
                  v-model="bookingForm.cdcNumber"
                  type="text"
                  required
                  placeholder="e.g. KHI-CDC-49102"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Contact Phone</label>
                <input
                  v-model="bookingForm.phone"
                  type="tel"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1">Select Batch Window</label>
              <select
                v-model="bookingForm.batchDate"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-400"
              >
                <option value="June 2026 Intake">June 2026 Intake (Main Pre-Sea Intake)</option>
                <option value="Weekly Simulator Batch">Upcoming Monday Batch (Simulators)</option>
                <option value="Winter Dec 2026">Winter Dec 2026 Cycle</option>
              </select>
            </div>

            <div class="pt-3 flex items-center justify-end space-x-3">
              <button
                type="button"
                @click="bookingModalOpen = false"
                class="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl border border-slate-200 hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-5 py-2 text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-xs shadow-cyan-500/20 transition uppercase tracking-wide"
              >
                Confirm Batch Booking &rarr;
              </button>
            </div>
          </form>
        </div>

        <!-- Booking Confirmed View -->
        <div v-else class="text-center py-4 space-y-4">
          <div class="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-black text-slate-900">Enrollment Reserved Successfully!</h4>
            <p class="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Your provisional seat for <strong class="text-blue-700">{{ selectedCourseForBooking }}</strong> has been logged under reference code <span class="font-mono text-amber-300">{{ bookingReference }}</span>.
            </p>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left text-xs space-y-1">
            <div class="text-slate-600">Candidate: <span class="text-slate-900 font-semibold">{{ bookingForm.fullName }}</span></div>
            <div class="text-slate-600">Identifier: <span class="text-slate-900 font-mono">{{ bookingForm.cdcNumber }}</span></div>
            <div class="text-slate-600">Batch: <span class="text-blue-700 font-semibold">{{ bookingForm.batchDate }}</span></div>
          </div>
          <div class="flex items-center justify-center space-x-3 pt-2">
            <NuxtLink
              to="/seafarer/dashboard"
              class="px-4 py-2 text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition"
            >
              Open Cadet Command Vault
            </NuxtLink>
            <button
              @click="bookingModalOpen = false"
              class="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl border border-slate-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Modal -->
    <div v-if="showFaqModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="bg-white border border-blue-300 rounded-2xl max-w-lg w-full p-6 shadow-xs relative max-h-[85vh] overflow-y-auto">
        <button
          @click="showFaqModal = false"
          class="absolute top-4 right-4 text-slate-600 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-800"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 class="text-lg font-black text-slate-900 mb-4">Admissions & Booking FAQ</h3>
        <div class="space-y-4 text-xs text-slate-600">
          <div>
            <div class="font-bold text-blue-700">Q: When does the June 2026 Pre-Sea GP-III Intake start?</div>
            <p class="text-slate-600 mt-1">Pre-sea GP-III residential training begins early June 2026. Entrance medical examinations and uniform fittings are scheduled throughout May.</p>
          </div>
          <div>
            <div class="font-bold text-blue-700">Q: How does the City of Glasgow College articulation work?</div>
            <p class="text-slate-600 mt-1">Students complete Year 1 & 2 HND SQA Level 8 at an accredited maritime academy, followed by articulation to City of Glasgow College in the UK for MCA CoC examinations.</p>
          </div>
          <div>
            <div class="font-bold text-blue-700">Q: Are certificates verifiable online?</div>
            <p class="text-slate-600 mt-1">Yes, all issued modular and competency certificates carry high-security QR codes verifiable on mtiverification.com and the national DG registry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// Selected Filters State
const selectedCategory = ref('ALL');
const selectedFacility = ref('ALL');
const selectedIntake = ref('ALL');
const sortOrder = ref('priority');

const filterChecks = reactive({
  gp3: true,
  hnd: true,
  simulators: true,
  stcw: true,
});

const filterQuals = reactive({
  matric: true,
  fsc: false,
  coc: false,
});

const filterLabs = reactive({
  transas: false,
  ers: false,
  lchs: false,
  gmdss: false,
  hv: false,
});

function resetAllFilters() {
  selectedCategory.value = 'ALL';
  selectedFacility.value = 'ALL';
  selectedIntake.value = 'ALL';
  filterChecks.gp3 = true;
  filterChecks.hnd = true;
  filterChecks.simulators = true;
  filterChecks.stcw = true;
  filterQuals.matric = false;
  filterQuals.fsc = false;
  filterQuals.coc = false;
  filterLabs.transas = false;
  filterLabs.ers = false;
  filterLabs.lchs = false;
  filterLabs.gmdss = false;
  filterLabs.hv = false;
}

function triggerSearch() {
  // Smooth scroll down to programs section
  window.scrollTo({
    top: 520,
    behavior: 'smooth',
  });
}

function openArticulationDetails() {
  alert('City of Glasgow College (UK) Articulation:\n\n• Students complete 2 academic years (SQA HND Level 8) at an accredited maritime academy.\n• Direct credit transfer into UK MCA Cadet route in Glasgow.\n• Graduates qualify for UK MCA Officer of the Watch (OOW) oral examination.');
}

function downloadSyllabus(course: string) {
  alert(`Downloading official DG-approved syllabus & curriculum for: ${course}`);
}

// Interactive Booking Modal State
const bookingModalOpen = ref(false);
const bookingConfirmed = ref(false);
const selectedCourseForBooking = ref('');
const bookingReference = ref('');

const bookingForm = reactive({
  fullName: '',
  cdcNumber: '',
  phone: '',
  batchDate: 'June 2026 Intake',
});

const showFaqModal = ref(false);

function openEnrollModal(courseTitle: string) {
  selectedCourseForBooking.value = courseTitle;
  bookingConfirmed.value = false;
  bookingModalOpen.value = true;
}

function submitBooking() {
  bookingReference.value = 'SF-REG-' + Math.floor(100000 + Math.random() * 900000);
  bookingConfirmed.value = true;
}
</script>
