<template>
  <div class="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. HEADER / NAVBAR                                              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
            </svg>
          </div>
          <span class="text-xl font-black text-slate-900 tracking-tight">The Seafu</span>
        </NuxtLink>

        <!-- Center Nav Links -->
        <nav class="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600">
          <a href="#home" class="hover:text-blue-700 transition">Home</a>
          <a href="#about" class="hover:text-blue-700 transition">About</a>
          <a href="#courses" class="hover:text-blue-700 transition">Courses</a>
          <a href="#testimonials" class="hover:text-blue-700 transition">Testimonials</a>
          <a href="#faqs" class="hover:text-blue-700 transition">Faqs</a>
          <a href="#blog" class="hover:text-blue-700 transition">Blog</a>
          <a href="#contact" class="hover:text-blue-700 transition">Contact</a>
        </nav>

        <!-- Right Controls -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/auth/login" class="text-sm font-semibold text-slate-700 hover:text-blue-700 transition px-2 py-1">
            Login
          </NuxtLink>
          <NuxtLink to="/auth/register" class="text-sm font-bold text-white bg-[#0A1936] hover:bg-[#112752] px-5 py-2.5 rounded-xl shadow-sm transition flex items-center space-x-1.5">
            <span>Register</span>
            <svg class="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main id="home">
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 2. HERO SECTION                                                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Content (7 cols) -->
            <div class="lg:col-span-7 space-y-5 text-left">
              <!-- Pill Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-800">
                <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>NEXT-GEN MARITIME CREDENTIALING</span>
              </div>

              <!-- Main Titles -->
              <div class="space-y-2">
                <div class="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  The Future of Merchant Navy Training &amp; Certification
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                  Empowering global seafarers and maritime institutes with a secure, centralized digital ecosystem for modern compliance, training, and credential management.
                </h1>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-3 pt-3">
                <NuxtLink to="/courses" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0A1936] hover:bg-[#112752] text-white shadow-md shadow-slate-900/10 transition flex items-center space-x-2">
                  <span>Explore Courses</span>
                  <span>→</span>
                </NuxtLink>
                <NuxtLink to="/auth/login" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition">
                  Institutional Portal
                </NuxtLink>
              </div>
            </div>

            <!-- Right Visual Mockup (5 cols) -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Maritime Merchant Vessel"
                  class="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                
                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                <!-- Floating Verification Card -->
                <div class="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 flex items-center justify-between gap-3">
                  <div class="flex items-center space-x-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs font-bold text-slate-900 truncate">ECDSA Cryptographic Verification</div>
                      <div class="text-[11px] text-slate-500 truncate">Tamper-proof maritime certificate issuance</div>
                    </div>
                  </div>
                  <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shrink-0 transition">
                    Verify
                  </NuxtLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 3. METRICS RIBBON (3 CARDS)                                     -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="py-10 bg-slate-50/60 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Metric 1 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">15K+</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Certified Seafarers Worldwide</div>
              </div>
            </div>

            <!-- Metric 2 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">180+</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Accredited Maritime Institutes</div>
              </div>
            </div>

            <!-- Metric 3 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">99.9%</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">Statutory Compliance &amp; Issuance Rate</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 4. ABOUT US SECTION ("TRANSFORMING MARITIME EDUCATION")          -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="about" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Bridge Visual with Badge (6 cols) -->
            <div class="lg:col-span-6 relative">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                  alt="Maritime Training Bridge"
                  class="w-full h-80 sm:h-96 object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <!-- Floating Zero Paperwork Badge -->
                <div class="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-[#0A1936] text-white shadow-2xl border border-blue-900/40">
                  <div class="text-sm font-bold text-white">Zero Paperwork</div>
                  <div class="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Instant admission reservation and digital certification issuance.
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content (6 cols) -->
            <div class="lg:col-span-6 space-y-6">
              <div>
                <div class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
                  TRANSFORMING MARITIME EDUCATION
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Modernizing the backbone of global maritime careers.
                </h2>
              </div>

              <p class="text-sm text-slate-600 leading-relaxed">
                Traditional maritime training has long been plagued by manual logbooks, fragmented certificate validations, and slow bureaucratic audits. The Seafu replaces legacy paperwork with a centralized, highly secure digital ecosystem built for seafarers, maritime academies, and shipping conglomerates alike.
              </p>

              <!-- 2 Feature Highlights -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div class="text-xs font-bold text-slate-900">Instant Verification</div>
                  <div class="text-[11px] text-slate-500 leading-normal">
                    Immediate audit validation clearing for port authorities.
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="text-xs font-bold text-slate-900">Expedited Career</div>
                  <div class="text-[11px] text-slate-500 leading-normal">
                    Streamlined accreditation for offline-to-sea parity.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 5. COURSES OVERVIEW & HIGHLIGHTS ("PROFESSIONAL SYLLABUS")      -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="courses" class="py-24 bg-slate-50/70 border-t border-slate-200/70">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
                PROFESSIONAL SYLLABUS
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Featured Certification Courses
              </h2>
            </div>
            <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center space-x-1">
              <span>View All 15+ Available</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- 4 Course Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Course 1 -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition group">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">Long-term</span>
                  <span>5 Days</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                  STCW Basic Safety Training (BST)
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Mandatory safety fundamentals including fire prevention, personal survival, and first aid.
                </p>
              </div>

              <div class="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div class="text-[10px] text-slate-400">Accredited by:</div>
                  <div class="font-bold text-slate-700">MCA &amp; DGS</div>
                </div>
                <NuxtLink to="/courses" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition">
                  Enroll Now
                </NuxtLink>
              </div>
            </div>

            <!-- Course 2 -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition group">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span class="px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 font-semibold">Advanced</span>
                  <span>4 Days</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                  Advanced Fire Fighting (AFF)
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Practical leadership in firefighting, organization, tactical deployment, and casualty rescue.
                </p>
              </div>

              <div class="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div class="text-[10px] text-slate-400">Accredited by:</div>
                  <div class="font-bold text-slate-700">IMO Standard</div>
                </div>
                <NuxtLink to="/courses" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition">
                  Enroll Now
                </NuxtLink>
              </div>
            </div>

            <!-- Course 3 -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition group">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">Management</span>
                  <span>3 Days</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                  Bridge Resource Management
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Enhancing bridge teamwork, situational awareness, collision avoidance, and error management.
                </p>
              </div>

              <div class="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div class="text-[10px] text-slate-400">Accredited by:</div>
                  <div class="font-bold text-slate-700">DNV GL</div>
                </div>
                <NuxtLink to="/courses" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition">
                  Enroll Now
                </NuxtLink>
              </div>
            </div>

            <!-- Course 4 -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition group">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span class="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold">Engineering</span>
                  <span>5 Days</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                  Marine Engineering &amp; ERS
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Advanced electrics and slow-speed 2-stroke diesel engine operation on virtual propulsion systems.
                </p>
              </div>

              <div class="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div class="text-[10px] text-slate-400">Accredited by:</div>
                  <div class="font-bold text-slate-700">Lloyd's Register</div>
                </div>
                <NuxtLink to="/courses" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition">
                  Enroll Now
                </NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 6. PLATFORM ECOSYSTEM FEATURES ("ENGINEERED FOR RELIABILITY")    -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <!-- Header -->
          <div class="max-w-3xl mx-auto space-y-2 mb-16">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-widest">
              ENGINEERED FOR RELIABILITY
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Platform Ecosystem Features
            </h2>
            <p class="text-sm text-slate-500">
              Everything an officer or maritime institute needs to stay compliant, connected, and ahead of industry standards.
            </p>
          </div>

          <!-- 4 Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <!-- Feature 1 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition space-y-3">
              <div class="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-sm font-bold text-slate-900">Instant Verification</h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                Validate certificate authenticity instantly from ports worldwide with secure cryptographic signing.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition space-y-3">
              <div class="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-sm font-bold text-slate-900">Digital Seafarer Logbook</h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                Record and validate sea-time, watchkeeping hours, and simulator assessments in the cloud.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition space-y-3">
              <div class="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-sm font-bold text-slate-900">Accredited Institute Directory</h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                Browse vetted, DG-approved academies, course schedules, and facility accreditations.
              </p>
            </div>

            <!-- Feature 4 -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition space-y-3">
              <div class="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-sm font-bold text-slate-900">Compliance &amp; Audit Tracker</h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                Automated alerts for course renewals, medical checks, and Flag State regulatory updates.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 7. TESTIMONIALS ("TRUSTED BY MARINERS GLOBALLY")                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="testimonials" class="py-24 bg-slate-50/70 border-t border-slate-200/70">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div class="space-y-1 mb-14">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-widest">
              TRUSTED BY MARINERS GLOBALLY
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              What Maritime Professionals Say
            </h2>
          </div>

          <!-- 3 Testimonial Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <!-- Testimonial 1 -->
            <div class="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;The Seafu has completely streamlined our crewed pane management. Certificate verification at port authorities now takes seconds instead of hours.&rdquo;
              </p>
              <div class="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                  MV
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Capt. Marcus Vance</div>
                  <div class="text-[11px] text-slate-500">Master Mariner, Global Fleet Operations</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;As a Chief Engineer managing complex technical upgrades, having instant access to all STCW training records and digital certificates is a game changer.&rdquo;
              </p>
              <div class="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                  ER
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Elena Rostova</div>
                  <div class="text-[11px] text-slate-500">Chief Engineer, VOS Tankers</div>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;Onboarding our academy onto The Seafu platform increased our applicant enrollment by 40% while slashing administrative overhead.&rdquo;
              </p>
              <div class="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                  JS
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Dr. James Sterling</div>
                  <div class="text-[11px] text-slate-500">Director, International Maritime Academy</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 8. FREQUENTLY ASKED QUESTIONS ("GOT QUESTIONS?")                -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="faqs" class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center space-y-1 mb-12">
            <div class="text-xs font-bold text-blue-700 uppercase tracking-widest">
              GOT QUESTIONS?
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <!-- Accordion List -->
          <div class="space-y-3">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              :class="activeFaq === idx ? 'bg-slate-50/50' : 'bg-white'"
            >
              <button
                @click="activeFaq = activeFaq === idx ? -1 : idx"
                class="w-full px-6 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700 transition"
              >
                <span>{{ faq.question }}</span>
                <span class="text-slate-400 text-base ml-2 transition-transform duration-200" :class="activeFaq === idx ? 'rotate-180' : ''">
                  ⌄
                </span>
              </button>
              <div v-show="activeFaq === idx" class="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {{ faq.answer }}
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 9. CONTACT FORM & DIRECT INQUIRY SECTION                        -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="contact" class="py-24 bg-slate-50/70 border-t border-slate-200/70">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left Info (5 cols) -->
            <div class="lg:col-span-5 space-y-6">
              <div>
                <div class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
                  GET IN TOUCH
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Speak with Our Maritime Liaison
                </h2>
                <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Have questions regarding academy accreditation, STCW course booking, or institutional enterprise integration? Our liaison team is available 24/7.
                </p>
              </div>

              <div class="space-y-4 text-xs text-slate-700">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Email Inquiries</div>
                    <div class="text-slate-500">admissions@seafu.org &bull; compliance@seafu.org</div>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Direct Telephone Desk</div>
                    <div class="text-slate-500">+44 20 7946 0912 (UK HQ) &bull; +92 336 6668475 (Regional)</div>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Maritime Examination Center</div>
                    <div class="text-slate-500">Suite 400, Canary Wharf, London, UK</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Form (7 cols) -->
            <div class="lg:col-span-7">
              <form @submit.prevent="submitContactForm" class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div v-if="formSubmitted" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  Thank you! Your inquiry has been received. Our liaison officer will respond within 4 hours.
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      v-model="contactForm.name"
                      type="text"
                      required
                      placeholder="e.g. Cadet / Capt. John Doe"
                      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-700">Official Email</label>
                    <input
                      v-model="contactForm.email"
                      type="email"
                      required
                      placeholder="name@maritime.com"
                      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-700">Persona Role</label>
                    <select
                      v-model="contactForm.role"
                      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none">
                      <option value="Seafarer">Seafarer / Cadet</option>
                      <option value="Institute">Maritime Academy / Institute</option>
                      <option value="ShippingCompany">Shipping Line / Crewing Manager</option>
                      <option value="Regulator">Port State / Flag State Auditor</option>
                    </select>
                  </div>
                  <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-700">Subject</label>
                    <input
                      v-model="contactForm.subject"
                      type="text"
                      required
                      placeholder="Course Booking / Partnership / Verification"
                      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-700">Message / Inquiry Details</label>
                  <textarea
                    v-model="contactForm.message"
                    rows="4"
                    required
                    placeholder="Provide details about your query or institutional onboarding requirement..."
                    class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-sm">
                  Transmit Inquiry &rarr;
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 10. KNOWLEDGE HUB & BLOG ("LATEST INSIGHTS")                     -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="blog" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
                LATEST INSIGHTS
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Knowledge Hub &amp; Blog
              </h2>
            </div>
            <a href="#blog" class="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center space-x-1">
              <span>View all articles</span>
              <span>→</span>
            </a>
          </div>

          <!-- 3 Blog Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Article 1 -->
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div class="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80"
                    alt="STCW Amendments Meeting"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 space-y-2.5">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    REGULATION 2026
                  </span>
                  <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    Upcoming 2026 Amendments to STCW Code
                  </h3>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    Key changes expected in seafarer competency standards and digital watchkeeping mandates.
                  </p>
                </div>
              </div>

              <div class="px-6 pb-6 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                <span>Oct 12, 2026</span>
                <span>6 min read</span>
              </div>
            </div>

            <!-- Article 2 -->
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div class="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80"
                    alt="Deck Officer on Bridge Wing"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 space-y-2.5">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    CAREER GUIDE
                  </span>
                  <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    Transitioning from Deck Officer to Master Mariner
                  </h3>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    Essential sea-service milestones, advanced management courses, and exam preparation tips.
                  </p>
                </div>
              </div>

              <div class="px-6 pb-6 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                <span>Oct 10, 2026</span>
                <span>8 min read</span>
              </div>
            </div>

            <!-- Article 3 -->
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div class="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                    alt="Engine Room Digitalization"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 space-y-2.5">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    INDUSTRY TRENDS
                  </span>
                  <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    Digital Transformation in Maritime Training
                  </h3>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    How modern simulators are eliminating fraud and streamlining crew changeover procedures globally.
                  </p>
                </div>
              </div>

              <div class="px-6 pb-6 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                <span>Oct 04, 2026</span>
                <span>5 min read</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 11. CALL TO ACTION (CTA) BANNER                                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="py-20 bg-gradient-to-b from-[#0A1936] to-[#061024] text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div class="text-xs font-bold text-blue-400 tracking-widest uppercase">
            READY TO GET STARTED?
          </div>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Take Control of Your Maritime Career Today
          </h2>
          <p class="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join over 15,000 seafarers and 180+ accredited institutes streamlining their operations on The Seafu.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <NuxtLink to="/auth/register?role=SEAFARER" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-[#0A1936] shadow-lg transition">
              Register as Seafarer
            </NuxtLink>
            <NuxtLink to="/auth/register?role=INSTITUTE" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-transparent hover:bg-white/10 text-white border border-white/40 transition">
              Partner Maritime Portal
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 12. FOOTER                                                      -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-slate-200 pt-16 pb-12 text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
          
          <!-- Col 1: Brand -->
          <div class="space-y-3">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg bg-[#0A1936] flex items-center justify-center text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v2a2 2 0 002 2h1v3a5 5 0 0010 0v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
                </svg>
              </div>
              <span class="text-base font-extrabold text-slate-900 tracking-tight">The Seafu</span>
            </div>
            <p class="text-slate-500 leading-relaxed max-w-xs text-xs">
              Professional training and accreditation ecosystem for Merchant Navy officers and global mariners.
            </p>
          </div>

          <!-- Col 2: Quick Links -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Quick Links</div>
            <ul class="space-y-2">
              <li><a href="#about" class="hover:text-blue-700 transition">About Us</a></li>
              <li><NuxtLink to="/courses" class="hover:text-blue-700 transition">All Courses</NuxtLink></li>
              <li><NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-blue-700 transition">Certificate Audit</NuxtLink></li>
              <li><a href="#contact" class="hover:text-blue-700 transition">Contact Support</a></li>
            </ul>
          </div>

          <!-- Col 3: Legal & Privacy -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Legal &amp; Privacy</div>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-blue-700 transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-blue-700 transition">Terms of Service</a></li>
              <li><a href="#" class="hover:text-blue-700 transition">Compliance</a></li>
            </ul>
          </div>

          <!-- Col 4: Global Headquarters -->
          <div class="space-y-2.5">
            <div class="font-bold text-slate-900 text-xs">Global Headquarters</div>
            <p class="text-slate-500 leading-relaxed text-xs">
              Maritime Examination Center, Suite 400<br />
              Canary Wharf, London, UK
            </p>
          </div>

        </div>

        <div class="pt-8 text-center text-slate-400 text-[11px]">
          &copy; 2026 The Seafu. All rights reserved. Autonomous Maritime Training Systems.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'The Seafu · Professional Maritime Training, Certification & Logistics Ecosystem',
  meta: [
    {
      name: 'description',
      content: 'The premier global digital ecosystem for Merchant Navy training, STCW certificate verification, and maritime academy management.',
    },
  ],
});

