<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex">
    
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. PERSISTENT MARITIME SIDEBAR (FLEET OPERATIONS HUB)             -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <aside class="w-64 bg-[#071022] text-slate-300 border-r border-slate-800/80 shrink-0 hidden md:flex flex-col justify-between sticky top-0 h-screen z-30">
      <div class="p-4">
        <!-- Logo / Brand Header -->
        <NuxtLink to="/" class="flex items-center space-x-3 px-2 py-3 mb-4 rounded-xl hover:bg-slate-800/40 transition">
          <div class="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-xs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-black text-white tracking-tight flex items-center gap-1.5">
              <span>The Seafu</span>
            </div>
            <div class="text-[9px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
              FLEET OPERATIONS HUB
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Sections -->
        <nav class="space-y-6">
          <!-- Section 1: Core Operations -->
          <div>
            <div class="text-[10px] font-mono tracking-wider text-slate-400 uppercase px-3 mb-2 font-bold">
              CORE OPERATIONS
            </div>
            <div class="space-y-1">
              <button
                v-for="item in coreNavItems"
                :key="item.id"
                @click="activeTab = item.id"
                class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition"
                :class="activeTab === item.id
                  ? 'bg-[#0c2240] text-white border-l-3 border-cyan-400 font-bold shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'"
              >
                <div class="flex items-center space-x-2.5">
                  <component :is="item.icon" class="w-4 h-4 shrink-0" />
                  <span>{{ item.label }}</span>
                </div>
                <span
                  v-if="item.badge"
                  class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                  :class="activeTab === item.id ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50' : 'bg-slate-800 text-slate-400'"
                >
                  {{ item.badge }}
                </span>
              </button>
            </div>
          </div>

          <!-- Section 2: Personnel & Governance -->
          <div>
            <div class="text-[10px] font-mono tracking-wider text-slate-400 uppercase px-3 mb-2 font-bold">
              PERSONNEL &amp; GOVERNANCE
            </div>
            <div class="space-y-1">
              <button
                v-for="item in governanceNavItems"
                :key="item.id"
                @click="activeTab = item.id"
                class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition"
                :class="activeTab === item.id
                  ? 'bg-[#0c2240] text-white border-l-3 border-cyan-400 font-bold shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'"
              >
                <div class="flex items-center space-x-2.5">
                  <component :is="item.icon" class="w-4 h-4 shrink-0" />
                  <span>{{ item.label }}</span>
                </div>
                <span
                  v-if="item.badge"
                  class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                  :class="activeTab === item.id ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50' : 'bg-slate-800 text-slate-400'"
                >
                  {{ item.badge }}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <!-- Bottom Status Footnote -->
      <div class="p-4 border-t border-slate-800/60">
        <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono">
          <div class="flex items-center space-x-2 text-slate-300">
            <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z" />
            </svg>
            <span class="font-bold uppercase tracking-wider text-[10px]">VESSEL BRIDGE NET</span>
          </div>
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Connected"></span>
        </div>
      </div>
    </aside>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN WORKSPACE                                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="flex-1 min-w-0 flex flex-col min-h-screen">

      <!-- TOP COMMAND / NAVIGATION BAR -->
      <header class="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 shadow-2xs">
        <!-- Search Input -->
        <div class="flex-1 max-w-lg relative">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            v-model="globalSearch"
            type="text"
            placeholder="Search seafarers, institutes, IMO..."
            class="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:border-blue-600 transition"
          />
          <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[10px] font-mono text-slate-400">
            ⌘K
          </span>
        </div>

        <!-- Center Status Chip -->
        <div class="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono font-bold text-slate-700">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>STCW / DG SHIPPING COMPLIANT: ONLINE</span>
        </div>

        <!-- Right Controls -->
        <div class="flex items-center space-x-3 shrink-0">
          <button
            @click="showAddBatchModal = true"
            class="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold transition shadow-2xs"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>New Approval Batch</span>
          </button>

          <!-- Notification Bell -->
          <button
            class="relative p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
            aria-label="Notifications"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
          </button>

          <!-- Admin Profile -->
          <div class="flex items-center space-x-2.5 pl-2 border-l border-slate-200">
            <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-slate-700">
              AF
            </div>
            <div class="hidden xl:block text-left text-xs">
              <div class="font-black text-slate-900 leading-tight">Capt. Alistair Finch</div>
              <div class="text-[10px] text-slate-500 font-medium">Chief Administrator</div>
            </div>
          </div>
        </div>
      </header>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB A: SEAFARER DOSSIER VIEW (MATCHES REFERENCE SCREENSHOT)     -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-if="activeTab === 'dossier'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <!-- Sub-Header / Breadcrumb & Status Bar -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2 text-xs text-slate-500 mb-1.5">
              <span>User Management</span>
              <span>&rsaquo;</span>
              <span>Seafarers &amp; Cadets</span>
              <span>&rsaquo;</span>
              <span class="font-bold text-slate-900">Capt. Rajesh Kumar (SF-99412)</span>
            </div>
            <div class="flex items-center gap-2 flex-wrap text-xs">
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>ACTIVE SEA SERVICE</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                DG SHIPPING VERIFIED
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                STCW 2010 / MANILA COMPLIANT
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-purple-50 text-purple-700 border border-purple-200 font-mono">
                MLC 2006 TIER 1 VALIDATED
              </span>
            </div>
          </div>

          <!-- Right Action Suite -->
          <div class="flex items-center space-x-2.5 shrink-0 flex-wrap">
            <button
              @click="runGisisCheck"
              class="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs inline-flex items-center space-x-1.5"
            >
              <svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Flag State GISIS Check</span>
            </button>

            <button
              @click="exportImoDossier"
              class="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs inline-flex items-center space-x-1.5"
            >
              <svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export IMO Dossier</span>
            </button>

            <div class="relative">
              <button
                @click="showEndorseMenu = !showEndorseMenu"
                class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-2xs inline-flex items-center space-x-1.5"
              >
                <span>Manage Endorsements</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Officer Identity & Service Summary Card -->
        <div class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <!-- Left: Officer Info & Credentials -->
            <div class="flex items-start space-x-4">
              <!-- Officer Photo -->
              <div class="relative w-20 h-24 rounded-xl overflow-hidden bg-slate-800 border-2 border-slate-300 shadow-sm shrink-0 flex items-center justify-center">
                <div class="text-center text-white p-1">
                  <div class="text-2xl">👨‍✈️</div>
                  <div class="text-[9px] font-bold font-mono uppercase mt-1 text-cyan-300">MASTER</div>
                </div>
                <span class="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>

              <div class="space-y-1">
                <div class="flex items-center space-x-2">
                  <h2 class="text-xl font-black text-slate-900 tracking-tight">Capt. Rajesh Kumar</h2>
                  <svg class="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="text-xs font-bold text-slate-700">Master Mariner (FG – Foreign Going Unlimited)</div>
                <div class="text-xs text-slate-500 font-mono">
                  CoC: <span class="font-bold text-slate-800">IND-COC-88914</span> &bull; Exp: <span class="text-slate-800 font-bold">14 Nov 2028</span>
                </div>
                <div class="text-xs text-slate-600 flex items-center gap-1 mt-1">
                  <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Current: <em>Maersk Mc-Kinney Moller (Command Navigation)</em></span>
                </div>

                <!-- Structured Registry Sub-block -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-[11px] font-mono text-slate-600">
                  <div>
                    <span class="text-slate-400 block text-[9px]">INDOS REGISTRY</span>
                    <strong class="text-slate-900">04NL8821</strong>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[9px]">CDC SEAFARER NO</span>
                    <strong class="text-slate-900">C-9842109</strong>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[9px]">BIOMETRIC SID</span>
                    <strong class="text-slate-900">IN-SID-2022-79140</strong>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[9px]">FLAG ADMINISTRATION</span>
                    <strong class="text-blue-700">India (DG Shipping)</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 3 KPI Telemetry Badges -->
            <div class="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-1">
              <!-- KPI 1: Total Sea Time -->
              <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 min-w-[150px] shrink-0">
                <div class="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                  <span>TOTAL SEA TIME</span>
                  <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-2xl font-black font-mono text-slate-900 mt-1">3,840</div>
                <div class="text-[10px] text-slate-500 font-medium">Days (10.5 Yrs)</div>
                <div class="text-[10px] text-blue-700 font-bold mt-0.5">1,420 Days in Command</div>
              </div>

              <!-- KPI 2: STCW Badges -->
              <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 min-w-[150px] shrink-0">
                <div class="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                  <span>STCW BADGES</span>
                  <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-2xl font-black font-mono text-slate-900 mt-1">18 / 18</div>
                <div class="text-[10px] text-slate-500 font-medium">Endorsements Active</div>
                <div class="text-[10px] text-amber-600 font-bold mt-0.5">1 due in 62d (PSCRB)</div>
              </div>

              <!-- KPI 3: Compliance Index -->
              <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 min-w-[150px] shrink-0">
                <div class="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                  <span>COMPLIANCE INDEX</span>
                  <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="text-2xl font-black font-mono text-emerald-600 mt-1">99.8%</div>
                <div class="text-[10px] text-slate-500 font-medium">PSC Detentions: 0</div>
                <div class="text-[10px] text-emerald-600 font-bold mt-0.5">Paris / Tokyo MoU Clean</div>
              </div>
            </div>

          </div>
        </div>

        <!-- Horizontal Sub-Tabs -->
        <div class="border-b border-slate-200 flex items-center gap-6 text-xs font-bold overflow-x-auto">
          <button
            v-for="sub in dossierTabs"
            :key="sub.id"
            @click="activeDossierSubTab = sub.id"
            class="pb-3 pt-1 border-b-2 transition whitespace-nowrap"
            :class="activeDossierSubTab === sub.id
              ? 'border-blue-700 text-blue-700 font-black'
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'"
          >
            {{ sub.label }}
          </button>
        </div>

        <!-- 2-COLUMN DOSSIER MAIN CONTENT -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- LEFT / CENTER COLUMN (2 COLS) -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Filters Row -->
            <div class="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-2 flex-wrap flex-1">
                <input
                  v-model="dossierVesselFilter"
                  type="text"
                  placeholder="Filter vessel"
                  class="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs outline-none focus:bg-white focus:border-blue-600 w-36 sm:w-44"
                />
                <select
                  v-model="dossierVesselType"
                  class="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs outline-none focus:bg-white font-medium"
                >
                  <option value="ALL">All Vessel Types (Container, Tanker, Bulk)</option>
                  <option value="CONTAINER">Container</option>
                  <option value="TANKER">Tanker (VLCC)</option>
                  <option value="BULK">Bulk Carrier</option>
                </select>
                <select
                  v-model="dossierRankFilter"
                  class="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs outline-none focus:bg-white font-medium"
                >
                  <option value="ALL">Rank: All (Master, C/O, 2/O)</option>
                  <option value="MASTER">Master</option>
                  <option value="CHIEF_OFFICER">Chief Officer</option>
                </select>
              </div>

              <div class="flex items-center space-x-3 text-[11px] font-mono text-slate-500">
                <span>SHOWING: <strong>4 VERIFIED VOYAGES</strong></span>
                <button
                  @click="downloadVoyagesCsv"
                  class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700"
                  title="Download CSV"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Verified Continuous Discharge Ledger (CDB/CDC Log) -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div class="p-4 border-b border-slate-100 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 class="text-sm font-black text-slate-900 tracking-tight">Verified Continuous Discharge Ledger (CDB/CDC Log)</h3>
                </div>
                <span class="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  FLAG STATE SYNCHRONIZED
                </span>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th class="px-4 py-3">VESSEL &amp; SPEC</th>
                      <th class="px-4 py-3">CAPACITY / RANK</th>
                      <th class="px-4 py-3">VOYAGE WINDOW</th>
                      <th class="px-4 py-3 text-center">SEA DAYS</th>
                      <th class="px-4 py-3 text-right">AUTHENTICATION &amp; STAMP</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-700">
                    <!-- Row 1: Maersk Mc-Kinney Moller -->
                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Maersk Mc-Kinney Moller</div>
                        <div class="text-[10px] text-slate-400 font-mono">
                          IMO 9619987 &bull; 18,278 TEU (165,000 DWT)
                        </div>
                        <div class="text-[10px] text-slate-500">MAN B&amp;W 8S95ME-C9.2 (59,360 kW)</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A1936] text-white font-mono">
                          MASTER / CAPTAIN
                        </span>
                        <div class="text-[10px] text-slate-500 mt-1">Command Navigation</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-800">12 Jan 2024 &ndash; 18 Aug 2024</div>
                        <div class="text-[10px] text-slate-500">Rotterdam (NLD) &rarr; Singapore (SGP)</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">219</div>
                        <div class="text-[10px] text-slate-400">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                          <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Maersk Fleet Ops API</span>
                        </span>
                        <div class="text-[10px] text-slate-400 mt-0.5">Supt. Capt. J. Westergaard</div>
                      </td>
                    </tr>

                    <!-- Row 2: Mumbai Maersk -->
                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Mumbai Maersk</div>
                        <div class="text-[10px] text-slate-400 font-mono">
                          IMO 9780471 &bull; 20,568 TEU (214,286 DWT)
                        </div>
                        <div class="text-[10px] text-slate-500">MAN B&amp;W G95ME (Triple-E 2nd Gen)</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A1936] text-white font-mono">
                          MASTER / CAPTAIN
                        </span>
                        <div class="text-[10px] text-slate-500 mt-1">Command Navigation</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-800">05 Mar 2023 &ndash; 28 Oct 2023</div>
                        <div class="text-[10px] text-slate-500">Tanjung Pelepas &rarr; Bremerhaven</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">237</div>
                        <div class="text-[10px] text-slate-400">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>DG Flag Surveyor Endorsed</span>
                        </span>
                        <div class="text-[10px] text-slate-400 mt-0.5">Mumbai MMD Verified Log #811</div>
                      </td>
                    </tr>

                    <!-- Row 3: Safmarine Chilka -->
                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Safmarine Chilka</div>
                        <div class="text-[10px] text-slate-400 font-mono">
                          IMO 9355355 &bull; 4,568 TEU Post-Panamax
                        </div>
                        <div class="text-[10px] text-slate-500">Sulzer 8RTA84C</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-white font-mono">
                          CHIEF OFFICER
                        </span>
                        <div class="text-[10px] text-slate-500 mt-1">Cargo &amp; Nav Watch (4-8)</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-800">10 Feb 2022 &ndash; 15 Sep 2022</div>
                        <div class="text-[10px] text-slate-500">Durban &rarr; Jebel Ali &rarr; Nhava Sheva</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">217</div>
                        <div class="text-[10px] text-slate-400">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          <svg class="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Discharge Book Stamped</span>
                        </span>
                        <div class="text-[10px] text-slate-400 mt-0.5">Shipping Master Kolkata</div>
                      </td>
                    </tr>

                    <!-- Row 4: APL Raffles -->
                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">APL Raffles</div>
                        <div class="text-[10px] text-slate-400 font-mono">
                          IMO 9632064 &bull; 14,000 TEU Container
                        </div>
                        <div class="text-[10px] text-slate-500">MAN B&amp;W 11S90ME-C9.2</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-white font-mono">
                          CHIEF OFFICER
                        </span>
                        <div class="text-[10px] text-slate-500 mt-1">Cargo &amp; Nav Watch</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-800">14 Aug 2020 &ndash; 22 Feb 2021</div>
                        <div class="text-[10px] text-slate-500">Shanghai &rarr; Los Angeles</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">192</div>
                        <div class="text-[10px] text-slate-400">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          <svg class="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Discharge Book Stamped</span>
                        </span>
                        <div class="text-[10px] text-slate-400 mt-0.5">CMA CGM / APL Fleet Personnel</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination Footer -->
              <div class="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Continuous Discharge Certificate Record Page: <strong>14 of 28</strong></span>
                <button class="text-blue-700 font-bold hover:underline">
                  View Full Archive Logbook (10.5 Years) &rarr;
                </button>
              </div>
            </div>

            <!-- Bridge Watchkeeping & Voyage Domain Breakdown -->
            <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z" />
                  </svg>
                  <div>
                    <h3 class="text-sm font-black text-slate-900 tracking-tight">Bridge Watchkeeping &amp; Voyage Domain Breakdown</h3>
                    <p class="text-[11px] text-slate-500">Distribution of command experience across critical maritime navigational environments</p>
                  </div>
                </div>
              </div>

              <!-- 4 Domain Telemetry Cards -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-500 uppercase">OPEN OCEAN</span>
                    <span class="text-base font-black font-mono text-blue-700">62%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-800 mt-1">2,380 Days</div>
                  <div class="text-[9px] text-slate-400">Transpacific / Atlantic</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-500 uppercase">CONGESTED TSS</span>
                    <span class="text-base font-black font-mono text-cyan-700">24%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-800 mt-1">921 Days</div>
                  <div class="text-[9px] text-slate-400">Malacca, Dover, Singapore</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-500 uppercase">TYPHOON/HEAVY SEA</span>
                    <span class="text-base font-black font-mono text-amber-700">10%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-800 mt-1">384 Days</div>
                  <div class="text-[9px] text-slate-400">North Pacific Winter &amp; SW</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-500 uppercase">POLAR / ICE RIM</span>
                    <span class="text-base font-black font-mono text-indigo-700">4%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-800 mt-1">155 Days</div>
                  <div class="text-[9px] text-slate-400">Sub-Arctic Baltic winter</div>
                </div>
              </div>

              <!-- Flag State Continuous Sea Time Certification Banner -->
              <div class="bg-[#0A1936] text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0 text-cyan-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">Flag State Continuous Sea Time Certification</h4>
                    <p class="text-[10px] text-slate-300 font-mono">All 3,840 days mapped against Electronic Continuous Discharge Book (e-CDB)</p>
                  </div>
                </div>
                <button
                  @click="verifySeaLogPdf"
                  class="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition shrink-0"
                >
                  Verify Official Sea Log PDF
                </button>
              </div>

            </div>

          </div>

          <!-- RIGHT COLUMN (1 COL): INTELLIGENCE & VERIFICATION -->
          <div class="space-y-6">
            
            <!-- Card 1: Cryptographic Verification -->
            <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3.5">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider">Cryptographic Verification</h3>
                </div>
                <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  LIVE SHA-256
                </span>
              </div>

              <!-- Visual QR Hash Block -->
              <div class="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="w-14 h-14 bg-white border border-slate-300 rounded-lg p-1.5 shrink-0 flex items-center justify-center">
                  <!-- Simplified QR code vector -->
                  <svg class="w-full h-full text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2 2h2v4h-2v-4zm4 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <span class="text-[9px] font-mono text-slate-400 uppercase block">IMO GISIS LEDGER HASH</span>
                  <div class="text-[11px] font-mono font-bold text-blue-700 truncate">
                    9e4a8b2c...311b8f04
                  </div>
                  <div class="text-[10px] text-emerald-600 flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Matched with India DG Shipping Core</span>
                  </div>
                </div>
              </div>

              <button
                @click="triggerBiometricSid"
                class="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center justify-center space-x-2"
              >
                <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.75 9.564M12 11c0-3.517.991-6.799 2.75-9.564M12 11h.01M5.75 19.564C3.991 16.799 3 13.517 3 11c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.517-.991 5.799-2.75 8.564" />
                </svg>
                <span>Trigger Biometric SID Verification</span>
              </button>
            </div>

            <!-- Card 2: STCW Endorsements -->
            <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider">STCW Endorsements</h3>
                  <p class="text-[10px] text-slate-400">Regulation II/2 Master &amp; High-Voltage</p>
                </div>
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  18 Total
                </span>
              </div>

              <div class="space-y-2 text-xs">
                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <div class="font-bold text-slate-900">Master CoC (STCW Reg II/2 Unlimited)</div>
                    <div class="text-[10px] text-slate-500 font-mono">DG QR Verified A9941a8 &bull; Exp: 14 Nov 2028</div>
                  </div>
                  <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VALID</span>
                </div>

                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <div class="font-bold text-slate-900">ECDIS Type Specific (3 Systems)</div>
                    <div class="text-[10px] text-slate-500 font-mono">JRC, Furuno FMD-3300, Sperry VisionMaster</div>
                  </div>
                  <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VALID</span>
                </div>

                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <div class="font-bold text-slate-900">Bridge Resource Management (BRM)</div>
                    <div class="text-[10px] text-slate-500 font-mono">Warsash Maritime Academy (Manned Model)</div>
                  </div>
                  <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VALID</span>
                </div>

                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <div class="font-bold text-slate-900">Advanced Fire Fighting (AFF)</div>
                    <div class="text-[10px] text-slate-500 font-mono">STCW A-VI/3 &bull; Refresher done Oct 2023</div>
                  </div>
                  <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VALID</span>
                </div>

                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-2">
                  <div>
                    <div class="font-bold text-slate-900">Medical Care Onboard (STCW A-VI/4-2)</div>
                    <div class="text-[10px] text-slate-500 font-mono">Full Medical Officer Certification</div>
                  </div>
                  <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VALID</span>
                </div>

                <!-- Urgent Refresher alert -->
                <div class="p-2.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1">
                  <div class="flex items-center justify-between">
                    <div class="font-bold text-rose-900 flex items-center gap-1.5">
                      <svg class="w-3.5 h-3.5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Survival Craft &amp; Rescue Boats (PSCRB)</span>
                    </div>
                    <span class="text-[9px] font-mono font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded border border-rose-300 uppercase">REFRESHER</span>
                  </div>
                  <div class="text-[10px] text-rose-700 font-mono">STCW A-VI/2-1 &bull; <strong>Expires in 62 Days</strong></div>
                  <div class="text-[10px] text-rose-800 font-medium">Slot Reserved: Anglo-Eastern Academy Mumbai</div>
                </div>
              </div>

              <button class="w-full text-center text-xs font-bold text-blue-700 hover:underline pt-1">
                Inspect all 18 STCW Manila Certificates &rarr;
              </button>
            </div>

            <!-- Card 3: Next Scheduled Assignment -->
            <div class="bg-[#071022] text-white border border-slate-800 rounded-2xl p-5 shadow-md space-y-3.5">
              <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">NEXT SCHEDULED ASSIGNMENT</span>
                <span class="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  100% Cleared
                </span>
              </div>

              <div>
                <h4 class="text-base font-black text-white">Emma Maersk</h4>
                <div class="text-xs text-slate-400 font-mono">Ultra-Large Container Vessel &bull; 15,500 TEU</div>
                <div class="text-xs text-cyan-400 font-mono mt-0.5">Departure: 10 Oct 2024 &bull; Felixstowe (GBR)</div>
              </div>

              <div class="space-y-1.5 text-xs text-slate-300 font-mono">
                <div class="flex justify-between">
                  <span class="text-slate-400">MLC 2006 Rest Hours Audit:</span>
                  <span class="text-emerald-400 font-bold">Compliant (78h Rest/Wk)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Flag State Endorsement (DIS):</span>
                  <span class="text-white font-bold">Danish Maritime CRA Ready</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Vessel Specific Matrix:</span>
                  <span class="text-emerald-400 font-bold">Matches Company Tier 1</span>
                </div>
              </div>

              <button
                @click="endorseDeploymentDispatch"
                class="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition shadow-sm flex items-center justify-center space-x-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Endorse Deployment Dispatch</span>
              </button>
            </div>

          </div>

        </div>

      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB B: OVERVIEW & ANALYTICS                                     -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'overview'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <!-- 4 Stat Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">GROSS BOOKINGS GMV</span>
            <div class="mt-3">
              <div class="text-3xl font-black font-mono text-slate-900 tracking-tight">₹2,48,00,000</div>
              <div class="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                <span>Commission (10%):</span>
                <strong class="text-blue-700 font-mono">₹24.80 L</strong>
              </div>
            </div>
          </div>
          <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">APPROVALS BACKLOG</span>
            <div class="mt-3">
              <div class="text-3xl font-black font-mono text-amber-600 tracking-tight">{{ pendingTotal }} Action Req</div>
              <div class="text-xs text-slate-500 mt-1">Institutes, Courses &amp; Certs</div>
            </div>
          </div>
          <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">REGISTERED MARINERS</span>
            <div class="mt-3">
              <div class="text-3xl font-black font-mono text-slate-900 tracking-tight">18,462</div>
              <div class="text-xs text-slate-500 mt-1">18,420 Seafarers &bull; 42 Academies</div>
            </div>
          </div>
          <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">PSC INTEGRITY RATE</span>
            <div class="mt-3">
              <div class="text-3xl font-black font-mono text-emerald-600 tracking-tight">99.8%</div>
              <div class="text-xs text-slate-500 mt-1">Zero Detentions Reported</div>
            </div>
          </div>
        </div>

        <!-- Funnel Engine & Revenue -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 class="text-base font-black text-slate-900 mb-4">Seafarer Journey Telemetry</h3>
            <div class="space-y-3">
              <div v-for="(stage, idx) in funnelStages" :key="stage.name" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex justify-between text-xs mb-1 font-bold">
                  <span>{{ stage.name }}</span>
                  <span class="text-blue-700 font-mono">{{ stage.count.toLocaleString() }} ({{ stage.rate }}%)</span>
                </div>
                <div class="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div class="h-full bg-blue-600 rounded-full" :style="{ width: stage.rate + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 class="text-base font-black text-slate-900 mb-4">Monthly Platform Commission Revenue (INR)</h3>
            <div class="space-y-3 text-xs">
              <div v-for="m in monthlyRevenue" :key="m.month" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <div class="font-black text-slate-900">{{ m.month }}</div>
                  <div class="text-[11px] text-slate-500 font-mono">Gross GMV: ₹{{ (m.gmv / 100000).toFixed(1) }}L</div>
                </div>
                <div class="text-right font-mono">
                  <div class="font-bold text-blue-700">₹{{ (m.commission / 1000).toFixed(0) }}K Platform Fee</div>
                  <div class="text-[10px] text-emerald-600 font-bold">GST: ₹{{ m.gst }} &bull; TDS: ₹{{ m.tds }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB C: APPROVAL WORKFLOWS                                       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'approvals'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div class="flex gap-2">
            <button
              v-for="sub in ['INSTITUTES', 'COURSES', 'CERTIFICATES']"
              :key="sub"
              class="px-4 py-2 rounded-xl text-xs font-bold transition border"
              :class="approvalSubTab === sub
                ? 'bg-blue-50 text-blue-700 border-blue-300 font-black'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'"
              @click="approvalSubTab = sub"
            >
              {{ sub }} QUEUE
            </button>
          </div>
        </div>

        <!-- Institutes Queue -->
        <div v-if="approvalSubTab === 'INSTITUTES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 class="text-sm font-black text-slate-900">Maritime Academy Accreditations Queue</h3>
            <span class="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {{ institutes.length }} Registered
            </span>
          </div>
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">ACADEMY</th>
                <th class="px-4 py-3">DG APPROVAL NO</th>
                <th class="px-4 py-3">STATUS</th>
                <th class="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="inst in institutes" :key="inst.id" class="hover:bg-slate-50/70">
                <td class="px-4 py-3 font-bold text-slate-900">{{ inst.name }}</td>
                <td class="px-4 py-3 font-mono font-bold text-blue-700">{{ inst.dgNo }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border" :class="statusPillClass(inst.verificationStatus)">
                    {{ inst.verificationStatus }}
                  </span>
                </td>
                <td class="px-4 py-3 text-right space-x-2">
                  <button @click="openInstituteAuditModal(inst)" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200">
                    Audit &rarr;
                  </button>
                  <button v-if="inst.verificationStatus !== 'VERIFIED'" @click="inst.verificationStatus = 'VERIFIED'" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white">
                    Approve
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Courses Queue -->
        <div v-if="approvalSubTab === 'COURSES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 class="text-sm font-black text-slate-900">STCW Course Syllabus &amp; Quotas</h3>
          </div>
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">COURSE TITLE</th>
                <th class="px-4 py-3">INSTITUTE</th>
                <th class="px-4 py-3">FEE</th>
                <th class="px-4 py-3">STATUS</th>
                <th class="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="c in courses" :key="c.id" class="hover:bg-slate-50/70">
                <td class="px-4 py-3 font-bold text-slate-900">{{ c.title }} ({{ c.code }})</td>
                <td class="px-4 py-3 text-slate-600">{{ c.institute }}</td>
                <td class="px-4 py-3 font-mono font-bold">₹{{ c.price.toLocaleString() }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border" :class="statusPillClass(c.approvalStatus)">
                    {{ c.approvalStatus }}
                  </span>
                </td>
                <td class="px-4 py-3 text-right space-x-2">
                  <button @click="openCourseModal(c)" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100">Syllabus</button>
                  <button v-if="c.approvalStatus !== 'APPROVED'" @click="c.approvalStatus = 'APPROVED'" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white">Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Certificates Queue -->
        <div v-if="approvalSubTab === 'CERTIFICATES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 class="text-sm font-black text-slate-900">Certificate Cryptographic Signing Desk</h3>
          </div>
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">CANDIDATE</th>
                <th class="px-4 py-3">COURSE</th>
                <th class="px-4 py-3">ATTENDANCE</th>
                <th class="px-4 py-3 text-right">SIGNING</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="cert in pendingCerts" :key="cert.id" class="hover:bg-slate-50/70">
                <td class="px-4 py-3 font-bold text-slate-900">{{ cert.candidate }} ({{ cert.indos }})</td>
                <td class="px-4 py-3">{{ cert.course }}</td>
                <td class="px-4 py-3 font-mono font-bold text-emerald-600">{{ cert.attendance }}%</td>
                <td class="px-4 py-3 text-right">
                  <button
                    v-if="cert.status === 'PENDING'"
                    @click="signCertificate(cert)"
                    class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] text-white font-bold text-xs"
                  >
                    ECDSA Sign &amp; Issue
                  </button>
                  <span v-else class="text-emerald-600 font-mono font-bold text-xs">✓ SIGNED</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB D: USER MANAGEMENT                                          -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'users'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="text-lg font-black text-slate-900">User Identity &amp; Access Registry</h3>
            <p class="text-xs text-slate-500">Manage cadets, active seafarers, institute registrars, and regulatory auditors</p>
          </div>
          <button
            @click="showAddUserModal = true"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white"
          >
            + Onboard Officer
          </button>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">NAME &amp; EMAIL</th>
                <th class="px-4 py-3">ROLE</th>
                <th class="px-4 py-3">INDOS / AFFILIATION</th>
                <th class="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="u in users" :key="u.id" class="hover:bg-slate-50/70">
                <td class="px-4 py-3">
                  <div class="font-bold text-slate-900">{{ u.name }}</div>
                  <div class="text-[10px] text-slate-500">{{ u.email }}</div>
                </td>
                <td class="px-4 py-3">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border" :class="roleBadgeClass(u.role)">
                    {{ u.role }}
                  </span>
                </td>
                <td class="px-4 py-3 font-mono font-bold text-blue-700">{{ u.indos || u.institute || '—' }}</td>
                <td class="px-4 py-3 text-right space-x-2">
                  <button
                    v-if="u.role === 'SEAFARER'"
                    @click="activeTab = 'dossier'"
                    class="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    View Dossier &rarr;
                  </button>
                  <button @click="resetUserAuth(u.name)" class="text-xs font-bold text-slate-500 hover:text-slate-800">
                    Reset 2FA
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB E: FINANCIAL OVERSIGHT                                      -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'finance'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-black text-slate-900">Dual-Invoicing Escrow Ledger &amp; Commissions</h3>
          <button @click="exportFinancialReport" class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">
            Export GST/TDS Report (CSV)
          </button>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">REF</th>
                <th class="px-4 py-3">CANDIDATE &amp; COURSE</th>
                <th class="px-4 py-3">TOTAL GMV</th>
                <th class="px-4 py-3">COMMISSION (10%)</th>
                <th class="px-4 py-3">PAYOUT (90%)</th>
                <th class="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="l in ledgerRecords" :key="l.ref" class="hover:bg-slate-50/70">
                <td class="px-4 py-3 font-mono font-bold text-blue-700">{{ l.ref }}</td>
                <td class="px-4 py-3">{{ l.student }} &bull; {{ l.course }}</td>
                <td class="px-4 py-3 font-mono font-bold">₹{{ l.amount.toLocaleString() }}</td>
                <td class="px-4 py-3 font-mono text-blue-700 font-bold">₹{{ l.commission }}</td>
                <td class="px-4 py-3 font-mono text-emerald-600 font-bold">₹{{ l.payout.toLocaleString() }}</td>
                <td class="px-4 py-3 text-right">
                  <button v-if="l.status === 'ESCROW_HELD'" @click="releaseEscrow(l)" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white">
                    Release Escrow
                  </button>
                  <span v-else class="text-emerald-600 font-mono text-xs font-bold">SETTLED</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB F: REVIEWS & MODERATION                                     -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'moderation'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <h3 class="text-lg font-black text-slate-900">Maritime Reviews &amp; Dispute Arbitration Console</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h4 class="font-black text-xs uppercase text-slate-900">Verified INDoS Cadet Reviews</h4>
            <div v-for="rev in studentReviews" :key="rev.id" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div class="flex justify-between font-bold">
                <span>{{ rev.course }}</span>
                <span class="text-amber-500">★ {{ rev.rating }}.0</span>
              </div>
              <p class="text-slate-600 italic mt-1">"{{ rev.comment }}"</p>
              <div class="text-[10px] text-slate-400 mt-1">By {{ rev.student }}</div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h4 class="font-black text-xs uppercase text-slate-900">Grievance &amp; Dispute Tickets</h4>
            <div v-for="tkt in complaintDesk" :key="tkt.id" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between items-center">
              <div>
                <div class="font-mono text-blue-700 font-bold">{{ tkt.id }} &bull; {{ tkt.priority }}</div>
                <div class="font-bold text-slate-800">{{ tkt.subject }}</div>
                <div class="text-[10px] text-slate-500">Filed by: {{ tkt.filer }}</div>
              </div>
              <button v-if="tkt.status !== 'RESOLVED'" @click="tkt.status = 'RESOLVED'" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white">
                Resolve
              </button>
              <span v-else class="text-emerald-600 font-bold text-xs">RESOLVED</span>
            </div>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB G: CMS & CONTENT                                            -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'cms'" class="p-4 sm:p-6 lg:p-8 space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-black text-slate-900">DG Shipping Statutory Circulars &amp; Notices</h3>
          <button @click="showCmsModal = true" class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">
            + Publish Circular
          </button>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
              <tr>
                <th class="px-4 py-3">TITLE</th>
                <th class="px-4 py-3">CATEGORY</th>
                <th class="px-4 py-3">AUDIENCE</th>
                <th class="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="post in cmsPosts" :key="post.id" class="hover:bg-slate-50/70">
                <td class="px-4 py-3 font-bold text-slate-900">{{ post.title }}</td>
                <td class="px-4 py-3 font-mono text-blue-700 font-bold">{{ post.category }}</td>
                <td class="px-4 py-3 text-slate-600">{{ post.targetAudience }}</td>
                <td class="px-4 py-3 text-right">
                  <button @click="deletePost(post.id)" class="text-rose-600 font-bold hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODALS                                                            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div v-if="showCmsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h4 class="font-black text-slate-900 text-base">Create Regulatory Notice</h4>
          <button @click="showCmsModal = false" class="p-1 text-slate-400 hover:text-slate-700">✕</button>
        </div>
        <div class="space-y-3 text-xs">
          <input v-model="newArticle.title" type="text" placeholder="Notice Title" class="w-full p-2.5 rounded-xl border bg-slate-50" />
          <textarea v-model="newArticle.content" rows="4" placeholder="Body Content" class="w-full p-2.5 rounded-xl border bg-slate-50"></textarea>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="showCmsModal = false" class="px-4 py-2 rounded-xl text-xs font-bold border">Cancel</button>
          <button @click="publishArticle" class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">Publish</button>
        </div>
      </div>
    </div>

    <div v-if="showAddUserModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-md w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h4 class="font-black text-slate-900 text-base">Onboard Regulatory Officer</h4>
          <button @click="showAddUserModal = false" class="p-1 text-slate-400 hover:text-slate-700">✕</button>
        </div>
        <div class="space-y-3 text-xs">
          <input v-model="newUser.name" type="text" placeholder="Full Name" class="w-full p-2.5 rounded-xl border bg-slate-50" />
          <input v-model="newUser.email" type="email" placeholder="Official Email" class="w-full p-2.5 rounded-xl border bg-slate-50" />
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="showAddUserModal = false" class="px-4 py-2 rounded-xl text-xs font-bold border">Cancel</button>
          <button @click="createUser" class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">Create</button>
        </div>
      </div>
    </div>

    <div v-if="auditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h4 class="font-black text-slate-900 text-base">CIP Audit Evaluation &bull; {{ selectedInstitute?.name }}</h4>
          <button @click="auditModalOpen = false" class="p-1 text-slate-400 hover:text-slate-700">✕</button>
        </div>
        <div class="space-y-3 text-xs">
          <div class="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 font-bold">
            Simulators &amp; Fire Field: DNV Class A Verified
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="auditModalOpen = false" class="px-4 py-2 rounded-xl text-xs font-bold border">Close</button>
          <button @click="confirmInstituteAudit" class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">Approve A1</button>
        </div>
      </div>
    </div>

    <div v-if="courseModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h4 class="font-black text-slate-900 text-base">Syllabus Audit &bull; {{ selectedCourse?.title }}</h4>
          <button @click="courseModalOpen = false" class="p-1 text-slate-400 hover:text-slate-700">✕</button>
        </div>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 font-bold">
            IMO Model Course 1.27 Compliant (40% Theory / 60% Practical)
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="courseModalOpen = false" class="px-4 py-2 rounded-xl text-xs font-bold border">Close</button>
          <button @click="confirmCourseApproval" class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white">Approve</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({ middleware: ['auth'] });
useHead({ title: 'Fleet Operations Hub · The Seafu Maritime Console' });

const authStore = useAuthStore();
onMounted(() => { authStore.initAuth(); });

// Active Navigation State (Defaults to 'dossier' as requested!)
const activeTab = ref('dossier');
const activeDossierSubTab = ref('CDC_LOG');
const globalSearch = ref('');
const showEndorseMenu = ref(false);
const showAddBatchModal = ref(false);

const dossierVesselFilter = ref('');
const dossierVesselType = ref('ALL');
const dossierRankFilter = ref('ALL');

const approvalSubTab = ref('INSTITUTES');
const showCmsModal = ref(false);
const showAddUserModal = ref(false);
const auditModalOpen = ref(false);
const courseModalOpen = ref(false);

const userSearch = ref('');
const userRoleFilter = ref('ALL');
const selectedInstitute = ref<any>(null);
const selectedCourse = ref<any>(null);
const auditGrade = ref('GRADE A1');

// SVG Icon Helpers
const IconChart = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
]);
const IconCheck = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
]);
const IconUsers = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' })
]);
const IconDossier = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z' })
]);
const IconFinance = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' })
]);
const IconShield = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
]);
const IconCms = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' })
]);

