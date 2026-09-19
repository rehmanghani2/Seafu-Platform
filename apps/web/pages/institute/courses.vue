<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/institute/dashboard" class="flex items-center space-x-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm">/</span>
          <span class="hidden sm:inline-block text-xs font-semibold text-slate-600">Course Catalog &amp; Syllabus</span>
        </div>

        <div class="flex items-center space-x-3">
          <NuxtLink
            to="/institute/courses/create"
            class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Academy Course Catalog &amp; Syllabus Editor
            </h1>
            <p class="text-xs text-slate-500 mt-1">
              Configure DG-approved Merchant Navy curriculum, simulator hours, tuition fees, and admission prerequisites.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
              18 DG Approved
            </span>
          </div>
        </div>

        <!-- Search & Category Filters -->
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <div class="relative w-full sm:flex-1">
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by course title, code (e.g. GP-III, BRM, AFF, ECDIS)..."
              class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
          </div>

          <select
            v-model="filterCategory"
            class="w-full sm:w-52 px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 font-medium"
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
            class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div class="relative h-44 bg-slate-100 overflow-hidden">
                <img :src="course.image" :alt="course.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div class="absolute top-3 left-3 flex items-center space-x-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/95 text-slate-800 shadow-xs">
                    {{ course.code }}
                  </span>
                  <span v-if="course.dgApproved" class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                    DG Approved
                  </span>
                </div>
                <span class="absolute bottom-3 right-3 text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-[#0A1936]/90 text-white backdrop-blur-xs">
                  PKR {{ course.price.toLocaleString() }}
                </span>
              </div>

              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between text-[11px] text-slate-500">
                  <span class="font-medium uppercase tracking-wider text-[10px] text-slate-400">{{ course.category }}</span>
                  <span class="font-bold text-blue-700 font-mono">{{ course.duration }}</span>
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

            <!-- Card Actions -->
            <div class="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold flex items-center space-x-1" :class="course.active ? 'text-emerald-700' : 'text-slate-400'">
                <span class="w-1.5 h-1.5 rounded-full" :class="course.active ? 'bg-emerald-500' : 'bg-slate-400'"></span>
                <span>{{ course.active ? 'Publicly Listed' : 'Draft Mode' }}</span>
              </span>

              <div class="flex items-center space-x-2">
                <button
                  @click="editCourse(course)"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition"
                >
                  Edit Syllabus
                </button>
                <NuxtLink
                  to="/institute/batches"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition flex items-center space-x-1"
                >
                  <span>+</span>
                  <span>Batch</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Edit Course Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Edit Course Syllabus</h3>
            <p class="text-xs text-slate-500">{{ editingCourse?.code }}</p>
          </div>
          <button @click="showEditModal = false" class="text-slate-400 hover:text-slate-700 font-bold text-sm">✕</button>
        </div>

        <div v-if="editingCourse" class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Course Title</label>
            <input
              v-model="editingCourse.title"
              type="text"
              class="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
            />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tuition Fee (PKR)</label>
            <input
              v-model.number="editingCourse.price"
              type="number"
              class="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none"
            />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Description &amp; Objectives</label>
            <textarea
              v-model="editingCourse.description"
              rows="3"
              class="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none leading-relaxed"
            ></textarea>
          </div>
        </div>

        <div class="pt-2 flex justify-end space-x-2 border-t border-slate-100">
          <button
            @click="showEditModal = false"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Cancel
          </button>
          <button
            @click="saveCourseEdit"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs"
          >
            Save Changes
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
  title: 'Course Catalog & Syllabus &bull; Academy Console',
});

const searchQuery = ref('');
const filterCategory = ref('ALL');
const showEditModal = ref(false);
const editingCourse = ref<any>(null);

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

function editCourse(course: any) {
  editingCourse.value = { ...course };
  showEditModal.value = true;
}

function saveCourseEdit() {
  const idx = courses.value.findIndex((c) => c.id === editingCourse.value?.id);
  if (idx !== -1) {
    courses.value[idx] = { ...editingCourse.value };
  }
  showEditModal.value = false;
}
</script>
