<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="showSyllabusModal = false"
  >
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs" role="banner">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/dashboard"
            class="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xl"
            aria-label="Back to Academy Console Home"
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
            <span class="text-xs font-semibold text-slate-700">Course Catalog &amp; Syllabus</span>
          </nav>
        </div>

        <div class="flex items-center space-x-3">
          <NuxtLink
            to="/institute/courses/create"
            class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>+ Add New Course</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full" role="main">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Academy Course Catalog &amp; Syllabus Editor
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              Configure DG-approved Merchant Navy curriculum, simulator hours, tuition fees, and admission prerequisites.
            </p>
          </div>

          <!-- View Mode & Count -->
          <div class="flex items-center space-x-2">
            <div class="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200" role="group" aria-label="View toggle">
              <button
                @click="viewMode = 'grid'"
                type="button"
                class="p-1.5 rounded-lg text-xs font-semibold transition"
                :class="viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'"
                aria-label="Grid view"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                @click="viewMode = 'list'"
                type="button"
                class="p-1.5 rounded-lg text-xs font-semibold transition"
                :class="viewMode === 'list' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'"
                aria-label="List view"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <span class="text-xs font-mono font-bold text-emerald-900 bg-emerald-100/90 px-3 py-1.5 rounded-xl border border-emerald-200">
              18 DG Approved
            </span>
          </div>
        </div>

        <!-- Filter Category Tabs with Counts -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Course Category Tabs">
          <button
            v-for="cat in categoryTabs"
            :key="cat.id"
            @click="filterCategory = cat.id"
            type="button"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold transition shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none flex items-center space-x-1.5"
            :class="filterCategory === cat.id
              ? 'bg-[#0A1936] text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
            role="tab"
            :aria-selected="filterCategory === cat.id"
          >
            <span>{{ cat.label }}</span>
            <span
              class="text-[10px] font-mono px-1.5 py-0.2 rounded-full"
              :class="filterCategory === cat.id ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-100 text-slate-600'"
            >
              {{ cat.count }}
            </span>
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative w-full">
          <label for="course-search-field" class="sr-only">Search courses</label>
          <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="course-search-field"
            v-model="searchQuery"
            type="text"
            placeholder="Search by course title, IMO code (e.g. GP-III, BRM, AFF, ECDIS)..."
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs placeholder-slate-400"
          />
        </div>

        <!-- Course Cards Grid View -->
        <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div class="relative h-44 bg-slate-100 overflow-hidden">
                <img :src="course.image" :alt="course.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent"></div>
                <div class="absolute top-3 left-3 flex items-center space-x-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/95 text-slate-900 shadow-xs">
                    {{ course.code }}
                  </span>
                  <span v-if="course.dgApproved" class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-700 text-white shadow-xs">
                    DG Approved
                  </span>
                </div>
                <span class="absolute bottom-3 right-3 text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-[#0A1936]/95 text-white backdrop-blur-xs">
                  PKR {{ course.price.toLocaleString() }}
                </span>
              </div>

              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between text-[11px] text-slate-600">
                  <span class="font-semibold uppercase tracking-wider text-[10px] text-slate-500">{{ course.category }}</span>
                  <span class="font-bold text-blue-700 font-mono">{{ course.duration }}</span>
                </div>
                <h2 class="text-sm font-bold text-slate-900 leading-snug">{{ course.title }}</h2>
                <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">{{ course.description }}</p>

                <div class="pt-2 flex flex-wrap gap-1.5">
                  <span v-for="lab in course.labs" :key="lab" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    {{ lab }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold flex items-center space-x-1.5 text-emerald-800">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
                <span>Publicly Listed</span>
              </span>

              <div class="flex items-center space-x-2">
                <button
                  @click="inspectSyllabus(course)"
                  type="button"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                >
                  Syllabus
                </button>
                <NuxtLink
                  to="/institute/batches"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                >
                  <span>+ Batch</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Course Compact Table List View -->
        <div v-else class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs" aria-label="Course list">
              <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-5 py-3.5">CODE &bull; PROGRAM</th>
                  <th scope="col" class="px-5 py-3.5">CATEGORY</th>
                  <th scope="col" class="px-5 py-3.5">DURATION</th>
                  <th scope="col" class="px-5 py-3.5">FACILITIES</th>
                  <th scope="col" class="px-5 py-3.5">TUITION FEE</th>
                  <th scope="col" class="px-5 py-3.5">ACCREDITATION</th>
                  <th scope="col" class="px-5 py-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="c in filteredCourses" :key="c.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-900">{{ c.title }}</div>
                    <div class="text-[11px] font-mono text-blue-700 font-semibold">{{ c.code }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-600 font-medium">{{ c.category }}</td>
                  <td class="px-5 py-4 font-mono text-slate-800">{{ c.duration }}</td>
                  <td class="px-5 py-4 text-slate-600">
                    <span v-for="lab in c.labs" :key="lab" class="inline-block mr-1 text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {{ lab }}
                    </span>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-900">PKR {{ c.price.toLocaleString() }}</td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      DG Approved
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      @click="inspectSyllabus(c)"
                      type="button"
                      class="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition"
                    >
                      Syllabus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal: Interactive Syllabus & Curriculum Viewer -->
    <div
      v-if="showSyllabusModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="syllabus-modal-title"
      @click.self="showSyllabusModal = false"
    >
      <div class="max-w-xl w-full bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
              {{ selectedCourse?.code }}
            </span>
            <h3 id="syllabus-modal-title" class="text-base font-bold text-slate-900 mt-1">
              {{ selectedCourse?.title }}
            </h3>
          </div>
          <button
            @click="showSyllabusModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close syllabus modal"
          >
            ✕
          </button>
        </div>

        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">DURATION</div>
            <div class="text-sm font-bold text-slate-900 font-mono mt-0.5">{{ selectedCourse?.duration }}</div>
          </div>
          <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
            <div class="text-[10px] font-mono font-bold text-blue-700 uppercase">SIMULATOR LAB</div>
            <div class="text-sm font-bold text-blue-900 font-mono mt-0.5">60% Practical</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">TUITION FEE</div>
            <div class="text-sm font-bold text-slate-900 font-mono mt-0.5">PKR {{ selectedCourse?.price.toLocaleString() }}</div>
          </div>
        </div>

        <div class="space-y-3 text-xs">
          <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Key Curriculum Modules</h4>
          <div class="space-y-2">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
              <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <div>
                <strong class="text-slate-900 block">Bridge Team Dynamics &amp; Human Factor (IMO 1.22)</strong>
                <span class="text-slate-600 leading-relaxed">Error management, master-pilot relationship, situational awareness, and communication under stress.</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
              <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <div>
                <strong class="text-slate-900 block">Restricted Waters &amp; Heavy Weather Ship Handling</strong>
                <span class="text-slate-600 leading-relaxed">Full-mission bridge simulator exercises on channel transit, squat effect, and anchor work.</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
              <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
              <div>
                <strong class="text-slate-900 block">Collision Avoidance Under COLREGs Rule 19</strong>
                <span class="text-slate-600 leading-relaxed">Radar plotting, ARPA target tracking, and electronic navigation anomalies handling.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
          <button
            @click="showSyllabusModal = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Close
          </button>
          <NuxtLink
            to="/institute/batches"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Schedule Batch for this Course &rarr;
          </NuxtLink>
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
  title: 'Course Catalog & Syllabus &bull; Academy Console',
});

const viewMode = ref<'grid' | 'list'>('grid');
const searchQuery = ref('');
const filterCategory = ref('ALL');
const showSyllabusModal = ref(false);
const selectedCourse = ref<any>(null);

const categoryTabs = [
  { id: 'ALL', label: 'All Programs', count: 6 },
  { id: 'PRE_SEA', label: 'Pre-Sea Rating', count: 1 },
  { id: 'HND', label: 'Advance Diploma', count: 2 },
  { id: 'SIMULATOR', label: 'Simulator Suites', count: 2 },
  { id: 'STCW_MODULAR', label: 'STCW Modular', count: 1 },
];

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
      c.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      filterCategory.value === 'ALL' || c.category === filterCategory.value;
    return matchesSearch && matchesCategory;
  });
});

function inspectSyllabus(course: any) {
  selectedCourse.value = course;
  showSyllabusModal.value = true;
}
</script>
