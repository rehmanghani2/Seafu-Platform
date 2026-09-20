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
      <header class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 h-16 px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2.5 sm:gap-4 shadow-2xs">
        
        <!-- Left Side: Mobile Menu Button & Context Badge -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <!-- Mobile Drawer Toggle -->
          <button
            @click="isMobileSidebarOpen = true"
            class="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
            aria-label="Open Operations Menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Maritime Context Pill -->
          <div class="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-100/90 border border-slate-200/80 text-[11px] font-mono font-bold text-slate-700">
            <svg class="w-3.5 h-3.5 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span class="text-slate-400">FLEET OPS /</span>
            <span class="text-blue-900 font-extrabold uppercase">{{ activeTabLabel }}</span>
          </div>
        </div>

        <!-- Center-Left: Universal Interactive Command Search -->
        <div class="flex-1 max-w-lg relative">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref="searchInputRef"
              v-model="globalSearch"
              type="text"
              placeholder="Search seafarers, IMO, institutes, courses..."
              @focus="isSearchFocused = true; closeAllDropdownsExcept('search')"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-16 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 transition shadow-2xs"
            />
            <!-- Clear Button -->
            <button
              v-if="globalSearch"
              @click.stop="globalSearch = ''; searchInputRef?.focus()"
              class="absolute inset-y-0 right-10 pr-1 flex items-center text-slate-400 hover:text-slate-700 transition"
              title="Clear search"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[10px] font-mono text-slate-400 font-semibold">
              ⌘K
            </span>
          </div>

          <!-- Interactive Search Results Dropdown -->
          <div
            v-if="isSearchFocused"
            class="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100"
          >
            <div class="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span class="font-bold text-slate-700">MARITIME DIRECTORY RESULTS</span>
              <span class="text-[10px]">Press <kbd class="px-1 py-0.5 bg-white border border-slate-200 rounded-sm font-bold">ESC</kbd> to close</span>
            </div>
            <div class="max-h-72 overflow-y-auto p-1.5 space-y-0.5">
              <div
                v-for="(item, idx) in searchResults"
                :key="idx"
                @click="item.action()"
                class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/70 cursor-pointer transition group"
              >
                <div class="flex items-center space-x-3 min-w-0">
                  <span class="px-2 py-0.5 text-[9px] font-mono font-black uppercase rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-800 shrink-0">
                    {{ item.category }}
                  </span>
                  <div class="truncate">
                    <div class="text-xs font-bold text-slate-800 group-hover:text-blue-900 truncate">
                      {{ item.title }}
                    </div>
                    <div class="text-[11px] text-slate-500 truncate">
                      {{ item.subtitle }}
                    </div>
                  </div>
                </div>
                <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div v-if="searchResults.length === 0" class="p-4 text-center text-xs text-slate-500">
                No matching maritime officers, vessels, or institutes found for "{{ globalSearch }}".
              </div>
            </div>
            <div class="p-2 bg-slate-50 text-[10px] text-slate-500 flex items-center justify-between">
              <span>Quick jump: <strong>dossier</strong>, <strong>approvals</strong>, <strong>vessels</strong></span>
              <span class="text-cyan-700 font-bold">DG Shipping Gateway Online</span>
            </div>
          </div>
        </div>

        <!-- Center: Interactive Statutory Status Pill & Zulu Clock -->
        <div class="hidden lg:flex items-center gap-2 relative">
          <!-- STCW / DG Shipping Status Pill with Telemetry Trigger -->
          <div class="relative">
            <button
              @click.stop="toggleStatusTelemetry"
              class="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700 transition shadow-2xs focus:outline-hidden"
              title="Click to view regulatory connection telemetry"
            >
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>STCW / DG SHIPPING COMPLIANT: ONLINE</span>
              <svg class="w-3.5 h-3.5 text-slate-400 transition-transform" :class="showStatusTelemetryDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Status Telemetry Dropdown Card -->
            <div
              v-if="showStatusTelemetryDropdown"
              class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-4 divide-y divide-slate-100"
            >
              <div class="pb-3 flex items-center justify-between">
                <div>
                  <div class="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Maritime Telemetry Hub</span>
                  </div>
                  <div class="text-[10px] text-slate-500 font-mono">DG Shipping & IMO Real-Time Feeds</div>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ALL SYSTEMS NOMINAL
                </span>
              </div>

              <div class="py-3 space-y-2.5 text-xs">
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    DG Shipping Gateway
                  </span>
                  <span class="font-mono font-bold text-slate-800">Connected (18ms)</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                    IMO GISIS Registry
                  </span>
                  <span class="font-mono font-bold text-slate-800">Synchronized</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    HSM Cryptographic Seal
                  </span>
                  <span class="font-mono font-bold text-emerald-700">Valid (SHA-256)</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Vessel Bridge Net
                  </span>
                  <span class="font-mono font-bold text-slate-800">42 Active Beacons</span>
                </div>
              </div>

              <div class="pt-3">
                <button
                  @click="triggerDiagnosticPing"
                  :disabled="isPingingGateway"
                  class="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <svg v-if="isPingingGateway" class="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <svg v-else class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{{ isPingingGateway ? 'Pinging Gateway...' : gatewayPingSuccess ? 'Latency: 14ms (Verified)' : 'Run Gateway Health Ping' }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Zulu Maritime Clock Pill -->
          <div
            class="hidden xl:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-[11px] font-mono font-bold text-slate-700"
            title="Standard Maritime Operational Zulu Time (UTC)"
          >
            <svg class="w-3.5 h-3.5 text-cyan-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <path stroke-width="2" d="M12 6v6l4 2" />
            </svg>
            <span>{{ currentZuluTime }} · ZULU</span>
          </div>
        </div>

        <!-- Right Side: New Batch Button, Notifications Bell & Admin Profile -->
        <div class="flex items-center space-x-2 sm:space-x-3 shrink-0">
          
          <!-- + New Approval Batch Button -->
          <button
            @click="showAddBatchModal = true"
            class="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold transition shadow-2xs hover:shadow-sm"
          >
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>New Approval Batch</span>
          </button>

          <!-- Notification Bell with Dropdown -->
          <div class="relative">
            <button
              @click.stop="toggleNotifications"
              class="relative p-2 sm:p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition shadow-2xs focus:outline-hidden"
              aria-label="Operations Alerts and Notifications"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span v-if="notifications.length > 0" class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-mono font-black flex items-center justify-center border-2 border-white">
                {{ notifications.length }}
              </span>
            </button>

            <!-- Notifications Flyout -->
            <div
              v-if="showNotificationsDropdown"
              class="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100"
            >
              <div class="p-3 bg-slate-50 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="text-xs font-black text-slate-900">OPERATIONAL ALERTS</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-100 text-rose-700">
                    {{ notifications.length }} Unread
                  </span>
                </div>
                <button
                  @click="notifications = []"
                  class="text-[10px] font-bold text-blue-700 hover:text-blue-900 transition"
                >
                  Mark all as read
                </button>
              </div>

              <div class="max-h-80 overflow-y-auto divide-y divide-slate-100">
                <div
                  v-for="item in notifications"
                  :key="item.id"
                  class="p-3.5 hover:bg-slate-50 transition flex items-start space-x-3"
                >
                  <div class="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    :class="item.type === 'warning' ? 'bg-amber-100 text-amber-800' : item.type === 'info' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'"
                  >
                    <svg v-if="item.type === 'warning'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <svg v-else-if="item.type === 'info'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-0.5">
                      <span class="text-xs font-black text-slate-800 truncate">{{ item.title }}</span>
                      <span class="text-[10px] font-mono text-slate-400 shrink-0">{{ item.time }}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 leading-snug mb-1.5">{{ item.description }}</p>
                    <button
                      @click="item.action()"
                      class="text-[11px] font-bold text-blue-700 hover:text-blue-900 inline-flex items-center space-x-1"
                    >
                      <span>{{ item.actionText }}</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div v-if="notifications.length === 0" class="p-6 text-center text-xs text-slate-400 font-medium">
                  Zero pending statutory warnings or unresolved alerts.
                </div>
              </div>

              <div class="p-2.5 bg-slate-50 flex items-center justify-between text-[11px]">
                <button @click="activeTab = 'moderation'; showNotificationsDropdown = false" class="text-slate-600 hover:text-slate-900 font-bold">
                  View Moderation Queue
                </button>
                <button @click="activeTab = 'approvals'; showNotificationsDropdown = false" class="text-blue-700 hover:text-blue-900 font-bold">
                  Compliance Queue &rarr;
                </button>
              </div>
            </div>
          </div>

          <!-- Admin Profile Dropdown -->
          <div class="relative">
            <button
              @click.stop="toggleProfile"
              class="flex items-center space-x-2.5 pl-2 sm:pl-3 border-l border-slate-200 group text-left focus:outline-hidden"
              aria-label="Administrator Menu"
            >
              <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition">
                AF
              </div>
              <div class="hidden xl:block text-left text-xs">
                <div class="font-black text-slate-900 leading-tight group-hover:text-blue-900 flex items-center gap-1">
                  <span>Capt. Alistair Finch</span>
                  <svg class="w-3 h-3 text-slate-400 transition-transform" :class="showProfileDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div class="text-[10px] text-slate-500 font-medium">Chief Administrator</div>
              </div>
            </button>

            <!-- Admin Profile Flyout -->
            <div
              v-if="showProfileDropdown"
              class="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100"
            >
              <div class="p-4 bg-gradient-to-br from-slate-900 to-[#071022] text-white">
                <div class="flex items-center space-x-3 mb-2">
                  <div class="w-10 h-10 rounded-full bg-blue-600/30 border border-amber-400/60 flex items-center justify-center font-bold text-sm text-cyan-300">
                    AF
                  </div>
                  <div>
                    <div class="font-black text-xs text-white">Capt. Alistair Finch</div>
                    <div class="text-[11px] text-slate-300 font-mono">admin@seafu.gov</div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[10px] font-mono">
                  <span class="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                    SUPER_ADMIN · LEVEL 4
                  </span>
                  <span class="text-cyan-400 font-bold">IMO GISIS LIAISON</span>
                </div>
              </div>

              <!-- Portal Switcher Links -->
              <div class="p-2 space-y-1 text-xs font-semibold text-slate-700">
                <button
                  @click="activeTab = 'overview'; showProfileDropdown = false"
                  class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 text-left transition"
                >
                  <svg class="w-4 h-4 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Fleet Operations Hub</span>
                </button>

                <button
                  @click="activeTab = 'dossier'; showProfileDropdown = false"
                  class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 text-left transition"
                >
                  <svg class="w-4 h-4 text-cyan-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" />
                  </svg>
                  <span>Master Mariner Dossier</span>
                </button>

                <NuxtLink
                  to="/institute/dashboard"
                  class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 text-left transition"
                >
                  <svg class="w-4 h-4 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Switch to Institute Portal</span>
                </NuxtLink>

                <NuxtLink
                  to="/dashboard"
                  class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 text-left transition"
                >
                  <svg class="w-4 h-4 text-emerald-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Switch to Seafarer Portal</span>
                </NuxtLink>
              </div>

              <!-- Sign Out Action -->
              <div class="p-2">
                <button
                  @click="handleLogout"
                  class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-left text-xs font-bold transition"
                >
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign Out of Maritime Console</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </header>

      <!-- Click-outside Backdrop for Dropdowns -->
      <div
        v-if="showNotificationsDropdown || showProfileDropdown || showStatusTelemetryDropdown || isSearchFocused"
        @click="closeAllDropdowns"
        class="fixed inset-0 z-25 bg-transparent"
      ></div>

      <!-- Mobile Slide-Over Operations Sidebar Drawer -->
      <div
        v-if="isMobileSidebarOpen"
        class="fixed inset-0 z-50 flex md:hidden"
      >
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          @click="isMobileSidebarOpen = false"
        ></div>

        <!-- Slide Drawer -->
        <div class="relative w-72 max-w-[80vw] bg-[#071022] text-slate-300 flex flex-col justify-between h-full p-4 z-10 shadow-2xl border-r border-slate-800">
          <div>
            <!-- Brand and Close -->
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <NuxtLink to="/" class="flex items-center space-x-2.5" @click="isMobileSidebarOpen = false">
                <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-black text-white">The Seafu</div>
                  <div class="text-[8px] font-mono tracking-widest text-cyan-400 font-bold uppercase">FLEET OPERATIONS</div>
                </div>
              </NuxtLink>
              <button
                @click="isMobileSidebarOpen = false"
                class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Nav Groups -->
            <nav class="space-y-4">
              <div>
                <div class="text-[9px] font-mono tracking-wider text-slate-500 uppercase px-2 mb-1.5 font-bold">
                  CORE OPERATIONS
                </div>
                <div class="space-y-1">
                  <button
                    v-for="item in coreNavItems"
                    :key="item.id"
                    @click="activeTab = item.id; isMobileSidebarOpen = false"
                    class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition"
                    :class="activeTab === item.id
                      ? 'bg-[#0c2240] text-white border-l-3 border-cyan-400 font-bold'
                      : 'text-slate-400 hover:bg-slate-850 hover:text-slate-200'"
                  >
                    <div class="flex items-center space-x-2.5">
                      <component :is="item.icon" class="w-4 h-4 shrink-0" />
                      <span>{{ item.label }}</span>
                    </div>
                    <span v-if="item.badge" class="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-slate-800 text-slate-400">
                      {{ item.badge }}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <div class="text-[9px] font-mono tracking-wider text-slate-500 uppercase px-2 mb-1.5 font-bold">
                  PERSONNEL &amp; GOVERNANCE
                </div>
                <div class="space-y-1">
                  <button
                    v-for="item in governanceNavItems"
                    :key="item.id"
                    @click="activeTab = item.id; isMobileSidebarOpen = false"
                    class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition"
                    :class="activeTab === item.id
                      ? 'bg-[#0c2240] text-white border-l-3 border-cyan-400 font-bold'
                      : 'text-slate-400 hover:bg-slate-850 hover:text-slate-200'"
                  >
                    <div class="flex items-center space-x-2.5">
                      <component :is="item.icon" class="w-4 h-4 shrink-0" />
                      <span>{{ item.label }}</span>
                    </div>
                    <span v-if="item.badge" class="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-slate-800 text-slate-400">
                      {{ item.badge }}
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <!-- Bottom Footer -->
          <div class="pt-4 border-t border-slate-800">
            <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-[10px] font-mono">
              <span class="text-slate-300 font-bold">VESSEL BRIDGE NET</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
<!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB A: SEAFARER DOSSIER VIEW (MATCHES REFERENCE SCREENSHOT)     -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-if="activeTab === 'dossier'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <!-- Sub-Header / Breadcrumb & Status Bar -->
        <section aria-labelledby="dossier-heading" class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
              <span>User Management</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Seafarers &amp; Cadets</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-900">Capt. Rajesh Kumar (SF-99412)</span>
            </nav>
            <div class="flex items-center gap-2 flex-wrap text-xs">
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1.5 shadow-2xs">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
                <span>ACTIVE SEA SERVICE</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 text-slate-800 border border-slate-300 font-mono shadow-2xs">
                DG SHIPPING VERIFIED
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-blue-50 text-blue-800 border border-blue-300 font-mono shadow-2xs">
                STCW 2010 / MANILA COMPLIANT
              </span>
              <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-purple-50 text-purple-800 border border-purple-300 font-mono shadow-2xs">
                MLC 2006 TIER 1 VALIDATED
              </span>
            </div>
          </div>

          <!-- Right Action Suite -->
          <div class="flex items-center space-x-2.5 shrink-0 flex-wrap">
            <button
              @click="runGisisCheck"
              type="button"
              class="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs inline-flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-hidden"
            >
              <svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Flag State GISIS Check</span>
            </button>

            <button
              @click="exportImoDossier"
              type="button"
              class="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs inline-flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-hidden"
            >
              <svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export IMO Dossier</span>
            </button>

            <div class="relative">
              <button
                @click="showEndorseMenu = !showEndorseMenu"
                type="button"
                aria-haspopup="true"
                :aria-expanded="showEndorseMenu"
                class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-2xs inline-flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden"
              >
                <span>Manage Endorsements</span>
                <svg class="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="showEndorseMenu"
                class="absolute right-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200 z-30 py-1.5 text-xs text-slate-700 divide-y divide-slate-100"
              >
                <div class="p-2 text-[10px] font-mono text-slate-500 uppercase font-bold">Endorsement Actions</div>
                <button @click="showEndorseMenu = false; alert('Renewing Flag State GMDSS endorsement...')" class="w-full text-left px-3 py-2 hover:bg-slate-50">Renew GMDSS Endorsement</button>
                <button @click="showEndorseMenu = false; alert('Initiating Medical PEME Fitness review...')" class="w-full text-left px-3 py-2 hover:bg-slate-50">PEME Fitness Examination</button>
                <button @click="showEndorseMenu = false; alert('Transmitting ILO 185 biometric identity validation...')" class="w-full text-left px-3 py-2 hover:bg-slate-50 text-blue-700 font-bold">Transmit Biometric SID</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Officer Identity & Credentials Card -->
        <section aria-label="Officer Profile and Credentials" class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <!-- Left: Portrait, Epaulettes, Officer Details -->
            <div class="flex items-start sm:items-center space-x-4 min-w-0">
              <div class="relative shrink-0">
                <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-[#0A1936] border-2 border-slate-300 p-1 flex items-center justify-center text-white shadow-md">
                  <svg class="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <!-- Master 4-Bar Gold Epaulette Badge -->
                <div class="absolute -bottom-2 -right-1 bg-amber-400 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded-md border border-amber-500 shadow-xs flex items-center gap-0.5 font-mono" title="Master Mariner 4-Bar Command Epaulette">
                  <span>⚓ 4-BAR</span>
                </div>
              </div>

              <div class="min-w-0 space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <h1 id="dossier-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Capt. Rajesh Kumar</h1>
                  <span class="px-2 py-0.5 rounded text-[11px] font-mono font-black bg-[#0A1936] text-cyan-300 border border-slate-700">
                    SF-99412
                  </span>
                </div>
                <div class="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-2 flex-wrap">
                  <span>Master Mariner (FG Unlimited)</span>
                  <span aria-hidden="true" class="text-slate-300">&bull;</span>
                  <span class="text-blue-700 font-mono">CoC IND-COC-88914</span>
                </div>

                <!-- Credential Badges Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
                  <div class="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="text-[9px] text-slate-500 uppercase block font-bold">INDoS No</span>
                    <strong class="text-slate-800">04NL8821</strong>
                  </div>
                  <div class="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="text-[9px] text-slate-500 uppercase block font-bold">CDC (Seaman Book)</span>
                    <strong class="text-slate-800">C-9842109</strong>
                  </div>
                  <div class="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="text-[9px] text-slate-500 uppercase block font-bold">Biometric SID</span>
                    <strong class="text-blue-700 font-bold">IN-SID-2022-79140</strong>
                  </div>
                  <div class="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="text-[9px] text-slate-500 uppercase block font-bold">PEME Medical Fit</span>
                    <strong class="text-emerald-700 font-bold">Valid thru Sep 2026</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 3 KPI Telemetry Badges -->
            <div class="grid grid-cols-3 gap-3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6 shrink-0">
              <div class="text-center px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase block">Total Sea Time</span>
                <div class="text-lg sm:text-xl font-black font-mono text-slate-900 mt-0.5">3,840</div>
                <span class="text-[10px] text-slate-600 font-bold">Days / 10.5 Yrs</span>
              </div>
              <div class="text-center px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase block">STCW Badges</span>
                <div class="text-lg sm:text-xl font-black font-mono text-blue-700 mt-0.5">18/18</div>
                <span class="text-[10px] text-emerald-700 font-bold">Zero Deficiencies</span>
              </div>
              <div class="text-center px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase block">Compliance</span>
                <div class="text-lg sm:text-xl font-black font-mono text-emerald-700 mt-0.5">99.8%</div>
                <span class="text-[10px] text-slate-600 font-bold">0 Detentions</span>
              </div>
            </div>

          </div>
        </section>

        <!-- Dossier Sub-Navigation Tabs -->
        <div role="tablist" aria-label="Dossier Sections" class="border-b border-slate-200 flex items-center space-x-6 text-xs font-bold overflow-x-auto">
          <button
            v-for="sub in dossierTabs"
            :key="sub.id"
            role="tab"
            :aria-selected="activeDossierSubTab === sub.id"
            @click="activeDossierSubTab = sub.id"
            class="pb-3 pt-1 border-b-2 transition whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-hidden"
            :class="activeDossierSubTab === sub.id
              ? 'border-blue-700 text-blue-700 font-black'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'"
          >
            {{ sub.label }}
          </button>
        </div>

        <!-- 2-COLUMN DOSSIER MAIN CONTENT -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- LEFT / CENTER COLUMN (2 COLS) -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Filters Row -->
            <div class="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-2 flex-wrap flex-1">
                <input
                  v-model="dossierVesselFilter"
                  type="text"
                  placeholder="Filter vessel"
                  aria-label="Filter voyages by vessel name"
                  class="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 w-36 sm:w-44"
                />
                <select
                  v-model="dossierVesselType"
                  aria-label="Filter voyages by vessel type"
                  class="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:border-blue-600 font-medium"
                >
                  <option value="ALL">All Vessel Types (Container, Tanker, Bulk)</option>
                  <option value="CONTAINER">Container</option>
                  <option value="TANKER">Tanker (VLCC)</option>
                  <option value="BULK">Bulk Carrier</option>
                </select>
                <select
                  v-model="dossierRankFilter"
                  aria-label="Filter voyages by officer rank"
                  class="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:border-blue-600 font-medium"
                >
                  <option value="ALL">Rank: All (Master, C/O, 2/O)</option>
                  <option value="MASTER">Master</option>
                  <option value="CHIEF_OFFICER">Chief Officer</option>
                </select>
              </div>

              <div class="flex items-center space-x-3 text-[11px] font-mono text-slate-600">
                <span>SHOWING: <strong class="text-slate-900">4 VERIFIED VOYAGES</strong></span>
                <button
                  @click="downloadVoyagesCsv"
                  type="button"
                  class="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-hidden"
                  title="Download voyages CSV log"
                  aria-label="Download voyages CSV log"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Verified Continuous Discharge Ledger (CDB/CDC Log) -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div class="p-4 border-b border-slate-100 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h2 class="text-sm font-black text-slate-900 tracking-tight">Verified Continuous Discharge Ledger (CDB/CDC Log)</h2>
                </div>
                <span class="text-[10px] font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-300">
                  FLAG STATE SYNCHRONIZED
                </span>
              </div>

              <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Continuous Discharge Ledger Table">
                <table class="w-full text-left text-xs">
                  <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th scope="col" class="px-4 py-3">VESSEL &amp; SPEC</th>
                      <th scope="col" class="px-4 py-3">CAPACITY / RANK</th>
                      <th scope="col" class="px-4 py-3">VOYAGE WINDOW</th>
                      <th scope="col" class="px-4 py-3 text-center">SEA DAYS</th>
                      <th scope="col" class="px-4 py-3 text-right">AUTHENTICATION &amp; STAMP</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-700">
                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Maersk Mc-Kinney Moller</div>
                        <div class="text-[10px] text-slate-500 font-mono">IMO 9619987 &bull; 18,278 TEU (165,000 DWT)</div>
                        <div class="text-[10px] text-slate-600">MAN B&amp;W 8S95ME-C9.2 (59,360 kW)</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A1936] text-white font-mono">MASTER / CAPTAIN</span>
                        <div class="text-[10px] text-slate-600 mt-1">Command Navigation</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-900">12 Jan 2024 &ndash; 18 Aug 2024</div>
                        <div class="text-[10px] text-slate-600">Rotterdam (NLD) &rarr; Singapore (SGP)</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">219</div>
                        <div class="text-[10px] text-slate-500">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-900 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-300">
                          <svg class="w-3 h-3 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Maersk Fleet Ops API</span>
                        </span>
                        <div class="text-[10px] text-slate-500 mt-0.5">Supt. Capt. J. Westergaard</div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Mumbai Maersk</div>
                        <div class="text-[10px] text-slate-500 font-mono">IMO 9780471 &bull; 20,568 TEU (214,286 DWT)</div>
                        <div class="text-[10px] text-slate-600">MAN B&amp;W G95ME (Triple-E 2nd Gen)</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A1936] text-white font-mono">MASTER / CAPTAIN</span>
                        <div class="text-[10px] text-slate-600 mt-1">Command Navigation</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-900">05 Mar 2023 &ndash; 28 Oct 2023</div>
                        <div class="text-[10px] text-slate-600">Tanjung Pelepas &rarr; Bremerhaven</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">237</div>
                        <div class="text-[10px] text-slate-500">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-300">
                          <svg class="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>DG Flag Surveyor Endorsed</span>
                        </span>
                        <div class="text-[10px] text-slate-500 mt-0.5">Mumbai MMD Verified Log #811</div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">Safmarine Chilka</div>
                        <div class="text-[10px] text-slate-500 font-mono">IMO 9355355 &bull; 4,568 TEU Post-Panamax</div>
                        <div class="text-[10px] text-slate-600">Sulzer 8RTA84C</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-white font-mono">CHIEF OFFICER</span>
                        <div class="text-[10px] text-slate-600 mt-1">Cargo &amp; Nav Watch (4-8)</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-900">10 Feb 2022 &ndash; 15 Sep 2022</div>
                        <div class="text-[10px] text-slate-600">Durban &rarr; Jebel Ali &rarr; Nhava Sheva</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">217</div>
                        <div class="text-[10px] text-slate-500">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                          <svg class="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Discharge Book Stamped</span>
                        </span>
                        <div class="text-[10px] text-slate-500 mt-0.5">Shipping Master Kolkata</div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/70 transition">
                      <td class="px-4 py-3.5">
                        <div class="font-black text-slate-900">APL Raffles</div>
                        <div class="text-[10px] text-slate-500 font-mono">IMO 9632064 &bull; 14,000 TEU Container</div>
                        <div class="text-[10px] text-slate-600">MAN B&amp;W 11S90ME-C9.2</div>
                      </td>
                      <td class="px-4 py-3.5">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-white font-mono">CHIEF OFFICER</span>
                        <div class="text-[10px] text-slate-600 mt-1">Cargo &amp; Nav Watch</div>
                      </td>
                      <td class="px-4 py-3.5 font-mono text-[11px]">
                        <div class="font-bold text-slate-900">14 Aug 2020 &ndash; 22 Feb 2021</div>
                        <div class="text-[10px] text-slate-600">Shanghai &rarr; Los Angeles</div>
                      </td>
                      <td class="px-4 py-3.5 text-center">
                        <div class="text-base font-black font-mono text-slate-900">192</div>
                        <div class="text-[10px] text-slate-500">Days</div>
                      </td>
                      <td class="px-4 py-3.5 text-right">
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                          <svg class="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Discharge Book Stamped</span>
                        </span>
                        <div class="text-[10px] text-slate-500 mt-0.5">CMA CGM / APL Fleet Personnel</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination Footer -->
              <div class="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
                <span>Continuous Discharge Record Page: <strong class="text-slate-900">14 of 28</strong></span>
                <button type="button" @click="downloadVoyagesCsv" class="text-blue-700 font-bold hover:underline focus-visible:ring-2 focus-visible:ring-blue-600">
                  View Full Archive Logbook (10.5 Years) &rarr;
                </button>
              </div>
            </div>

            <!-- Bridge Watchkeeping & Voyage Domain Breakdown -->
            <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-4">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z" />
                </svg>
                <div>
                  <h3 class="text-sm font-black text-slate-900 tracking-tight">Bridge Watchkeeping &amp; Voyage Domain Breakdown</h3>
                  <p class="text-[11px] text-slate-600">Distribution of command experience across critical maritime navigational environments</p>
                </div>
              </div>

              <!-- 4 Domain Telemetry Cards -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-600 uppercase font-bold">OPEN OCEAN</span>
                    <span class="text-base font-black font-mono text-blue-800">62%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-900 mt-1">2,380 Days</div>
                  <div class="text-[10px] text-slate-500">Transpacific / Atlantic</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-600 uppercase font-bold">CONGESTED TSS</span>
                    <span class="text-base font-black font-mono text-cyan-800">24%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-900 mt-1">921 Days</div>
                  <div class="text-[10px] text-slate-500">Malacca, Dover, Singapore</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-600 uppercase font-bold">TYPHOON/HEAVY SEA</span>
                    <span class="text-base font-black font-mono text-amber-800">10%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-900 mt-1">384 Days</div>
                  <div class="text-[10px] text-slate-500">North Pacific Winter &amp; SW</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex justify-between items-baseline">
                    <span class="text-[9px] font-mono text-slate-600 uppercase font-bold">POLAR / ICE RIM</span>
                    <span class="text-base font-black font-mono text-indigo-800">4%</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-900 mt-1">155 Days</div>
                  <div class="text-[10px] text-slate-500">Sub-Arctic Baltic winter</div>
                </div>
              </div>

              <!-- Flag State Continuous Sea Time Certification Banner -->
              <div class="bg-[#0A1936] text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0 text-cyan-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  type="button"
                  class="px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-lg transition shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-200"
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
                  <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider">Cryptographic Verification</h3>
                </div>
                <span class="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  LIVE SHA-256
                </span>
              </div>

              <!-- Visual QR Hash Block -->
              <div class="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="w-14 h-14 bg-white border border-slate-300 rounded-lg p-1.5 shrink-0 flex items-center justify-center">
                  <svg class="w-full h-full text-slate-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2 2h2v4h-2v-4zm4 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <span class="text-[9px] font-mono text-slate-500 uppercase block font-bold">IMO GISIS LEDGER HASH</span>
                  <div class="text-[11px] font-mono font-bold text-blue-700 truncate">
                    9e4a8b2c...311b8f04
                  </div>
                  <div class="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Matched with India DG Shipping Core</span>
                  </div>
                </div>
              </div>

              <!-- Interactive Buttons -->
              <div class="space-y-2 pt-1 text-xs">
                <button
                  @click="triggerBiometricSid"
                  type="button"
                  class="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition flex items-center justify-between focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" />
                    </svg>
                    <span>Audit Biometric SID Record</span>
                  </span>
                  <span class="text-[10px] font-mono text-slate-500 font-bold">ILO 185</span>
                </button>
              </div>
            </div>

            <!-- Card 2: Next Scheduled Assignment -->
            <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3.5">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider">Next Scheduled Assignment</h3>
                </div>
                <span class="text-[9px] font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-300">
                  CONFIRMED
                </span>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-black text-slate-900 text-sm">Emma Maersk</h4>
                    <span class="text-[10px] font-mono text-slate-500 font-bold">IMO 9321483 &bull; 15,500 TEU</span>
                  </div>
                  <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#0A1936] text-cyan-300">
                    MASTER
                  </span>
                </div>

                <div class="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-200/60 font-mono">
                  <div>
                    <span class="text-[9px] text-slate-500 uppercase font-bold block">Embarkation Port</span>
                    <strong class="text-slate-800">Felixstowe (GBR)</strong>
                  </div>
                  <div>
                    <span class="text-[9px] text-slate-500 uppercase font-bold block">Sign-On Window</span>
                    <strong class="text-slate-800">15 Oct 2026</strong>
                  </div>
                </div>
              </div>

              <button
                @click="endorseDeploymentDispatch"
                type="button"
                class="w-full py-2.5 px-4 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold transition shadow-xs flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
      <main v-else-if="activeTab === 'overview'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <!-- Live AIS / Telemetry Status Strip -->
        <div class="px-3.5 py-2 rounded-xl bg-[#071022] text-slate-300 font-mono text-[11px] flex flex-wrap items-center justify-between gap-3 border border-slate-800 shadow-xs">
          <div class="flex items-center gap-2">
            <span class="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">BRIDGE TELEMETRY / FLEET LEVEL ALPHA</span>
            <span class="text-slate-600">&bull;</span>
            <span class="text-slate-400 text-[10px]">SYS_ID: <strong class="text-cyan-300 font-bold">MAR-8821</strong></span>
          </div>
          <div class="flex items-center gap-3 text-[10px]">
            <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Synced: 2 mins ago
            </span>
            <span class="text-slate-600">&bull;</span>
            <span class="text-slate-300">AIS &amp; DG Data Feeds Active (<strong class="text-white">1,842 nodes</strong>)</span>
          </div>
        </div>

        <!-- Breadcrumb & Header -->
        <section aria-labelledby="overview-heading" class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-500 mb-1 font-medium font-mono">
              <span>FLEET OPERATIONS</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>SYSTEM ANALYTICS</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-800">PERFORMANCE &amp; CLEARINGHOUSE</span>
            </nav>
            <h1 id="overview-heading" class="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-tight">
              Maritime Ecosystem Analytics &amp; Operations Overview
            </h1>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <div class="flex items-center rounded-xl border border-slate-200 bg-white p-1 text-xs font-mono font-bold shadow-2xs">
              <button class="px-2.5 py-1 rounded-lg bg-[#0c2240] text-white">Last 30 Days</button>
              <button class="px-2.5 py-1 rounded-lg text-slate-600 hover:text-slate-900 transition">Q1 2026</button>
            </div>
            <button
              @click="exportFinancialReport"
              class="px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span>Export Compliance Report</span>
            </button>
          </div>
        </section>

        <!-- 4 High-Density KPI Cards with Tabular Figures -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <!-- Card 1: Active Seafarers -->
          <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400/60 transition">
            <div class="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              <span>ACTIVE SEAFARERS &amp; CADETS</span>
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div class="mt-3">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-display font-mono tabular-nums text-slate-900 tracking-tight">42,850</span>
                <span class="px-1.5 py-0.2 rounded-md bg-cyan-50 text-cyan-800 text-[10px] font-mono font-bold border border-cyan-200">+12.4% MoM</span>
              </div>
              <div class="text-[11px] text-slate-500 mt-1">2,410 currently undergoing at-sea watchkeeping</div>
            </div>
          </div>

          <!-- Card 2: Accredited Institutes -->
          <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400/60 transition">
            <div class="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              <span>ACCREDITED INSTITUTES</span>
              <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div class="mt-3">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-display font-mono tabular-nums text-slate-900 tracking-tight">318</span>
                <span class="px-1.5 py-0.2 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">26 Countries</span>
              </div>
              <div class="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>GLOBAL DG SYNC: <strong class="text-slate-800 font-mono">99.8% Certified</strong></span>
              </div>
            </div>
          </div>

          <!-- Card 3: STCW Bookings -->
          <div class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400/60 transition">
            <div class="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              <span>STCW COURSE BOOKINGS</span>
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="mt-3">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-display font-mono tabular-nums text-slate-900 tracking-tight">18,420</span>
                <span class="px-1.5 py-0.2 rounded-md bg-blue-50 text-blue-800 text-[10px] font-mono font-bold border border-blue-200">$4.85M GMV</span>
              </div>
              <div class="text-[11px] text-slate-500 mt-1">Dual-invoice escrow clearing in <strong class="font-mono text-slate-800">1.4 days</strong></div>
            </div>
          </div>

          <!-- Card 4: Net Platform Commission -->
          <div class="bg-gradient-to-br from-[#071022] to-[#0c2240] border border-cyan-500/30 rounded-2xl p-5 shadow-xs flex flex-col justify-between text-white">
            <div class="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <span>NET PLATFORM COMMISSION</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div class="mt-3">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-display font-mono tabular-nums text-white tracking-tight">$412,250</span>
                <span class="px-1.5 py-0.2 rounded-md bg-emerald-950 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-700/60">+18.2% YoY</span>
              </div>
              <div class="text-[11px] text-slate-300 mt-1">Avg take-rate: <strong class="font-mono text-cyan-300">8.5%</strong> across batches</div>
            </div>
          </div>

        </div>

        <!-- Cadet Conversion Funnel & Commission Clearinghouse -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <!-- Funnel: Discovery to Certification -->
          <div class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-sm font-black font-display text-slate-900 uppercase tracking-wider">Conversion Funnel: Discovery to Certification</h2>
                <p class="text-[11px] text-slate-500 font-mono mt-0.5">Cadet throughput analysis across verified training checkpoints</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 uppercase">Quarter-To-Date</span>
            </div>

            <div class="space-y-3 font-mono text-xs">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div class="flex justify-between items-center text-[11px] mb-1.5">
                  <span class="font-bold text-slate-800">01. Course Search &amp; Discovery</span>
                  <span class="font-bold text-blue-900 tabular-nums">142,000 <span class="text-slate-400 font-normal">(100% Baseline)</span></span>
                </div>
                <div class="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div class="h-full bg-slate-800 rounded-full w-full"></div>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div class="flex justify-between items-center text-[11px] mb-1.5">
                  <span class="font-bold text-slate-800">02. Institute Profile &amp; Syllabus View</span>
                  <span class="font-bold text-blue-900 tabular-nums">88,400 <span class="text-slate-400 font-normal">(62.2% Retained)</span></span>
                </div>
                <div class="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div class="h-full bg-blue-700 rounded-full w-[62.2%]"></div>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div class="flex justify-between items-center text-[11px] mb-1.5">
                  <span class="font-bold text-slate-800">03. Seat Reserved &amp; Dual-Invoice Paid</span>
                  <span class="font-bold text-blue-900 tabular-nums">21,500 <span class="text-slate-400 font-normal">(24.3% Conversion)</span></span>
                </div>
                <div class="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div class="h-full bg-cyan-600 rounded-full w-[24.3%]"></div>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div class="flex justify-between items-center text-[11px] mb-1.5">
                  <span class="font-bold text-slate-800">04. STCW Cryptographic Issuance</span>
                  <span class="font-bold text-emerald-700 tabular-nums">18,420 <span class="text-slate-400 font-normal">(85.7% Completion)</span></span>
                </div>
                <div class="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div class="h-full bg-emerald-600 rounded-full w-[85.7%]"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Revenue & Escrow Clearinghouse Ledger -->
          <div class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-sm font-black font-display text-slate-900 uppercase tracking-wider">Revenue &amp; Commission Trends</h2>
                <p class="text-[11px] text-slate-500 font-mono mt-0.5">Gross maritime volume vs net institutional clearing commissions</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 uppercase">6-Month Trajectory</span>
            </div>

            <div class="space-y-3 text-xs">
              <div v-for="m in monthlyRevenue" :key="m.month" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex justify-between items-center font-mono">
                <div>
                  <div class="font-black text-slate-900 font-display">{{ m.month }}</div>
                  <div class="text-[11px] text-slate-500 tabular-nums">Gross GMV: ₹{{ (m.gmv / 100000).toFixed(1) }}L</div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-blue-900 tabular-nums">₹{{ (m.commission / 1000).toFixed(0) }}K Platform Fee</div>
                  <div class="text-[10px] text-emerald-700 font-bold tabular-nums">GST: ₹{{ m.gst }} &bull; TDS: ₹{{ m.tds }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ── INCIDENT & BLACKBOX TELEMETRY TRIAGE CARD ── -->
        <div class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div class="flex items-center space-x-3">
              <span class="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              <div>
                <h2 class="text-sm font-bold font-display text-slate-900">
                  Incident &amp; Blackbox Telemetry Triage &bull; Ref: INC-2026-ARPA-881
                </h2>
                <p class="text-xs text-slate-500 font-mono">
                  Anglo-Eastern Maritime Academy &bull; Wärtsilä 360° FMBS Bay 01 &bull; 18-Min Grid Surge
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200">
                CRITICAL DISPUTE
              </span>
              <button
                @click="showForensicPdfModal = true"
                type="button"
                class="px-3 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold font-mono transition shadow-2xs flex items-center space-x-1.5"
              >
                <svg class="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Export Forensic PDF/A</span>
              </button>
            </div>
          </div>

          <!-- Voltage Drop Telemetry Graph & Impact Assessment -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 font-mono text-xs">
            <div class="lg:col-span-2 p-4 rounded-xl bg-slate-900 text-white space-y-2 border border-slate-800">
              <div class="flex justify-between items-center text-[11px]">
                <span class="text-slate-400">BLACKBOX SENSOR: FMBS-A 440V MAIN BUS</span>
                <span class="text-rose-400 font-bold tabular-nums">DROPPED TO 0V AT 14:22:10 UTC (18m Duration)</span>
              </div>
              <!-- Telemetry Curve SVG -->
              <div class="h-20 bg-slate-950 rounded-lg p-2 relative flex items-end overflow-hidden">
                <svg class="w-full h-full overflow-visible" viewBox="0 0 300 50" preserveAspectRatio="none">
                  <path
                    d="M 0,10 L 80,10 L 85,45 L 145,45 L 150,10 L 300,10"
                    fill="none"
                    stroke="#f43f5e"
                    stroke-width="2"
                  />
                </svg>
                <span class="absolute top-1 left-2 text-[9px] text-emerald-400">440V Normal</span>
                <span class="absolute bottom-1 left-[32%] text-[9px] text-rose-400 font-bold">18m Blackout Spike</span>
                <span class="absolute top-1 right-2 text-[9px] text-emerald-400">Restored 14:40:10 UTC</span>
              </div>
              <div class="text-[11px] text-slate-300">
                Impact: 12 Master Mariner candidates were actively navigating radar blind-pilotage vectors during official DGS exam.
              </div>
            </div>

            <!-- Adjudication Quick-Action Matrix -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3">
              <div>
                <span class="text-[10px] text-slate-500 uppercase font-bold block">DISPUTE ADJUDICATION ACTIONS</span>
                <div class="text-xs text-slate-700 font-sans mt-1">
                  Faculty and candidates filed joint escrow lock review. Select automated resolution:
                </div>
              </div>
              <div class="space-y-1.5">
                <button
                  @click="resolveIncident('RESIT')"
                  type="button"
                  class="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition text-center shadow-2xs"
                >
                  Compel Free Exam Re-sit
                </button>
                <button
                  @click="resolveIncident('REFUND')"
                  type="button"
                  class="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition text-center shadow-2xs"
                >
                  Refund Escrow to Candidates
                </button>
                <button
                  @click="resolveIncident('MEDIATE')"
                  type="button"
                  class="w-full py-1.5 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition text-center"
                >
                  Open DGS Mediation Hearing
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ── DUAL-INVOICING FINANCIAL ARCHITECTURE INSPECTOR ── -->
        <div class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 class="text-sm font-bold font-display text-slate-900">
                Dual-Invoicing Financial Architecture View &bull; Live Transaction Inspector
              </h2>
              <p class="text-xs text-slate-500 font-mono">
                Candidate tax invoice vs academy remittance clearing voucher (Escrow Hold #ESC-49102)
              </p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
              STCW SEC. 4 DUAL-LEDGER
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs">
            <!-- Track 01: Payer Copy -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="font-bold text-slate-900 text-xs">TRACK 01: CANDIDATE / PAYER INVOICE</span>
                <span class="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded">PAID &bull; RECEIPT #SF-9821</span>
              </div>
              <div class="space-y-1 text-[11px] text-slate-600">
                <div class="flex justify-between">
                  <span>Gross Tuition (BRM Simulator):</span>
                  <span class="font-bold text-slate-900 tabular-nums">PKR 85,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Maritime Education Levy (Exempt):</span>
                  <span class="font-bold text-emerald-700 tabular-nums">PKR 0 (0% GST)</span>
                </div>
                <div class="flex justify-between">
                  <span>ECDSA Cryptographic Seal Fee:</span>
                  <span class="font-bold text-slate-900 tabular-nums">PKR 1,500</span>
                </div>
                <div class="flex justify-between pt-1 border-t border-slate-200 text-slate-900 font-bold">
                  <span>Total Candidate Debit:</span>
                  <span class="text-blue-700 tabular-nums">PKR 86,500</span>
                </div>
              </div>
            </div>

            <!-- Track 02: Institute Remittance Voucher -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="font-bold text-slate-900 text-xs">TRACK 02: ACADEMY ESCROW REMITTANCE</span>
                <span class="text-[10px] text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded">READY FOR CLEARANCE</span>
              </div>
              <div class="space-y-1 text-[11px] text-slate-600">
                <div class="flex justify-between">
                  <span>Gross Intake Allocated:</span>
                  <span class="font-bold text-slate-900 tabular-nums">PKR 85,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Platform Commission (8.5%):</span>
                  <span class="font-bold text-rose-600 tabular-nums">- PKR 7,225</span>
                </div>
                <div class="flex justify-between">
                  <span>Statutory TDS Withholding (1%):</span>
                  <span class="font-bold text-slate-900 tabular-nums">- PKR 850</span>
                </div>
                <div class="flex justify-between pt-1 border-t border-slate-200 text-slate-900 font-bold">
                  <span>Net Academy Remittance:</span>
                  <span class="text-emerald-700 tabular-nums">PKR 76,925</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Vessel Bridge Watchkeeping Telemetry Cohort Banner -->
        <div class="p-4 rounded-2xl bg-[#071022] border border-cyan-500/30 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md font-mono">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div class="text-xs font-black text-white flex items-center gap-2">
                <span>Vessel Bridge Watchkeeping Matrix: Cohort 2026-A</span>
                <span class="px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400 text-[9px] font-bold border border-emerald-700/60">LIVE TELEMETRY</span>
              </div>
              <div class="text-[11px] text-slate-400 font-sans mt-0.5">
                3,890 cadets currently logging certified simulator sea-time across 48 dual-certified polar and container simulation environments.
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4 shrink-0 text-xs">
            <div>
              <span class="text-[9px] text-slate-400 uppercase font-bold block">Engine Cadets Active</span>
              <strong class="text-cyan-300 font-bold tabular-nums">2,140 In Session</strong>
            </div>
            <div>
              <span class="text-[9px] text-slate-400 uppercase font-bold block">Deck Cadets Active</span>
              <strong class="text-white font-bold tabular-nums">1,750 In Session</strong>
            </div>
          </div>
        </div>

      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB C: APPROVAL WORKFLOWS                                       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'approvals'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <section aria-labelledby="approvals-heading" class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
              <span>Fleet Operations</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Regulatory Workflows</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-900">Approvals &amp; Accreditation Backlog</span>
            </nav>
            <h1 id="approvals-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Statutory Approvals &amp; CIP Accreditations
            </h1>
          </div>
          <button
            @click="showAddBatchModal = true"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs inline-flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>+ New Approval Batch</span>
          </button>
        </section>

        <!-- Queue Sub-Tabs -->
        <div role="tablist" aria-label="Approval Queues" class="flex gap-2 border-b border-slate-200 pb-3">
          <button
            v-for="sub in ['INSTITUTES', 'COURSES', 'CERTIFICATES']"
            :key="sub"
            role="tab"
            :aria-selected="approvalSubTab === sub"
            class="px-4 py-2 rounded-xl text-xs font-bold transition border focus-visible:ring-2 focus-visible:ring-blue-600"
            :class="approvalSubTab === sub
              ? 'bg-blue-50 text-blue-800 border-blue-300 font-black'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'"
            @click="approvalSubTab = sub"
          >
            {{ sub }} QUEUE
          </button>
        </div>

        <!-- Institutes Queue -->
        <div v-if="approvalSubTab === 'INSTITUTES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 class="text-sm font-black text-slate-900">Maritime Academy Accreditations Queue</h2>
            <span class="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-300">
              {{ institutes.length }} Registered
            </span>
          </div>
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Institutes Accreditation Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">ACADEMY</th>
                  <th scope="col" class="px-4 py-3">LOCATION</th>
                  <th scope="col" class="px-4 py-3">CIP GRADE</th>
                  <th scope="col" class="px-4 py-3">STATUS</th>
                  <th scope="col" class="px-4 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="inst in institutes" :key="inst.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5">
                    <div class="font-bold text-slate-900">{{ inst.name }}</div>
                    <div class="text-[10px] text-slate-500 font-mono">CODE: {{ inst.code }}</div>
                  </td>
                  <td class="px-4 py-3.5 text-slate-700">{{ inst.location }}</td>
                  <td class="px-4 py-3.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-300">
                      {{ inst.cipGrade }}
                    </span>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border" :class="statusPillClass(inst.verificationStatus)">
                      {{ inst.verificationStatus }}
                    </span>
                  </td>
                  <td class="px-4 py-3.5 text-right space-x-2">
                    <button
                      @click="openInstituteAuditModal(inst)"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      Audit &rarr;
                    </button>
                    <button
                      v-if="inst.verificationStatus !== 'VERIFIED'"
                      @click="inst.verificationStatus = 'VERIFIED'"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Courses Queue -->
        <div v-if="approvalSubTab === 'COURSES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 class="text-sm font-black text-slate-900">STCW Course Syllabus &amp; Approval Quotas</h2>
          </div>
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Course Approval Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">COURSE TITLE</th>
                  <th scope="col" class="px-4 py-3">INSTITUTE</th>
                  <th scope="col" class="px-4 py-3">TUITION FEE</th>
                  <th scope="col" class="px-4 py-3">STATUS</th>
                  <th scope="col" class="px-4 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="c in courses" :key="c.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5">
                    <div class="font-bold text-slate-900">{{ c.title }}</div>
                    <div class="text-[10px] text-blue-700 font-mono font-bold">{{ c.code }}</div>
                  </td>
                  <td class="px-4 py-3.5 text-slate-700">{{ c.institute }}</td>
                  <td class="px-4 py-3.5 font-mono font-bold text-slate-900">₹{{ c.price.toLocaleString() }}</td>
                  <td class="px-4 py-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border" :class="statusPillClass(c.approvalStatus)">
                      {{ c.approvalStatus }}
                    </span>
                  </td>
                  <td class="px-4 py-3.5 text-right space-x-2">
                    <button
                      @click="openCourseModal(c)"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      Syllabus
                    </button>
                    <button
                      v-if="c.approvalStatus !== 'APPROVED'"
                      @click="c.approvalStatus = 'APPROVED'"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Certificates Queue -->
        <div v-if="approvalSubTab === 'CERTIFICATES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 class="text-sm font-black text-slate-900">Candidate Certificate Cryptographic Signing Desk</h2>
          </div>
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Certificate Signing Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">CANDIDATE</th>
                  <th scope="col" class="px-4 py-3">COURSE</th>
                  <th scope="col" class="px-4 py-3">ATTENDANCE</th>
                  <th scope="col" class="px-4 py-3 text-right">SIGNING</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="cert in pendingCerts" :key="cert.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5">
                    <div class="font-bold text-slate-900">{{ cert.candidate }}</div>
                    <div class="text-[10px] font-mono text-blue-700 font-bold">INDoS: {{ cert.indos }}</div>
                  </td>
                  <td class="px-4 py-3.5 text-slate-700">{{ cert.course }}</td>
                  <td class="px-4 py-3.5 font-mono font-bold text-emerald-700">{{ cert.attendance }}%</td>
                  <td class="px-4 py-3.5 text-right">
                    <button
                      v-if="cert.status === 'PENDING'"
                      @click="signCertificate(cert)"
                      type="button"
                      class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      ECDSA Sign &amp; Issue
                    </button>
                    <span v-else class="text-emerald-700 font-mono font-bold text-xs">✓ SIGNED</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB D: USER MANAGEMENT                                          -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'users'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <section aria-labelledby="users-heading" class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
              <span>Fleet Operations</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Personnel &amp; Governance</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-900">Verified Maritime Registry</span>
            </nav>
            <h1 id="users-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              User Identity &amp; Access Registry
            </h1>
            <p class="text-xs text-slate-600">Active seafarers, cadets, institute registrars, and regulatory compliance auditors</p>
          </div>
          <button
            @click="showAddUserModal = true"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            + Onboard Regulatory Officer
          </button>
        </section>

        <!-- Users Filter Bar -->
        <div class="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2 flex-wrap flex-1">
            <input
              v-model="userSearch"
              type="text"
              placeholder="Search user by name or INDoS..."
              aria-label="Search users by name, email, or INDoS"
              class="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:border-blue-600 w-48 sm:w-64"
            />
            <select
              v-model="userRoleFilter"
              aria-label="Filter users by maritime role"
              class="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:border-blue-600 font-medium"
            >
              <option value="ALL">All Roles (Seafarer, Institute Admin, Super Admin)</option>
              <option value="SEAFARER">Seafarer</option>
              <option value="INSTITUTE_ADMIN">Institute Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>
          <span class="text-[11px] font-mono text-slate-600">Total Registered: <strong class="text-slate-900">{{ users.length }} Officers</strong></span>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Users Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">NAME &amp; EMAIL</th>
                  <th scope="col" class="px-4 py-3">ROLE</th>
                  <th scope="col" class="px-4 py-3">INDOS / AFFILIATION</th>
                  <th scope="col" class="px-4 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="u in users" :key="u.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5">
                    <div class="font-bold text-slate-900">{{ u.name }}</div>
                    <div class="text-[10px] text-slate-600 font-mono">{{ u.email }}</div>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border" :class="roleBadgeClass(u.role)">
                      {{ u.role }}
                    </span>
                  </td>
                  <td class="px-4 py-3.5 font-mono font-bold text-blue-800">{{ u.indos || u.institute || '—' }}</td>
                  <td class="px-4 py-3.5 text-right space-x-2">
                    <button
                      v-if="u.role === 'SEAFARER'"
                      @click="activeTab = 'dossier'"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      View Dossier &rarr;
                    </button>
                    <button
                      @click="resetUserAuth(u.name)"
                      type="button"
                      class="text-xs font-bold text-slate-600 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      Reset 2FA
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB E: FINANCIAL OVERSIGHT                                      -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'finance'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <section aria-labelledby="finance-heading" class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
              <span>Fleet Operations</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Financial Oversight</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-900">Escrow Clearinghouse &amp; Payouts</span>
            </nav>
            <h1 id="finance-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Dual-Invoicing Escrow Clearinghouse &amp; Commissions
            </h1>
          </div>
          <button
            @click="exportFinancialReport"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Export GST/TDS Report (CSV)
          </button>
        </section>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Financial Ledger Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">REF ID</th>
                  <th scope="col" class="px-4 py-3">CANDIDATE &amp; COURSE</th>
                  <th scope="col" class="px-4 py-3">TOTAL GMV</th>
                  <th scope="col" class="px-4 py-3">COMMISSION (10%)</th>
                  <th scope="col" class="px-4 py-3">PAYOUT (90%)</th>
                  <th scope="col" class="px-4 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="l in ledgerRecords" :key="l.ref" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5 font-mono font-bold text-blue-800">{{ l.ref }}</td>
                  <td class="px-4 py-3.5">
                    <div class="font-bold text-slate-900">{{ l.student }}</div>
                    <div class="text-[10px] text-slate-600">{{ l.course }}</div>
                  </td>
                  <td class="px-4 py-3.5 font-mono font-bold text-slate-900">₹{{ l.amount.toLocaleString() }}</td>
                  <td class="px-4 py-3.5 font-mono text-blue-800 font-bold">₹{{ l.commission }}</td>
                  <td class="px-4 py-3.5 font-mono text-emerald-700 font-bold">₹{{ l.payout.toLocaleString() }}</td>
                  <td class="px-4 py-3.5 text-right">
                    <button
                      v-if="l.status === 'ESCROW_HELD'"
                      @click="releaseEscrow(l)"
                      type="button"
                      class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      Release Escrow
                    </button>
                    <span v-else class="text-emerald-700 font-mono text-xs font-bold">SETTLED</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB F: REVIEWS & MODERATION                                     -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'moderation'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <section aria-labelledby="moderation-heading">
          <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
            <span>Fleet Operations</span>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Quality Assurance</span>
            <span aria-hidden="true">&rsaquo;</span>
            <span class="font-bold text-slate-900">Cadet Reviews &amp; Dispute Arbitration</span>
          </nav>
          <h1 id="moderation-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Maritime Reviews &amp; Dispute Arbitration Console
          </h1>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h2 class="font-black text-xs uppercase text-slate-900 tracking-wider">Verified INDoS Cadet Reviews</h2>
            <div v-for="rev in studentReviews" :key="rev.id" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div class="flex justify-between font-bold">
                <span class="text-slate-900">{{ rev.course }}</span>
                <span class="text-amber-600 flex items-center gap-1 font-mono font-bold">
                  <svg class="w-3.5 h-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{{ rev.rating }}.0</span>
                </span>
              </div>
              <p class="text-slate-700 italic mt-1.5">"{{ rev.comment }}"</p>
              <div class="text-[11px] text-slate-600 font-medium mt-1">Submitted by: <strong class="text-slate-900">{{ rev.student }}</strong></div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h2 class="font-black text-xs uppercase text-slate-900 tracking-wider">Grievance &amp; Dispute Tickets</h2>
            <div v-for="tkt in complaintDesk" :key="tkt.id" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between items-center gap-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-mono text-blue-800 font-bold text-[11px]">{{ tkt.id }} &bull; PRIORITY: {{ tkt.priority }}</span>
                  <span v-if="tkt.source === 'WHATSAPP'" class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold border border-emerald-300 flex items-center gap-1">
                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    WHATSAPP ESCALATION
                  </span>
                </div>
                <div class="font-bold text-slate-900 text-sm mt-0.5">{{ tkt.subject }}</div>
                <div class="text-[11px] text-slate-600 mt-0.5 flex flex-wrap items-center gap-3">
                  <span>Filed by: <strong class="text-slate-900">{{ tkt.filer }}</strong></span>
                  <a v-if="tkt.whatsappUrl" :href="tkt.whatsappUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-700 hover:text-emerald-800 font-bold underline flex items-center gap-1">
                    <span>Open in WhatsApp</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              <button
                v-if="tkt.status !== 'RESOLVED'"
                @click="tkt.status = 'RESOLVED'"
                type="button"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shrink-0 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Resolve
              </button>
              <span v-else class="text-emerald-700 font-bold text-xs shrink-0">✓ RESOLVED</span>
            </div>
          </div>
        </div>
      </main>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB G: CMS & CONTENT                                            -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <main v-else-if="activeTab === 'cms'" id="main-content" class="p-4 sm:p-6 lg:p-8 space-y-6">
        
        <section aria-labelledby="cms-heading" class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-xs text-slate-600 mb-1.5 font-medium">
              <span>Fleet Operations</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Communications</span>
              <span aria-hidden="true">&rsaquo;</span>
              <span class="font-bold text-slate-900">DG Shipping Circulars &amp; Syllabus Advisories</span>
            </nav>
            <h1 id="cms-heading" class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              DG Shipping Statutory Circulars &amp; Notices
            </h1>
          </div>
          <button
            @click="showCmsModal = true"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            + Publish Circular Notice
          </button>
        </section>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto" tabindex="0" role="region" aria-label="Regulatory Circulars Table">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-4 py-3">TITLE &amp; REFERENCE</th>
                  <th scope="col" class="px-4 py-3">CATEGORY</th>
                  <th scope="col" class="px-4 py-3">TARGET AUDIENCE</th>
                  <th scope="col" class="px-4 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="post in cmsPosts" :key="post.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-4 py-3.5 font-bold text-slate-900">{{ post.title }}</td>
                  <td class="px-4 py-3.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-300">
                      {{ post.category }}
                    </span>
                  </td>
                  <td class="px-4 py-3.5 text-slate-700">{{ post.targetAudience }}</td>
                  <td class="px-4 py-3.5 text-right">
                    <button
                      @click="deletePost(post.id)"
                      type="button"
                      class="text-rose-700 font-bold hover:underline focus-visible:ring-2 focus-visible:ring-rose-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- ACCESSIBLE MODALS (WCAG 2.1 AA COMPLIANT)                         -->
    <!-- ═════════════════════════════════════════════════════════════════ -->

    <!-- Modal 1: New Approval Batch -->
    <div
      v-if="showAddBatchModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-batch-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold">
              ⚓
            </div>
            <h2 id="modal-batch-title" class="font-black text-slate-900 text-base">New Approval Batch</h2>
          </div>
          <button
            @click="showAddBatchModal = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close batch modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="createBatch" class="space-y-3.5 text-xs">
          <div>
            <label for="batch-title" class="block font-bold text-slate-800 mb-1">Batch Identifier / Name</label>
            <input
              id="batch-title"
              v-model="newBatch.title"
              type="text"
              required
              placeholder="e.g. AFF-2026-OCT-B04"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20"
            />
          </div>

          <div>
            <label for="batch-institute" class="block font-bold text-slate-800 mb-1">Training Academy</label>
            <select
              id="batch-institute"
              v-model="newBatch.institute"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 font-medium"
            >
              <option value="Anglo-Eastern Maritime Academy">Anglo-Eastern Maritime Academy (IND-001)</option>
              <option value="Samundra Institute of Maritime Studies">Samundra Institute of Maritime Studies (IND-004)</option>
              <option value="Goa Offshore Safety Institute">Goa Offshore Safety Institute (IND-034)</option>
              <option value="Maritime Training Academy Mumbai">Maritime Training Academy Mumbai (IND-042)</option>
            </select>
          </div>

          <div>
            <label for="batch-course" class="block font-bold text-slate-800 mb-1">STCW Model Course</label>
            <select
              id="batch-course"
              v-model="newBatch.course"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 font-medium"
            >
              <option value="Advanced Fire Fighting (STCW A-VI/3)">Advanced Fire Fighting (AFF - STCW A-VI/3)</option>
              <option value="High Voltage Safety & Switchgear (STCW A-III/1-2)">High Voltage Safety (STCW A-III/1-2)</option>
              <option value="ECDIS Electronic Navigation (STCW A-II/1)">ECDIS Navigation (STCW A-II/1)</option>
              <option value="PSCRB Survival Craft (STCW A-VI/2-1)">PSCRB Survival Craft (STCW A-VI/2-1)</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="batch-date" class="block font-bold text-slate-800 mb-1">Commencement Date</label>
              <input
                id="batch-date"
                v-model="newBatch.startDate"
                type="date"
                required
                class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 font-mono"
              />
            </div>
            <div>
              <label for="batch-capacity" class="block font-bold text-slate-800 mb-1">Candidate Quota (Max 24)</label>
              <input
                id="batch-capacity"
                v-model.number="newBatch.capacity"
                type="number"
                min="1"
                max="30"
                required
                class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 font-mono"
              />
            </div>
          </div>

          <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              @click="showAddBatchModal = false"
              type="button"
              class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Issue Batch Endorsement
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal 2: Create Regulatory Notice -->
    <div
      v-if="showCmsModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cms-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 id="modal-cms-title" class="font-black text-slate-900 text-base">Create DG Shipping Regulatory Notice</h2>
          <button
            @click="showCmsModal = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close notice modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="publishArticle" class="space-y-3.5 text-xs">
          <div>
            <label for="cms-title" class="block font-bold text-slate-800 mb-1">Advisory Title</label>
            <input
              id="cms-title"
              v-model="newArticle.title"
              type="text"
              required
              placeholder="e.g. Revised Minimum Safe Sea-Time Criteria 2026"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600"
            />
          </div>
          <div>
            <label for="cms-content" class="block font-bold text-slate-800 mb-1">Body Directives</label>
            <textarea
              id="cms-content"
              v-model="newArticle.content"
              rows="4"
              required
              placeholder="Enter official statutory circular content..."
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600"
            ></textarea>
          </div>
          <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              @click="showCmsModal = false"
              type="button"
              class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Publish Circular
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal 3: Onboard Regulatory Officer -->
    <div
      v-if="showAddUserModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-user-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-md w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 id="modal-user-title" class="font-black text-slate-900 text-base">Onboard Regulatory Officer</h2>
          <button
            @click="showAddUserModal = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close user modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="createUser" class="space-y-3.5 text-xs">
          <div>
            <label for="user-name" class="block font-bold text-slate-800 mb-1">Full Officer Name</label>
            <input
              id="user-name"
              v-model="newUser.name"
              type="text"
              required
              placeholder="e.g. Capt. Sandeep Joshi"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600"
            />
          </div>
          <div>
            <label for="user-email" class="block font-bold text-slate-800 mb-1">Official Maritime Email</label>
            <input
              id="user-email"
              v-model="newUser.email"
              type="email"
              required
              placeholder="e.g. sandeep.joshi@mmd.gov.in"
              class="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 font-mono"
            />
          </div>
          <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              @click="showAddUserModal = false"
              type="button"
              class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Create Credentials
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal 4: CIP Audit Evaluation -->
    <div
      v-if="auditModalOpen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-audit-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 id="modal-audit-title" class="font-black text-slate-900 text-base">
            CIP Comprehensive Audit Evaluation &bull; {{ selectedInstitute?.name }}
          </h2>
          <button
            @click="auditModalOpen = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close audit modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-300 font-bold space-y-1">
            <div class="flex items-center gap-1.5 font-black">
              <span>✓ DNV Class A Full Mission Simulator Verified</span>
            </div>
            <div class="text-[11px] font-normal text-emerald-800">
              DG Approval Code: {{ selectedInstitute?.code }} &bull; Location: {{ selectedInstitute?.location }}
            </div>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-1">
            <div class="font-bold text-slate-900">Statutory Inspection Checkpoints:</div>
            <ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
              <li>STCW 2010 Manila amendments instructor qualifications met</li>
              <li>Annual fire ground &amp; enclosed space breathing apparatus drills audited</li>
              <li>Student biometric attendance synced with INDoS portal (99.4% rate)</li>
            </ul>
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button
            @click="auditModalOpen = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700"
          >
            Close
          </button>
          <button
            @click="confirmInstituteAudit"
            type="button"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Approve Grade A1 Accreditation
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 5: STCW Course Syllabus Audit -->
    <div
      v-if="courseModalOpen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-course-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 id="modal-course-title" class="font-black text-slate-900 text-base">
            Syllabus Audit &bull; {{ selectedCourse?.title }}
          </h2>
          <button
            @click="courseModalOpen = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close syllabus modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 bg-blue-50 text-blue-900 rounded-xl border border-blue-300 font-bold">
            IMO Model Course Compliant (40% Theoretical / 60% Kongsberg Simulator Practical)
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-1">
            <div class="font-bold text-slate-900">Syllabus Details:</div>
            <div class="text-[11px] text-slate-600 font-mono">Code: {{ selectedCourse?.code }} &bull; Academy: {{ selectedCourse?.institute }}</div>
            <div class="text-[11px] text-slate-600 font-mono">Approved Candidate Fee: ₹{{ selectedCourse?.price?.toLocaleString() }}</div>
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button
            @click="courseModalOpen = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700"
          >
            Close
          </button>
          <button
            @click="confirmCourseApproval"
            type="button"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Approve Course Syllabus
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 6: Forensic Audit & Biometric PDF Export Modal -->
    <div
      v-if="showForensicPdfModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-forensic-pdf-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div class="rounded-3xl border border-slate-700/60 bg-[#0A1424] text-white p-5 sm:p-6 max-w-2xl w-full space-y-4 shadow-2xl my-8">
        
        <!-- Header -->
        <div class="flex items-start justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-xs">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="modal-forensic-pdf-title" class="font-black text-white text-base tracking-tight">
                  Forensic Audit &amp; Biometric PDF/A Export
                </h2>
                <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                  ISO 19005-1 PDF/A-1b
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono mt-0.5">
                Cryptographic Minutiae Vector &bull; Blackbox Telemetry Archive &bull; STCW Section I/2
              </p>
            </div>
          </div>
          <button
            @click="showForensicPdfModal = false"
            type="button"
            class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close forensic modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Subject & Regulatory Scope -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block font-bold">EXAMINED CANDIDATE</span>
            <div class="text-white font-bold mt-0.5">Capt. Rajesh Kumar (SF-99412)</div>
            <div class="text-slate-400 text-[11px]">INDoS: 04NL8821 &bull; CoC: IND-COC-88914</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block font-bold">INCIDENT CROSS-REFERENCE</span>
            <div class="text-rose-400 font-bold mt-0.5">INC-2026-ARPA-881 (18m Grid Drop)</div>
            <div class="text-slate-400 text-[11px]">Wärtsilä FMBS Bay 01 &bull; Power Blackout</div>
          </div>
        </div>

        <!-- Dynamic Time Warping (DTW) Telemetry Curve -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-300 font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>DYNAMIC TIME WARPING (DTW) SIMULATOR TRACE</span>
            </span>
            <span class="text-cyan-300 font-bold tabular-nums">99.4% SIMILARITY MATCH</span>
          </div>
          <div class="h-24 bg-[#050A14] rounded-xl p-2 relative overflow-hidden border border-slate-900 flex items-center">
            <!-- Grid Lines -->
            <div class="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-15 pointer-events-none">
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-r border-cyan-500"></div>
              <div class="border-b border-cyan-500"></div>
            </div>
            <!-- Curve Comparison SVG -->
            <svg class="w-full h-full overflow-visible" viewBox="0 0 320 60" preserveAspectRatio="none">
              <!-- Baseline Gold Standard (Dashed) -->
              <path
                d="M 0,35 Q 40,15 80,30 T 160,25 T 240,40 T 320,20"
                fill="none"
                stroke="#64748b"
                stroke-width="1.5"
                stroke-dasharray="3 3"
              />
              <!-- Candidate Evaluated Trajectory (Cyan) -->
              <path
                d="M 0,34 Q 40,16 80,31 T 160,24 T 240,38 T 320,21"
                fill="none"
                stroke="#00E5FF"
                stroke-width="2.5"
              />
            </svg>
            <span class="absolute top-1.5 left-2.5 text-[9px] font-mono text-cyan-300 font-bold bg-[#0A1424]/80 px-1.5 py-0.5 rounded">
              Candidate Trajectory (Cyan) vs Baseline IMO Standard (Dashed)
            </span>
            <span class="absolute bottom-1.5 right-2.5 text-[9px] font-mono text-emerald-400 font-bold bg-[#0A1424]/80 px-1.5 py-0.5 rounded tabular-nums">
              DTW-D = 0.018 (Pass &lt; 0.050)
            </span>
          </div>
        </div>

        <!-- ILO 185 Biometric Minutiae & Hardware Telemetry -->
        <div class="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 font-mono text-xs">
          <div class="flex justify-between items-center text-[11px]">
            <span class="text-slate-400 uppercase font-bold">ILO 185 BIOMETRIC MINUTIAE EXTRACTION</span>
            <span class="text-emerald-400 font-bold">99.8% BIO-MATCH</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 uppercase block">HARDWARE</span>
              <strong class="text-cyan-300 text-[10px] block truncate">Suprema BioStation 3</strong>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 uppercase block">IRIS SENSOR</span>
              <strong class="text-cyan-300 text-[10px] block truncate">Iris ID iCAM7S</strong>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 uppercase block">MINUTIAE NODES</span>
              <strong class="text-white text-[10px] block">64 Endings / 38 Bifurcations</strong>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 uppercase block">GEO-STAMP</span>
              <strong class="text-emerald-400 text-[10px] block tabular-nums">18.9142°N, 73.3211°E</strong>
            </div>
          </div>
        </div>

        <!-- SHA-256 Hash & HSM Cryptographic Seal -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
          <div class="flex justify-between items-center text-[10px]">
            <span class="text-slate-400 uppercase font-bold">FIPS 140-2 LEVEL 3 HSM SIGNATURE (secp256r1)</span>
            <button
              @click="copyManifestHash"
              type="button"
              class="text-cyan-400 hover:text-cyan-300 transition text-[10px] font-bold flex items-center gap-1"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy Hash</span>
            </button>
          </div>
          <div class="p-2 bg-[#060D1A] rounded-lg border border-slate-800 text-[10px] text-cyan-300 break-all font-mono select-all">
            9e4a8b2c4819df51a44c98024921ff91b10a927a6f23851b471249aa311b8f04
          </div>
          <div class="text-[10px] text-slate-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>DG Shipping &bull; IMO GISIS Registry Synchronized &bull; Zero Maritime Detentions</span>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex flex-col sm:flex-row justify-end gap-2 pt-2 border-t border-slate-800">
          <button
            @click="showForensicPdfModal = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-800 text-slate-300 transition"
          >
            Dismiss
          </button>
          <button
            @click="downloadPdfA"
            type="button"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono transition shadow-xs flex items-center justify-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <svg class="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Certified ISO 19005-1 PDF/A-1b</span>
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, h } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({ middleware: ['auth'] });
useHead({ title: 'Fleet Operations Hub · The Seafu Maritime Console' });

const authStore = useAuthStore();
onMounted(() => {
  authStore.initAuth();
  updateZuluTime();
  timerInterval = setInterval(updateZuluTime, 1000);
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown);
  }
});

