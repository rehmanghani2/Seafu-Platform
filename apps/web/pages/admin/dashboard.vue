<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased pb-24">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- DESKTOP ENFORCEMENT OVERLAY (BLOCKS MOBILE ACCESS)              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div v-if="!overrideDesktop && isSmallScreen"
      class="fixed inset-0 z-50 flex items-center justify-center p-6 text-center bg-slate-900/60 backdrop-blur-md">
      <div class="max-w-md p-8 rounded-2xl border border-slate-200 bg-white shadow-xl space-y-4">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-xl">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="text-xs font-mono tracking-widest text-cyan-400 uppercase">
          DESKTOP WORKSTATION REQUIRED
        </div>
        <h2 class="text-xl font-bold text-white">
          Secure Regulatory Terminal
        </h2>
        <p class="text-xs leading-relaxed" style="color:#64748b;">
          The DG Shipping Platform Governance &amp; Regulatory Console contains sensitive financial ledgers, cryptographic signing workflows, and candidate registries. Access is restricted to desktop monitors (min. 1280px).
        </p>
        <div class="pt-2 flex flex-col gap-2">
          <NuxtLink to="/" class="py-2.5 px-4 rounded-xl text-xs font-bold transition"
            style="background:#0A1936; color:#fff;">
            Return to Public Portal
          </NuxtLink>
          <button @click="overrideDesktop = true" class="text-[11px] underline" style="color:#64748b;">
            Override (Developer Testing Mode)
          </button>
        </div>
      </div>
    </div>

    <!-- ── TOP STATUTORY GOVERNANCE BAR ────────────────────────────────── -->
    <div class="border-b border-slate-200 bg-white px-6 py-4 shadow-xs">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"><img src="/logo-crest.png" alt="The Seafu" class="w-10 h-10 object-contain rounded-full shadow-xs" /></div>
          <div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full animate-pulse" style="background:#00E5FF;"></div>
              <span class="text-xs font-mono tracking-widest font-bold" style="color:#1d4ed8;">
                DG SHIPPING MARITIME AUTHORITY · CENTRAL GOVERNANCE CONSOLE
              </span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                style="background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b40;">
                DESKTOP TERMINAL 101
              </span>
            </div>
            <h1 class="text-xl font-black text-slate-900 mt-0.5">
              Platform Governance, Auditing &amp; Oversight Node
            </h1>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs font-mono px-3 py-1.5 rounded border font-bold"
            style="background:#eff6ff; border-color:#93c5fd; color:#1d4ed8;">
            SUPER_ADMIN
          </span>
          <NuxtLink to="/" class="text-xs font-bold px-3 py-1.5 rounded-lg border transition"
            style="border-color:#0f172a; color:#64748b;">
            Public Portal
          </NuxtLink>
          <button @click="authStore.logout()"
            class="text-xs font-bold px-3.5 py-1.5 rounded-lg border transition"
            style="border-color:#dc262640; color:#f87171;">
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-6 space-y-6">

      <!-- ── EXECUTIVE STATS STRIP ────────────────────────────────────── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card 1: Gross GMV & Dual Invoices -->
        <div class="rounded-xl p-5 border" style="background:#ffffff; border-color:#0f172a;">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono tracking-wider" style="color:#64748b;">GROSS BOOKINGS GMV</span>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold" style="background:#22c55e20; color:#22c55e;">DUAL INVOICED</span>
          </div>
          <div class="text-3xl font-black mt-2 font-mono text-slate-900">₹2,48,00,000</div>
          <div class="text-xs mt-1" style="color:#64748b;">
            Commission (10%): <strong style="color:#1d4ed8;">₹24.80 L</strong> · TDS: 1%
          </div>
        </div>

        <!-- Card 2: Approvals Backlog -->
        <div class="rounded-xl p-5 border" style="background:#ffffff; border-color:#0f172a;">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono tracking-wider" style="color:#64748b;">APPROVALS BACKLOG</span>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold" style="background:#f59e0b20; color:#f59e0b;">ACTION REQ</span>
          </div>
          <div class="text-3xl font-black mt-2 font-mono" style="color:#f59e0b;">{{ pendingTotal }}</div>
          <div class="text-xs mt-1" style="color:#64748b;">
            {{ institutes.filter(i=>i.verificationStatus==='PENDING').length }} Inst. · {{ courses.filter(c=>c.approvalStatus==='PENDING_APPROVAL').length }} Courses · {{ pendingCerts.length }} Certs
          </div>
        </div>

        <!-- Card 3: Platform Users -->
        <div class="rounded-xl p-5 border" style="background:#ffffff; border-color:#0f172a;">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono tracking-wider" style="color:#64748b;">REGISTERED USERS</span>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold" style="background:#eff6ff; color:#1d4ed8;">ACTIVE</span>
          </div>
          <div class="text-3xl font-black mt-2 font-mono text-slate-900">18,462</div>
          <div class="text-xs mt-1" style="color:#64748b;">
            18,420 Seafarers · 42 Maritime Academies
          </div>
        </div>

        <!-- Card 4: PSC Integrity -->
        <div class="rounded-xl p-5 border" style="background:#ffffff; border-color:#0f172a;">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono tracking-wider" style="color:#64748b;">PSC ZERO-DEFICIENCY RATE</span>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold" style="background:#8b5cf620; color:#a78bfa;">ECDSA VERIFIED</span>
          </div>
          <div class="text-3xl font-black mt-2 font-mono" style="color:#22c55e;">99.8%</div>
          <div class="text-xs mt-1" style="color:#64748b;">Zero Paris/Tokyo MOU credential detentions</div>
        </div>
      </div>

      <!-- ── MULTI-MODULE TAB NAVIGATION ──────────────────────────────── -->
      <div class="flex items-center gap-2 border-b pb-3 overflow-x-auto" style="border-color:#0f172a;">
        <button v-for="tab in adminTabs" :key="tab.id"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0"
          :style="activeTab === tab.id
            ? 'background:#0A1936; color:#fff;'
            : 'background:#ffffff; color:#64748b; border:1px solid #1e3a5f;'"
          @click="activeTab = tab.id">
          <span>{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
          <span v-if="tab.badge" class="px-1.5 py-0.2 rounded-full text-[10px] font-mono"
            :style="activeTab === tab.id ? 'background:#f8fafc; color:#1d4ed8;' : 'background:#dbeafe; color:#1d4ed8;'">
            {{ tab.badge }}
          </span>
        </button>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 1: APPROVAL WORKFLOWS (INSTITUTES, COURSES, CERTS)       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'approvals'" class="space-y-6">
        <!-- Sub-navigation buttons -->
        <div class="flex gap-2">
          <button v-for="sub in ['INSTITUTES', 'COURSES', 'CERTIFICATES']" :key="sub"
            class="px-4 py-2 rounded-lg text-xs font-bold transition"
            :style="approvalSubTab === sub
              ? 'background:#eff6ff; color:#1d4ed8; border:1px solid #0369A1;'
              : 'background:#ffffff; color:#64748b; border:1px solid #1e3a5f;'"
            @click="approvalSubTab = sub">
            {{ sub }} APPROVALS
          </button>
        </div>

        <!-- 1A. Institute Approvals -->
        <div v-if="approvalSubTab === 'INSTITUTES'" class="rounded-xl border overflow-hidden"
          style="background:#ffffff; border-color:#0f172a;">
          <div class="p-4 border-b flex items-center justify-between" style="border-color:#0f172a;">
            <div class="text-sm font-bold text-slate-900">DG Shipping Training Academy Approvals Queue</div>
            <span class="text-xs font-mono" style="color:#1d4ed8;">{{ institutes.length }} Registered</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">INSTITUTE NAME &amp; DETAILS</th>
                  <th class="px-5 py-3.5">DG APPROVAL NO.</th>
                  <th class="px-5 py-3.5">CAMPUS LOCATION</th>
                  <th class="px-5 py-3.5">ACTIVE COURSES</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">GOVERNANCE ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="inst in institutes" :key="inst.id" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ inst.name }}</div>
                    <div class="text-[11px]" style="color:#64748b;">{{ inst.email }} · {{ inst.phone }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold" style="color:#1d4ed8;">{{ inst.dgNo }}</td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ inst.city }}, {{ inst.state }}</td>
                  <td class="px-5 py-4 font-mono" style="color:#64748b;">{{ inst.courses }} Courses</td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :style="statusPillStyle(inst.verificationStatus)">
                      {{ inst.verificationStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button v-if="inst.verificationStatus !== 'VERIFIED'"
                      class="px-3 py-1.5 rounded font-bold transition"
                      style="background:#22c55e; color:#fff;"
                      @click="inst.verificationStatus = 'VERIFIED'">
                      ✓ Approve
                    </button>
                    <button v-if="inst.verificationStatus !== 'REJECTED'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#dc2626; color:#f87171;"
                      @click="inst.verificationStatus = 'REJECTED'">
                      ✕ Reject
                    </button>
                    <button v-if="inst.verificationStatus === 'VERIFIED'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#f59e0b50; color:#f59e0b;"
                      @click="inst.verificationStatus = 'SUSPENDED'">
                      ⚠️ Suspend
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 1B. Course Approvals -->
        <div v-if="approvalSubTab === 'COURSES'" class="rounded-xl border overflow-hidden"
          style="background:#ffffff; border-color:#0f172a;">
          <div class="p-4 border-b flex items-center justify-between" style="border-color:#0f172a;">
            <div class="text-sm font-bold text-slate-900">STCW Course Syllabus &amp; Batch Quota Approvals</div>
            <span class="text-xs font-mono" style="color:#1d4ed8;">{{ courses.length }} Curriculums</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">COURSE TITLE &amp; CODE</th>
                  <th class="px-5 py-3.5">INSTITUTE</th>
                  <th class="px-5 py-3.5">CATEGORY</th>
                  <th class="px-5 py-3.5">DURATION &amp; FEE</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">DECISION</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="c in courses" :key="c.id" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ c.title }}</div>
                    <div class="font-mono text-[11px]" style="color:#1d4ed8;">{{ c.code }}</div>
                  </td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ c.institute }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px]" style="background:#eff6ff; color:#1d4ed8;">
                      {{ c.category }}
                    </span>
                  </td>
                  <td class="px-5 py-4">
                    <div class="text-white">{{ c.duration }} Days</div>
                    <div class="font-bold text-slate-300">₹{{ c.price.toLocaleString() }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :style="statusPillStyle(c.approvalStatus)">
                      {{ c.approvalStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button v-if="c.approvalStatus !== 'APPROVED'"
                      class="px-3 py-1.5 rounded font-bold transition"
                      style="background:#22c55e; color:#fff;"
                      @click="c.approvalStatus = 'APPROVED'">
                      ✓ Approve
                    </button>
                    <button v-if="c.approvalStatus !== 'REJECTED'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#dc2626; color:#f87171;"
                      @click="c.approvalStatus = 'REJECTED'">
                      ✕ Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 1C. Certificate Issuance Approvals -->
        <div v-if="approvalSubTab === 'CERTIFICATES'" class="rounded-xl border overflow-hidden"
          style="background:#ffffff; border-color:#0f172a;">
          <div class="p-4 border-b flex items-center justify-between" style="border-color:#0f172a;">
            <div>
              <div class="text-sm font-bold text-slate-900">Certificate Issuance &amp; ECDSA Cryptographic Signing Desk</div>
              <div class="text-xs" style="color:#64748b;">Review candidate training attendance and assessment scores before signing</div>
            </div>
            <span class="text-xs font-mono" style="color:#22c55e;">{{ pendingCerts.length }} Pending Sign-Off</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">CANDIDATE / INDOS</th>
                  <th class="px-5 py-3.5">COURSE &amp; CERT NUMBER</th>
                  <th class="px-5 py-3.5">ACADEMY</th>
                  <th class="px-5 py-3.5">ATTENDANCE</th>
                  <th class="px-5 py-3.5">EXAM SCORE</th>
                  <th class="px-5 py-3.5 text-right">ECDSA SIGNING</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="cert in pendingCerts" :key="cert.id" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ cert.candidate }}</div>
                    <div class="font-mono text-[11px]" style="color:#1d4ed8;">INDoS: {{ cert.indos }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="text-white font-medium">{{ cert.course }}</div>
                    <div class="font-mono text-[10px]" style="color:#64748b;">Ref: {{ cert.certNo }}</div>
                  </td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ cert.institute }}</td>
                  <td class="px-5 py-4">
                    <span class="font-bold font-mono" :style="cert.attendance >= 90 ? 'color:#22c55e;' : 'color:#f59e0b;'">
                      {{ cert.attendance }}%
                    </span>
                    <div class="text-[10px]" style="color:#64748b;">Biometric Verified</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="font-bold font-mono text-white">{{ cert.score }}%</span>
                    <span class="ml-1 text-[10px] px-1.5 py-0.5 rounded font-bold" style="background:#22c55e20; color:#22c55e;">PASS</span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button v-if="cert.status === 'PENDING'"
                      class="px-3.5 py-1.5 rounded font-bold transition flex-inline items-center gap-1"
                      style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
                      @click="cert.status = 'SIGNED'">
                      🔐 Sign &amp; Issue
                    </button>
                    <span v-else class="px-3 py-1 rounded text-xs font-mono font-bold"
                      style="background:#22c55e20; color:#22c55e;">
                      ✓ ECDSA SIGNED
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
        <div class="rounded-xl border p-6" style="background:#ffffff; border-color:#0f172a;">
          <div class="flex items-center justify-between mb-6">
            <div>
              <div class="text-xs font-mono tracking-widest text-cyan-400">SEAFARER JOURNEY ANALYTICS</div>
              <h3 class="text-lg font-bold text-slate-900">Full-Funnel Conversion Engine</h3>
            </div>
            <span class="text-xs font-mono" style="color:#22c55e;">● REAL-TIME TELEMETRY</span>
          </div>

          <!-- Visual Funnel Stages -->
          <div class="space-y-3">
            <div v-for="(stage, idx) in funnelStages" :key="stage.name"
              class="p-4 rounded-xl border flex items-center gap-4"
              style="background:#f8fafc; border-color:#0f172a;">
              <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono text-xs"
                style="background:#eff6ff; color:#1d4ed8; border:1px solid #0369A150;">
                0{{ idx + 1 }}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-bold text-white">{{ stage.name }}</span>
                  <span class="font-mono text-cyan-400">{{ stage.count.toLocaleString() }} ({{ stage.rate }}%)</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full transition-all"
                    :style="{ width: stage.rate + '%', background: 'linear-gradient(90deg,#0369A1,#00E5FF)' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2B. Revenue Growth & Performance Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Monthly Revenue Breakdown -->
          <div class="rounded-xl border p-6" style="background:#ffffff; border-color:#0f172a;">
            <div class="text-xs font-mono tracking-widest text-cyan-400 mb-1">FINANCIAL GROWTH</div>
            <h3 class="text-base font-bold text-slate-900 mb-4">Monthly Platform Commission Revenue (INR)</h3>
            <div class="space-y-3 text-xs">
              <div v-for="m in monthlyRevenue" :key="m.month"
                class="flex items-center justify-between p-3 rounded-lg" style="background:#f8fafc; border:1px solid #1e3a5f;">
                <div>
                  <div class="font-bold text-white">{{ m.month }}</div>
                  <div class="text-[10px]" style="color:#64748b;">GMV: ₹{{ (m.gmv / 100000).toFixed(1) }}L</div>
                </div>
                <div class="text-right">
                  <div class="font-bold font-mono text-cyan-400">₹{{ (m.commission / 1000).toFixed(0) }}K Fee</div>
                  <div class="text-[10px] font-mono text-emerald-400">GST: ₹{{ m.gst.toFixed(0) }} · TDS: ₹{{ m.tds.toFixed(0) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Operational Performance KPIs -->
          <div class="rounded-xl border p-6" style="background:#ffffff; border-color:#0f172a;">
            <div class="text-xs font-mono tracking-widest text-cyan-400 mb-1">SYSTEM LATENCY &amp; QUALITY</div>
            <h3 class="text-base font-bold text-slate-900 mb-4">Operational Performance Metrics</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl border text-center" style="background:#f8fafc; border-color:#0f172a;">
                <div class="text-2xl font-black font-mono text-cyan-400">2m 14s</div>
                <div class="text-[11px] font-bold text-white mt-1">Avg Booking Speed</div>
                <div class="text-[10px]" style="color:#64748b;">From course select to seat lock</div>
              </div>
              <div class="p-4 rounded-xl border text-center" style="background:#f8fafc; border-color:#0f172a;">
                <div class="text-2xl font-black font-mono text-emerald-400">92.4%</div>
                <div class="text-[11px] font-bold text-white mt-1">Batch Fill Rate</div>
                <div class="text-[10px]" style="color:#64748b;">Across 42 verified academies</div>
              </div>
              <div class="p-4 rounded-xl border text-center" style="background:#f8fafc; border-color:#0f172a;">
                <div class="text-2xl font-black font-mono text-purple-400">14ms</div>
                <div class="text-[11px] font-bold text-white mt-1">QR API P99 Latency</div>
                <div class="text-[10px]" style="color:#64748b;">Port State Control scan ping</div>
              </div>
              <div class="p-4 rounded-xl border text-center" style="background:#f8fafc; border-color:#0f172a;">
                <div class="text-2xl font-black font-mono text-amber-400">0.00%</div>
                <div class="text-[11px] font-bold text-white mt-1">Overbooking Rate</div>
                <div class="text-[10px]" style="color:#64748b;">Atomic quota locks enforced</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 3: CONTENT MANAGEMENT SYSTEM (CMS)                       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'cms'" class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-xs font-mono tracking-widest text-cyan-400">PORTAL CONTENT PUBLISHING</div>
            <h3 class="text-lg font-bold text-slate-900">Website Notices, Advisories &amp; Circulars (CMS)</h3>
          </div>
          <button @click="showCmsModal = true"
            class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
            <span>+ Create New Notice</span>
          </button>
        </div>

        <div class="rounded-xl border overflow-hidden" style="background:#ffffff; border-color:#0f172a;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">NOTICE TITLE</th>
                  <th class="px-5 py-3.5">CATEGORY</th>
                  <th class="px-5 py-3.5">TARGET AUDIENCE</th>
                  <th class="px-5 py-3.5">AUTHOR</th>
                  <th class="px-5 py-3.5">VIEWS</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="post in cmsPosts" :key="post.id" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4 font-bold text-white max-w-sm">{{ post.title }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded font-mono text-[10px]" style="background:#eff6ff; color:#1d4ed8;">
                      {{ post.category }}
                    </span>
                  </td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ post.targetAudience }}</td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ post.author }}</td>
                  <td class="px-5 py-4 font-mono text-cyan-400">{{ post.views }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded font-bold text-[10px]"
                      :style="post.isPublished ? 'background:#22c55e20; color:#22c55e;' : 'background:#64748b20; color:#64748b;'">
                      {{ post.isPublished ? 'PUBLISHED' : 'DRAFT' }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button class="text-xs" style="color:#1d4ed8;" @click="post.isPublished = !post.isPublished">
                      {{ post.isPublished ? 'Unpublish' : 'Publish' }}
                    </button>
                    <button class="text-xs" style="color:#f87171;">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Create CMS Notice Modal -->
        <div v-if="showCmsModal" class="fixed inset-0 z-50 flex items-center justify-center p-6"
          style="background:rgba(7,13,24,0.85); backdrop-filter:blur(8px);">
          <div class="rounded-2xl border p-6 max-w-xl w-full space-y-4"
            style="background:#ffffff; border-color:#93c5fd;">
            <div class="flex items-center justify-between border-b pb-3" style="border-color:#0f172a;">
              <h4 class="font-bold text-white text-base">Create Notice / Regulatory Circular</h4>
              <button @click="showCmsModal = false" class="text-slate-400 hover:text-white">✕</button>
            </div>
            <div class="space-y-3 text-xs">
              <div>
                <label class="text-[10px] font-mono text-slate-400 block mb-1">TITLE</label>
                <input v-model="newArticle.title" type="text" placeholder="e.g. DG Shipping Advisory: Sea-Time Rules 2026"
                  class="w-full px-3 py-2 rounded-lg border outline-none text-white"
                  style="background:#f8fafc; border-color:#0f172a;" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="text-[10px] font-mono text-slate-400 block mb-1">CATEGORY</label>
                  <select v-model="newArticle.category" class="w-full px-3 py-2 rounded-lg border outline-none text-white"
                    style="background:#f8fafc; border-color:#0f172a;">
                    <option value="CIRCULAR">CIRCULAR</option>
                    <option value="ADMISSION">ADMISSION</option>
                    <option value="EXAM_SCHEDULE">EXAM SCHEDULE</option>
                    <option value="ADVISORY">ADVISORY</option>
                  </select>
                </div>
                <div>
                  <label class="text-[10px] font-mono text-slate-400 block mb-1">AUDIENCE</label>
                  <select v-model="newArticle.targetAudience" class="w-full px-3 py-2 rounded-lg border outline-none text-white"
                    style="background:#f8fafc; border-color:#0f172a;">
                    <option value="ALL">ALL USERS</option>
                    <option value="SEAFARERS">SEAFARERS ONLY</option>
                    <option value="INSTITUTES">INSTITUTES ONLY</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-mono text-slate-400 block mb-1">CONTENT / BODY</label>
                <textarea v-model="newArticle.content" rows="5" placeholder="Official announcement text..."
                  class="w-full px-3 py-2 rounded-lg border outline-none text-white"
                  style="background:#f8fafc; border-color:#0f172a;"></textarea>
              </div>
            </div>
            <div class="pt-2 flex justify-end gap-3">
              <button @click="showCmsModal = false" class="px-4 py-2 rounded-lg text-xs border"
                style="border-color:#0f172a; color:#64748b;">Cancel</button>
              <button @click="publishArticle" class="px-5 py-2 rounded-lg text-xs font-bold"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">Publish Now</button>
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
            <div class="text-xs font-mono tracking-widest text-cyan-400">IDENTITY &amp; ACCESS CONTROL</div>
            <h3 class="text-lg font-bold text-slate-900">Full User Management Registry</h3>
          </div>
          <!-- Search & Filter -->
          <div class="flex items-center gap-2">
            <input v-model="userSearch" type="text" placeholder="Search by name, email, INDoS..."
              class="px-3.5 py-2 rounded-lg border text-xs outline-none text-white w-64"
              style="background:#f8fafc; border-color:#0f172a;" />
            <select v-model="userRoleFilter" class="px-3 py-2 rounded-lg border text-xs outline-none text-white"
              style="background:#f8fafc; border-color:#0f172a;">
              <option value="ALL">All Roles</option>
              <option value="SEAFARER">Seafarer (Student)</option>
              <option value="INSTITUTE_ADMIN">Institute Admin</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>
        </div>

        <div class="rounded-xl border overflow-hidden" style="background:#ffffff; border-color:#0f172a;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">USER NAME &amp; EMAIL</th>
                  <th class="px-5 py-3.5">ROLE</th>
                  <th class="px-5 py-3.5">INDOS / AFFILIATION</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5">JOINED</th>
                  <th class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="u in filteredUsers" :key="u.id" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm text-slate-900">{{ u.name }}</div>
                    <div class="text-[11px]" style="color:#64748b;">{{ u.email }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
                      :style="roleBadgeStyle(u.role)">
                      {{ u.role }}
                    </span>
                  </td>
                  <td class="px-5 py-4 font-mono" style="color:#1d4ed8;">{{ u.indos || u.institute || '—' }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded font-bold text-[10px]"
                      :style="u.status === 'ACTIVE' ? 'background:#22c55e20; color:#22c55e;' : 'background:#dc262620; color:#f87171;'">
                      {{ u.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4" style="color:#64748b;">{{ u.joined }}</td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button class="text-xs" style="color:#1d4ed8;"
                      @click="u.status = u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE'">
                      {{ u.status === 'ACTIVE' ? 'Suspend' : 'Reactivate' }}
                    </button>
                    <button class="text-xs" style="color:#64748b;">Reset 2FA</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- MODULE 5: FINANCIAL OVERSIGHT (DUAL INVOICING & COMMISSIONS)    -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'finance'" class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-xs font-mono tracking-widest text-cyan-400">FINANCIAL AUDIT &amp; SETTLEMENT</div>
            <h3 class="text-lg font-bold text-slate-900">Dual-Invoicing Ledger &amp; Institute Commission Reports</h3>
          </div>
          <button class="px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1"
            style="border-color:#0f172a; color:#1d4ed8; background:#ffffff;">
            <span>⬇</span>
            <span>Export Statutory GST/TDS Report (CSV)</span>
          </button>
        </div>

        <!-- Ledger Table -->
        <div class="rounded-xl border overflow-hidden" style="background:#ffffff; border-color:#0f172a;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#f8fafc; color:#64748b;">
                <tr class="border-b" style="border-color:#0f172a;">
                  <th class="px-5 py-3.5">BOOKING REF</th>
                  <th class="px-5 py-3.5">STUDENT &amp; COURSE</th>
                  <th class="px-5 py-3.5">TOTAL GMV</th>
                  <th class="px-5 py-3.5">COMMISSION (10%)</th>
                  <th class="px-5 py-3.5">GST 18% &amp; TDS 1%</th>
                  <th class="px-5 py-3.5">INSTITUTE PAYOUT</th>
                  <th class="px-5 py-3.5">ESCROW STATUS</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0f172a;">
                <tr v-for="item in ledgerRecords" :key="item.ref" class="hover:bg-slate-50 transition">
                  <td class="px-5 py-4 font-mono font-bold" style="color:#1d4ed8;">{{ item.ref }}</td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-white">{{ item.student }}</div>
                    <div class="text-[11px]" style="color:#64748b;">{{ item.course }}</div>
                  </td>
                  <td class="px-5 py-4 font-bold text-white font-mono">₹{{ item.amount.toLocaleString() }}</td>
                  <td class="px-5 py-4 font-mono font-bold text-cyan-400">₹{{ item.commission.toLocaleString() }}</td>
                  <td class="px-5 py-4 font-mono text-[11px]" style="color:#64748b;">
                    GST: ₹{{ item.gst }} · TDS: ₹{{ item.tds }}
                  </td>
                  <td class="px-5 py-4 font-mono font-bold" style="color:#22c55e;">
                    ₹{{ item.payout.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold"
                      :style="item.status === 'SETTLED' ? 'background:#22c55e20; color:#22c55e;' : 'background:#f59e0b20; color:#f59e0b;'">
                      {{ item.status }}
                    </span>
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
            <div class="text-xs font-mono tracking-widest text-cyan-400">QUALITY ASSURANCE &amp; GRIEVANCE DESK</div>
            <h3 class="text-lg font-bold text-slate-900">Monitoring &amp; Moderation Console</h3>
          </div>
          <span class="text-xs font-mono text-emerald-400">● 3 TICKETS PENDING RESOLUTION</span>
        </div>

        <!-- 3-Column Split -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Col 1: Flagged Forum Content -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#ffffff; border-color:#0f172a;">
            <div class="flex items-center justify-between border-b pb-2" style="border-color:#0f172a;">
              <span class="font-bold text-xs text-white">Flagged Community Content</span>
              <span class="text-[10px] font-mono text-amber-400">2 Reports</span>
            </div>
            <div class="space-y-3">
              <div v-for="flag in reportedContent" :key="flag.id"
                class="p-3 rounded-lg border space-y-2" style="background:#f8fafc; border-color:#0f172a;">
                <div class="text-xs font-bold text-white">{{ flag.title }}</div>
                <div class="text-[11px]" style="color:#f87171;">Reason: {{ flag.reason }}</div>
                <div class="text-[10px]" style="color:#64748b;">Author: {{ flag.author }} (INDoS: {{ flag.indos }})</div>
                <div class="flex gap-2 pt-1">
                  <button class="px-2 py-1 rounded text-[10px] font-bold" style="background:#22c55e; color:#fff;"
                    @click="removeReport(flag.id)">Dismiss</button>
                  <button class="px-2 py-1 rounded text-[10px] font-bold border" style="border-color:#dc2626; color:#f87171;"
                    @click="removeReport(flag.id)">Delete Post</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 2: Course Reviews Moderation -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#ffffff; border-color:#0f172a;">
            <div class="flex items-center justify-between border-b pb-2" style="border-color:#0f172a;">
              <span class="font-bold text-xs text-white">Student Academy Reviews</span>
              <span class="text-[10px] font-mono text-emerald-400">Verified INDoS</span>
            </div>
            <div class="space-y-3">
              <div v-for="rev in studentReviews" :key="rev.id"
                class="p-3 rounded-lg border space-y-1.5" style="background:#f8fafc; border-color:#0f172a;">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">{{ rev.course }}</span>
                  <span class="text-xs text-amber-400">{'★'.repeat(rev.rating)}</span>
                </div>
                <div class="text-[11px] leading-relaxed" style="color:#64748b;">"{{ rev.comment }}"</div>
                <div class="text-[10px]" style="color:#64748b;">By {{ rev.student }} · {{ rev.institute }}</div>
                <div class="flex gap-2 pt-1">
                  <button class="text-[10px] font-bold text-emerald-400">✓ Approved</button>
                  <button class="text-[10px] font-bold text-slate-500">Hide Review</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 3: Grievance & Complaint Desk -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#ffffff; border-color:#0f172a;">
            <div class="flex items-center justify-between border-b pb-2" style="border-color:#0f172a;">
              <span class="font-bold text-xs text-white">Grievance &amp; Complaints</span>
              <span class="text-[10px] font-mono text-amber-400">3 Open</span>
            </div>
            <div class="space-y-3">
              <div v-for="tkt in complaintDesk" :key="tkt.id"
                class="p-3 rounded-lg border space-y-1.5" style="background:#f8fafc; border-color:#0f172a;">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-cyan-400">{{ tkt.id }}</span>
                  <span class="text-[9px] px-1.5 py-0.5 rounded font-bold"
                    :style="tkt.priority === 'HIGH' ? 'background:#dc262620; color:#f87171;' : 'background:#f59e0b20; color:#f59e0b;'">
                    {{ tkt.priority }}
                  </span>
                </div>
                <div class="text-xs font-medium text-white">{{ tkt.subject }}</div>
                <div class="text-[10px]" style="color:#64748b;">Filed by: {{ tkt.filer }}</div>
                <div class="flex items-center justify-between pt-1">
                  <span class="text-[10px] font-mono text-amber-400">{{ tkt.status }}</span>
                  <button class="text-[10px] font-bold px-2 py-0.5 rounded"
                    style="background:#0A1936; color:#fff;"
                    @click="tkt.status = 'RESOLVED'">
                    Resolve Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
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
const userSearch = ref('');
const userRoleFilter = ref('ALL');

const pendingTotal = computed(() => {
  return institutes.value.filter(i => i.verificationStatus === 'PENDING').length +
         courses.value.filter(c => c.approvalStatus === 'PENDING_APPROVAL').length +
         pendingCerts.value.filter(c => c.status === 'PENDING').length;
});

const adminTabs = computed(() => [
  { id: 'approvals', label: 'Approval Workflows', icon: '🏛️', badge: String(pendingTotal.value) },
  { id: 'analytics', label: 'Advanced Analytics', icon: '📊', badge: 'Live' },
  { id: 'cms', label: 'Website CMS', icon: '✍️', badge: null },
  { id: 'users', label: 'User Management', icon: '👥', badge: '18.4K' },
  { id: 'finance', label: 'Financial Oversight', icon: '💳', badge: '10%' },
  { id: 'moderation', label: 'Moderation & Complaints', icon: '🛡️', badge: '3' },
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
  targetAudience: 'ALL',
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

// ─── 4. FULL USER MANAGEMENT DATA ────────────────────────────────────────
const users = ref([
  { id: 'usr-1', name: 'Capt. Arvind Nair', email: 'arvind.nair@seafu.in', role: 'SEAFARER', indos: '08ZL9431', institute: null, status: 'ACTIVE', joined: '12 Jan 2026' },
  { id: 'usr-2', name: 'Ramesh Kumar', email: 'ramesh.k@gmail.com', role: 'SEAFARER', indos: '149028', institute: null, status: 'ACTIVE', joined: '04 Feb 2026' },
  { id: 'usr-3', name: 'Capt. Rajesh Varma', email: 'registrar@mtamumbai.in', role: 'INSTITUTE_ADMIN', indos: null, institute: 'Maritime Training Academy Mumbai', status: 'ACTIVE', joined: '10 Dec 2025' },
  { id: 'usr-4', name: 'Deepak Sharma', email: 'deepak.s@smit.edu', role: 'INSTITUTE_ADMIN', indos: null, institute: 'Southern Maritime Institute', status: 'ACTIVE', joined: '15 Jan 2026' },
  { id: 'usr-5', name: 'Compliance Officer DGS', email: 'admin@dgs.gov.in', role: 'SUPER_ADMIN', indos: null, institute: 'DG Shipping Govt of India', status: 'ACTIVE', joined: '01 Nov 2025' },
]);

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
function statusPillStyle(status: string): string {
  const map: Record<string, string> = {
    VERIFIED: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;',
    APPROVED: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;',
    PENDING: 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b40;',
    PENDING_APPROVAL: 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b40;',
    REJECTED: 'background:#dc262620; color:#f87171; border:1px solid #dc262640;',
    SUSPENDED: 'background:#64748b20; color:#64748b; border:1px solid #64748b40;',
  };
  return map[status] || 'background:#1e3a5f; color:#64748b;';
}

function roleBadgeStyle(role: string): string {
  const map: Record<string, string> = {
    SUPER_ADMIN: 'background:#8b5cf625; color:#a78bfa; border:1px solid #8b5cf650;',
    ADMIN: 'background:#0369A125; color:#1d4ed8; border:1px solid #0369A150;',
    INSTITUTE_ADMIN: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;',
    SEAFARER: 'background:#00E5FF15; color:#1d4ed8; border:1px solid #00E5FF30;',
  };
  return map[role] || 'background:#1e3a5f; color:#64748b;';
}
</script>
