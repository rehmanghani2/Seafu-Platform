<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 1. TOP STATUTORY & ADMISSIONS TICKER (MTI Style)                -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <div class="bg-[#0A1936] text-white text-[11px] py-2 px-4 border-b border-blue-900/50">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <!-- Live Alert / Marquee -->
        <div class="flex items-center space-x-2.5 overflow-hidden">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-400 text-slate-950 tracking-wider animate-pulse shrink-0">
            Admissions Open
          </span>
          <div class="truncate text-slate-200 font-medium text-[11px]">
            <span class="text-amber-300 font-bold">BATCH 2026 INTAKE:</span> GP-III Pre-Sea &bull; HND Nautical Sciences &bull; HND Marine Engineering &bull; Entry Test Schedule Announced
          </div>
        </div>

        <!-- Right Quick Info -->
        <div class="flex items-center space-x-5 text-slate-300 text-[11px] shrink-0">
          <a href="https://wa.me/923366668475" target="_blank" class="hover:text-emerald-400 transition flex items-center space-x-1.5 font-semibold text-emerald-300">
            <span>💬 WhatsApp:</span>
            <span>+92 336 6668475</span>
          </a>
          <span class="text-slate-600 hidden sm:inline">|</span>
          <a href="tel:+922135681234" class="hover:text-white transition hidden md:flex items-center space-x-1">
            <span>📞 Helpline:</span>
            <span>+92 21 3568 1234</span>
          </a>
          <span class="text-slate-600 hidden sm:inline">|</span>
          <NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="text-cyan-300 hover:text-cyan-200 font-bold flex items-center space-x-1">
            <span>🛡️ Verify Certificate</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 2. MAIN MARITIME ACADEMY HEADER & NAVIGATION                    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
        
        <!-- Brand / Maritime Crest Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3.5 group shrink-0">
          <div class="relative">
            <img
              src="/logo-crest.png"
              alt="Maritime Academy Crest"
              class="w-13 h-13 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
            />
            <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-black">⚓</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center space-x-2">
              <span class="text-xl sm:text-2xl font-black text-[#0A1936] tracking-tight leading-tight">The Seafu</span>
              <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">MTI ACADEMY</span>
            </div>
            <span class="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Maritime Training &amp; Global Seafarer Platform</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Items (MTI Structure) -->
        <nav class="hidden xl:flex items-center space-x-6 text-[13px] font-bold text-slate-700">
          <NuxtLink to="/" class="text-blue-700 font-extrabold border-b-2 border-blue-700 pb-1">Home</NuxtLink>
          
          <!-- Dropdown / Anchor Links -->
          <a href="#about" class="hover:text-blue-700 transition">About Us</a>
          <a href="#courses" class="hover:text-blue-700 transition">Courses &amp; Programs</a>
          <a href="#simulators" class="hover:text-blue-700 transition">Simulators &amp; Labs</a>
          <a href="#numbers" class="hover:text-blue-700 transition">Key Facts</a>
          <a href="#testimonials" class="hover:text-blue-700 transition">Testimonials</a>
          <a href="#faqs" class="hover:text-blue-700 transition">FAQs</a>
          <a href="#contact" class="hover:text-blue-700 transition">Contact</a>
        </nav>

        <!-- Action CTAs -->
        <div class="flex items-center space-x-3">
          <button
            @click="openAdmissionModal = true"
            class="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition transform hover:-translate-y-0.5">
            <span>Apply Now</span>
            <span class="ml-1.5">⚡</span>
          </button>

          <NuxtLink
            to="/auth/login"
            class="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-900 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition">
            <span>Portal Login</span>
          </NuxtLink>

          <NuxtLink
            to="/auth/register"
            class="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-black text-white bg-[#0A1936] hover:bg-[#112752] shadow-sm transition">
            <span>Register</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main id="home">
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 3. HERO ADMISSIONS & SLIDER BANNER (MTI Header Carousel)       -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="relative bg-gradient-to-br from-[#0A1936] via-[#102347] to-[#1E3A8A] text-white py-16 lg:py-24 overflow-hidden">
        <!-- Maritime Nautical Wave Background Overlay -->
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Slide Switcher Buttons (Interactive Hero Carousel Tabs) -->
          <div class="flex items-center justify-center sm:justify-start gap-2 mb-8 overflow-x-auto pb-2">
            <button
              v-for="(slide, idx) in heroSlides"
              :key="idx"
              @click="currentSlide = idx"
              class="px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center space-x-2 shrink-0"
              :class="currentSlide === idx ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'bg-white/10 text-slate-200 hover:bg-white/20'">
              <span class="w-2 h-2 rounded-full" :class="currentSlide === idx ? 'bg-slate-900' : 'bg-slate-400'"></span>
              <span>{{ slide.tabTitle }}</span>
            </button>
          </div>

          <!-- Active Slide Content -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <!-- Left 7 cols: Content -->
            <div class="lg:col-span-7 space-y-6 text-left">
              
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-500/20 border border-blue-400/40 text-blue-200">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{{ heroSlides[currentSlide].badge }}</span>
              </div>

              <div class="space-y-3">
                <div class="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                  {{ heroSlides[currentSlide].subheading }}
                </div>
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  {{ heroSlides[currentSlide].heading }}
                </h1>
                <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                  {{ heroSlides[currentSlide].description }}
                </p>
              </div>

              <!-- Feature Checks -->
              <div class="grid grid-cols-2 sm:grid-cols-2 gap-2.5 py-2 max-w-xl text-xs sm:text-sm text-slate-200 font-semibold">
                <div v-for="(feat, fIdx) in heroSlides[currentSlide].features" :key="fIdx" class="flex items-center space-x-2">
                  <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                  <span>{{ feat }}</span>
                </div>
              </div>

              <!-- Action CTAs -->
              <div class="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  @click="openAdmissionModal = true"
                  class="px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20 transition transform hover:-translate-y-0.5 flex items-center space-x-2">
                  <span>{{ heroSlides[currentSlide].primaryBtn }}</span>
                  <span>→</span>
                </button>

                <a
                  href="https://wa.me/923366668475"
                  target="_blank"
                  class="px-5 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition flex items-center space-x-2">
                  <span>💬 WhatsApp Counselor</span>
                </a>

                <button
                  @click="openProspectusModal = true"
                  class="px-5 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs transition flex items-center space-x-2">
                  <span>📥 Prospectus 2026</span>
                </button>
              </div>

            </div>

            <!-- Right 5 cols: Card Visual / Video Preview -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group">
                <img
                  :src="heroSlides[currentSlide].image"
                  :alt="heroSlides[currentSlide].heading"
                  class="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A1936] via-[#0A1936]/40 to-transparent"></div>

                <!-- Floating Play Button for Video Tour -->
                <button
                  @click="openVideoModal = true"
                  class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div class="w-18 h-18 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-400/50">
                    <svg class="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>

                <!-- Floating Bottom Badge -->
                <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-sm">
                      ⚓
                    </div>
                    <div>
                      <div class="text-xs font-black text-white">{{ heroSlides[currentSlide].cardHighlight }}</div>
                      <div class="text-[10px] text-slate-300">IMO Model Course &bull; CIP Grade A1</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Watch Tour
                  </span>
                </div>

              </div>
            </div>

          </div>

          <!-- Bottom 4 Pillars Bar (MTI Style) -->
          <div class="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
              <div class="text-amber-400 font-extrabold text-sm mb-1">Pre-Sea Maritime Training</div>
              <div class="text-xs text-slate-300">GP-III Deck &amp; Engine structured programs for merchant navy induction.</div>
            </div>
            <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
              <div class="text-amber-400 font-extrabold text-sm mb-1">Modern Simulator Fleet</div>
              <div class="text-xs text-slate-300">Full-Mission 360° Bridge, Engine Room, ECDIS, GMDSS, and LICOS suites.</div>
            </div>
            <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
              <div class="text-amber-400 font-extrabold text-sm mb-1">Global Sea Placement</div>
              <div class="text-xs text-slate-300">Captive intake partnerships with leading international shipping lines.</div>
            </div>
            <div class="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition">
              <div class="text-amber-400 font-extrabold text-sm mb-1">100% Escrow Protection</div>
              <div class="text-xs text-slate-300">Guaranteed fee refund protection backed by smart maritime contract escrow.</div>
            </div>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 4. SECTION: SHAPING FUTURES THROUGH MARITIME EXCELLENCE (MTI)    -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="about" class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Heading with MTI Two-Bar Ornament -->
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">MTI Academic Profile &amp; Mission</div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Shaping Futures Through <span class="text-blue-700">Maritime Excellence</span>
            </h2>
            <!-- MTI Bars -->
            <div class="flex items-center justify-center gap-2 mt-4">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          <!-- MTI 3-Column Grid: Media | Academic Text | Live Notice Board -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Col 1: Video / Training Grounds Media (4 cols) -->
            <div class="lg:col-span-4 flex flex-col">
              <div class="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-800 h-full min-h-[360px] group">
                <img
                  src="https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80"
                  alt="Bridge Simulator Center"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A1936]/90 via-[#0A1936]/30 to-transparent"></div>
                
                <button
                  @click="openVideoModal = true"
                  class="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div class="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-xl shadow-blue-900/40">
                    <svg class="w-7 h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>

                <div class="absolute bottom-5 left-5 right-5 text-white">
                  <span class="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-black uppercase tracking-wider mb-2 inline-block">Campus Tour</span>
                  <h4 class="text-base font-bold leading-tight">Advanced Simulator Labs &amp; Practical Training Facilities</h4>
                </div>
              </div>
            </div>

            <!-- Col 2: Mission Statement & Philosophy (4 cols) -->
            <div class="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="space-y-4">
                <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg font-black">
                  🎓
                </div>
                <h3 class="text-xl font-extrabold text-slate-900">
                  Committed to delivering premier maritime education aligned with international standards.
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  At Maritime Training Institute (The Seafu Platform), we are dedicated to delivering quality maritime education and professional training that is practical, industry-focused, and accessible to aspiring seafarers.
                </p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  With a strong emphasis on skill development, IMO safety standards, and career readiness, we prepare cadets to excel in the merchant marine sector at national and international levels.
                </p>
              </div>

              <div class="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  @click="openAdmissionModal = true"
                  class="px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-md transition">
                  Apply for Admission
                </button>
                <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:underline">
                  All Courses →
                </NuxtLink>
              </div>
            </div>

            <!-- Col 3: Vertical Live Notice Board (4 cols - Exact MTI Style) -->
            <div class="lg:col-span-4 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div class="bg-blue-700 px-5 py-3.5 text-white flex items-center justify-between">
                <span class="text-xs font-black uppercase tracking-wider flex items-center space-x-2">
                  <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>News &amp; Statutory Notices</span>
                </span>
                <span class="text-[10px] text-blue-100 font-semibold">Live Board</span>
              </div>

              <!-- Notice List Container -->
              <div class="divide-y divide-slate-100 p-2 overflow-y-auto max-h-[350px]">
                <div
                  v-for="(notice, nIdx) in notices"
                  :key="nIdx"
                  class="p-3.5 hover:bg-slate-50 rounded-xl transition cursor-pointer group"
                  @click="selectedNotice = notice">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded" :class="notice.tagClass">
                      {{ notice.category }}
                    </span>
                    <span class="text-[10px] font-bold text-slate-400">{{ notice.date }}</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug">
                    {{ notice.title }}
                  </h5>
                  <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">{{ notice.excerpt }}</p>
                </div>
              </div>

              <!-- Footer of Board -->
              <div class="p-3 bg-slate-50 border-t border-slate-100 text-center">
                <span class="text-[11px] font-bold text-blue-700 hover:underline cursor-pointer" @click="openNoticeModal = true">
                  View All Regulatory Circulars (24) →
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 5. SECTION: MTI ACADEMIC COURSES & PROGRAMS                    -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="courses" class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-10">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Curriculum &amp; STCW Certifications</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Our <span class="text-blue-700">Maritime Programs</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-600 mt-4">
              Discover industry-focused maritime training programs designed to build practical skills, professional competence, and strong career opportunities for aspiring and active seafarers.
            </p>
          </div>

          <!-- Course Filter Category Tabs -->
          <div class="flex items-center justify-center flex-wrap gap-2 mb-10">
            <button
              v-for="cat in courseCategories"
              :key="cat"
              @click="selectedCategory = cat"
              class="px-4 py-2 rounded-xl text-xs font-bold transition"
              :class="selectedCategory === cat ? 'bg-blue-700 text-white shadow-sm font-black' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'">
              {{ cat }}
            </button>
          </div>

          <!-- Course Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(course, cIdx) in filteredCourses"
              :key="cIdx"
              class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
              
              <!-- Card Header / Badge -->
              <div class="p-6 border-b border-slate-100 relative">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[10px] font-black uppercase px-2.5 py-1 rounded-md" :class="course.badgeClass">
                    {{ course.badge }}
                  </span>
                  <span class="text-xs font-bold text-slate-500">{{ course.code }}</span>
                </div>
                <h3 class="text-lg font-black text-slate-900 group-hover:text-blue-700 transition leading-snug mb-2">
                  {{ course.title }}
                </h3>
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {{ course.description }}
                </p>
              </div>

              <!-- Key Specs -->
              <div class="p-6 bg-slate-50/50 flex-1 space-y-3 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span class="font-medium">⏱️ Duration:</span>
                  <span class="font-bold text-slate-900">{{ course.duration }}</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span class="font-medium">🎯 Pathway:</span>
                  <span class="font-bold text-blue-700">{{ course.pathway }}</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span class="font-medium">📜 Certification:</span>
                  <span class="font-bold text-slate-900">{{ course.certification }}</span>
                </div>
                <div class="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-200">
                  <span class="font-medium">💺 Batch Seats:</span>
                  <span class="font-extrabold text-emerald-600">{{ course.seatsLeft }} Seats Available</span>
                </div>
              </div>

              <!-- Price & CTA -->
              <div class="p-6 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div class="text-[10px] uppercase font-bold text-slate-400">Guaranteed Fee</div>
                  <div class="text-xl font-black text-slate-900">{{ course.fee }}</div>
                </div>
                <div class="flex items-center space-x-2">
                  <NuxtLink
                    :to="'/courses/' + course.slug"
                    class="px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 transition">
                    Syllabus
                  </NuxtLink>
                  <button
                    @click="enrollCourse(course)"
                    class="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-xs transition">
                    Enroll Now
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom View All Button -->
          <div class="mt-12 text-center">
            <NuxtLink
              to="/courses"
              class="inline-flex items-center px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#0A1936] hover:bg-[#112752] text-white shadow-md transition space-x-2">
              <span>View All Accredited Programs &amp; Batches</span>
              <span>→</span>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 6. SECTION: ADVANCED SIMULATOR LABS & INFRASTRUCTURE (MTI)      -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="simulators" class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Hands-On Maritime Technology</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Advanced <span class="text-blue-700">Simulator Facilities</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-600 mt-4">
              Experience practical maritime training through modern simulation laboratories designed to enhance technical skills, operational confidence, and compliance with IMO Model Courses.
            </p>
          </div>

          <!-- Simulators Grid (6 Suites matching MTI) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div v-for="(sim, sIdx) in simulatorSuites" :key="sIdx" class="rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col group">
              <div class="relative h-48 overflow-hidden bg-slate-800">
                <img :src="sim.image" :alt="sim.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute top-3 left-3">
                  <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-600 text-white tracking-wider">
                    {{ sim.badge }}
                  </span>
                </div>
                <div class="absolute bottom-3 left-3 right-3 text-white">
                  <h4 class="text-base font-bold leading-tight">{{ sim.title }}</h4>
                </div>
              </div>
              
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <p class="text-xs text-slate-600 leading-relaxed">
                  {{ sim.description }}
                </p>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-500">{{ sim.hardware }}</span>
                  <button @click="openSimulatorDetail(sim)" class="font-bold text-blue-700 hover:underline">
                    Lab Specs →
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- Schedule a Visit Bar -->
          <div class="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A1936] to-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 class="text-xl font-black">Want to inspect our campus and simulator labs in person?</h3>
              <p class="text-xs sm:text-sm text-slate-300 mt-1">Book an official academy walkthrough for candidates, parents, and shipping executives.</p>
            </div>
            <button
              @click="openAdmissionModal = true"
              class="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shrink-0 transition">
              Book a Campus Visit
            </button>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 7. SECTION: HIGHLIGHTS IN NUMBERS (MTI Key Facts)               -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="numbers" class="py-16 bg-[#0A1936] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-12">
            <div class="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Proven Track Record</div>
            <h2 class="text-3xl sm:text-4xl font-black tracking-tight">
              Academy Highlights in <span class="text-amber-400">Numbers</span>
            </h2>
            <p class="text-sm text-slate-300 mt-2">
              Achievements that reflect our excellence in maritime education, technical training, and seafarer placement worldwide.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition">
              <div class="text-4xl sm:text-5xl font-black text-amber-400">20,000+</div>
              <div class="text-sm font-extrabold text-white mt-2">Alumni Network</div>
              <div class="text-xs text-slate-400 mt-1">Serving on international merchant vessels</div>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition">
              <div class="text-4xl sm:text-5xl font-black text-cyan-400">300+</div>
              <div class="text-sm font-extrabold text-white mt-2">Certified Faculty</div>
              <div class="text-xs text-slate-400 mt-1">Master Mariners &amp; Chief Engineers</div>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition">
              <div class="text-4xl sm:text-5xl font-black text-emerald-400">500+</div>
              <div class="text-sm font-extrabold text-white mt-2">STCW Certifications</div>
              <div class="text-xs text-slate-400 mt-1">IMO Model Courses &amp; Diplomas</div>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition">
              <div class="text-4xl sm:text-5xl font-black text-rose-400">98.6%</div>
              <div class="text-sm font-extrabold text-white mt-2">Pass Rate</div>
              <div class="text-xs text-slate-400 mt-1">DG Shipping &amp; UK MCA examinations</div>
            </div>

          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 8. SECTION: ACCREDITATIONS & INTERNATIONAL COLLABORATION        -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section class="py-16 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="text-xs font-extrabold text-blue-700 uppercase tracking-widest">Global Maritime Standards</span>
              <h3 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Accredited by National Maritime Administrations &amp; International Bodies
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Our curriculum strictly adheres to the standards of the International Maritime Organization (IMO) STCW 1978 as amended in Manila 2010. Accredited with DNV-GL CIP Grade A1 Outstanding and aligned with Flag State administrations worldwide.
              </p>
              
              <div class="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-700">
                <div class="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="text-blue-700">🛡️</span>
                  <span>DG Shipping Approved</span>
                </div>
                <div class="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="text-blue-700">🇬🇧</span>
                  <span>UK MCA Recognized</span>
                </div>
                <div class="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="text-blue-700">⭐</span>
                  <span>DNV CIP Grade A1</span>
                </div>
                <div class="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="text-blue-700">⚓</span>
                  <span>City of Glasgow Outreach</span>
                </div>
              </div>
            </div>

            <!-- Right Box: Outreach Campus of City of Glasgow College (MTI Highlight) -->
            <div class="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden">
              <div class="text-xs font-black uppercase tracking-wider text-blue-700 mb-2">International Academic Collaboration</div>
              <h4 class="text-xl font-extrabold text-slate-900 mb-3">City of Glasgow College Outreach Partnership</h4>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Continuing the legacy of the historic Glasgow College of Nautical Studies, students in our Higher National Diploma (HND) programs benefit from world-class maritime curriculum articulation, reciprocal recognition, and global sea pathway options.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-slate-200">
                <span class="text-xs font-bold text-slate-500">Scotland, United Kingdom</span>
                <NuxtLink to="/institutes/compare" class="text-xs font-black text-blue-700 hover:underline">
                  Compare Accreditations →
                </NuxtLink>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 9. SECTION: STUDENT TESTIMONIALS & PLACEMENT VOICES             -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="testimonials" class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Cadet Stories &amp; Success</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our <span class="text-blue-700">Seafarers Say</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div v-for="(test, tIdx) in testimonials" :key="tIdx" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="flex text-amber-400 text-sm">★★★★★</div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{{ test.quote }}"
                </p>
              </div>

              <div class="flex items-center space-x-3.5 pt-4 border-t border-slate-100">
                <img :src="test.avatar" :alt="test.name" class="w-11 h-11 rounded-full object-cover border border-slate-200" />
                <div>
                  <div class="text-xs font-extrabold text-slate-900">{{ test.name }}</div>
                  <div class="text-[11px] text-blue-700 font-semibold">{{ test.rank }} &bull; {{ test.company }}</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 10. SECTION: FAQS ACCORDION                                     -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="faqs" class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center mb-12">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Got Questions?</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span class="text-blue-700">Questions</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          <div class="space-y-3">
            <div
              v-for="(faq, fIdx) in faqs"
              :key="fIdx"
              class="border border-slate-200 rounded-xl overflow-hidden">
              <button
                @click="activeFaq = activeFaq === fIdx ? null : fIdx"
                class="w-full text-left p-5 flex items-center justify-between font-extrabold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition">
                <span>{{ faq.question }}</span>
                <span class="text-blue-700 text-lg font-bold ml-4">{{ activeFaq === fIdx ? '−' : '+' }}</span>
              </button>
              <div v-if="activeFaq === fIdx" class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {{ faq.answer }}
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 11. SECTION: ADMISSIONS INQUIRY & CONTACT FORM                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="contact" class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-5 space-y-6">
              <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest">Connect With Us</div>
              <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Start Your Sea Career With Maritime Training Institute
              </h2>
              <p class="text-sm text-slate-600 leading-relaxed">
                Whether you are an aspiring cadet seeking pre-sea admissions or an experienced officer needing mandatory STCW revalidation, our admissions and counselor team is here to assist.
              </p>

              <div class="space-y-4 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div class="flex items-start space-x-3">
                  <span class="text-blue-700 text-base">📍</span>
                  <span><strong>Campus Address:</strong> Marine Complex, Dockyard Road, Port Area, Karachi, Pakistan.</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-blue-700 text-base">📞</span>
                  <span><strong>Admissions Office:</strong> +92 21 3568 1234 / +92 336 6668475</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-blue-700 text-base">✉️</span>
                  <span><strong>Email Inquiries:</strong> admissions@mti.edu.pk / info@seafu.org</span>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 class="text-lg font-black text-slate-900 mb-1">Admissions &amp; Course Inquiry Form</h3>
              <p class="text-xs text-slate-500 mb-6">Fill in your details below and our maritime admissions coordinator will reach out within 24 hours.</p>

              <form @submit.prevent="submitContactForm" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      v-model="contactForm.name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      v-model="contactForm.email"
                      type="email"
                      required
                      placeholder="alex@mercer.com"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      v-model="contactForm.phone"
                      type="tel"
                      required
                      placeholder="+92 336 1234567"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
                    <select
                      v-model="contactForm.program"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden">
                      <option>GP-III Pre-Sea Course</option>
                      <option>Advance Diploma in Nautical Science</option>
                      <option>Advance Diploma in Marine Engineering</option>
                      <option>GMDSS General Operator Certificate</option>
                      <option>ECDIS Type-Specific Course</option>
                      <option>STCW Mandatory Safety Courses</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Your Message / Query</label>
                  <textarea
                    v-model="contactForm.message"
                    rows="3"
                    placeholder="Ask about entry test schedules, fee structure, or seat availability..."
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"></textarea>
                </div>

                <div v-if="formSubmitted" class="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg">
                  ✓ Thank you! Your admission inquiry has been received. Our counselor will contact you via WhatsApp / Phone shortly.
                </div>

                <button
                  type="submit"
                  class="w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-md transition">
                  Submit Admissions Inquiry
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

    </main>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 12. COMPREHENSIVE MARITIME ACADEMY FOOTER                      -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <footer class="bg-[#0A1936] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Col 1: Brand (2 cols) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center space-x-3">
              <img src="/logo-crest.png" alt="Maritime Academy Crest" class="w-12 h-12 rounded-full object-contain" />
              <div>
                <span class="text-xl font-black text-white tracking-tight">The Seafu</span>
                <div class="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider">Maritime Training Institute</div>
              </div>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
              The Seafu Platform &amp; Maritime Training Institute (MTI) delivers premier pre-sea education, officer cadetships, and cryptographic STCW certification trusted by maritime administrations worldwide.
            </p>
            <div class="text-xs text-slate-400">
              <div class="font-bold text-white mb-1">Campus Locations:</div>
              <div>Marine Complex, Dockyard Road, Port Area, Karachi</div>
              <div class="text-amber-400 font-semibold mt-1">Outreach Campus: City of Glasgow College, Scotland</div>
            </div>
          </div>

          <!-- Col 2: Programs -->
          <div class="space-y-3">
            <div class="text-xs font-black uppercase tracking-wider text-white">Academic Programs</div>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><a href="#courses" class="hover:text-amber-400 transition">Pre-Sea GP-III Course</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition">HND Nautical Sciences</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition">HND Marine Engineering</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition">GMDSS Radio Operator</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition">ECDIS Model Course 1.27</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition">High Voltage Installations</a></li>
            </ul>
          </div>

          <!-- Col 3: Simulators -->
          <div class="space-y-3">
            <div class="text-xs font-black uppercase tracking-wider text-white">Simulator Labs</div>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><a href="#simulators" class="hover:text-amber-400 transition">Full-Mission Bridge</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition">Engine Room Simulator (ERS)</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition">Liquid Cargo (LICOS)</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition">VTS Traffic Simulator</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition">GMDSS Radio Station</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition">Fire Fighting Grounds</a></li>
            </ul>
          </div>

          <!-- Col 4: Digital Portals -->
          <div class="space-y-3">
            <div class="text-xs font-black uppercase tracking-wider text-white">Access Portals</div>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><NuxtLink to="/seafarer/dashboard" class="hover:text-cyan-300 transition">Seafarer Panel</NuxtLink></li>
              <li><NuxtLink to="/institute/dashboard" class="hover:text-cyan-300 transition">Maritime Academy Portal</NuxtLink></li>
              <li><NuxtLink to="/admin/dashboard" class="hover:text-cyan-300 transition">Statutory Admin Console</NuxtLink></li>
              <li><NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-300 transition">Instant QR Verification</NuxtLink></li>
              <li><NuxtLink to="/institutes/compare" class="hover:text-cyan-300 transition">Compare Academies</NuxtLink></li>
              <li><NuxtLink to="/auth/login" class="hover:text-cyan-300 transition">Candidate Login</NuxtLink></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 The Seafu Platform &amp; Maritime Training Institute (MTI). All rights reserved.
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-slate-400">IMO STCW Manila 2010</span>
            <span>&bull;</span>
            <span class="text-slate-400">CIP Grade A1 Outstanding</span>
            <span>&bull;</span>
            <span class="text-slate-400">DG / UK MCA Compliant</span>
          </div>
        </div>

      </div>
    </footer>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 13. INTERACTIVE MODALS (Admission, Video, Prospectus, Notice)    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->

    <!-- Modal 1: Quick Admission Apply Modal -->
    <div v-if="openAdmissionModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button @click="openAdmissionModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black">⚓</div>
          <div>
            <h3 class="text-lg font-black text-slate-900">MTI Pre-Sea &amp; Cadetship Admission</h3>
            <p class="text-xs text-slate-500">Intake 2026 • Limited Class Quota</p>
          </div>
        </div>

        <form @submit.prevent="submitModalAdmission" class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Candidate Name *</label>
            <input v-model="modalForm.name" type="text" required placeholder="Full name as per Matric / Passport" class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">WhatsApp No. *</label>
              <input v-model="modalForm.whatsapp" type="tel" required placeholder="+92 336 1234567" class="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Date of Birth</label>
              <input v-model="modalForm.dob" type="date" class="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Desired Program *</label>
            <select v-model="modalForm.program" class="w-full px-3 py-2 border rounded-lg">
              <option>GP-III Pre-Sea Rating Course</option>
              <option>Advance Diploma in Nautical Science (Deck)</option>
              <option>Advance Diploma in Marine Engineering</option>
              <option>GMDSS General Operator Certificate</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Educational Qualification</label>
            <select v-model="modalForm.education" class="w-full px-3 py-2 border rounded-lg">
              <option>Matriculation / O-Levels (Science)</option>
              <option>Intermediate / F.Sc (Pre-Engineering)</option>
              <option>Graduation / B.Sc</option>
              <option>Existing CDC Holder / Rating</option>
            </select>
          </div>

          <div v-if="modalSubmitted" class="p-2.5 bg-emerald-50 text-emerald-800 font-bold rounded-lg text-center">
            ✓ Registration initiated! Our admissions officer will message your WhatsApp with the Entry Test Date.
          </div>

          <button type="submit" class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider rounded-xl mt-2 transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>

    <!-- Modal 2: Campus & Simulator Video Modal -->
    <div v-if="openVideoModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div class="bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-700 relative text-white">
        <button @click="openVideoModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold">✕</button>
        <h3 class="text-lg font-black mb-2">Maritime Training Institute • Campus &amp; Simulator Tour</h3>
        <p class="text-xs text-slate-300 mb-4">A virtual walkthrough of our full-mission bridge, engine room, and survival grounds.</p>
        
        <div class="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80" alt="Simulator Video" class="w-full h-full object-cover opacity-60" />
          <div class="absolute text-center p-4">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xl font-black">▶</div>
            <div class="text-sm font-bold">Full Virtual Simulation Video Tour</div>
            <div class="text-xs text-slate-300 mt-1">Simulating night passage through Dover Strait with adverse sea conditions.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3: Prospectus 2026 Download Modal -->
    <div v-if="openProspectusModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative text-center">
        <button @click="openProspectusModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold">✕</button>
        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl">📥</div>
        <h3 class="text-lg font-black text-slate-900">Download Prospectus 2026</h3>
        <p class="text-xs text-slate-500 mt-1 mb-5">Contains complete curriculum details, fee schedule, simulator specifications, and placement records.</p>
        
        <div class="space-y-2">
          <a
            href="https://mti.edu.pk/wp-content/uploads/2026/05/cropped-MTI-LOGO-FINAL.png"
            target="_blank"
            download
            class="block w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider transition">
            Download Official PDF (12.4 MB)
          </a>
          <button @click="openProspectusModal = false" class="block w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-800">
            Close
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Maritime Training Institute (The Seafu) · Merchant Navy Pre-Sea & STCW Training',
  meta: [
    {
      name: 'description',
      content: 'Official portal of Maritime Training Institute (The Seafu) delivering pre-sea GP-III, HND Nautical Sciences, HND Marine Engineering, and STCW simulator training.',
    },
  ],
});

