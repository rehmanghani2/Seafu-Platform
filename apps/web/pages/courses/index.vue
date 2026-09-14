<template>
  <div class="bg-slate-50 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb & Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-extrabold text-slate-900">DG-Approved Course Discovery</h1>
        <p class="text-sm text-slate-600 mt-1">
          Explore and compare verified Merchant Navy courses, schedules, and real-time seat availability.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Filters -->
        <div class="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 class="font-bold text-slate-900 text-sm">Filters</h3>
            <button @click="resetFilters" class="text-xs text-ocean-600 hover:text-ocean-700 font-medium">
              Reset All
            </button>
          </div>

          <!-- Search Filter -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Search Keyword</label>
            <input
              v-model="filters.search"
              type="text"
              placeholder="e.g. PST, Fire Fighting, GMDSS"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            />
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Course Category</label>
            <select
              v-model="filters.category"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            >
              <option value="">All Categories</option>
              <option value="STCW_BASIC">STCW Basic Safety</option>
              <option value="STCW_ADVANCED">STCW Advanced Modular</option>
              <option value="REFRESHER">Refresher Training</option>
              <option value="SIMULATOR">Simulator Courses</option>
              <option value="OFFSHORE">Offshore & Specialized</option>
              <option value="COMPETENCY">Competency Courses</option>
            </select>
          </div>

          <!-- Location Filter -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Training Location</label>
            <select
              v-model="filters.city"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            >
              <option value="">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Kochi">Kochi</option>
              <option value="Goa">Goa</option>
              <option value="Delhi-NCR">Delhi-NCR</option>
            </select>
          </div>

          <!-- DG Approved Only Toggle -->
          <div class="flex items-center space-x-2 pt-2">
            <input
              id="dg-only"
              v-model="filters.isDgApproved"
              type="checkbox"
              class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-500"
            />
            <label for="dg-only" class="text-xs font-medium text-slate-700">
              DG Shipping Approved Only
            </label>
          </div>

          <!-- Sort Order -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Sort By</label>
            <select
              v-model="filters.sortBy"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            >
              <option value="date_asc">Upcoming Date (Earliest)</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Courses Grid -->
        <div class="lg:col-span-3 space-y-6">
          <div v-if="filteredCourses.length === 0" class="bg-white p-12 text-center rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">??</div>
            <h3 class="text-lg font-bold text-slate-800">No courses match your criteria</h3>
            <p class="text-xs text-slate-500 mt-1">Try clearing some filters or searching with a different keyword.</p>
            <button @click="resetFilters" class="mt-4 px-4 py-2 bg-ocean-600 text-white text-xs font-medium rounded-lg">
              Reset Filters
            </button>
          </div>

          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-ocean-300 transition flex flex-col md:flex-row justify-between gap-6"
          >
            <div class="flex-grow">
              <div class="flex items-center space-x-2 mb-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-ocean-100 text-ocean-800 uppercase tracking-wide">
                  {{ course.category.replace('_', ' ') }}
                </span>
                <span v-if="course.isDgApproved" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  ??? DG Approved
                </span>
                <span class="text-xs text-slate-400 font-mono">{{ course.code }}</span>
              </div>

              <h2 class="text-lg font-bold text-slate-900 hover:text-ocean-600 transition">
                <NuxtLink :to="`/courses/${course.id}`">{{ course.title }}</NuxtLink>
              </h2>
              <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                {{ course.description }}
              </p>

              <div class="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs text-slate-500">
                <span>?? <strong class="text-slate-700">{{ course.institute.name }}</strong> ({{ course.institute.city }})</span>
                <span>?? Duration: <strong>{{ course.durationDays }} Days</strong></span>
                <span v-if="course.batches && course.batches[0]" class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  ??? Next Batch: <strong>{{ formatDate(course.batches[0].startDate) }}</strong>
                </span>
              </div>
            </div>

            <!-- Price & Action Column -->
            <div class="flex flex-col justify-between items-end min-w-[160px] border-t md:border-t-0 md:border-l md:pl-6 border-slate-100 pt-4 md:pt-0">
              <div class="text-right">
                <span class="text-xs text-slate-400 block">Starting from</span>
                <span class="text-2xl font-black text-slate-900 font-mono">? {{ course.basePrice.toLocaleString() }}</span>
              </div>

              <NuxtLink
                :to="`/courses/${course.id}`"
                class="w-full md:w-auto text-center px-4 py-2 bg-ocean-600 hover:bg-ocean-700 text-white text-xs font-semibold rounded-lg transition shadow-sm"
              >
                View Batches &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const filters = ref({
  search: '',
  category: '',
  city: '',
  isDgApproved: true,
  sortBy: 'date_asc',
});

