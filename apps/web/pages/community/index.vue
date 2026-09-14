<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- ── HERO HEADER ───────────────────────────────────────────────── -->
    <div class="border-b" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-7xl mx-auto px-4 py-5">
        <div class="flex items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
              <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · COMMUNITY HUB</span>
            </div>
            <h1 class="text-2xl font-bold" style="color:#e2e8f0;">Maritime Knowledge Forum</h1>
            <p class="text-sm mt-0.5" style="color:#64748b;">
              Verified seafarers sharing regulations, career insights, PSC tips & more
            </p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <!-- Stats badges -->
            <div class="hidden md:flex gap-3">
              <div class="text-center px-4 py-2 rounded-lg" style="background:#0c1a2e;">
                <div class="text-lg font-black" style="color:#00E5FF;">4.2K</div>
                <div class="text-xs" style="color:#475569;">Discussions</div>
              </div>
              <div class="text-center px-4 py-2 rounded-lg" style="background:#0c1a2e;">
                <div class="text-lg font-black" style="color:#00E5FF;">18K</div>
                <div class="text-xs" style="color:#475569;">Members</div>
              </div>
            </div>
            <NuxtLink to="/community/create"
              class="px-4 py-2.5 rounded-xl font-bold text-sm transition"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              + New Discussion
            </NuxtLink>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-2 mt-5 overflow-x-auto pb-1 scrollbar-hide">
          <button v-for="cat in categories" :key="cat.value"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition"
            :style="activeCategory === cat.value
              ? 'background:#0369A1; color:#fff;'
              : 'background:#0c1a2e; color:#64748b; border:1px solid #1e3a5f;'"
            @click="setCategory(cat.value)">
            {{ cat.icon }} {{ cat.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-6 flex gap-6">
      <!-- ── MAIN FEED ──────────────────────────────────────────────── -->
      <div class="flex-1 min-w-0">
        <!-- Sort + Search Row -->
        <div class="flex items-center gap-3 mb-4">
          <div class="relative flex-1 max-w-sm">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-base" style="color:#475569;">⌕</span>
            <input v-model="search" type="text" placeholder="Search discussions..."
              class="w-full pl-8 pr-4 py-2 text-sm rounded-lg border outline-none"
              style="background:#0a1628; border-color:#1e3a5f; color:#e2e8f0;"
              @input="debouncedSearch" />
          </div>
          <div class="flex gap-1.5">
            <button v-for="s in sorts" :key="s.value"
              class="px-3 py-2 text-xs font-medium rounded-lg transition"
              :style="activeSort === s.value
                ? 'background:#0369A120; color:#00E5FF; border:1px solid #0369A140;'
                : 'background:#0a1628; color:#64748b; border:1px solid #1e3a5f;'"
              @click="activeSort = s.value">
              {{ s.icon }} {{ s.label }}
            </button>
          </div>
        </div>

        <!-- Post Cards -->
        <div class="space-y-3">
          <div v-for="post in filteredPosts" :key="post.id"
            class="rounded-xl border transition cursor-pointer group"
            style="background:#0a1628; border-color:#0c1a2e;"
            @click="navigateTo(`/community/${post.id}`)"
            @mouseenter="(e) => (e.currentTarget as HTMLElement).style.borderColor = '#0369A1'"
            @mouseleave="(e) => (e.currentTarget as HTMLElement).style.borderColor = '#0c1a2e'">
            <div class="p-5">
              <div class="flex items-start gap-4">
                <!-- Upvote Column -->
                <div class="flex flex-col items-center gap-1 shrink-0 pt-0.5"
                  @click.stop="upvotePost(post.id)">
                  <button class="w-8 h-8 rounded-lg flex items-center justify-center transition"
                    style="background:#0c1a2e; color:#64748b;"
                    @mouseenter="(e) => { (e.currentTarget as HTMLElement).style.background = '#0369A120'; (e.currentTarget as HTMLElement).style.color = '#00E5FF'; }"
                    @mouseleave="(e) => { (e.currentTarget as HTMLElement).style.background = '#0c1a2e'; (e.currentTarget as HTMLElement).style.color = '#64748b'; }">
                    ▲
                  </button>
                  <span class="text-sm font-bold" style="color:#00E5FF;">{{ post.upvotes }}</span>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <!-- Author + Category -->
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style="background:#0369A120; color:#00E5FF;">
                      {{ post.author.fullName.charAt(0) }}
                    </div>
                    <span class="text-xs font-medium" style="color:#94a3b8;">{{ post.author.fullName }}</span>
                    <span v-if="post.author.rank" class="text-xs" style="color:#475569;">· {{ post.author.rank }}</span>
                    <span v-if="post.author.indosNumber"
                      class="text-xs px-1.5 py-0.5 rounded font-mono"
                      style="background:#22c55e15; color:#22c55e; border:1px solid #22c55e20;">
                      ✓ INDoS
                    </span>
                    <span class="ml-auto text-xs px-2 py-0.5 rounded-full"
                      :style="categoryStyle(post.category)">
                      {{ categoryLabel(post.category) }}
                    </span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-base font-bold mb-1.5 group-hover:text-cyan-300 transition leading-snug"
                    style="color:#e2e8f0;">
                    {{ post.title }}
                  </h3>

                  <!-- Excerpt -->
                  <p class="text-sm leading-relaxed line-clamp-2" style="color:#64748b;">
                    {{ post.content }}
                  </p>

                  <!-- Footer -->
                  <div class="flex items-center gap-4 mt-3">
                    <span class="text-xs flex items-center gap-1" style="color:#475569;">
                      💬 {{ post._count.comments }} replies
                    </span>
                    <span class="text-xs" style="color:#334155;">{{ timeAgo(post.createdAt) }}</span>
                    <span v-if="post.isPinned"
                      class="text-xs px-2 py-0.5 rounded"
                      style="background:#f59e0b20; color:#f59e0b;">
                      📌 Pinned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!filteredPosts.length"
          class="rounded-xl border p-16 text-center mt-4"
          style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-4xl mb-4">🌊</div>
          <h3 class="text-lg font-semibold mb-2" style="color:#94a3b8;">No discussions yet</h3>
          <p class="text-sm mb-4" style="color:#475569;">Be the first to start a conversation in this category</p>
          <NuxtLink to="/community/create"
            class="px-4 py-2 text-sm rounded-lg font-medium"
            style="background:#0369A1; color:#fff;">
            Start Discussion
          </NuxtLink>
        </div>
      </div>

      <!-- ── RIGHT SIDEBAR ─────────────────────────────────────────── -->
      <aside class="w-72 shrink-0 space-y-4">
        <!-- Community Rules Card -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">COMMUNITY RULES</h3>
          <ul class="space-y-2 text-xs" style="color:#64748b;">
            <li class="flex items-start gap-2">
              <span style="color:#0369A1;">①</span> Share verified, regulation-accurate information
            </li>
            <li class="flex items-start gap-2">
              <span style="color:#0369A1;">②</span> Respect fellow seafarers and their experience
            </li>
            <li class="flex items-start gap-2">
              <span style="color:#0369A1;">③</span> No job solicitation — use the Job Board
            </li>
            <li class="flex items-start gap-2">
              <span style="color:#0369A1;">④</span> Cite DG Shipping circulars where applicable
            </li>
            <li class="flex items-start gap-2">
              <span style="color:#0369A1;">⑤</span> Mark solved questions with a ✓ answer
            </li>
          </ul>
        </div>

        <!-- Top Contributors -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">TOP CONTRIBUTORS</h3>
          <div class="space-y-3">
            <div v-for="(member, i) in topContributors" :key="member.name" class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                :style="i === 0 ? 'background:#f59e0b; color:#000;' : i === 1 ? 'background:#94a3b8; color:#000;' : i === 2 ? 'background:#b45309; color:#fff;' : 'background:#0369A120; color:#00E5FF;'">
                {{ i < 3 ? ['🥇','🥈','🥉'][i] : i + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium truncate" style="color:#e2e8f0;">{{ member.name }}</div>
                <div class="text-xs" style="color:#475569;">{{ member.rank }}</div>
              </div>
              <div class="text-xs font-bold" style="color:#00E5FF;">{{ member.posts }} posts</div>
            </div>
          </div>
        </div>

        <!-- Trending Topics -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">TRENDING TOPICS</h3>
          <div class="space-y-2">
            <div v-for="topic in trendingTopics" :key="topic" class="flex items-center gap-2 text-xs cursor-pointer group">
              <span style="color:#0369A1;">#</span>
              <span class="group-hover:text-cyan-400 transition" style="color:#64748b;">{{ topic }}</span>
            </div>
          </div>
        </div>

        <!-- Quick Post CTA -->
        <div class="rounded-xl border p-5" style="background:#0369A110; border-color:#0369A140;">
          <div class="text-sm font-bold mb-1" style="color:#e2e8f0;">Got a question?</div>
          <p class="text-xs mb-3" style="color:#64748b;">
            Ask the community — 18,000+ verified seafarers ready to help
          </p>
          <NuxtLink to="/community/create"
            class="block w-full text-center py-2.5 rounded-lg font-bold text-sm transition"
            style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
            Ask a Question →
          </NuxtLink>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Maritime Community Forum · The Seafu' })

const activeCategory = ref('ALL')
const activeSort = ref('newest')
const search = ref('')

const categories = [
  { value: 'ALL', label: 'All Topics', icon: '🌐' },
  { value: 'STCW_REGULATIONS', label: 'STCW & Regulations', icon: '📋' },
  { value: 'PSC_INSPECTIONS', label: 'PSC Inspections', icon: '🔍' },
  { value: 'CAREER_PROMOTION', label: 'Career & Promotion', icon: '🚀' },
  { value: 'VESSEL_OPERATIONS', label: 'Vessel Operations', icon: '⚓' },
  { value: 'NAVIGATION', label: 'Navigation', icon: '🧭' },
  { value: 'ENGINE_ROOM', label: 'Engine Room', icon: '⚙️' },
  { value: 'MEDICAL_FITNESS', label: 'Medical & Fitness', icon: '🏥' },
  { value: 'CONTRACTS_LEGAL', label: 'Contracts & Legal', icon: '⚖️' },
  { value: 'TRAINING_INSTITUTES', label: 'Training Institutes', icon: '🎓' },
  { value: 'ANNOUNCEMENTS', label: 'Announcements', icon: '📢' },
]

const sorts = [
  { value: 'newest', label: 'New', icon: '🕐' },
  { value: 'top', label: 'Top', icon: '🔥' },
  { value: 'trending', label: 'Trending', icon: '📈' },
]

const posts = ref([
  {
    id: 'post-001',
    title: 'STCW 2010 Manila Amendments — Which certificates are expiring in 2026?',
    content: 'I need clarity on the transition timelines. My BST was issued in 2011 and I have heard conflicting information from different institutes. DG Shipping Circular 12/2024 mentions...',
    category: 'STCW_REGULATIONS',
    upvotes: 142,
    isPinned: true,
    createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    author: { fullName: 'Capt. Arvind Nair', rank: 'Master', indosNumber: 'IND-1234567', role: 'SEAFARER' },
    _count: { comments: 38 },
  },
  {
    id: 'post-002',
    title: 'Rotterdam PSC — They detained us for 3 deficiencies. Sharing the full deficiency list.',
    content: 'We just got released after 48 hours at Rotterdam. The PSC officer was extremely thorough on the lifeboat falls and on-load release gear. Attaching the deficiency codes. ISM Code 7.2 was the critical one...',
    category: 'PSC_INSPECTIONS',
    upvotes: 287,
    isPinned: false,
    createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
    author: { fullName: 'Ch. Off. Ramesh Kumar', rank: 'Chief Officer', indosNumber: 'IND-7654321', role: 'SEAFARER' },
    _count: { comments: 61 },
  },
  {
    id: 'post-003',
    title: 'How long does it realistically take to get CoC Class I in India — 2026 timeline?',
    content: 'I passed my oral exam in March. The MMD office says 3-4 months. My batchmates who appeared before me in January still haven\'t received theirs. Is there a way to track it?',
    category: 'CAREER_PROMOTION',
    upvotes: 95,
    isPinned: false,
    createdAt: new Date(Date.now() - 10 * 3600000).toISOString(),
    author: { fullName: 'Suresh Pillai', rank: '2nd Officer', indosNumber: null, role: 'SEAFARER' },
    _count: { comments: 24 },
  },
  {
    id: 'post-004',
    title: 'Chief Engineer interview tips — What technical questions do VLCC companies ask?',
    content: 'I have an interview with a major tanker company next week for the CE position. They said it would be a technical + scenario-based round. What should I revise? Engine emergency procedures? ISM?',
    category: 'CAREER_PROMOTION',
    upvotes: 178,
    isPinned: false,
    createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    author: { fullName: 'Vijay Krishnamurthy', rank: '2nd Engineer', indosNumber: 'IND-9988776', role: 'SEAFARER' },
    _count: { comments: 45 },
  },
  {
    id: 'post-005',
    title: 'ECDIS type-specific training — Is it mandatory for all vessels from Jan 2026?',
    content: 'I sail on a vessel that got ECDIS installed last year. My company is asking me to complete the type-specific training. DG Shipping has been quiet on this. Is this an IMO mandatory requirement or company policy?',
    category: 'NAVIGATION',
    upvotes: 67,
    isPinned: false,
    createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    author: { fullName: 'Mohan Sharma', rank: '3rd Officer', indosNumber: 'IND-1122334', role: 'SEAFARER' },
    _count: { comments: 19 },
  },
  {
    id: 'post-006',
    title: 'Maritime Training Institute Review — Which AFF course is best in Mumbai?',
    content: 'I need to renew my Advanced Fire Fighting before my next contract. Looking at MERI, FOSMA, and T&T. Has anyone done it recently? Which one has the most practical sessions?',
    category: 'TRAINING_INSTITUTES',
    upvotes: 43,
    isPinned: false,
    createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    author: { fullName: 'Ravi Mehta', rank: 'AB Seaman', indosNumber: null, role: 'SEAFARER' },
    _count: { comments: 12 },
  },
  {
    id: 'post-007',
    title: 'Seafarer\'s CBA and ITF — What rights do we have if the company delays repatriation?',
    content: 'My company has delayed my repatriation by 3 weeks beyond my contract end date. They say it\'s operational. I am now 11 months on board. MLC 2006 says maximum is what?',
    category: 'CONTRACTS_LEGAL',
    upvotes: 221,
    isPinned: false,
    createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
    author: { fullName: 'Gopal Rao', rank: 'Bosun', indosNumber: 'IND-5544332', role: 'SEAFARER' },
    _count: { comments: 73 },
  },
])

const topContributors = [
  { name: 'Capt. Arvind Nair', rank: 'Master Mariner', posts: 214 },
  { name: 'Ch. Eng. Suresh Kumar', rank: 'Chief Engineer', posts: 189 },
  { name: 'Ch. Off. Ramesh K.', rank: 'Chief Officer', posts: 156 },
  { name: 'Vijay Krishnamurthy', rank: '2nd Engineer', posts: 98 },
  { name: 'Mohan Sharma', rank: '3rd Officer', posts: 67 },
]

const trendingTopics = [
  'STCW Manila Amendments 2026',
  'PSC Detention Appeals',
  'CoC Class I Oral Prep',
  'ECDIS Type Specific',
  'MLC 2006 Repatriation',
  'DG Shipping Circulars',
  'Lifeboat Falls Inspection',
  'BRM / ERM Training',
]

const filteredPosts = computed(() => {
  let result = [...posts.value]
  if (activeCategory.value !== 'ALL') result = result.filter(p => p.category === activeCategory.value)
  if (search.value) {
    const q = search.value.toLowerCase()
    result = result.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q))
  }
  if (activeSort.value === 'top') result.sort((a, b) => b.upvotes - a.upvotes)
  else if (activeSort.value === 'trending') result.sort((a, b) => b._count.comments - a._count.comments)
  return result
})

let searchTimer: ReturnType<typeof setTimeout> | null = null
function debouncedSearch() {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {}, 300)
}

function setCategory(cat: string) {
  activeCategory.value = cat
}

function upvotePost(id: string) {
  const post = posts.value.find(p => p.id === id)
  if (post) post.upvotes++
}

function categoryStyle(cat: string): string {
  const map: Record<string, string> = {
    STCW_REGULATIONS: 'background:#0369A120; color:#38bdf8; border:1px solid #0369A140;',
    PSC_INSPECTIONS: 'background:#dc262620; color:#f87171; border:1px solid #dc262630;',
    CAREER_PROMOTION: 'background:#22c55e20; color:#4ade80; border:1px solid #22c55e30;',
    VESSEL_OPERATIONS: 'background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b30;',
    NAVIGATION: 'background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf630;',
    ENGINE_ROOM: 'background:#f97316; color:#fdba74; background:#f9731620; border:1px solid #f9731630;',
    MEDICAL_FITNESS: 'background:#ec489920; color:#f472b6; border:1px solid #ec489930;',
    CONTRACTS_LEGAL: 'background:#64748b20; color:#94a3b8; border:1px solid #64748b30;',
    TRAINING_INSTITUTES: 'background:#10b98120; color:#34d399; border:1px solid #10b98130;',
    ANNOUNCEMENTS: 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b30;',
    GENERAL: 'background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;',
  }
  return map[cat] || map.GENERAL
}

function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    STCW_REGULATIONS: '📋 STCW',
    PSC_INSPECTIONS: '🔍 PSC',
    CAREER_PROMOTION: '🚀 Career',
    VESSEL_OPERATIONS: '⚓ Operations',
    NAVIGATION: '🧭 Navigation',
    ENGINE_ROOM: '⚙️ Engine',
    MEDICAL_FITNESS: '🏥 Medical',
    CONTRACTS_LEGAL: '⚖️ Legal',
    TRAINING_INSTITUTES: '🎓 Training',
    ANNOUNCEMENTS: '📢 Notice',
    GENERAL: '🌐 General',
  }
  return map[cat] || '🌐 General'
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const h = Math.floor(diff / 3600000)
  if (h < 1) return 'Just now'
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
