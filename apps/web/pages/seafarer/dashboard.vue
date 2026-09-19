<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-24">

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP GLOBAL HEADER                                            -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <!-- Brand / Maritime Crest -->
        <NuxtLink to="/" class="flex items-center space-x-3 group shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1" aria-label="The Seafu Home">
          <div class="w-9 h-9 shrink-0">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full group-hover:scale-105 transition-transform" aria-hidden="true">
              <circle cx="40" cy="40" r="38" stroke="#B8941F" stroke-width="3"/>
              <circle cx="40" cy="40" r="31" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
              <path d="M40 13l2.5 11h-5L40 13z" fill="#B8941F"/>
              <path d="M40 67l-2.5-11h5L40 67z" fill="#B8941F" opacity="0.45"/>
              <path d="M13 40l11-2.5v5L13 40z" fill="#B8941F" opacity="0.45"/>
              <path d="M67 40l-11 2.5v-5L67 40z" fill="#B8941F"/>
              <rect x="37.5" y="21" width="5" height="29" rx="2.5" fill="#0A1936"/>
              <circle cx="40" cy="21" r="5.5" stroke="#0A1936" stroke-width="3" fill="none"/>
              <rect x="27" y="31" width="26" height="4.5" rx="2.25" fill="#0A1936"/>
              <path d="M31 51 Q26 58 28.5 63 Q32.5 67 37 59 L40 51" fill="#0A1936"/>
              <path d="M49 51 Q54 58 51.5 63 Q47.5 67 43 59 L40 51" fill="#0A1936"/>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold text-slate-900 tracking-tight leading-none">The Seafu</span>
            <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">Seafarer OS</span>
          </div>
        </NuxtLink>

        <!-- Right Controls: Profile & Mobile Navigation Toggle -->
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button
              @click="showProfileMenu = !showProfileMenu"
              class="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-haspopup="true"
              :aria-expanded="showProfileMenu"
              aria-label="User Profile Menu"
            >
              <div class="w-8 h-8 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                AM
              </div>
              <span class="text-xs font-semibold text-slate-700 hidden sm:inline">
                Cadet Alex Mercer
              </span>
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="showProfileMenu"
              class="absolute right-0 top-12 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 text-xs text-slate-700"
              role="menu"
            >
              <div class="px-4 py-2.5 border-b border-slate-100">
                <div class="font-bold text-slate-900">Cadet Alex Mercer</div>
                <div class="text-[11px] text-slate-400 font-mono">alex.mercer@seafu.org</div>
              </div>
              <button
                @click="openDigitalId(); showProfileMenu = false;"
                class="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition flex items-center space-x-2 text-slate-700 font-medium"
                role="menuitem"
              >
                <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                </svg>
                <span>Digital Maritime ID Pass</span>
              </button>
              <NuxtLink
                to="/seafarer/resume"
                @click="showProfileMenu = false"
                class="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition flex items-center space-x-2 text-slate-700 font-medium"
                role="menuitem"
              >
                <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span>Digital Resume</span>
              </NuxtLink>
              <div class="border-t border-slate-100 my-1"></div>
              <button
                @click="handleSignOut"
                class="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 transition font-medium flex items-center space-x-2"
                role="menuitem"
              >
                <svg class="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. TWO-COLUMN DASHBOARD LAYOUT                                  -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <!-- ── LEFT SIDEBAR NAVIGATION (2 cols) ──────────────────────── -->
        <div class="lg:col-span-2">
          <SeafarerSidebarNav />
        </div>

        <!-- ── RIGHT WORKSPACE (9.5 cols) ─────────────────────────────── -->
        <main class="lg:col-span-10 space-y-8">

          <!-- ── 1. CERTIFICATE EXPIRY WARNING BANNER ───────────────────── -->
          <section
            class="bg-[#FEE2E2]/70 border border-rose-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
            role="alert"
            aria-labelledby="expiry-warning-title"
          >
            <div class="flex items-start sm:items-center space-x-3.5">
              <div class="w-10 h-10 rounded-xl bg-[#B91C1C] text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 id="expiry-warning-title" class="font-bold text-rose-950 text-sm sm:text-base tracking-tight">
                  Certificate Expiry Warning
                </h3>
                <p class="text-xs text-rose-900/90 leading-relaxed mt-0.5 font-normal">
                  Your STCW Advanced Fire Fighting certification expires in 14 days. Immediate renewal required to maintain compliance on MV Atlantic Pioneer.
                </p>
              </div>
            </div>

            <button
              @click="openRenewModal"
              class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#B91C1C] hover:bg-[#991B1B] text-white transition shadow-xs text-center shrink-0 focus:outline-none focus:ring-2 focus:ring-rose-800"
            >
              Renew Now
            </button>
          </section>

          <!-- ── 2. CADET PROFILE & SEA SERVICE LOG ROW ─────────────────── -->
          <SeafarerSeaTimeGauge />

          <!-- ── 3. COURSE DISCOVERY & BOOKING SECTION ─────────────────── -->
          <section class="space-y-4" aria-labelledby="course-discovery-title">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  ADVANCED TRAINING
                </span>
                <h2 id="course-discovery-title" class="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                  Course Discovery &amp; Booking
                </h2>
              </div>

              <!-- Filter Pills -->
              <div class="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Course Location Filters">
                <button
                  v-for="pill in courseFilters"
                  :key="pill"
                  @click="activeCourseFilter = pill"
                  class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-600"
                  :class="activeCourseFilter === pill ? 'bg-[#0A1936] text-white' : 'bg-slate-200/80 hover:bg-slate-300 text-slate-700'"
                >
                  {{ pill }}
                </button>
              </div>
            </div>

            <!-- 3 Course Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

              <!-- Course Card 1: BRM -->
              <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                      alt="Bridge Resource Management"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#0A1936] text-white shadow">
                      Fast-Track
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-slate-900 shadow">
                      6 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-semibold text-blue-700 block">
                      Global Maritime Academy, Mumbai
                    </span>
                    <h3 class="text-base font-bold text-slate-900 leading-tight">
                      Bridge Resource Management (BRM)
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      Advanced navigation team coordination, bridge procedures, situational awareness, and passage planning under emergency drills.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Fee</span>
                    <span class="font-mono font-bold text-slate-900 text-sm">$650.00</span>
                  </div>
                  <button
                    @click="openBookingModal('Bridge Resource Management (BRM)', '$650.00', 'Global Maritime Academy, Mumbai')"
                    class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    Book Now
                  </button>
                </div>
              </article>

              <!-- Course Card 2: AFF -->
              <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                      alt="Advanced Fire Fighting"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#78350F] text-amber-100 shadow">
                      Mandatory Refresher
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-slate-900 shadow">
                      3 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-semibold text-blue-700 block">
                      National Maritime Institute
                    </span>
                    <h3 class="text-base font-bold text-slate-900 leading-tight">
                      Advanced Fire Fighting (AFF)
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      Comprehensive practical fire suppression drills, organization of fire parties, breathing apparatus command, and foam systems.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Fee</span>
                    <span class="font-mono font-bold text-slate-900 text-sm">$480.00</span>
                  </div>
                  <button
                    @click="openBookingModal('Advanced Fire Fighting (AFF)', '$480.00', 'National Maritime Institute')"
                    class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    Book Now
                  </button>
                </div>
              </article>

              <!-- Course Card 3: ECDIS -->
              <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div class="h-44 bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="ECDIS Type-Specific Training"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-teal-800 text-white shadow">
                      Specialized
                    </span>
                    <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-slate-900 shadow">
                      12 Seats Left
                    </span>
                  </div>

                  <div class="p-5 space-y-2">
                    <span class="text-[11px] font-semibold text-blue-700 block">
                      Oceanic Training Hub
                    </span>
                    <h3 class="text-base font-bold text-slate-900 leading-tight">
                      ECDIS Type-Specific Training
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      Operational mastery of electronic chart display and information systems conforming to STCW Regulation II/1, II/2, and II/3.
                    </p>
                  </div>
                </div>

                <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Fee</span>
                    <span class="font-mono font-bold text-slate-900 text-sm">$350.00</span>
                  </div>
                  <button
                    @click="openBookingModal('ECDIS Type-Specific Training', '$350.00', 'Oceanic Training Hub')"
                    class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    Book Now
                  </button>
                </div>
              </article>

            </div>
          </section>

          <!-- ── 4. COMPLIANCE & CREDENTIALING: CERTIFICATE VAULT ───────── -->
          <SeafarerCertificateVault
            @upload-doc="showUploadModal = true"
            @preview-doc="openDocPreview"
          />

          <!-- ── 5. BOTTOM ROW: AUTO-UPDATING RESUME & JOB TRACKER ──────── -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5">
              <SeafarerCvExporter @export-pdf="handleExportPdf" />
            </div>
            <div class="lg:col-span-7">
              <SeafarerJobApplicationTracker @open-chat="openChatModal" />
            </div>
          </div>

        </main>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 3. PRODUCTION INTERACTIVE MODALS                                -->
    <!-- ═════════════════════════════════════════════════════════════════ -->

    <!-- Modal 1: Course Booking & Escrow Payment Modal -->
    <div
      v-if="bookingModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      @click.self="bookingModalOpen = false"
    >
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
        <button
          @click="bookingModalOpen = false"
          class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close booking modal"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div v-if="!bookingConfirmed">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 id="booking-modal-title" class="text-lg font-bold text-slate-900 leading-snug">
                {{ selectedCourseTitle }}
              </h3>
              <p class="text-xs text-slate-500">{{ selectedCourseAcademy }}</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-600">
              <span>Standard Course Tuition:</span>
              <span class="font-bold text-slate-900 font-mono">{{ selectedCourseFee }}</span>
            </div>
            <div class="flex items-center justify-between text-slate-600">
              <span>Statutory Examination Fee:</span>
              <span class="font-bold text-slate-900 font-mono">Included</span>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-slate-200 font-bold text-sm text-slate-900">
              <span>Total Payable (Escrow Protected):</span>
              <span class="text-blue-700 font-mono">{{ selectedCourseFee }}</span>
            </div>
          </div>

          <form @submit.prevent="confirmBooking" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-slate-700 mb-1.5">Payment Method</label>
              <div class="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  @click="paymentMethod = 'card'"
                  class="p-2.5 rounded-xl border text-center font-semibold transition"
                  :class="paymentMethod === 'card' ? 'border-blue-600 bg-blue-50/50 text-blue-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'"
                >
                  Credit / Debit Card
                </button>
                <button
                  type="button"
                  @click="paymentMethod = 'corporate'"
                  class="p-2.5 rounded-xl border text-center font-semibold transition"
                  :class="paymentMethod === 'corporate' ? 'border-blue-600 bg-blue-50/50 text-blue-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'"
                >
                  Maritime Corporate Pay
                </button>
              </div>
            </div>

            <div>
              <label for="booking-email" class="block font-semibold text-slate-700 mb-1.5">Billing Email</label>
              <input
                id="booking-email"
                v-model="billingEmail"
                type="email"
                required
                class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div class="p-3 bg-blue-50/60 rounded-xl border border-blue-200 text-blue-900 flex items-start space-x-2">
              <svg class="w-4 h-4 text-blue-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-[11px] leading-relaxed font-normal">
                Funds are held in <strong>The Seafu Escrow</strong> until batch completion and cryptographic certificate vault upload.
              </span>
            </div>

            <div class="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                @click="bookingModalOpen = false"
                class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-5 py-2.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-semibold transition shadow-xs"
              >
                Confirm Escrow Booking
              </button>
            </div>
          </form>
        </div>

        <!-- Success Confirmation State -->
        <div v-else class="text-center py-4 space-y-3">
          <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900">Seat Locked &amp; Escrow Initialized!</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Your registration for <strong>{{ selectedCourseTitle }}</strong> has been logged. An official voucher has been dispatched to {{ billingEmail }}.
          </p>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 text-center">
            Escrow Tx: 0xSEAFU-{{ Math.random().toString(36).substring(2, 9).toUpperCase() }}
          </div>
          <button
            @click="bookingModalOpen = false"
            class="mt-3 px-6 py-2.5 rounded-xl bg-[#0A1936] text-white font-semibold text-xs transition"
          >
            Return to Panel
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 2: Fast-Track Certificate Renewal Modal -->
    <div
      v-if="renewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="renew-modal-title"
      @click.self="renewModalOpen = false"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
        <button
          @click="renewModalOpen = false"
          class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close renewal modal"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <span class="w-3 h-3 rounded-full bg-rose-600 animate-pulse"></span>
          <h4 id="renew-modal-title" class="font-bold text-slate-900 text-base">Priority Certificate Renewal</h4>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed font-normal">
          Your Advanced Fire Fighting (AFF) certificate expires in <strong class="text-rose-600">14 days</strong>. Lock an accredited fast-track batch slot before sailing on MV Atlantic Pioneer:
        </p>

        <div class="space-y-2.5 text-xs">
          <div
            @click="selectedRenewalAcademy = 'NMI'"
            class="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition"
            :class="selectedRenewalAcademy === 'NMI' ? 'border-blue-600 bg-blue-50/50 shadow-2xs' : 'border-slate-200 bg-slate-50 hover:bg-white'"
          >
            <div>
              <div class="font-bold text-slate-900">National Maritime Institute &bull; Navi Mumbai</div>
              <div class="text-[11px] text-slate-500 font-mono mt-0.5">Starts next Monday &bull; 3 Seats Left</div>
            </div>
            <span class="font-mono font-bold text-blue-700 text-sm">$480.00</span>
          </div>

          <div
            @click="selectedRenewalAcademy = 'Anglo'"
            class="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition"
            :class="selectedRenewalAcademy === 'Anglo' ? 'border-blue-600 bg-blue-50/50 shadow-2xs' : 'border-slate-200 bg-slate-50 hover:bg-white'"
          >
            <div>
              <div class="font-bold text-slate-900">Anglo-Eastern Maritime Training Centre</div>
              <div class="text-[11px] text-slate-500 font-mono mt-0.5">Starts in 10 Days &bull; 5 Seats Left</div>
            </div>
            <span class="font-mono font-bold text-blue-700 text-sm">$510.00</span>
          </div>
        </div>

        <div class="pt-3 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="renewModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Remind Later
          </button>
          <button
            @click="confirmRenewalSlot"
            class="px-5 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs transition"
          >
            Lock Priority Slot &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 3: Document Upload & Instant OCR Modal -->
    <div
      v-if="showUploadModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-modal-title"
      @click.self="showUploadModal = false"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
        <button
          @click="showUploadModal = false"
          class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close upload modal"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="border-b border-slate-100 pb-3">
          <h4 id="upload-modal-title" class="font-bold text-slate-900 text-base">Upload Maritime Credential</h4>
          <p class="text-xs text-slate-500 mt-0.5">Automated OCR parsing &bull; Cryptographic hash generation</p>
        </div>

        <form @submit.prevent="handleUploadSubmit" class="space-y-3.5 text-xs">
          <div>
            <label class="font-semibold text-slate-700 block mb-1">Document Category</label>
            <select
              v-model="uploadCategory"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600 text-xs font-medium"
            >
              <option>STCW Certificate</option>
              <option>ENG1 Medical Report</option>
              <option>Continuous Discharge Certificate (CDC)</option>
              <option>Passport / Maritime Visa</option>
            </select>
          </div>

          <div>
            <label class="font-semibold text-slate-700 block mb-1">Document Title</label>
            <input
              v-model="uploadDocTitle"
              type="text"
              required
              placeholder="e.g. Proficiency in Survival Craft (PSC)"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:bg-white focus:border-blue-600 text-xs"
            />
          </div>

          <div
            @click="fileInput?.click()"
            class="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer bg-slate-50/50 hover:bg-blue-50/30 transition"
          >
            <svg class="w-8 h-8 text-blue-700 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <div class="font-bold text-slate-800 text-xs">Click to select PDF or image file</div>
            <div class="text-[11px] text-slate-400 mt-0.5">Supports PDF, JPG, PNG up to 25MB</div>
            <input ref="fileInput" type="file" class="hidden" @change="onFileSelected" />
          </div>

          <div v-if="selectedFileName" class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
            <span class="text-xs font-semibold text-emerald-800 truncate">{{ selectedFileName }}</span>
            <span class="text-[10px] font-mono text-emerald-600 bg-white px-2 py-0.5 rounded">OCR Ready</span>
          </div>

          <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              @click="showUploadModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs"
            >
              Upload &amp; Verify
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal 4: Cryptographic Document Preview Modal -->
    <div
      v-if="previewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      @click.self="previewModalOpen = false"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
        <button
          @click="previewModalOpen = false"
          class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close preview modal"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="flex items-center space-x-2.5 border-b border-slate-100 pb-3">
          <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h4 id="preview-modal-title" class="font-bold text-slate-900 text-base">{{ activePreviewDoc.title }}</h4>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Document Status:</span>
            <span class="font-bold" :class="activePreviewDoc.status === 'VALID' ? 'text-emerald-600' : 'text-rose-600'">
              {{ activePreviewDoc.status === 'VALID' ? 'Verified Cryptographic White-Sync' : 'Action Required / Expiring' }}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Certificate Reference:</span>
            <span class="font-mono font-bold text-slate-800">{{ activePreviewDoc.certNo }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Expiry Date:</span>
            <span class="font-mono font-bold text-slate-800">{{ activePreviewDoc.expiry }}</span>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-slate-200">
            <span class="text-slate-500">ECDSA Hash Signature:</span>
            <span class="font-mono text-[11px] text-blue-700">0x7F9B...8A12 (DGS Audited)</span>
          </div>
        </div>

        <div class="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            @click="previewModalOpen = false"
            class="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
          <button
            @click="downloadSignedPdf"
            class="px-5 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white shadow-xs flex items-center space-x-1.5"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>Download Signed PDF</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 5: Digital Maritime ID Pass Modal -->
    <div
      v-if="digitalIdOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="digital-id-title"
      @click.self="digitalIdOpen = false"
    >
      <div class="rounded-3xl border border-slate-200 bg-white p-6 max-w-md w-full space-y-4 shadow-2xl relative">
        <button
          @click="digitalIdOpen = false"
          class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close digital ID"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="border-b border-slate-100 pb-2">
          <h4 id="digital-id-title" class="font-bold text-slate-900 text-base">Digital Maritime ID Pass</h4>
          <p class="text-xs text-slate-500 mt-0.5">Flag State &amp; Port State Control Verified</p>
        </div>

        <div class="p-5 rounded-2xl bg-[#0A1936] text-white space-y-4 shadow-md relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-blue-300 font-bold uppercase tracking-wider">MERCHANT NAVY SEAFARER PASS</span>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Valid status"></span>
          </div>

          <div class="flex items-center space-x-3.5">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Alex Mercer"
              class="w-14 h-14 rounded-xl object-cover border border-white/20"
            />
            <div>
              <div class="font-bold text-base text-white">Cadet Alex Mercer</div>
              <div class="text-xs text-slate-300">Deck Officer Cadet</div>
              <div class="text-[10px] font-mono text-blue-300 mt-0.5">INDoS: 08ZL9431 &bull; CDC: IN-98765</div>
            </div>
          </div>

          <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span class="text-[10px] text-slate-400 font-mono">HASH: ecdsa-sha256-0x981</span>
            <span class="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              ✓ PSC Verified
            </span>
          </div>
        </div>

        <div class="pt-2">
          <button
            @click="digitalIdOpen = false"
            class="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
          >
            Close Pass
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 6: Recruiter Live Chat Modal -->
    <div
      v-if="chatModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-modal-title"
      @click.self="chatModalOpen = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 relative flex flex-col h-[500px]">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs">
              {{ activeChatInfo.recruiter.charAt(0) }}
            </div>
            <div>
              <h4 id="chat-modal-title" class="font-bold text-slate-900 text-sm leading-tight">{{ activeChatInfo.recruiter }}</h4>
              <div class="text-[11px] text-slate-400 font-medium">{{ activeChatInfo.company }} &bull; {{ activeChatInfo.role }}</div>
            </div>
          </div>
          <button
            @click="chatModalOpen = false"
            class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close chat"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Chat History -->
        <div class="flex-1 overflow-y-auto py-4 space-y-3 text-xs">
          <div class="max-w-[80%] p-3 rounded-2xl bg-slate-100 text-slate-800 self-start rounded-tl-none">
            Hello Cadet Mercer! We reviewed your verified sea service records (420 days) and your ECDIS qualifications. Your application is progressing well.
          </div>
          <div class="max-w-[80%] p-3 rounded-2xl bg-[#0A1936] text-white ml-auto rounded-tr-none">
            Thank you! I am available for the preliminary interview and have my medical clearance updated.
          </div>
          <div v-for="(msg, mIdx) in extraChatMessages" :key="mIdx" class="max-w-[80%] p-3 rounded-2xl bg-[#0A1936] text-white ml-auto rounded-tr-none">
            {{ msg }}
          </div>
        </div>

        <!-- Input -->
        <div class="pt-3 border-t border-slate-100 flex items-center space-x-2">
          <input
            v-model="newChatMessage"
            @keyup.enter="sendChatMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <button
            @click="sendChatMessage"
            class="p-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition focus:outline-none"
            aria-label="Send message"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({ layout: false });

useHead({
  title: 'Seafarer Panel · The Seafu Platform',
  meta: [
    {
      name: 'description',
      content: 'Personal maritime dashboard for seafarers: STCW certificate tracking, sea service log, course discovery, auto-updating resume, and job applications.',
    },
  ],
});

const showProfileMenu = ref(false);
const renewModalOpen = ref(false);
const bookingModalOpen = ref(false);
const previewModalOpen = ref(false);
const digitalIdOpen = ref(false);
const showUploadModal = ref(false);
const chatModalOpen = ref(false);

const courseFilters = ['All Locations', 'Mumbai Maritime', 'Duration: < 5 Days', 'STCW Refresher'];
const activeCourseFilter = ref('All Locations');

const selectedCourseTitle = ref('');
const selectedCourseFee = ref('');
const selectedCourseAcademy = ref('');
const paymentMethod = ref('card');
const billingEmail = ref('alex.mercer@seafu.org');
const bookingConfirmed = ref(false);

const selectedRenewalAcademy = ref('NMI');

const activePreviewDoc = ref({
  title: 'STCW Watchkeeping Certificate',
  certNo: 'IND-WKC-4091-ECDSA',
  expiry: '14 Oct 2027',
  status: 'VALID',
});

const activeChatInfo = ref({
  recruiter: 'Capt. Roger Hayes',
  company: 'Apex Tankers Ltd.',
  role: 'Third Officer (Chemical)',
});
const newChatMessage = ref('');
const extraChatMessages = ref<string[]>([]);

const fileInput = ref<HTMLInputElement | null>(null);
const uploadCategory = ref('STCW Certificate');
const uploadDocTitle = ref('');
const selectedFileName = ref('');

function openBookingModal(title: string, fee: string, academy: string) {
  selectedCourseTitle.value = title;
  selectedCourseFee.value = fee;
  selectedCourseAcademy.value = academy;
  bookingConfirmed.value = false;
  bookingModalOpen.value = true;
}

function confirmBooking() {
  bookingConfirmed.value = true;
}

function openRenewModal() {
  renewModalOpen.value = true;
}

function confirmRenewalSlot() {
  alert('Priority seat locked at National Maritime Institute! An official entry pass has been emailed to you.');
  renewModalOpen.value = false;
}

function openDocPreview(doc: any) {
  activePreviewDoc.value = doc;
  previewModalOpen.value = true;
}

function downloadSignedPdf() {
  alert(`Downloading official signed PDF for ${activePreviewDoc.value.title}...`);
  previewModalOpen.value = false;
}

function openDigitalId() {
  digitalIdOpen.value = true;
}

function openChatModal(info: { recruiter: string; company: string; role: string }) {
  activeChatInfo.value = info;
  extraChatMessages.value = [];
  chatModalOpen.value = true;
}

function sendChatMessage() {
  if (!newChatMessage.value.trim()) return;
  extraChatMessages.value.push(newChatMessage.value);
  newChatMessage.value = '';
}

function handleExportPdf() {
  alert('Exporting verified Seafarer CV (PDF) with ECDSA tamper-evident watermark...');
}

function onFileSelected(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    selectedFileName.value = target.files[0].name;
    if (!uploadDocTitle.value) {
      uploadDocTitle.value = target.files[0].name.replace(/\.[^/.]+$/, '');
    }
  }
}

function handleUploadSubmit() {
  alert(`Document "${uploadDocTitle.value}" successfully uploaded to secure vault with instant OCR verification!`);
  showUploadModal.value = false;
  uploadDocTitle.value = '';
  selectedFileName.value = '';
}

function handleSignOut() {
  navigateTo('/auth/login');
}
</script>
