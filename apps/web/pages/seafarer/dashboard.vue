<template>
  <div class="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-24">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP GLOBAL HEADER                                            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand / Maritime Crest -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group">
          <img
            src="/logo-crest.png"
            alt="The Seafu Crest"
            class="w-9 h-9 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
          />
          <span class="text-lg font-black text-slate-900 tracking-tight">The Seafu</span>
        </NuxtLink>

        <!-- Right Controls: Login, Register, Profile -->
        <div class="flex items-center space-x-4">
          <template v-if="authStore.isAuthenticated">
            <span class="text-xs font-bold text-slate-700 hidden sm:inline">
              {{ authStore.user?.fullName || 'Cadet Alex Mercer' }}
            </span>
            <button
              @click="showProfileMenu = !showProfileMenu"
              class="w-9 h-9 rounded-full bg-[#0A1936] text-white flex items-center justify-center shadow-xs relative focus:outline-none"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <div
              v-if="showProfileMenu"
              class="absolute right-6 top-16 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 text-xs text-slate-700"
            >
              <div class="px-4 py-2 border-b border-slate-100 font-black text-slate-900">
                {{ authStore.user?.email || 'alex.mercer@seafu.org' }}
              </div>
              <button
                @click="openDigitalId(); showProfileMenu = false;"
                class="w-full text-left px-4 py-2 hover:bg-slate-50 transition font-bold"
              >
                Digital ID Pass
              </button>
              <NuxtLink
                to="/seafarer/resume"
                class="block w-full text-left px-4 py-2 hover:bg-slate-50 transition"
              >
                Digital Resume
              </NuxtLink>
              <button
                @click="authStore.logout(); showProfileMenu = false;"
                class="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 transition font-bold"
              >
                Sign Out
              </button>
            </div>
          </template>

          <template v-else>
            <NuxtLink to="/auth/login" class="text-xs font-semibold text-slate-700 hover:text-blue-700 transition">
              Login
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="text-xs font-bold text-white bg-[#0A1936] hover:bg-[#112752] px-4 py-2 rounded-xl shadow-xs transition"
            >
              Register
            </NuxtLink>
            <NuxtLink
              to="/auth/login"
              class="w-9 h-9 rounded-full bg-[#0A1936] text-white flex items-center justify-center shadow-xs"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN TWO-COLUMN DASHBOARD LAYOUT                             -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <!-- ── LEFT SIDEBAR NAVIGATION (2.5 cols) ─────────────────────── -->
        <aside class="lg:col-span-2 lg:sticky lg:top-24 flex flex-col justify-between space-y-8">
          <nav class="space-y-1 text-xs font-semibold">
            <NuxtLink
              to="/"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Home
            </NuxtLink>

            <NuxtLink
              to="/seafarer/dashboard"
              class="block px-3.5 py-2.5 rounded-xl bg-blue-50/80 text-[#0A1936] font-black transition shadow-2xs"
            >
              Seafarer Panel
            </NuxtLink>

            <NuxtLink
              to="/courses"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Courses
            </NuxtLink>

            <NuxtLink
              to="/seafarer/vault"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Certificate Vault
            </NuxtLink>

            <NuxtLink
              to="/seafarer/documents"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Document Uploads
            </NuxtLink>

            <NuxtLink
              to="/seafarer/resume"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Digital Resume
            </NuxtLink>

            <NuxtLink
              to="/jobs/my-applications"
              class="block px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              Job Applications
            </NuxtLink>
          </nav>

          <!-- Sidebar Footer Version Tag -->
          <div class="pt-8 text-[11px] font-mono text-slate-400 px-3.5">
            v1.2.0 Seafarer OS
          </div>
        </aside>

        <!-- ── RIGHT WORKSPACE (9.5 cols) ─────────────────────────────── -->
        <main class="lg:col-span-10 space-y-8">

          <!-- ── 1. CERTIFICATE EXPIRY WARNING BANNER ───────────────────── -->
          <div class="bg-[#FEE2E2]/70 border border-rose-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div class="flex items-start sm:items-center space-x-3.5">
              <div class="w-10 h-10 rounded-xl bg-[#B91C1C] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-xs">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-black text-rose-950 text-sm sm:text-base tracking-tight">
                  Certificate Expiry Warning
                </h3>
                <p class="text-xs text-rose-900/90 leading-relaxed mt-0.5">
                  Your STCW Advanced Fire Fighting certification expires in 14 days. Immediate renewal required to maintain compliance on MV Atlantic Pioneer.
                </p>
              </div>
            </div>

            <button
              @click="openRenewModal"
              class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black bg-[#B91C1C] hover:bg-[#991B1B] text-white transition shadow-xs text-center shrink-0"
            >
              Renew Now
            </button>
          </div>

          <!-- ── 2. CADET PROFILE & SEA SERVICE LOG ROW (2 CARDS) ───────── -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <!-- Card A: Cadet Alex Mercer Profile (7.5 cols) -->
            <div class="lg:col-span-8 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs">
              <div class="flex items-center space-x-4">
                <!-- Avatar -->
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Cadet Alex Mercer"
                  class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
                />

                <!-- Info -->
                <div class="space-y-1">
                  <div class="flex items-center space-x-2.5 flex-wrap">
                    <h2 class="text-2xl font-black text-slate-900 tracking-tight">
                      Cadet Alex Mercer
                    </h2>
                    <span class="bg-[#38BDF8] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                      Verified Seafarer
                    </span>
                  </div>

                  <p class="text-xs text-slate-600 font-medium">
                    Deck Officer Cadet &bull; MV Atlantic Pioneer (IMO: 9876543)
                  </p>

                  <div class="flex items-center space-x-3 text-[11px] font-mono text-slate-500 pt-1">
                    <span>⚓ CDC No: IN-98765</span>
                    <span>&bull;</span>
                    <span class="text-emerald-700 font-bold">✓ STCW Compliant</span>
                  </div>
                </div>
              </div>

              <!-- Right Buttons -->
              <div class="flex flex-col items-start sm:items-end shrink-0 w-full sm:w-auto">
                <NuxtLink
                  to="/seafarer/resume"
                  class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs text-center"
                >
                  View Digital Resume
                </NuxtLink>
                <span class="text-[10px] text-slate-400 font-mono mt-2 self-center sm:self-end">
                  Last Synced: Today, 08:30 UTC
                </span>
              </div>
            </div>

            <!-- Card B: Sea Service Log (4.5 cols) -->
            <div class="lg:col-span-4 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-black text-slate-800 tracking-tight">Sea Service Log</span>
                <svg class="w-5 h-5 text-[#0A1936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div>
                <div class="flex items-baseline space-x-2">
                  <span class="text-4xl font-black font-mono text-slate-900">420</span>
                  <span class="text-xs font-bold text-slate-500">Total Sea Days</span>
                </div>

                <div class="mt-3 h-2.5 rounded-full overflow-hidden bg-slate-200">
                  <div class="h-full rounded-full bg-[#38BDF8]" style="width: 100%;"></div>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs pt-1">
                <span class="text-slate-500 font-medium">Rank requirement: 360 days</span>
                <span class="font-black text-blue-700">Target Met</span>
              </div>
            </div>

          </div>

          <!-- ── 3. COURSE DISCOVERY & BOOKING SECTION ─────────────────── -->
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  ADVANCED TRAINING
                </span>
                <h2 class="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                  Course Discovery &amp; Booking
                </h2>
              </div>

              <!-- Top Right Filter Pills -->
              <div class="flex items-center gap-2 flex-wrap">
                <button
                  v-for="pill in ['All Locations', 'Mumbai Maritime', 'Duration: < 5 Days', 'STCW Refresher']"
                  :key="pill"
                  class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition shadow-2xs"
                >
                  {{ pill }}
                </button>
              </div>
            </div>

            <!-- 3 Course Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

              <!-- Course Card 1: BRM -->
              <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                      alt="Bridge Resource Management"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0A1936] text-white shadow">
                      Fast-Track
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded bg-white/95 text-slate-900 shadow">
                      6 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-bold text-blue-700 block">
                      Global Maritime Academy, Mumbai
                    </span>
                    <h3 class="text-base font-black text-slate-900 leading-tight">
                      Bridge Resource Management (BRM)
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      Advanced navigation team coordination, bridge procedures, situational awareness, and passage planning under emergency drills.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold block">Fee</span>
                    <span class="font-mono font-black text-slate-900 text-sm">$650.00</span>
                  </div>
                  <NuxtLink
                    to="/courses"
                    class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
                  >
                    Book Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Course Card 2: AFF -->
              <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                      alt="Advanced Fire Fighting"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#78350F] text-amber-100 shadow">
                      Mandatory Refresher
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded bg-white/95 text-slate-900 shadow">
                      3 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-bold text-blue-700 block">
                      National Maritime Institute
                    </span>
                    <h3 class="text-base font-black text-slate-900 leading-tight">
                      Advanced Fire Fighting (AFF)
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      Comprehensive practical fire suppression drills, organization of fire parties, breathing apparatus command, and foam systems.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold block">Fee</span>
                    <span class="font-mono font-black text-slate-900 text-sm">$480.00</span>
                  </div>
                  <NuxtLink
                    to="/courses"
                    class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
                  >
                    Book Now
                  </NuxtLink>
                </div>
              </div>

              <!-- Course Card 3: ECDIS -->
              <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="ECDIS Type-Specific Training"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-800 text-white shadow">
                      Specialized
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded bg-white/95 text-slate-900 shadow">
                      12 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-bold text-blue-700 block">
                      Oceanic Training Hub
                    </span>
                    <h3 class="text-base font-black text-slate-900 leading-tight">
                      ECDIS Type-Specific Training
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      Operational mastery of electronic chart display and information systems conforming to STCW Regulation II/1, II/2, and II/3.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold block">Fee</span>
                    <span class="font-mono font-black text-slate-900 text-sm">$350.00</span>
                  </div>
                  <NuxtLink
                    to="/courses"
                    class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
                  >
                    Book Now
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>

          <!-- ── 4. COMPLIANCE & CREDENTIALING: CERTIFICATE VAULT ───────── -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  COMPLIANCE &amp; CREDENTIALING
                </span>
                <h2 class="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                  Centralized Certificate Vault
                </h2>
              </div>

              <button
                @click="showUploadModal = true"
                class="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition flex items-center space-x-1.5"
              >
                <span>📄</span>
                <span>Upload New Document</span>
              </button>
            </div>

            <!-- Big Drag & Drop Upload Container -->
            <div
              @click="triggerUpload"
              class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-8 text-center cursor-pointer hover:bg-slate-100 transition shadow-2xs"
            >
              <div class="w-12 h-12 rounded-2xl bg-slate-200/70 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 class="font-black text-slate-900 text-sm sm:text-base">
                Drag &amp; drop your certificates, IDs, or medical reports here
              </h4>
              <p class="text-xs text-slate-500 mt-1">
                Supports PDF, JPG, PNG up to 25MB with instant OCR validation
              </p>
              <button
                class="mt-3.5 px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 transition shadow-2xs"
              >
                Browse Files
              </button>
              <input ref="fileInput" type="file" class="hidden" @change="onFileSelected" />
            </div>

            <!-- Document Registry Table -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead class="bg-slate-50/70 text-slate-500 font-bold text-[11px] border-b border-slate-200">
                    <tr>
                      <th class="px-6 py-3.5">Document Name</th>
                      <th class="px-6 py-3.5">Type</th>
                      <th class="px-6 py-3.5">Expiry Date</th>
                      <th class="px-6 py-3.5">Status / Badge</th>
                      <th class="px-6 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    <!-- Row 1: STCW Watchkeeping -->
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-6 py-4 flex items-center space-x-2 font-bold text-slate-900">
                        <span class="text-blue-700">📄</span>
                        <span>STCW Watchkeeping Certificate</span>
                      </td>
                      <td class="px-6 py-4 text-slate-600">Certificate</td>
                      <td class="px-6 py-4 font-mono text-slate-700">14 Oct 2027</td>
                      <td class="px-6 py-4">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black bg-[#38BDF8] text-white shadow-2xs">
                          ✓ Valid &amp; Verified
                        </span>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button
                          @click="previewDoc('STCW Watchkeeping Certificate', '14 Oct 2027', 'VALID')"
                          class="p-1.5 rounded-lg text-blue-700 hover:bg-blue-50 transition"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </td>
                    </tr>

                    <!-- Row 2: ENG1 Medical -->
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-6 py-4 flex items-center space-x-2 font-bold text-slate-900">
                        <span class="text-blue-700">📄</span>
                        <span>ENG1 Medical Fitness Certificate</span>
                      </td>
                      <td class="px-6 py-4 text-slate-600">Medical</td>
                      <td class="px-6 py-4 font-mono text-slate-700">05 Jan 2026</td>
                      <td class="px-6 py-4">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black bg-[#38BDF8] text-white shadow-2xs">
                          ✓ Valid &amp; Verified
                        </span>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button
                          @click="previewDoc('ENG1 Medical Fitness Certificate', '05 Jan 2026', 'VALID')"
                          class="p-1.5 rounded-lg text-blue-700 hover:bg-blue-50 transition"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </td>
                    </tr>

                    <!-- Row 3: Advanced Fire Fighting -->
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-6 py-4 flex items-center space-x-2 font-bold text-slate-900">
                        <span class="text-rose-600">📄</span>
                        <span>Advanced Fire Fighting (AFF)</span>
                      </td>
                      <td class="px-6 py-4 text-slate-600">STCW Training</td>
                      <td class="px-6 py-4 font-mono font-bold text-rose-600">In 14 Days</td>
                      <td class="px-6 py-4">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-200">
                          ⚠️ Expiring Soon
                        </span>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button
                          @click="previewDoc('Advanced Fire Fighting (AFF)', 'In 14 Days', 'EXPIRING')"
                          class="p-1.5 rounded-lg text-blue-700 hover:bg-blue-50 transition"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- ── 5. BOTTOM ROW: AUTO-UPDATING RESUME & JOB TRACKER ──────── -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <!-- Left Card: Live Professional CV (5.5 cols) -->
            <div class="lg:col-span-5 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs space-y-4">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    LIVE PROFESSIONAL CV
                  </span>
                  <svg class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>

                <h3 class="text-xl font-black text-slate-900 tracking-tight mt-1">
                  Auto-Updating Resume
                </h3>

                <p class="text-xs text-slate-600 leading-relaxed mt-2">
                  Your CV dynamically syncs with newly verified STCW certificates, sea service day counts, and vessel assignments in real time.
                </p>

                <!-- Profile Completeness Bar -->
                <div class="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div class="flex items-center justify-between text-xs mb-1.5">
                    <span class="font-bold text-slate-700">Profile Completeness</span>
                    <span class="font-mono font-black text-[#0A1936]">98%</span>
                  </div>
                  <div class="h-2 rounded-full overflow-hidden bg-slate-100">
                    <div class="h-full rounded-full bg-[#0A1936]" style="width: 98%;"></div>
                  </div>
                </div>

                <!-- Bullets -->
                <div class="mt-4 space-y-2 text-xs text-slate-700 font-semibold">
                  <div class="flex items-center space-x-2">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>8 Verified Certifications Linked</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>4 Vessels Logged &amp; Verified</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>Endorsed by Captain H. Vance</span>
                  </div>
                </div>
              </div>

              <!-- Export Button -->
              <button
                @click="exportCvPdf"
                class="w-full py-3 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center justify-center space-x-2 mt-4"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Export Verified CV (PDF)</span>
              </button>
            </div>

            <!-- Right Card: Career Placement - Job Tracker (6.5 cols) -->
            <div class="lg:col-span-7 bg-slate-100/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs space-y-4">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    CAREER PLACEMENT
                  </span>
                  <NuxtLink to="/jobs" class="text-xs font-bold text-blue-700 hover:underline">
                    View All Openings &rarr;
                  </NuxtLink>
                </div>

                <h3 class="text-xl font-black text-slate-900 tracking-tight mt-1">
                  Job Application Tracker
                </h3>

                <!-- 3 Pipeline Columns -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">

                  <!-- Column 1: Applied -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                      <span>Applied</span>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">2</span>
                    </div>

                    <div class="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs space-y-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Apex Tankers Ltd
                      </span>
                      <div class="text-xs font-black text-slate-900 leading-snug">
                        Third Officer (Chemical)
                      </div>
                      <div class="flex items-center justify-between pt-1">
                        <span class="text-[10px] text-slate-400">Applied 2d ago</span>
                        <span class="text-[#0A1936]">🏷️</span>
                      </div>
                    </div>
                  </div>

                  <!-- Column 2: Shortlisted -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                      <span>Shortlisted</span>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#38BDF8] text-white">1</span>
                    </div>

                    <div class="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs space-y-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Global Container Lines
                      </span>
                      <div class="text-xs font-black text-slate-900 leading-snug">
                        Deck Cadet - Ultra Large
                      </div>
                      <div class="flex items-center justify-between pt-1">
                        <span class="text-[10px] font-bold text-blue-700">Interview Pending</span>
                        <span class="text-[#0A1936]">🏷️</span>
                      </div>
                    </div>
                  </div>

                  <!-- Column 3: Selected -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                      <span>Selected</span>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">1</span>
                    </div>

                    <div class="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs space-y-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Atlantic Maritime
                      </span>
                      <div class="text-xs font-black text-slate-900 leading-snug">
                        Junior Officer Pool
                      </div>
                      <div class="flex items-center justify-between pt-1">
                        <span class="text-[10px] font-bold text-emerald-600">Contract Signed</span>
                        <span class="text-[#0A1936]">🏷️</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. INTERACTIVE MODALS                                            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->

    <!-- Fast-Track Certificate Renewal Modal -->
    <div
      v-if="renewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 rounded-full bg-rose-600 animate-pulse"></span>
            <h4 class="font-black text-slate-900 text-base">Priority Certificate Renewal</h4>
          </div>
          <button @click="renewModalOpen = false" class="text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">
          Your Advanced Fire Fighting (AFF) certificate expires on <strong class="text-rose-600">October 02, 2026</strong>. Lock an audited batch slot before sailing on MV Atlantic Pioneer:
        </p>

        <div class="space-y-2 text-xs">
          <div class="p-3.5 rounded-xl border border-blue-300 bg-blue-50/50 flex items-center justify-between cursor-pointer">
            <div>
              <div class="font-bold text-slate-900">National Maritime Institute &bull; Navi Mumbai</div>
              <div class="text-[11px] text-slate-500 font-mono">Starts next Monday &bull; 3 Seats Left</div>
            </div>
            <span class="font-mono font-black text-blue-700">$480.00</span>
          </div>

          <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between cursor-pointer hover:border-slate-300">
            <div>
              <div class="font-bold text-slate-900">Anglo-Eastern Maritime Training Centre</div>
              <div class="text-[11px] text-slate-500 font-mono">Starts in 10 Days &bull; 5 Seats Left</div>
            </div>
            <span class="font-mono font-black text-blue-700">$510.00</span>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="renewModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Later
          </button>
          <NuxtLink
            to="/courses"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            Lock Seat &amp; Renew &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Document Preview Modal -->
    <div
      v-if="previewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-2">
            <span class="text-blue-700">📄</span>
            <h4 class="font-black text-slate-900 text-base">{{ previewTitle }}</h4>
          </div>
          <button @click="previewModalOpen = false" class="text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-500">Document Status:</span>
            <span class="font-bold text-emerald-600">{{ previewStatus === 'VALID' ? 'Verified Cryptographic White-Sync' : 'Action Required' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Expiry Date:</span>
            <span class="font-mono font-bold text-slate-800">{{ previewExpiry }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">ECDSA Hash Verification:</span>
            <span class="font-mono text-[11px] text-blue-700">0x7F9B...8A12 (DGS Audited)</span>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="previewModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
          <button
            @click="downloadDocument"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            Download Signed PDF
          </button>
        </div>
      </div>
    </div>

    <!-- Merchant Navy Digital ID Pass Modal -->
    <div
      v-if="digitalIdOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-md w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-2">
            <img src="/logo-crest.png" alt="Crest" class="w-6 h-6 object-contain" />
            <h4 class="font-black text-slate-900 text-base">Digital Maritime ID Pass</h4>
          </div>
          <button @click="digitalIdOpen = false" class="text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        </div>

        <div class="p-5 rounded-2xl bg-[#0A1936] text-white space-y-4 shadow-md relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-blue-300 font-bold uppercase tracking-wider">MERCHANT NAVY SEAFARER PASS</span>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div class="flex items-center space-x-3.5">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Alex Mercer"
              class="w-14 h-14 rounded-xl object-cover border border-white/20"
            />
            <div>
              <div class="font-black text-base text-white">Cadet Alex Mercer</div>
              <div class="text-xs text-slate-300">Deck Officer Cadet</div>
              <div class="text-[10px] font-mono text-blue-300 mt-0.5">INDoS: 08ZL9431 &bull; CDC: IN-98765</div>
            </div>
          </div>

          <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span class="text-[10px] text-slate-400 font-mono">HASH: ecdsa-sha256-0x981</span>
            <span class="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">✓ PSC Verified</span>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="digitalIdOpen = false"
            class="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
          >
            Close Pass
          </button>
        </div>
      </div>
    </div>

    <!-- Upload Document Modal -->
    <div
      v-if="showUploadModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 class="font-black text-slate-900 text-base">Upload Maritime Document</h4>
          <button @click="showUploadModal = false" class="text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">DOCUMENT TYPE</label>
            <select
              v-model="uploadType"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
            >
              <option value="STCW Certificate">STCW Certificate</option>
              <option value="ENG1 Medical">ENG1 / DG Medical Fitness</option>
              <option value="Continuous Discharge Certificate (CDC)">Continuous Discharge Certificate (CDC)</option>
              <option value="Passport / Travel Document">Passport / Travel Document</option>
            </select>
          </div>

          <div>
            <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">DOCUMENT NAME</label>
            <input
              v-model="uploadName"
              type="text"
              placeholder="e.g. PSCRB Certificate 2026"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
            />
          </div>

          <div>
            <label class="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">EXPIRY DATE</label>
            <input
              v-model="uploadExpiry"
              type="date"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600"
            />
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="showUploadModal = false"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            @click="confirmUpload"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
          >
            Upload to Vault
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({ middleware: ['auth'] });
useHead({
  title: 'Seafarer Panel · The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'Personal maritime dashboard for seafarers: certificate tracking, sea service log, course discovery, auto-updating resume, and job applications.',
    },
  ],
});

const authStore = useAuthStore();
onMounted(() => {
  authStore.initAuth();
});

const showProfileMenu = ref(false);
const renewModalOpen = ref(false);
const previewModalOpen = ref(false);
const digitalIdOpen = ref(false);
const showUploadModal = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);

const previewTitle = ref('');
const previewExpiry = ref('');
const previewStatus = ref('');

const uploadType = ref('STCW Certificate');
const uploadName = ref('');
const uploadExpiry = ref('');

function triggerUpload() {
  fileInput.value?.click();
}

function onFileSelected(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    alert(`Document "${target.files[0].name}" successfully parsed via instant OCR. Validation complete.`);
  }
}

function openRenewModal() {
  renewModalOpen.value = true;
}

function previewDoc(title: string, expiry: string, status: string) {
  previewTitle.value = title;
  previewExpiry.value = expiry;
  previewStatus.value = status;
  previewModalOpen.value = true;
}

function downloadDocument() {
  alert(`Downloading official cryptographic PDF for "${previewTitle.value}"...`);
  previewModalOpen.value = false;
}

function openDigitalId() {
  digitalIdOpen.value = true;
}

function exportCvPdf() {
  alert('Exporting certified maritime CV with ECDSA cryptographic verification badge (PDF)...');
}

function confirmUpload() {
  if (!uploadName.value) {
    alert('Please enter a document name.');
    return;
  }
  alert(`Document "${uploadName.value}" uploaded to encrypted cloud vault.`);
  showUploadModal.value = false;
  uploadName.value = '';
}
</script>
