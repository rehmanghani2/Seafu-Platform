<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="closeAllModals"
  >
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP GLOBAL HEADER                                              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs" role="banner">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand & Context -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/dashboard"
            class="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xl"
            aria-label="The Seafu Academy Console Home"
          >
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>

          <span class="hidden sm:inline-block text-slate-300 text-sm" aria-hidden="true">/</span>
          <nav aria-label="Breadcrumb" class="hidden sm:inline-block">
            <span class="text-xs font-semibold text-slate-600">Ops Command &bull; MTI Karachi</span>
          </nav>
        </div>

        <!-- Right Side: Quick Action & Profile -->
        <div class="flex items-center space-x-3">
          <button
            @click="openBroadcastModal = true"
            type="button"
            class="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 rounded-xl hover:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
            aria-label="Broadcast instant alert to enrolled cadets"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <span>Broadcast Notice</span>
          </button>

          <NuxtLink
            to="/"
            class="hidden md:inline-flex text-xs font-semibold text-slate-600 hover:text-slate-900 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1.5 py-0.5"
          >
            Public Site
          </NuxtLink>

          <div class="h-5 w-px bg-slate-200 hidden md:block" aria-hidden="true"></div>

          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-xs" title="MTI Administrator">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="hidden sm:block text-left">
              <div class="text-xs font-bold text-slate-900">Admin Console</div>
              <div class="text-[10px] text-slate-500 font-medium">Master Mariner</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN TWO-COLUMN WORKSPACE                                      -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <!-- Left Sidebar Navigation -->
      <InstituteSidebarNav />

      <!-- Right Main Content Canvas -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full" role="main">
        <!-- ── IDENTITY COMMAND BANNER (NAVY) ───────────── -->
        <section aria-label="Academy Identity Overview" class="rounded-2xl p-5 sm:p-6 text-white shadow-md bg-[#0A1936] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div class="flex items-start sm:items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-white font-black text-xl shadow-xs shrink-0">
              <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h1 class="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Maritime Training Institute (MTI Karachi)
                </h1>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-blue-900/80 text-blue-300 border border-blue-700/50 uppercase">
                  MINISTRY REG 2019
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-amber-900/80 text-amber-300 border border-amber-600/50 uppercase">
                  CIP GRADE 1
                </span>
              </div>
              <p class="text-xs text-slate-300 font-normal">
                MTI Complex, Karachi &bull; Estd. 1998 &bull; City of Glasgow College UK MCA Partner &bull; ECDSA SHA-256 Verifier Active
              </p>
            </div>
          </div>

          <!-- Quick Header Actions -->
          <div class="flex items-center gap-2.5 text-xs shrink-0 flex-wrap">
            <NuxtLink
              to="/institute/courses/create"
              class="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Create Course</span>
            </NuxtLink>
            <button
              @click="openNewBatchModal"
              type="button"
              class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
            >
              <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Batch</span>
            </button>
          </div>
        </section>

        <!-- ── 5 OPS KPI METRICS WITH TRENDS ── -->
        <section aria-label="Key Performance Indicators" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">ACTIVE CADETS</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">340</div>
            <div class="text-[11px] text-emerald-800 font-semibold flex items-center space-x-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>+14% vs last intake</span>
            </div>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">GROSS REVENUE (GMV)</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">PKR 4.85M</div>
            <div class="text-[11px] text-slate-600 font-medium">90% Academy Escrow</div>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">DG APPROVED COURSES</div>
            <div class="text-2xl font-bold text-emerald-800 font-mono">18</div>
            <div class="text-[11px] text-slate-600 font-medium">100% Audit Cleared</div>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">SIMULATOR SUITES</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">6 Suites</div>
            <div class="text-[11px] text-slate-600 font-medium">120 hrs/wk active</div>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1 col-span-2 sm:col-span-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">SEAT OCCUPANCY</div>
            <div class="text-2xl font-bold text-amber-800 font-mono">84.2%</div>
            <div class="text-[11px] text-blue-800 font-semibold">Summer Peak Cycle</div>
          </div>
        </section>

        <!-- ── DAILY SIMULATOR & CLASSROOM ACADEMIC TIMETABLE (NEW) ── -->
        <section aria-label="Today's Academic Timetable" class="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <h2 class="text-sm font-bold text-slate-900 tracking-tight">Today's Academic &amp; Simulator Timetable</h2>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                {{ todayDate }}
              </span>
            </div>
            <NuxtLink to="/institute/batches" class="text-xs font-bold text-blue-700 hover:underline">
              View All 8 Batches &rarr;
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div
              v-for="slot in dailySchedule"
              :key="slot.room"
              class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition space-y-2"
            >
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{{ slot.time }}</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {{ slot.status }}
                </span>
              </div>
              <h3 class="text-xs font-bold text-slate-900 line-clamp-1">{{ slot.course }}</h3>
              <div class="text-[11px] text-slate-600 space-y-0.5">
                <div class="flex items-center space-x-1">
                  <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span class="truncate">{{ slot.room }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="truncate">{{ slot.faculty }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── PRACTICAL DRILL NOTICE BANNER ── -->
        <section aria-label="Practical Drill Notice" class="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div class="flex items-start gap-3.5">
            <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div class="text-xs font-mono font-bold text-amber-900 tracking-wider">
                PRACTICAL DRILL GROUND &bull; DECK BURNS &bull; Batch #GP3-2026-003
              </div>
              <p class="text-xs text-slate-700 mt-0.5 leading-relaxed">
                Cadet practical live fire drill and life raft survival exercise scheduled at KPT facility.
                <strong class="text-slate-900">40 GP-III candidates</strong> ready for cryptographic QR certificate issuance.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <NuxtLink
              to="/institute/certificates"
              class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <span>Issue 40 Certificates</span>
              <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </section>

        <!-- ── EMBEDDED DOMAIN COMPONENT 1: BATCH SCHEDULER & SEAT RADAR ── -->
        <InstituteBatchScheduler
          :batches="batches"
          @create-batch="openNewBatchModal"
          @edit-batch="editBatchCapacity"
          @view-roster="navigateToCertificates"
        />

        <!-- ── EMBEDDED DOMAIN COMPONENT 2: COURSE WIZARD & CURRICULUM ── -->
        <InstituteCourseWizard />

        <!-- ── EMBEDDED DOMAIN COMPONENT 3: REAL-TIME ESCROW LEDGER ── -->
        <InstituteEscrowLedger :transactions="revenueTransactions" />

        <!-- ── TWO COLUMN OPERATIONS ROW: SIMULATOR LABS & CADET QUERIES ── -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Simulator Utilization (6 cols) -->
          <div class="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-sm font-bold text-slate-900 tracking-tight">Simulator Suite Utilization</h2>
              <span class="text-[11px] font-mono text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                120 hrs/week scheduled
              </span>
            </div>

            <div class="space-y-3">
              <div
                v-for="lab in simulatorUtilization"
                :key="lab.suite"
                class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3"
              >
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ lab.suite }}</div>
                  <div class="text-[11px] text-slate-600 font-medium">{{ lab.equipment }}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs font-bold font-mono text-blue-700">{{ lab.hours }} hrs/wk</div>
                  <span class="text-[10px] font-semibold text-emerald-800 flex items-center justify-end space-x-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
                    <span>{{ lab.status }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Candidate Communications (6 cols) -->
          <div class="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-sm font-bold text-slate-900 tracking-tight">Direct Candidate Inquiries</h2>
              <button
                @click="openBroadcastModal = true"
                type="button"
                class="text-xs font-bold text-blue-700 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded"
              >
                + Broadcast Notice
              </button>
            </div>

            <div class="space-y-3">
              <div
                v-for="inq in candidateInquiries"
                :key="inq.id"
                class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
              >
                <div class="flex items-center justify-between">
                  <div class="font-bold text-xs text-slate-900">{{ inq.studentName }}</div>
                  <span class="text-[10px] text-slate-500 font-mono">{{ inq.time }}</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">{{ inq.message }}</p>
                <div class="flex items-center justify-between pt-1 border-t border-slate-200/60">
                  <span class="text-[10px] text-blue-700 font-mono font-bold">{{ inq.courseCode }}</span>
                  <button
                    @click="openReplyModal(inq)"
                    type="button"
                    class="text-xs font-bold text-blue-700 hover:underline flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded"
                  >
                    <span>Quick Reply</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: SCHEDULE NEW BATCH                                         -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showBatchModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-batch-title"
      @click.self="showBatchModal = false"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="modal-batch-title" class="text-base font-bold text-slate-900">Schedule New Training Batch</h3>
            <p class="text-xs text-slate-500">Allocate intake quota, classroom, and instructor.</p>
          </div>
          <button
            @click="showBatchModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close batch modal"
          >
            ✕
          </button>
        </div>

        <form @submit.prevent="saveBatch" class="space-y-4">
          <div>
            <label for="batch-course-select" class="block text-xs font-bold text-slate-700 mb-1">Select Program Course *</label>
            <select
              id="batch-course-select"
              v-model="batchForm.courseName"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="General Purpose Rating (GP-III)">General Purpose Rating (GP-III) &bull; PKR 185,000</option>
              <option value="Advance Diploma Nautical Science (OOW)">Advance Diploma Nautical Science (OOW) &bull; PKR 650,000</option>
              <option value="Bridge Resource Management (BRM)">Bridge Resource Management (BRM) &bull; PKR 75,000</option>
              <option value="Advanced Fire Fighting (AFF)">Advanced Fire Fighting (AFF) &bull; PKR 45,000</option>
              <option value="ECDIS Type-Specific Simulator">ECDIS Type-Specific Simulator &bull; PKR 55,000</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="batch-code-input" class="block text-xs font-bold text-slate-700 mb-1">Batch Code *</label>
              <input
                id="batch-code-input"
                v-model="batchForm.code"
                type="text"
                required
                placeholder="e.g. GP3-2026-004"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="batch-cap-input" class="block text-xs font-bold text-slate-700 mb-1">Class Seat Cap *</label>
              <input
                id="batch-cap-input"
                v-model.number="batchForm.capacity"
                type="number"
                required
                min="5"
                max="100"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="batch-start-date" class="block text-xs font-bold text-slate-700 mb-1">Start Date *</label>
              <input
                id="batch-start-date"
                v-model="batchForm.startDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="batch-end-date" class="block text-xs font-bold text-slate-700 mb-1">End Date *</label>
              <input
                id="batch-end-date"
                v-model="batchForm.endDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label for="batch-instructor-input" class="block text-xs font-bold text-slate-700 mb-1">Facility &bull; Instructor</label>
            <input
              id="batch-instructor-input"
              v-model="batchForm.instructor"
              type="text"
              placeholder="e.g. Capt. Z. Abbas &bull; Transas Bridge Suite"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showBatchModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
              Publish Batch
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: BROADCAST NOTICE DISPATCHER                               -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="openBroadcastModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-broadcast-title"
      @click.self="openBroadcastModal = false"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div>
              <h3 id="modal-broadcast-title" class="text-sm font-bold text-slate-900">Broadcast Cadet Notice</h3>
              <div class="text-[10px] text-slate-500 font-medium">In-App, SMS &amp; Email alerts</div>
            </div>
          </div>
          <button
            @click="openBroadcastModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close broadcast modal"
          >
            ✕
          </button>
        </div>

        <div class="space-y-3">
          <div>
            <label for="broadcast-target-select" class="block text-xs font-bold text-slate-700 mb-1">Target Audience</label>
            <select
              id="broadcast-target-select"
              v-model="broadcastTarget"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Active Enrolled Cadets (340 Candidates)</option>
              <option value="GP3-2026-003">Batch GP3-2026-003 &bull; Pre-Sea GP Rating (40 Cadets)</option>
              <option value="HND-NAUT-01">Batch HND-NAUT-01 &bull; Nautical Science SQA (28 Cadets)</option>
              <option value="SIM-BRM-04">Batch SIM-BRM-04 &bull; Bridge Resource Mgmt (10 Officers)</option>
            </select>
          </div>

          <div>
            <label for="broadcast-message-area" class="block text-xs font-bold text-slate-700 mb-1">Message Content</label>
            <textarea
              id="broadcast-message-area"
              v-model="broadcastMessage"
              rows="3"
              placeholder="Enter reporting instructions, muster timings, simulator bay numbers, or document alerts..."
              class="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 leading-relaxed"
            ></textarea>
          </div>
        </div>

        <div class="pt-2 flex justify-end space-x-2 border-t border-slate-100">
          <button
            @click="openBroadcastModal = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Cancel
          </button>
          <button
            @click="sendBroadcast"
            type="button"
            :disabled="!broadcastMessage.trim()"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Dispatch Notice &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: QUICK CANDIDATE REPLY                                      -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="selectedInquiry"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-reply-title"
      @click.self="selectedInquiry = null"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="modal-reply-title" class="text-sm font-bold text-slate-900">Reply to {{ selectedInquiry.studentName }}</h3>
            <div class="text-[10px] text-blue-700 font-mono">{{ selectedInquiry.courseCode }}</div>
          </div>
          <button
            @click="selectedInquiry = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close reply modal"
          >
            ✕
          </button>
        </div>

        <div class="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 italic border border-slate-200">
          "{{ selectedInquiry.message }}"
        </div>

        <div>
          <label for="reply-text-area" class="block text-xs font-bold text-slate-700 mb-1">Official Academy Response</label>
          <textarea
            id="reply-text-area"
            v-model="replyText"
            rows="3"
            placeholder="Type official reply to candidate..."
            class="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 leading-relaxed"
          ></textarea>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            @click="selectedInquiry = null"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Cancel
          </button>
          <button
            @click="sendReply"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Send Reply
          </button>
        </div>
      </div>
    </div>

    <!-- Live Toast Notification -->
    <div
      v-if="toastMessage"
      class="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#0A1936] text-white shadow-xl border border-slate-700 text-xs font-bold flex items-center space-x-2"
      role="status"
      aria-live="polite"
    >
      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Academy Operations Console &bull; The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'Complete Maritime Academy management console for course creation, batch scheduling, certificate issuance, revenue reports, analytics, and cadet communication.',
    },
  ],
});

const todayDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const toastMessage = ref('');
function showToast(msg: string) {
  toastMessage.value = msg;
  setTimeout(() => {
    toastMessage.value = '';
  }, 3500);
}

function closeAllModals() {
  showBatchModal.value = false;
  openBroadcastModal.value = false;
  selectedInquiry.value = null;
}

// Daily Timetable
const dailySchedule = [
  {
    time: '08:30 - 12:30',
    course: 'Bridge Resource Management (BRM)',
    room: 'Transas FMBS Suite Bay 1',
    faculty: 'Capt. A. R. Khan',
    status: 'Live In Session',
  },
  {
    time: '09:00 - 16:30',
    course: 'GP-III Deck Seamanship Practical',
    room: 'KPT Yard Drill Grounds',
    faculty: 'Capt. Z. Abbas',
    status: 'Field Drill',
  },
  {
    time: '13:30 - 17:00',
    course: 'ECDIS Electronic Chart Display',
    room: 'Furuno Multi-Console Suite',
    faculty: 'Chief Mate Vance',
    status: 'Scheduled',
  },
  {
    time: '14:00 - 18:00',
    course: 'High-Voltage Safety 6.6 kV Switchboard',
    room: 'Wärtsilä ERS Power Bay',
    faculty: 'Chief Eng. Farooq',
    status: 'Scheduled',
  },
];

