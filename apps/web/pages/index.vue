<template>
  <div class="min-h-screen" style="background:#070D18; color:#e2e8f0;">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. HERO SECTION: TWO-COLUMN AUTHORITY & REAL PHOTO MOSAIC       -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="relative pt-12 pb-20 border-b overflow-hidden"
      style="border-color:#0c1a2e; background:radial-gradient(ellipse at 30% 0%, #0369a120 0%, #070D18 70%);">
      
      <!-- Subtle Naval Grid Texture -->
      <div class="absolute inset-0 opacity-10 pointer-events-none"
        style="background-image:linear-gradient(to right,#00E5FF 1px,transparent 1px),linear-gradient(to bottom,#00E5FF 1px,transparent 1px); background-size:56px 56px;">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left Column: Authority Copy & Actions (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Pill Tag -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border"
              style="background:#0369A115; border-color:#0369A145; color:#00E5FF;">
              <span class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></span>
              <span>PRE-SEA CADET ADMISSIONS 2026/27 · DG SHIPPING ACCREDITED</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Shaping Futures Through<br />
              <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Maritime Excellence
              </span> &amp;<br />
              Practical Sea Training
            </h1>

            <!-- Subtitle -->
            <p class="text-sm sm:text-base leading-relaxed max-w-xl" style="color:#94a3b8;">
              Start your Merchant Navy journey with structured pre-sea cadet training, IMO Model Courses, Class-A DNV-GL certified simulators, and internationally accredited DG &amp; UK MCA recognized maritime qualifications.
            </p>

            <!-- Dual CTAs -->
            <div class="flex flex-wrap gap-4 pt-2">
              <NuxtLink to="/courses"
                class="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-xl flex items-center gap-2"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff; box-shadow:0 6px 20px #0284c740;">
                <span>Explore Programs &amp; Batches</span>
                <span>→</span>
              </NuxtLink>
              <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA"
                class="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border transition flex items-center gap-2"
                style="border-color:#1e3a5f; color:#cbd5e1; background:#0a1628;">
                <span>🔐 Verify STCW Dossier</span>
              </NuxtLink>
            </div>

            <!-- 3 Proof Points -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t" style="border-color:#0c1a2e;">
              <div>
                <div class="text-2xl sm:text-3xl font-black font-mono text-white">20K+</div>
                <div class="text-[11px] font-mono mt-0.5" style="color:#64748b;">ACTIVE MARINERS TRAINED</div>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-black font-mono" style="color:#00E5FF;">100%</div>
                <div class="text-[11px] font-mono mt-0.5" style="color:#64748b;">DG / STCW COMPLIANCE</div>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-black font-mono" style="color:#22c55e;">350+</div>
                <div class="text-[11px] font-mono mt-0.5" style="color:#64748b;">GLOBAL FLEET PLACEMENTS</div>
              </div>
            </div>
          </div>

          <!-- Right Column: Authentic Photo Mosaic (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <!-- Top Photo Card: Pre-Sea Induction Hall -->
            <div class="rounded-2xl border overflow-hidden relative group shadow-2xl"
              style="background:#0a1628; border-color:#1e3a5f;">
              <div class="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80"
                  alt="Pre-Sea Induction Hall"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute inset-0"
                  style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.85) 100%);"></div>
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold"
                    style="background:#0a1628e6; color:#00E5FF; border:1px solid #0369A160;">
                    ACCREDITED FACILITY · BATCH 54
                  </span>
                </div>
                <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div class="text-sm font-bold text-white">Pre-Sea Cadet Induction Hall</div>
                    <div class="text-[11px]" style="color:#94a3b8;">Full audio-visual lecture amphitheatre · 250 capacity</div>
                  </div>
                  <span class="text-xs font-mono" style="color:#00E5FF;">DG INSPECTED ✓</span>
                </div>
              </div>
            </div>

            <!-- Bottom Photo Card: Lifeboat & Sea Survival Rig -->
            <div class="rounded-2xl border overflow-hidden relative group shadow-2xl"
              style="background:#0a1628; border-color:#1e3a5f;">
              <div class="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"
                  alt="Lifeboat & Survival Drill"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute inset-0"
                  style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.85) 100%);"></div>
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold"
                    style="background:#0a1628e6; color:#22c55e; border:1px solid #22c55e60;">
                    SOLAS COMPLIANT RIG
                  </span>
                </div>
                <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div class="text-sm font-bold text-white">Lifeboat Drill &amp; Sea Survival Rig</div>
                    <div class="text-[11px]" style="color:#94a3b8;">Davit-launched enclosed lifeboat &amp; wet drill basin</div>
                  </div>
                  <span class="text-xs font-mono" style="color:#22c55e;">STCW VI/2-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. FLAGSHIP ADMISSION DECK (3 CORE LONG-TERM CAREER PROGRAMS)   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#070D18;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
              PRE-SEA CADET INTAKE 2026/27
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white">
              Flagship Admission Deck
            </h2>
          </div>
          <p class="text-xs max-w-md leading-relaxed" style="color:#64748b;">
            DG Shipping and Indian Maritime University aligned pre-sea residential programmes preparing cadets for immediate placement across international shipping fleets.
          </p>
        </div>

        <!-- 3 Feature Deck Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Program 1: GP Rating -->
          <div class="rounded-2xl border p-6 flex flex-col justify-between transition hover:border-cyan-500 group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono px-2.5 py-1 rounded font-bold"
                  style="background:#0369A125; color:#38bdf8; border:1px solid #0369A150;">
                  PRE-SEA · 6 MONTHS
                </span>
                <span class="text-[10px] font-mono" style="color:#64748b;">STCW REG. II/4 &amp; III/4</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                GP-III General Purpose Rating
              </h3>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                Seamanship, deck work, helm orders, auxiliary engine room maintenance, survival craft, and mandatory STCW modular certifications.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  10th Pass (40% Marks)
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  Age 17.5 – 25 Yrs
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  Eyesight 6/6 Uncorrected
                </span>
              </div>
            </div>
            <div class="pt-6 mt-6 border-t flex items-center justify-between" style="border-color:#1e3a5f;">
              <div>
                <div class="text-[10px] font-mono" style="color:#64748b;">NEXT BATCH</div>
                <div class="text-xs font-bold font-mono text-white">01 Oct 2026 · 14 Seats</div>
              </div>
              <NuxtLink to="/courses"
                class="px-4 py-2 rounded-lg text-xs font-bold transition"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                Apply / Reserve →
              </NuxtLink>
            </div>
          </div>

          <!-- Program 2: BS Nautical Science -->
          <div class="rounded-2xl border p-6 flex flex-col justify-between transition hover:border-cyan-500 group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono px-2.5 py-1 rounded font-bold"
                  style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                  DEGREE · 3 YEARS
                </span>
                <span class="text-[10px] font-mono" style="color:#64748b;">STCW REG. A-II/1 (DECK)</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                BS Nautical Science (Deck Officer)
              </h3>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                Pre-sea deck officer foundation, celestial navigation, passage planning, radar/ARPA, bridge resource management, and full-mission simulator training.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  10+2 PCM (60% Min)
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  IMU-CET Qualified
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  Age 17 – 21 Yrs
                </span>
              </div>
            </div>
            <div class="pt-6 mt-6 border-t flex items-center justify-between" style="border-color:#1e3a5f;">
              <div>
                <div class="text-[10px] font-mono" style="color:#64748b;">NEXT BATCH</div>
                <div class="text-xs font-bold font-mono text-white">15 Oct 2026 · 06 Seats</div>
              </div>
              <NuxtLink to="/courses"
                class="px-4 py-2 rounded-lg text-xs font-bold transition"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                Apply / Reserve →
              </NuxtLink>
            </div>
          </div>

          <!-- Program 3: BE Marine Engineering -->
          <div class="rounded-2xl border p-6 flex flex-col justify-between transition hover:border-cyan-500 group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono px-2.5 py-1 rounded font-bold"
                  style="background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf640;">
                  DEGREE · 4 YEARS
                </span>
                <span class="text-[10px] font-mono" style="color:#64748b;">STCW REG. A-III/1 (ENGINE)</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                BE Marine Engineering (Engine Officer)
              </h3>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                Marine propulsion engineering, slow-speed 2-stroke diesel operations, high-voltage marine switchboards, auxiliary boilers, and automation.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  10+2 PCM (60% Min)
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  English 50%
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded" style="background:#070D18; color:#94a3b8; border:1px solid #1e3a5f;">
                  ENG-1 Medical Fit
                </span>
              </div>
            </div>
            <div class="pt-6 mt-6 border-t flex items-center justify-between" style="border-color:#1e3a5f;">
              <div>
                <div class="text-[10px] font-mono" style="color:#64748b;">NEXT BATCH</div>
                <div class="text-xs font-bold font-mono text-white">15 Oct 2026 · 08 Seats</div>
              </div>
              <NuxtLink to="/courses"
                class="px-4 py-2 rounded-lg text-xs font-bold transition"
                style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
                Apply / Reserve →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. EXPLORE SPECIALIZED STCW MODULAR COURSES (6-CARD GRID)        -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#050912;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-12">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
              STCW 2010 MODULAR PROGRAMMES
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white">
              Explore Specialized Courses
            </h2>
          </div>
          <NuxtLink to="/courses" class="text-xs font-bold hover:text-cyan-300 transition flex items-center gap-1" style="color:#00E5FF;">
            <span>View All 42 Courses</span>
            <span>→</span>
          </NuxtLink>
        </div>

        <!-- 6 Dense Cards (3 cols x 2 rows) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="c in modularCourses" :key="c.code"
            class="rounded-xl border p-5 flex flex-col justify-between transition hover:border-cyan-500"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                  :style="c.badgeStyle">
                  {{ c.category }}
                </span>
                <span class="text-[10px] font-mono" style="color:#64748b;">{{ c.code }}</span>
              </div>
              <h4 class="text-base font-bold text-white leading-snug">
                {{ c.title }}
              </h4>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                {{ c.desc }}
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span v-for="tag in c.tags" :key="tag"
                  class="text-[10px] px-2 py-0.5 rounded font-mono"
                  style="background:#070D18; color:#64748b; border:1px solid #1e3a5f;">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="pt-4 mt-4 border-t flex items-center justify-between" style="border-color:#1e3a5f;">
              <div>
                <span class="text-xs font-mono" style="color:#64748b;">{{ c.duration }} · </span>
                <span class="text-xs font-bold text-white">₹{{ c.price.toLocaleString() }}</span>
              </div>
              <NuxtLink :to="`/courses`"
                class="text-xs font-bold hover:text-cyan-300 transition" style="color:#00E5FF;">
                Enroll / Book →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. STATE-OF-THE-ART SIMULATORS (REAL PHOTO COMPLEX SHOWCASE)    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#070D18;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
              SIMULATION &amp; IMMERSIVE TRAINING
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white">
              State-of-the-Art Simulators
            </h2>
          </div>
          <p class="text-xs max-w-md leading-relaxed" style="color:#64748b;">
            Immersive DNV-GL Class-A approved simulator complexes replicating actual shipboard bridges, automated engine control rooms, and hazardous cargo manifolds.
          </p>
        </div>

        <!-- 6 Simulator Facility Cards (3x2) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="sim in simulators" :key="sim.name"
            class="rounded-xl border overflow-hidden transition hover:border-cyan-500 group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="relative h-44 overflow-hidden">
              <img :src="sim.image" :alt="sim.name"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute inset-0"
                style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.85) 100%);"></div>
              <div class="absolute top-3 left-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                  style="background:#0a1628e6; color:#00E5FF; border:1px solid #0369A160;">
                  {{ sim.badge }}
                </span>
              </div>
            </div>
            <div class="p-5 space-y-2">
              <h4 class="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                {{ sim.name }}
              </h4>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                {{ sim.desc }}
              </p>
              <div class="flex items-center justify-between pt-2 text-[11px] font-mono" style="color:#64748b;">
                <span>{{ sim.spec }}</span>
                <span style="color:#00E5FF;">DNV CLASS-A ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 5. KEY METRICS COUNTER STRIP                                    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-16 border-b" style="border-color:#0c1a2e; background:#040711;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
            THE SEAFU IN NUMBERS
          </div>
          <p class="text-xs" style="color:#64748b;">Proven track record in maritime education, officer certifications, and international fleet employment.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl font-black font-mono" style="color:#00E5FF;">20K+</div>
            <div class="text-xs font-bold text-white mt-1">Alumni Network</div>
            <div class="text-[10px]" style="color:#64748b;">Across 40+ maritime flags</div>
          </div>
          <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl font-black font-mono text-white">300+</div>
            <div class="text-xs font-bold text-white mt-1">Faculty &amp; Trainers</div>
            <div class="text-[10px]" style="color:#64748b;">Master Mariners &amp; Chief Engs</div>
          </div>
          <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl font-black font-mono" style="color:#22c55e;">21+</div>
            <div class="text-xs font-bold text-white mt-1">Accredited Courses</div>
            <div class="text-[10px]" style="color:#64748b;">DG Shipping &amp; UK MCA</div>
          </div>
          <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl font-black font-mono" style="color:#a78bfa;">29</div>
            <div class="text-xs font-bold text-white mt-1">Specializations</div>
            <div class="text-[10px]" style="color:#64748b;">Deck, Engine &amp; Offshore</div>
          </div>
          <div class="p-4 rounded-xl border col-span-2 md:col-span-1" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="text-3xl font-black font-mono" style="color:#fbbf24;">500+</div>
            <div class="text-xs font-bold text-white mt-1">Annual Batches</div>
            <div class="text-[10px]" style="color:#64748b;">Continuous intake cycles</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 6. INTERNATIONAL STRATEGIC OUTREACH PARTNER                     -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#070D18;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border overflow-hidden p-8 lg:p-12 shadow-2xl"
          style="background:linear-gradient(135deg,#0a1628 0%,#0c1e36 100%); border-color:#0369A150;">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Left: Campus Image (5 cols) -->
            <div class="lg:col-span-5 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="City of Glasgow College Alliance Campus"
                class="w-full h-72 object-cover" />
            </div>

            <!-- Right: Content (7 cols) -->
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono font-bold"
                style="background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b40;">
                GLOBAL MARITIME ALLIANCE
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white">
                An Outreach Campus of <span style="color:#00E5FF;">City of Glasgow College</span> &amp; UK MCA
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed" style="color:#94a3b8;">
                The Seafu Academy serves as a validated outreach institution delivering Scottish Qualifications Authority (SQA) Higher National Diplomas and preparatory training for the UK Maritime and Coastguard Agency (MCA) Certificate of Competency (CoC) examinations.
              </p>
              <div class="space-y-2 pt-2 text-xs">
                <div class="flex items-center gap-2.5">
                  <span style="color:#22c55e;">✓</span>
                  <span style="color:#cbd5e1;">Direct progression pathway to UK MCA Officer of the Watch (OOW) certification</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span style="color:#22c55e;">✓</span>
                  <span style="color:#cbd5e1;">Dual-certified faculty audited annually by SQA and DNV Quality Systems</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span style="color:#22c55e;">✓</span>
                  <span style="color:#cbd5e1;">Guaranteed cadet interview rounds with European and Commonwealth ship operators</span>
                </div>
              </div>
              <div class="pt-4 flex items-center gap-4">
                <NuxtLink to="/courses"
                  class="px-5 py-2.5 rounded-lg text-xs font-bold transition"
                  style="background:#0369A1; color:#fff;">
                  Glasgow Alliance Program Info →
                </NuxtLink>
                <span class="text-[11px] font-mono" style="color:#64748b;">REF: UK-MCA-9022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 7. CADET DRILLS & MARINE OPERATIONS (PRACTICAL FIELD GALLERY)   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#050912;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
              CAMPUS &amp; PRACTICAL LIFE
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white">
              Cadet Drills &amp; Marine Operations
            </h2>
          </div>
          <span class="text-xs font-mono" style="color:#64748b;">PRACTICAL LOGGED SEA HOURS</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Action 1 -->
          <div class="rounded-xl border overflow-hidden relative group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Bridge Team Management"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute inset-0"
                style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.9) 100%);"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="text-sm font-bold text-white">Bridge Team Watch Assembly</div>
                <div class="text-xs mt-0.5" style="color:#94a3b8;">Blind pilotage and navigational passage execution</div>
              </div>
            </div>
          </div>

          <!-- Action 2 -->
          <div class="rounded-xl border overflow-hidden relative group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80"
                alt="Enclosed Space Drill"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute inset-0"
                style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.9) 100%);"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="text-sm font-bold text-white">Enclosed Space Entry &amp; BA Rescue</div>
                <div class="text-xs mt-0.5" style="color:#94a3b8;">Breathing apparatus and hazardous gas containment</div>
              </div>
            </div>
          </div>

          <!-- Action 3 -->
          <div class="rounded-xl border overflow-hidden relative group"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
                alt="Deep Sea Vessel Placements"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute inset-0"
                style="background:linear-gradient(180deg, rgba(7,13,24,0.1) 0%, rgba(7,13,24,0.9) 100%);"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="text-sm font-bold text-white">Deep Sea Fleet Placements</div>
                <div class="text-xs mt-0.5" style="color:#94a3b8;">Worldwide trade on tankers, container vessels &amp; gas carriers</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Online Student & Certificate Verification Strip -->
        <div class="mt-8 rounded-xl border p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style="background:#0369A115; border-color:#0369A145;">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🛡️</span>
            <div>
              <div class="text-xs font-bold text-white">Online Student &amp; Certificate Verification</div>
              <div class="text-[11px]" style="color:#94a3b8;">
                Port State Control officers, vetting inspectors and manning agents can verify STCW credentials 24/7.
              </div>
            </div>
          </div>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA"
            class="px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition"
            style="background:#00E5FF; color:#070D18;">
            Verify Certificate Online →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 8. TOP NOTICES & DG CIRCULARS                                   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20 border-b" style="border-color:#0c1a2e; background:#070D18;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <div>
            <div class="text-xs font-mono tracking-widest uppercase mb-1" style="color:#00E5FF;">
              BULLETIN BOARD
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white">
              Top Stories &amp; Notices
            </h2>
          </div>
          <NuxtLink to="/community" class="text-xs font-bold hover:text-cyan-300 transition" style="color:#00E5FF;">
            All Circulars →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Featured Lead Story (7 cols) -->
          <div class="lg:col-span-7 rounded-xl border p-6 flex flex-col justify-between"
            style="background:#0a1628; border-color:#0c1a2e;">
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#dc262620; color:#f87171; border:1px solid #dc262640;">
                  MARITIME ALERT
                </span>
                <span class="text-xs font-mono" style="color:#64748b;">16 Sep 2026</span>
              </div>
              <h3 class="text-xl font-bold text-white leading-snug">
                DG Shipping Issues Advisory: Revised Minimum Safe Sea-Time Criteria for Second Mate FG Examinations 2026
              </h3>
              <p class="text-xs leading-relaxed" style="color:#94a3b8;">
                The Directorate General of Shipping has issued an updated circular regarding sea-time evaluation guidelines for Cadets completing distance-learning training programmes. All candidates enrolled in Batch 53 and onwards must document a minimum of 18 months qualifying bridge watchkeeping sea-service.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t flex items-center justify-between" style="border-color:#1e3a5f;">
              <span class="text-xs font-mono" style="color:#00E5FF;">CIRCULAR NO: DGS-TR-09/2026</span>
              <NuxtLink to="/community" class="text-xs font-bold text-white hover:text-cyan-300 transition">
                Read Full Circular →
              </NuxtLink>
            </div>
          </div>

          <!-- Secondary Notice Cards (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <div class="rounded-xl border p-5 space-y-2" style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#0369A120; color:#38bdf8; border:1px solid #0369A140;">
                  EXAM SCHEDULE
                </span>
                <span class="text-xs font-mono" style="color:#64748b;">14 Sep 2026</span>
              </div>
              <h4 class="font-bold text-sm text-white">
                MMD Mumbai Announces Dates for October 2026 Chief Mate Oral Assessments
              </h4>
              <p class="text-xs" style="color:#94a3b8;">
                Online seat booking opens on 20 Sep 2026 at 10:00 AM IST via the Seafu governance gateway.
              </p>
            </div>

            <div class="rounded-xl border p-5 space-y-2" style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                  style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                  PLACEMENT DRIVE
                </span>
                <span class="text-xs font-mono" style="color:#64748b;">11 Sep 2026</span>
              </div>
              <h4 class="font-bold text-sm text-white">
                Major Tanker Operator Essence Shipping Conducts On-Campus Cadet Selections
              </h4>
              <p class="text-xs" style="color:#94a3b8;">
                32 Deck and Engine cadets selected for placement on modern dual-fuel LNG vessels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 9. BOTTOM CONVERSION CTA BANNER                                 -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="py-20" style="background:linear-gradient(135deg,#070D18 0%,#0c1e36 100%);">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
          style="background:#0a1628; border-color:#0369A150;">
          <div class="text-xs font-mono tracking-widest uppercase mb-2" style="color:#00E5FF;">
            START YOUR ADMISSION PROCESS
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-white leading-tight">
            Ready to Set Sail with The Seafu?
          </h2>
          <p class="mt-3 text-xs sm:text-sm max-w-xl mx-auto" style="color:#94a3b8;">
            Apply online for the upcoming batch admissions, book your mandatory STCW modular courses, or speak directly with our cadet admissions counsellor.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <NuxtLink to="/auth/register?role=SEAFARER"
              class="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition shadow-lg"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              Apply Online Now →
            </NuxtLink>
            <a href="tel:+912261204000"
              class="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm border transition"
              style="border-color:#1e3a5f; color:#cbd5e1; background:#070D18;">
              📞 Call Helpline: +91 22 6120 4000
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'The Seafu Maritime Academy · DG Shipping Approved Cadet & Officer Training',
  meta: [
    {
      name: 'description',
      content: 'Premier DG Shipping recognized maritime institution delivering pre-sea cadet training, Class-A simulation, STCW modular certifications and international ship placements.',
    },
  ],
});

