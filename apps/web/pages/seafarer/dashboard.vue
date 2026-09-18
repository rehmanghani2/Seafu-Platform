<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP GLOBAL NAVIGATION                                        -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
            </svg>
          </div>
          <span class="text-lg font-black text-slate-900 tracking-tight">The Seafu</span>
        </NuxtLink>

        <!-- Center Links -->
        <nav class="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-600">
          <NuxtLink to="/" class="hover:text-blue-700 transition">Home</NuxtLink>
          <NuxtLink to="/#about" class="hover:text-blue-700 transition">About</NuxtLink>
          <NuxtLink to="/courses" class="hover:text-blue-700 transition">Courses</NuxtLink>
          <NuxtLink to="/seafarer/dashboard" class="text-slate-900 font-bold border-b-2 border-blue-700 pb-0.5">Student Dashboard</NuxtLink>
        </nav>

        <!-- Right Controls -->
        <div class="flex items-center space-x-4">
          <template v-if="authStore.isAuthenticated">
            <span class="text-xs font-semibold text-slate-700 hidden sm:inline">
              {{ authStore.user?.fullName || 'Cadet Alex Mercer' }}
            </span>
            <button
              @click="showProfileMenu = !showProfileMenu"
              class="w-9 h-9 rounded-full bg-[#0A1936] text-white flex items-center justify-center shadow-sm relative focus:outline-none"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <div
              v-if="showProfileMenu"
              class="absolute right-6 top-16 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs text-slate-700"
            >
              <div class="px-4 py-2 border-b border-slate-100 font-bold text-slate-900">
                {{ authStore.user?.email || 'alex.mercer@seafu.org' }}
              </div>
              <button
                @click="openDigitalId"
                class="w-full text-left px-4 py-2 hover:bg-slate-50 transition"
              >
                Digital ID Pass
              </button>
              <button
                @click="authStore.logout(); showProfileMenu = false;"
                class="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 transition font-bold"
              >
                Sign Out
              </button>
            </div>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login" class="text-xs font-semibold text-slate-700 hover:text-blue-700 transition">
              Login
            </NuxtLink>
            <NuxtLink to="/auth/register" class="w-9 h-9 rounded-full bg-[#0A1936] text-white flex items-center justify-center shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN LAYOUT WITH SIDEBAR                                      -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- ── LEFT SIDEBAR NAVIGATION (2 cols) ────────────────────────── -->
        <aside class="lg:col-span-2 space-y-6">
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">
              NAVIGATION
            </div>
            <nav class="space-y-1.5 text-xs font-semibold">
              <button
                @click="activeNav = 'Overview'"
                :class="activeNav === 'Overview'
                  ? 'bg-[#0A1936] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
                class="w-full text-left px-3.5 py-2.5 rounded-xl transition"
              >
                Overview
              </button>

              <button
                @click="activeNav = 'My Courses'"
                :class="activeNav === 'My Courses'
                  ? 'bg-[#0A1936] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
                class="w-full text-left px-3.5 py-2.5 rounded-xl transition"
              >
                My Courses
              </button>

              <button
                @click="activeNav = 'Certifications'"
                :class="activeNav === 'Certifications'
                  ? 'bg-[#0A1936] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
                class="w-full text-left px-3.5 py-2.5 rounded-xl transition"
              >
                Certifications
              </button>

              <button
                @click="activeNav = 'Audits & Compliance'"
                :class="activeNav === 'Audits & Compliance'
                  ? 'bg-[#0A1936] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
                class="w-full text-left px-3.5 py-2.5 rounded-xl transition"
              >
                Audits &amp; Compliance
              </button>
            </nav>
          </div>
        </aside>

        <!-- ── MAIN CONTENT WORKSPACE (10 cols) ───────────────────────── -->
        <div class="lg:col-span-10 space-y-7">
          
          <!-- ── 1. CADET IDENTITY BANNER ──────────────────────────────── -->
          <div class="rounded-2xl p-6 sm:p-7 text-white shadow-xl bg-gradient-to-r from-[#081736] via-[#0A1E46] to-[#0D2659] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-700/40">
            <!-- Left Info -->
            <div class="flex items-center space-x-4 sm:space-x-5">
              <!-- Avatar -->
              <div class="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Cadet Alex Mercer"
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white/20 shadow-md"
                />
                <span class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.2 rounded-full text-[9px] font-bold uppercase bg-emerald-500 text-slate-950 shadow">
                  Active
                </span>
              </div>

              <!-- Details -->
              <div class="space-y-1">
                <div class="flex items-center space-x-2 flex-wrap text-[11px] text-blue-200">
                  <span class="font-bold tracking-wider uppercase">DECK OFFICER CADET</span>
                  <span>&bull;</span>
                  <span>Rank: 2nd Mate Candidate</span>
                </div>
                <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {{ authStore.user?.fullName || 'Cadet Alex Mercer' }}
                </h1>
                <div class="flex items-center space-x-2 text-xs text-blue-100/90 pt-0.5">
                  <svg class="w-3.5 h-3.5 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
                  </svg>
                  <span>Vessel Assignment:</span>
                  <span class="font-bold text-white">MV Atlantic Pioneer</span>
                  <span class="text-blue-300 text-[11px]">(IMO: 9876543)</span>
                </div>
              </div>
            </div>

            <!-- Right Buttons -->
            <div class="flex items-center space-x-3 shrink-0 self-stretch sm:self-auto justify-end">
              <button
                @click="openDigitalId"
                class="px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-md transition flex items-center space-x-1.5"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span>Digital ID Pass</span>
              </button>

              <button
                @click="showUploadModal = true"
                class="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-white text-slate-800 shadow-sm transition flex items-center space-x-1.5"
              >
                <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          <!-- ── 2. FOUR KPI SUMMARY CARDS ──────────────────────────────── -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <!-- Card 1: STCW Certificates -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  STCW CERTIFICATES
                </span>
                <div class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-black text-slate-900">4/4</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">Valid</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">
                  Next expiry: Adv. Fire Fighting in <strong class="text-rose-600">140 days</strong>
                </div>
              </div>
              <NuxtLink to="/seafarer/vault" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center space-x-1 pt-1">
                <span>View all certificates</span>
                <span>→</span>
              </NuxtLink>
            </div>

            <!-- Card 2: Sea Service Log -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  SEA SERVICE LOG
                </span>
                <div class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-1">
                  <span class="text-2xl font-black text-slate-900">720</span>
                  <span class="text-xs font-medium text-slate-500">days logged</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">
                  <strong>180 days</strong> needed for Chief Mate upgrade
                </div>
              </div>
              <div class="space-y-1">
                <div class="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full rounded-full bg-blue-600" style="width: 80%;"></div>
                </div>
                <div class="text-[10px] text-slate-400">80% of sea time requirement met</div>
              </div>
            </div>

            <!-- Card 3: Active Training -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  ACTIVE TRAINING
                </span>
                <div class="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-1">
                  <span class="text-2xl font-black text-slate-900">2</span>
                  <span class="text-xs font-medium text-slate-500">Enrolled</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">
                  Highest progress: <strong>65% (BRM)</strong>
                </div>
              </div>
              <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center space-x-1 pt-1">
                <span>Continue learning</span>
                <span>→</span>
              </NuxtLink>
            </div>

            <!-- Card 4: Compliance Audit -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  COMPLIANCE AUDIT
                </span>
                <div class="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-black text-slate-900">100%</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">Verified</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">
                  All flag state requirements met for <strong>current voyage</strong>.
                </div>
              </div>
              <div class="text-[10px] text-slate-400 flex items-center space-x-1 pt-1">
                <svg class="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>MLC 2006 Compliant</span>
              </div>
            </div>
          </div>

          <!-- ── 3. ACTIVE COURSES & TRAINING PROGRESS ───────────────────── -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-extrabold text-slate-900 tracking-tight">
                  Active Courses &amp; Training Progress
                </h2>
                <p class="text-xs text-slate-500">
                  Resume your mandatory STCW modules and specialized maritime certifications.
                </p>
              </div>
              <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                View All Courses
              </NuxtLink>
            </div>

            <!-- Two Course Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Course 1 -->
              <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="w-11 h-11 rounded-xl bg-blue-900 text-white font-black text-xs flex items-center justify-center tracking-wider shrink-0">
                        BRM
                      </div>
                      <div>
                        <div class="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                          STCW SECTION A-II/1
                        </div>
                        <h3 class="text-sm font-bold text-slate-900 leading-tight">
                          Bridge Resource Management
                        </h3>
                      </div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                      In Progress
                    </span>
                  </div>

                  <p class="text-xs text-slate-500 leading-relaxed">
                    Mastering bridge team communication, situational awareness, workload management, and decision-making during high-risk scenarios.
                  </p>

                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Module 4 of 6: Emergency Scenarios</span>
                      <span class="font-bold text-slate-900">65%</span>
                    </div>
                    <div class="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div class="h-full rounded-full bg-[#0A1936]" style="width: 65%;"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div class="flex items-center space-x-1.5 text-xs text-slate-400">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Est. 2.5 hours remaining</span>
                  </div>
                  <NuxtLink
                    to="/courses"
                    class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition flex items-center space-x-1"
                  >
                    <span>Resume Training</span>
                    <span>&rsaquo;</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Course 2 -->
              <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="w-11 h-11 rounded-xl bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center tracking-wider shrink-0">
                        ECP
                      </div>
                      <div>
                        <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          TYPE-SPECIFIC TRAINING
                        </div>
                        <h3 class="text-sm font-bold text-slate-900 leading-tight">
                          ECDIS Type-Specific (Raytheon Anschütz)
                        </h3>
                      </div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      Not Started
                    </span>
                  </div>

                  <p class="text-xs text-slate-500 leading-relaxed">
                    Operational familiarity training for Synapsis ECDIS hardware and software configuration, route planning, and sensor integration.
                  </p>

                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Module 0 of 5: System Architecture</span>
                      <span class="font-bold text-slate-900">0%</span>
                    </div>
                    <div class="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div class="h-full rounded-full bg-blue-600" style="width: 0%;"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div class="flex items-center space-x-1.5 text-xs text-slate-400">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Est. 8 hours total</span>
                  </div>
                  <NuxtLink
                    to="/courses"
                    class="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white transition flex items-center space-x-1"
                  >
                    <span>Start Course</span>
                    <span>&rsaquo;</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- ── 4. TWO-COLUMN: CERTIFICATE TRACKER & WATCHKEEPING LOG ───── -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <!-- Left: Certificate Expiry Tracker (7 cols) -->
            <div class="lg:col-span-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-extrabold text-slate-900">Certificate Expiry Tracker</h3>
                  <p class="text-[11px] text-slate-500">STCW endorsements, medical fitness, and competency certificates.</p>
                </div>
                <NuxtLink to="/seafarer/vault" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                  Manage All
                </NuxtLink>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead>
                    <tr class="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <th class="pb-2.5">CERTIFICATE NAME</th>
                      <th class="pb-2.5">ISSUE / CODE</th>
                      <th class="pb-2.5">EXPIRY DATE</th>
                      <th class="pb-2.5 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="py-3 font-bold text-slate-900">Advanced Fire Fighting</td>
                      <td class="py-3 font-mono text-slate-500 text-[11px]">STCW VI/3</td>
                      <td class="py-3 text-slate-600 text-[11px]">Oct 14, 2026</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-100">
                          <span>&Delta;</span>
                          <span>140 days left</span>
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="py-3 font-bold text-slate-900">Medical First Aid</td>
                      <td class="py-3 font-mono text-slate-500 text-[11px]">STCW VI/4-1</td>
                      <td class="py-3 text-slate-600 text-[11px]">Jan 22, 2026</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                          <span>&check;</span>
                          <span>Valid (580 days)</span>
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="py-3 font-bold text-slate-900">GMDSS General Operator's Certificate</td>
                      <td class="py-3 font-mono text-slate-500 text-[11px]">STCW IV/2</td>
                      <td class="py-3 text-slate-600 text-[11px]">Nov 05, 2027</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                          <span>&check;</span>
                          <span>Valid (1,280 days)</span>
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="py-3 font-bold text-slate-900">Proficiency in Survival Craft (PSC)</td>
                      <td class="py-3 font-mono text-slate-500 text-[11px]">STCW VI/2-1</td>
                      <td class="py-3 text-slate-600 text-[11px]">Mar 18, 2026</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                          <span>&check;</span>
                          <span>Valid (680 days)</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Automated alerts sent to designated DPA &amp; Captain.</span>
                <NuxtLink to="/courses" class="font-bold text-blue-700 hover:text-blue-800 transition">
                  Request Renewal Assistance &rsaquo;
                </NuxtLink>
              </div>
            </div>

            <!-- Right: Watchkeeping Log (4 cols) -->
            <div class="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-extrabold text-slate-900">Watchkeeping Log</h3>
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">
                  MV Atlantic Pioneer
                </span>
              </div>
              <p class="text-[11px] text-slate-500 leading-normal">
                Quick-log your daily navigational watch hours and position.
              </p>

              <form @submit.prevent="submitWatchEntry" class="space-y-3">
                <div v-if="watchEntrySuccess" class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                  ✓ Watch entry submitted for Master verification.
                </div>

                <div class="space-y-1">
                  <label class="text-[10px] font-bold text-slate-600 uppercase">Watch Period</label>
                  <select
                    v-model="watchLog.period"
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>04:00 - 08:00 (Morning Watch)</option>
                    <option>08:00 - 12:00 (Forenoon Watch)</option>
                    <option>12:00 - 16:00 (Afternoon Watch)</option>
                    <option>16:00 - 20:00 (Evening Watch)</option>
                    <option>20:00 - 00:00 (Night Watch)</option>
                    <option>00:00 - 04:00 (Middle Watch)</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="space-y-1">
                    <label class="text-[10px] font-bold text-slate-600 uppercase">Hours Claimed</label>
                    <input
                      v-model="watchLog.hours"
                      type="number"
                      min="1"
                      max="12"
                      class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div class="space-y-1">
                    <label class="text-[10px] font-bold text-slate-600 uppercase">Celestial Fixes</label>
                    <input
                      v-model="watchLog.fixes"
                      type="number"
                      min="0"
                      max="10"
                      class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <!-- Master Sign-off preview -->
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-[10px] text-slate-400">Master / Chief Mate Sign-off</div>
                      <div class="font-bold text-slate-800">Capt. Thomas Vance</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-600">
                    Pending Sync
                  </span>
                </div>

                <button
                  type="submit"
                  class="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm"
                >
                  Submit Watch Entry
                </button>
              </form>
            </div>

          </div>

          <!-- ── 5. RECOMMENDED FOR CAREER ADVANCEMENT ───────────────────── -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-extrabold text-slate-900 tracking-tight">
                  Recommended for Career Advancement
                </h2>
                <p class="text-xs text-slate-500">
                  Curated modules required to transition from 2nd Mate Candidate to Chief Mate and Master Mariner.
                </p>
              </div>
              <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                Explore Catalog
              </NuxtLink>
            </div>

            <!-- 3 Recommendation Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <!-- Card 1 -->
              <div class="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                      alt="Advanced Ship Handling"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div class="absolute bottom-2.5 left-2.5">
                      <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#0A1936] text-white">
                        Chief Mate Rank
                      </span>
                    </div>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Advanced Ship Handling &amp; Maneuvering
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      Simulation-based training for twin-screw vessels, azimuth thrusters, and heavy weather berthing.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between text-xs">
                  <span class="text-slate-400 text-[11px]">Duration: 40 hrs</span>
                  <NuxtLink
                    to="/courses"
                    class="px-3.5 py-1.5 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                  >
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                      alt="Maritime Leadership"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div class="absolute bottom-2.5 left-2.5">
                      <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-600 text-white">
                        Leadership &amp; Mgmt
                      </span>
                    </div>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Maritime Leadership &amp; Human Element
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      STCW management-level training focusing on multicultural crew resource management and stress fatigue.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between text-xs">
                  <span class="text-slate-400 text-[11px]">Duration: 30 hrs</span>
                  <NuxtLink
                    to="/courses"
                    class="px-3.5 py-1.5 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                  >
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
                      alt="Chemical Tanker Cargo"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div class="absolute bottom-2.5 left-2.5">
                      <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-700 text-white">
                        Specialized Tanker
                      </span>
                    </div>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Chemical Tanker Cargo Operations
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      Advanced safety procedures, inert gas systems, tank cleaning, and chemical cargo parcel loading.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between text-xs">
                  <span class="text-slate-400 text-[11px]">Duration: 50 hrs</span>
                  <NuxtLink
                    to="/courses"
                    class="px-3.5 py-1.5 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                  >
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. DIGITAL ID PASS MODAL                                         -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showDigitalIdModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
    >
      <div class="w-full max-w-md rounded-3xl bg-[#081736] text-white p-7 shadow-2xl border border-blue-900/60 relative space-y-5">
        <button
          @click="showDigitalIdModal = false"
          class="absolute top-5 right-5 text-slate-400 hover:text-white transition"
        >
          ✕
        </button>

        <div class="flex items-center justify-between border-b border-blue-900/50 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              ⚓
            </div>
            <div>
              <div class="text-xs font-black tracking-wider text-white">THE SEAFU DIGITAL ID</div>
              <div class="text-[9px] text-blue-300 font-mono">IMO STCW 2010 VERIFIED</div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            ACTIVE PASS
          </span>
        </div>

        <div class="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Cadet Alex Mercer"
            class="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400"
          />
          <div class="space-y-1">
            <div class="text-[10px] font-mono text-blue-300 uppercase">SEAFARER NAME</div>
            <div class="text-base font-black text-white leading-tight">
              {{ authStore.user?.fullName || 'Cadet Alex Mercer' }}
            </div>
            <div class="text-xs text-slate-300">Deck Officer Cadet (OOW Deck)</div>
            <div class="text-[10px] font-mono text-cyan-300">INDoS: 08ZL9431 &bull; CDC: MUM-149028</div>
          </div>
        </div>

        <!-- Details Grid -->
        <div class="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#061024] border border-blue-950 text-xs font-mono">
          <div>
            <div class="text-[9px] text-slate-400">ASSIGNED VESSEL</div>
            <div class="font-bold text-white">MV Atlantic Pioneer</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400">IMO NUMBER</div>
            <div class="font-bold text-cyan-300">9876543</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400">FLAG STATE</div>
            <div class="font-bold text-white">United Kingdom / DGS</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400">EXPIRY DATE</div>
            <div class="font-bold text-emerald-400">31 Dec 2028</div>
          </div>
        </div>

        <!-- QR Code Preview -->
        <div class="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <div class="w-14 h-14 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
            <div class="text-[8px] font-mono text-black font-black text-center leading-tight">
              SEAFU<br/>QR<br/>PASS
            </div>
          </div>
          <div class="text-[11px] text-slate-300 space-y-0.5">
            <div class="font-bold text-white">Cryptographic ECDSA Signature</div>
            <div class="text-[10px] font-mono text-slate-400 truncate">sha256:7f9a2e...c418</div>
            <div class="text-[10px] text-cyan-300 font-mono">Verify at seafu.org/verify</div>
          </div>
        </div>

        <button
          @click="showDigitalIdModal = false"
          class="w-full py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition"
        >
          Close Pass
        </button>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. UPLOAD DOCUMENT MODAL                                         -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showUploadModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
    >
      <div class="w-full max-w-lg rounded-3xl bg-white text-slate-800 p-7 shadow-2xl border border-slate-200 relative space-y-4">
        <button
          @click="showUploadModal = false"
          class="absolute top-5 right-5 text-slate-400 hover:text-slate-800 transition"
        >
          ✕
        </button>

        <div>
          <h3 class="text-base font-extrabold text-slate-900">Upload Maritime Document</h3>
          <p class="text-xs text-slate-500">Add official STCW certificates, medical reports, or sea service discharge book.</p>
        </div>

        <form @submit.prevent="handleUpload" class="space-y-4 text-xs">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Document Type</label>
            <select
              v-model="uploadDoc.type"
              class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="STCW">STCW Modular / Competency Certificate</option>
              <option value="CDC">Continuous Discharge Certificate (CDC)</option>
              <option value="PASSPORT">Maritime Passport / SID</option>
              <option value="MEDICAL">Medical Fitness (ENG-1 / Form 1)</option>
              <option value="WATCHKEEPING">Bridge / Engine Watchkeeping Log</option>
            </select>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Document Title</label>
            <input
              v-model="uploadDoc.title"
              type="text"
              placeholder="e.g. Advanced Fire Fighting Refresher"
              required
              class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Document Number / Code</label>
              <input
                v-model="uploadDoc.code"
                type="text"
                placeholder="STCW VI/3-2026"
                class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Expiry Date</label>
              <input
                v-model="uploadDoc.expiry"
                type="date"
                class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <!-- Drag and drop zone -->
          <div class="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 hover:border-blue-500 transition cursor-pointer">
            <div class="w-10 h-10 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <div class="font-bold text-slate-800">Click to upload or drag &amp; drop</div>
            <div class="text-[10px] text-slate-400">PDF, JPG, PNG up to 15MB. Encrypted via AES-256 on arrival.</div>
          </div>

          <div class="flex items-center space-x-3 pt-2">
            <button
              type="button"
              @click="showUploadModal = false"
              class="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 py-2.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] font-bold text-white transition shadow-sm"
            >
              Upload &amp; Encrypt
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Student Dashboard · Cadet Alex Mercer · The Seafu Platform',
});

const authStore = useAuthStore();
onMounted(() => {
  authStore.initAuth();
});

const activeNav = ref('Overview');
const showProfileMenu = ref(false);
const showDigitalIdModal = ref(false);
const showUploadModal = ref(false);

const watchLog = ref({
  period: '04:00 - 08:00 (Morning Watch)',
  hours: 4,
  fixes: 2,
});

const watchEntrySuccess = ref(false);

function submitWatchEntry() {
  watchEntrySuccess.value = true;
  setTimeout(() => {
    watchEntrySuccess.value = false;
  }, 4000);
}

function openDigitalId() {
  showDigitalIdModal.value = true;
  showProfileMenu.value = false;
}

const uploadDoc = ref({
  type: 'STCW',
  title: '',
  code: '',
  expiry: '',
});

function handleUpload() {
  showUploadModal.value = false;
  uploadDoc.value = {
    type: 'STCW',
    title: '',
    code: '',
    expiry: '',
  };
}
</script>