// Active Navigation State (Defaults to 'dossier' as requested!)
const activeTab = ref('dossier');
const activeDossierSubTab = ref('CDC_LOG');
const globalSearch = ref('');
const showEndorseMenu = ref(false);
const showAddBatchModal = ref(false);

// Enhanced Navbar Reactive States
const isMobileSidebarOpen = ref(false);
const isSearchFocused = ref(false);
const searchInputRef = ref<HTMLInputElement | null>(null);
const showNotificationsDropdown = ref(false);
const showProfileDropdown = ref(false);
const showStatusTelemetryDropdown = ref(false);
const currentZuluTime = ref('12:00:00 UTC');
const isPingingGateway = ref(false);
const gatewayPingSuccess = ref(false);
let timerInterval: any = null;

function updateZuluTime() {
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  currentZuluTime.value = `${hours}:${minutes}:${seconds} UTC`;
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    isSearchFocused.value = true;
    searchInputRef.value?.focus();
  } else if (e.key === 'Escape') {
    closeAllDropdowns();
  }
}

function closeAllDropdowns() {
  showNotificationsDropdown.value = false;
  showProfileDropdown.value = false;
  showStatusTelemetryDropdown.value = false;
  isSearchFocused.value = false;
}

function closeAllDropdownsExcept(except: string) {
  if (except !== 'notifications') showNotificationsDropdown.value = false;
  if (except !== 'profile') showProfileDropdown.value = false;
  if (except !== 'telemetry') showStatusTelemetryDropdown.value = false;
  if (except !== 'search') isSearchFocused.value = false;
}