// ── Modals State ─────────────────────────────────────────────────────────────
const openAdmissionModal = ref(false);
const openVideoModal = ref(false);
const openProspectusModal = ref(false);
const openNoticeModal = ref(false);
const selectedNotice = ref<any>(null);

const currentSlide = ref(0);
const heroSlides = [
  {
    tabTitle: 'GP-III Pre-Sea',
    badge: 'Pre-Sea Induction 2026',
    subheading: 'General Purpose Rating • Merchant Navy',
    heading: 'Start Your Merchant Navy Journey with GP-III Pre-Sea Training',
    description: 'Structured pre-sea deck and engine training with hands-on workshops, fire fighting grounds, survival craft drills, and dedicated sea career progression.',
    features: [
      'Approved Pre-Sea Curriculum',
      'Hands-On Workshop Training',
      'Guaranteed Sea Career Pathway',
      'Hostel & Cadet Messing Facilities',
    ],
    primaryBtn: 'Apply for GP-III',
    cardHighlight: 'GP-III Batch 44 Open',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tabTitle: 'HND Nautical Science',
    badge: 'Deck Officer Pathway',
    subheading: 'Advance Diploma • Deck Cadetship',
    heading: 'Advance Diploma in Nautical Science (Deck Officer)',
    description: 'Build a strong deck officer foundation with modern navigational concepts, bridge procedures, electronic chart systems (ECDIS), and Flag State exam preparation.',
    features: [
      'Kongsberg 360° Bridge Simulator',
      'IMO Model Course 7.03 Standard',
      'ECDIS & GMDSS Certification',
      'City of Glasgow Outreach Articulation',
    ],
    primaryBtn: 'Apply for Nautical Science',
    cardHighlight: 'HND Nautical 2-Year Intake',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tabTitle: 'HND Marine Engineering',
    badge: 'Chief Engineer Pathway',
    subheading: 'Advance Diploma • Engine Cadetship',
    heading: 'Advance Diploma in Marine Engineering (Engine Officer)',
    description: 'Prepare for a high-demand engineering career at sea with machine shop practice, high-voltage installations, Wärtsilä dual-fuel plant simulations, and automation.',
    features: [
      'Full-Mission Engine Room Simulator',
      'High Voltage Marine Switchboards',
      'Pneumatic & Automation Lab',
      'Fast-Track Sea Time Progression',
    ],
    primaryBtn: 'Apply for Marine Engineering',
    cardHighlight: 'HND Marine Engg Intake Open',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  },
];