// Batches Data
const showBatchModal = ref(false);
const batchForm = ref({
  courseName: 'General Purpose Rating (GP-III)',
  code: '',
  startDate: '2026-07-01',
  endDate: '2026-07-15',
  capacity: 25,
  instructor: 'Capt. Master Mariner &bull; FMBS Lab',
});

const batches = ref([
  {
    id: 'b1',
    code: 'GP3-2026-003',
    courseName: 'GP-III Pre-Sea',
    title: 'General Purpose Rating (GP-III) - 3rd Intake 2026',
    startDate: '10 Jun 2026',
    endDate: '10 Dec 2026',
    timing: '08:00 - 16:30 Daily',
    facility: 'KPT Yard Practical Grounds',
    instructor: 'Capt. Z. Abbas',
    enrolled: 40,
    capacity: 50,
    fee: 185000,
    status: 'ACTIVE',
  },
  {
    id: 'b2',
    code: 'HND-NAUT-01',
    courseName: 'Nautical Science SQA',
    title: 'Advance Diploma Nautical Science (OOW Route)',
    startDate: '15 Jul 2026',
    endDate: '15 Jul 2028',
    timing: 'Full-Time Academic Phase',
    facility: 'Transas NTPRO 4000 Bridge Lab',
    instructor: 'Capt. M. Tariq & Chief Mate Vance',
    enrolled: 28,
    capacity: 35,
    fee: 650000,
    status: 'ACTIVE',
  },
  {
    id: 'b3',
    code: 'SIM-BRM-04',
    courseName: 'BRM Simulator',
    title: 'Bridge Resource Management Simulator (Weekly)',
    startDate: '22 Jun 2026',
    endDate: '26 Jun 2026',
    timing: '09:00 - 17:00 Daily (5 Days)',
    facility: 'Wärtsilä 360 Navigation Bridge',
    instructor: 'Capt. A. R. Khan',
    enrolled: 10,
    capacity: 12,
    fee: 75000,
    status: 'ACTIVE',
  },
]);