const coreNavItems = [
  { id: 'overview', label: 'Overview & Analytics', icon: IconChart, badge: null },
  { id: 'approvals', label: 'Approval Workflows', icon: IconCheck, badge: '5' },
];

const governanceNavItems = [
  { id: 'users', label: 'User Management', icon: IconUsers, badge: '18.4K' },
  { id: 'dossier', label: 'Seafarer Dossier', icon: IconDossier, badge: 'ACTIVE' },
  { id: 'finance', label: 'Financial Oversight', icon: IconFinance, badge: '10%' },
  { id: 'moderation', label: 'Reviews & Moderation', icon: IconShield, badge: '3' },
  { id: 'cms', label: 'CMS & Content', icon: IconCms, badge: null },
];

const dossierTabs = [
  { id: 'CDC_LOG', label: 'Sea Service & Discharge Book (CDC Log)' },
  { id: 'STCW', label: 'STCW Competencies & Certificates (18)' },
  { id: 'MEDICAL', label: 'Medical & PEME Fitness' },
  { id: 'SIMULATOR', label: 'Simulator Training Logs' },
];

// Interactive Actions for Dossier
function runGisisCheck() {
  alert('Querying IMO GISIS Global Integrated Shipping Information System... Authentication Hash Matched: GISIS-IND-2024-991A. Zero maritime detentions.');
}