// ── Live Notices (MTI Structure) ──────────────────────────────────────────────
const notices = [
  {
    category: 'Admissions',
    tagClass: 'bg-emerald-100 text-emerald-800',
    date: 'June 2026',
    title: 'Admissions Started: Advance Diploma Nautical Science & Marine Engineering',
    excerpt: 'Online registration is now open for prospective deck and engine cadets. Limited intake for upcoming academic session.',
  },
  {
    category: 'Entry Test',
    tagClass: 'bg-amber-100 text-amber-800',
    date: '15 June 2026',
    title: '3rd GP-III Pre-Sea Entry Test Schedule Announced',
    excerpt: 'The written test and physical fitness examination will be conducted at Karachi campus. Admit cards dispatched.',
  },
  {
    category: 'Regulatory',
    tagClass: 'bg-blue-100 text-blue-800',
    date: '02 June 2026',
    title: 'DG Shipping & UK MCA STCW Refresher Guidelines Update',
    excerpt: 'Mandatory revalidation schedule for Advanced Fire Fighting (AFF) and Medical Care certifications published.',
  },
  {
    category: 'Placement',
    tagClass: 'bg-purple-100 text-purple-800',
    date: '28 May 2026',
    title: 'Anglo-Eastern & Maersk Cadet Campus Placement Drive',
    excerpt: '100% of the graduating deck officer batch shortlisted for onboard training berths with international fleet.',
  },
];