function openNewBatchModal() {
  batchForm.value = {
    courseName: 'General Purpose Rating (GP-III)',
    code: 'BATCH-' + Math.floor(1000 + Math.random() * 9000),
    startDate: '2026-07-01',
    endDate: '2026-07-15',
    capacity: 25,
    instructor: 'Capt. Master Mariner &bull; FMBS Lab',
  };
  showBatchModal.value = true;
}

function saveBatch() {
  batches.value.unshift({
    id: 'b_' + Date.now(),
    code: batchForm.value.code,
    courseName: batchForm.value.courseName,
    title: batchForm.value.courseName + ' Batch',
    startDate: batchForm.value.startDate,
    endDate: batchForm.value.endDate,
    timing: '09:00 - 17:00 Daily',
    facility: 'MTI Simulator Complex',
    instructor: batchForm.value.instructor,
    enrolled: 0,
    capacity: batchForm.value.capacity,
    fee: 85000,
    status: 'ACTIVE',
  });
  showBatchModal.value = false;
  showToast(`Batch ${batchForm.value.code} published and locked into seat radar.`);
}

function editBatchCapacity(batch: any) {
  const newCap = window.prompt(`Adjust Seat Capacity for ${batch.code}:`, String(batch.capacity));
  if (newCap && !isNaN(Number(newCap))) {
    batch.capacity = Number(newCap);
    showToast(`Updated capacity for ${batch.code} to ${batch.capacity} seats.`);
  }
}