function exportImoDossier() {
  alert('Exporting certified IMO STCW / MLC 2006 Seafarer Comprehensive Dossier (PDF/JSON)...');
}

function verifySeaLogPdf() {
  alert('Accessing DG Shipping Electronic Continuous Discharge Book e-CDB repository... Verified 3,840 Command Days with SHA-256 seal.');
}

function triggerBiometricSid() {
  alert('Biometric Seafarers Identity Document (ILO 185 SID) verified against National Seafarer Database. Fingerprint & Iris verified 99.8%.');
}

function endorseDeploymentDispatch() {
  alert('Dispatch endorsement signed for Capt. Rajesh Kumar aboard M/V Emma Maersk (15,500 TEU). Danish Maritime CRA notice transmitted.');
}

function downloadVoyagesCsv() {
  alert('Downloading certified voyages ledger logbook (CSV)...');
}

// Approvals & Analytics Data
const pendingTotal = ref(5);
const funnelStages = [
  { name: 'Course Directory Impressions', count: 48200, rate: 100 },
  { name: 'Course Detail Page Views', count: 29400, rate: 61.0 },
  { name: '10-Min Atomic Seat Locks', count: 8150, rate: 27.7 },
  { name: 'Payment Captured & Tax Invoiced', count: 6820, rate: 83.7 },
  { name: 'STCW Certificate Issued & Signed', count: 6540, rate: 95.9 },
];

