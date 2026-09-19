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
              <span class="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">CAREER PLACEMENT</span>
            </div>
            <h1 class="text-lg font-bold text-slate-900 tracking-tight leading-none mt-0.5">Job Applications &amp; Openings</h1>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/seafarer/resume"
            class="text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition shadow-2xs flex items-center space-x-1.5"
          >
            <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>Update Digital CV</span>
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
        <main class="lg:col-span-10 space-y-8">

          <!-- ── SECTION 1: KANBAN APPLICATION PIPELINE ──────────────────── -->
          <section class="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-2xs" aria-labelledby="pipeline-heading">
            <div class="flex items-center justify-between mb-5">
              <div>
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  APPLICATION STATUS
                </span>
                <h2 id="pipeline-heading" class="text-lg font-bold text-slate-900 tracking-tight">
                  My Live Placement Pipeline
                </h2>
              </div>
              <span class="text-xs text-slate-500 font-mono">4 Total Applications</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <!-- Column 1: Applied -->
              <div class="bg-white rounded-2xl p-4 border border-slate-200 space-y-3 shadow-2xs">
                <div class="flex items-center justify-between text-xs font-bold text-slate-700 pb-2 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span>Applied</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">2</span>
                </div>

                <!-- Card 1 -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Apex Tankers Ltd.</span>
                    <span class="text-[10px] text-slate-400 font-mono">2d ago</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 leading-snug">Third Officer (Chemical Tankers)</h3>
                  <div class="text-xs text-slate-500">VLCC Fleet &bull; 160,000 DWT</div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-200/60">
                    <span class="text-[11px] font-semibold text-slate-600">Screening stage</span>
                    <button
                      @click="openChatModal({ recruiter: 'Capt. Roger Hayes', company: 'Apex Tankers Ltd.', role: 'Third Officer' })"
                      class="p-1.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 border border-slate-200 transition"
                      title="Chat with Recruiter"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pacific Maritime Pte</span>
                    <span class="text-[10px] text-slate-400 font-mono">5d ago</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 leading-snug">Junior Deck Officer</h3>
                  <div class="text-xs text-slate-500">Bulk Carrier &bull; Panama Flag</div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-200/60">
                    <span class="text-[11px] font-semibold text-slate-600">Documents verified</span>
                    <button
                      @click="openChatModal({ recruiter: 'Capt. Roger Hayes', company: 'Pacific Maritime Pte', role: 'Junior Deck Officer' })"
                      class="p-1.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 border border-slate-200 transition"
                      title="Chat with Recruiter"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Column 2: Shortlisted -->
              <div class="bg-white rounded-2xl p-4 border border-blue-200 space-y-3 shadow-2xs">
                <div class="flex items-center justify-between text-xs font-bold text-slate-700 pb-2 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
                    <span>Shortlisted</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#38BDF8] text-white">1</span>
                </div>

                <!-- Card -->
                <div class="bg-blue-50/50 border border-blue-200 rounded-xl p-4 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700">Global Container Lines</span>
                    <span class="text-[10px] text-slate-400 font-mono">1w ago</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 leading-snug">Deck Cadet &bull; Ultra Large Container</h3>
                  <div class="text-xs text-slate-500">24,000 TEU &bull; Europe-Asia Route</div>
                  <div class="p-2.5 bg-blue-100/70 rounded-lg text-[11px] text-blue-900 font-semibold">
                    Technical Interview: Tomorrow at 10:00 UTC
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-blue-200/60">
                    <span class="text-[11px] font-bold text-blue-700">Interview Pending</span>
                    <button
                      @click="openChatModal({ recruiter: 'Sarah Jenkins', company: 'Global Container Lines', role: 'Deck Cadet' })"
                      class="p-1.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                      title="Chat with Recruiter"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Column 3: Selected -->
              <div class="bg-white rounded-2xl p-4 border border-emerald-200 space-y-3 shadow-2xs">
                <div class="flex items-center justify-between text-xs font-bold text-slate-700 pb-2 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Selected</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">1</span>
                </div>

                <!-- Card -->
                <div class="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Atlantic Maritime</span>
                    <span class="text-[10px] text-slate-400 font-mono">2w ago</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 leading-snug">Junior Officer Pool &bull; Tanker Fleet</h3>
                  <div class="text-xs text-slate-500">Contract Signed &bull; Pre-Sea Induction</div>
                  <div class="p-2.5 bg-emerald-100/70 rounded-lg text-[11px] text-emerald-900 font-semibold">
                    Sign-on Scheduled: 01 Nov 2026
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-emerald-200/60">
                    <span class="text-[11px] font-bold text-emerald-600">Contract Locked</span>
                    <button
                      @click="openChatModal({ recruiter: 'Capt. Thomas Vance', company: 'Atlantic Maritime', role: 'Fleet Manager' })"
                      class="p-1.5 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition"
                      title="Chat with Fleet Manager"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ── SECTION 2: OPEN MERCHANT NAVY POSITIONS ────────────────── -->
          <section class="space-y-4" aria-labelledby="openings-heading">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span class="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  VERIFIED VACANCIES
                </span>
                <h2 id="openings-heading" class="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                  Available Openings for Your Credentials
                </h2>
              </div>

              <!-- Rank Filter -->
              <div class="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Job Rank Filter">
                <button
                  v-for="rank in ['All Positions', 'Deck Cadet', 'Third Officer', 'Engine Rating']"
                  :key="rank"
                  @click="activeRankFilter = rank"
                  class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-600"
                  :class="activeRankFilter === rank ? 'bg-[#0A1936] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
                >
                  {{ rank }}
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <article
                v-for="job in filteredJobs"
                :key="job.id"
                class="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-start justify-between gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[11px] font-semibold text-blue-700">{{ job.company }}</div>
                      <h3 class="text-base font-bold text-slate-900 mt-0.5">{{ job.title }}</h3>
                      <div class="text-xs text-slate-500 font-medium">{{ job.vesselType }} &bull; {{ job.grt }} &bull; {{ job.flag }}</div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                      {{ job.salary }}
                    </span>
                  </div>

                  <div class="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div class="flex items-center gap-2 text-slate-600">
                      <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>Contract Duration: {{ job.contractLength }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-slate-600">
                      <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      <span>Mandatory STCW: {{ job.stcwRequirement }}</span>
                    </div>
                  </div>
                </div>

                <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-[11px] text-slate-400 font-mono">Posted: {{ job.postedAgo }}</span>
                  <button
                    @click="applyToJob(job)"
                    class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <span>1-Click Apply with Seafu CV</span>
                  </button>
                </div>
              </article>
            </div>
          </section>

        </main>
      </div>
    </div>

    <!-- Recruiter Chat Modal -->
    <div
      v-if="chatModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="chatModalOpen = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 relative flex flex-col h-[500px]">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs">
              {{ activeChatInfo.recruiter.charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm leading-tight">{{ activeChatInfo.recruiter }}</h4>
              <div class="text-[11px] text-slate-400 font-medium">{{ activeChatInfo.company }} &bull; {{ activeChatInfo.role }}</div>
            </div>
          </div>
          <button
            @click="chatModalOpen = false"
            class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Chat History -->
        <div class="flex-1 overflow-y-auto py-4 space-y-3 text-xs">
          <div class="max-w-[80%] p-3 rounded-2xl bg-slate-100 text-slate-800 self-start rounded-tl-none">
            Hello Cadet Mercer! We verified your sea service logs and STCW certifications on the Seafu ledger. We have reviewed your application.
          </div>
          <div class="max-w-[80%] p-3 rounded-2xl bg-[#0A1936] text-white ml-auto rounded-tr-none">
            Thank you! I am prepared for the technical interview and ready for sea deployment.
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
            class="p-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition"
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
import { ref, computed } from 'vue';

useHead({ title: 'Career Placement & Job Applications · Seafarer Panel' });
definePageMeta({ layout: false });

const activeRankFilter = ref('All Positions');

const jobs = ref([
  {
    id: 'j-1',
    company: 'Maersk Line Fleet Management',
    title: 'Deck Officer Cadet (Triple-E Class)',
    vesselType: 'Ultra Large Container Vessel',
    grt: '165,000 GRT',
    flag: 'Denmark (DIS)',
    salary: '$1,200 / mo',
    contractLength: '6 Months (+/- 1)',
    stcwRequirement: 'ECDIS, BRM, BST & Medical',
    postedAgo: '3 days ago',
    rank: 'Deck Cadet',
  },
  {
    id: 'j-2',
    company: 'Teekay Marine Tankers',
    title: 'Third Officer (Suezmax Crude)',
    vesselType: 'Crude Oil Tanker',
    grt: '158,000 DWT',
    flag: 'Bahamas',
    salary: '$3,800 / mo',
    contractLength: '4 Months',
    stcwRequirement: 'AFF, Advanced Oil Tanker Endorsement',
    postedAgo: '4 days ago',
    rank: 'Third Officer',
  },
  {
    id: 'j-3',
    company: 'Anglo-Eastern Ship Management',
    title: 'Junior Deck Officer',
    vesselType: 'Capesize Bulk Carrier',
    grt: '180,000 DWT',
    flag: 'Hong Kong',
    salary: '$2,600 / mo',
    contractLength: '6 Months',
    stcwRequirement: 'GMDSS GOC, ECDIS, PSCRB',
    postedAgo: '1 week ago',
    rank: 'Third Officer',
  },
  {
    id: 'j-4',
    company: 'Scorpio Bulk Carriers',
    title: 'Deck Cadet / Trainee Officer',
    vesselType: 'Ultramax Bulker',
    grt: '64,000 DWT',
    flag: 'Marshall Islands',
    salary: '$1,100 / mo',
    contractLength: '6 Months',
    stcwRequirement: 'BST, Security Awareness, CDC',
    postedAgo: '1 week ago',
    rank: 'Deck Cadet',
  },
]);

const filteredJobs = computed(() => {
  if (activeRankFilter.value === 'All Positions') return jobs.value;
  return jobs.value.filter(j => j.rank === activeRankFilter.value);
});

const chatModalOpen = ref(false);
const activeChatInfo = ref({ recruiter: '', company: '', role: '' });
const newChatMessage = ref('');
const extraChatMessages = ref<string[]>([]);

function openChatModal(info: any) {
  activeChatInfo.value = info;
  extraChatMessages.value = [];
  chatModalOpen.value = true;
}

function sendChatMessage() {
  if (!newChatMessage.value.trim()) return;
  extraChatMessages.value.push(newChatMessage.value);
  newChatMessage.value = '';
}

function applyToJob(job: any) {
  alert(`Application with 1-Click Verified Seafu CV submitted to ${job.company} for "${job.title}". The fleet crewing desk will contact you.`);
}
</script>
