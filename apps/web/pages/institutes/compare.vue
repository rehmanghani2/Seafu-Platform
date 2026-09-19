<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-32">
    <!-- Top Statutory Header / Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <nav class="flex items-center space-x-2 text-xs text-slate-500 mb-3">
        <NuxtLink to="/" class="hover:text-blue-700 transition">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/courses" class="hover:text-blue-700 transition">Institutes</NuxtLink>
        <span>/</span>
        <span class="text-slate-900 font-bold">Academy Comparison Matrix</span>
      </nav>

      <!-- Badge & Title -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div class="max-w-3xl space-y-2">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Audited MTI &amp; Flag Accreditation 2026</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Maritime Institute Side-by-Side Comparison
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Compare audited maritime academies, DNV-certified full-mission bridge simulators, flag state endorsements, guaranteed batch quotas, and corporate crewing pipelines.
          </p>
        </div>

        <!-- Top Right Actions -->
        <div class="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            @click="highlightDiffs = !highlightDiffs"
            :class="highlightDiffs ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-white text-slate-700 border-slate-200'"
            class="px-4 py-2.5 rounded-xl text-xs font-bold border hover:bg-slate-50 transition shadow-2xs flex items-center space-x-2"
          >
            <svg class="w-4 h-4 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>{{ highlightDiffs ? 'Showing Key Differences' : 'Highlight Differences Only' }}</span>
          </button>
          <button
            @click="shareMatrix"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition shadow-2xs flex items-center space-x-2"
          >
            <svg class="w-4 h-4 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            <span>Share Matrix</span>
          </button>
          <button
            @click="exportPdf"
            class="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-2"
          >
            <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>Export Official Dossier (PDF)</span>
          </button>
        </div>
      </div>

      <!-- Jump Navigation Bar -->
      <div class="mt-4 flex items-center gap-2 overflow-x-auto text-xs font-bold py-2 scrollbar-none border-b border-slate-200/80">
        <span class="text-[10px] text-slate-600 uppercase font-mono tracking-wider mr-2 shrink-0">FOCUS SECTION:</span>
        <a
          v-for="s in jumpSections"
          :key="s.id"
          :href="'#' + s.id"
          class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition text-slate-700 shrink-0 shadow-2xs"
        >
          {{ s.label }}
        </a>
      </div>
    </div>

    <!-- MAIN MATRIX CONTAINER -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- ── SECTION 1: CORE PROFILE & IDENTITY (3 ACADEMY COLUMNS) ───── -->
      <div id="overview" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left Descriptor Column -->
          <div class="lg:col-span-3 space-y-2 pr-4">
            <span class="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold">DECISION METRIC 01</span>
            <h3 class="text-xl font-black text-slate-900">Core Profile &amp; Identity</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Verification status, geographic proximity, global cadet alumni base, and flagship competencies.
            </p>
            <div class="pt-3 space-y-2 text-xs text-slate-600">
              <div class="flex items-center space-x-2 text-emerald-600 font-medium">
                <span>✓</span>
                <span>100% Cryptographic White-Sync</span>
              </div>
              <div class="flex items-center space-x-2 text-emerald-600 font-medium">
                <span>✓</span>
                <span>Escrow Shield Quota Active</span>
              </div>
            </div>
          </div>

          <!-- Right: 3 Audited Academy Columns -->
          <div class="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Academy 1: National Maritime Academy -->
            <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="h-40 bg-slate-100 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80"
                    alt="National Maritime Academy"
                    class="w-full h-full object-cover"
                  />
                  <span class="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-white shadow">
                    Pre-Sea Cadet Hub
                  </span>
                  <span class="absolute bottom-3 right-3 text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-slate-800 shadow">
                    ★ 4.90
                  </span>
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex items-center justify-between text-[11px] text-slate-500">
                    <span class="font-bold text-slate-700">Navi Mumbai &bull; IN</span>
                    <span class="font-mono text-blue-700">₹3.20L - ₹6.50L</span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 leading-tight">
                    National Maritime Academy
                  </h4>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    India's benchmark institution for high voltage systems and naval engineering ratings. Direct DG accreditation.
                  </p>
                </div>
              </div>

              <div class="p-5 pt-0 space-y-2">
                <NuxtLink
                  to="/courses"
                  class="w-full py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <span>Explore 14 Open Batches</span>
                </NuxtLink>
                <button
                  @click="openDossier('National Maritime Academy')"
                  class="w-full py-1.5 text-center text-xs font-semibold text-slate-500 hover:text-blue-700 hover:underline"
                >
                  View Articulation Dossier &rarr;
                </button>
              </div>
            </div>

            <!-- Academy 2: Anglo-Eastern (AEMTC) -->
            <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="h-40 bg-slate-100 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80"
                    alt="Anglo-Eastern (AEMTC)"
                    class="w-full h-full object-cover"
                  />
                  <span class="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-white shadow">
                    Captive Crewing Hub
                  </span>
                  <span class="absolute bottom-3 right-3 text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-slate-800 shadow">
                    ★ 4.88
                  </span>
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex items-center justify-between text-[11px] text-slate-500">
                    <span class="font-bold text-slate-700">Mumbai / Karjat &bull; IN</span>
                    <span class="font-mono text-blue-700">₹3.80L - ₹7.10L</span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 leading-tight">
                    Anglo-Eastern (AEMTC)
                  </h4>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    Integrated corporate academy funneling directly into Anglo-Eastern global fleet. DNV certified center of excellence.
                  </p>
                </div>
              </div>

              <div class="p-5 pt-0 space-y-2">
                <NuxtLink
                  to="/courses"
                  class="w-full py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <span>Explore 18 Open Batches</span>
                </NuxtLink>
                <button
                  @click="openDossier('Anglo-Eastern AEMTC')"
                  class="w-full py-1.5 text-center text-xs font-semibold text-slate-500 hover:text-blue-700 hover:underline"
                >
                  View Articulation Dossier &rarr;
                </button>
              </div>
            </div>

            <!-- Academy 3: South Shields Marine School -->
            <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="h-40 bg-slate-100 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
                    alt="South Shields Marine School"
                    class="w-full h-full object-cover"
                  />
                  <span class="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-white shadow">
                    UK MCA Flagship
                  </span>
                  <span class="absolute bottom-3 right-3 text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-slate-800 shadow">
                    ★ 4.92
                  </span>
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex items-center justify-between text-[11px] text-slate-500">
                    <span class="font-bold text-slate-700">Tyne &amp; Wear &bull; UK</span>
                    <span class="font-mono text-blue-700">£8.90K - £12.50K</span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 leading-tight">
                    South Shields Marine School
                  </h4>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    World-renowned maritime college established 1861, premier center for UK MCA Officer of the Watch (OOW) certification.
                  </p>
                </div>
              </div>

              <div class="p-5 pt-0 space-y-2">
                <NuxtLink
                  to="/courses"
                  class="w-full py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <span>Explore 12 Open Batches</span>
                </NuxtLink>
                <button
                  @click="openDossier('South Shields Marine School')"
                  class="w-full py-1.5 text-center text-xs font-semibold text-slate-500 hover:text-blue-700 hover:underline"
                >
                  View Articulation Dossier &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ── SECTION 2: 1. FLAG STATE & REGULATORY ACCREDITATIONS ─────── -->
      <div id="accreditations" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
              <svg class="w-4 h-4 text-blue-700 shrink-0 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900">1. Flag State &amp; Regulatory Accreditations</h3>
              <p class="text-xs text-slate-500">IMO white-list verification, statutory endorsements, and regulatory compliance.</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-slate-500">DNV-GL &bull; ISO 9001:2015</span>
        </div>

        <div class="space-y-4">
          <!-- Row 1: Flag State Approvals -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Flag State Approvals</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-blue-700">DG Shipping (India)</div>
              <div class="text-[11px] text-slate-500">Panama (AMP) &bull; Marshall Islands &bull; Liberia</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-blue-700">DG Shipping + MCA (UK)</div>
              <div class="text-[11px] text-slate-500">Isle of Man &bull; Singapore MPA &bull; Hong Kong MD</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-blue-700">UK MCA (Fleet Flagport)</div>
              <div class="text-[11px] text-slate-500">Marshall Islands &bull; Liberia &bull; USCG Accepted</div>
            </div>
          </div>

          <!-- Row 2: Comprehensive Inspection Grade -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Comprehensive Inspection Grade</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-black text-emerald-600 font-mono">Grade A1 Outstanding</div>
              <div class="text-[11px] text-slate-500">DG Shipping Comprehensive Inspection Programme (CIP / DNV)</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-black text-emerald-600 font-mono">Grade A1+ CIP/DNV Audit</div>
              <div class="text-[11px] text-slate-500">Highest score for Maritime Training Programmes (Overall)</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-black text-emerald-600 font-mono">QAA Commended &bull; OFSTED</div>
              <div class="text-[11px] text-slate-500">UK Quality Assurance Agency for Higher Education Commendation</div>
            </div>
          </div>

          <!-- Row 3: Certificate Database Sync Time -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Certificate Database Sync Time</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900 font-mono text-emerald-600">Instant (&lt; 60 secs)</div>
              <div class="text-[11px] text-slate-500">Direct API gateway to DG e-Governance / INDoS database</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900 font-mono text-emerald-600">Real-time Sync 24/7</div>
              <div class="text-[11px] text-slate-500">Automated candidate roster push to DGS INDOS at semester end</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900 font-mono text-blue-700">Same Day MCA Registry</div>
              <div class="text-[11px] text-slate-500">Direct courier &amp; UK MCA database Training Certification service</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 3: 2. SIMULATOR INFRASTRUCTURE & PRACTICAL GROUNDS ─ -->
      <div id="simulators" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg">
              <svg class="w-4 h-4 text-cyan-700 shrink-0 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900">2. Simulator Infrastructure &amp; Practical Grounds</h3>
              <p class="text-xs text-slate-500">Hardware specifications, practical mock yards, and live fire complexes.</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-slate-500">DNV-GL Class A Certified</span>
        </div>

        <div class="space-y-4">
          <!-- Bridge Simulator -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Full-Mission Bridge Simulator</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Kongsberg K-Bridge 360° FOV</div>
              <div class="text-[11px] text-slate-500">Equipped with 360-degree cylindrical visual projection, ECDIS/ARPA dual consoles, and heavy weather physics.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Transas / Wärtsilä 360° FOV</div>
              <div class="text-[11px] text-slate-500">Full 360-degree real-view projection with dual ARPA radar suites, night vision, and tug handling controls.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Kongsberg Class-A 360° + Polar</div>
              <div class="text-[11px] text-slate-500">Two interconnected 360° bridges with dedicated polar ice navigation and offshore anchor handling models.</div>
            </div>
          </div>

          <!-- Engine Room Simulator -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Engine Room Simulator (ERS)</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">MAN B&amp;W 6S70ME - Kongsberg</div>
              <div class="text-[11px] text-slate-500">Slow-speed main propulsion with virtual switchboard, machinery space, and power management system (PMS).</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Wärtsilä 50DF Dual-Fuel LNG</div>
              <div class="text-[11px] text-slate-500">State-of-the-art LNG fuel gas supply system (FGSS), dual-fuel injection, and cryogenic cargo handling.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Kongsberg Class-A - 6.6kV</div>
              <div class="text-[11px] text-slate-500">Live physical 6.6kV high-voltage switchboard breaker cell with vacuum circuit breakers and sync gear.</div>
            </div>
          </div>

          <!-- Live Fire Ground -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Live Fire Ground &amp; Mock Ship</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">4-Deck Full Mock Vessel</div>
              <div class="text-[11px] text-slate-500">Full-scale steel mock vessel with cargo hold, engine space, and enclosed space search maze.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Advanced Smoke &amp; Flashover Bay</div>
              <div class="text-[11px] text-slate-500">Complex multi-chamber maze, galley oil flashover simulator, and thermal imaging training modules.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Hebburn Marine Fire Ground</div>
              <div class="text-[11px] text-slate-500">Extensive multi-sector fire ground replicating tanker pump rooms and marine accommodations with foam.</div>
            </div>
          </div>

          <!-- Lifeboat & MSTW Launching -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Lifeboat &amp; MSTW Launching</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Gravity Davit &amp; Pool Tank</div>
              <div class="text-[11px] text-slate-500">Totally enclosed motor-propelled survival craft (TEMPSC) in dedicated water basin.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Free-Fall Lifeboat Launch Tower</div>
              <div class="text-[11px] text-slate-500">16-meter vertical launch tower for direct free-fall lifeboat water operations and drop drills.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Tidal River Tyne Davit Facility</div>
              <div class="text-[11px] text-slate-500">Fast rescue craft (FRB) and twin davit survival craft handling under actual tidal river conditions.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 4: 3. COURSE FEES, BATCH QUOTAS & SEAFU ESCROW ──── -->
      <div id="fees" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg">
              <svg class="w-4 h-4 text-emerald-700 shrink-0 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900">3. Course Fees, Batch Quotas &amp; Seafu Escrow</h3>
              <p class="text-xs text-slate-500">Transparent batch booking with guaranteed seat reservation and cancellation protection.</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-emerald-600">Guaranteed Batch Pricing</span>
        </div>

        <div class="space-y-4">
          <!-- STCW Refresher -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">STCW Advanced Refresher (AFF + PSCRB + MFA)</div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">$720 USD</div>
              <div class="text-[11px] text-slate-500">Approx. ₹59,500 INR (Meals &amp; lab included)</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">$780 USD</div>
              <div class="text-[11px] text-slate-500">Approx. ₹64,500 INR (Includes residential mess)</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">£690 GBP</div>
              <div class="text-[11px] text-slate-500">Approx. $870 USD (UK MCA registered UK certification)</div>
            </div>
          </div>

          <!-- BRM Course -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Bridge Resource Management (BRM)</div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">$610 USD &bull; 5 Days</div>
              <div class="text-[11px] text-slate-500">Includes ECDIS &amp; ARPA emergency situational drills.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">$640 USD &bull; 5 Days</div>
              <div class="text-[11px] text-slate-500">Company customized scenario simulation with Human Factors focus.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-sm font-black font-mono text-slate-900">£580 GBP &bull; 5 Days</div>
              <div class="text-[11px] text-slate-500">UK MCA Approved mandatory STCW into passage plan scenarios.</div>
            </div>
          </div>

          <!-- Batch Frequency -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Batch Frequency &amp; Class Cap</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Every Monday</div>
              <div class="text-[11px] text-slate-500">Strict max 12 candidates/batch. Guaranteed quota seats.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Twice Weekly</div>
              <div class="text-[11px] text-slate-500">Strict max 8 cadets. 12% reserve buffer for company crew.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Bi-Weekly Cohorts</div>
              <div class="text-[11px] text-slate-500">Maximum 8 officers. Dedicated instructor contact hours.</div>
            </div>
          </div>

          <!-- Refund Shield -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Refund &amp; Cancellation Shield</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-emerald-600">✓ 100% Escrow Shield</div>
              <div class="text-[11px] text-slate-500">Full refund if candidate vessel sailing date is altered.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-emerald-600">✓ 100% Escrow Shield</div>
              <div class="text-[11px] text-slate-500">Direct company-matching seat transfer or cancellation refund.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-emerald-600">✓ 100% Escrow Shield</div>
              <div class="text-[11px] text-slate-500">Refunds honored up to 7 calendar days before start.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 5: 4. PLACEMENT RECORDS & CORPORATE SPONSORSHIPS ─── -->
      <div id="placements" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-lg">
              <svg class="w-4 h-4 text-purple-700 shrink-0 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900">4. Placement Records &amp; Corporate Sponsorships</h3>
              <p class="text-xs text-slate-500">Audited post-sea onboard placement record and shipping pipelines.</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-purple-700">Verified Placement Records</span>
        </div>

        <div class="space-y-4">
          <!-- Verified Placement Rate -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Verified Placement Rate</div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-2xl font-black text-emerald-600 font-mono">94.2% <span class="text-[11px] text-slate-500 font-normal">&bull; 1,820 Trainees</span></div>
              <div class="text-[11px] text-slate-500">Cadets placed across tier-1 shipping lines in 2024-25.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-2xl font-black text-emerald-600 font-mono">98.6% <span class="text-[11px] text-slate-500 font-normal">&bull; In-House Captive</span></div>
              <div class="text-[11px] text-slate-500">Direct onboard assignment into Anglo-Eastern fleet management.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-2xl font-black text-emerald-600 font-mono">96.5% <span class="text-[11px] text-slate-500 font-normal">&bull; UK &amp; Global Sponsors</span></div>
              <div class="text-[11px] text-slate-500">Cadets pre-sponsored under UK Tonnage Tax scheme.</div>
            </div>
          </div>

          <!-- Key Shipping Partners -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Key Shipping Line Partners</div>
            <div class="md:col-span-3 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Maersk Line</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Scorpio Tankers</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Synergy Marine</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Bernhard Schulte</span>
              </div>
            </div>
            <div class="md:col-span-3 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">Anglo-Eastern (100% Intake)</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Teekay LNG</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Hafnia Tankers</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">MOL Marine</span>
              </div>
            </div>
            <div class="md:col-span-3 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Shell Marine</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">BP Shipping</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">CMA CGM</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Northern Marine</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 6: 5. CAMPUS INFRASTRUCTURE & CADET AMENITIES ───── -->
      <div id="campus" class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg">
              <svg class="w-4 h-4 text-blue-700 shrink-0 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900">5. Campus Infrastructure &amp; Cadet Amenities</h3>
              <p class="text-xs text-slate-500">Boarding accommodations, simulator console ratios, and dining facilities.</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-slate-500">Audited Facilities</span>
        </div>

        <div class="space-y-4">
          <!-- Cadet Hostel & Catering -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Cadet Hostel &amp; Catering</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">On-Campus AC Rooms (Single/Twin)</div>
              <div class="text-[11px] text-slate-500">24hr officer mess, gym, swimming pool, and dedicated maritime study center.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Executive Residential Campus</div>
              <div class="text-[11px] text-slate-500">Dedicated officer suites on Karjat foothills; outdoor sports courts and maritime mess.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Dr Winterbottom Hall of Residence</div>
              <div class="text-[11px] text-slate-500">Single study en-suite bedrooms with catering options; walking distance to River Tyne.</div>
            </div>
          </div>

          <!-- Student to Console Ratio -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-slate-100 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Student-to-Console Ratio</div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Max 4 Cadets / console</div>
              <div class="text-[11px] text-slate-500">Guarantees min 8 hours hands-on active pilotage per cadet (STCW Code A-I/12).</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Max 3 Cadets / console</div>
              <div class="text-[11px] text-slate-500">Intensive simulation rotation with human factors debriefing room.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-bold text-slate-900">Max 2 Cadets (UK Benchmark)</div>
              <div class="text-[11px] text-slate-500">Near 1-on-1 real-time training with Master Mariners &amp; Chief Engineers.</div>
            </div>
          </div>

          <!-- Seafarer Recommendation Rate -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 items-center text-xs">
            <div class="md:col-span-3 font-bold text-slate-900">Seafarer Recommendation Rate</div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-base font-black text-amber-500">98% 5.0 / 5.0 Rating</div>
              <div class="text-[11px] text-slate-500">Ranked highest in live fire practical workout experience.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-base font-black text-amber-500">97% 5.0 / 5.0 Rating</div>
              <div class="text-[11px] text-slate-500">Exceptional immediate vessel dispatch upon course completion.</div>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="text-base font-black text-amber-500">99% 5.0 / 5.0 Rating</div>
              <div class="text-[11px] text-slate-500">Top rating for UK MCA Oral Examination first-attempt pass rates.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── CALL TO ACTION BANNER (DEEP NAVY) ────────────────────────── -->
      <div class="rounded-3xl p-8 sm:p-10 bg-[#0A1936] text-white shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="space-y-2 max-w-2xl">
          <span class="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
            STANDARDIZED MARITIME ADVISORY
          </span>
          <h2 class="text-2xl sm:text-3xl font-black tracking-tight">
            Unsure which academy matches your flag state requirements?
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every flag state (UK MCA, Marshall Islands, Panama, Indian DGS) maintains distinct simulator hour thresholds and syllabus sequences. Run our automated Flag Compatibility Engine or book a 10-minute consultation with a verified Master Mariner.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            @click="checkCompatibility"
            class="px-5 py-3.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition shadow-md text-center"
          >
            Check Flag Compatibility &rarr;
          </button>
          <a
            href="tel:+442079460912"
            class="px-5 py-3.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition shadow-md text-center"
          >
            Talk to Officer Advisor
          </a>
        </div>
      </div>

    </main>

    <!-- ── BOTTOM STICKY FAST SEAT RESERVATION BAR ──────────────────── -->
    <div class="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-lg">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="font-mono text-slate-500 uppercase tracking-wider font-bold">FAST SEAT RESERVATION:</span>
          <span class="text-slate-800 font-semibold hidden lg:inline">Quota protection active for 3 institutions</span>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span class="font-bold text-slate-800">National Maritime</span>
            <span class="text-blue-700 font-mono font-bold">from ₹3.20L</span>
            <NuxtLink to="/courses" class="px-2.5 py-1 rounded bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-[11px] transition">
              Select &amp; Book
            </NuxtLink>
          </div>

          <div class="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span class="font-bold text-slate-800">Anglo-Eastern</span>
            <span class="text-blue-700 font-mono font-bold">from ₹3.80L</span>
            <NuxtLink to="/courses" class="px-2.5 py-1 rounded bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-[11px] transition">
              Select &amp; Book
            </NuxtLink>
          </div>

          <div class="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span class="font-bold text-slate-800">South Shields UK</span>
            <span class="text-blue-700 font-mono font-bold">from £8.90K</span>
            <NuxtLink to="/courses" class="px-2.5 py-1 rounded bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-[11px] transition">
              Explore Intake
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Maritime Institute Side-by-Side Comparison · The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'Compare audited maritime academies, DNV-certified full-mission bridge simulators, flag state endorsements, guaranteed batch quotas, and corporate crewing pipelines.',
    },
  ],
});

const highlightDiffs = ref(false);

const jumpSections = [
  { id: 'overview', label: '1. Overview & Key Stats' },
  { id: 'accreditations', label: '2. Accreditations' },
  { id: 'simulators', label: '3. Simulators & Tech' },
  { id: 'fees', label: '4. Fees & Quotas' },
  { id: 'placements', label: '5. Placement Records' },
  { id: 'campus', label: '6. Campus Hubs' },
];

function shareMatrix() {
  navigator.clipboard.writeText(window.location.href);
  alert('Side-by-side comparison matrix URL copied to clipboard!');
}

function exportPdf() {
  alert('Generating official comparison dossier PDF for Flag State and Academy review...');
}

function openDossier(academyName: string) {
  alert(`Opening official regulatory articulation dossier for ${academyName}...`);
}

function checkCompatibility() {
  alert('Launching Automated Flag State Compatibility Engine (UK MCA / DGS / Panama)...');
}
</script>