const monthlyRevenue = [
  { month: 'Jun 2026', gmv: 4100000, commission: 410000, gst: 73800, tds: 4100 },
  { month: 'Jul 2026', gmv: 5200000, commission: 520000, gst: 93600, tds: 5200 },
  { month: 'Aug 2026', gmv: 5800000, commission: 580000, gst: 104400, tds: 5800 },
  { month: 'Sep 2026', gmv: 6300000, commission: 630000, gst: 113400, tds: 6300 },
];

const institutes = ref([
  { id: 'inst-01', name: 'Southern Maritime Institute of Technology', dgNo: 'DG/TR/TN/2024/042', verificationStatus: 'PENDING' },
  { id: 'inst-02', name: 'Goa Offshore & Safety Training Center', dgNo: 'DG/TR/GA/2024/019', verificationStatus: 'PENDING' },
  { id: 'inst-03', name: 'Maritime Training Academy Mumbai', dgNo: 'DG/TR/MH/2023/001', verificationStatus: 'VERIFIED' },
]);

const courses = ref([
  { id: 'crs-01', title: 'Advanced Fire Fighting (AFF)', code: 'STCW A-VI/3', institute: 'Southern Maritime Institute', price: 8500, approvalStatus: 'PENDING_APPROVAL' },
  { id: 'crs-02', title: 'High Voltage Safety & Switchgear', code: 'STCW A-III/1-2', institute: 'Goa Offshore Safety', price: 14500, approvalStatus: 'PENDING_APPROVAL' },
  { id: 'crs-03', title: 'ECDIS Electronic Navigation', code: 'STCW A-II/1', institute: 'Maritime Training Academy Mumbai', price: 11000, approvalStatus: 'APPROVED' },
]);