// ── Courses Catalog ──────────────────────────────────────────────────────────
const selectedCategory = ref('All Programs');
const courseCategories = [
  'All Programs',
  'Pre-Sea (GP-III)',
  'Nautical Sciences',
  'Marine Engineering',
  'STCW Mandatory',
  'Simulator Suites',
];

const allCourses = [
  {
    code: 'MTI-GP3-101',
    title: 'GP-III (General Purpose) Pre-Sea Course',
    category: 'Pre-Sea (GP-III)',
    badge: 'Admissions Open',
    badgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    description: 'Comprehensive pre-sea merchant navy training covering deck seamanship, engine room maintenance, survival craft, and safety drills.',
    duration: '6 Months Full-Time',
    pathway: 'Merchant Navy Rating to Officer',
    certification: 'DG Shipping Certified CDC',
    seatsLeft: 14,
    fee: '$1,200',
    slug: 'gp-iii-pre-sea',
  },
  {
    code: 'MTI-HND-NS',
    title: 'Advance Diploma in Nautical Science (HND)',
    category: 'Nautical Sciences',
    badge: 'Popular Cadetship',
    badgeClass: 'bg-blue-100 text-blue-800 border border-blue-200',
    description: 'Deck officer cadetship pathway focusing on celestial & electronic navigation, collision regulations, passage planning, and bridge watchkeeping.',
    duration: '2 Years (Articulated)',
    pathway: 'Third Officer / Second Mate',
    certification: 'UK MCA / DG Shipping CoC Eligible',
    seatsLeft: 8,
    fee: '$3,800',
    slug: 'advance-diploma-nautical-science',
  },
  {
    code: 'MTI-HND-ME',
    title: 'Advance Diploma in Marine Engineering (HND)',
    category: 'Marine Engineering',
    badge: 'High Demand',
    badgeClass: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    description: 'Technical marine engineering education with workshop machining, auxiliary systems, marine boilers, and engine room simulator operations.',
    duration: '2 Years (Articulated)',
    pathway: 'Fourth Engineer / Class 4 CoC',
    certification: 'UK MCA / DG Shipping CoC Eligible',
    seatsLeft: 6,
    fee: '$3,950',
    slug: 'advance-diploma-marine-engineering',
  },
  {
    code: 'MTI-SIM-GMDSS',
    title: 'GMDSS General Operator Certificate (GOC)',
    category: 'Simulator Suites',
    badge: 'Essential',
    badgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
    description: 'Hands-on maritime radio communications training covering Inmarsat-C, MF/HF, DSC, SART, EPIRB, and maritime distress procedures.',
    duration: '12 Days',
    pathway: 'Deck Watchkeeping Mandate',
    certification: 'STCW IV/2 GMDSS GOC',
    seatsLeft: 5,
    fee: '$750',
    slug: 'gmdss-general-operator-certificate',
  },
  {
    code: 'MTI-SIM-ECDIS',
    title: 'ECDIS Generic & Type-Specific Course',
    category: 'Simulator Suites',
    badge: 'Fast-Track',
    badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200',
    description: 'IMO Model Course 1.27 certified training on electronic chart systems, safety contours, passage monitoring, and sensor integration.',
    duration: '5 Days',
    pathway: 'Navigation Officers',
    certification: 'STCW II/1 & II/2 Compliant',
    seatsLeft: 12,
    fee: '$450',
    slug: 'ecdis-type-specific-training',
  },
  {
    code: 'MTI-STCW-AFF',
    title: 'Advanced Fire Fighting (AFF) Refresher',
    category: 'STCW Mandatory',
    badge: 'Mandatory',
    badgeClass: 'bg-rose-100 text-rose-800 border border-rose-200',
    description: 'Practical command, organization, and tactical firefighting training on a full-scale 4-deck simulated shipboard fire ground.',
    duration: '3 Days',
    pathway: '5-Year Statutory Revalidation',
    certification: 'STCW VI/3 Advanced Fire Fighting',
    seatsLeft: 3,
    fee: '$480',
    slug: 'advanced-fire-fighting-refresher',
  },
];

