<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
    
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- PROFESSIONAL MTI MARITIME NAVBAR (Modular Domain Component)    -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <LandingNavbar
      @open-admission="handleOpenAdmission"
      @open-video="openVideoModal = true"
    />


    <main id="main-content">
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 3. HERO ADMISSIONS & SLIDER (Modular Component)                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <LandingHeroSlider
        :slides="heroSlides"
        @open-admission="handleOpenAdmission"
        @open-prospectus="openProspectusModal = true"
        @open-video="openVideoModal = true"
      />

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 4. SECTION: SHAPING FUTURES (Modular Component)                 -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <div id="about">
        <LandingNoticeBoard
          :notices="notices"
          @open-video="openVideoModal = true"
          @open-admission="openAdmissionModal = true"
          @select-notice="handleSelectNotice"
          @view-all-notices="openNoticeModal = true"
        />
      </div>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 5. SECTION: MTI ACADEMIC COURSES & PROGRAMS                    -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="courses" class="py-24 bg-slate-50 border-b border-slate-100" aria-labelledby="courses-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Curriculum &amp; STCW Certifications</p>
            <h2 id="courses-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Explore Our <span class="text-blue-700">Maritime Programs</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
              <span class="w-3 h-0.5 bg-amber-400 rounded-full"></span>
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-500 mt-5 leading-relaxed">
              Industry-focused maritime training programs designed to build practical skills, professional competence, and strong career opportunities for aspiring and active seafarers.
            </p>
          </div>

          <!-- Course Filter Tabs -->
          <div class="flex items-center justify-center flex-wrap gap-2 mb-10" role="tablist" aria-label="Course Categories">
            <button
              v-for="cat in courseCategories"
              :key="cat"
              @click="selectedCategory = cat"
              role="tab"
              :aria-selected="selectedCategory === cat"
              class="px-4 py-2 rounded-lg text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-700"
              :class="selectedCategory === cat
                ? 'bg-[#0A1936] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'">
              {{ cat }}
            </button>
          </div>

          <!-- Course Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
              v-for="(course, cIdx) in filteredCourses"
              :key="cIdx"
              class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden group">

              <!-- Card Header -->
              <div class="p-6 border-b border-slate-100">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider" :class="course.badgeClass">
                    {{ course.badge }}
                  </span>
                  <span class="text-[11px] font-medium text-slate-400">{{ course.code }}</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                  {{ course.title }}
                </h3>
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                  {{ course.description }}
                </p>
              </div>

              <!-- Key Specs -->
              <div class="p-6 bg-slate-50/60 flex-1 space-y-3">
                <div class="flex items-center justify-between text-xs text-slate-600">
                  <span class="flex items-center space-x-1.5 font-medium">
                    <!-- Clock icon -->
                    <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Duration</span>
                  </span>
                  <span class="font-semibold text-slate-900">{{ course.duration }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600">
                  <span class="flex items-center space-x-1.5 font-medium">
                    <!-- Chart icon -->
                    <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    <span>Pathway</span>
                  </span>
                  <span class="font-semibold text-blue-700">{{ course.pathway }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600">
                  <span class="flex items-center space-x-1.5 font-medium">
                    <!-- Badge icon -->
                    <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span>Certification</span>
                  </span>
                  <span class="font-semibold text-slate-900 text-right max-w-[140px]">{{ course.certification }}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <span class="flex items-center space-x-1.5 font-medium">
                    <!-- Seat icon -->
                    <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Batch Seats</span>
                  </span>
                  <span class="font-bold text-emerald-600">{{ course.seatsLeft }} Available</span>
                </div>
              </div>

              <!-- Price & CTA -->
              <div class="p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div class="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Guaranteed Fee</div>
                  <div class="text-xl font-bold text-slate-900">{{ course.fee }}</div>
                </div>
                <div class="flex items-center space-x-2">
                  <NuxtLink
                    :to="'/courses/' + course.slug"
                    class="px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 transition focus:outline-none focus:ring-1 focus:ring-blue-600">
                    Syllabus
                  </NuxtLink>
                  <button
                    @click="enrollCourse(course)"
                    class="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide bg-blue-700 hover:bg-blue-800 text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-700">
                    Enroll Now
                  </button>
                </div>
              </div>

            </article>
          </div>

          <!-- View All -->
          <div class="mt-12 text-center">
            <NuxtLink
              to="/courses"
              class="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#0A1936] hover:bg-[#112752] text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-900">
              <span>View All Accredited Programs &amp; Batches</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- ═════════════════════════════════════════════════════════════════ -->
      <!-- 6. SECTION: SIMULATOR SUITES (Modular Component)                -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <div id="simulators">
        <LandingSimulatorCards
          :suites="simulatorSuites"
          @select-sim="openVideoModal = true"
          @book-visit="openAdmissionModal = true"
        />
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- 7. SECTION: HIGHLIGHTS IN NUMBERS                              -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <section id="numbers" class="py-20 bg-[#0A1936] text-white" aria-labelledby="numbers-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-3">Proven Track Record</p>
            <h2 id="numbers-heading" class="text-3xl sm:text-4xl font-bold tracking-tight">
              Academy Highlights in <span class="text-amber-400">Numbers</span>
            </h2>
            <p class="text-sm text-slate-400 mt-3 leading-relaxed">
              Achievements that reflect our excellence in maritime education, technical training, and seafarer placement worldwide.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <div v-for="stat in keyStats" :key="stat.label"
              class="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-amber-400/40 hover:bg-white/8 transition-all duration-300">
              <div class="text-4xl sm:text-5xl font-bold text-amber-400">{{ stat.value }}</div>
              <div class="text-sm font-semibold text-white mt-2">{{ stat.label }}</div>
              <div class="text-xs text-slate-400 mt-1 leading-snug">{{ stat.sub }}</div>
            </div>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- 8. SECTION: BLOG / KNOWLEDGE CENTER                            -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <section id="blog" class="py-24 bg-white border-b border-slate-100" aria-labelledby="blog-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center max-w-2xl mx-auto mb-14">
            <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Maritime Knowledge &amp; Updates</p>
            <h2 id="blog-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Industry Insights &amp; <span class="text-blue-700">Advisories</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
              <span class="w-3 h-0.5 bg-amber-400 rounded-full"></span>
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-500 mt-5 leading-relaxed">
              Stay ahead with statutory circulars, decarbonization guidelines, STCW revalidation deadlines, and merchant navy career insights.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <article v-for="(post, pIdx) in blogPosts" :key="pIdx"
              class="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
              <div class="relative h-44 overflow-hidden bg-slate-800">
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#0A1936]/90 text-white backdrop-blur-sm">
                  {{ post.category }}
                </span>
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center space-x-2 text-[11px] text-slate-400 font-medium mb-3">
                  <span>{{ post.date }}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{{ post.readTime }}</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                  {{ post.title }}
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed flex-1 font-normal">
                  {{ post.excerpt }}
                </p>
                <div class="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                  <span class="text-[11px] text-slate-400 font-medium">By {{ post.author }}</span>
                  <NuxtLink to="/community" class="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center space-x-1 transition">
                    <span>Read Article</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- 9. SECTION: TESTIMONIALS                                       -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <section id="testimonials" class="py-24 bg-slate-50 border-b border-slate-100" aria-labelledby="testimonials-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center max-w-2xl mx-auto mb-14">
            <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Cadet Stories &amp; Success</p>
            <h2 id="testimonials-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Our <span class="text-blue-700">Seafarers Say</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
              <span class="w-3 h-0.5 bg-amber-400 rounded-full"></span>
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(test, tIdx) in testimonials" :key="tIdx"
              class="bg-white p-7 rounded-2xl border border-slate-200 border-l-4 border-l-amber-400 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div class="space-y-3">
                <!-- SVG Star rating -->
                <div class="flex items-center space-x-0.5" aria-label="5 out of 5 stars">
                  <svg v-for="s in 5" :key="s" class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p class="text-sm text-slate-600 italic leading-relaxed font-normal">
                  "{{ test.quote }}"
                </p>
              </div>

              <div class="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <img :src="test.avatar" :alt="'Photo of ' + test.name" class="w-10 h-10 rounded-full object-cover border-2 border-slate-200 shrink-0"/>
                <div>
                  <div class="text-sm font-bold text-slate-900">{{ test.name }}</div>
                  <div class="text-xs text-blue-700 font-medium">{{ test.rank }} &bull; {{ test.company }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- 10. SECTION: FAQs ACCORDION                                    -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <section id="faqs" class="py-24 bg-white border-b border-slate-100" aria-labelledby="faqs-heading">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center mb-12">
            <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Got Questions?</p>
            <h2 id="faqs-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked <span class="text-blue-700">Questions</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
              <span class="w-3 h-0.5 bg-amber-400 rounded-full"></span>
              <span class="w-10 h-0.5 bg-blue-700 rounded-full"></span>
            </div>
          </div>

          <div class="space-y-2.5">
            <div
              v-for="(faq, fIdx) in faqs"
              :key="fIdx"
              class="border border-slate-200 rounded-xl overflow-hidden transition-all"
              :class="activeFaq === fIdx ? 'border-blue-200 shadow-sm' : ''">
              <button
                @click="activeFaq = activeFaq === fIdx ? null : fIdx"
                class="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-inset"
                :aria-expanded="activeFaq === fIdx">
                <span :class="activeFaq === fIdx ? 'text-blue-700' : ''">{{ faq.question }}</span>
                <!-- SVG Chevron -->
                <svg
                  class="w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4"
                  :class="activeFaq === fIdx ? 'rotate-180 text-blue-700' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <Transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0">
                <div v-if="activeFaq === fIdx"
                  class="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 font-normal">
                  {{ faq.answer }}
                </div>
              </Transition>
            </div>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- 11. SECTION: CONTACT FORM                                      -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <section id="contact" class="py-24 bg-slate-50 border-b border-slate-100" aria-labelledby="contact-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <!-- Left info column -->
            <div class="lg:col-span-5 space-y-7">
              <div>
                <p class="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">Connect With Us</p>
                <h2 id="contact-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Start Your Sea Career With Maritime Training Institute
                </h2>
              </div>
              <p class="text-sm text-slate-500 leading-relaxed font-normal">
                Whether you are an aspiring cadet seeking pre-sea admissions or an experienced officer needing mandatory STCW revalidation, our admissions team is here to assist.
              </p>

              <div class="space-y-4 text-sm text-slate-700">
                <!-- Address -->
                <div class="flex items-start space-x-3">
                  <div class="shrink-0 w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-0.5">Campus Address</div>
                    <div class="text-slate-500 font-normal">Marine Complex, Dockyard Road, Port Area, Karachi, Pakistan.</div>
                  </div>
                </div>
                <!-- Phone -->
                <div class="flex items-start space-x-3">
                  <div class="shrink-0 w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-0.5">Admissions Office</div>
                    <div class="text-slate-500 font-normal">+92 21 3568 1234 &nbsp;/&nbsp; +92 336 6668475</div>
                  </div>
                </div>
                <!-- Email -->
                <div class="flex items-start space-x-3">
                  <div class="shrink-0 w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-0.5">Email Inquiries</div>
                    <div class="text-slate-500 font-normal">admissions@mti.edu.pk &nbsp;/&nbsp; info@seafu.org</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="lg:col-span-7 bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-1">Admissions &amp; Course Inquiry Form</h3>
              <p class="text-sm text-slate-400 mb-6 font-normal">Fill in your details and our admissions coordinator will reach out within 24 hours.</p>

              <form @submit.prevent="submitContactForm" class="space-y-4" aria-label="Admissions Inquiry Form">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      id="contact-name"
                      v-model="contactForm.name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-normal focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <label for="contact-email" class="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      id="contact-email"
                      v-model="contactForm.email"
                      type="email"
                      required
                      placeholder="alex@email.com"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-normal focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-phone" class="block text-xs font-semibold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      v-model="contactForm.phone"
                      type="tel"
                      required
                      placeholder="+92 336 1234567"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-normal focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <label for="contact-program" class="block text-xs font-semibold text-slate-700 mb-1.5">Program of Interest</label>
                    <select
                      id="contact-program"
                      v-model="contactForm.program"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-normal focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition bg-white">
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
                  <label for="contact-message" class="block text-xs font-semibold text-slate-700 mb-1.5">Your Message / Query</label>
                  <textarea
                    id="contact-message"
                    v-model="contactForm.message"
                    rows="3"
                    placeholder="Ask about entry test schedules, fee structure, or seat availability..."
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-normal focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition resize-none"></textarea>
                </div>

                <div v-if="formSubmitted"
                  class="flex items-center space-x-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg" role="alert">
                  <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Thank you! Our counselor will contact you via WhatsApp shortly.</span>
                </div>

                <button
                  type="submit"
                  class="w-full py-3 rounded-xl font-semibold text-sm uppercase tracking-wide bg-blue-700 hover:bg-blue-800 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-700">
                  Submit Admissions Inquiry
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

    </main>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- 12. FOOTER                                                     -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <footer class="bg-[#0A1936] text-slate-400 pt-16 pb-8 border-t border-white/8" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/8">

          <!-- Col 1: Brand (2 cols) -->
          <div class="lg:col-span-2 space-y-5">
            <div class="flex items-center space-x-3">
              <!-- Inline SVG Logo -->
              <div class="w-11 h-11 shrink-0">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-hidden="true">
                  <circle cx="40" cy="40" r="38" stroke="#B8941F" stroke-width="3"/>
                  <circle cx="40" cy="40" r="31" stroke="#1E3A8A" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
                  <path d="M40 13l2.5 11h-5L40 13z" fill="#B8941F"/>
                  <path d="M40 67l-2.5-11h5L40 67z" fill="#B8941F" opacity="0.4"/>
                  <path d="M13 40l11-2.5v5L13 40z" fill="#B8941F" opacity="0.4"/>
                  <path d="M67 40l-11 2.5v-5L67 40z" fill="#B8941F"/>
                  <rect x="37.5" y="21" width="5" height="29" rx="2.5" fill="white"/>
                  <circle cx="40" cy="21" r="5.5" stroke="white" stroke-width="3" fill="none"/>
                  <rect x="27" y="31" width="26" height="4.5" rx="2.25" fill="white"/>
                  <path d="M31 51 Q26 58 28.5 63 Q32.5 67 37 59 L40 51" fill="white"/>
                  <path d="M49 51 Q54 58 51.5 63 Q47.5 67 43 59 L40 51" fill="white"/>
                </svg>
              </div>
              <div>
                <div class="text-xl font-bold text-white tracking-tight">The Seafu</div>
                <div class="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Maritime Training Institute</div>
              </div>
            </div>
            <p class="text-xs leading-relaxed max-w-sm font-normal">
              The Seafu Platform &amp; MTI delivers premier pre-sea education, officer cadetships, and cryptographic STCW certification trusted by maritime administrations worldwide.
            </p>
            <div class="text-xs">
              <div class="font-semibold text-white mb-1">Campus Locations:</div>
              <div class="font-normal">Marine Complex, Dockyard Road, Port Area, Karachi</div>
              <div class="text-amber-400 font-medium mt-1">Outreach: City of Glasgow College, Scotland</div>
            </div>
            <!-- Socials -->
            <div class="flex items-center space-x-3 pt-1">
              <a href="#" class="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition" aria-label="LinkedIn">
                <svg class="w-3.5 h-3.5 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/923366668475" target="_blank" rel="noopener noreferrer"
                class="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition" aria-label="WhatsApp">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition" aria-label="YouTube">
                <svg class="w-3.5 h-3.5 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Programs -->
          <div class="space-y-3">
            <div class="text-[10px] font-bold uppercase tracking-widest text-white">Academic Programs</div>
            <ul class="space-y-2 text-xs">
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">Pre-Sea GP-III Course</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">HND Nautical Sciences</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">HND Marine Engineering</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">GMDSS Radio Operator</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">ECDIS Model Course 1.27</a></li>
              <li><a href="#courses" class="hover:text-amber-400 transition font-normal">High Voltage Installations</a></li>
            </ul>
          </div>

          <!-- Col 3: Simulators -->
          <div class="space-y-3">
            <div class="text-[10px] font-bold uppercase tracking-widest text-white">Simulator Labs</div>
            <ul class="space-y-2 text-xs">
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">Full-Mission Bridge</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">Engine Room Simulator (ERS)</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">Liquid Cargo (LICOS)</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">VTS Traffic Simulator</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">GMDSS Radio Station</a></li>
              <li><a href="#simulators" class="hover:text-amber-400 transition font-normal">Fire Fighting Grounds</a></li>
            </ul>
          </div>

          <!-- Col 4: Portals -->
          <div class="space-y-3">
            <div class="text-[10px] font-bold uppercase tracking-widest text-white">Access Portals</div>
            <ul class="space-y-2 text-xs">
              <li><NuxtLink to="/seafarer" class="hover:text-cyan-300 transition font-normal">Seafarer Panel</NuxtLink></li>
              <li><NuxtLink to="/institute" class="hover:text-cyan-300 transition font-normal">Maritime Academy Portal</NuxtLink></li>
              <li><NuxtLink to="/admin" class="hover:text-cyan-300 transition font-normal">Statutory Admin Console</NuxtLink></li>
              <li><NuxtLink to="/verify/IND-AFF-7714-ECDSA" class="hover:text-cyan-300 transition font-normal">Instant QR Verification</NuxtLink></li>
              <li><NuxtLink to="/institutes/compare" class="hover:text-cyan-300 transition font-normal">Compare Academies</NuxtLink></li>
              <li><NuxtLink to="/auth/login" class="hover:text-cyan-300 transition font-normal">Candidate Login</NuxtLink></li>
            </ul>
          </div>

        </div>

        <!-- Accreditation Strip -->
        <div class="py-6 border-b border-white/8 flex flex-wrap items-center justify-center gap-4">
          <span v-for="badge in ['IMO STCW Manila 2010', 'DG Shipping Approved', 'UK MCA Compliant', 'CIP Grade A1 Outstanding']" :key="badge"
            class="text-[10px] font-medium text-slate-500 px-3 py-1 rounded-md border border-white/8">
            {{ badge }}
          </span>
        </div>

        <!-- Copyright -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div>&copy; 2026 The Seafu Platform &amp; Maritime Training Institute (MTI). All rights reserved.</div>
          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-slate-400 transition">Privacy Policy</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#" class="hover:text-slate-400 transition">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- 13. INTERACTIVE MODALS                                         -->
    <!-- ═══════════════════════════════════════════════════════════════ -->

    <!-- Modal 1: Admission Apply -->
    <div v-if="openAdmissionModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog" aria-modal="true" aria-labelledby="modal-admission-title"
      @click.self="openAdmissionModal = false">
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button @click="openAdmissionModal = false"
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close admission modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="flex items-center space-x-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6M12 4a2 2 0 100-4 2 2 0 000 4zm0 16c-4.418 0-8-2.686-8-6"/>
            </svg>
          </div>
          <div>
            <h3 id="modal-admission-title" class="text-lg font-bold text-slate-900">MTI Pre-Sea &amp; Cadetship Admission</h3>
            <p class="text-xs text-slate-500">Intake 2026 &bull; Limited Class Quota</p>
          </div>
        </div>

        <form @submit.prevent="submitModalAdmission" class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Candidate Name *</label>
            <input v-model="modalForm.name" type="text" required placeholder="Full name as per Matric / Passport"
              class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none font-normal"/>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">WhatsApp No. *</label>
              <input v-model="modalForm.whatsapp" type="tel" required placeholder="+92 336 1234567"
                class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none font-normal"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Date of Birth</label>
              <input v-model="modalForm.dob" type="date"
                class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none font-normal"/>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Desired Program *</label>
            <select v-model="modalForm.program"
              class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white font-normal">
              <option>GP-III Pre-Sea Rating Course</option>
              <option>Advance Diploma in Nautical Science (Deck)</option>
              <option>Advance Diploma in Marine Engineering</option>
              <option>GMDSS General Operator Certificate</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Educational Qualification</label>
            <select v-model="modalForm.education"
              class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white font-normal">
              <option>Matriculation / O-Levels (Science)</option>
              <option>Intermediate / F.Sc (Pre-Engineering)</option>
              <option>Graduation / B.Sc</option>
              <option>Existing CDC Holder / Rating</option>
            </select>
          </div>

          <div v-if="modalSubmitted"
            class="flex items-center space-x-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg" role="alert">
            <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Registration initiated! Our admissions officer will message your WhatsApp with the Entry Test Date.</span>
          </div>

          <button type="submit"
            class="w-full py-3 rounded-xl font-semibold text-sm uppercase tracking-wide bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400">
            Submit Application
          </button>
        </form>
      </div>
    </div>

    <!-- Modal 2: Campus Tour Video -->
    <div v-if="openVideoModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog" aria-modal="true" aria-label="Campus tour video"
      @click.self="openVideoModal = false">
      <div class="bg-slate-900 rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-700 relative overflow-hidden">
        <button @click="openVideoModal = false"
          class="absolute top-3 right-3 w-8 h-8 z-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close video">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="aspect-video flex items-center justify-center bg-slate-800">
          <div class="text-center text-slate-400 space-y-3">
            <svg class="w-16 h-16 mx-auto text-amber-400/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <p class="text-sm font-medium">Campus Tour Video</p>
            <p class="text-xs text-slate-500">Video embed coming soon</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3: Prospectus Download -->
    <div v-if="openProspectusModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog" aria-modal="true" aria-labelledby="modal-prospectus-title"
      @click.self="openProspectusModal = false">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-center">
        <button @click="openProspectusModal = false"
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close prospectus modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
          <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <h3 id="modal-prospectus-title" class="text-lg font-bold text-slate-900 mb-2">MTI Prospectus 2026</h3>
        <p class="text-sm text-slate-500 mb-6 font-normal">Download the full academy prospectus with course details, fee schedules, and accreditation certificates.</p>
        <a href="/prospectus-2026.pdf" download
          class="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-700 hover:bg-blue-800 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>Download PDF Prospectus</span>
        </a>
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
    {
      name: 'keywords',
      content: 'Maritime Training Institute, MTI, GP-III Pre-Sea, HND Nautical Science, Marine Engineering, STCW 2010, Ship Simulator, Seafu',
    },
  ],
});

