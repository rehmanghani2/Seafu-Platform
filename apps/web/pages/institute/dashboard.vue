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
          <NuxtLink to="/courses" class="hover:text-blue-700 transition">Programs</NuxtLink>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-blue-700 transition">Verification</NuxtLink>
          <span class="text-blue-800 font-bold border-b-2 border-blue-800 pb-0.5">Academy Console</span>
        </nav>

        <!-- Right Side: Sign Out & Profile -->
        <div class="flex items-center space-x-3">
          <button @click="authStore.logout()" class="text-xs font-semibold text-slate-500 hover:text-slate-900 transition">
            Sign Out
          </button>
          <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-sm" title="MTI Academy Administrator">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN LAYOUT                                                  -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      <!-- ── TOP ACADEMY IDENTITY BANNER (NAVY BLOCK) ──────────────────── -->
      <div class="rounded-2xl p-6 sm:p-7 text-white shadow-lg bg-[#0A1936] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <!-- Left Brand & Credentials -->
        <div class="flex items-start sm:items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-black text-xl shadow-md border border-white/20 shrink-0">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
            </svg>
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="text-xl sm:text-2xl font-black tracking-tight text-white">
                {{ authStore.user?.institute?.name || 'Maritime Training Institute (MTI Karachi)' }}
              </h1>
              <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold bg-blue-900/80 text-blue-300 border border-blue-700/50 uppercase">
                MINISTRY REG 2019
              </span>
            </div>
            <div class="text-xs text-slate-300">
              MTI Complex, Karachi &bull; Estd. 1998 &bull; City of Glasgow College UK MCA Academic Partner
            </div>
          </div>
        </div>

        <!-- Right: Regulatory Grade & Head of Studies -->
        <div class="flex items-center gap-3 text-xs shrink-0 flex-wrap">
          <div class="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-right">
            <div class="text-[10px] text-slate-400 font-mono">DG APPROVAL</div>
            <div class="font-bold text-cyan-300 font-mono">KHI-01 &bull; CIP GRADE 1</div>
          </div>
          <div class="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-right">
            <div class="text-[10px] text-slate-400 font-mono">HEAD OF NAUTICAL STUDIES</div>
            <div class="font-bold text-white">Capt. A. R. Khan (Master Mariner)</div>
          </div>
        </div>
      </div>

      <!-- ── COMMAND SUB-NAVIGATION PILLS ──────────────────────────────── -->
      <div class="flex items-center gap-2 overflow-x-auto text-xs font-bold pb-1">
        <button
          @click="activeSection = 'ops'"
          :class="activeSection === 'ops' ? 'bg-[#0A1936] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
          class="px-4 py-2 rounded-xl transition flex items-center space-x-2 shrink-0"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          </svg>
          <span>Ops Command</span>
        </button>

        <button
          @click="activeSection = 'presea'"
          :class="activeSection === 'presea' ? 'bg-[#0A1936] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
          class="px-4 py-2 rounded-xl transition flex items-center space-x-2 shrink-0"
        >
          <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span>Pre-Sea Intakes</span>
        </button>

        <button
          @click="activeSection = 'simulators'"
          :class="activeSection === 'simulators' ? 'bg-[#0A1936] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
          class="px-4 py-2 rounded-xl transition flex items-center space-x-2 shrink-0"
        >
          <svg class="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Simulators &amp; Labs</span>
        </button>

        <button
          @click="activeSection = 'endorsements'"
          :class="activeSection === 'endorsements' ? 'bg-[#0A1936] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
          class="px-4 py-2 rounded-xl transition flex items-center space-x-2 shrink-0"
        >
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>DG Endorsements</span>
        </button>
      </div>

      <!-- ── 5 GLOBAL NETWORK METRICS CARDS ───────────────────────────── -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">ALUMNI NETWORK</div>
          <div class="text-2xl font-black text-slate-900">20,000+</div>
          <div class="text-[11px] text-emerald-600 font-medium">● Active at sea since 1998</div>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">MASTER MARINERS &amp; C/E</div>
          <div class="text-2xl font-black text-blue-700">300+</div>
          <div class="text-[11px] text-slate-500">IMO Certified Instructors</div>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">DG APPROVED COURSES</div>
          <div class="text-2xl font-black text-emerald-600">21+</div>
          <div class="text-[11px] text-slate-500">Full STCW Accreditations</div>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">SIMULATOR SUITES</div>
          <div class="text-2xl font-black text-indigo-600">6 Suites</div>
          <div class="text-[11px] text-slate-500">Bridge, LCHS, ECDIS, ERS</div>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1 col-span-2 sm:col-span-1">
          <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">INTAKE ADMISSIONS</div>
          <div class="text-xl font-black text-amber-600">GP-III &amp; HND</div>
          <div class="text-[11px] text-blue-700 font-semibold">● Roster Open</div>
        </div>
      </div>

      <!-- ── CADET PRACTICAL LIVE FIRE DRILL NOTIFICATION BANNER ──────── -->
      <div class="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-mono font-bold text-amber-900 tracking-wider">
              KPT APPRENTICE DRILL GROUND &bull; DECK BURNS &amp; LIFE RAFT &bull; Batch #GP3-2026-003
            </div>
            <div class="text-xs text-slate-700 mt-0.5 leading-relaxed">
              Cadet practical live fire drill and life raft survival exercise scheduled at KPT facility.
              <strong class="text-slate-900">40 GP-III candidates</strong> logged for biometric sign-off and mtiverification.com endorsement.
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 shrink-0">
          <button class="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition shadow-xs">
            Drill Attendance Log
          </button>
          <button class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm">
            Endorse 40 Cadet Certificates &rarr;
          </button>
        </div>
      </div>

      <!-- ── MAIN WORKSPACE: BATCH INVENTORY + GATEWAY SIDEBAR ─────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Left: Batch Inventory Controller (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Batch Inventory &amp; Live Capacity Controller
              </h2>
              <p class="text-xs text-slate-500">
                Real-time DG approved STCW course allocations, seat capacities &amp; simulator scheduling.
              </p>
            </div>
            <NuxtLink to="/courses" class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center space-x-1.5 shrink-0">
              <span>+</span>
              <span>Schedule New Batch</span>
            </NuxtLink>
          </div>

          <!-- Search & Select Filter Row -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              v-model="batchSearch"
              type="text"
              placeholder="Search STCW Code, Course Name..."
              class="px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 outline-none focus:ring-2 focus:ring-blue-500" />
            <select class="px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Modules &amp; Decks</option>
              <option>Pre-Sea GP-III</option>
              <option>Nautical Science</option>
              <option>Marine Engineering</option>
            </select>
            <select class="px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Labs &amp; Simulators</option>
              <option>Full Mission Bridge (FMBS)</option>
              <option>Engine Room (ERS)</option>
              <option>Liquid Cargo (LCHS)</option>
              <option>ECDIS Suite</option>
            </select>
          </div>

          <!-- Batches Cards List -->
          <div class="space-y-4">
            
            <!-- Batch 1: GP-III -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:shadow-md transition">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80"
                      alt="GP-III"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap text-[10px]">
                      <span class="font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                        GP3-2026-003
                      </span>
                      <span class="text-slate-400 font-mono">
                        STCW II/4 Pre-Sea General Purpose &bull; DG Approved
                      </span>
                    </div>
                    <h3 class="text-sm font-bold text-slate-900 mt-1">
                      General Purpose Training (GP-III) - 3rd Intake 2026
                    </h3>
                    <div class="text-xs text-slate-500 mt-0.5">
                      MTI Auditorium &amp; KPT Yard &bull; Capt. Z. Abbas &bull; <span class="text-emerald-600 font-semibold">Physical &amp; Medical Cleared</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black text-slate-900 font-mono">PKR 185,000</div>
                  <div class="text-[10px] text-blue-700 font-medium">Installment Scheme Available</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500">Enrollment Cap: <strong class="text-slate-800">40 / 50 Cadets (80%)</strong></span>
                  <span class="font-bold text-amber-600">10 Seats Left (Interviews in Progress)</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-blue-600 h-full rounded-full" style="width: 80%;"></div>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-emerald-600 text-[11px] font-medium">&bull; Bio-Attendance &amp; Uniform Muster Verified</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50">
                    Candidate Roster (40)
                  </button>
                  <button class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752]">
                    Admissions Quota
                  </button>
                </div>
              </div>
            </div>

            <!-- Batch 2: HND Nautical Science -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:shadow-md transition">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"
                      alt="Bridge Sim"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap text-[10px]">
                      <span class="font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                        HND-NAUT-2026
                      </span>
                      <span class="text-slate-400 font-mono">
                        UK MCA / SQA Pathway &bull; City of Glasgow Partner
                      </span>
                    </div>
                    <h3 class="text-sm font-bold text-slate-900 mt-1">
                      Advance Diploma in Nautical Science (HND UK MCA Pathway)
                    </h3>
                    <div class="text-xs text-slate-500 mt-0.5">
                      Glasgow Curriculum &bull; 360° Bridge Simulator &bull; <span class="text-blue-700 font-semibold">UK CoC OOW Deck Route</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black text-slate-900 font-mono">GBP £4,200 / yr</div>
                  <div class="text-[10px] text-emerald-600 font-medium">Scottish Qualifications Authority</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500">Batch Quota: <strong class="text-slate-800">22 / 25 Cadets (88%)</strong></span>
                  <span class="font-bold text-amber-600">3 Seats Remaining for UK Visa Window</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-emerald-600 h-full rounded-full" style="width: 88%;"></div>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-blue-700 text-[11px] font-medium">&bull; UK Visa Letter Verification Active</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50">
                    Review SQA Scores
                  </button>
                  <button class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752]">
                    Glasgow Portal Sync
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: Verification Gateway & Telemetry (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Gateway Widget -->
          <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="text-sm font-bold text-slate-900">mtiverification.com Gateway</h3>
                <div class="text-[11px] text-slate-400">Official Maritime Certificate Issuer</div>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                DG LINKED
              </span>
            </div>

            <div class="space-y-2 text-xs text-slate-600">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center justify-center">1</span>
                <span>Pakistani Seaman Book &amp; NADRA Bio Verified</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center justify-center">2</span>
                <span>Simulator Hours &amp; KPT Drill Log Validated</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center justify-center">3</span>
                <span>Principal Digital Seal &amp; QR Generated</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center justify-center">4</span>
                <span>Instant Lookup at mtiverification.com</span>
              </div>
            </div>

            <button class="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center justify-center space-x-1.5">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Dispatch mtiverification.com Stamped Batch</span>
            </button>
          </div>

          <!-- High Voltage Safety Lab Widget -->
          <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <span class="text-xs font-bold text-slate-900">High Voltage Safety Lab</span>
              <span class="text-[10px] font-mono text-emerald-600 font-bold">Operational</span>
            </div>

            <div class="h-28 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                alt="High Voltage Lab"
                class="w-full h-full object-cover" />
              <span class="absolute bottom-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold bg-[#0A1936]/90 text-blue-200">
                Arc Flash Gear &amp; Interlocks
              </span>
            </div>

            <p class="text-xs text-slate-500 leading-relaxed">
              Mandatory STCW High Voltage Course for Marine Engineers &amp; ETOs. Calibrated panels compliant with DG Ports specifications.
            </p>
          </div>

        </div>

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
  title: 'MTI Operations & Academy Command · The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'Maritime Academy Operations Console for STCW course scheduling, simulator allocation, and certificate verification.',
    },
  ],
});

const authStore = useAuthStore();
const activeSection = ref('ops');
const batchSearch = ref('');

onMounted(() => {
  authStore.initAuth();
});
</script>