const pendingCerts = ref([
  { id: 'crt-01', candidate: 'Capt. Arvind Nair', indos: '08ZL9431', course: 'Advanced Fire Fighting', attendance: 100, status: 'PENDING' },
  { id: 'crt-02', candidate: 'Ramesh Kumar', indos: '149028', course: 'PSCRB Survival Craft', attendance: 96, status: 'PENDING' },
]);

const users = ref([
  { id: 'usr-1', name: 'Capt. Rajesh Kumar', email: 'rajesh.kumar@maersk.com', role: 'SEAFARER', indos: '04NL8821' },
  { id: 'usr-2', name: 'Capt. Arvind Nair', email: 'arvind.nair@seafu.in', role: 'SEAFARER', indos: '08ZL9431' },
  { id: 'usr-3', name: 'Capt. Rajesh Varma', email: 'registrar@mtamumbai.in', role: 'INSTITUTE_ADMIN', institute: 'Maritime Training Academy Mumbai' },
  { id: 'usr-4', name: 'Compliance Officer DGS', email: 'admin@dgs.gov.in', role: 'SUPER_ADMIN', institute: 'DG Shipping Govt of India' },
]);

const newUser = ref({ name: '', email: '' });
const ledgerRecords = ref([
  { ref: 'SF-2026-0922-771', student: 'Capt. Rajesh Kumar', course: 'Advanced Fire Fighting', amount: 8500, commission: 850, payout: 7650, status: 'ESCROW_HELD' },
  { ref: 'SF-2026-0918-402', student: 'Ramesh Kumar', course: 'PSCRB Survival Craft', amount: 9200, commission: 920, payout: 8280, status: 'SETTLED' },
]);

