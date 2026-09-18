<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-16">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP NAVBAR                                                   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group">
          <img
            src="/logo-crest.png"
            alt="The Seafu Crest"
            class="w-8 h-8 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
          />
          <span class="text-lg font-black text-slate-900 tracking-tight">The Seafu</span>
        </NuxtLink>

        <!-- Center Links -->
        <nav class="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-600">
          <NuxtLink to="/" class="hover:text-blue-700 transition">Home</NuxtLink>
          <NuxtLink to="/courses" class="hover:text-blue-700 transition">Programs</NuxtLink>
          <NuxtLink to="/institutes/compare" class="hover:text-blue-700 transition">Institute Compare</NuxtLink>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-blue-700 transition">Verification</NuxtLink>
          <span class="text-blue-800 font-bold border-b-2 border-blue-800 pb-0.5">Academy Console</span>
        </nav>

        <!-- Right Side: Quick Action & Profile -->
        <div class="flex items-center space-x-3">
          <button
            @click="openBroadcastModal = true"
            class="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Broadcast Notice</span>
          </button>
          <button @click="authStore.logout()" class="text-xs font-semibold text-slate-500 hover:text-slate-900 transition">
            Sign Out
          </button>
          <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-sm" title="MTI Academy Administrator">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN LAYOUT                                                  -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      <!-- ── TOP ACADEMY IDENTITY BANNER (NAVY COMMAND BAR) ───────────── -->
      <div class="rounded-2xl p-6 sm:p-7 text-white shadow-lg bg-[#0A1936] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <!-- Left Brand & Credentials -->
        <div class="flex items-start sm:items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-black text-xl shadow-md border border-white/20 shrink-0">
            <img src="/logo-crest.png" alt="Crest" class="w-10 h-10 object-contain rounded-full" />
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="text-xl sm:text-2xl font-black tracking-tight text-white">
                {{ authStore.user?.institute?.name || 'Maritime Training Institute (MTI Karachi)' }}
              </h1>
              <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold bg-blue-900/80 text-blue-300 border border-blue-700/50 uppercase">
                MINISTRY REG 2019
              </span>
            </div>
            <div class="text-xs text-slate-300">
              MTI Complex, Karachi &bull; Estd. 1998 &bull; City of Glasgow College UK MCA Academic Partner &bull; CIP Grade 1
            </div>
          </div>
        </div>

        <!-- Right: Actions & Head of Studies -->
        <div class="flex items-center gap-3 text-xs shrink-0 flex-wrap">
          <button
            @click="openNewCourseModal"
            class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-sm flex items-center space-x-1.5"
          >
            <span>+</span>
            <span>Create Course</span>
          </button>
          <button
            @click="openNewBatchModal"
            class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition shadow-sm flex items-center space-x-1.5"
          >
            <span>+</span>
            <span>Schedule Batch</span>
          </button>
        </div>
      </div>

      <!-- ── COMMAND SUB-NAVIGATION TABS (ALL 6 USER REQUESTED MODULES) ── -->
      <div class="flex items-center gap-2 overflow-x-auto text-xs font-bold pb-1 scrollbar-none">
        <button
          v-for="tab in navigationTabs"
          :key="tab.id"
          @click="activeSection = tab.id"
          :class="activeSection === tab.id ? 'bg-[#0A1936] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'"
          class="px-4 py-2.5 rounded-xl transition flex items-center space-x-2 shrink-0"
        >
          <span>{{ tab.icon }}</span>
          <span>{{ tab.name }}</span>
          <span
            v-if="tab.badge"
            :class="activeSection === tab.id ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-100 text-slate-600'"
            class="px-1.5 py-0.2 rounded-full text-[10px] font-mono"
          >
            {{ tab.badge }}
          </span>
        </button>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 1: OPS COMMAND / OVERVIEW                                   -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'ops'" class="space-y-6">
        <!-- 5 Global Network Metrics Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">ACTIVE CADETS</div>
            <div class="text-2xl font-black text-slate-900">340</div>
            <div class="text-[11px] text-emerald-600 font-medium">● 8 Active Batches</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">GROSS REVENUE (GMV)</div>
            <div class="text-2xl font-black text-blue-700">PKR 4.85M</div>
            <div class="text-[11px] text-slate-500 font-medium">90% Academy Escrow</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">DG APPROVED COURSES</div>
            <div class="text-2xl font-black text-emerald-600">18</div>
            <div class="text-[11px] text-slate-500">100% Audit Cleared</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">SIMULATOR SUITES</div>
            <div class="text-2xl font-black text-indigo-600">6 Suites</div>
            <div class="text-[11px] text-slate-500">Transas &bull; Wärtsilä</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1 col-span-2 sm:col-span-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">SEAT OCCUPANCY</div>
            <div class="text-2xl font-black text-amber-600">84.2%</div>
            <div class="text-[11px] text-blue-700 font-semibold">● Summer Cycle Active</div>
          </div>
        </div>

        <!-- Live Fire Drill Alert Banner -->
        <div class="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div>
              <div class="text-xs font-mono font-bold text-amber-900 tracking-wider">
                PRACTICAL DRILL GROUND &bull; DECK BURNS &bull; Batch #GP3-2026-003
              </div>
              <div class="text-xs text-slate-700 mt-0.5 leading-relaxed">
                Cadet practical live fire drill and life raft survival exercise scheduled at KPT facility.
                <strong class="text-slate-900">40 GP-III candidates</strong> ready for cryptographic QR certificate issuance.
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2.5 shrink-0">
            <button @click="activeSection = 'certificates'" class="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition shadow-xs">
              Candidate Roster
            </button>
            <button @click="openIssueCertModalForBatch('GP3-2026-003')" class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm">
              Issue 40 Certificates &rarr;
            </button>
          </div>
        </div>

        <!-- Quick 2-Column Overview: Active Batches & Quick Gateway -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-8 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-900">Live Intake Batches Capacity</h3>
              <button @click="activeSection = 'batches'" class="text-xs text-blue-700 font-bold hover:underline">
                View All Batches &rarr;
              </button>
            </div>

            <!-- Preview 2 Batches -->
            <div v-for="batch in batches.slice(0, 2)" :key="batch.id" class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div class="flex flex-col sm:flex-row items-start justify-between gap-3">
                <div>
                  <div class="flex items-center gap-2 text-[10px]">
                    <span class="font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">{{ batch.code }}</span>
                    <span class="text-slate-500 font-mono">{{ batch.courseName }}</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 mt-1">{{ batch.title }}</h4>
                  <div class="text-xs text-slate-500 mt-0.5">
                    {{ batch.facility }} &bull; Instructor: {{ batch.instructor }}
                  </div>
                </div>
                <div class="sm:text-right shrink-0">
                  <div class="text-base font-black text-slate-900 font-mono">PKR {{ batch.fee.toLocaleString() }}</div>
                  <div class="text-[10px] text-emerald-600 font-bold">● Seats Active</div>
                </div>
              </div>

              <!-- Quota Bar -->
              <div class="space-y-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500">Cap: <strong class="text-slate-800">{{ batch.enrolled }} / {{ batch.capacity }} ({{ Math.round((batch.enrolled / batch.capacity) * 100) }}%)</strong></span>
                  <span class="font-bold text-amber-600">{{ batch.capacity - batch.enrolled }} Seats Left</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-blue-600 h-full rounded-full" :style="{ width: `${(batch.enrolled / batch.capacity) * 100}%` }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Direct Gateway & Fast Tools -->
          <div class="lg:col-span-4 space-y-4">
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Fast Command Actions</h3>
              <div class="space-y-2">
                <button
                  @click="activeSection = 'courses'"
                  class="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition flex items-center justify-between text-xs"
                >
                  <div class="font-bold text-slate-800">Course Editor &amp; Syllabus</div>
                  <span class="text-blue-700 font-bold">&rarr;</span>
                </button>
                <button
                  @click="activeSection = 'certificates'"
                  class="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition flex items-center justify-between text-xs"
                >
                  <div class="font-bold text-slate-800">Certificate Upload &amp; QR</div>
                  <span class="text-blue-700 font-bold">&rarr;</span>
                </button>
                <button
                  @click="activeSection = 'revenue'"
                  class="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition flex items-center justify-between text-xs"
                >
                  <div class="font-bold text-slate-800">Revenue &amp; Settlement Ledger</div>
                  <span class="text-blue-700 font-bold">&rarr;</span>
                </button>
                <button
                  @click="activeSection = 'communication'"
                  class="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition flex items-center justify-between text-xs"
                >
                  <div class="font-bold text-slate-800">Cadet Messaging &amp; Notices</div>
                  <span class="text-blue-700 font-bold">&rarr;</span>
                </button>
              </div>
            </div>

            <!-- Regulatory Trust Box -->
            <div class="p-5 rounded-2xl bg-slate-900 text-white shadow-xs space-y-2">
              <div class="flex items-center space-x-2 text-cyan-400 text-xs font-bold font-mono">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ECDSA VERIFIED ACADEMY</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                All course certificates generated are stamped with your institute cryptographic private key and instantly readable by Port State Control officers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 2: COURSE CREATION & EDITING TOOLS (○ Module 1)             -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'courses'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Academy Course Catalog &amp; Syllabus Editor
            </h2>
            <p class="text-xs text-slate-500">
              Create and manage DG-approved Merchant Navy programs, simulators, fees, and prerequisites.
            </p>
          </div>
          <button
            @click="openNewCourseModal"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-1.5 shrink-0"
          >
            <span>+</span>
            <span>Add New Course</span>
          </button>
        </div>

        <!-- Course Search & Filter Bar -->
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <input
            v-model="courseSearchQuery"
            type="text"
            placeholder="Search by course title, code (e.g. GP-III, BRM, AFF)..."
            class="w-full sm:flex-1 px-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
          <select
            v-model="courseFilterCategory"
            class="w-full sm:w-48 px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ALL">All Categories</option>
            <option value="PRE_SEA">Pre-Sea Cadet</option>
            <option value="HND">Advance Diploma</option>
            <option value="SIMULATOR">Simulator Training</option>
            <option value="STCW_MODULAR">STCW Modular</option>
          </select>
        </div>

        <!-- Course Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div class="relative h-40 bg-slate-100 overflow-hidden">
                <img :src="course.image" :alt="course.title" class="w-full h-full object-cover" />
                <div class="absolute top-3 left-3 flex items-center space-x-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/90 text-slate-800 shadow">
                    {{ course.code }}
                  </span>
                  <span v-if="course.dgApproved" class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white shadow">
                    DG Approved
                  </span>
                </div>
                <span class="absolute bottom-3 right-3 text-xs font-black font-mono px-2.5 py-1 rounded-lg bg-[#0A1936]/90 text-white backdrop-blur">
                  PKR {{ course.price.toLocaleString() }}
                </span>
              </div>

              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{{ course.category }}</span>
                  <span class="font-bold text-blue-700">{{ course.duration }}</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">{{ course.title }}</h3>
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">{{ course.description }}</p>

                <div class="pt-2 flex flex-wrap gap-1.5">
                  <span v-for="lab in course.labs" :key="lab" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                    {{ lab }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold" :class="course.active ? 'text-emerald-600' : 'text-slate-400'">
                {{ course.active ? '● Listed Publicly' : '○ Draft Mode' }}
              </span>
              <div class="flex items-center space-x-2">
                <button
                  @click="editCourse(course)"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition"
                >
                  Edit Syllabus
                </button>
                <button
                  @click="openNewBatchModalForCourse(course)"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition"
                >
                  + Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 3: BATCH SCHEDULING & SEAT MANAGEMENT (○ Module 2)          -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'batches'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Batch Scheduling &amp; Real-Time Seat Radar
            </h2>
            <p class="text-xs text-slate-500">
              Control cadet enrollment quotas, intake windows, classroom capacities, and simulator lab allocations.
            </p>
          </div>
          <button
            @click="openNewBatchModal"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-1.5 shrink-0"
          >
            <span>+</span>
            <span>Schedule New Batch</span>
          </button>
        </div>

        <!-- Batches Table & Cards -->
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Active Batch Schedules ({{ batches.length }} Configured)
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span class="text-xs text-slate-600 font-medium">Auto Seat-Locking Active (10-min Quota Protection)</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">BATCH &amp; COURSE</th>
                  <th class="px-5 py-3.5">DATES &amp; WINDOW</th>
                  <th class="px-5 py-3.5">FACILITY &amp; INSTRUCTOR</th>
                  <th class="px-5 py-3.5">ENROLLMENT / CAP</th>
                  <th class="px-5 py-3.5">FEE</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="b in batches" :key="b.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ b.title }}</div>
                    <div class="text-[11px] font-mono text-blue-700">{{ b.code }} &bull; {{ b.courseName }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono text-slate-600">
                    <div>{{ b.startDate }} &ndash; {{ b.endDate }}</div>
                    <div class="text-[10px] text-slate-400">{{ b.timing }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-medium">{{ b.facility }}</div>
                    <div class="text-[10px] text-slate-500">{{ b.instructor }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="flex items-center space-x-2">
                      <span class="font-bold text-slate-900">{{ b.enrolled }} / {{ b.capacity }}</span>
                      <span class="text-[10px] font-bold text-amber-600">({{ b.capacity - b.enrolled }} left)</span>
                    </div>
                    <div class="w-28 bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                      <div class="bg-blue-600 h-full rounded-full" :style="{ width: `${(b.enrolled / b.capacity) * 100}%` }"></div>
                    </div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-900">
                    PKR {{ b.fee.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {{ b.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="openCandidateRoster(b)"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition"
                    >
                      Roster ({{ b.enrolled }})
                    </button>
                    <button
                      @click="adjustSeats(b)"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
                    >
                      Edit Cap
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 4: CERTIFICATE ISSUANCE & VERIFICATION (○ Module 3)         -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'certificates'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Cryptographic Certificate Issuance &amp; PDF Vault
            </h2>
            <p class="text-xs text-slate-500">
              Issue instant QR-verifiable STCW certifications, upload signed documentation, and synchronize with DG Shipping.
            </p>
          </div>
          <button
            @click="openIssueCertModal"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-1.5 shrink-0"
          >
            <span>🔐</span>
            <span>Issue New Certificate</span>
          </button>
        </div>

        <!-- Certificate Registry Table -->
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Enrolled Candidates &amp; Certification Ledger
            </div>
            <span class="text-xs text-blue-700 font-mono font-bold">ECDSA SHA-256 Enabled</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">CANDIDATE</th>
                  <th class="px-5 py-3.5">INDoS / CDC REF</th>
                  <th class="px-5 py-3.5">COURSE COMPLETED</th>
                  <th class="px-5 py-3.5">ATTENDANCE &amp; DRILL</th>
                  <th class="px-5 py-3.5">CERTIFICATE #</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">ISSUANCE ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="cand in candidateCertificates" :key="cand.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ cand.name }}</div>
                    <div class="text-[11px] text-slate-500">{{ cand.email }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-blue-700">
                    <div>{{ cand.indos }}</div>
                    <div class="text-[10px] text-slate-400 font-normal">CDC: {{ cand.cdc }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-semibold">{{ cand.course }}</div>
                    <div class="text-[10px] text-slate-500">Batch: {{ cand.batchCode }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="font-bold text-emerald-600">{{ cand.attendance }}</span>
                    <div class="text-[10px] text-slate-400">Exam: {{ cand.examScore }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono text-[11px]">
                    <span v-if="cand.certNumber" class="text-slate-900 font-bold">{{ cand.certNumber }}</span>
                    <span v-else class="text-slate-400 italic">Not Generated</span>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :class="cand.status === 'ISSUED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'"
                    >
                      {{ cand.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      v-if="cand.status !== 'ISSUED'"
                      @click="issueCertForCandidate(cand)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                      Generate QR &amp; Issue
                    </button>
                    <NuxtLink
                      v-else
                      :to="`/verify/${cand.certNumber}`"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition inline-flex items-center space-x-1"
                    >
                      <span>View Live QR</span>
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 5: REAL-TIME BOOKINGS & REVENUE REPORTS (○ Module 4)        -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'revenue'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Real-Time Booking Ledger &amp; Dual-Invoice Escrow Reports
            </h2>
            <p class="text-xs text-slate-500">
              Transparent financial settlements, student payments, automated platform fees, and tax deduction statements.
            </p>
          </div>
          <button
            @click="exportFinancialLedger"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-1.5 shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Export Financial Ledger (CSV)</span>
          </button>
        </div>

        <!-- 4 Revenue KPI Strips -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">GROSS REVENUE (GMV)</div>
            <div class="text-2xl font-black text-slate-900 font-mono">PKR 4,850,000</div>
            <div class="text-[11px] text-emerald-600 font-medium">● 340 Paid Bookings</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">ACADEMY ESCROW PAYOUT (90%)</div>
            <div class="text-2xl font-black text-blue-700 font-mono">PKR 4,365,000</div>
            <div class="text-[11px] text-slate-500">Settled directly to bank</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">SEAFU PLATFORM FEE (10%)</div>
            <div class="text-2xl font-black text-slate-700 font-mono">PKR 485,000</div>
            <div class="text-[11px] text-slate-500">Includes payment gateway fee</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">TDS &amp; GOVT WITHHOLDING</div>
            <div class="text-2xl font-black text-amber-600 font-mono">PKR 48,500</div>
            <div class="text-[11px] text-slate-500 font-medium">1% Statutory Tax Withheld</div>
          </div>
        </div>

        <!-- Real-Time Booking Transactions Table -->
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Real-Time Booking Transactions (Audited Escrow)
            </div>
            <span class="text-xs text-emerald-600 font-bold">● 100% Escrow Shield Protected</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th class="px-5 py-3.5">TRANSACTION / UTR</th>
                  <th class="px-5 py-3.5">CANDIDATE</th>
                  <th class="px-5 py-3.5">COURSE &amp; BATCH</th>
                  <th class="px-5 py-3.5">AMOUNT PAID</th>
                  <th class="px-5 py-3.5">ACADEMY SHARE</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">INVOICE</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="tx in revenueTransactions" :key="tx.id" class="hover:bg-slate-50/60 transition">
                  <td class="px-5 py-4 font-mono">
                    <div class="font-bold text-slate-900">{{ tx.utr }}</div>
                    <div class="text-[10px] text-slate-400">{{ tx.date }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-800">{{ tx.candidateName }}</div>
                    <div class="text-[10px] text-slate-400 font-mono">INDoS: {{ tx.indos }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-medium">{{ tx.courseTitle }}</div>
                    <div class="text-[10px] text-blue-700 font-mono">Batch: {{ tx.batchCode }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-900">
                    PKR {{ tx.amount.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-emerald-700">
                    PKR {{ Math.round(tx.amount * 0.9).toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {{ tx.status }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right">
                    <button
                      @click="downloadInvoice(tx)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition"
                    >
                      Tax Invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 6: ANALYTICS & COURSE CONVERSIONS (○ Module 5)              -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'analytics'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Course Performance &amp; Admissions Conversion Funnel
            </h2>
            <p class="text-xs text-slate-500">
              Track candidate discovery views, batch quota reservations, paid enrollments, and simulator utilization.
            </p>
          </div>
          <span class="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
            Last 30 Days Cycle
          </span>
        </div>

        <!-- 4-Step Conversion Funnel Visual -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">1. PROGRAM VIEWS</div>
            <div class="text-3xl font-black text-slate-900 mt-1">24,580</div>
            <div class="text-xs text-slate-500 mt-0.5">Seafarer Catalog Visits</div>
            <div class="mt-3 text-[11px] font-bold text-blue-700">&darr; 14.2% proceed to batch</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">2. BATCH SELECTIONS</div>
            <div class="text-3xl font-black text-slate-900 mt-1">3,490</div>
            <div class="text-xs text-slate-500 mt-0.5">Dates &amp; Seats Explored</div>
            <div class="mt-3 text-[11px] font-bold text-blue-700">&darr; 28.5% reserve seat</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative">
            <div class="text-[10px] font-mono text-slate-400 font-bold uppercase">3. SEAT QUOTA LOCKS</div>
            <div class="text-3xl font-black text-indigo-600 mt-1">995</div>
            <div class="text-xs text-slate-500 mt-0.5">10-Min Temporary Locks</div>
            <div class="mt-3 text-[11px] font-bold text-emerald-600">&darr; 84.4% complete payment</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative bg-gradient-to-br from-blue-50/50 to-white">
            <div class="text-[10px] font-mono text-blue-700 font-bold uppercase">4. PAID ENROLLMENTS</div>
            <div class="text-3xl font-black text-emerald-600 mt-1">840</div>
            <div class="text-xs text-slate-500 mt-0.5">Confirmed Academy Seats</div>
            <div class="mt-3 text-[11px] font-black text-slate-900 font-mono">CONVERSION RATE: 24.1%</div>
          </div>
        </div>

        <!-- Course Performance Breakdown -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 class="text-sm font-bold text-slate-900">Top Revenue &amp; Seat Demand Courses</h3>
            <div class="space-y-3">
              <div v-for="c in topCoursesPerformance" :key="c.name" class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-800">{{ c.name }}</span>
                  <span class="font-bold text-slate-900 font-mono">PKR {{ c.revenue }}</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-blue-600 h-full rounded-full" :style="{ width: `${c.occupancy}%` }"></div>
                </div>
                <div class="flex justify-between text-[10px] text-slate-400">
                  <span>{{ c.students }} Candidates</span>
                  <span>{{ c.occupancy }}% Capacity Filled</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Simulator Lab Utilization -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 class="text-sm font-bold text-slate-900">Simulator Infrastructure Utilization</h3>
            <div class="space-y-3">
              <div v-for="lab in simulatorUtilization" :key="lab.suite" class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ lab.suite }}</div>
                  <div class="text-[10px] text-slate-500">{{ lab.equipment }}</div>
                </div>
                <div class="text-right">
                  <div class="text-xs font-black font-mono text-blue-700">{{ lab.hours }} hrs/wk</div>
                  <span class="text-[10px] font-bold text-emerald-600">● {{ lab.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 7: CADET COMMUNICATION & BROADCAST CENTER (○ Module 6)      -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeSection === 'communication'" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Cadet Engagement, Broadcast Notices &amp; Direct Messaging Desk
            </h2>
            <p class="text-xs text-slate-500">
              Broadcast batch start dates, uniform muster instructions, live fire drill grounds alerts, and direct candidate chats.
            </p>
          </div>
          <button
            @click="openBroadcastModal = true"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm flex items-center space-x-1.5 shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <span>Compose Broadcast</span>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Broadcast Composer & History (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Composer Card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 class="text-sm font-bold text-slate-900">Instant Batch Alert Dispatcher</h3>

              <!-- Channel Pills -->
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  @click="broadcastChannel = 'IN_APP'"
                  :class="broadcastChannel === 'IN_APP' ? 'bg-[#0A1936] text-white' : 'bg-slate-100 text-slate-600'"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition"
                >
                  In-App Notification
                </button>
                <button
                  type="button"
                  @click="broadcastChannel = 'SMS'"
                  :class="broadcastChannel === 'SMS' ? 'bg-[#0A1936] text-white' : 'bg-slate-100 text-slate-600'"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition"
                >
                  SMS / WhatsApp
                </button>
                <button
                  type="button"
                  @click="broadcastChannel = 'EMAIL'"
                  :class="broadcastChannel === 'EMAIL' ? 'bg-[#0A1936] text-white' : 'bg-slate-100 text-slate-600'"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition"
                >
                  Official Email
                </button>
              </div>

              <!-- Target Audience -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Select Candidate Target Audience</label>
                <select
                  v-model="broadcastTarget"
                  class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ALL">All Active Enrolled Cadets (340 Candidates)</option>
                  <option value="GP3-2026-003">Batch GP3-2026-003 &bull; Pre-Sea General Purpose Rating (40 Cadets)</option>
                  <option value="HND-NAUT-01">Batch HND-NAUT-01 &bull; Nautical Science SQA (35 Cadets)</option>
                  <option value="SIM-BRM-04">Batch SIM-BRM-04 &bull; Bridge Resource Management (12 Officers)</option>
                </select>
              </div>

              <!-- Message Text -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Message Content</label>
                <textarea
                  v-model="broadcastMessage"
                  rows="4"
                  placeholder="Enter reporting instructions, reporting uniform, simulator workstation bay numbers, or document alerts..."
                  class="w-full p-3.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 leading-relaxed"
                ></textarea>
              </div>

              <!-- Quick Template Pills -->
              <div class="flex flex-wrap gap-1.5 items-center text-[11px]">
                <span class="text-slate-400 font-bold uppercase text-[9px]">Quick Templates:</span>
                <button
                  type="button"
                  @click="broadcastMessage = 'Attention Cadets: Morning uniform muster is at 07:30 sharp at MTI Quadrangle. Bring CDC and physical Form 1 medical report.'"
                  class="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                >
                  Uniform Muster
                </button>
                <button
                  type="button"
                  @click="broadcastMessage = 'Simulator practical lab session starts tomorrow at 09:00 in Transas NTPRO Suite Bay 2. Check your digital ID pass before entering.'"
                  class="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                >
                  Simulator Bay
                </button>
                <button
                  type="button"
                  @click="broadcastMessage = 'Your official cryptographic STCW certificate has been stamped and uploaded. You can now verify and download it from your Seafarer Vault.'"
                  class="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                >
                  Cert Ready
                </button>
              </div>

              <button
                @click="sendBroadcast"
                :disabled="!broadcastMessage.trim()"
                class="w-full py-3 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm disabled:opacity-50"
              >
                Send Official Broadcast &rarr;
              </button>
            </div>
          </div>

          <!-- Right: Recent Communications & Student Queries (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Candidate Inquiries</h3>

              <div class="space-y-3">
                <div v-for="inq in candidateInquiries" :key="inq.id" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="font-bold text-xs text-slate-900">{{ inq.studentName }}</div>
                    <span class="text-[10px] text-slate-400 font-mono">{{ inq.time }}</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ inq.message }}</p>
                  <div class="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span class="text-[10px] text-blue-700 font-mono font-bold">{{ inq.courseCode }}</span>
                    <button
                      @click="replyToCandidate(inq)"
                      class="text-xs font-bold text-blue-700 hover:underline"
                    >
                      Quick Reply &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: COURSE CREATION & EDITING                                -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showCourseModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">
              {{ editingCourseId ? 'Edit Course Syllabus & Details' : 'Create New DG Approved Maritime Course' }}
            </h3>
            <p class="text-xs text-slate-500">Specify curriculum, duration, simulators, and fee structure.</p>
          </div>
          <button @click="showCourseModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
        </div>

        <form @submit.prevent="saveCourse" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Course Title *</label>
              <input
                v-model="courseForm.title"
                type="text"
                required
                placeholder="e.g. Bridge Resource Management (BRM)"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Course / IMO Code *</label>
              <input
                v-model="courseForm.code"
                type="text"
                required
                placeholder="e.g. STCW-BRM-01"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none font-mono"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
              <select
                v-model="courseForm.category"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="PRE_SEA">Pre-Sea Cadet</option>
                <option value="HND">Advance Diploma</option>
                <option value="SIMULATOR">Simulator Suite</option>
                <option value="STCW_MODULAR">STCW Modular</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Duration Days *</label>
              <input
                v-model.number="courseForm.durationDays"
                type="number"
                required
                min="1"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none font-mono"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Tuition Fee (PKR) *</label>
              <input
                v-model.number="courseForm.price"
                type="number"
                required
                min="1000"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Description &amp; Learning Objectives</label>
            <textarea
              v-model="courseForm.description"
              rows="3"
              required
              class="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none leading-relaxed"
            ></textarea>
          </div>

          <div class="flex items-center space-x-4">
            <label class="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
              <input type="checkbox" v-model="courseForm.dgApproved" class="rounded border-slate-300 text-blue-600 focus:ring-0" />
              <span class="font-bold">DG Ports &amp; Shipping Approved</span>
            </label>
            <label class="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
              <input type="checkbox" v-model="courseForm.active" class="rounded border-slate-300 text-blue-600 focus:ring-0" />
              <span class="font-bold">Publicly Discoverable</span>
            </label>
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showCourseModal = false"
              class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm"
            >
              {{ editingCourseId ? 'Save Changes' : 'Publish Course' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: BATCH SCHEDULER                                          -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showBatchModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Schedule New Training Batch</h3>
            <p class="text-xs text-slate-500">Allocate intake quota, classroom, and instructor.</p>
          </div>
          <button @click="showBatchModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
        </div>

        <form @submit.prevent="saveBatch" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Select Program Course *</label>
            <select
              v-model="batchForm.courseId"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option v-for="c in courses" :key="c.id" :value="c.id">
                {{ c.title }} ({{ c.code }}) &bull; PKR {{ c.price.toLocaleString() }}
              </option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Batch Code *</label>
              <input
                v-model="batchForm.code"
                type="text"
                required
                placeholder="e.g. GP3-2026-004"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Class Seat Cap *</label>
              <input
                v-model.number="batchForm.capacity"
                type="number"
                required
                min="5"
                max="100"
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Start Date *</label>
              <input
                v-model="batchForm.startDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">End Date *</label>
              <input
                v-model="batchForm.endDate"
                type="date"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Assigned Instructor &bull; Facility</label>
            <input
              v-model="batchForm.instructor"
              type="text"
              placeholder="e.g. Capt. Z. Abbas &bull; Transas Bridge Suite"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showBatchModal = false"
              class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm"
            >
              Lock &amp; Publish Batch
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- MODAL: CERTIFICATE ISSUANCE & FILE ATTACHMENT                   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div
      v-if="showCertModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Cryptographic Certificate Issuance</h3>
            <p class="text-xs text-slate-500">Sign with ECDSA SHA-256 and generate public QR code.</p>
          </div>
          <button @click="showCertModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
        </div>

        <form @submit.prevent="confirmIssueCertificate" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Candidate Name &amp; INDoS</label>
            <input
              v-model="certModalData.candidateName"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium outline-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">INDoS ID</label>
              <input
                v-model="certModalData.indos"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">CDC Seaman Book #</label>
              <input
                v-model="certModalData.cdc"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Course &bull; Batch</label>
            <input
              v-model="certModalData.course"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>

          <!-- Certificate Document Upload -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Attach Signed Scanned Certificate (PDF / Image)</label>
            <div class="p-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center text-xs text-slate-500 hover:border-blue-400 transition cursor-pointer">
              <svg class="w-6 h-6 mx-auto text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Click or drag signed official certificate to attach</span>
            </div>
          </div>

          <div class="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-800 space-y-1">
            <div class="font-bold flex items-center space-x-1">
              <span>🔒 Cryptographic Seal</span>
            </div>
            <p class="text-[11px] leading-relaxed">
              Upon issuance, this certificate is stamped with MTI's cryptographic signature and published to the public verifier for instant PSC validation.
            </p>
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showCertModal = false"
              class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
            >
              Sign &amp; Issue Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

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

const authStore = useAuthStore();
const activeSection = ref('ops');

// Navigation Tabs
const navigationTabs = [
  { id: 'ops', name: 'Ops Command', icon: '⚓', badge: '' },
  { id: 'courses', name: 'Courses & Syllabus', icon: '📚', badge: '18 Active' },
  { id: 'batches', name: 'Batch & Seat Radar', icon: '📅', badge: '8 Batches' },
  { id: 'certificates', name: 'Certificates & QR', icon: '🔐', badge: '1.4k Issued' },
  { id: 'revenue', name: 'Revenue & Ledger', icon: '💳', badge: 'Escrow 90%' },
  { id: 'analytics', name: 'Conversions & Stats', icon: '📊', badge: '24.1%' },
  { id: 'communication', name: 'Cadet Notices', icon: '📢', badge: 'Desk Active' },
];

// Courses Data
const courseSearchQuery = ref('');
const courseFilterCategory = ref('ALL');
const showCourseModal = ref(false);
const editingCourseId = ref<string | null>(null);

const courses = ref([
  {
    id: 'c1',
    code: 'GP-III-01',
    title: 'General Purpose Rating (GP-III Pre-Sea Course)',
    category: 'PRE_SEA',
    duration: '6 Months Full-Time',
    durationDays: 180,
    price: 185000,
    dgApproved: true,
    active: true,
    description: 'Official pre-sea rating training equipping seafarers for deck and engine watchkeeping duties per STCW A-II/4 & A-III/4.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
    labs: ['KPT Apprentice Yard', 'Deck Seamanship Bay'],
  },
  {
    id: 'c2',
    code: 'HND-NAUT',
    title: 'Advance Diploma (AD) Nautical Science SQA Level 8',
    category: 'HND',
    duration: '2 Academic Years',
    durationDays: 730,
    price: 650000,
    dgApproved: true,
    active: true,
    description: 'Direct articulation route to City of Glasgow College leading to UK MCA Officer of the Watch (OOW) CoC.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    labs: ['Transas NTPRO 4000', 'GMDSS Transceiver Bay'],
  },
  {
    id: 'c3',
    code: 'SIM-BRM',
    title: 'Bridge Resource Management (BRM Full-Mission)',
    category: 'SIMULATOR',
    duration: '5 Days Intensive',
    durationDays: 5,
    price: 75000,
    dgApproved: true,
    active: true,
    description: 'Full-mission bridge simulator exercises on human element, leadership, collision avoidance, and heavy weather navigation.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    labs: ['Wärtsilä 360 Bridge', 'Raytheon Anschütz Radar'],
  },
  {
    id: 'c4',
    code: 'STCW-AFF',
    title: 'Advanced Fire Fighting (AFF Mandatory Refresher)',
    category: 'STCW_MODULAR',
    duration: '5 Days Practical',
    durationDays: 5,
    price: 45000,
    dgApproved: true,
    active: true,
    description: 'Live burn operations, smoke maze navigation, breathing apparatus deployment, and emergency command hierarchy.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=400&q=80',
    labs: ['KPT Live Fire Mock Ship', 'Breathing Apparatus Bay'],
  },
  {
    id: 'c5',
    code: 'SIM-ECDIS',
    title: 'ECDIS Type-Specific Multi-Consoles (IMO 1.27)',
    category: 'SIMULATOR',
    duration: '3 Days Workstation',
    durationDays: 3,
    price: 55000,
    dgApproved: true,
    active: true,
    description: 'Electronic chart display systems route planning, sensor inputs, safety contours, and anomaly management.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    labs: ['Transas Navi-Sailor 4000', 'Furuno FMD-3300'],
  },
  {
    id: 'c6',
    code: 'HND-ENG',
    title: 'Advance Diploma Marine Engineering (AD SQA)',
    category: 'HND',
    duration: '2 Academic Years',
    durationDays: 730,
    price: 650000,
    dgApproved: true,
    active: true,
    description: 'Marine thermodynamics, naval architecture, auxiliary machinery, and automated control consoles for Engineer Cadets.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80',
    labs: ['Wärtsilä 5-Console ERS', 'HV 6.6 kV Bay'],
  },
]);

const filteredCourses = computed(() => {
  return courses.value.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(courseSearchQuery.value.toLowerCase()) ||
      c.code.toLowerCase().includes(courseSearchQuery.value.toLowerCase());
    const matchesCategory =
      courseFilterCategory.value === 'ALL' || c.category === courseFilterCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const courseForm = ref({
  title: '',
  code: '',
  category: 'PRE_SEA',
  durationDays: 5,
  price: 50000,
  description: '',
  dgApproved: true,
  active: true,
});

function openNewCourseModal() {
  editingCourseId.value = null;
  courseForm.value = {
    title: '',
    code: '',
    category: 'SIMULATOR',
    durationDays: 5,
    price: 65000,
    description: '',
    dgApproved: true,
    active: true,
  };
  showCourseModal.value = true;
}

function editCourse(course: any) {
  editingCourseId.value = course.id;
  courseForm.value = {
    title: course.title,
    code: course.code,
    category: course.category,
    durationDays: course.durationDays,
    price: course.price,
    description: course.description,
    dgApproved: course.dgApproved,
    active: course.active,
  };
  showCourseModal.value = true;
}

function saveCourse() {
  if (editingCourseId.value) {
    const idx = courses.value.findIndex((c) => c.id === editingCourseId.value);
    if (idx !== -1) {
      courses.value[idx] = {
        ...courses.value[idx],
        ...courseForm.value,
        duration: `${courseForm.value.durationDays} Days Full-Time`,
      };
    }
  } else {
    courses.value.unshift({
      id: 'c_' + Date.now(),
      ...courseForm.value,
      duration: `${courseForm.value.durationDays} Days Full-Time`,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
      labs: ['Simulators Suite', 'Campus Ground'],
    });
  }
  showCourseModal.value = false;
}

// Batches Data & Scheduler
const showBatchModal = ref(false);
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
  {
    id: 'b4',
    code: 'STCW-AFF-02',
    courseName: 'Advanced Fire Fighting',
    title: 'AFF Practical Refresher Mandatory Drill',
    startDate: '29 Jun 2026',
    endDate: '03 Jul 2026',
    timing: '08:30 - 16:00 Daily',
    facility: 'KPT Live Fire Mock Ship',
    instructor: 'Chief Engineer Farooq',
    enrolled: 22,
    capacity: 25,
    fee: 45000,
    status: 'ACTIVE',
  },
]);

const batchForm = ref({
  courseId: 'c1',
  code: '',
  startDate: '',
  endDate: '',
  capacity: 25,
  instructor: 'Capt. Master Mariner',
});

function openNewBatchModal() {
  batchForm.value = {
    courseId: courses.value[0]?.id || '',
    code: 'BATCH-' + Math.floor(1000 + Math.random() * 9000),
    startDate: '2026-07-01',
    endDate: '2026-07-15',
    capacity: 25,
    instructor: 'Capt. Master Mariner &bull; FMBS Lab',
  };
  showBatchModal.value = true;
}

function openNewBatchModalForCourse(course: any) {
  batchForm.value = {
    courseId: course.id,
    code: `${course.code}-${new Date().getFullYear()}-01`,
    startDate: '2026-07-01',
    endDate: '2026-07-15',
    capacity: 20,
    instructor: 'Capt. Master Mariner',
  };
  showBatchModal.value = true;
}

function saveBatch() {
  const selectedCourse = courses.value.find((c) => c.id === batchForm.value.courseId);
  batches.value.unshift({
    id: 'b_' + Date.now(),
    code: batchForm.value.code,
    courseName: selectedCourse ? selectedCourse.title : 'Maritime Program',
    title: selectedCourse ? selectedCourse.title : 'Maritime Batch',
    startDate: batchForm.value.startDate,
    endDate: batchForm.value.endDate,
    timing: '09:00 - 17:00 Daily',
    facility: 'MTI Simulator Complex',
    instructor: batchForm.value.instructor,
    enrolled: 0,
    capacity: batchForm.value.capacity,
    fee: selectedCourse ? selectedCourse.price : 50000,
    status: 'ACTIVE',
  });
  showBatchModal.value = false;
  activeSection.value = 'batches';
}

function adjustSeats(batch: any) {
  const newCap = prompt(`Adjust Seat Capacity for ${batch.code}:`, String(batch.capacity));
  if (newCap && !isNaN(Number(newCap))) {
    batch.capacity = Number(newCap);
  }
}

function openCandidateRoster(batch: any) {
  activeSection.value = 'certificates';
}

// Certificate Issuance & Ledger
const showCertModal = ref(false);
const certModalData = ref({
  candidateName: '',
  indos: '',
  cdc: '',
  course: '',
});

const candidateCertificates = ref([
  {
    id: 'cand1',
    name: 'Cadet Alex Mercer',
    email: 'alex.mercer@seafu.org',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Bridge Resource Management (BRM)',
    batchCode: 'SIM-BRM-04',
    attendance: '100% (40 hrs)',
    examScore: '94% Pass',
    certNumber: 'IND-STCW-BRM-2026-9431',
    status: 'ISSUED',
  },
  {
    id: 'cand2',
    name: 'Cadet Muhammad Tariq',
    email: 'cadet.tariq@gmail.com',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
    batchCode: 'GP3-2026-003',
    attendance: '98% (180 days)',
    examScore: '89% Pass',
    certNumber: '',
    status: 'PENDING_ASSESSMENT',
  },
  {
    id: 'cand3',
    name: 'Officer Rajesh Sharma',
    email: 'r.sharma@merchantnavy.in',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Advanced Fire Fighting (AFF)',
    batchCode: 'STCW-AFF-02',
    attendance: '100% (40 hrs)',
    examScore: '98% Pass',
    certNumber: 'IND-AFF-7714-ECDSA',
    status: 'ISSUED',
  },
  {
    id: 'cand4',
    name: 'Cadet Fatima Noor',
    email: 'fatima.noor@mti.edu.pk',
    indos: '09ZM4821',
    cdc: 'PAK-991204',
    course: 'ECDIS Type-Specific (IMO 1.27)',
    batchCode: 'SIM-ECDIS-01',
    attendance: '100% (24 hrs)',
    examScore: '92% Pass',
    certNumber: '',
    status: 'READY_FOR_ISSUE',
  },
]);

function openIssueCertModal() {
  certModalData.value = {
    candidateName: 'Cadet Muhammad Tariq',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
  };
  showCertModal.value = true;
}

function openIssueCertModalForBatch(batchCode: string) {
  openIssueCertModal();
}

function issueCertForCandidate(cand: any) {
  certModalData.value = {
    candidateName: cand.name,
    indos: cand.indos,
    cdc: cand.cdc,
    course: cand.course,
  };
  showCertModal.value = true;
}

function confirmIssueCertificate() {
  const target = candidateCertificates.value.find(
    (c) => c.indos === certModalData.value.indos
  );
  if (target) {
    target.status = 'ISSUED';
    target.certNumber = `MTI-DG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  showCertModal.value = false;
  alert(`Certificate officially issued and signed with SHA-256 ECDSA! Candidate notified.`);
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
    candidateName: 'Capt. R. Sharma',
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

function exportFinancialLedger() {
  alert('Exporting official MTI Financial Settlement Statement (CSV) for DG Shipping & Bank Audit...');
}

function downloadInvoice(tx: any) {
  alert(`Downloading Statutory Tax Invoice for Transaction ${tx.utr} (Amount: PKR ${tx.amount.toLocaleString()})`);
}

// Analytics Data
const topCoursesPerformance = [
  { name: 'GP-III Pre-Sea Rating', revenue: '1,850,000', students: 40, occupancy: 80 },
  { name: 'Advance Diploma Nautical Science', revenue: '1,300,000', students: 28, occupancy: 80 },
  { name: 'Bridge Resource Management', revenue: '750,000', students: 10, occupancy: 83 },
  { name: 'Advanced Fire Fighting', revenue: '450,000', students: 22, occupancy: 88 },
  { name: 'ECDIS Type-Specific IMO 1.27', revenue: '495,000', students: 9, occupancy: 75 },
];

const simulatorUtilization = [
  { suite: 'Transas NTPRO 4000 Bridge Lab', equipment: '360° Visual Projectors & ARPA Radar', hours: 38, status: 'Full Capacity' },
  { suite: 'Wärtsilä 5-Console Engine Room', equipment: 'Slow-Speed Diesel & Auxiliary Switchboards', hours: 32, status: 'Operational' },
  { suite: 'Liquid Cargo Handling (LCHS)', equipment: 'Oil / Chemical / LNG Tanker Consoles', hours: 26, status: 'Operational' },
  { suite: 'GMDSS Sailor Transceiver Bay', equipment: 'VHF/MF/HF DSC & Inmarsat-C Stations', hours: 24, status: 'Operational' },
];

// Cadet Communications & Broadcast
const openBroadcastModal = ref(false);
const broadcastChannel = ref('IN_APP');
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

function sendBroadcast() {
  if (!broadcastMessage.value.trim()) return;
  alert(`Broadcast successfully dispatched via ${broadcastChannel.value} to target: ${broadcastTarget.value}!`);
  broadcastMessage.value = '';
  openBroadcastModal.value = false;
}

function replyToCandidate(inq: any) {
  const reply = prompt(`Reply to ${inq.studentName}:`, 'Dear Cadet, your request is noted and approved.');
  if (reply) {
    alert(`Reply sent directly to ${inq.studentName} via Seafu In-App Messenger!`);
  }
}

onMounted(() => {
  authStore.initAuth();
});
</script>