function navigateToCertificates() {
  navigateTo('/institute/certificates');
}

// Real-Time Bookings & Revenue
const revenueTransactions = ref([
  {
    id: 'tx1',
    utr: 'UTR-2026-SEAFU-8819',
    date: '18 Sep 2026, 14:15',
    candidateName: 'Cadet Alex Mercer',
    indos: '08ZL9431',
    courseTitle: 'Bridge Resource Management (BRM)',
    batchCode: 'SIM-BRM-04',
    amount: 75000,
    status: 'SETTLED_TO_BANK',
  },
  {
    id: 'tx2',
    utr: 'UTR-2026-SEAFU-8820',
    date: '18 Sep 2026, 11:30',
    candidateName: 'Cadet Muhammad Tariq',
    indos: 'KHI-CDC-49102',
    courseTitle: 'GP-III General Purpose Rating',
    batchCode: 'GP3-2026-003',
    amount: 185000,
    status: 'ESCROW_LOCKED',
  },
  {
    id: 'tx3',
    utr: 'UTR-2026-SEAFU-8821',
    date: '17 Sep 2026, 16:45',
    candidateName: 'Capt. Rajesh Sharma',
    indos: '08ZL9431',
    courseTitle: 'Advanced Fire Fighting (AFF)',
    batchCode: 'STCW-AFF-02',
    amount: 45000,
    status: 'SETTLED_TO_BANK',
  },
  {
    id: 'tx4',
    utr: 'UTR-2026-SEAFU-8822',
    date: '17 Sep 2026, 09:12',
    candidateName: 'Cadet Fatima Noor',
    indos: '09ZM4821',
    courseTitle: 'ECDIS Type-Specific Simulator',
    batchCode: 'SIM-ECDIS-01',
    amount: 55000,
    status: 'SETTLED_TO_BANK',
  },
]);