const activeFaq = ref(0);

const faqs = [
  {
    question: 'How do critical certificate renewals work on The Seafu?',
    answer: 'Seafarers receive automated notifications 90 and 30 days prior to certificate expiry. You can browse accredited refresher courses, reserve a seat online, and once completed, the issuing maritime academy pushes the cryptographically signed certificate directly to your digital vault.',
  },
  {
    question: 'Are digital logbooks accepted by international Flag states?',
    answer: 'Yes, our digital logbooks strictly comply with IMO STCW Regulation I/2, MLC 2006 standards, and are accepted by leading Flag State administrations, major classification societies, and Port State Control authorities globally.',
  },
  {
    question: 'How can training institutes join the platform directory?',
    answer: 'Maritime training institutes holding valid DG Shipping, UK MCA, or equivalent national maritime administration approvals can submit an onboarding request through our Institutional Portal. Our compliance team verifies your facilities, simulator certifications, and instructor accreditations within 48 hours.',
  },
  {
    question: 'How does cryptographic verification protect against fraudulent certificates?',
    answer: 'Every certificate issued through The Seafu is stamped with a unique cryptographic hash and SHA-256 ECDSA key linked to the authorized institute\'s digital signature. Port state officers and crewing managers can scan the certificate QR code to verify authenticity in real-time.',
  },
];

const contactForm = ref({
  name: '',
  email: '',
  role: 'Seafarer',
  subject: '',
  message: '',
});

const formSubmitted = ref(false);

function submitContactForm() {
  formSubmitted.value = true;
  contactForm.value = {
    name: '',
    email: '',
    role: 'Seafarer',
    subject: '',
    message: '',
  };
  setTimeout(() => {
    formSubmitted.value = false;
  }, 6000);
}
</script>