// ── Mobile Navigation Drawer State ──────────────────────────────────────────
const mobileNavOpen = ref(false);

// ── Modals State ─────────────────────────────────────────────────────────────
const openAdmissionModal = ref(false);
const openVideoModal = ref(false);
const openProspectusModal = ref(false);
const openNoticeModal = ref(false);
const selectedNotice = ref<any>(null);

function handleOpenAdmission(programTitle?: string) {
  openAdmissionModal.value = true;
  if (programTitle) {
    modalForm.value.program = programTitle;
  }
}

function handleSelectNotice(notice: any) {
  selectedNotice.value = notice;
  openAdmissionModal.value = true;
}

// ── Hero Slides Data (for LandingHeroSlider component) ────────────────────────
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

// ── Live Notices Data (for LandingNoticeBoard component) ──────────────────────
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

// ── Key Stats (unified gold-on-navy) ─────────────────────────────────────────
const keyStats = [
  { value: '20,000+', label: 'Alumni Network', sub: 'Serving on international merchant vessels' },
  { value: '300+', label: 'Certified Faculty', sub: 'Master Mariners & Chief Engineers' },
  { value: '500+', label: 'STCW Certifications', sub: 'IMO Model Courses & Diplomas' },
  { value: '98.6%', label: 'Pass Rate', sub: 'DG Shipping & UK MCA examinations' },
];

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