function toggleNotifications() {
  const next = !showNotificationsDropdown.value;
  closeAllDropdowns();
  showNotificationsDropdown.value = next;
}

function toggleProfile() {
  const next = !showProfileDropdown.value;
  closeAllDropdowns();
  showProfileDropdown.value = next;
}

function toggleStatusTelemetry() {
  const next = !showStatusTelemetryDropdown.value;
  closeAllDropdowns();
  showStatusTelemetryDropdown.value = next;
}

function triggerDiagnosticPing() {
  isPingingGateway.value = true;
  gatewayPingSuccess.value = false;
  setTimeout(() => {
    isPingingGateway.value = false;
    gatewayPingSuccess.value = true;
    setTimeout(() => {
      gatewayPingSuccess.value = false;
    }, 4000);
  }, 900);
}

function handleLogout() {
  authStore.logout();
  navigateTo('/auth/login');
}

// Active Tab Display Label
const activeTabLabel = computed(() => {
  const item = [...coreNavItems, ...governanceNavItems].find(n => n.id === activeTab.value);
  return item ? item.label : 'Fleet Console';
});

// Notifications List
const notifications = ref([
  {
    id: 1,
    title: 'STCW Endorsement Refresher Required',
    description: 'Capt. Rajesh Kumar (SF-99412) PSCRB cert expires in 62 days. Mandatory refresher required under STCW Manila amendments.',
    time: '12m ago',
    type: 'warning',
    actionText: 'Open Dossier',
    action: () => { activeTab.value = 'dossier'; showNotificationsDropdown.value = false; }
  },
  {
    id: 2,
    title: 'CIP Comprehensive Inspection Renewal',
    description: 'Anglo-Eastern Maritime Academy uploaded Annual Comprehensive Inspection Programme Grade A1 self-audit dossier.',
    time: '45m ago',
    type: 'info',
    actionText: 'Review Audit',
    action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'INSTITUTES'; showNotificationsDropdown.value = false; }
  },
  {
    id: 3,
    title: 'DG Shipping Regulatory Circular 14/2026',
    description: 'Advisory issued regarding revised minimum safe sea-time criteria for Second Mate FG competencies.',
    time: '2h ago',
    type: 'statutory',
    actionText: 'Read Circular',
    action: () => { activeTab.value = 'cms'; showNotificationsDropdown.value = false; }
  }
]);