// Simulator Utilization
const simulatorUtilization = [
  { suite: 'Transas NTPRO 4000 Bridge Lab', equipment: '360° Visual Projectors & ARPA Radar', hours: 38, status: 'Full Capacity' },
  { suite: 'Wärtsilä 5-Console Engine Room', equipment: 'Slow-Speed Diesel & Auxiliary Switchboards', hours: 32, status: 'Operational' },
  { suite: 'Liquid Cargo Handling (LCHS)', equipment: 'Oil / Chemical / LNG Tanker Consoles', hours: 26, status: 'Operational' },
  { suite: 'GMDSS Sailor Transceiver Bay', equipment: 'VHF/MF/HF DSC & Inmarsat-C Stations', hours: 24, status: 'Operational' },
];

// Cadet Communications & Broadcast
const openBroadcastModal = ref(false);
const broadcastTarget = ref('ALL');
const broadcastMessage = ref('');

const candidateInquiries = ref([
  {
    id: 'inq1',
    studentName: 'Cadet Alex Mercer',
    courseCode: 'SIM-BRM-04',
    time: '12m ago',
    message: 'Good morning Sir, will the Bridge Resource Management simulator certificate be synchronized with UK MCA directly?',
  },
  {
    id: 'inq2',
    studentName: 'Cadet Muhammad Tariq',
    courseCode: 'GP3-2026-003',
    time: '1h ago',
    message: 'Sir, do I need to bring my original SSC Marksheet on Monday for KPT apprentice yard registration?',
  },
  {
    id: 'inq3',
    studentName: 'Officer Rajesh Sharma',
    courseCode: 'STCW-AFF-02',
    time: '3h ago',
    message: 'Confirmed attendance for the live fire exercise tomorrow. Is breathing apparatus mask fitting test at 08:30?',
  },
]);

const selectedInquiry = ref<any>(null);
const replyText = ref('Dear Cadet, your request is noted and confirmed. Please report to the training bay at the scheduled time.');

function openReplyModal(inq: any) {
  selectedInquiry.value = inq;
}

function sendReply() {
  showToast(`Official reply sent to ${selectedInquiry.value?.studentName}.`);
  selectedInquiry.value = null;
}

function sendBroadcast() {
  if (!broadcastMessage.value.trim()) return;
  showToast(`Broadcast notice dispatched to: ${broadcastTarget.value}.`);
  broadcastMessage.value = '';
  openBroadcastModal.value = false;
}
</script>