const filteredCourses = computed(() => {
  if (selectedCategory.value === 'All Programs') return allCourses;
  return allCourses.filter(c => c.category === selectedCategory.value);
});

// ── Simulator Suites (MTI Style) ─────────────────────────────────────────────
const simulatorSuites = [
  {
    title: 'Full-Mission Bridge Simulator (360°)',
    badge: 'Kongsberg Polaris',
    hardware: '6 High-Definition Projected Channels',
    description: 'Realistic ship handling, collision avoidance, restricted waterway navigation, and bridge team management in dynamic weather and swell conditions.',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Engine Room Simulator (ERS 5000)',
    badge: 'Wärtsilä / MAN B&W',
    hardware: 'Dual-Fuel LNG & Slow-Speed Diesel',
    description: 'Full plant startup, boiler operation, fuel purification, electrical power generation, and emergency machinery troubleshooting.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Liquid Cargo Simulator (LICOS)',
    badge: 'VLCC & Chemical Tanker',
    hardware: 'Full Multi-Grade Cargo Console',
    description: 'Safe and compliant crude oil, chemical, and gas tanker loading, discharge, inerting, tank washing, and emergency shutdown procedures.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'GMDSS Communication Lab',
    badge: 'Sailor / Furuno Suite',
    hardware: '12 Trainee Consoles + Instructor',
    description: 'Live simulated distress, urgency, and routine radio traffic using NAVTEX, Inmarsat Mini-C, DSC controllers, and VHF/HF equipment.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'ECDIS Electronic Navigation Suite',
    badge: 'Transas Navi-Sailor 4000',
    hardware: 'IMO Model Course 1.27 Stations',
    description: 'Electronic passage planning, route validation, radar overlay, alarm management, and backup arrangement compliance training.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Live Fire & Sea Survival Grounds',
    badge: 'Mock Vessel Complex',
    hardware: '4-Deck Internal Burner & Smoke Labyrinth',
    description: 'Practical breathing apparatus drills, enclosed space rescue, live oil pool extinguishing, and free-fall lifeboat launch drills.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
  },
];

