<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-32">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- DESKTOP ENFORCEMENT OVERLAY (BLOCKS MOBILE ACCESS)              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="!overrideDesktop && isSmallScreen"
      class="fixed inset-0 z-50 flex items-center justify-center p-6 text-center bg-slate-900/60 backdrop-blur-md"
    >
      <div class="max-w-md p-8 rounded-3xl border border-slate-200 bg-white shadow-2xl space-y-4">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-sm">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="text-xs font-mono tracking-widest text-blue-700 font-bold uppercase">
          DESKTOP WORKSTATION REQUIRED
        </div>
        <h2 class="text-xl font-black text-slate-900">
          Secure Regulatory Terminal
        </h2>
        <p class="text-xs text-slate-600 leading-relaxed">
          The Maritime Governance &amp; Regulatory Oversight Console contains sensitive financial escrow ledgers, cryptographic ECDSA signing keys, and candidate registries. Access is restricted to desktop monitors (min. 1280px).
        </p>
        <div class="pt-2 flex flex-col gap-2">
          <NuxtLink to="/" class="py-2.5 px-4 rounded-xl text-xs font-bold transition bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs">
            Return to Public Portal
          </NuxtLink>
          <button @click="overrideDesktop = true" class="text-[11px] font-semibold text-slate-500 hover:text-blue-700 underline">
            Override (Developer Testing Mode)
          </button>
        </div>
      </div>
    </div>

    <!-- ── TOP STATUTORY GOVERNANCE HEADER ─────────────────────────────── -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        <!-- Brand & Crest -->
        <div class="flex items-center space-x-3.5">
          <div class="w-10 h-10 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-bold shadow-xs shrink-0 border border-slate-700/50">
            <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-[10px] font-mono font-bold tracking-wider text-blue-700 uppercase">
                CENTRAL MARITIME REGULATORY OVERSIGHT NODE
              </span>
              <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                TERMINAL ID: GOV-101
              </span>
            </div>
            <h1 class="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
              Platform Governance, Auditing &amp; Statutory Authority
            </h1>
          </div>
        </div>

        <!-- Right Admin Controls -->
        <div class="flex items-center space-x-3 shrink-0">
          <span class="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-xs font-mono font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>SUPER_ADMIN</span>
          </span>
          <NuxtLink
            to="/"
            class="text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-2xs"
          >
            Public Portal &rarr;
          </NuxtLink>
          <button
            @click="authStore.logout()"
            class="text-xs font-bold px-3.5 py-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 transition shadow-2xs"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>

    <!-- ── REFERENCE HERO / STATUTORY AUTHORITY BANNER ─────────────────── -->
    <div class="w-full bg-[#0A1936] text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-md">
      <div class="absolute -right-12 -top-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-mono tracking-wider uppercase text-blue-200 border border-white/10">
              MARITIME GOVERNANCE TERMINAL
            </span>
            <span class="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full font-medium">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>DNV, MCA &amp; Flag State Approved Authority</span>
            </span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Directorate General of Shipping Governance &amp; Regulatory Node
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Centralized administration console governing maritime academy accreditations, STCW syllabus compliance, cryptographic ECDSA certificate issuance, dual-invoicing escrow settlements, and Port State Control compliance.
          </p>
        </div>
        <div class="flex items-center gap-3 flex-wrap shrink-0">
          <button
            @click="showCmsModal = true"
            class="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Publish Circular</span>
          </button>
          <button
            @click="exportFinancialReport"
            class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/15 transition inline-flex items-center gap-1.5 backdrop-blur-md"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Audit Report (CSV)</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ── STATUTORY TELEMETRY TICKER ─────────────────────────────────── -->
    <div class="bg-slate-50 border-b border-slate-200/80 text-[11px] py-2.5 px-4 text-slate-600">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2.5">
          <span class="font-mono text-blue-700 font-bold uppercase tracking-wider text-[10px]">
            ECDSA KEYRING: ACTIVE
          </span>
          <span class="text-slate-300">|</span>
          <span>42 Audited Maritime Academies Synced</span>
          <span class="text-slate-300">|</span>
          <span class="text-emerald-600 font-bold">0 Flag State Non-Conformities</span>
        </div>
        <div class="flex items-center space-x-4 text-slate-500 font-mono text-[10px]">
          <span>DG E-GOV SYNC: &lt;60s</span>
          <span>PARIS MOU: ZERO DETENTIONS</span>
          <span class="text-blue-700 font-bold">LATENCY: 14ms</span>
        </div>
      </div>
    </div>

    <!-- ── MAIN DASHBOARD CONTAINER ───────────────────────────────────── -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">

      <!-- ── EXECUTIVE STATS STRIP (4 METRIC CARDS) ───────────────────── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card 1: Gross GMV & Dual Invoices -->
        <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-[0_4px_12px_rgba(30,58,138,0.06)] hover:shadow-md transition flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">GROSS BOOKINGS GMV</span>
            <span class="p-2 bg-blue-50 text-blue-700 rounded-xl border border-blue-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div class="mt-3">
            <div class="text-2xl sm:text-3xl font-black font-mono text-slate-900 tracking-tight">₹2,48,00,000</div>
            <div class="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5 flex-wrap">
              <span>Commission:</span>
              <strong class="text-blue-700 font-mono">₹24.80 L</strong>
              <span class="text-slate-300">&bull;</span>
              <span class="text-emerald-600 font-bold font-mono">Dual Invoiced</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Approvals Backlog -->
        <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-[0_4px_12px_rgba(30,58,138,0.06)] hover:shadow-md transition flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">APPROVALS BACKLOG</span>
            <span class="p-2 bg-amber-50 text-amber-700 rounded-xl border border-amber-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div class="mt-3">
            <div class="text-2xl sm:text-3xl font-black font-mono text-amber-600 tracking-tight">{{ pendingTotal }} Action Req</div>
            <div class="text-xs text-slate-500 mt-1.5">
              {{ institutes.filter(i=>i.verificationStatus==='PENDING').length }} Inst. &bull; {{ courses.filter(c=>c.approvalStatus==='PENDING_APPROVAL').length }} Courses &bull; {{ pendingCerts.filter(c=>c.status==='PENDING').length }} Certs
            </div>
          </div>
        </div>

        <!-- Card 3: Platform Users -->
        <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-[0_4px_12px_rgba(30,58,138,0.06)] hover:shadow-md transition flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">REGISTERED MARINERS</span>
            <span class="p-2 bg-sky-50 text-sky-700 rounded-xl border border-sky-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
          </div>
          <div class="mt-3">
            <div class="text-2xl sm:text-3xl font-black font-mono text-slate-900 tracking-tight">18,462</div>
            <div class="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
              <span>18,420 Seafarers</span>
              <span class="text-slate-300">&bull;</span>
              <span class="text-blue-700 font-bold">42 Academies</span>
            </div>
          </div>
        </div>

        <!-- Card 4: PSC Integrity -->
        <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-[0_4px_12px_rgba(30,58,138,0.06)] hover:shadow-md transition flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">PSC INTEGRITY RATE</span>
            <span class="p-2 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
          </div>
          <div class="mt-3">
            <div class="text-2xl sm:text-3xl font-black font-mono text-emerald-600 tracking-tight">99.8%</div>
            <div class="text-xs text-slate-500 mt-1.5">
              Zero Paris / Tokyo MoU credential detentions
            </div>
          </div>
        </div>
      </div>

      <!-- ── MULTI-MODULE TAB NAVIGATION BAR ──────────────────────────── -->
      <div class="bg-white border border-slate-200/80 rounded-2xl p-2 shadow-xs flex items-center gap-2 overflow-x-auto">
        <button
          v-for="tab in adminTabs"
          :key="tab.id"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0"
          :class="activeTab === tab.id
            ? 'bg-[#0A1936] text-white shadow-xs'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
          @click="activeTab = tab.id"
        >
          <template v-if="tab.icon === 'building'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </template>
          <template v-else-if="tab.icon === 'chart'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </template>
          <template v-else-if="tab.icon === 'cms'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </template>
          <template v-else-if="tab.icon === 'users'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </template>
          <template v-else-if="tab.icon === 'finance'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </template>
          <template v-else-if="tab.icon === 'shield'">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </template>
          <span>{{ tab.label }}</span>
          <span
            v-if="tab.badge"
            class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
            :class="activeTab === tab.id ? 'bg-blue-900 text-blue-200' : 'bg-slate-100 text-slate-600'"
          >
            {{ tab.badge }}
          </span>
        </button>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 1: APPROVAL WORKFLOWS (INSTITUTES, COURSES, CERTS)       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'approvals'" class="space-y-6">
        <!-- Sub-navigation buttons -->
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div class="flex gap-2">
            <button
              v-for="sub in ['INSTITUTES', 'COURSES', 'CERTIFICATES']"
              :key="sub"
              class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs border"
              :class="approvalSubTab === sub
                ? 'bg-blue-50 text-blue-700 border-blue-300 font-black'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'"
              @click="approvalSubTab = sub"
            >
              {{ sub }} QUEUE
            </button>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-500 font-mono">STATUTORY AUDIT:</span>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              DNV-CIP COMPLIANT 2026
            </span>
          </div>
        </div>

        <!-- 1A. Institute Approvals Queue -->
        <div v-if="approvalSubTab === 'INSTITUTES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 class="text-base font-black text-slate-900">Maritime Academy Accreditations Queue</h3>
              <p class="text-xs text-slate-500 mt-0.5">Statutory DG Shipping, MCA &amp; Comprehensive Inspection Programme (CIP) verification</p>
            </div>
            <span class="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              {{ institutes.length }} Registered Academies
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">INSTITUTE NAME &amp; CONTACT</th>
                  <th class="px-5 py-3.5">DG APPROVAL NO.</th>
                  <th class="px-5 py-3.5">LOCATION</th>
                  <th class="px-5 py-3.5">ACTIVE COURSES</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">STATUTORY ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="inst in institutes" :key="inst.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ inst.name }}</div>
                    <div class="text-[11px] text-slate-500">{{ inst.email }} &bull; {{ inst.phone }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">{{ inst.dgNo }}</td>
                  <td class="px-5 py-4 text-slate-700">{{ inst.city }}, {{ inst.state }}</td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-700">{{ inst.courses }} Courses</td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                      :class="statusPillClass(inst.verificationStatus)"
                    >
                      {{ inst.verificationStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="openInstituteAuditModal(inst)"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                    >
                      Inspect Audit &rarr;
                    </button>
                    <button
                      v-if="inst.verificationStatus !== 'VERIFIED'"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-2xs inline-flex items-center gap-1"
                      @click="inst.verificationStatus = 'VERIFIED'"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Approve</span>
                    </button>
                    <button
                      v-if="inst.verificationStatus !== 'REJECTED'"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs border border-rose-200 text-rose-600 hover:bg-rose-50 transition shadow-2xs inline-flex items-center gap-1"
                      @click="inst.verificationStatus = 'REJECTED'"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Reject</span>
                    </button>
                    <button
                      v-if="inst.verificationStatus === 'VERIFIED'"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs border border-amber-200 text-amber-700 hover:bg-amber-50 transition shadow-2xs inline-flex items-center gap-1"
                      @click="inst.verificationStatus = 'SUSPENDED'"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Suspend</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 1B. Course Approvals Queue -->
        <div v-if="approvalSubTab === 'COURSES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 class="text-base font-black text-slate-900">STCW Course Syllabus &amp; Quota Approvals</h3>
              <p class="text-xs text-slate-500 mt-0.5">Review curriculum compliance, simulator contact hours, and tuition ceilings</p>
            </div>
            <span class="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              {{ courses.length }} Curriculums
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">COURSE TITLE &amp; CODE</th>
                  <th class="px-5 py-3.5">INSTITUTE</th>
                  <th class="px-5 py-3.5">CATEGORY</th>
                  <th class="px-5 py-3.5">DURATION &amp; FEE</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">DECISION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="c in courses" :key="c.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ c.title }}</div>
                    <div class="font-mono text-[11px] text-blue-700 font-semibold">{{ c.code }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-600">{{ c.institute }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {{ c.category }}
                    </span>
                  </td>
                  <td class="px-5 py-4">
                    <div class="text-slate-800 font-bold">{{ c.duration }} Days</div>
                    <div class="font-mono text-slate-600">₹{{ c.price.toLocaleString() }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                      :class="statusPillClass(c.approvalStatus)"
                    >
                      {{ c.approvalStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="openCourseModal(c)"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                    >
                      Inspect Syllabus &rarr;
                    </button>
                    <button
                      v-if="c.approvalStatus !== 'APPROVED'"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-2xs inline-flex items-center gap-1"
                      @click="c.approvalStatus = 'APPROVED'"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Approve</span>
                    </button>
                    <button
                      v-if="c.approvalStatus !== 'REJECTED'"
                      class="px-3 py-1.5 rounded-lg font-bold text-xs border border-rose-200 text-rose-600 hover:bg-rose-50 transition shadow-2xs inline-flex items-center gap-1"
                      @click="c.approvalStatus = 'REJECTED'"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Reject</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 1C. Certificate Issuance Approvals Queue -->
        <div v-if="approvalSubTab === 'CERTIFICATES'" class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 class="text-base font-black text-slate-900">Certificate Issuance &amp; ECDSA Cryptographic Signing Desk</h3>
              <p class="text-xs text-slate-500 mt-0.5">Verify candidate biometric attendance logs and exam scores before digital seal attestation</p>
            </div>
            <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
              {{ pendingCerts.filter(c => c.status === 'PENDING').length }} Pending Sign-Off
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">CANDIDATE / INDOS</th>
                  <th class="px-5 py-3.5">COURSE &amp; CERT NUMBER</th>
                  <th class="px-5 py-3.5">ACADEMY</th>
                  <th class="px-5 py-3.5">ATTENDANCE</th>
                  <th class="px-5 py-3.5">EXAM SCORE</th>
                  <th class="px-5 py-3.5 text-right">ECDSA SIGNING</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="cert in pendingCerts" :key="cert.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ cert.candidate }}</div>
                    <div class="font-mono text-[11px] text-blue-700 font-semibold">INDoS: {{ cert.indos }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-800">{{ cert.course }}</div>
                    <div class="font-mono text-[10px] text-slate-500">Ref: {{ cert.certNo }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-600">{{ cert.institute }}</td>
                  <td class="px-5 py-4">
                    <span class="font-black font-mono text-emerald-600 text-sm">
                      {{ cert.attendance }}%
                    </span>
                    <div class="text-[10px] text-slate-400">Biometric Verified</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="font-black font-mono text-slate-900 text-sm">{{ cert.score }}%</span>
                    <span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PASS</span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      v-if="cert.status === 'PENDING'"
                      class="px-4 py-2 rounded-xl text-xs font-bold transition bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs inline-flex items-center gap-1.5"
                      @click="signCertificate(cert)"
                    >
                      <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Sign &amp; Issue</span>
                    </button>
                    <span
                      v-else
                      class="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1"
                    >
                      <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>ECDSA SIGNED</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 2: ADVANCED ANALYTICS & CONVERSION FUNNELS               -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'analytics'" class="space-y-6">
        <!-- 2A. Conversion Funnel -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div class="flex items-center justify-between mb-6">
            <div>
              <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">SEAFARER JOURNEY TELEMETRY</div>
              <h3 class="text-lg font-black text-slate-900">Full-Funnel Conversion Engine</h3>
            </div>
            <span class="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              ● REAL-TIME TELEMETRY
            </span>
          </div>

          <!-- Visual Funnel Stages -->
          <div class="space-y-3">
            <div
              v-for="(stage, idx) in funnelStages"
              :key="stage.name"
              class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-4 shadow-2xs"
            >
              <div class="w-8 h-8 rounded-full flex items-center justify-center font-black font-mono text-xs bg-blue-50 text-blue-700 border border-blue-200">
                0{{ idx + 1 }}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-black text-slate-900">{{ stage.name }}</span>
                  <span class="font-mono font-bold text-blue-700">{{ stage.count.toLocaleString() }} ({{ stage.rate }}%)</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden bg-slate-200">
                  <div
                    class="h-full rounded-full transition-all bg-blue-600"
                    :style="{ width: stage.rate + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2B. Revenue Growth & Operational KPIs Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Monthly Revenue Breakdown -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-1">FINANCIAL REVENUE GROWTH</div>
            <h3 class="text-base font-black text-slate-900 mb-4">Monthly Platform Commission Revenue (INR)</h3>
            <div class="space-y-3 text-xs">
              <div
                v-for="m in monthlyRevenue"
                :key="m.month"
                class="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50"
              >
                <div>
                  <div class="font-black text-slate-900">{{ m.month }}</div>
                  <div class="text-[11px] text-slate-500 font-mono">Gross GMV: ₹{{ (m.gmv / 100000).toFixed(1) }}L</div>
                </div>
                <div class="text-right">
                  <div class="font-bold font-mono text-blue-700">₹{{ (m.commission / 1000).toFixed(0) }}K Platform Fee</div>
                  <div class="text-[10px] font-mono text-emerald-600 font-bold">GST: ₹{{ m.gst.toFixed(0) }} &bull; TDS: ₹{{ m.tds.toFixed(0) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Operational Performance KPIs -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-1">SYSTEM QUALITY &amp; SPEED</div>
            <h3 class="text-base font-black text-slate-900 mb-4">Operational Performance Metrics</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <div class="text-2xl font-black font-mono text-blue-700">2m 14s</div>
                <div class="text-xs font-black text-slate-900 mt-1">Avg Booking Speed</div>
                <div class="text-[10px] text-slate-500">From discovery to quota lock</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <div class="text-2xl font-black font-mono text-emerald-600">92.4%</div>
                <div class="text-xs font-black text-slate-900 mt-1">Batch Fill Rate</div>
                <div class="text-[10px] text-slate-500">Across 42 accredited academies</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <div class="text-2xl font-black font-mono text-indigo-700">14ms</div>
                <div class="text-xs font-black text-slate-900 mt-1">QR API P99 Latency</div>
                <div class="text-[10px] text-slate-500">Port State Control ping</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <div class="text-2xl font-black font-mono text-emerald-600">0.00%</div>
                <div class="text-xs font-black text-slate-900 mt-1">Overbooking Rate</div>
                <div class="text-[10px] text-slate-500">Atomic quota lock active</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 3: CONTENT MANAGEMENT SYSTEM (CMS)                       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'cms'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">PORTAL CONTENT PUBLISHING</div>
            <h3 class="text-lg font-black text-slate-900">Website Notices, Advisories &amp; Circulars (CMS)</h3>
          </div>
          <button
            @click="showCmsModal = true"
            class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            <span>+</span>
            <span>Create New Notice</span>
          </button>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">NOTICE TITLE</th>
                  <th class="px-5 py-3.5">CATEGORY</th>
                  <th class="px-5 py-3.5">AUDIENCE</th>
                  <th class="px-5 py-3.5">AUTHOR</th>
                  <th class="px-5 py-3.5">VIEWS</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="post in cmsPosts" :key="post.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4 font-bold text-slate-900 max-w-sm">{{ post.title }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-0.5 rounded-full font-mono font-bold text-[10px] bg-blue-50 text-blue-700 border border-blue-200">
                      {{ post.category }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-slate-600">{{ post.targetAudience }}</td>
                  <td class="px-5 py-4 text-slate-600">{{ post.author }}</td>
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">{{ post.views.toLocaleString() }}</td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-0.5 rounded-full font-bold text-[10px] border"
                      :class="post.isPublished ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'"
                    >
                      {{ post.isPublished ? 'PUBLISHED' : 'DRAFT' }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      class="text-xs font-bold text-blue-700 hover:text-blue-800"
                      @click="post.isPublished = !post.isPublished"
                    >
                      {{ post.isPublished ? 'Unpublish' : 'Publish' }}
                    </button>
                    <button
                      class="text-xs font-bold text-rose-600 hover:text-rose-700"
                      @click="deletePost(post.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Create CMS Notice Modal -->
        <div
          v-if="showCmsModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
          <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 class="font-black text-slate-900 text-base">Create Regulatory Notice / Advisory</h4>
              <button
                @click="showCmsModal = false"
                class="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="space-y-3.5 text-xs">
              <div>
                <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">NOTICE TITLE</label>
                <input
                  v-model="newArticle.title"
                  type="text"
                  placeholder="e.g. DG Shipping Advisory: Sea-Time Rules 2026"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">CATEGORY</label>
                  <select
                    v-model="newArticle.category"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                  >
                    <option value="CIRCULAR">CIRCULAR</option>
                    <option value="ADMISSION">ADMISSION</option>
                    <option value="EXAM_SCHEDULE">EXAM SCHEDULE</option>
                    <option value="ADVISORY">ADVISORY</option>
                  </select>
                </div>
                <div>
                  <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">TARGET AUDIENCE</label>
                  <select
                    v-model="newArticle.targetAudience"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                  >
                    <option value="ALL USERS">ALL USERS</option>
                    <option value="SEAFARERS ONLY">SEAFARERS ONLY</option>
                    <option value="INSTITUTES ONLY">INSTITUTES ONLY</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">CONTENT / BODY</label>
                <textarea
                  v-model="newArticle.content"
                  rows="4"
                  placeholder="Official announcement text..."
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                ></textarea>
              </div>
            </div>
            <div class="pt-2 flex justify-end gap-3">
              <button
                @click="showCmsModal = false"
                class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                @click="publishArticle"
                class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
              >
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 4: FULL USER MANAGEMENT (STUDENTS, INSTITUTES, ADMINS)   -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'users'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">IDENTITY &amp; ACCESS CONTROL</div>
            <h3 class="text-lg font-black text-slate-900">Full User Management Registry</h3>
          </div>
          <!-- Search & Filter & Add Staff Button -->
          <div class="flex items-center gap-2.5 flex-wrap">
            <input
              v-model="userSearch"
              type="text"
              placeholder="Search by name, email, INDoS..."
              class="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs outline-none focus:border-blue-600 w-64 shadow-2xs"
            />
            <select
              v-model="userRoleFilter"
              class="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs outline-none focus:border-blue-600 shadow-2xs font-medium"
            >
              <option value="ALL">All Roles</option>
              <option value="SEAFARER">Seafarer (Student)</option>
              <option value="INSTITUTE_ADMIN">Institute Admin</option>
              <option value="SUPER_ADMIN">Super Administrator</option>
            </select>
            <button
              @click="showAddUserModal = true"
              class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
            >
              + Add Staff / Inspector
            </button>
          </div>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">USER NAME &amp; EMAIL</th>
                  <th class="px-5 py-3.5">ROLE</th>
                  <th class="px-5 py-3.5">INDOS / AFFILIATION</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5">JOINED</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="u in filteredUsers" :key="u.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ u.name }}</div>
                    <div class="text-[11px] text-slate-500">{{ u.email }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border"
                      :class="roleBadgeClass(u.role)"
                    >
                      {{ u.role }}
                    </span>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">{{ u.indos || u.institute || '—' }}</td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-0.5 rounded-full font-bold text-[10px] border"
                      :class="u.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'"
                    >
                      {{ u.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-slate-500">{{ u.joined }}</td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      class="text-xs font-bold text-blue-700 hover:text-blue-800"
                      @click="u.status = u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE'"
                    >
                      {{ u.status === 'ACTIVE' ? 'Suspend' : 'Reactivate' }}
                    </button>
                    <button
                      @click="resetUserAuth(u.name)"
                      class="text-xs font-bold text-slate-500 hover:text-slate-800"
                    >
                      Reset 2FA
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Add Staff Modal -->
        <div
          v-if="showAddUserModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
          <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 class="font-black text-slate-900 text-base">Onboard Regulatory Officer</h4>
              <button
                @click="showAddUserModal = false"
                class="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="space-y-3.5 text-xs">
              <div>
                <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">OFFICER FULL NAME</label>
                <input
                  v-model="newUser.name"
                  type="text"
                  placeholder="e.g. Inspector K. Ramanathan"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                />
              </div>
              <div>
                <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">OFFICIAL EMAIL</label>
                <input
                  v-model="newUser.email"
                  type="email"
                  placeholder="e.g. k.ramanathan@dgs.gov.in"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                />
              </div>
              <div>
                <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">REGULATORY ROLE</label>
                <select
                  v-model="newUser.role"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
                >
                  <option value="SUPER_ADMIN">DG Central Administrator</option>
                  <option value="ADMIN">Statutory MTI Auditor</option>
                  <option value="INSTITUTE_ADMIN">Academy Registrar Liaison</option>
                </select>
              </div>
            </div>
            <div class="pt-2 flex justify-end gap-3">
              <button
                @click="showAddUserModal = false"
                class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                @click="createUser"
                class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 5: FINANCIAL OVERSIGHT (DUAL INVOICING & COMMISSIONS)    -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'finance'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">FINANCIAL AUDIT &amp; SETTLEMENT</div>
            <h3 class="text-lg font-black text-slate-900">Dual-Invoicing Ledger &amp; Institute Commission Reports</h3>
          </div>
          <div class="flex items-center gap-2.5">
            <button
              @click="exportFinancialReport"
              class="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition shadow-2xs flex items-center gap-1.5"
            >
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export GST/TDS Report (CSV)</span>
            </button>
            <button
              @click="settleAllPendingEscrows"
              class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center gap-1.5"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Settle All Ready Escrows</span>
            </button>
          </div>
        </div>

        <!-- Ledger Table -->
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">BOOKING REF</th>
                  <th class="px-5 py-3.5">STUDENT &amp; COURSE</th>
                  <th class="px-5 py-3.5">TOTAL GMV</th>
                  <th class="px-5 py-3.5">COMMISSION (10%)</th>
                  <th class="px-5 py-3.5">GST 18% &amp; TDS 1%</th>
                  <th class="px-5 py-3.5">INSTITUTE PAYOUT</th>
                  <th class="px-5 py-3.5">ESCROW STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="item in ledgerRecords" :key="item.ref" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">{{ item.ref }}</td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ item.student }}</div>
                    <div class="text-[11px] text-slate-500">{{ item.course }}</div>
                  </td>
                  <td class="px-5 py-4 font-bold text-slate-900 font-mono">₹{{ item.amount.toLocaleString() }}</td>
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">₹{{ item.commission.toLocaleString() }}</td>
                  <td class="px-5 py-4 font-mono text-[11px] text-slate-500">
                    GST: ₹{{ item.gst }} &bull; TDS: ₹{{ item.tds }}
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-emerald-600">
                    ₹{{ item.payout.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold border"
                      :class="item.status === 'SETTLED' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'"
                    >
                      {{ item.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right">
                    <button
                      v-if="item.status === 'ESCROW_HELD'"
                      @click="releaseEscrow(item)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-2xs"
                    >
                      Release Payout &rarr;
                    </button>
                    <span v-else class="text-slate-400 font-mono text-xs">UTR-991240</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 6: MODERATION OF REVIEWS, CONTENT & COMPLAINTS           -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'moderation'" class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">QUALITY ASSURANCE &amp; GRIEVANCE DESK</div>
            <h3 class="text-lg font-black text-slate-900">Monitoring &amp; Dispute Arbitration Console</h3>
          </div>
          <span class="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
            ● {{ complaintDesk.filter(t => t.status !== 'RESOLVED').length }} Open Case Tickets
          </span>
        </div>

        <!-- 3-Column Split -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Col 1: Flagged Forum Content -->
          <div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <span class="font-black text-xs text-slate-900">Flagged Community Content</span>
              <span class="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {{ reportedContent.length }} Reports
              </span>
            </div>
            <div class="space-y-3">
              <div
                v-for="flag in reportedContent"
                :key="flag.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2"
              >
                <div class="text-xs font-black text-slate-900">{{ flag.title }}</div>
                <div class="text-[11px] text-rose-600 font-medium">Reason: {{ flag.reason }}</div>
                <div class="text-[10px] text-slate-500 font-mono">Author: {{ flag.author }} (INDoS: {{ flag.indos }})</div>
                <div class="flex gap-2 pt-1">
                  <button
                    class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-600 text-white"
                    @click="removeReport(flag.id)"
                  >
                    Dismiss
                  </button>
                  <button
                    class="px-2.5 py-1 rounded-lg text-[10px] font-bold border border-rose-200 text-rose-600 hover:bg-rose-50"
                    @click="removeReport(flag.id)"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 2: Course Reviews Moderation -->
          <div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <span class="font-black text-xs text-slate-900">Cadet Academy Reviews</span>
              <span class="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Verified INDoS
              </span>
            </div>
            <div class="space-y-3">
              <div
                v-for="rev in studentReviews"
                :key="rev.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-slate-900">{{ rev.course }}</span>
                  <span class="text-xs text-amber-500 font-bold inline-flex items-center gap-1 font-mono">
                    <svg class="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span>{{ rev.rating }}.0</span>
                  </span>
                </div>
                <div class="text-[11px] text-slate-600 leading-relaxed italic">"{{ rev.comment }}"</div>
                <div class="text-[10px] text-slate-400">By {{ rev.student }} &bull; {{ rev.institute }}</div>
                <div class="flex gap-2 pt-1">
                  <span class="text-[10px] font-bold text-emerald-600 inline-flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verified INDoS Review</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 3: Grievance & Complaint Desk -->
          <div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <span class="font-black text-xs text-slate-900">Grievance &amp; Dispute Desk</span>
              <span class="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {{ complaintDesk.filter(t => t.status !== 'RESOLVED').length }} Active
              </span>
            </div>
            <div class="space-y-3">
              <div
                v-for="tkt in complaintDesk"
                :key="tkt.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-blue-700">{{ tkt.id }}</span>
                  <span
                    class="text-[9px] px-2 py-0.5 rounded-full font-bold border"
                    :class="tkt.priority === 'HIGH' ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-amber-50 text-amber-700 border-amber-200'"
                  >
                    {{ tkt.priority }}
                  </span>
                </div>
                <div class="text-xs font-bold text-slate-900">{{ tkt.subject }}</div>
                <div class="text-[10px] text-slate-500">Filed by: {{ tkt.filer }}</div>
                <div class="flex items-center justify-between pt-1">
                  <span
                    class="text-[10px] font-mono font-bold"
                    :class="tkt.status === 'RESOLVED' ? 'text-emerald-600' : 'text-amber-600'"
                  >
                    {{ tkt.status }}
                  </span>
                  <button
                    v-if="tkt.status !== 'RESOLVED'"
                    class="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-2xs"
                    @click="tkt.status = 'RESOLVED'"
                  >
                    Resolve &amp; Refund
                  </button>
                  <span v-else class="text-[10px] font-mono text-emerald-600 inline-flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Arbitrated</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

    <!-- ── AUDIT INSTITUTE MODAL ──────────────────────────────────────── -->
    <div
      v-if="auditModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <div class="text-[10px] font-mono font-bold text-blue-700 uppercase">COMPREHENSIVE INSPECTION PROGRAMME (CIP)</div>
            <h4 class="font-black text-slate-900 text-lg">{{ selectedInstitute?.name }}</h4>
          </div>
          <button
            @click="auditModalOpen = false"
            class="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-3.5 text-xs text-slate-700">
          <div class="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span class="text-[10px] font-bold text-slate-400 block uppercase">DG SHIPPING APPROVAL</span>
              <span class="font-mono font-bold text-blue-700">{{ selectedInstitute?.dgNo }}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-slate-400 block uppercase">CAMPUS LOCATION</span>
              <span class="font-bold text-slate-800">{{ selectedInstitute?.city }}, {{ selectedInstitute?.state }}</span>
            </div>
          </div>

          <div>
            <span class="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1.5">SIMULATOR &amp; LAB INVENTORY AUDIT</span>
            <div class="space-y-1.5">
              <div class="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                <span class="inline-flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kongsberg / Transas 360° Bridge Simulator</span>
                </span>
                <span class="font-mono text-[11px]">DNV Class A</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                <span class="inline-flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5-Console Engine Room Simulator (ERS)</span>
                </span>
                <span class="font-mono text-[11px]">MAN B&amp;W Slow Speed</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                <span class="inline-flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4-Deck Steel Mock Ship Fire Field</span>
                </span>
                <span class="font-mono text-[11px]">SOLAS Standard</span>
              </div>
            </div>
          </div>

          <div>
            <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">CIP AUDIT GRADE ASSIGNMENT</label>
            <select
              v-model="auditGrade"
              class="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold outline-none"
            >
              <option value="GRADE A1">Grade A1 Outstanding (95-100% Score)</option>
              <option value="GRADE A2">Grade A2 Very Good (85-94% Score)</option>
              <option value="GRADE B">Grade B Satisfactory</option>
            </select>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="auditModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
          <button
            @click="confirmInstituteAudit"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            Approve &amp; Issue CIP Certificate
          </button>
        </div>
      </div>
    </div>

    <!-- ── REVIEW COURSE MODAL ────────────────────────────────────────── -->
    <div
      v-if="courseModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-xl w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <div class="text-[10px] font-mono font-bold text-blue-700 uppercase">IMO MODEL CURRICULUM AUDIT</div>
            <h4 class="font-black text-slate-900 text-lg">{{ selectedCourse?.title }}</h4>
          </div>
          <button
            @click="courseModalOpen = false"
            class="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-3.5 text-xs text-slate-700">
          <div class="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span class="text-[10px] font-bold text-slate-400 block uppercase">IMO STCW CODE</span>
              <span class="font-mono font-bold text-blue-700">{{ selectedCourse?.code }}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-slate-400 block uppercase">TUITION FEE CAP</span>
              <span class="font-mono font-bold text-slate-800">₹{{ selectedCourse?.price.toLocaleString() }}</span>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold">
              <span>Classroom / Practical Split:</span>
              <span class="font-mono">40% Theory / 60% Simulator</span>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold">
              <span>Candidate-to-Console Ratio:</span>
              <span class="font-mono">Max 3 Cadets / Console</span>
            </div>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="courseModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            @click="confirmCourseApproval"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            Statutory Approval &amp; Batch Sync
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({ middleware: ['auth'] });
useHead({ title: 'DG Governance & Admin Console · The Seafu' });

const authStore = useAuthStore();
onMounted(() => { authStore.initAuth(); });

// Desktop-only enforcement
const overrideDesktop = ref(false);
const isSmallScreen = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined') {
    isSmallScreen.value = window.innerWidth < 1024;
    window.addEventListener('resize', () => {
      isSmallScreen.value = window.innerWidth < 1024;
    });
  }
});

// Navigation state
const activeTab = ref('approvals');
const approvalSubTab = ref('INSTITUTES');
const showCmsModal = ref(false);
const showAddUserModal = ref(false);
const auditModalOpen = ref(false);
const courseModalOpen = ref(false);

const userSearch = ref('');
const userRoleFilter = ref('ALL');

const selectedInstitute = ref<any>(null);
const auditGrade = ref('GRADE A1');
const selectedCourse = ref<any>(null);

const pendingTotal = computed(() => {
  return institutes.value.filter(i => i.verificationStatus === 'PENDING').length +
         courses.value.filter(c => c.approvalStatus === 'PENDING_APPROVAL').length +
         pendingCerts.value.filter(c => c.status === 'PENDING').length;
});

const adminTabs = computed(() => [
  { id: 'approvals', label: 'Approval Workflows', icon: 'building', badge: String(pendingTotal.value) },
  { id: 'analytics', label: 'Advanced Analytics', icon: 'chart', badge: 'Live' },
  { id: 'cms', label: 'Website CMS', icon: 'cms', badge: null },
  { id: 'users', label: 'User Management', icon: 'users', badge: '18.4K' },
  { id: 'finance', label: 'Financial Oversight', icon: 'finance', badge: '10%' },
  { id: 'moderation', label: 'Moderation & Complaints', icon: 'shield', badge: '3' },
]);

// ─── 1. APPROVALS WORKFLOW DATA ──────────────────────────────────────────
const institutes = ref([
  {
    id: 'inst-01',
    name: 'Southern Maritime Institute of Technology',
    dgNo: 'DG/TR/TN/2024/042',
    city: 'Chennai',
    state: 'Tamil Nadu',
    email: 'admissions@smit.edu',
    phone: '+91 44 2839 1000',
    courses: 6,
    verificationStatus: 'PENDING',
  },
  {
    id: 'inst-02',
    name: 'Goa Offshore & Safety Training Center',
    dgNo: 'DG/TR/GA/2024/019',
    city: 'Panaji',
    state: 'Goa',
    email: 'contact@goaoffshore.in',
    phone: '+91 832 249 2000',
    courses: 4,
    verificationStatus: 'PENDING',
  },
  {
    id: 'inst-03',
    name: 'Maritime Training Academy Mumbai',
    dgNo: 'DG/TR/MH/2023/001',
    city: 'Mumbai',
    state: 'Maharashtra',
    email: 'info@mtamumbai.in',
    phone: '+91 22 6120 4000',
    courses: 12,
    verificationStatus: 'VERIFIED',
  },
]);

const courses = ref([
  {
    id: 'crs-01',
    title: 'Advanced Fire Fighting (AFF)',
    code: 'STCW A-VI/3',
    institute: 'Southern Maritime Institute',
    category: 'ADVANCED STCW',
    duration: 5,
    price: 8500,
    approvalStatus: 'PENDING_APPROVAL',
  },
  {
    id: 'crs-02',
    title: 'High Voltage Safety & Switchgear',
    code: 'STCW A-III/1-2',
    institute: 'Goa Offshore Safety',
    category: 'SIMULATOR',
    duration: 5,
    price: 14500,
    approvalStatus: 'PENDING_APPROVAL',
  },
  {
    id: 'crs-03',
    title: 'ECDIS Electronic Navigation',
    code: 'STCW A-II/1',
    institute: 'Maritime Training Academy Mumbai',
    category: 'SIMULATOR',
    duration: 5,
    price: 11000,
    approvalStatus: 'APPROVED',
  },
]);

const pendingCerts = ref([
  {
    id: 'crt-01',
    candidate: 'Capt. Arvind Nair',
    indos: '08ZL9431',
    course: 'Advanced Fire Fighting (AFF)',
    certNo: 'IND-AFF-7714-ECDSA',
    institute: 'Maritime Training Academy Mumbai',
    attendance: 100,
    score: 94,
    status: 'PENDING',
  },
  {
    id: 'crt-02',
    candidate: 'Ramesh Kumar',
    indos: '149028',
    course: 'PSCRB Survival Craft',
    certNo: 'IND-PSC-8812-ECDSA',
    institute: 'Maritime Training Academy Mumbai',
    attendance: 96,
    score: 88,
    status: 'PENDING',
  },
]);

function openInstituteAuditModal(inst: any) {
  selectedInstitute.value = inst;
  auditModalOpen.value = true;
}

function confirmInstituteAudit() {
  if (selectedInstitute.value) {
    selectedInstitute.value.verificationStatus = 'VERIFIED';
  }
  auditModalOpen.value = false;
}

function openCourseModal(c: any) {
  selectedCourse.value = c;
  courseModalOpen.value = true;
}

function confirmCourseApproval() {
  if (selectedCourse.value) {
    selectedCourse.value.approvalStatus = 'APPROVED';
  }
  courseModalOpen.value = false;
}

function signCertificate(cert: any) {
  cert.status = 'SIGNED';
  alert(`Cryptographic ECDSA SHA-256 seal signed for ${cert.candidate} (${cert.certNo}). Verified in national registry.`);
}

// ─── 2. ADVANCED ANALYTICS DATA ──────────────────────────────────────────
const funnelStages = [
  { name: 'Course Directory Impressions', count: 48200, rate: 100 },
  { name: 'Course Detail Page Views', count: 29400, rate: 61.0 },
  { name: '10-Min Atomic Seat Locks', count: 8150, rate: 27.7 },
  { name: 'Payment Captured & Tax Invoiced', count: 6820, rate: 83.7 },
  { name: 'STCW Certificate Issued & Signed', count: 6540, rate: 95.9 },
];

const monthlyRevenue = [
  { month: 'May 2026', gmv: 3400000, commission: 340000, gst: 61200, tds: 3400 },
  { month: 'Jun 2026', gmv: 4100000, commission: 410000, gst: 73800, tds: 4100 },
  { month: 'Jul 2026', gmv: 5200000, commission: 520000, gst: 93600, tds: 5200 },
  { month: 'Aug 2026', gmv: 5800000, commission: 580000, gst: 104400, tds: 5800 },
  { month: 'Sep 2026', gmv: 6300000, commission: 630000, gst: 113400, tds: 6300 },
];

// ─── 3. CMS DATA ─────────────────────────────────────────────────────────
const cmsPosts = ref([
  {
    id: 'cms-1',
    title: 'DG Shipping Advisory: Revised Minimum Safe Sea-Time Criteria for Second Mate FG Examinations 2026',
    category: 'CIRCULAR',
    targetAudience: 'ALL USERS',
    author: 'Admin DG Maritime',
    views: 4210,
    isPublished: true,
  },
  {
    id: 'cms-2',
    title: 'Pre-Sea Cadet Batch 54 Intake (BS Nautical Science & Marine Engineering) Open',
    category: 'ADMISSION',
    targetAudience: 'SEAFARERS ONLY',
    author: 'Admissions Desk',
    views: 6890,
    isPublished: true,
  },
  {
    id: 'cms-3',
    title: 'MMD Mumbai Announces Dates for October 2026 Chief Mate Oral Assessments',
    category: 'EXAM_SCHEDULE',
    targetAudience: 'SEAFARERS ONLY',
    author: 'Exam Controller',
    views: 3150,
    isPublished: true,
  },
]);

const newArticle = ref({
  title: '',
  category: 'CIRCULAR',
  targetAudience: 'ALL USERS',
  content: '',
});

function publishArticle() {
  if (!newArticle.value.title) return;
  cmsPosts.value.unshift({
    id: `cms-${Date.now()}`,
    title: newArticle.value.title,
    category: newArticle.value.category,
    targetAudience: newArticle.value.targetAudience,
    author: 'DG Authority Super Admin',
    views: 0,
    isPublished: true,
  });
  showCmsModal.value = false;
  newArticle.value.title = '';
  newArticle.value.content = '';
}

function deletePost(id: string) {
  cmsPosts.value = cmsPosts.value.filter(p => p.id !== id);
}

// ─── 4. FULL USER MANAGEMENT DATA ────────────────────────────────────────
const users = ref([
  { id: 'usr-1', name: 'Capt. Arvind Nair', email: 'arvind.nair@seafu.in', role: 'SEAFARER', indos: '08ZL9431', institute: null, status: 'ACTIVE', joined: '12 Jan 2026' },
  { id: 'usr-2', name: 'Ramesh Kumar', email: 'ramesh.k@gmail.com', role: 'SEAFARER', indos: '149028', institute: null, status: 'ACTIVE', joined: '04 Feb 2026' },
  { id: 'usr-3', name: 'Capt. Rajesh Varma', email: 'registrar@mtamumbai.in', role: 'INSTITUTE_ADMIN', indos: null, institute: 'Maritime Training Academy Mumbai', status: 'ACTIVE', joined: '10 Dec 2025' },
  { id: 'usr-4', name: 'Deepak Sharma', email: 'deepak.s@smit.edu', role: 'INSTITUTE_ADMIN', indos: null, institute: 'Southern Maritime Institute', status: 'ACTIVE', joined: '15 Jan 2026' },
  { id: 'usr-5', name: 'Compliance Officer DGS', email: 'admin@dgs.gov.in', role: 'SUPER_ADMIN', indos: null, institute: 'DG Shipping Govt of India', status: 'ACTIVE', joined: '01 Nov 2025' },
]);

const newUser = ref({
  name: '',
  email: '',
  role: 'ADMIN',
});

function createUser() {
  if (!newUser.value.name || !newUser.value.email) return;
  users.value.unshift({
    id: `usr-${Date.now()}`,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    indos: null,
    institute: 'DG Maritime Compliance Bureau',
    status: 'ACTIVE',
    joined: 'Just now',
  });
  showAddUserModal.value = false;
  newUser.value.name = '';
  newUser.value.email = '';
}

function resetUserAuth(userName: string) {
  alert(`Two-factor authentication and credentials reset link dispatched to ${userName}.`);
}

const filteredUsers = computed(() => {
  return users.value.filter(u => {
    const matchesRole = userRoleFilter.value === 'ALL' || u.role === userRoleFilter.value;
    const matchesSearch = !userSearch.value ||
      u.name.toLowerCase().includes(userSearch.value.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.value.toLowerCase()) ||
      (u.indos && u.indos.toLowerCase().includes(userSearch.value.toLowerCase()));
    return matchesRole && matchesSearch;
  });
});

// ─── 5. FINANCIAL OVERSIGHT DATA ─────────────────────────────────────────
const ledgerRecords = ref([
  {
    ref: 'SF-2026-0922-771',
    student: 'Arvind Nair (08ZL9431)',
    course: 'Advanced Fire Fighting',
    amount: 8500,
    commission: 850,
    gst: 153,
    tds: 8.5,
    payout: 7650,
    status: 'ESCROW_HELD',
  },
  {
    ref: 'SF-2026-0918-402',
    student: 'Ramesh Kumar (149028)',
    course: 'PSCRB Survival Craft',
    amount: 9200,
    commission: 920,
    gst: 165.6,
    tds: 9.2,
    payout: 8280,
    status: 'SETTLED',
  },
  {
    ref: 'SF-2026-0910-119',
    student: 'Suresh Pillai (952018)',
    course: 'Medical First Aid (MFA)',
    amount: 6500,
    commission: 650,
    gst: 117,
    tds: 6.5,
    payout: 5850,
    status: 'SETTLED',
  },
]);

function releaseEscrow(item: any) {
  item.status = 'SETTLED';
  alert(`90% Escrow payout of ₹${item.payout.toLocaleString()} released to academy bank gateway for ${item.ref}.`);
}

function settleAllPendingEscrows() {
  ledgerRecords.value.forEach(l => {
    if (l.status === 'ESCROW_HELD') l.status = 'SETTLED';
  });
  alert('All pending escrow transactions have been validated and released via NEFT/RTGS gateway.');
}

function exportFinancialReport() {
  alert('Generating certified dual-invoicing GST & TDS compliance audit ledger (CSV)...');
}

// ─── 6. MODERATION & COMPLAINTS DATA ─────────────────────────────────────
const reportedContent = ref([
  { id: 'rep-1', title: 'Post: Fake sea-time agent claiming MMD bypass', reason: 'Regulatory Fraud / Misinformation', author: 'Anonymous Cadet', indos: 'Pending' },
  { id: 'rep-2', title: 'Reply: Inaccurate SOLAS regulation quote in AFF forum', reason: 'Technical Inaccuracy', author: 'Rahul Menon', indos: '119201' },
]);

function removeReport(id: string) {
  reportedContent.value = reportedContent.value.filter(r => r.id !== id);
}

const studentReviews = ref([
  { id: 'rev-1', course: 'Advanced Fire Fighting', rating: 5, comment: 'Exceptional smoke chamber training and breathing apparatus practical drills.', student: 'Rajesh Varma (08ZL9431)', institute: 'MTAM' },
  { id: 'rev-2', course: 'ECDIS Navigation', rating: 4, comment: 'High quality Kongsberg simulator consoles. Instructors were active Master Mariners.', student: 'Kiran Pillai (77192)', institute: 'CMI' },
]);

const complaintDesk = ref([
  { id: 'TKT-991', subject: 'Refund dispute for cancelled batch AFF-2026-04', filer: 'Deepak Sharma', priority: 'HIGH', status: 'INVESTIGATING' },
  { id: 'TKT-988', subject: 'Seat lock expired during banking OTP transaction', filer: 'Mohd. Imran', priority: 'MEDIUM', status: 'RESOLVED' },
  { id: 'TKT-985', subject: 'Rotterdam Port State Control secondary hash verification', filer: 'Capt. Arvind Nair', priority: 'LOW', status: 'RESOLVED' },
]);

// Helpers
function statusPillClass(status: string): string {
  const map: Record<string, string> = {
    VERIFIED: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    APPROVED: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    PENDING: 'bg-amber-50 text-amber-700 border-amber-200',
    PENDING_APPROVAL: 'bg-amber-50 text-amber-700 border-amber-200',
    REJECTED: 'bg-rose-50 text-rose-700 border-rose-200',
    SUSPENDED: 'bg-slate-100 text-slate-600 border-slate-200',
  };
  return map[status] || 'bg-slate-100 text-slate-600 border-slate-200';
}

function roleBadgeClass(role: string): string {
  const map: Record<string, string> = {
    SUPER_ADMIN: 'bg-purple-50 text-purple-700 border-purple-200',
    ADMIN: 'bg-blue-50 text-blue-700 border-blue-200',
    INSTITUTE_ADMIN: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    SEAFARER: 'bg-sky-50 text-sky-700 border-sky-200',
  };
  return map[role] || 'bg-slate-100 text-slate-600 border-slate-200';
}
</script>