const studentReviews = ref([
  { id: 'rev-1', course: 'Advanced Fire Fighting', rating: 5, comment: 'Exceptional smoke chamber training and breathing apparatus drills.', student: 'Rajesh Varma' },
  { id: 'rev-2', course: 'ECDIS Navigation', rating: 4, comment: 'High quality Kongsberg simulator consoles with active Master Mariners.', student: 'Kiran Pillai' },
]);

const complaintDesk = ref([
  { id: 'TKT-991', subject: 'Refund dispute for cancelled batch AFF-2026-04', filer: 'Deepak Sharma', priority: 'HIGH', status: 'INVESTIGATING' },
  { id: 'TKT-988', subject: 'Seat lock expired during banking OTP transaction', filer: 'Mohd. Imran', priority: 'MEDIUM', status: 'RESOLVED' },
]);

const cmsPosts = ref([
  { id: 'cms-1', title: 'DG Shipping Advisory: Revised Minimum Safe Sea-Time Criteria for Second Mate FG Examinations 2026', category: 'CIRCULAR', targetAudience: 'ALL USERS' },
  { id: 'cms-2', title: 'Pre-Sea Cadet Batch 54 Intake (BS Nautical Science & Marine Engineering) Open', category: 'ADMISSION', targetAudience: 'SEAFARERS ONLY' },
]);
const newArticle = ref({ title: '', content: '' });

