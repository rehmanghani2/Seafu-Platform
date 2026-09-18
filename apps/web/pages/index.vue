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
      <section id="courses" class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-10">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Curriculum &amp; STCW Certifications</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Our <span class="text-blue-700">Maritime Programs</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-600 mt-4">
              Discover industry-focused maritime training programs designed to build practical skills, professional competence, and strong career opportunities for aspiring and active seafarers.
            </p>
          </div>

          <!-- Course Filter Category Tabs -->
          <div class="flex items-center justify-center flex-wrap gap-2 mb-10" role="tablist" aria-label="Course Categories">
            <button
              v-for="cat in courseCategories"
              :key="cat"
              @click="selectedCategory = cat"
              role="tab"
              :aria-selected="selectedCategory === cat"
              class="px-4 py-2 rounded-xl text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-blue-700"
              :class="selectedCategory === cat ? 'bg-blue-700 text-white shadow-sm font-black' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'">
              {{ cat }}
            </button>
          </div>

          <!-- Course Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
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
                    class="px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 transition focus:outline-none focus:ring-1 focus:ring-blue-600">
                    Syllabus
                  </NuxtLink>
                  <button
                    @click="enrollCourse(course)"
                    class="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-xs transition focus:outline-none focus:ring-2 focus:ring-blue-700">
                    Enroll Now
                  </button>
                </div>
              </div>

            </article>
          </div>

          <!-- Bottom View All Button -->
          <div class="mt-12 text-center">
            <NuxtLink
              to="/courses"
              class="inline-flex items-center px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#0A1936] hover:bg-[#112752] text-white shadow-md transition space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-900">
              <span>View All Accredited Programs &amp; Batches</span>
              <span aria-hidden="true">→</span>
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
      <!-- 8. SECTION: MARITIME INSIGHTS & BLOG (Knowledge Center)         -->
      <!-- ═════════════════════════════════════════════════════════════════ -->
      <section id="blog" class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Maritime Knowledge &amp; Updates</div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Industry Insights &amp; <span class="text-blue-700">Advisories</span>
            </h2>
            <div class="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
            <p class="text-sm text-slate-600 mt-4">
              Stay ahead with statutory circulars, decarbonization guidelines, STCW revalidation deadlines, and merchant navy career insights.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article v-for="(post, pIdx) in blogPosts" :key="pIdx" class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div class="relative h-48 overflow-hidden bg-slate-800">
                  <img :src="post.image" :alt="post.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#0A1936] text-white">
                    {{ post.category }}
                  </span>
                </div>
                <div class="p-6">
                  <div class="flex items-center space-x-2 text-[11px] text-slate-400 font-bold mb-2">
                    <span>{{ post.date }}</span>
                    <span>&bull;</span>
                    <span>{{ post.readTime }}</span>
                  </div>
                  <h3 class="text-base font-black text-slate-900 hover:text-blue-700 transition leading-snug mb-2">
                    {{ post.title }}
                  </h3>
                  <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {{ post.excerpt }}
                  </p>
                </div>
              </div>

              <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200/60 mt-4 text-xs font-bold">
                <span class="text-slate-500">By {{ post.author }}</span>
                <NuxtLink to="/community" class="text-blue-700 hover:underline">
                  Read Article →
                </NuxtLink>
              </div>
            </article>
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
            <div class="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div v-for="(test, tIdx) in testimonials" :key="tIdx" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="flex text-amber-400 text-sm" aria-label="5 out of 5 stars">★★★★★</div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{{ test.quote }}"
                </p>
              </div>

              <div class="flex items-center space-x-3.5 pt-4 border-t border-slate-100">
                <img :src="test.avatar" :alt="'Photo of ' + test.name" class="w-11 h-11 rounded-full object-cover border border-slate-200" />
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
            <div class="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
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
                class="w-full text-left p-5 flex items-center justify-between font-extrabold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-blue-700"
                :aria-expanded="activeFaq === fIdx">
                <span>{{ faq.question }}</span>
                <span class="text-blue-700 text-lg font-bold ml-4" aria-hidden="true">{{ activeFaq === fIdx ? '−' : '+' }}</span>
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
                  <span class="text-blue-700 text-base" aria-hidden="true">📍</span>
                  <span><strong>Campus Address:</strong> Marine Complex, Dockyard Road, Port Area, Karachi, Pakistan.</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-blue-700 text-base" aria-hidden="true">📞</span>
                  <span><strong>Admissions Office:</strong> +92 21 3568 1234 / +92 336 6668475</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-blue-700 text-base" aria-hidden="true">✉️</span>
                  <span><strong>Email Inquiries:</strong> admissions@mti.edu.pk / info@seafu.org</span>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 class="text-lg font-black text-slate-900 mb-1">Admissions &amp; Course Inquiry Form</h3>
              <p class="text-xs text-slate-500 mb-6">Fill in your details below and our maritime admissions coordinator will reach out within 24 hours.</p>

              <form @submit.prevent="submitContactForm" class="space-y-4" aria-label="Admissions Inquiry Form">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      id="contact-name"
                      v-model="contactForm.name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                    />
                  </div>
                  <div>
                    <label for="contact-email" class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      id="contact-email"
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
                    <label for="contact-phone" class="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      v-model="contactForm.phone"
                      type="tel"
                      required
                      placeholder="+92 336 1234567"
                      class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                    />
                  </div>
                  <div>
                    <label for="contact-program" class="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
                    <select
                      id="contact-program"
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
                  <label for="contact-message" class="block text-xs font-bold text-slate-700 mb-1">Your Message / Query</label>
                  <textarea
                    id="contact-message"
                    v-model="contactForm.message"
                    rows="3"
                    placeholder="Ask about entry test schedules, fee structure, or seat availability..."
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"></textarea>
                </div>

                <div v-if="formSubmitted" class="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg" role="alert">
                  ✓ Thank you! Your admission inquiry has been received. Our counselor will contact you via WhatsApp / Phone shortly.
                </div>

                <button
                  type="submit"
                  class="w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-700">
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
    <footer class="bg-[#0A1936] text-slate-300 pt-16 pb-8 border-t border-slate-800" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Col 1: Brand (2 cols) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center space-x-3">
              <img src="/logo-crest.png" alt="The Seafu Official Crest" class="w-12 h-12 rounded-full object-contain" />
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
              <li><NuxtLink to="/seafarer" class="hover:text-cyan-300 transition">Seafarer Panel</NuxtLink></li>
              <li><NuxtLink to="/institute" class="hover:text-cyan-300 transition">Maritime Academy Portal</NuxtLink></li>
              <li><NuxtLink to="/admin" class="hover:text-cyan-300 transition">Statutory Admin Console</NuxtLink></li>
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
            <span aria-hidden="true">&bull;</span>
            <span class="text-slate-400">CIP Grade A1 Outstanding</span>
            <span aria-hidden="true">&bull;</span>
            <span class="text-slate-400">DG / UK MCA Compliant</span>
          </div>
        </div>

      </div>
    </footer>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- 13. INTERACTIVE MODALS (Admission, Video, Prospectus)           -->
    <!-- ═════════════════════════════════════════════════════════════════ -->

    <!-- Modal 1: Quick Admission Apply Modal -->
    <div v-if="openAdmissionModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button @click="openAdmissionModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold" aria-label="Close admission modal">✕</button>
        
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black" aria-hidden="true">⚓</div>
          <div>
            <h3 id="modal-title" class="text-lg font-black text-slate-900">MTI Pre-Sea &amp; Cadetship Admission</h3>
            <p class="text-xs text-slate-500">Intake 2026 • Limited Class Quota</p>
          </div>
        </div>

        <form @submit.prevent="submitModalAdmission" class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Candidate Name *</label>
            <input v-model="modalForm.name" type="text" required placeholder="Full name as per Matric / Passport" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">WhatsApp No. *</label>
              <input v-model="modalForm.whatsapp" type="tel" required placeholder="+92 336 1234567" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Date of Birth</label>
              <input v-model="modalForm.dob" type="date" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Desired Program *</label>
            <select v-model="modalForm.program" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none">
              <option>GP-III Pre-Sea Rating Course</option>
              <option>Advance Diploma in Nautical Science (Deck)</option>
              <option>Advance Diploma in Marine Engineering</option>
              <option>GMDSS General Operator Certificate</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Educational Qualification</label>
            <select v-model="modalForm.education" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none">
              <option>Matriculation / O-Levels (Science)</option>
              <option>Intermediate / F.Sc (Pre-Engineering)</option>
              <option>Graduation / B.Sc</option>
              <option>Existing CDC Holder / Rating</option>
            </select>
          </div>

          <div v-if="modalSubmitted" class="p-2.5 bg-emerald-50 text-emerald-800 font-bold rounded-lg text-center" role="alert">
            ✓ Registration initiated! Our admissions officer will message your WhatsApp with the Entry Test Date.
          </div>

          <button type="submit" class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider rounded-xl mt-2 transition focus:outline-none focus:ring-2 focus:ring-amber-500">
            Submit Application
          </button>
        </form>
      </div>
    </div>

    <!-- Modal 2: Campus & Simulator Video Modal -->
    <div v-if="openVideoModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
      <div class="bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-700 relative text-white">
        <button @click="openVideoModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold" aria-label="Close video tour modal">✕</button>
        <h3 id="video-modal-title" class="text-lg font-black mb-2">Maritime Training Institute • Campus &amp; Simulator Tour</h3>
        <p class="text-xs text-slate-300 mb-4">A virtual walkthrough of our full-mission bridge, engine room, and survival grounds.</p>
        
        <div class="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80" alt="Full Mission Simulator Screen Tour" class="w-full h-full object-cover opacity-60" />
          <div class="absolute text-center p-4">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xl font-black" aria-hidden="true">▶</div>
            <div class="text-sm font-bold">Full Virtual Simulation Video Tour</div>
            <div class="text-xs text-slate-300 mt-1">Simulating night passage through Dover Strait with adverse sea conditions.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3: Prospectus 2026 Download Modal -->
    <div v-if="openProspectusModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs" role="dialog" aria-modal="true" aria-labelledby="prospectus-title">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative text-center">
        <button @click="openProspectusModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold" aria-label="Close prospectus modal">✕</button>
        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl" aria-hidden="true">📥</div>
        <h3 id="prospectus-title" class="text-lg font-black text-slate-900">Download Prospectus 2026</h3>
        <p class="text-xs text-slate-500 mt-1 mb-5">Contains complete curriculum details, fee schedule, simulator specifications, and placement records.</p>
        
        <div class="space-y-2">
          <a
            href="/logo-crest.png"
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

// ── Simulator Suites Data (for LandingSimulatorCards component) ───────────────
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
