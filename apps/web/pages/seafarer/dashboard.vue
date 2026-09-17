<template>
  <div class="min-h-screen font-sans" style="background:#070D18; color:#e2e8f0;">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP STATUTORY IDENTITY & SIMULATOR HOURS HEADER              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="border-b px-4 sm:px-6 py-4" style="background:#050a14; border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <!-- Left: Cadet Identity & Stream -->
        <div class="flex items-start sm:items-center gap-4">
          <div class="relative">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-slate-950 shadow-xl"
              style="background:linear-gradient(135deg,#0369A1,#00E5FF); border:2px solid #00E5FF50;">
              TK
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-[8px] text-white">
              ✓
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[10px] font-mono tracking-widest font-bold" style="color:#00E5FF;">
                DG PORTS &amp; SHIPPING CADET
              </span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                VERIFIED CADET
              </span>
            </div>
            <h1 class="text-xl sm:text-2xl font-black text-white mt-0.5">
              Cadet Officer {{ authStore.user?.fullName || 'Tariq Khan' }}
            </h1>
            <div class="text-xs font-medium" style="color:#94a3b8;">
              Program Stream: <span class="text-white font-bold">Advance Diploma (AD) Nautical Science (Glasgow UK Pathway)</span>
            </div>
            <!-- Credential numbers strip -->
            <div class="flex items-center gap-3 mt-1.5 text-[11px] font-mono flex-wrap" style="color:#64748b;">
              <span>Roll: <strong class="text-white">MTI-KHI/2024/GP-384</strong></span>
              <span>·</span>
              <span>CDC: <strong class="text-white">KHI-CD-2023-3891</strong> <span class="text-amber-400">(Exp: Dec 2033)</span></span>
              <span>·</span>
              <span>SID: <strong class="text-emerald-400">PK-092-2022-771 Active Biometric</strong></span>
            </div>
          </div>
        </div>

        <!-- Right: Simulator Hours & UK MCA Pathway Scores -->
        <div class="flex items-center gap-4 shrink-0">
          <div class="px-5 py-3 rounded-xl border text-right" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">LOGGED SIMULATOR HOURS</div>
            <div class="text-2xl font-black font-mono text-cyan-400">148.5 hrs</div>
            <div class="text-[10px] font-mono" style="color:#94a3b8;">Full Mission Bridge &amp; ECDIS</div>
          </div>

          <div class="px-5 py-3 rounded-xl border text-right" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">UK MCA CREDIT</div>
            <div class="text-2xl font-black font-mono text-emerald-400">92%</div>
            <div class="text-[10px] font-mono" style="color:#94a3b8;">Glasgow SQA Aligned</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. URGENT DRILL ALERT NOTIFICATION BANNER                       -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="rounded-2xl border p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl"
        style="background:linear-gradient(135deg,#0a1628 0%,#0e2238 100%); border-color:#0369A160;">
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
            style="background:#0369A130; border:1px solid #0369A160;">
            🔥
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold tracking-wider" style="color:#00E5FF;">
                MTI PRACTICAL DRILL ALERT
              </span>
              <span class="text-[10px] font-mono" style="color:#64748b;">Schedule: Friday 09:00 AM · KPT Apprentice Training Yard</span>
            </div>
            <div class="text-sm font-bold text-white mt-0.5">
              AFF Fire Simulator Drills &amp; Breathing Apparatus Bay scheduled with MTI Chief Instructor.
            </div>
            <div class="text-xs mt-0.5" style="color:#94a3b8;">
              Attendance mandatory for <strong class="text-cyan-400">STCW A-VI/3 Endorsement</strong> renewal.
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 shrink-0">
          <button class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-md"
            style="background:#00E5FF; color:#070D18;">
            Confirm Drill Slot
          </button>
          <button class="px-4 py-2 rounded-xl text-xs font-bold border transition"
            style="border-color:#1e3a5f; color:#94a3b8; background:#070D18;">
            Download Instructions
          </button>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. SEGMENTED TABS                                               -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="flex items-center gap-2 border-b pb-3 overflow-x-auto text-xs font-bold" style="border-color:#0c1a2e;">
        <button class="px-4 py-2 rounded-lg transition"
          style="background:#0369A1; color:#fff;">
          🛡️ MTI Certified Vault (8)
        </button>
        <button class="px-4 py-2 rounded-lg transition"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          🕹️ Simulator Bay Bookings (3)
        </button>
        <button class="px-4 py-2 rounded-lg transition"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          🎓 City of Glasgow Pathway Credits
        </button>
        <button class="px-4 py-2 rounded-lg transition"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          ⚓ KPT Sea-Service &amp; Testimonials
        </button>
        <button class="px-4 py-2 rounded-lg transition"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          🏛️ DG Ports &amp; Shipping Status
        </button>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. MAIN TWO-COLUMN WORKSPACE                                    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- ── LEFT COLUMN: CERTIFICATES & SIMULATOR VAULT (8 cols) ──── -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Search & Filter Ribbon -->
          <div class="rounded-xl border p-3 flex flex-col sm:flex-row items-center gap-3"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="relative flex-1 w-full">
              <span class="absolute left-3.5 top-2.5 text-xs text-slate-500">🔍</span>
              <input v-model="searchQuery" type="text"
                placeholder="Search MTI Karachi STCW course, DG Cert #, or Glasgow module code..."
                class="w-full pl-9 pr-3 py-2 text-xs rounded-lg outline-none text-white border"
                style="background:#070D18; border-color:#1e3a5f;" />
            </div>
            <NuxtLink to="/seafarer/documents"
              class="px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition flex items-center gap-1.5"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              <span>📤</span>
              <span>Upload Certificate</span>
            </NuxtLink>
          </div>

          <!-- Quick Filters Bar -->
          <div class="flex items-center justify-between text-xs flex-wrap gap-2">
            <div class="flex gap-2 flex-wrap">
              <button class="px-2.5 py-1 rounded text-[11px] font-bold"
                style="background:#0369A130; color:#00E5FF; border:1px solid #0369A160;">
                All MTI Credentials (8)
              </button>
              <button class="px-2.5 py-1 rounded text-[11px]"
                style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
                AD Nautical Science
              </button>
              <button class="px-2.5 py-1 rounded text-[11px]"
                style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
                GP-III Rating Pre-Sea
              </button>
              <button class="px-2.5 py-1 rounded text-[11px]"
                style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
                High-Tech Simulators
              </button>
            </div>
            <span class="text-[11px] font-mono text-emerald-400">● DG Ports &amp; Shipping Certified</span>
          </div>

          <!-- 5 Rich Certificate Cards -->
          <div class="space-y-4">
            <!-- Card 1: ECDIS Simulator -->
            <div class="rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 transition hover:border-cyan-500 group"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="w-full sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                  alt="ECDIS Simulator"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style="background:#0369A125; color:#38bdf8; border:1px solid #0369A140;">
                    ACTIVE SIMULATION BAY
                  </span>
                  <span class="text-[10px] font-mono" style="color:#64748b;">IMO Model 1.27 · STCW Table A-II/1 &amp; A-II/2</span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  ECDIS Simulator (Wärtsilä &amp; Transas Navi-Trainer Pro)
                </h3>
                <div class="text-[11px] font-mono" style="color:#64748b;">
                  Cert #: <strong class="text-white">MTI-ECDIS-2024-912</strong> · Facility: MTI Karachi ECDIS Simulation Suite
                </div>
                <div class="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                  <span>✓ Compliant (Lifetime Endorsement)</span>
                  <span style="color:#1e3a5f;">·</span>
                  <span style="color:#94a3b8;">Glasgow AD Pathway Cert</span>
                </div>
              </div>
              <div class="sm:text-right flex sm:flex-col justify-between items-end shrink-0 pt-2 sm:pt-0">
                <div class="text-[10px] font-mono" style="color:#64748b;">VALIDITY: LIFETIME</div>
                <NuxtLink to="/verify/IND-AFF-7714-ECDSA"
                  class="px-3 py-1.5 rounded text-xs font-bold transition flex items-center gap-1"
                  style="background:#0369A125; color:#00E5FF; border:1px solid #0369A150;">
                  <span>Check Verification</span>
                  <span>↗</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Card 2: High Voltage Safety -->
            <div class="rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 transition hover:border-cyan-500 group"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="w-full sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                  alt="High Voltage Safety"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                    ● VALID ENDORSEMENT
                  </span>
                  <span class="text-[10px] font-mono" style="color:#64748b;">STCW Section A-III/1 &amp; A-III/2</span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  High Voltage (HV) Safety &amp; Switchboard Bay (Operational &amp; Management)
                </h3>
                <div class="text-[11px] font-mono" style="color:#64748b;">
                  Cert #: <strong class="text-white">MTI-HV-2023-401</strong> · Lab: MTI HV Marine Electrical Lab
                </div>
                <div class="text-[11px] text-cyan-400 pt-1">
                  ⚡ 6.6 kV Breaker Practical Passed
                </div>
              </div>
              <div class="sm:text-right flex sm:flex-col justify-between items-end shrink-0 pt-2 sm:pt-0">
                <div class="text-[10px] font-mono" style="color:#64748b;">VALID THROUGH: 15 Dec 2028</div>
                <button class="px-3 py-1.5 rounded text-xs font-bold transition border"
                  style="border-color:#1e3a5f; color:#94a3b8;">
                  Share Record
                </button>
              </div>
            </div>

            <!-- Card 3: GMDSS General Operator -->
            <div class="rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 transition hover:border-cyan-500 group"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="w-full sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80"
                  alt="GMDSS Operator"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                    ● VALID GOC
                  </span>
                  <span class="text-[10px] font-mono" style="color:#64748b;">STCW Code A-IV/2</span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  GMDSS General Operator's Certificate (G.M.D.S.S &amp; VTS Simulator)
                </h3>
                <div class="text-[11px] font-mono" style="color:#64748b;">
                  Licence #: <strong class="text-white">GOC-PAK-MTI-2023-1100</strong> · Issuer: Govt of Pakistan PTA &amp; DG Ports
                </div>
                <div class="text-[11px] text-sky-400 pt-1">
                  🌊 Sea Areas A1, A2, A3, A4 Fully Endorsed
                </div>
              </div>
              <div class="sm:text-right flex sm:flex-col justify-between items-end shrink-0 pt-2 sm:pt-0">
                <div class="text-[10px] font-mono" style="color:#64748b;">VALID THROUGH: 22 Oct 2028</div>
                <button class="px-3 py-1.5 rounded text-xs font-bold transition border"
                  style="border-color:#1e3a5f; color:#94a3b8;">
                  Inspect
                </button>
              </div>
            </div>

            <!-- Card 4: Liquid Cargo LCHS -->
            <div class="rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 transition hover:border-amber-500 group"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="w-full sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80"
                  alt="Liquid Cargo Simulator"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style="background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b40;">
                    REFRESHER DUE IN 45 DAYS
                  </span>
                  <span class="text-[10px] font-mono" style="color:#64748b;">STCW V/1-1 &amp; V/1-2</span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-amber-300 transition">
                  Liquid Cargo Handling Simulator (LCHS - Oil, Chemical &amp; Gas Tanker)
                </h3>
                <div class="text-[11px] font-mono" style="color:#64748b;">
                  Cert #: <strong class="text-white">MTI-LCHS-2022-773</strong> · Simulator: MTI Wärtsilä LCHS Suite
                </div>
                <div class="text-[11px] text-amber-400 pt-1">
                  ⚠ Tanker Endorsement Revalidation Required
                </div>
              </div>
              <div class="sm:text-right flex sm:flex-col justify-between items-end shrink-0 pt-2 sm:pt-0">
                <div class="text-[10px] font-mono text-amber-400">EXPIRING: 18 Jan 2027</div>
                <NuxtLink to="/courses"
                  class="px-3 py-1.5 rounded text-xs font-bold transition"
                  style="background:#f59e0b; color:#070D18;">
                  Book MTI Batch
                </NuxtLink>
              </div>
            </div>

            <!-- Card 5: Engine Room Simulator ERS -->
            <div class="rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 transition hover:border-cyan-500 group"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="w-full sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                  alt="Engine Room Simulator"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                    ● VALID CREDENTIAL
                  </span>
                  <span class="text-[10px] font-mono" style="color:#64748b;">STCW Code A-III/1 · A-III/2</span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  Engine Room Simulator (ERS - Wärtsilä Transas 5-Console Complex)
                </h3>
                <div class="text-[11px] font-mono" style="color:#64748b;">
                  Cert #: <strong class="text-white">MTI-ERS-2022-205</strong> · Facility: MTI Karachi ERS Bay
                </div>
                <div class="text-[11px] text-emerald-400 pt-1">
                  ✓ Full Machinery Propulsion Certified
                </div>
              </div>
              <div class="sm:text-right flex sm:flex-col justify-between items-end shrink-0 pt-2 sm:pt-0">
                <div class="text-[10px] font-mono" style="color:#64748b;">VALID THROUGH: 04 Oct 2028</div>
                <button class="px-3 py-1.5 rounded text-xs font-bold transition border"
                  style="border-color:#1e3a5f; color:#94a3b8;">
                  Certificate
                </button>
              </div>
            </div>
          </div>

          <!-- Drop Certificate Zone -->
          <div class="rounded-2xl border-2 border-dashed p-8 text-center"
            style="background:#0a162808; border-color:#0369A140;">
            <div class="text-3xl mb-2">📥</div>
            <h4 class="text-base font-bold text-white">
              Drop MTI Certificates, Sea-Time Testimonials or CDC Stamps
            </h4>
            <p class="text-xs max-w-md mx-auto mt-1" style="color:#64748b;">
              Instant OCR cross-checks DG Ports &amp; Shipping database and mtiverification.com records.
            </p>
            <div class="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-[10px] font-mono"
              style="background:#070D18; color:#00E5FF; border:1px solid #1e3a5f;">
              <span>PDF, JPG, PNG up to 25MB · Automated MTI Cryptographic Hash &amp; QR Seal</span>
            </div>
          </div>
        </div>

        <!-- ── RIGHT COLUMN: SIDEBAR WIDGETS (4 cols) ────────────────── -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Widget 1: Cadet Sign-On Readiness -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-3" style="border-color:#1e3a5f;">
              <div>
                <span class="text-sm font-bold text-white">Cadet Sign-On Readiness</span>
                <div class="text-[11px]" style="color:#64748b;">Pre-boarding verification checklist</div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded"
                style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                94% COMPLIANT
              </span>
            </div>

            <div class="text-xs space-y-1" style="color:#94a3b8;">
              <div>Training Scheme: <strong class="text-white">Advance Diploma (AD) Nautical</strong></div>
              <div>Partner University: <strong class="text-white">City of Glasgow College (UK)</strong></div>
              <div>Sea Phase Placement: <strong class="text-cyan-400">Bahria Foundation / PNSC Fleet</strong></div>
            </div>

            <div class="space-y-2 pt-2 border-t text-xs" style="border-color:#1e3a5f;">
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2 text-white">
                  <span class="text-emerald-400">✓</span> GP-III Pre-Sea Course
                </span>
                <span class="text-[10px] font-mono text-emerald-400">Completed</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2 text-white">
                  <span class="text-emerald-400">✓</span> Wärtsilä ECDIS Simulator (1.27)
                </span>
                <span class="text-[10px] font-mono text-emerald-400">Passed</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2 text-white">
                  <span class="text-emerald-400">✓</span> DG Ports Medical Fitness
                </span>
                <span class="text-[10px] font-mono text-emerald-400">Active (KPT)</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2 text-white">
                  <span class="text-emerald-400">✓</span> HV Switchboard Operations
                </span>
                <span class="text-[10px] font-mono text-emerald-400">Certified</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2 text-amber-400">
                  <span>⚠</span> LCHS Tanker Refresher
                </span>
                <span class="text-[10px] font-mono text-amber-400">Due 45d</span>
              </div>
            </div>

            <button class="w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              <span>📋</span>
              <span>Submit Cadet Pre-Boarding Dossier</span>
            </button>
          </div>

          <!-- Widget 2: MTI Simulator Bay Roster -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-3" style="border-color:#1e3a5f;">
              <span class="text-sm font-bold text-white">MTI Simulator Bay Roster</span>
              <span class="text-[10px] font-mono text-cyan-400">Karachi Campus</span>
            </div>

            <!-- Booking 1 -->
            <div class="rounded-lg border overflow-hidden" style="background:#070D18; border-color:#1e3a5f;">
              <div class="h-28 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                  alt="Full Mission Bridge"
                  class="w-full h-full object-cover" />
                <span class="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#070D18e6; color:#00E5FF; border:1px solid #0369A160;">
                  Full Mission Bridge Simulator (FMBS)
                </span>
                <span class="absolute top-2 right-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#22c55e20; color:#22c55e;">
                  Booked Slot
                </span>
              </div>
              <div class="p-3 space-y-1">
                <div class="text-xs font-bold text-white">
                  Passage Planning &amp; Malacca Strait Heavy Traffic Drills
                </div>
                <div class="text-[11px]" style="color:#94a3b8;">
                  Instructor: Capt. Tariq (Master Mariner)
                </div>
                <div class="flex items-center justify-between text-[10px] font-mono pt-1" style="color:#64748b;">
                  <span>Next: Tomorrow 14:00 PKT</span>
                  <span class="text-cyan-400">Console #02</span>
                </div>
              </div>
            </div>

            <!-- Booking 2 -->
            <div class="rounded-lg border overflow-hidden" style="background:#070D18; border-color:#1e3a5f;">
              <div class="h-24 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80"
                  alt="KPT Practical Ground"
                  class="w-full h-full object-cover" />
                <span class="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#070D18e6; color:#fbbf24; border:1px solid #f59e0b40;">
                  KPT Practical Apprentice Ground
                </span>
                <span class="absolute top-2 right-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#0369A120; color:#38bdf8;">
                  Field Session
                </span>
              </div>
              <div class="p-3">
                <div class="text-xs font-bold text-white">
                  Personal Survival Techniques &amp; Fire Fighting Ground
                </div>
              </div>
            </div>

            <NuxtLink to="/courses?category=SIMULATOR"
              class="block text-center text-xs font-bold py-2 rounded-lg border transition"
              style="border-color:#1e3a5f; color:#00E5FF; background:#070D18;">
              View Full Simulator Timetable →
            </NuxtLink>
          </div>

          <!-- Widget 3: Digital Cadet Dossier -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-3" style="border-color:#1e3a5f;">
              <div class="flex items-center gap-2">
                <span>🛡️</span>
                <span class="text-sm font-bold text-white">MTI Digital Cadet Dossier</span>
              </div>
              <span class="text-[10px] font-mono text-cyan-400">mtiverification.com</span>
            </div>

            <div class="p-3.5 rounded-xl border flex items-center gap-3"
              style="background:#070D18; border-color:#1e3a5f;">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm text-slate-950"
                style="background:linear-gradient(135deg,#0369A1,#00E5FF);">
                TK
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-bold text-xs text-white truncate">Tariq Khan</div>
                <div class="text-[10px] font-mono" style="color:#64748b;">Roll: MTI-KHI/2024/GP-384</div>
                <div class="text-[10px] text-emerald-400">Registered &amp; Active Biometric</div>
              </div>
              <!-- Mini QR Box -->
              <div class="w-10 h-10 bg-white p-1 rounded flex items-center justify-center shrink-0">
                <div class="text-[8px] font-mono text-black font-black text-center leading-none">
                  QR<br/>SEAL
                </div>
              </div>
            </div>

            <div class="flex gap-2">
              <NuxtLink to="/seafarer/resume"
                class="flex-1 text-center py-2 rounded-lg text-xs font-bold border transition"
                style="border-color:#1e3a5f; color:#94a3b8; background:#070D18;">
                Export MTI CV
              </NuxtLink>
              <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA"
                class="flex-1 text-center py-2 rounded-lg text-xs font-bold transition"
                style="background:#00E5FF; color:#070D18;">
                Share Profile
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({ middleware: ['auth'] });
useHead({ title: 'Cadet Command Vault · Maritime Training Institute' });

const authStore = useAuthStore();
onMounted(() => {
  authStore.initAuth();
});

const searchQuery = ref('');
</script>
