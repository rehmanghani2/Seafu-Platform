<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white pb-24">
    <!-- Header -->
    <header class="border-b border-slate-200 bg-white px-6 py-4 sticky top-0 z-30 shadow-xs">
      <div class="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="w-8 h-8 shrink-0">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
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
          </NuxtLink>
          <div>
            <div class="flex items-center gap-2">
              <NuxtLink to="/seafarer/dashboard" class="text-xs font-semibold text-blue-700 hover:underline">
                Seafarer Panel
              </NuxtLink>
              <span class="text-slate-300">&bull;</span>
              <span class="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">COURSE DISCOVERY</span>
            </div>
            <h1 class="text-lg font-bold text-slate-900 tracking-tight leading-none mt-0.5">Maritime Training &amp; Escrow Booking</h1>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/seafarer/vault"
            class="text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition shadow-2xs flex items-center space-x-1.5"
          >
            <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>My Verified Vault</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <!-- Sidebar Navigation -->
        <div class="lg:col-span-2">
          <SeafarerSidebarNav />
        </div>

        <!-- Main Workspace -->
        <main class="lg:col-span-10 space-y-6">

          <!-- ── OMNISEARCH COMMAND BAR ────────────────────────────────────── -->
          <div class="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
            <form @submit.prevent class="grid grid-cols-1 md:grid-cols-12 gap-3">
              <!-- Search input -->
              <div class="md:col-span-4 bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 border border-slate-200">
                <svg class="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <div class="flex-1 min-w-0">
                  <label for="course-query" class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Course Title or STCW Rule</label>
                  <input
                    id="course-query"
                    v-model="searchQuery"
                    type="text"
                    placeholder="e.g. AFF Refresher, ECDIS, BRM, GMDSS..."
                    class="w-full bg-transparent text-slate-900 text-xs font-semibold focus:outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <!-- Port / Academy Location -->
              <div class="md:col-span-3 bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 border border-slate-200">
                <svg class="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div class="flex-1 min-w-0">
                  <label for="course-location" class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Training Port / Region</label>
                  <select
                    id="course-location"
                    v-model="selectedLocation"
                    class="w-full bg-transparent text-slate-900 text-xs font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="ALL">All Global Ports</option>
                    <option value="Mumbai">Mumbai / Navi Mumbai</option>
                    <option value="Karachi">Karachi Marine Complex</option>
                    <option value="Glasgow">City of Glasgow (UK)</option>
                    <option value="Singapore">Singapore Maritime Port</option>
                  </select>
                </div>
              </div>

              <!-- Batch Schedule Window -->
              <div class="md:col-span-3 bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 border border-slate-200">
                <svg class="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <div class="flex-1 min-w-0">
                  <label for="course-batch" class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Joining Batch</label>
                  <select
                    id="course-batch"
                    v-model="selectedBatchWindow"
                    class="w-full bg-transparent text-slate-900 text-xs font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="ANY">Any Upcoming Batch</option>
                    <option value="IMMEDIATE">Starting Next 7 Days</option>
                    <option value="NEXT_MONTH">Next Month Intake</option>
                    <option value="PRE_SEA">Cadet Intake 2026</option>
                  </select>
                </div>
              </div>

              <!-- Reset Button -->
              <div class="md:col-span-2 flex">
                <button
                  type="button"
                  @click="resetFilters"
                  class="w-full bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 py-3 transition shadow-xs"
                >
                  <span>Reset Search</span>
                </button>
              </div>
            </form>

            <!-- Category Filter Pills -->
            <div class="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200/80 flex-wrap" role="tablist" aria-label="Course Category Tabs">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = cat"
                class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-600"
                :class="selectedCategory === cat ? 'bg-[#0A1936] text-white shadow-xs' : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'"
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- ── COURSES CATALOG GRID ────────────────────────────────────── -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              v-for="course in filteredCourses"
              :key="course.id"
              class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div class="h-44 bg-slate-100 relative overflow-hidden">
                  <img
                    :src="course.image"
                    :alt="course.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold shadow" :class="course.badgeClass">
                    {{ course.badge }}
                  </span>
                  <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-slate-900 shadow">
                    {{ course.seatsLeft }} Seats Left
                  </span>
                </div>

                <div class="p-5 space-y-2">
                  <span class="text-[11px] font-semibold text-blue-700 block">
                    {{ course.academy }} &bull; {{ course.location }}
                  </span>
                  <h3 class="text-base font-bold text-slate-900 leading-tight">
                    {{ course.title }}
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {{ course.description }}
                  </p>

                  <!-- Modules summary -->
                  <div class="pt-2 flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                    <span>Duration: {{ course.duration }}</span>
                    <span>&bull;</span>
                    <span>{{ course.stcwRef }}</span>
                  </div>
                </div>
              </div>

              <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <div>
                  <span class="text-[10px] text-slate-400 uppercase font-semibold block">Fee (Escrow Protected)</span>
                  <span class="font-mono font-bold text-slate-900 text-sm">{{ course.fee }}</span>
                </div>
                <button
                  @click="openBookingModal(course)"
                  class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  Book Now
                </button>
              </div>
            </article>
          </div>

          <!-- Empty State -->
          <div v-if="!filteredCourses.length" class="p-16 text-center bg-white rounded-2xl border border-slate-200">
            <p class="text-slate-500 text-sm">No maritime courses found matching your filter criteria.</p>
            <button
              @click="resetFilters"
              class="mt-3 text-xs font-semibold text-blue-700 hover:underline"
            >
              Clear all filters
            </button>
          </div>

        </main>
      </div>
    </div>

    <!-- ── COURSE BOOKING & ESCROW PAYMENT MODAL ─────────────────────── -->
    <div
      v-if="bookingModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-booking-modal-title"
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
              <h3 id="course-booking-modal-title" class="text-lg font-bold text-slate-900 leading-snug">
                {{ selectedCourse.title }}
              </h3>
              <p class="text-xs text-slate-500">{{ selectedCourse.academy }} &bull; {{ selectedCourse.location }}</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-600">
              <span>Standard Course Tuition:</span>
              <span class="font-bold text-slate-900 font-mono">{{ selectedCourse.fee }}</span>
            </div>
            <div class="flex items-center justify-between text-slate-600">
              <span>STCW Examination &amp; Flag State Roster Fee:</span>
              <span class="font-bold text-slate-900 font-mono">Included</span>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-slate-200 font-bold text-sm text-slate-900">
              <span>Total Payable (Escrow Protected):</span>
              <span class="text-blue-700 font-mono">{{ selectedCourse.fee }}</span>
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
              <label for="seafarer-email" class="block font-semibold text-slate-700 mb-1.5">Candidate Email for Receipt &amp; Voucher</label>
              <input
                id="seafarer-email"
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
                Funds remain secured in <strong>The Seafu Escrow</strong> until batch completion and cryptographic vault certificate upload.
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
            Your registration for <strong>{{ selectedCourse.title }}</strong> is confirmed. An official entry pass has been emailed to {{ billingEmail }}.
          </p>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 text-center">
            Escrow Tx: 0xSEAFU-{{ Math.random().toString(36).substring(2, 9).toUpperCase() }}
          </div>
          <button
            @click="bookingModalOpen = false"
            class="mt-3 px-6 py-2.5 rounded-xl bg-[#0A1936] text-white font-semibold text-xs transition"
          >
            Back to Course List
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