function resetFilters() {
  filters.value = {
    search: '',
    category: '',
    city: '',
    isDgApproved: false,
    sortBy: 'date_asc',
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Mock initial data representation for catalog display & SSR
const dummyCourses = ref([
  {
    id: 'course-pst-01',
    title: 'Personal Survival Techniques (PST)',
    code: 'STCW-PST-01',
    category: 'STCW_BASIC',
    isDgApproved: true,
    description: 'Mandatory STCW basic safety training providing practical techniques for emergency abandonment and survival at sea.',
    durationDays: 3,
    basePrice: 4500,
    institute: {
      id: 'inst-01',
      name: 'Anglo-Eastern Maritime Training Academy',
      city: 'Mumbai',
    },
    batches: [
      { id: 'batch-01', startDate: '2026-09-22T09:00:00Z', availableSeats: 12 },
    ],
  },
  {
    id: 'course-aff-02',
    title: 'Advanced Fire Fighting (AFF)',
    code: 'STCW-AFF-02',
    category: 'STCW_ADVANCED',
    isDgApproved: true,
    description: 'Advanced modular fire fighting training for certified officers taking command of shipboard fire teams.',
    durationDays: 5,
    basePrice: 8500,
    institute: {
      id: 'inst-02',
      name: 'Southern Maritime Institute of Technology',
      city: 'Chennai',
    },
    batches: [
      { id: 'batch-02', startDate: '2026-09-25T09:00:00Z', availableSeats: 6 },
    ],
  },
  {
    id: 'course-gmdss-03',
    title: 'GMDSS General Operator Certificate (GOC)',
    code: 'STCW-GMDSS-03',
    category: 'COMPETENCY',
    isDgApproved: true,
    description: 'Comprehensive maritime satellite radio communication training for ocean-going navigational officers.',
    durationDays: 12,
    basePrice: 28000,
    institute: {
      id: 'inst-01',
      name: 'Anglo-Eastern Maritime Training Academy',
      city: 'Mumbai',
    },
    batches: [
      { id: 'batch-03', startDate: '2026-10-05T09:00:00Z', availableSeats: 8 },
    ],
  },
  {
    id: 'course-pfrb-04',
    title: 'Proficiency in Fast Rescue Boats (PFRB)',
    code: 'STCW-PFRB-04',
    category: 'STCW_ADVANCED',
    isDgApproved: true,
    description: 'Specialized high-speed boat launch and rescue maneuvering course conducted on open coastal waters.',
    durationDays: 3,
    basePrice: 11000,
    institute: {
      id: 'inst-03',
      name: 'Goa Offshore & Safety Center',
      city: 'Goa',
    },
    batches: [
      { id: 'batch-04', startDate: '2026-10-08T09:00:00Z', availableSeats: 4 },
    ],
  },
]);

const filteredCourses = computed(() => {
  return dummyCourses.value.filter((c) => {
    if (filters.value.category && c.category !== filters.value.category) return false;
    if (filters.value.city && c.institute.city !== filters.value.city) return false;
    if (filters.value.isDgApproved && !c.isDgApproved) return false;
    if (filters.value.search) {
      const q = filters.value.search.toLowerCase();
      const match =
        c.title.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
});
</script>