// Interactive Command Palette Search Catalog
const searchResults = computed(() => {
  const query = globalSearch.value.trim().toLowerCase();
  
  const allEntries = [
    { category: 'Officers', title: 'Capt. Rajesh Kumar (SF-99412)', subtitle: 'Master Mariner FG Unlimited · CoC IND-COC-88914', action: () => { activeTab.value = 'dossier'; isSearchFocused.value = false; } },
    { category: 'Officers', title: 'Capt. Arvind Nair (SF-08ZL9431)', subtitle: 'Chief Mate FG · Advanced Fire Fighting', action: () => { activeTab.value = 'users'; isSearchFocused.value = false; } },
    { category: 'Cadets', title: 'Ramesh Kumar (INDoS 149028)', subtitle: 'Deck Cadet · PSCRB Survival Craft', action: () => { activeTab.value = 'users'; isSearchFocused.value = false; } },
    { category: 'Institutes', title: 'Anglo-Eastern Maritime Academy (AEMA)', subtitle: 'Grade A1 Outstanding · Mumbai IND (DG Shipping Approved)', action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'INSTITUTES'; isSearchFocused.value = false; } },
    { category: 'Institutes', title: 'Maritime Training Academy Mumbai', subtitle: 'Grade A1 Outstanding · STCW Approved Center', action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'INSTITUTES'; isSearchFocused.value = false; } },
    { category: 'Institutes', title: 'Goa Offshore Safety Institute', subtitle: 'Grade A2 Approved · Offshore Survival Drills', action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'INSTITUTES'; isSearchFocused.value = false; } },
    { category: 'Vessels', title: 'Maersk Mc-Kinney Moller (IMO 9632064)', subtitle: '18,270 TEU · Container Ship · 165,000 DWT', action: () => { activeTab.value = 'dossier'; isSearchFocused.value = false; } },
    { category: 'Vessels', title: 'Emma Maersk (IMO 9321483)', subtitle: '15,500 TEU · Next Scheduled Assignment', action: () => { activeTab.value = 'dossier'; isSearchFocused.value = false; } },
    { category: 'Vessels', title: 'Mumbai Maersk (IMO 9780445)', subtitle: '20,568 TEU · Verified Voyage Discharge', action: () => { activeTab.value = 'dossier'; isSearchFocused.value = false; } },
    { category: 'Courses', title: 'Advanced Fire Fighting (STCW A-VI/3)', subtitle: 'DG Shipping Approved Maritime Safety Course', action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'COURSES'; isSearchFocused.value = false; } },
    { category: 'Courses', title: 'ECDIS Electronic Navigation (STCW A-II/1)', subtitle: 'Kongsberg Simulator Bridge Certification', action: () => { activeTab.value = 'approvals'; approvalSubTab.value = 'COURSES'; isSearchFocused.value = false; } },
    { category: 'Quick Action', title: 'Flag State GISIS Verification Check', subtitle: 'Query IMO Global Integrated Shipping Registry', action: () => { runGisisCheck(); isSearchFocused.value = false; } },
    { category: 'Quick Action', title: 'Export Official IMO Dossier', subtitle: 'Generate certified PDF/JSON seafarer ledger', action: () => { exportImoDossier(); isSearchFocused.value = false; } },
    { category: 'Quick Action', title: 'Create New Approval Batch', subtitle: 'Statutory Course / Candidate Endorsement', action: () => { showAddBatchModal.value = true; isSearchFocused.value = false; } }
  ];

  if (!query) {
    return allEntries.slice(0, 6);
  }

  return allEntries.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.subtitle.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
});

