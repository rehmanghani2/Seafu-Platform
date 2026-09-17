<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP NAVBAR                                                   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-sm shadow-blue-900/10">
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
          <span class="text-blue-800 font-bold border-b-2 border-blue-800 pb-0.5">Student Dashboard</span>
        </nav>

        <!-- Right Side: Login & User Icon -->
        <div class="flex items-center space-x-3">
          <button @click="authStore.logout()" class="text-xs font-semibold text-slate-500 hover:text-slate-900 transition">
            {{ authStore.isAuthenticated ? 'Sign Out' : 'Login' }}
          </button>
          <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer" title="Active Cadet Session">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN LAYOUT: SIDEBAR + CONTENT                               -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- ── LEFT NAVIGATION SIDEBAR (2 cols) ────────────────────────── -->
        <aside class="lg:col-span-2 space-y-4">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
            NAVIGATION
          </div>

          <nav class="space-y-1 text-xs font-semibold">
            <button
              @click="activeNav = 'overview'"
              :class="activeNav === 'overview' ? 'bg-[#0A1936] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
              class="w-full text-left px-3.5 py-2.5 rounded-xl transition flex items-center space-x-2.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Overview</span>
            </button>

            <button
              @click="activeNav = 'courses'"
              :class="activeNav === 'courses' ? 'bg-[#0A1936] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
              class="w-full text-left px-3.5 py-2.5 rounded-xl transition flex items-center space-x-2.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>My Courses</span>
            </button>

            <button
              @click="activeNav = 'certifications'"
              :class="activeNav === 'certifications' ? 'bg-[#0A1936] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
              class="w-full text-left px-3.5 py-2.5 rounded-xl transition flex items-center space-x-2.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Certifications</span>
            </button>

            <button
              @click="activeNav = 'compliance'"
              :class="activeNav === 'compliance' ? 'bg-[#0A1936] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
              class="w-full text-left px-3.5 py-2.5 rounded-xl transition flex items-center space-x-2.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span>Audits &amp; Compliance</span>
            </button>
          </nav>
        </aside>

        <!-- ── MAIN CONTENT WORKSPACE (10 cols) ───────────────────────── -->
        <main class="lg:col-span-10 space-y-6">
          
          <!-- ── CADET COMMAND BANNER (NAVY BLOCK) ──────────────────────── -->
          <div class="rounded-2xl p-6 sm:p-7 text-white shadow-lg bg-[#0A1936] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <!-- Left Profile Meta -->
            <div class="flex items-center space-x-4">
              <!-- Avatar -->
              <div class="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 shadow-md shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Cadet Alex Mercer"
                  class="w-full h-full object-cover" />
                <span class="absolute bottom-0 inset-x-0 bg-emerald-600 text-white text-[9px] font-bold text-center py-0.2 tracking-wider">
                  Active
                </span>
              </div>

              <!-- Name & Vessel Details -->
              <div class="space-y-1">
                <div class="flex items-center space-x-2 flex-wrap text-[11px]">
                  <span class="px-2 py-0.5 rounded bg-blue-900/80 text-blue-300 font-semibold uppercase tracking-wider text-[10px]">
                    DECK OFFICER CADET
                  </span>
                  <span class="text-slate-300">Rank: 2nd Mate Candidate</span>
                </div>
                <h1 class="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Cadet Alex Mercer
                </h1>
                <div class="flex items-center space-x-2 text-xs text-slate-300">
                  <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
                  </svg>
                  <span>Vessel Assignment:</span>
                  <strong class="text-white">MV Atlantic Pioneer</strong>
                  <span class="text-slate-400 font-mono">(IMO: 9876543)</span>
                </div>
              </div>
            </div>

            <!-- Right Actions -->
            <div class="flex items-center space-x-3 shrink-0">
              <button
                @click="showIdPassModal = true"
                class="px-4 py-2.5 rounded-xl font-bold text-xs bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md transition flex items-center space-x-1.5"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span>Digital ID Pass</span>
              </button>

              <button
                @click="showUploadModal = true"
                class="px-4 py-2.5 rounded-xl font-bold text-xs bg-white/90 hover:bg-white text-slate-800 shadow-sm transition flex items-center space-x-1.5"
              >
                <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          <!-- ── 4 SUMMARY KPI CARDS ────────────────────────────────────── -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <!-- KPI 1: STCW Certificates -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-slate-400 tracking-wider uppercase">STCW CERTIFICATES</span>
                <div class="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-black text-slate-900">4/4</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">Valid</span>
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  Next expiry: Adv. Fire Fighting in <strong class="text-rose-600">140 days</strong>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-100">
                <a href="#expiry-tracker" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                  View all certificates →
                </a>
              </div>
            </div>

            <!-- KPI 2: Sea Service Log -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-slate-400 tracking-wider uppercase">SEA SERVICE LOG</span>
                <div class="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-1.5">
                  <span class="text-2xl font-black text-slate-900">720</span>
                  <span class="text-xs text-slate-500">days logged</span>
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  <strong>180 days</strong> needed for Chief Mate upgrade
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div class="bg-blue-600 h-full rounded-full" style="width: 80%;"></div>
                </div>
              </div>
              <div class="text-[10px] text-slate-400">
                80% of sea time requirement met
              </div>
            </div>

            <!-- KPI 3: Active Training -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-slate-400 tracking-wider uppercase">ACTIVE TRAINING</span>
                <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-1.5">
                  <span class="text-2xl font-black text-slate-900">2</span>
                  <span class="text-xs text-slate-500">Enrolled</span>
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  Highest progress: <strong class="text-slate-800">65% (BRM)</strong>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-100">
                <a href="#active-training" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                  Continue learning →
                </a>
              </div>
            </div>

            <!-- KPI 4: Compliance Audit -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-slate-400 tracking-wider uppercase">COMPLIANCE AUDIT</span>
                <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-black text-slate-900">100%</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Verified</span>
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  All flag state requirements met for <strong class="text-slate-800">current voyage</strong>.
                </div>
              </div>
              <div class="pt-2 border-t border-slate-100 flex items-center space-x-1.5 text-[10px] text-slate-400">
                <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>MLC 2006 Compliant</span>
              </div>
            </div>

          </div>

          <!-- ── ACTIVE COURSES & TRAINING PROGRESS ─────────────────────── -->
          <div id="active-training" class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
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

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Card 1: Bridge Resource Management -->
              <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-xs shrink-0">
                        BRM
                      </div>
                      <div>
                        <div class="text-[10px] font-mono font-bold text-slate-400">STCW SECTION A-II/1</div>
                        <h3 class="text-sm font-bold text-slate-900 leading-snug">Bridge Resource Management</h3>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 shrink-0">
                      In Progress
                    </span>
                  </div>

                  <p class="text-xs text-slate-500 leading-relaxed">
                    Mastering bridge team communication, situational awareness, workload management, and decision-making during high-risk maneuvers.
                  </p>

                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="text-slate-500">Module 4 of 6: Emergency Scenarios</span>
                      <span class="font-bold text-slate-900">65%</span>
                    </div>
                    <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div class="bg-blue-800 h-full rounded-full" style="width: 65%;"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div class="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Est. 2.5 hours remaining</span>
                  </div>
                  <NuxtLink to="/courses/brm-module-4" class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition flex items-center space-x-1.5">
                    <span>Resume Training</span>
                    <span>&rsaquo;</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Card 2: ECDIS Type-Specific -->
              <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-black text-xs shrink-0">
                        ECP
                      </div>
                      <div>
                        <div class="text-[10px] font-mono font-bold text-slate-400">TYPE-SPECIFIC TRAINING</div>
                        <h3 class="text-sm font-bold text-slate-900 leading-snug">ECDIS Type-Specific (Raytheon Anschütz)</h3>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 shrink-0">
                      Not Started
                    </span>
                  </div>

                  <p class="text-xs text-slate-500 leading-relaxed">
                    Operational familiarity training for Synapsis ECDIS hardware and software configuration, route planning, and sensor integration.
                  </p>

                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="text-slate-500">Module 0 of 5: System Architecture</span>
                      <span class="font-bold text-slate-500">0%</span>
                    </div>
                    <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div class="bg-slate-300 h-full rounded-full" style="width: 0%;"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div class="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Est. 8 hours total</span>
                  </div>
                  <NuxtLink to="/courses/ecdis-raytheon" class="px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white transition flex items-center space-x-1.5">
                    <span>Start Course</span>
                    <span>&rsaquo;</span>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>

          <!-- ── TWO-COLUMN MIDDLE SECTION: EXPIRY TRACKER + WATCHKEEPING LOG ── -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <!-- Left: Certificate Expiry Tracker (7 cols) -->
            <div id="expiry-tracker" class="lg:col-span-8 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-bold text-slate-900">Certificate Expiry Tracker</h3>
                  <p class="text-xs text-slate-500">STCW endorsements, medical fitness, and competency certificates.</p>
                </div>
                <a href="#expiry-tracker" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition">
                  Manage All
                </a>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead>
                    <tr class="border-b border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      <th class="pb-2">CERTIFICATE NAME</th>
                      <th class="pb-2">ISSUE / CODE</th>
                      <th class="pb-2">EXPIRY DATE</th>
                      <th class="pb-2 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-700">
                    <!-- Row 1 -->
                    <tr>
                      <td class="py-3 font-bold text-slate-900">Advanced Fire Fighting</td>
                      <td class="py-3 font-mono text-slate-500">STCW VI/3</td>
                      <td class="py-3">Oct 14, 2026</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
                          <span>▲</span>
                          <span>140 days left</span>
                        </span>
                      </td>
                    </tr>

                    <!-- Row 2 -->
                    <tr>
                      <td class="py-3 font-bold text-slate-900">Medical First Aid</td>
                      <td class="py-3 font-mono text-slate-500">STCW VI/4-1</td>
                      <td class="py-3">Jan 22, 2028</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                          <span>✓</span>
                          <span>Valid (580 days)</span>
                        </span>
                      </td>
                    </tr>

                    <!-- Row 3 -->
                    <tr>
                      <td class="py-3 font-bold text-slate-900">GMDSS General Operator's Certificate</td>
                      <td class="py-3 font-mono text-slate-500">STCW IV/2</td>
                      <td class="py-3">Nov 05, 2029</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                          <span>✓</span>
                          <span>Valid (1,280 days)</span>
                        </span>
                      </td>
                    </tr>

                    <!-- Row 4 -->
                    <tr>
                      <td class="py-3 font-bold text-slate-900">Proficiency in Survival Craft (PSC)</td>
                      <td class="py-3 font-mono text-slate-500">STCW VI/2-1</td>
                      <td class="py-3">Mar 18, 2028</td>
                      <td class="py-3 text-right">
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                          <span>✓</span>
                          <span>Valid (680 days)</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Footer note -->
              <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
                <span>Automated alerts sent to designated DPA &amp; Captain.</span>
                <button @click="requestRenewalAssistance" class="font-bold text-blue-700 hover:text-blue-800 transition">
                  Request Renewal Assistance &rsaquo;
                </button>
              </div>
            </div>

            <!-- Right: Watchkeeping Log Widget (4 cols) -->
            <div class="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-bold text-slate-900">Watchkeeping Log</h3>
                <span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold">
                  MV Atlantic Pioneer
                </span>
              </div>

              <p class="text-xs text-slate-500">
                Quick-log your daily navigational watch hours and position.
              </p>

              <!-- Form Fields -->
              <form @submit.prevent="submitWatchLog" class="space-y-3 text-xs">
                <div class="space-y-1">
                  <label class="text-[11px] font-bold text-slate-700">Watch Period</label>
                  <select v-model="watchLog.period" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="04:00 - 08:00">04:00 - 08:00 (Morning Watch)</option>
                    <option value="08:00 - 12:00">08:00 - 12:00 (Forenoon Watch)</option>
                    <option value="12:00 - 16:00">12:00 - 16:00 (Afternoon Watch)</option>
                    <option value="16:00 - 20:00">16:00 - 20:00 (Dog Watch)</option>
                    <option value="20:00 - 24:00">20:00 - 24:00 (First Watch)</option>
                    <option value="00:00 - 04:00">00:00 - 04:00 (Middle Watch)</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="space-y-1">
                    <label class="text-[11px] font-bold text-slate-700">Hours Claimed</label>
                    <input v-model.number="watchLog.hours" type="number" min="1" max="12" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div class="space-y-1">
                    <label class="text-[11px] font-bold text-slate-700">Celestial Fixes</label>
                    <input v-model.number="watchLog.fixes" type="number" min="0" max="10" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <!-- Master Sign-off preview -->
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div class="text-[10px] text-slate-400 font-bold uppercase">Master / Chief Mate Sign-off</div>
                    <div class="text-xs font-bold text-slate-800 flex items-center space-x-1.5 mt-0.5">
                      <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Capt. Thomas Vance</span>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded">
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

          <!-- ── RECOMMENDED FOR CAREER ADVANCEMENT ─────────────────────── -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
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

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <!-- Card 1: Ship Handling -->
              <div class="rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition bg-white flex flex-col justify-between group">
                <div>
                  <div class="h-40 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80"
                      alt="Ship Handling"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900/90 text-blue-200">
                      Chief Mate Rank
                    </span>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Advanced Ship Handling &amp; Maneuvering
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      Simulation-based training for twin-screw vessels, azimuth thrusters, and shallow water navigation effects.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="text-[11px] text-slate-400">Duration: 40 hrs</span>
                  <NuxtLink to="/courses" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition">
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Card 2: Leadership & Human Element -->
              <div class="rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition bg-white flex flex-col justify-between group">
                <div>
                  <div class="h-40 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
                      alt="Maritime Leadership"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-900/90 text-amber-200">
                      Leadership &amp; Mgmt
                    </span>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Maritime Leadership &amp; Human Element
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      STCW management-level training focusing on multicultural crew dynamics, crisis management, and rest hours audits.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="text-[11px] text-slate-400">Duration: 30 hrs</span>
                  <NuxtLink to="/courses" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition">
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Card 3: Chemical Tanker Cargo -->
              <div class="rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition bg-white flex flex-col justify-between group">
                <div>
                  <div class="h-40 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=500&q=80"
                      alt="Chemical Tanker"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-900/90 text-cyan-200">
                      Specialized Tanker
                    </span>
                  </div>
                  <div class="p-5 space-y-2">
                    <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                      Chemical Tanker Cargo Operations
                    </h3>
                    <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      Advanced safety procedures, inert gas systems, tank cleaning, and chemical cargo compatibility calculations.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="text-[11px] text-slate-400">Duration: 50 hrs</span>
                  <NuxtLink to="/courses" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition">
                    Enroll Now
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. DIGITAL ID PASS MODAL                                        -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div v-if="showIdPassModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div class="max-w-md w-full rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 rounded-md bg-[#0A1936] text-white flex items-center justify-center text-xs">
              ⚓
            </div>
            <span class="font-bold text-sm text-slate-900">Digital Maritime Seafarer Pass</span>
          </div>
          <button @click="showIdPassModal = false" class="text-slate-400 hover:text-slate-600 text-sm font-bold">
            ✕
          </button>
        </div>

        <div class="p-5 rounded-xl bg-gradient-to-br from-[#0A1936] to-[#132A59] text-white space-y-4 shadow-lg">
          <div class="flex items-center justify-between text-[10px] font-mono">
            <span class="text-blue-300">IMO STCW COMPLIANT ID</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">VERIFIED</span>
          </div>

          <div class="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Alex Mercer"
              class="w-16 h-16 rounded-xl object-cover border-2 border-white/20" />
            <div>
              <div class="text-base font-bold text-white">Cadet Alex Mercer</div>
              <div class="text-xs text-blue-200">2nd Mate Candidate · Deck Dept</div>
              <div class="text-[11px] font-mono text-slate-300 mt-1">INDoS: 24DM9812 · CDC: MUM-88412</div>
            </div>
          </div>

          <div class="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
            <div>
              <div class="text-[9px] text-slate-400">ASSIGNED VESSEL</div>
              <div class="text-white font-bold">MV Atlantic Pioneer</div>
            </div>
            <div class="text-right">
              <div class="text-[9px] text-slate-400">CRYPTOGRAPHIC SIGNATURE</div>
              <div class="text-cyan-300">ECDSA-SHA256 ✓</div>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <button @click="showIdPassModal = false" class="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0A1936] text-white">
            Close Pass
          </button>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. UPLOAD DOCUMENT MODAL                                        -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div v-if="showUploadModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div class="max-w-md w-full rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <span class="font-bold text-sm text-slate-900">Upload to Seafarer Vault</span>
          <button @click="showUploadModal = false" class="text-slate-400 hover:text-slate-600 text-sm font-bold">
            ✕
          </button>
        </div>

        <div class="space-y-3 text-xs">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Document Type</label>
            <select class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs">
              <option>Continuous Discharge Certificate (CDC)</option>
              <option>Flag State Seafarer Identity Document (SID)</option>
              <option>STCW Modular Course Certificate</option>
              <option>ENG-1 Maritime Medical Fitness</option>
            </select>
          </div>

          <div class="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center space-y-2 hover:border-blue-400 transition cursor-pointer">
            <svg class="w-8 h-8 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div class="text-xs text-slate-600">
              <span class="font-bold text-blue-700">Click to upload</span> or drag and drop
            </div>
            <div class="text-[10px] text-slate-400">PDF, PNG, JPG up to 15MB</div>
          </div>
        </div>

        <div class="flex items-center space-x-3 pt-2">
          <button @click="showUploadModal = false" class="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0A1936] text-white">
            Upload &amp; Scan Digitally
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Cadet Dashboard · Alex Mercer · The Seafu Maritime Platform',
  meta: [
    {
      name: 'description',
      content: 'Official cadet dashboard for STCW training, watchkeeping hours, and digital certificate verification.',
    },
  ],
});

const authStore = useAuthStore();
const activeNav = ref('overview');
const showIdPassModal = ref(false);
const showUploadModal = ref(false);

const watchLog = ref({
  period: '04:00 - 08:00',
  hours: 4,
  fixes: 2,
});

function submitWatchLog() {
  alert(`Watch log entry for ${watchLog.value.hours} hours on MV Atlantic Pioneer recorded successfully!`);
}

function requestRenewalAssistance() {
  alert('Renewal assistance request sent to the Maritime Training Institute and Designated Person Ashore (DPA).');
}
</script>