function publishArticle() {
  if (!newArticle.value.title) return;
  cmsPosts.value.unshift({ id: `cms-${Date.now()}`, title: newArticle.value.title, category: 'CIRCULAR', targetAudience: 'ALL USERS' });
  showCmsModal.value = false;
  newArticle.value.title = '';
  newArticle.value.content = '';
}
function deletePost(id: string) { cmsPosts.value = cmsPosts.value.filter(p => p.id !== id); }

function createUser() {
  if (!newUser.value.name || !newUser.value.email) return;
  users.value.unshift({ id: `usr-${Date.now()}`, name: newUser.value.name, email: newUser.value.email, role: 'SEAFARER', indos: 'Pending' });
  showAddUserModal.value = false;
  newUser.value.name = '';
  newUser.value.email = '';
}

function resetUserAuth(name: string) { alert(`2FA reset link dispatched to ${name}.`); }
function releaseEscrow(item: any) { item.status = 'SETTLED'; alert(`Escrow payout of ₹${item.payout} released.`); }
function exportFinancialReport() { alert('Exporting financial audit ledger (CSV)...'); }
function openInstituteAuditModal(inst: any) { selectedInstitute.value = inst; auditModalOpen.value = true; }
function confirmInstituteAudit() { if (selectedInstitute.value) selectedInstitute.value.verificationStatus = 'VERIFIED'; auditModalOpen.value = false; }
function openCourseModal(c: any) { selectedCourse.value = c; courseModalOpen.value = true; }
function confirmCourseApproval() { if (selectedCourse.value) selectedCourse.value.approvalStatus = 'APPROVED'; courseModalOpen.value = false; }
function signCertificate(cert: any) { cert.status = 'SIGNED'; alert(`Cryptographic seal issued for ${cert.candidate}.`); }

function statusPillClass(status: string) {
  if (status === 'VERIFIED' || status === 'APPROVED') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (status === 'PENDING' || status === 'PENDING_APPROVAL') return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-slate-100 text-slate-600 border-slate-200';
}
function roleBadgeClass(role: string) {
  if (role === 'SUPER_ADMIN') return 'bg-purple-50 text-purple-700 border-purple-200';
  if (role === 'INSTITUTE_ADMIN') return 'bg-blue-50 text-blue-700 border-blue-200';
  return 'bg-emerald-50 text-emerald-700 border-emerald-200';
}
</script>