const dossierVesselFilter = ref('');
const dossierVesselType = ref('ALL');
const dossierRankFilter = ref('ALL');

const approvalSubTab = ref('INSTITUTES');
const showCmsModal = ref(false);
const showAddUserModal = ref(false);
const auditModalOpen = ref(false);
const courseModalOpen = ref(false);
const showForensicPdfModal = ref(false);

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
  { name: 'Completed Payment & Enrolled', count: 6840, rate: 83.9 },
];

const institutes = ref([
  { id: 'inst-01', name: 'Anglo-Eastern Maritime Academy', code: 'IND-001', location: 'Karjat, Maharashtra', verificationStatus: 'VERIFIED', cipGrade: 'A1_OUTSTANDING' },
  { id: 'inst-02', name: 'Samundra Institute of Maritime Studies', code: 'IND-004', location: 'Lonavala, Maharashtra', verificationStatus: 'VERIFIED', cipGrade: 'A1_OUTSTANDING' },
  { id: 'inst-03', name: 'Goa Offshore Safety Institute', code: 'IND-034', location: 'Panaji, Goa', verificationStatus: 'PENDING', cipGrade: 'A2_VERY_GOOD' },
]);

const courses = ref([
  { id: 'crs-01', title: 'Advanced Fire Fighting (AFF)', code: 'STCW A-VI/3', institute: 'Anglo-Eastern Maritime Academy', price: 8500, approvalStatus: 'APPROVED' },
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

const complaintDesk = useState<any[]>('adminComplaintDesk', () => [
  { id: 'TKT-991', subject: 'Refund dispute for cancelled batch AFF-2026-04', filer: 'Deepak Sharma', priority: 'HIGH', status: 'INVESTIGATING', source: 'WEB_PANEL' },
  { id: 'TKT-988', subject: 'Seat lock expired during banking OTP transaction', filer: 'Mohd. Imran', priority: 'MEDIUM', status: 'RESOLVED', source: 'WEB_PANEL' },
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

function resolveIncident(action: string) {
  if (action === 'RESIT') {
    alert('Official Notice Transmitted: Anglo-Eastern Maritime Academy compelled to grant free exam re-sit for 12 impacted candidates under DGS Quality Standard Section 8.4.');
  } else if (action === 'REFUND') {
    alert('Escrow Hold Released: 100% of candidate tuition (PKR 1,038,000 total) refunded to 12 candidate ledgers. Academy SLA breach penalty logged.');
  } else if (action === 'MEDIATE') {
    alert('DGS Regulatory Mediation Hearing opened. Incident telemetry blackbox log dispatched to DG Shipping Directorate General with SHA-256 seal.');
  }
}

function copyManifestHash() {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText('9e4a8b2c4819df51a44c98024921ff91b10a927a6f23851b471249aa311b8f04');
    alert('Cryptographic manifest SHA-256 hash copied to clipboard.');
  }
}

function downloadPdfA() {
  alert('Generating certified ISO 19005-1 PDF/A-1b archival dossier with embedded ILO 185 biometric minutiae vector and ECDSA signature...');
}
</script>