function enrollCourse(course: any) {
  openAdmissionModal.value = true;
  modalForm.value.program = course.title;
}

// ── Blog / Maritime Insights Data ────────────────────────────────────────────
const blogPosts = [
  {
    category: 'IMO Circular',
    date: '14 June 2026',
    readTime: '4 min read',
    title: 'IMO 2026 Decarbonization Mandates: Dual-Fuel Training Requirements',
    excerpt: 'A comprehensive briefing on ME Engine operation, LNG/Methanol bunker handling protocols, and safety qualifications required for new generation green merchant fleets.',
    author: 'Capt. Bilal Tariq',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Career Guide',
    date: '08 June 2026',
    readTime: '6 min read',
    title: 'From Pre-Sea GP-III to Chief Mate: The Modern Sea Service Pathway',
    excerpt: 'Detailed roadmap for ratings aspiring to earn their Second Mate Certificate of Competency (CoC) through structured sea-time logging and verified simulator credits.',
    author: 'Faculty of Navigation',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Regulatory',
    date: '29 May 2026',
    readTime: '5 min read',
    title: 'Port State Control (PSC) Trends: Digital Certificate Verification in 2026',
    excerpt: 'How Tokyo & Paris MoU inspectors are utilizing ECDSA cryptographic verification for instant STCW document authentication at berth.',
    author: 'Compliance Desk',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
  },
];

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
