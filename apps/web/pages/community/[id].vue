<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- TOP NAV -->
    <div class="border-b px-4 py-3 flex items-center gap-3" style="border-color:#0c1a2e; background:#0a1628;">
      <NuxtLink to="/community" class="text-sm transition" style="color:#64748b;">← Community Hub</NuxtLink>
      <span style="color:#1e3a5f;">›</span>
      <span class="text-sm font-medium truncate" style="color:#94a3b8;">{{ post.title }}</span>
    </div>

    <div class="max-w-5xl mx-auto px-4 py-6 flex gap-6">
      <!-- ── MAIN POST & COMMENTS ──────────────────────────────────── -->
      <div class="flex-1 min-w-0 space-y-4">
        <!-- Post Card -->
        <div class="rounded-xl border p-6" style="background:#0a1628; border-color:#0c1a2e;">
          <!-- Category + Meta Row -->
          <div class="flex items-center gap-2 mb-3 flex-wrap">
            <span class="text-xs px-2.5 py-1 rounded-full font-medium" :style="categoryStyle(post.category)">
              {{ categoryLabel(post.category) }}
            </span>
            <span v-if="post.isPinned" class="text-xs px-2 py-0.5 rounded" style="background:#f59e0b20; color:#f59e0b;">
              📌 Pinned by Moderator
            </span>
            <span class="text-xs ml-auto" style="color:#334155;">{{ timeAgo(post.createdAt) }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-xl font-bold leading-snug mb-4" style="color:#e2e8f0;">{{ post.title }}</h1>

          <!-- Author Bar -->
          <div class="flex items-center gap-3 mb-5 pb-5 border-b" style="border-color:#0c1a2e;">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              {{ post.author.fullName.charAt(0) }}
            </div>
            <div>
              <div class="font-semibold text-sm" style="color:#e2e8f0;">{{ post.author.fullName }}</div>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs" style="color:#64748b;">{{ post.author.rank }}</span>
                <span v-if="post.author.indosNumber"
                  class="text-xs px-1.5 py-0.5 rounded font-mono"
                  style="background:#22c55e15; color:#22c55e; border:1px solid #22c55e20;">
                  ✓ Verified Seafarer
                </span>
              </div>
            </div>
            <!-- Upvote button -->
            <div class="ml-auto flex items-center gap-2">
              <button
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition"
                :style="userUpvoted
                  ? 'background:#0369A1; color:#fff;'
                  : 'background:#0c1a2e; color:#64748b;'"
                @click="upvotePost">
                ▲ {{ post.upvotes }}
              </button>
              <button class="px-4 py-2 rounded-lg text-sm border transition" style="border-color:#1e3a5f; color:#64748b;">
                🔗 Share
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="text-sm leading-7 whitespace-pre-line" style="color:#94a3b8;">{{ post.content }}</div>

          <!-- Tags -->
          <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4 pt-4 border-t" style="border-color:#0c1a2e;">
            <span v-for="tag in post.tags" :key="tag"
              class="text-xs px-2.5 py-1 rounded-full"
              style="background:#0c1a2e; color:#64748b; border:1px solid #1e3a5f;">
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- ── REPLY BOX ────────────────────────────────────────────── -->
        <div class="rounded-xl border p-5" style="background:#0a1628; border-color:#0369A140;">
          <div class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">POST A REPLY</div>
          <textarea v-model="replyContent"
            rows="4"
            placeholder="Share your knowledge, experience, or ask a follow-up. Verified seafarer answers are ranked higher."
            class="w-full px-4 py-3 text-sm rounded-lg border outline-none resize-none"
            style="background:#070D18; border-color:#1e3a5f; color:#e2e8f0;" />
          <div class="flex items-center justify-between mt-3">
            <span class="text-xs" style="color:#475569;">
              Replies from verified INDoS seafarers are marked ✓
            </span>
            <button
              class="px-5 py-2 rounded-lg text-sm font-bold transition"
              style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;"
              :disabled="!replyContent.trim() || submittingReply"
              @click="submitReply">
              {{ submittingReply ? 'Posting…' : 'Post Reply' }}
            </button>
          </div>
        </div>

        <!-- ── COMMENTS / REPLIES ───────────────────────────────────── -->
        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="px-6 py-4 border-b flex items-center justify-between" style="border-color:#0c1a2e;">
            <h2 class="text-sm font-mono tracking-widest" style="color:#00E5FF;">
              REPLIES
              <span class="ml-2 px-2 py-0.5 rounded text-xs" style="background:#0369A120; color:#38bdf8;">
                {{ post.comments.length }}
              </span>
            </h2>
            <div class="flex gap-1.5">
              <button v-for="s in commentSorts" :key="s.value"
                class="text-xs px-2.5 py-1 rounded transition"
                :style="commentSort === s.value
                  ? 'background:#0369A1; color:#fff;'
                  : 'color:#64748b; background:#0c1a2e;'"
                @click="commentSort = s.value">
                {{ s.label }}
              </button>
            </div>
          </div>

          <div class="divide-y" style="border-color:#0c1a2e;">
            <div v-for="comment in sortedComments" :key="comment.id" class="px-6 py-5">
              <div class="flex items-start gap-3">
                <!-- Upvote -->
                <div class="flex flex-col items-center gap-1 shrink-0">
                  <button
                    class="w-7 h-7 rounded flex items-center justify-center text-xs transition"
                    style="background:#0c1a2e; color:#475569;"
                    @click="upvoteComment(comment.id)">
                    ▲
                  </button>
                  <span class="text-xs font-bold" style="color:#94a3b8;">{{ comment.upvotes }}</span>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <!-- Author -->
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs"
                      :style="comment.isAccepted ? 'background:#22c55e; color:#fff;' : 'background:#0369A120; color:#00E5FF;'">
                      {{ comment.author.fullName.charAt(0) }}
                    </div>
                    <span class="text-sm font-semibold" style="color:#e2e8f0;">{{ comment.author.fullName }}</span>
                    <span class="text-xs" style="color:#475569;">{{ comment.author.rank }}</span>
                    <span v-if="comment.author.indosNumber"
                      class="text-xs px-1.5 py-0.5 rounded"
                      style="background:#22c55e15; color:#22c55e; border:1px solid #22c55e20;">
                      ✓ Verified
                    </span>
                    <span v-if="comment.isAccepted"
                      class="text-xs px-2 py-0.5 rounded font-bold ml-auto"
                      style="background:#22c55e20; color:#22c55e; border:1px solid #22c55e30;">
                      ✓ Best Answer
                    </span>
                    <span class="text-xs" style="color:#334155;">{{ timeAgo(comment.createdAt) }}</span>
                  </div>

                  <!-- Comment body -->
                  <p class="text-sm leading-6" style="color:#94a3b8;">{{ comment.content }}</p>

                  <!-- Actions -->
                  <div class="flex items-center gap-3 mt-2">
                    <button class="text-xs transition" style="color:#475569;"
                      @click="replyingTo = comment.id">
                      ↩ Reply
                    </button>
                    <button class="text-xs transition" style="color:#475569;">
                      🔗 Cite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── RIGHT SIDEBAR ─────────────────────────────────────────── -->
      <aside class="w-64 shrink-0 space-y-4">
        <!-- Post Stats -->
        <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">DISCUSSION STATS</h3>
          <div class="space-y-2">
            <div class="flex justify-between text-xs">
              <span style="color:#64748b;">Views</span>
              <span class="font-bold" style="color:#e2e8f0;">{{ post.views }}</span>
            </div>
            <div class="flex justify-between text-xs">
              <span style="color:#64748b;">Upvotes</span>
              <span class="font-bold" style="color:#00E5FF;">{{ post.upvotes }}</span>
            </div>
            <div class="flex justify-between text-xs">
              <span style="color:#64748b;">Replies</span>
              <span class="font-bold" style="color:#e2e8f0;">{{ post.comments.length }}</span>
            </div>
            <div class="flex justify-between text-xs">
              <span style="color:#64748b;">Verified Answers</span>
              <span class="font-bold" style="color:#22c55e;">{{ post.comments.filter(c => c.author.indosNumber).length }}</span>
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#00E5FF;">RELATED DISCUSSIONS</h3>
          <div class="space-y-3">
            <NuxtLink v-for="related in relatedPosts" :key="related.id"
              :to="`/community/${related.id}`"
              class="block text-xs leading-relaxed transition"
              style="color:#64748b;"
              @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#94a3b8'"
              @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = '#64748b'">
              {{ related.title }}
              <span class="block mt-0.5" style="color:#334155;">{{ related.upvotes }} upvotes</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Report / Mod Tools -->
        <div class="rounded-xl border p-4" style="background:#0a1628; border-color:#0c1a2e;">
          <h3 class="text-xs font-mono tracking-widest mb-3" style="color:#475569;">ACTIONS</h3>
          <div class="space-y-1.5">
            <button class="w-full text-left text-xs px-3 py-2 rounded transition" style="color:#64748b;">
              🔖 Save Discussion
            </button>
            <button class="w-full text-left text-xs px-3 py-2 rounded transition" style="color:#64748b;">
              🔔 Follow Thread
            </button>
            <button class="w-full text-left text-xs px-3 py-2 rounded transition" style="color:#dc2626;">
              ⚠️ Report Post
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const postId = route.params.id as string
useHead({ title: 'Community Discussion · The Seafu' })

const replyContent = ref('')
const submittingReply = ref(false)
const commentSort = ref('top')
const userUpvoted = ref(false)
const replyingTo = ref<string | null>(null)

const commentSorts = [
  { value: 'top', label: '🔥 Top' },
  { value: 'newest', label: '🕐 New' },
]

const post = reactive({
  id: postId,
  title: 'Rotterdam PSC — They detained us for 3 deficiencies. Sharing the full deficiency list.',
  category: 'PSC_INSPECTIONS',
  isPinned: false,
  upvotes: 287,
  views: 2140,
  createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
  tags: ['PSC', 'Rotterdam', 'Detention', 'ISM', 'Lifeboat'],
  author: {
    id: 'user-001',
    fullName: 'Ch. Off. Ramesh Kumar',
    rank: 'Chief Officer',
    indosNumber: 'IND-7654321',
    role: 'SEAFARER',
  },
  content: `We just got released after 48 hours of detention at Port of Rotterdam. The PSC officer came onboard as part of their CONCENTRATED INSPECTION CAMPAIGN on lifeboat systems.

DEFICIENCY 1 (Code 2570) — On-load release mechanism of lifeboat not functioning as per LSA Code 4.4.7.6. The painter line release was sticky and took more than 2 seconds. They required us to service it immediately with port service company.

DEFICIENCY 2 (Code 3119) — ISM Code 7.2 — Maintenance records for free-fall lifeboat hydrostatic release unit were overdue by 14 days. We had the work order raised but not completed.

DEFICIENCY 3 (Code 4219) — The fire detection panel in the engine room had 3 detectors showing fault status. Chief Engineer had a maintenance request submitted to the office but no work had been done.

The CIC focused heavily on Reg. III/20 of SOLAS — operational readiness, maintenance and inspections of lifesaving appliances.

LESSONS LEARNED:
— Check EVERY on-load release mechanism yourself before port entry
— Ensure all overdue maintenance items are CLOSED, not just raised
— Engine room fire detection panel faults are taken very seriously at major European ports
— Have all LSA service records indexed and ready for immediate presentation

The Port Authority was professional but firm. We had a good ISM track record which helped reduce the severity. Total cost including the port service company for the lifeboat: approximately €4,200.`,
  comments: [
    {
      id: 'comment-001',
      content: 'Thank you for sharing this. The CIC 2026 theme on lifeboats was announced months ago on the IMO website — many companies didn\'t brief their crews. I had a similar experience in Hamburg last month. The on-load release mechanism is the single most common deficiency in 2026. Capt. recommend servicing at dry dock AND doing the operational test WITH the PSC officer present — they appreciate transparency.',
      upvotes: 89,
      isAccepted: true,
      createdAt: new Date(Date.now() - 4 * 3600000).toISOString(),
      author: { fullName: 'Capt. Arvind Nair', rank: 'Master Mariner', indosNumber: 'IND-1234567', role: 'SEAFARER' },
    },
    {
      id: 'comment-002',
      content: 'IMPORTANT — ISM Code 7.2 specifically requires that maintenance is not only scheduled but verified complete with signature. A raised work order is NOT sufficient. The OOW/CE must verify completion and sign off. This is a common gap where shore management raises tickets but follow-through on the vessel is not documented.',
      upvotes: 64,
      isAccepted: false,
      createdAt: new Date(Date.now() - 3.5 * 3600000).toISOString(),
      author: { fullName: 'Supt. Krishnamurthy', rank: 'Marine Superintendent', indosNumber: 'IND-5544332', role: 'SEAFARER' },
    },
    {
      id: 'comment-003',
      content: 'Adding another data point — Tokyo MOU has also been running a CIC on the same theme since Q1 2026. If you trade Far East routes, prepare the same way. Yokohama and Busan PSC are equally strict. The hydrostatic release unit inspection intervals are manufacturer-specific and many crews are unaware that some require annual servicing regardless of manufacturer recommendations.',
      upvotes: 47,
      isAccepted: false,
      createdAt: new Date(Date.now() - 3 * 3600000).toISOString(),
      author: { fullName: 'Ch. Off. Rajan Pillai', rank: 'Chief Officer', indosNumber: 'IND-9988776', role: 'SEAFARER' },
    },
    {
      id: 'comment-004',
      content: 'What was the exact type of vessel and flag state? This might help others in similar situations understand the risk profile.',
      upvotes: 12,
      isAccepted: false,
      createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
      author: { fullName: 'Mohan Das', rank: '2nd Officer', indosNumber: null, role: 'SEAFARER' },
    },
  ],
})

const relatedPosts = [
  { id: 'post-001', title: 'STCW 2010 Manila Amendments — Which certificates are expiring in 2026?', upvotes: 142 },
  { id: 'post-007', title: 'Seafarer\'s CBA and ITF — What rights do we have if the company delays repatriation?', upvotes: 221 },
  { id: 'post-003', title: 'How long does it realistically take to get CoC Class I in India?', upvotes: 95 },
]

const sortedComments = computed(() => {
  const sorted = [...post.comments]
  if (commentSort.value === 'top') sorted.sort((a, b) => b.upvotes - a.upvotes)
  else sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return sorted
})

function upvotePost() {
  if (!userUpvoted.value) { post.upvotes++; userUpvoted.value = true }
  else { post.upvotes--; userUpvoted.value = false }
}

function upvoteComment(commentId: string) {
  const c = post.comments.find(c => c.id === commentId)
  if (c) c.upvotes++
}

async function submitReply() {
  if (!replyContent.value.trim()) return
  submittingReply.value = true
  await new Promise(r => setTimeout(r, 1000))
  post.comments.push({
    id: `comment-${Date.now()}`,
    content: replyContent.value,
    upvotes: 0,
    isAccepted: false,
    createdAt: new Date().toISOString(),
    author: { fullName: 'You', rank: 'Seafarer', indosNumber: 'IND-0000000', role: 'SEAFARER' },
  })
  replyContent.value = ''
  submittingReply.value = false
}

function categoryStyle(cat: string): string {
  const map: Record<string, string> = {
    PSC_INSPECTIONS: 'background:#dc262620; color:#f87171; border:1px solid #dc262630;',
    STCW_REGULATIONS: 'background:#0369A120; color:#38bdf8; border:1px solid #0369A140;',
    CAREER_PROMOTION: 'background:#22c55e20; color:#4ade80; border:1px solid #22c55e30;',
    VESSEL_OPERATIONS: 'background:#f59e0b20; color:#fbbf24; border:1px solid #f59e0b30;',
    NAVIGATION: 'background:#8b5cf620; color:#a78bfa; border:1px solid #8b5cf630;',
    CONTRACTS_LEGAL: 'background:#64748b20; color:#94a3b8; border:1px solid #64748b30;',
    TRAINING_INSTITUTES: 'background:#10b98120; color:#34d399; border:1px solid #10b98130;',
  }
  return map[cat] || 'background:#1e3a5f30; color:#94a3b8; border:1px solid #1e3a5f;'
}

function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    PSC_INSPECTIONS: '🔍 PSC Inspections',
    STCW_REGULATIONS: '📋 STCW & Regulations',
    CAREER_PROMOTION: '🚀 Career & Promotion',
    VESSEL_OPERATIONS: '⚓ Vessel Operations',
    NAVIGATION: '🧭 Navigation',
    CONTRACTS_LEGAL: '⚖️ Contracts & Legal',
    TRAINING_INSTITUTES: '🎓 Training Institutes',
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
