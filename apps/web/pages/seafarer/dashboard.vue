<template>
  <div class="min-h-screen bg-[#070D18] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 pb-16">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP STATUTORY STRIP                                          -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="bg-[#050A14] border-b border-[#0c1a2e] text-[11px] py-1.5 px-4 font-mono">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center space-x-2 text-slate-400">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span class="text-slate-300 font-semibold uppercase tracking-wider">
            DG PORTS &amp; SHIPPING (GOVT. OF PAKISTAN) APPROVED
          </span>
          <span class="text-slate-600">&bull;</span>
          <span>Academic Partner of City of Glasgow College (UK)</span>
          <span class="text-slate-600">&bull;</span>
          <span>Estd. 1998</span>
        </div>
        <div class="flex items-center space-x-3 text-slate-400">
          <a href="tel:+923366668475" class="hover:text-cyan-400 transition">+92 336 6668475</a>
          <span class="text-slate-700">|</span>
          <a href="mailto:info@mti.edu.pk" class="hover:text-cyan-400 transition">info@mti.edu.pk</a>
          <span class="text-slate-700">|</span>
          <NuxtLink to="/verification" class="text-amber-400 hover:text-amber-300 font-bold">
            mtiverification.com
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN NAV BAR                                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <nav class="bg-[#081220] border-b border-[#0f243d] sticky top-0 z-40 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 shrink-0 group">
          <div class="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center p-1 text-cyan-400 shadow-md shadow-cyan-500/10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-black text-white tracking-wider flex items-center space-x-1.5">
              <span>MTI KARACHI</span>
            </div>
            <div class="text-[9px] text-slate-400 font-mono leading-none">
              MARITIME TRAINING INSTITUTE - KARACHI PAKISTAN
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden lg:flex items-center space-x-2 text-xs font-bold">
          <NuxtLink to="/courses" class="bg-cyan-500 text-slate-950 px-3 py-1.5 rounded-lg shadow-md shadow-cyan-500/20 font-black">
            STCW &amp; Simulators
          </NuxtLink>
          <NuxtLink to="/courses" class="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition">
            Glasgow UK Pathway
          </NuxtLink>
          <NuxtLink to="/seafarer/vault" class="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition">
            Digital Vault
          </NuxtLink>
          <a href="#kpt" class="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition">
            KPT Practical Grounds
          </a>
          <NuxtLink to="/verification" class="text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition">
            mtiverification.com
          </NuxtLink>
        </div>

        <!-- Right Side: Roll badge, Currency & User Avatar -->
        <div class="flex items-center space-x-3">
          <!-- Roll Pill -->
          <div class="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-lg bg-[#060e1a] border border-slate-700 text-[10px] font-mono">
            <span class="text-slate-400">Roll:</span>
            <span class="text-white font-bold">NTI/KHI/2024/GP-354</span>
            <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] px-1.5 py-0.2 rounded font-bold uppercase">
              DG PORTS ACTIVE
            </span>
          </div>

          <!-- Currency Switcher -->
          <div class="flex items-center rounded-lg bg-[#060e1a] border border-slate-700 text-[10px] font-mono overflow-hidden">
            <button
              v-for="curr in ['PKR', 'USD', 'GBP']"
              :key="curr"
              @click="activeCurrency = curr"
              :class="activeCurrency === curr ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'"
              class="px-2 py-1 transition"
            >
              {{ curr }}
            </button>
          </div>

          <!-- Cadet User Avatar -->
          <div class="flex items-center space-x-2 pl-1 border-l border-slate-800">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center font-black text-slate-950 text-xs shadow-md">
              TK
            </div>
            <div class="hidden xl:block text-left text-[11px] leading-tight">
              <div class="font-bold text-white">Cadet Officer Tariq Khan</div>
              <div class="text-[9px] text-amber-300 font-mono">AD Nautical Science (Glasgow SQA)</div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. CADET IDENTITY & METRICS RIBBON                              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="bg-[#091526] border-b border-[#0f243d] px-4 sm:px-6 lg:px-8 py-3.5">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <!-- Left Cadet Details -->
        <div>
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span class="text-sm font-black text-cyan-300">Cadet Officer Tariq Khan</span>
            <span class="text-slate-500">&bull;</span>
            <span class="text-xs text-white font-medium">City of Glasgow College UK Pathway</span>
          </div>

          <div class="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-mono">
            <span class="text-slate-300">
              CDC: <strong class="text-white">KHI-CD-2023-3891</strong>
              <span class="text-cyan-400 ml-1">&check;</span>
            </span>
            <span class="text-slate-600">|</span>
            <span class="text-slate-300">
              SID: <strong class="text-white">PK-092-2322-771</strong>
              <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] px-1.5 py-0.2 rounded font-bold ml-1 uppercase">
                VERIFIED
              </span>
            </span>
            <span class="text-slate-600">|</span>
            <span class="text-slate-400">
              Portal: <strong class="text-amber-400">mtiverification.com</strong>
            </span>
          </div>
        </div>

        <!-- Right 3-Metric Gauges -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="px-3.5 py-2 rounded-xl bg-[#060e1a] border border-slate-800 text-right font-mono">
            <div class="text-[9px] text-slate-400 uppercase">Glasgow SQA Units</div>
            <div class="text-base font-black text-cyan-300">82% Done</div>
            <div class="text-[9px] text-slate-500">60 ECTS Transferable</div>
          </div>

          <div class="px-3.5 py-2 rounded-xl bg-[#060e1a] border border-slate-800 text-right font-mono">
            <div class="text-[9px] text-slate-400 uppercase">PNSC Fleet Clearance</div>
            <div class="text-base font-black text-amber-300">94% <span class="text-xs text-slate-400 font-normal">Class 1</span></div>
            <div class="text-[9px] text-emerald-400">&bull; Ready for Sign-on</div>
          </div>

          <div class="px-3.5 py-2 rounded-xl bg-[#060e1a] border border-slate-800 text-right font-mono">
            <div class="text-[9px] text-slate-400 uppercase">STCW Valid Cryptographic</div>
            <div class="text-base font-black text-emerald-300">11 Verified</div>
            <div class="text-[9px] text-slate-500">DG Approved</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. MANDATORY DRILL ALERT BANNER                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div class="bg-[#121c2c] border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-xl shadow-amber-950/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-start space-x-3.5">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <div class="text-[10px] font-black font-mono text-amber-400 uppercase tracking-wider">
              MANDATORY KPT PRACTICAL DRILL ALERT
            </div>
            <div class="text-[11px] text-slate-400 font-mono">
              Location: KPT Apprentice Practical Training Ground, Keamari, Karachi
            </div>
            <p class="text-xs text-slate-200 mt-1 leading-relaxed">
              <strong class="text-white">Advance Fire Fighting (AFF) &amp; SCBA Smoke Diving</strong> practical exercise with MTI Chief Fire Instructor. Mandatory attendance required for STCW A-VI/3 DG endorsement prior to PNSC sea-boarding.
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-2.5 shrink-0">
          <button
            @click="confirmDrillSlot"
            class="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition flex items-center space-x-1.5 uppercase"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Confirm Drill Slot</span>
          </button>
          <button
            @click="downloadProtocolPdf"
            class="bg-[#0a1424] hover:bg-[#0f1d33] border border-slate-700 text-slate-300 hover:text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition flex items-center space-x-1.5"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Protocol PDF</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 5. SUB-NAVIGATION TABS                                          -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div class="flex items-center space-x-2 border-b border-slate-800 pb-2.5 overflow-x-auto text-xs font-bold font-mono">
        <button
          @click="activeTab = 'vault'"
          :class="activeTab === 'vault' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' : 'bg-[#091526] text-slate-400 border-slate-800 hover:text-white'"
          class="px-4 py-2 rounded-xl border transition flex items-center space-x-1.5 shrink-0"
        >
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>MTI Certificate Vault (STCW)</span>
        </button>

        <button
          @click="activeTab = 'simulators'"
          :class="activeTab === 'simulators' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' : 'bg-[#091526] text-slate-400 border-slate-800 hover:text-white'"
          class="px-4 py-2 rounded-xl border transition flex items-center space-x-1.5 shrink-0"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Simulator Complex Roster</span>
        </button>

        <button
          @click="activeTab = 'glasgow'"
          :class="activeTab === 'glasgow' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' : 'bg-[#091526] text-slate-400 border-slate-800 hover:text-white'"
          class="px-4 py-2 rounded-xl border transition flex items-center space-x-1.5 shrink-0"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span>City of Glasgow Credit Ledger</span>
        </button>

        <button
          @click="activeTab = 'pnsc'"
          :class="activeTab === 'pnsc' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' : 'bg-[#091526] text-slate-400 border-slate-800 hover:text-white'"
          class="px-4 py-2 rounded-xl border transition flex items-center space-x-1.5 shrink-0"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>PNSC / DG Compliance</span>
        </button>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 6. MAIN WORKSPACE (TWO COLUMNS)                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- ── LEFT COLUMN: CERTIFICATE CATALOG & OCR (8 cols) ────────── -->
        <div class="lg:col-span-8 space-y-4">
          <!-- Search & Actions Bar -->
          <div class="flex flex-col sm:flex-row items-center gap-2.5">
            <div class="relative flex-1 w-full">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by MTI cert code, STCW reg..."
                class="w-full bg-[#091526] border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>
            <NuxtLink
              to="/verification"
              class="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs font-mono py-2 px-4 rounded-xl shadow-md shadow-cyan-500/20 transition flex items-center justify-center space-x-1.5 shrink-0 uppercase"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>mtiverification.com</span>
            </NuxtLink>
            <button
              @click="exportDossierZip"
              class="w-full sm:w-auto bg-[#091526] hover:bg-[#0e2038] border border-slate-700 text-slate-300 hover:text-white font-mono text-xs py-2 px-3.5 rounded-xl transition flex items-center justify-center space-x-1.5 shrink-0"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Dossier .ZIP</span>
            </button>
          </div>

          <!-- Filter Pills Row -->
          <div class="flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-slate-500 text-[10px] uppercase font-bold mr-1">RANGE/STATUS:</span>
              <button
                @click="activeFilter = 'ALL'"
                :class="activeFilter === 'ALL' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#091526] text-slate-400 border border-slate-800 hover:text-white'"
                class="px-2.5 py-0.5 rounded-md transition"
              >
                ALL STCW (12)
              </button>
              <button
                @click="activeFilter = 'SIM'"
                :class="activeFilter === 'SIM' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#091526] text-slate-400 border border-slate-800 hover:text-white'"
                class="px-2.5 py-0.5 rounded-md transition"
              >
                Simulators &amp; Consoles (5)
              </button>
              <button
                @click="activeFilter = 'HV'"
                :class="activeFilter === 'HV' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#091526] text-slate-400 border border-slate-800 hover:text-white'"
                class="px-2.5 py-0.5 rounded-md transition"
              >
                High Voltage &amp; Electrical (2)
              </button>
              <button
                @click="activeFilter = 'KPT'"
                :class="activeFilter === 'KPT' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#091526] text-slate-400 border border-slate-800 hover:text-white'"
                class="px-2.5 py-0.5 rounded-md transition"
              >
                KPT Grounds &amp; Fire (3)
              </button>
              <button
                @click="activeFilter = 'MED'"
                :class="activeFilter === 'MED' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#091526] text-slate-400 border border-slate-800 hover:text-white'"
                class="px-2.5 py-0.5 rounded-md transition"
              >
                DG Medical (1)
              </button>
            </div>
            <div class="text-amber-400 text-[10px] font-bold flex items-center space-x-1">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>1 Practical Endorsement Due</span>
            </div>
          </div>

          <!-- 6 DETAILED CERTIFICATE CARDS -->
          <div class="space-y-3.5">
            <!-- Card 1: ECDIS Simulator 2 -->
            <div class="bg-[#091526] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition group shadow-lg">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                    alt="ECDIS Simulator 2"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-slate-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded">
                    MTI Console Lab
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 uppercase">
                      + VALID STCW Reg II/1 &amp; II/2 IMO Model 1.27
                    </span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-cyan-300 transition">
                    ECDIS Simulator 2 Type-Specific (Wärtsilä &amp; Transas Navi-Trainer Pro 4000)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-KHI-ECDIS-2024-512</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">Facility: MTI Main Campus Simulator Complex</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Verified:</span>
                      <span class="text-cyan-300 font-bold">mtiverification.com</span>
                      <div class="text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&check; DG Ports &amp; Shipping Endorsed</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-slate-400">
                      VALID UNTIL: <strong class="text-white">18 Oct 2028</strong>
                    </div>
                    <NuxtLink
                      to="/verify/IND-AFF-7714-ECDSA"
                      class="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 text-[11px]"
                    >
                      <span>Verify Seal</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2: High Voltage (HV) Safety -->
            <div class="bg-[#091526] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition group shadow-lg">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80"
                    alt="High Voltage Safety"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-slate-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded">
                    High Voltage Lab
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 uppercase">
                      + CERTIFIED STCW Code A-III/1 &amp; A-III/2
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">6.6 kV Vacuum Interrupter</span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-cyan-300 transition">
                    High Voltage (HV) Safety &amp; Switchgear Operations (Operational &amp; Mgmt Level)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-HV-2023-7401</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">Training Bay: ABB V34 Marine Arc-Flash Cell</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Verified:</span>
                      <span class="text-cyan-300 font-bold">mtiverification.com</span>
                      <div class="text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&check; UK MCA Equivalent Syllabus</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-slate-400">
                      VALID UNTIL: <strong class="text-white">04 Sep 2028</strong>
                    </div>
                    <NuxtLink to="/verification" class="text-slate-400 hover:text-cyan-300 text-[11px] flex items-center space-x-1">
                      <span>@ mtiverification.com</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 3: GMDSS General Operator -->
            <div class="bg-[#091526] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition group shadow-lg">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80"
                    alt="GMDSS Radio Lab"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-slate-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded">
                    GMDSS Lab
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 uppercase">
                      + VALID STCW Code A-IV/2
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">Radio Regs (WPC / Govt. of Pakistan)</span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-cyan-300 transition">
                    GMDSS General Operator's Certificate (GOC - Radio Communications)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-GOC-2023-1199</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">Coverage: Sea Areas A1, A2, A3, A4 (Inmarsat C)</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Verified:</span>
                      <span class="text-cyan-300 font-bold">mtiverification.com</span>
                      <div class="text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&check; PTA &amp; DG Ports Logged</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-slate-400">
                      VALID UNTIL: <strong class="text-white">22 Jun 2029</strong>
                    </div>
                    <NuxtLink to="/verification" class="text-slate-400 hover:text-cyan-300 text-[11px] flex items-center space-x-1">
                      <span>@ mtiverification.com</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4: Liquid Cargo Handling Simulator (LCHS) -->
            <div class="bg-[#091526] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition group shadow-lg">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80"
                    alt="LCHS Tanker Simulator"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-slate-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded">
                    LCHS Simulator
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 uppercase">
                      + VALID STCW Reg V/1-1 &amp; V/1-2
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">Oil/Chem Tanker Endorsement</span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-cyan-300 transition">
                    Liquid Cargo Handling Simulator (LCHS / LICOS Tanker Operations)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-LCHS-2023-4821</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">Platform: Transas / Wärtsilä VLCC &amp; Chem Console</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Verified:</span>
                      <span class="text-cyan-300 font-bold">mtiverification.com</span>
                      <div class="text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&check; DG Ports Cleared for PNSC Tankers</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-slate-400">
                      VALID UNTIL: <strong class="text-white">12 Dec 2027</strong>
                    </div>
                    <NuxtLink to="/verification" class="text-slate-400 hover:text-cyan-300 text-[11px] flex items-center space-x-1">
                      <span>@ mtiverification.com</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 5: Engine Room Simulator (ERS) -->
            <div class="bg-[#091526] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition group shadow-lg">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                    alt="Engine Room Simulator"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-slate-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded">
                    ERS 5-Bay Suite
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 uppercase">
                      + VALID STCW Code A-III/1 &amp; A-III/2
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">WÄRTSILÄ MAN B&amp;W 6S50MC</span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-cyan-300 transition">
                    Engine Room Simulator (ERS - Propulsion, Auxiliary &amp; Power Automation)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-ERS-2023-0014</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">System: 5-Screen Multi-Console Station</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Verified:</span>
                      <span class="text-cyan-300 font-bold">mtiverification.com</span>
                      <div class="text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&check; City of Glasgow Accredited Bay</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-slate-400">
                      VALID UNTIL: <strong class="text-white">15 Jul 2028</strong>
                    </div>
                    <NuxtLink to="/verification" class="text-slate-400 hover:text-cyan-300 text-[11px] flex items-center space-x-1">
                      <span>@ mtiverification.com</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 6: Advance Fire Fighting (AFF) - Refresher Scheduled -->
            <div class="bg-[#0e1624] border-2 border-amber-500/50 rounded-2xl p-4 transition group shadow-xl">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="w-full sm:w-44 h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80"
                    alt="KPT Practical Fire Field"
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span class="absolute top-1.5 left-1.5 bg-amber-500 text-slate-950 text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow">
                    KPT Grounds Drill
                  </span>
                </div>

                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono font-black text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40 uppercase">
                      ! PRACTICAL ENDORSEMENT DUE STCW Code A-VI/3
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">5-Year Refresher Required</span>
                  </div>
                  <h3 class="text-sm font-black text-white group-hover:text-amber-300 transition">
                    Advance Fire Fighting (AFF - Practical SCBA, Foam &amp; Boundary Cooling)
                  </h3>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono pt-1">
                    <div>
                      <span class="text-[10px] text-slate-500 block">Cert #:</span>
                      <span class="text-white font-bold">MTI-KPT-AFF-2018-2287</span>
                      <div class="text-[10px] text-slate-400 mt-0.5">Chief Instructor: Capt. M. H. Zaidi</div>
                    </div>
                    <div>
                      <span class="text-[10px] text-slate-500 block">Ground:</span>
                      <span class="text-amber-300 font-bold">KPT Apprentice Yard, Karachi</span>
                      <div class="text-[10px] text-amber-400 font-bold flex items-center space-x-1 mt-0.5">
                        <span>&bull; Revalidation Batch Scheduled</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div class="text-[10px] text-amber-400 font-bold">
                      REFRESHER DEADLINE: 28 Nov 2024 (18 Days)
                    </div>
                    <button
                      @click="confirmDrillSlot"
                      class="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] px-3 py-1.5 rounded-lg shadow-sm transition flex items-center space-x-1 uppercase"
                    >
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Book KPT Drill</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Upload / OCR Repository Section -->
          <div class="bg-[#091526] border border-cyan-500/30 rounded-2xl p-5 shadow-xl text-center space-y-3">
            <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-black text-white">MTI Digital Document Repository &amp; OCR Engine</h4>
              <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Upload Pakistani CDC, NADRA SID, DG Medical Form 1, or City of Glasgow Module Transcripts.
              </p>
            </div>
            <div class="pt-1">
              <NuxtLink
                to="/seafarer/documents"
                class="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 transition uppercase font-mono"
              >
                <span>Instant QR Hash Verification on mtiverification.com</span>
              </NuxtLink>
            </div>
            <div class="text-[10px] font-mono text-slate-500">
              DG Ports &amp; Shipping Encrypted &bull; 256-Bit SHA Hashing
            </div>
          </div>
        </div>

        <!-- ── RIGHT COLUMN: READINESS, SIM ROSTER & CADET DOSSIER (4 cols) ── -->
        <div class="lg:col-span-4 space-y-4">
          <!-- Card 1: PNSC Sign-On Readiness -->
          <div class="bg-[#091526] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3.5">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 class="text-xs font-black text-white uppercase tracking-wider font-mono">PNSC Sign-On Readiness</h4>
              </div>
              <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black px-2 py-0.5 rounded font-mono uppercase">
                94% CLEARED
              </span>
            </div>

            <!-- Target Assignment Strip -->
            <div class="space-y-1 text-xs font-mono bg-[#060e1a] p-3 rounded-xl border border-slate-800/80">
              <div class="flex justify-between text-slate-400">
                <span>Target Shipping Line:</span>
                <span class="text-cyan-300 font-bold">PNSC (Pakistan National Shipping Corp)</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Vessel Type:</span>
                <span class="text-white">Aframax Crude Tanker (MT Karachi)</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Berth Port:</span>
                <span class="text-amber-300">Port Muhammad Bin Qasim (FOTCO)</span>
              </div>
            </div>

            <!-- Checklist -->
            <div class="space-y-2 text-xs font-mono">
              <div class="flex items-center justify-between p-2 rounded-lg bg-[#060e1a]/60">
                <div class="flex items-center space-x-2">
                  <span class="text-emerald-400 font-bold">&check;</span>
                  <span class="text-slate-200">GP-III Pre-Sea Nautical Training</span>
                </div>
                <span class="text-[10px] font-bold text-emerald-400">MTI Complete</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded-lg bg-[#060e1a]/60">
                <div class="flex items-center space-x-2">
                  <span class="text-emerald-400 font-bold">&check;</span>
                  <span class="text-slate-200">Wärtsilä ECDIS 1.27 Certificate</span>
                </div>
                <span class="text-[10px] font-bold text-emerald-400">Endorsed</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded-lg bg-[#060e1a]/60">
                <div class="flex items-center space-x-2">
                  <span class="text-emerald-400 font-bold">&check;</span>
                  <span class="text-slate-200">DG Ports Medical Fitness (Form 1)</span>
                </div>
                <span class="text-[10px] font-bold text-emerald-400">Port Health Fit</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded-lg bg-[#060e1a]/60">
                <div class="flex items-center space-x-2">
                  <span class="text-emerald-400 font-bold">&check;</span>
                  <span class="text-slate-200">High Voltage (6.6kV) Switchgear</span>
                </div>
                <span class="text-[10px] font-bold text-emerald-400">Valid 2028</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded-lg bg-[#060e1a]/60">
                <div class="flex items-center space-x-2">
                  <span class="text-emerald-400 font-bold">&check;</span>
                  <span class="text-slate-200">Yellow Fever Card &amp; Cholera</span>
                </div>
                <span class="text-[10px] font-bold text-emerald-400">Active</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded-lg bg-amber-950/20 border border-amber-500/30">
                <div class="flex items-center space-x-2">
                  <span class="text-amber-400 font-bold">!</span>
                  <span class="text-amber-200 font-semibold">KPT Ground Fire Smoke Diving Drill</span>
                </div>
                <span class="text-[10px] font-bold text-amber-400">Slot Pending</span>
              </div>
            </div>

            <button
              @click="submitPnscDossier"
              class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs font-mono py-2.5 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center justify-center space-x-1.5 uppercase"
            >
              <span>Submit PNSC Crewing Dossier</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <!-- Card 2: MTI Simulator Bay Roster -->
          <div class="bg-[#091526] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800 font-mono">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 class="text-xs font-black text-white uppercase tracking-wider">MTI Simulator Bay Roster</h4>
              </div>
              <span class="text-[10px] text-cyan-400 font-bold">Live Bay Status</span>
            </div>

            <!-- Mini Card 1: FMBS Bridge Simulator -->
            <div class="rounded-xl border border-slate-800 bg-[#060e1a] overflow-hidden group">
              <div class="h-24 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                  alt="FMBS Bridge Simulator"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent"></div>
                <div class="absolute top-2 left-2 flex items-center space-x-1.5">
                  <span class="bg-slate-950/80 border border-slate-700 text-[8px] font-mono text-slate-300 px-1.5 py-0.5 rounded uppercase">
                    FMBS Bridge Simulator
                  </span>
                  <span class="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                    Session Active
                  </span>
                </div>
                <div class="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono">
                  <span class="text-white font-bold">Malacca Strait Night Navigation</span>
                  <span class="text-cyan-300 font-bold">Bay #1 &bull; 14:00 PKT</span>
                </div>
              </div>
            </div>

            <!-- Mini Card 2: KPT Apprentice Yard Field -->
            <div class="rounded-xl border border-slate-800 bg-[#060e1a] overflow-hidden group">
              <div class="h-24 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80"
                  alt="KPT Apprentice Yard Field"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent"></div>
                <div class="absolute top-2 left-2 flex items-center space-x-1.5">
                  <span class="bg-slate-950/80 border border-slate-700 text-[8px] font-mono text-slate-300 px-1.5 py-0.5 rounded uppercase">
                    KPT Apprentice Yard Field
                  </span>
                  <span class="bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                    Briefing 08:30
                  </span>
                </div>
                <div class="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono">
                  <span class="text-white font-bold">Survival Craft &amp; Open Sea Muster</span>
                  <span class="text-amber-300 font-bold">Keamari Grounds</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: MTI Digital Cadet Dossier -->
          <div class="bg-[#091526] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3 font-mono">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <h4 class="text-xs font-black text-white uppercase tracking-wider">MTI Digital Cadet Dossier</h4>
              </div>
              <span class="text-[10px] text-emerald-400 font-bold uppercase">Govt. Verified</span>
            </div>

            <!-- Cadet Card Strip with QR Code -->
            <div class="flex items-center space-x-3 p-3 rounded-xl bg-[#060e1a] border border-slate-800">
              <div class="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center font-black text-cyan-400 text-xs shrink-0">
                TK
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-bold text-white text-xs truncate">Tariq Khan</div>
                <div class="text-[10px] text-slate-400 truncate">MTI / City of Glasgow Cadet 4384</div>
                <div class="text-[10px] text-cyan-400 mt-0.5">DG Ports Status: E-PASS Active</div>
              </div>
              <!-- QR Thumbnail -->
              <div class="w-10 h-10 rounded bg-white p-1 shrink-0 flex items-center justify-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://mtiverification.com/verify/TK-4384"
                  alt="QR Code"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>

            <div class="space-y-1 text-[11px] text-slate-400">
              <div>UK MCA Credit Track: <strong class="text-white">City of Glasgow SQA 82%</strong></div>
              <div>Direct QR Portal: <strong class="text-amber-400">mtiverification.com</strong></div>
            </div>

            <!-- Actions Row -->
            <div class="grid grid-cols-2 gap-2 pt-1">
              <button
                @click="openDossierPdf"
                class="bg-[#060e1a] hover:bg-[#0c1c33] border border-slate-700 text-slate-300 hover:text-white py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1"
              >
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>DG Dossier (PDF)</span>
              </button>
              <NuxtLink
                to="/verification"
                class="bg-cyan-400 hover:bg-cyan-300 text-slate-950 py-2 px-3 rounded-xl text-xs font-black transition flex items-center justify-center space-x-1 uppercase"
              >
                <span>Open Verification</span>
              </NuxtLink>
            </div>

            <!-- Tuition Accounting Strip -->
            <div class="pt-2 border-t border-slate-800/80 text-[10px] space-y-1 text-slate-400">
              <div class="flex justify-between">
                <span>Semester 02 Nautical (PNSC):</span>
                <span class="text-emerald-400 font-bold">PKR 185,000 (Paid)</span>
              </div>
              <div class="flex justify-between">
                <span>KPT Apprentice Ground AFF Fee:</span>
                <span class="text-amber-400 font-bold">PKR 18,000 (Voucher Logged)</span>
              </div>
              <div class="flex justify-between">
                <span>National Bank of Pakistan (NBP) Escrow:</span>
                <span class="text-cyan-300 font-bold">&check; Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 7. OFFICIAL FOOTER                                              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <footer class="mt-14 pt-8 border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-black">
            ⚓
          </div>
          <div>
            <div class="font-bold text-white">Maritime Training Institute (MTI Karachi)</div>
            <div class="text-[10px] text-slate-500">Approved by Directorate General of Ports &amp; Shipping &bull; Estd. 1998 &bull; Karachi, Pakistan</div>
          </div>
        </div>

        <div class="flex items-center space-x-4 text-[11px]">
          <NuxtLink to="/verification" class="text-amber-400 hover:underline">mtiverification.com</NuxtLink>
          <span class="text-slate-700">&bull;</span>
          <span class="text-slate-300">City of Glasgow College (UK) Partner</span>
          <span class="text-slate-700">&bull;</span>
          <span class="text-slate-500">DG Ports &amp; Shipping, Govt. of Pakistan</span>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-slate-900 text-center text-[10px] font-mono text-slate-600">
        &copy; 1998-2026 MTI Karachi. All rights reserved. Direct Maritime Regulatory Gateway.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeCurrency = ref('PKR');
const activeTab = ref('vault');
const activeFilter = ref('ALL');
const searchQuery = ref('');

function confirmDrillSlot() {
  alert('Drill Slot Confirmed!\n\nAdvance Fire Fighting & SCBA Smoke Diving session booked for Friday 09:00 PKT at KPT Apprentice Practical Training Ground, Keamari. Biometric check-in required.');
}

function downloadProtocolPdf() {
  alert('Downloading official KPT Yard Practical Safety Protocol PDF...');
}

function exportDossierZip() {
  alert('Generating encrypted ZIP archive of all 11 DG-approved STCW certificates and Glasgow transcripts...');
}

function submitPnscDossier() {
  alert('Submitting verified digital crewing dossier to Pakistan National Shipping Corporation (PNSC) crewing department...');
}

function openDossierPdf() {
  alert('Opening DG Certified Seafarer Dossier (PDF)...');
}
</script>
