<template>
  <div class="min-h-screen font-sans" style="background:#070D18; color:#e2e8f0;">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP IDENTITY & ACADEMY COMMAND BAR                           -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="border-b px-4 sm:px-6 py-4" style="background:#050a14; border-color:#0c1a2e;">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <!-- Left: Academy Brand -->
        <div class="flex items-start sm:items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-slate-950 shadow-xl"
            style="background:linear-gradient(135deg,#0369A1,#00E5FF); border:2px solid #00E5FF40;">
            ⚓
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="text-lg sm:text-xl font-black text-white">
                {{ authStore.user?.institute?.name || 'Maritime Training Institute (MTI Karachi)' }}
              </h1>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                style="background:#0369A125; color:#00E5FF; border:1px solid #0369A150;">
                MINISTRY OF MARITIME AFFAIRS REG 2019
              </span>
            </div>
            <div class="text-[11px] mt-0.5" style="color:#64748b;">
              MTI Complex, Karachi · Established 1998 · City of Glasgow College UK MCA Academic Partner
            </div>
          </div>
        </div>

        <!-- Right: Regulatory Credentials & Head of Academy -->
        <div class="flex items-center gap-3 text-xs font-mono shrink-0 flex-wrap">
          <div class="px-3 py-1.5 rounded-lg border text-right" style="background:#0a1628; border-color:#1e3a5f;">
            <div class="text-[9px]" style="color:#64748b;">DG APPROVAL</div>
            <div class="font-bold text-cyan-400">KHI-01 · CIP GRADE 1</div>
          </div>
          <div class="px-3 py-1.5 rounded-lg border text-right" style="background:#0a1628; border-color:#1e3a5f;">
            <div class="text-[9px]" style="color:#64748b;">HEAD OF NAUTICAL STUDIES</div>
            <div class="font-bold text-white">Capt. A. R. Khan (Master Mariner)</div>
          </div>
        </div>
      </div>

      <!-- Command Sub-Navigation Pills -->
      <div class="max-w-7xl mx-auto mt-4 pt-3 border-t flex items-center gap-2 overflow-x-auto text-xs font-bold"
        style="border-color:#0c1a2e;">
        <button class="px-3.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
          style="background:#00E5FF; color:#070D18;">
          <span>🕹️</span>
          <span>Ops Command</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          <span>🎓</span>
          <span>Pre-Sea Intakes</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          <span>🖥️</span>
          <span>Simulators &amp; Labs</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
          style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
          <span>📜</span>
          <span>DG Endorsements</span>
        </button>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. GLOBAL NETWORK & CAPACITY METRICS STRIP (5 CARDS)            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">GLOBAL ALUMNI NETWORK</div>
          <div class="text-2xl sm:text-3xl font-black font-mono text-white mt-1">20,000+</div>
          <div class="text-[10px] mt-1" style="color:#22c55e;">● Active at sea since 1998</div>
        </div>

        <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">MASTER MARINERS &amp; C/E</div>
          <div class="text-2xl sm:text-3xl font-black font-mono text-cyan-400 mt-1">300+</div>
          <div class="text-[10px] mt-1" style="color:#64748b;">IMO Certified Instructors</div>
        </div>

        <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">DG APPROVED COURSES</div>
          <div class="text-2xl sm:text-3xl font-black font-mono text-emerald-400 mt-1">21+</div>
          <div class="text-[10px] mt-1" style="color:#64748b;">Full STCW Accreditations</div>
        </div>

        <div class="p-4 rounded-xl border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">HIGH-END SIMULATORS</div>
          <div class="text-2xl sm:text-3xl font-black font-mono text-purple-400 mt-1">6 Suites</div>
          <div class="text-[10px] mt-1" style="color:#64748b;">Bridge, LCHS, ECDIS &amp; Engine</div>
        </div>

        <div class="p-4 rounded-xl border col-span-2 sm:col-span-1" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-[10px] font-mono tracking-wider" style="color:#64748b;">JUNE 2026 INTAKES</div>
          <div class="text-xl sm:text-2xl font-black font-mono text-amber-400 mt-1">GP-III &amp; HND</div>
          <div class="text-[10px] mt-1 text-cyan-400">● Cadet Roster Open</div>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. CADET PRACTICAL LIVE FIRE DRILL NOTIFICATION BANNER           -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <div class="rounded-2xl border p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl"
        style="background:linear-gradient(135deg,#0a1628 0%,#0f2238 100%); border-color:#0369A160;">
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
            style="background:#f59e0b20; border:1px solid #f59e0b40;">
            🔥
          </div>
          <div>
            <div class="text-[10px] font-mono font-bold tracking-wider text-amber-400">
              KPT APPRENTICE DRILL GROUND · DECK BURNS &amp; LIFE RAFT · Batch #GP3-2026-003
            </div>
            <div class="text-xs sm:text-sm font-bold text-white mt-0.5">
              Cadet practical live fire drill and life raft survival exercise scheduled at KPT facility.
              <strong class="text-cyan-400">40 GP-III candidates</strong> logged for biometric sign-off and mtiverification.com endorsement.
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 shrink-0">
          <button class="px-4 py-2 rounded-xl text-xs font-bold border transition"
            style="border-color:#1e3a5f; color:#94a3b8; background:#070D18;">
            Drill Attendance Log
          </button>
          <button class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-lg"
            style="background:#f59e0b; color:#070D18;">
            Endorse 40 Cadet Certificates →
          </button>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 4. MAIN WORKSPACE: BATCH INVENTORY & SIMULATOR SCHEDULING       -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- ── LEFT COLUMN: BATCH INVENTORY & LIVE CAPACITIES (8 cols) ── -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Section Title & Action -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 class="text-lg font-bold text-white">
                Batch Inventory &amp; Live Capacity Controller
              </h2>
              <p class="text-xs" style="color:#64748b;">
                Real-Time DG Approved STCW course allocations, seat capacities &amp; simulator scheduling.
              </p>
            </div>
            <button class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 shadow-lg"
              style="background:#00E5FF; color:#070D18;">
              <span>+</span>
              <span>Schedule New Batch</span>
            </button>
          </div>

          <!-- Filter Segment Tabs -->
          <div class="flex items-center gap-2 border-b pb-2 overflow-x-auto text-xs" style="border-color:#0c1a2e;">
            <button class="px-3 py-1.5 rounded-lg font-bold transition"
              style="background:#0369A1; color:#fff;">
              All Batches (16)
            </button>
            <button class="px-3 py-1.5 rounded-lg transition font-mono"
              style="background:#0a1628; color:#fbbf24; border:1px solid #1e3a5f;">
              ● Filling Fast / &lt;5 Seats (4)
            </button>
            <button class="px-3 py-1.5 rounded-lg transition"
              style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
              Completed &amp; Ready (5)
            </button>
            <button class="px-3 py-1.5 rounded-lg transition"
              style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
              Upcoming / Next 14D (7)
            </button>
            <button class="px-3 py-1.5 rounded-lg transition"
              style="background:#0a1628; color:#94a3b8; border:1px solid #1e3a5f;">
              Simulator Labs
            </button>
          </div>

          <!-- Search & Select Row -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input v-model="batchSearch" type="text"
              placeholder="Search STCW Code, Course Name, or Batch Ref..."
              class="px-3.5 py-2 text-xs rounded-lg outline-none text-white border"
              style="background:#0a1628; border-color:#1e3a5f;" />
            <select class="px-3 py-2 text-xs rounded-lg outline-none text-white border"
              style="background:#0a1628; border-color:#1e3a5f;">
              <option>All Modules &amp; Decks</option>
              <option>Pre-Sea GP-III</option>
              <option>Nautical Science</option>
              <option>Marine Engineering</option>
            </select>
            <select class="px-3 py-2 text-xs rounded-lg outline-none text-white border"
              style="background:#0a1628; border-color:#1e3a5f;">
              <option>All Labs &amp; Simulators</option>
              <option>Full Mission Bridge (FMBS)</option>
              <option>Engine Room (ERS)</option>
              <option>Liquid Cargo (LCHS)</option>
              <option>ECDIS Suite</option>
            </select>
          </div>

          <!-- Live Batch Cards (Exact Replica of Image 2) -->
          <div class="space-y-4">
            
            <!-- Batch 1: GP-III Rating -->
            <div class="rounded-xl border p-5 space-y-3 transition hover:border-cyan-500"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80"
                      alt="GP-III Cadets"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                        style="background:#0369A125; color:#00E5FF; border:1px solid #0369A150;">
                        GP3-2026-003
                      </span>
                      <span class="text-[10px] font-mono" style="color:#64748b;">
                        STCW II/4 Pre-Sea General Purpose · DG Approved Pre-Sea
                      </span>
                    </div>
                    <h3 class="text-base font-bold text-white mt-1">
                      General Purpose Training (GP-III) - 3rd Intake 2026
                    </h3>
                    <div class="text-xs mt-0.5" style="color:#94a3b8;">
                      MTI Auditorium &amp; KPT Yard · Capt. Z. Abbas (Course In-Charge) · <span class="text-emerald-400">Physical &amp; Medical Cleared</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black font-mono text-white">PKR 1,85,000</div>
                  <div class="text-[10px] font-mono text-cyan-400">Installment Scheme Available</div>
                  <div class="text-[10px] font-mono mt-0.5" style="color:#64748b;">Intake: June 2026 – Dec 2026 (6 Mos)</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs font-mono">
                  <span style="color:#64748b;">Enrollment Cap: <strong class="text-white">40 / 50 Cadets Enrolled (80%)</strong></span>
                  <span class="font-bold text-amber-400">10 Seats Left (Interviews in Progress)</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full" style="width:80%; background:linear-gradient(90deg,#0369A1,#00E5FF);"></div>
                </div>
              </div>

              <div class="pt-3 border-t flex items-center justify-between text-xs" style="border-color:#1e3a5f;">
                <span class="text-emerald-400 font-mono text-[11px]">● Bio-Attendance &amp; Uniform Muster Verified</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded text-xs font-bold border" style="border-color:#1e3a5f; color:#94a3b8;">
                    Candidate Roster (40)
                  </button>
                  <button class="px-3 py-1.5 rounded text-xs font-bold" style="background:#0369A1; color:#fff;">
                    Admissions Quota
                  </button>
                </div>
              </div>
            </div>

            <!-- Batch 2: Advance Diploma in Nautical Science -->
            <div class="rounded-xl border p-5 space-y-3 transition hover:border-cyan-500"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"
                      alt="Full Mission Bridge"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                        style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;">
                        HND-NAUT-2026
                      </span>
                      <span class="text-[10px] font-mono" style="color:#64748b;">
                        UK MCA / SQA Pathway · City of Glasgow Partner · Session: Aug 2026 – June 2028 (2 Years)
                      </span>
                    </div>
                    <h3 class="text-base font-bold text-white mt-1">
                      Advance Diploma in Nautical Science (HND UK MCA Pathway)
                    </h3>
                    <div class="text-xs mt-0.5" style="color:#94a3b8;">
                      City of Glasgow College Curriculum · Full Mission 360° Bridge Simulator · <span class="text-cyan-400">UK CoC OOW Deck Route</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black font-mono text-white">GBP £4,200 / yr</div>
                  <div class="text-[10px] font-mono text-emerald-400">Scottish Qualifications Authority (SQA)</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs font-mono">
                  <span style="color:#64748b;">Batch Quota: <strong class="text-white">22 / 25 Cadets Confirmed (88%)</strong></span>
                  <span class="font-bold text-amber-400">3 Seats Remaining for UK Visa Window</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full" style="width:88%; background:linear-gradient(90deg,#0369A1,#22c55e);"></div>
                </div>
              </div>

              <div class="pt-3 border-t flex items-center justify-between text-xs" style="border-color:#1e3a5f;">
                <span class="text-cyan-400 font-mono text-[11px]">✓ UK Visa Letter Verification Active</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded text-xs font-bold border" style="border-color:#1e3a5f; color:#94a3b8;">
                    Review SQA Scores
                  </button>
                  <button class="px-3 py-1.5 rounded text-xs font-bold" style="background:#00E5FF; color:#070D18;">
                    Glasgow Portal Sync
                  </button>
                </div>
              </div>
            </div>

            <!-- Batch 3: Marine Engineering & ERS -->
            <div class="rounded-xl border p-5 space-y-3 transition hover:border-cyan-500"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80"
                      alt="Engine Room Simulator"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                        style="background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf640;">
                        HND-ENG-09
                      </span>
                      <span class="text-[10px] font-mono" style="color:#64748b;">
                        STCW Table A-III/1 &amp; A-III/2 · Wärtsilä ERS Suite · Active Module: 01 June – 30 June 2026
                      </span>
                    </div>
                    <h3 class="text-base font-bold text-white mt-1">
                      Advance Diploma in Marine Engineering &amp; Engine Room Simulator
                    </h3>
                    <div class="text-xs mt-0.5" style="color:#94a3b8;">
                      Wärtsilä / Transas Engine Console · Chief Eng. Tariq M. (Ex-PNSC) · <span class="text-purple-400">Plant Blackout Scenario</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black font-mono text-white">PKR 1,60,000</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">Full Lab Immersion Included</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs font-mono">
                  <span style="color:#64748b;">Capacity: <strong class="text-white">16 / 16 Seats Filled (100% Full)</strong></span>
                  <span class="font-bold text-emerald-400">● Lab Running</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full bg-emerald-500" style="width:100%;"></div>
                </div>
              </div>

              <div class="pt-3 border-t flex items-center justify-between text-xs" style="border-color:#1e3a5f;">
                <span class="text-slate-400 font-mono text-[11px]">● 5 Multi-Display Consoles Live Operational</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded text-xs font-bold border" style="border-color:#1e3a5f; color:#94a3b8;">
                    Engine Fault Log
                  </button>
                  <button class="px-3 py-1.5 rounded text-xs font-bold" style="background:#0369A1; color:#fff;">
                    Simulator Telemetry
                  </button>
                </div>
              </div>
            </div>

            <!-- Batch 4: ECDIS Electronic Chart Display -->
            <div class="rounded-xl border p-5 space-y-3 transition hover:border-cyan-500"
              style="background:#0a1628; border-color:#0c1a2e;">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80"
                      alt="ECDIS Suite"
                      class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                        style="background:#0369A120; color:#38bdf8; border:1px solid #0369A140;">
                        ECDIS-2026-06
                      </span>
                      <span class="text-[10px] font-mono" style="color:#64748b;">
                        IMO Model Course 1.27 · DG Ports Approved · 08 June – 12 June 2026 (5 Days)
                      </span>
                    </div>
                    <h3 class="text-base font-bold text-white mt-1">
                      ECDIS Electronic Chart Display &amp; Information Systems
                    </h3>
                    <div class="text-xs mt-0.5" style="color:#94a3b8;">
                      MTI ECDIS Dedicated Simulator Suite · Capt. S. Hashmi (Senior Instructor) · <span class="text-cyan-400">Transas Navi-Sailor 4000</span>
                    </div>
                  </div>
                </div>

                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black font-mono text-white">PKR 35,000</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">Certification Included</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1 pt-1">
                <div class="flex items-center justify-between text-xs font-mono">
                  <span style="color:#64748b;">Enrolled: <strong class="text-white">12 / 12 Seats Filled (100%)</strong></span>
                  <span class="font-bold text-cyan-400">Course in Progress</span>
                </div>
                <div class="h-2 rounded-full overflow-hidden" style="background:#1e3a5f;">
                  <div class="h-full rounded-full bg-cyan-500" style="width:100%;"></div>
                </div>
              </div>

              <div class="pt-3 border-t flex items-center justify-between text-xs" style="border-color:#1e3a5f;">
                <span class="text-emerald-400 font-mono text-[11px]">✓ 12 Trainees Passing Chart Correction Assessment</span>
                <div class="space-x-2">
                  <button class="px-3 py-1.5 rounded text-xs font-bold border" style="border-color:#1e3a5f; color:#94a3b8;">
                    Candidate Roster
                  </button>
                  <button class="px-3 py-1.5 rounded text-xs font-bold" style="background:#0369A1; color:#fff;">
                    Assessment Sheet
                  </button>
                </div>
              </div>
            </div>

            <!-- Mini Batch Cards Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="rounded-xl border p-4 flex items-center gap-3" style="background:#0a1628; border-color:#0c1a2e;">
                <div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80"
                    alt="GMDSS" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[10px] font-mono text-amber-400">3 Seats Left</div>
                  <div class="text-xs font-bold text-white truncate">GMDSS General Operator (GOC-34)</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">PKR 45,000 · 12 Days</div>
                </div>
              </div>

              <div class="rounded-xl border p-4 flex items-center gap-3" style="background:#0a1628; border-color:#0c1a2e;">
                <div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=200&q=80"
                    alt="LCHS Tanker" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[10px] font-mono text-cyan-400">Full Mission Suite</div>
                  <div class="text-xs font-bold text-white truncate">Liquid Cargo Handling (LCHS-TANKER)</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">PKR 55,000 · 5 Days</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ── RIGHT COLUMN: VERIFICATION GATEWAY & LABS (4 cols) ────── -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Widget 1: mtiverification.com Gateway -->
          <div class="rounded-xl border p-5 space-y-4" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-3" style="border-color:#1e3a5f;">
              <div>
                <span class="text-sm font-bold text-white">mtiverification.com Gateway</span>
                <div class="text-[11px]" style="color:#64748b;">Official MTI Maritime Certificate Issuer</div>
              </div>
              <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                style="background:#0369A125; color:#00E5FF; border:1px solid #0369A150;">
                DG PORTS LINKED
              </span>
            </div>

            <div class="space-y-2 text-xs" style="color:#94a3b8;">
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">①</span>
                <span>Pakistani Seaman Book &amp; NADRA Bio Verified</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">②</span>
                <span>Simulator Hours &amp; KPT Drill Log Validated</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">③</span>
                <span>Principal Digital Seal &amp; QR Generated</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">④</span>
                <span>Instant Lookup at mtiverification.com</span>
              </div>
            </div>

            <!-- QR Preview Card -->
            <div class="rounded-xl border p-4 space-y-3" style="background:#070D18; border-color:#1e3a5f;">
              <div class="flex items-center justify-between text-[10px] font-mono">
                <span style="color:#64748b;">MTI KARACHI VERIFIED</span>
                <span class="text-cyan-400">#MTI-KHI-2026-7782</span>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-16 h-16 bg-white p-1 rounded-lg flex items-center justify-center shrink-0">
                  <div class="text-[9px] font-mono text-black font-black text-center leading-tight">
                    MTI<br/>QR<br/>CERT
                  </div>
                </div>
                <div class="text-xs space-y-0.5 min-w-0">
                  <div class="text-[9px] font-mono text-slate-500">CERTIFICATE HOLDER</div>
                  <div class="font-bold text-white truncate">Cadet Muhammad Bilal</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">CDC #KHI-54132 · GP-III</div>
                  <div class="text-[10px] font-mono text-cyan-400">mtiverification.com/7782</div>
                </div>
              </div>

              <div class="flex items-center justify-between text-[10px] pt-1" style="color:#64748b;">
                <span>Authority: DG Ports &amp; Shipping</span>
                <span class="text-emerald-400">✓ Ministry Stamped</span>
              </div>
            </div>

            <button class="w-full py-2.5 rounded-xl text-xs font-bold transition shadow-lg flex items-center justify-center gap-2"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              <span>🔏</span>
              <span>Sign &amp; Dispatch mtiverification.com Stamped Batch</span>
            </button>
            <p class="text-[10px] text-center" style="color:#64748b;">
              Connects directly to Ministry of Maritime Affairs certificate repository.
            </p>
          </div>

          <!-- Widget 2: High Voltage Safety Lab -->
          <div class="rounded-xl border p-5 space-y-3" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-2" style="border-color:#1e3a5f;">
              <span class="text-xs font-bold text-white">⚡ High Voltage Safety Lab</span>
              <span class="text-[10px] font-mono text-emerald-400">Operational</span>
            </div>

            <div class="h-32 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                alt="High Voltage Lab"
                class="w-full h-full object-cover" />
              <span class="absolute bottom-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                style="background:#070D18e6; color:#00E5FF; border:1px solid #0369A160;">
                Arc Flash Gear &amp; Interlocks
              </span>
              <span class="absolute bottom-2 right-2 text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                style="background:#22c55e20; color:#22c55e;">
                Live Lab Active
              </span>
            </div>

            <p class="text-xs leading-relaxed" style="color:#94a3b8;">
              Mandatory STCW High Voltage Course for Marine Engineers &amp; ETOs. Calibrated ABB &amp; Schneider panels fully compliant with DG Ports specifications.
            </p>
          </div>

          <!-- Widget 3: Compliance & Partnerships -->
          <div class="rounded-xl border p-5 space-y-3" style="background:#0a1628; border-color:#0c1a2e;">
            <div class="flex items-center justify-between border-b pb-2" style="border-color:#1e3a5f;">
              <span class="text-xs font-bold text-white">Compliance &amp; Partnerships</span>
              <span class="text-[10px] font-mono font-bold text-cyan-400">Grade 1</span>
            </div>

            <div class="space-y-2 text-xs" style="color:#94a3b8;">
              <div class="flex items-start gap-2">
                <span class="text-emerald-400 mt-0.5">✓</span>
                <div>
                  <div class="font-bold text-white">DG Ports &amp; Shipping, Pakistan</div>
                  <div class="text-[10px]" style="color:#64748b;">Ministry of Maritime Affairs · Accredited since 1998</div>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-emerald-400 mt-0.5">✓</span>
                <div>
                  <div class="font-bold text-white">City of Glasgow College (UK)</div>
                  <div class="text-[10px]" style="color:#64748b;">HND Nautical Science &amp; Marine Eng. Direct Route</div>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-cyan-400 mt-0.5">📞</span>
                <div>
                  <div class="font-bold text-white">Admissions &amp; Cadet Desk</div>
                  <div class="text-[10px] font-mono" style="color:#64748b;">+92 336 6668475 · info@mti.edu.pk</div>
                </div>
              </div>
            </div>

            <div class="pt-2 border-t flex items-center justify-between text-[10px] font-mono"
              style="border-color:#1e3a5f; color:#64748b;">
              <span>Server Sync: mtiverification.com</span>
              <span class="text-emerald-400">Ping: 18ms</span>
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
useHead({ title: 'MTI Operations & Cadet Command · Training Academy Console' });

const authStore = useAuthStore();
onMounted(() => {
  authStore.initAuth();
});

const batchSearch = ref('');
</script>