useHead({ title: 'Course Discovery & Booking · Seafarer Panel' });
definePageMeta({ layout: false });

const searchQuery = ref('');
const selectedLocation = ref('ALL');
const selectedBatchWindow = ref('ANY');
const selectedCategory = ref('All Programs');

const categories = [
  'All Programs',
  'STCW Refresher',
  'Simulator Labs',
  'Deck Cadetship',
  'Marine Engineering',
  'Safety & Survival',
];

const courses = ref([
  {
    id: 'c-brm',
    title: 'Bridge Resource Management (BRM)',
    academy: 'Global Maritime Academy',
    location: 'Mumbai',
    category: 'Simulator Labs',
    description: 'Advanced navigation team coordination, bridge procedures, situational awareness, and passage planning under emergency drills.',
    duration: '5 Days',
    stcwRef: 'STCW A-II/1 & A-II/2',
    fee: '$650.00',
    seatsLeft: 6,
    badge: 'Fast-Track',
    badgeClass: 'bg-[#0A1936] text-white',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c-aff',
    title: 'Advanced Fire Fighting (AFF) Refresher',
    academy: 'National Maritime Institute',
    location: 'Mumbai',
    category: 'STCW Refresher',
    description: 'Comprehensive practical fire suppression drills, organization of fire parties, breathing apparatus command, and foam systems.',
    duration: '3 Days',
    stcwRef: 'STCW A-VI/3',
    fee: '$480.00',
    seatsLeft: 3,
    badge: 'Mandatory Refresher',
    badgeClass: 'bg-[#78350F] text-amber-100',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c-ecdis',
    title: 'ECDIS Type-Specific Training (Raytheon Anschütz)',
    academy: 'Oceanic Training Hub',
    location: 'Singapore',
    category: 'Simulator Labs',
    description: 'Operational mastery of electronic chart display and information systems conforming to STCW Regulation II/1, II/2, and II/3.',
    duration: '4 Days',
    stcwRef: 'STCW Model 1.27',
    fee: '$350.00',
    seatsLeft: 12,
    badge: 'Specialized',
    badgeClass: 'bg-teal-800 text-white',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c-gmdss',
    title: 'GMDSS General Operator Certificate (GOC)',
    academy: 'Maritime Training Institute (MTI)',
    location: 'Karachi',
    category: 'Deck Cadetship',
    description: 'VHF, MF/HF radio telephony, satellite EPIRB, SART, and NAVTEX operation for international sea routes.',
    duration: '12 Days',
    stcwRef: 'STCW A-IV/2',
    fee: '$820.00',
    seatsLeft: 5,
    badge: 'Flag State Approved',
    badgeClass: 'bg-blue-800 text-white',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c-hnd-eng',
    title: 'High Voltage Marine Installation & Safety',
    academy: 'City of Glasgow College Partner Hub',
    location: 'Glasgow',
    category: 'Marine Engineering',
    description: 'Operational and management safety procedures for 6.6kV marine distribution, circuit breaker maintenance, and isolation permits.',
    duration: '5 Days',
    stcwRef: 'STCW A-III/1 & A-III/2',
    fee: '$950.00',
    seatsLeft: 4,
    badge: 'MCA Compliant',
    badgeClass: 'bg-[#0A1936] text-amber-400',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c-pscrb',
    title: 'Proficiency in Survival Craft & Rescue Boats (PSCRB)',
    academy: 'Maritime Training Academy Mumbai',
    location: 'Mumbai',
    category: 'Safety & Survival',
    description: 'Hands-on freefall lifeboat launching, davit recovery drills, survival craft motor maintenance, and rough sea command.',
    duration: '4 Days',
    stcwRef: 'STCW A-VI/2-1',
    fee: '$410.00',
    seatsLeft: 8,
    badge: 'Refresher Ready',
    badgeClass: 'bg-emerald-800 text-white',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
  },
]);

const filteredCourses = computed(() => {
  return courses.value.filter(c => {
    if (selectedCategory.value !== 'All Programs' && c.category !== selectedCategory.value) {
      return false;
    }
    if (selectedLocation.value !== 'ALL' && !c.location.toLowerCase().includes(selectedLocation.value.toLowerCase())) {
      return false;
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      const match = c.title.toLowerCase().includes(q) ||
        c.academy.toLowerCase().includes(q) ||
        c.stcwRef.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
});

const bookingModalOpen = ref(false);
const selectedCourse = ref<any>({});
const paymentMethod = ref('card');
const billingEmail = ref('alex.mercer@seafu.org');
const bookingConfirmed = ref(false);

function openBookingModal(course: any) {
  selectedCourse.value = course;
  bookingConfirmed.value = false;
  bookingModalOpen.value = true;
}

function confirmBooking() {
  bookingConfirmed.value = true;
}

function resetFilters() {
  searchQuery.value = '';
  selectedLocation.value = 'ALL';
  selectedBatchWindow.value = 'ANY';
  selectedCategory.value = 'All Programs';
}
</script>