const modularCourses = [
  {
    code: 'STCW A-III/1-2',
    category: 'ADVANCED STCW',
    badgeStyle: 'background:#0369A125; color:#38bdf8; border:1px solid #0369A150;',
    title: 'High Voltage Safety & Switchgear (HV-MEC)',
    desc: 'Hands-on operational safety management for marine electrical distribution systems exceeding 1,000V in accordance with STCW Manila Amendments.',
    duration: '5 Days',
    price: 14500,
    tags: ['Engine Officers', 'DGS Approved'],
  },
  {
    code: 'STCW A-VI/3',
    category: 'MODULAR STCW',
    badgeStyle: 'background:#dc262620; color:#f87171; border:1px solid #dc262640;',
    title: 'Advanced Fire Fighting (AFF)',
    desc: 'Breathing apparatus wear, fixed CO2/foam fire-fighting systems, search and rescue in dense smoke, and emergency scenario command.',
    duration: '5 Days',
    price: 8500,
    tags: ['SOLAS II-2', 'Mandatory'],
  },
  {
    code: 'STCW A-VI/2-1',
    category: 'MODULAR STCW',
    badgeStyle: 'background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b40;',
    title: 'Proficiency in Survival Craft (PSCRB)',
    desc: 'Real open-water launching and recovery of davit-launched lifeboats, rescue boats, and hydrostatic release units under simulated heavy weather.',
    duration: '5 Days',
    price: 9200,
    tags: ['SOLAS III', 'Lifeboat'],
  },
  {
    code: 'IALA V-103/1',
    category: 'SIMULATOR',
    badgeStyle: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;',
    title: 'Vessel Traffic Services Operator (VTS)',
    desc: 'Radar/ARPA tracking, VHF marine communications, port approaches monitoring, and emergency situation containment for coastal traffic officers.',
    duration: '10 Days',
    price: 24000,
    tags: ['Port Ops', 'Simulator'],
  },
  {
    code: 'STCW V/1-1',
    category: 'SIMULATOR',
    badgeStyle: 'background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf640;',
    title: 'Liquid Cargo Handling Simulator (LCHS)',
    desc: 'Full training on inert gas systems, nitrogen purging, crude oil washing (COW), manifold pressure control, and specialized tanker operations.',
    duration: '5 Days',
    price: 18000,
    tags: ['Oil & Chemical', 'Tankers'],
  },
  {
    code: 'STCW A-II/1',
    category: 'SIMULATOR',
    badgeStyle: 'background:#00E5FF20; color:#00E5FF; border:1px solid #00E5FF40;',
    title: 'ECDIS Electronic Chart Display & Navigation',
    desc: 'IMO Model Course 1.27 generic and type-specific training on Transas Navi-Sailor and Kongsberg K-Bridge systems.',
    duration: '5 Days',
    price: 11000,
    tags: ['IMO 1.27', 'Deck Officers'],
  },
];