function openSimulatorDetail(sim: any) {
  openVideoModal.value = true;
}

function enrollCourse(course: any) {
  openAdmissionModal.value = true;
  modalForm.value.program = course.title;
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Capt. Bilal Tariq',
    rank: 'Master Mariner',
    company: 'Maersk Line',
    quote: 'The rigorous simulator training and navigational discipline at MTI gave me the technical edge needed to command container vessels worldwide. Exceptional academy.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Tariq Mansoor',
    rank: 'Chief Engineer',
    company: 'Anglo-Eastern Ship Mgmt',
    quote: 'From pre-sea cadetship to Chief Engineer CoC, MTI’s workshop facilities and dedicated faculty provided unbroken support throughout my 15-year career at sea.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Cadet Zeeshan Haider',
    rank: 'Deck Cadet',
    company: 'Teekay Tankers',
    quote: 'I cleared the GP-III entrance examination and joined MTI. After graduation, the academy’s captive placement desk helped me join a modern crude tanker immediately.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

// ── FAQs ─────────────────────────────────────────────────────────────────────
const activeFaq = ref<number | null>(0);
const faqs = [
  {
    question: 'What are the basic eligibility criteria for the GP-III Pre-Sea course?',
    answer: 'Candidates must have passed Matriculation / O-Levels with at least 50% marks in science subjects (Physics, Chemistry, Mathematics). Age limit is strictly 17.5 to 25 years on the date of batch commencement. Medical fitness as per DG Shipping / Flag State standards with 6/6 uncorrected vision is mandatory.',
  },
  {
    question: 'How does the HND articulation with City of Glasgow College work?',
    answer: 'Students complete Year 1 and Year 2 in Nautical Science or Marine Engineering at our academy under the approved curriculum. Upon meeting academic standards, candidates can progress to sea-time completion or articulation for UK MCA CoC certification.',
  },
  {
    question: 'How are course bookings and fees protected under The Seafu Escrow?',
    answer: 'Every candidate booking made through The Seafu Platform is locked in an Escrow contract. The academy only receives settlement upon verified course completion and digital certificate issuance to the cadet’s vault.',
  },
  {
    question: 'Can Port State Control or crewing companies verify our certificates online?',
    answer: 'Yes! Every certificate issued bears an ECDSA cryptographic signature and tamper-proof QR code. Any maritime employer or Port State Control inspector can scan the code to verify issuance in under 15 milliseconds without login required.',
  },
];

// ── Contact Form ─────────────────────────────────────────────────────────────
const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  program: 'GP-III Pre-Sea Course',
  message: '',
});
const formSubmitted = ref(false);

function submitContactForm() {
  formSubmitted.value = true;
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    program: 'GP-III Pre-Sea Course',
    message: '',
  };
  setTimeout(() => {
    formSubmitted.value = false;
  }, 6000);
}

// ── Modal Form ───────────────────────────────────────────────────────────────
const modalForm = ref({
  name: '',
  whatsapp: '',
  dob: '',
  program: 'GP-III Pre-Sea Rating Course',
  education: 'Matriculation / O-Levels (Science)',
});
const modalSubmitted = ref(false);

function submitModalAdmission() {
  modalSubmitted.value = true;
  setTimeout(() => {
    modalSubmitted.value = false;
    openAdmissionModal.value = false;
  }, 3500);
}
</script>