const simulators = [
  {
    name: 'Full Mission 360° Bridge Simulator',
    badge: 'TRANSAS 5000',
    desc: 'DNV-GL Class-A certified 360° visual projection replicating heavy sea conditions, narrow channel navigation, and multi-vessel collision avoidance.',
    spec: '360° Vision · 14 Tug Interconnect',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Engine Room Simulator (ERS 5000)',
    badge: 'MAN B&W slow-speed 2-stroke',
    desc: 'Real-time thermodynamic simulation of main propulsion, auxiliary boilers, electrical generators, fuel oil purifiers, and blackout recovery drills.',
    spec: 'Full Control Room + Local Panels',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Liquid Cargo Handling Simulator (LCHS)',
    badge: 'VLCC & LNG Membrane',
    desc: 'Operational simulation of loading, discharging, ballasting, inerting, and tank washing for very large crude carriers and dual-fuel LNG carriers.',
    spec: 'Multi-Grade Manifold Controls',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'ECDIS Navigation Terminal Lab',
    badge: '16 INTERCONNECTED STATIONS',
    desc: 'Passage planning, safety contours calculation, dual radar overlay, and chart updating on type-specific electronic chart display consoles.',
    spec: 'Kongsberg & Transas Dual Certified',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'VTS Radar & AIS Traffic Console',
    badge: 'IALA V-103 COMPLIANT',
    desc: 'Coastal traffic separation schemes, port approaches monitoring, VHF marine distress traffic management, and pilotage coordination.',
    spec: 'AIS Live Feed Integration',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'GMDSS Operational Radio Console',
    badge: 'SAILOR 6000 A3/A4',
    desc: 'Inmarsat-C, MF/HF DSC distress alerting, Navtex, VHF telephony, and search and rescue transponder (SART) live satellite communications.',
    spec: 'Area A1, A2, A3, A4 Consoles',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];
</script>
