<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- Header -->
    <div class="border-b px-6 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">THE SEAFU · NOTIFICATION CENTER</span>
          </div>
          <h1 class="text-xl font-bold" style="color:#e2e8f0;">Activity & Alerts</h1>
          <p class="text-xs mt-0.5" style="color:#64748b;">Booking confirmations, certificate expiries, job updates</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="text-xs px-3 py-1.5 rounded border transition" style="border-color:#1e3a5f; color:#64748b;"
            @click="markAllRead">
            ✓ Mark all read
          </button>
          <span class="text-xs font-mono px-2.5 py-1.5 rounded"
            style="background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b40;">
            {{ unreadCount }} unread
          </span>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 py-6 flex gap-6">
      <!-- ── FILTER SIDEBAR ─────────────────────────────────────────── -->
      <aside class="w-48 shrink-0 space-y-1">
        <button v-for="f in filters" :key="f.value"
          class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition text-left"
          :style="activeFilter === f.value
            ? 'background:#0369A120; color:#00E5FF; border:1px solid #0369A140;'
            : 'background:transparent; color:#64748b;'"
          @click="activeFilter = f.value">
          <span class="flex items-center gap-2">
            <span>{{ f.icon }}</span>{{ f.label }}
          </span>
          <span v-if="f.count" class="text-[10px] px-1.5 py-0.5 rounded-full"
            :style="activeFilter === f.value ? 'background:#0369A1; color:#fff;' : 'background:#1e3a5f; color:#94a3b8;'">
            {{ f.count }}
          </span>
        </button>
      </aside>

      <!-- ── NOTIFICATION FEED ──────────────────────────────────────── -->
      <div class="flex-1 space-y-3">
        <div v-for="notif in filteredNotifications" :key="notif.id"
          class="rounded-xl border p-4 transition cursor-pointer relative"
          :style="notif.read
            ? 'background:#0a1628; border-color:#0c1a2e;'
            : 'background:#0a1628; border-color:#0369A150;'"
          @click="notif.read = true">

          <!-- Unread dot -->
          <div v-if="!notif.read" class="absolute top-4 right-4 w-2 h-2 rounded-full"
            style="background:#00E5FF;"></div>

          <div class="flex items-start gap-3">
            <!-- Icon -->
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
              :style="notifIconStyle(notif.type)">
              {{ notif.icon }}
            </div>

            <div class="flex-1 min-w-0">
              <!-- Title row -->
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="text-sm font-bold" :style="notif.read ? 'color:#94a3b8;' : 'color:#e2e8f0;'">
                  {{ notif.title }}
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-mono"
                  :style="notifBadgeStyle(notif.type)">
                  {{ notif.type }}
                </span>
              </div>

              <!-- Body -->
              <p class="text-xs leading-relaxed" style="color:#64748b;">{{ notif.body }}</p>

              <!-- Footer -->
              <div class="flex items-center gap-4 mt-2">
                <span class="text-[11px] font-mono" style="color:#334155;">{{ notif.timeAgo }}</span>
                <NuxtLink v-if="notif.action" :to="notif.actionUrl"
                  class="text-[11px] font-bold transition" style="color:#00E5FF;">
                  {{ notif.action }} →
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- EXPIRY WARNING BAR -->
          <div v-if="notif.type === 'EXPIRY' && notif.daysLeft"
            class="mt-3 p-3 rounded-lg flex items-center gap-3"
            :style="notif.daysLeft <= 14 ? 'background:#dc262610; border:1px solid #dc262630;' : 'background:#f59e0b10; border:1px solid #f59e0b30;'">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold"
                  :style="notif.daysLeft <= 14 ? 'color:#f87171;' : 'color:#fbbf24;'">
                  {{ notif.certName }}
                </span>
                <span class="text-xs font-mono"
                  :style="notif.daysLeft <= 14 ? 'color:#f87171;' : 'color:#fbbf24;'">
                  {{ notif.daysLeft }}d remaining
                </span>
              </div>
              <div class="h-1.5 rounded-full overflow-hidden" style="background:#1e3a5f;">
                <div class="h-full rounded-full transition-all"
                  :style="{
                    width: Math.min(100, (notif.daysLeft / 365) * 100) + '%',
                    background: notif.daysLeft <= 14 ? '#dc2626' : '#f59e0b'
                  }"></div>
              </div>
            </div>
            <NuxtLink to="/courses" class="text-xs font-bold px-3 py-1.5 rounded-lg"
              style="background:#0369A1; color:#fff; white-space:nowrap;">
              Renew Now
            </NuxtLink>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!filteredNotifications.length"
          class="rounded-xl border p-14 text-center" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="text-4xl mb-4">🔔</div>
          <p class="text-sm" style="color:#64748b;">No {{ activeFilter === 'ALL' ? '' : activeFilter.toLowerCase() }} notifications</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Notifications · The Seafu' })
definePageMeta({ middleware: ['auth'] })

const activeFilter = ref('ALL')

const notifications = ref([
  {
    id: 'n-001',
    type: 'BOOKING',
    icon: '✅',
    title: 'Booking Confirmed — Advanced Fire Fighting (AFF)',
    body: 'Your seat reservation (Ref: SF-2026-0922-771) at Maritime Training Academy Mumbai is confirmed. Batch starts 22 Sep 2026. Your tax invoice has been emailed.',
    timeAgo: '2 hours ago',
    action: 'View Invoice',
    actionUrl: '/bookings/checkout',
    read: false,
  },
  {
    id: 'n-002',
    type: 'EXPIRY',
    icon: '⚠️',
    title: 'Certificate Expiring Soon — PSCRB',
    body: 'Your Proficiency in Survival Craft (PSCRB) certificate expires in 28 days (15 Oct 2026). Renew at a DG Shipping approved institute before it lapses.',
    timeAgo: '5 hours ago',
    action: 'Find Renewal Course',
    actionUrl: '/courses?category=STCW_ADVANCED',
    read: false,
    certName: 'PSCRB · DG/CERT/MH/2021/44421',
    daysLeft: 28,
  },
  {
    id: 'n-003',
    type: 'EXPIRY',
    icon: '🚨',
    title: 'URGENT — Medical Fitness ENG-1 Expires in 11 Days',
    body: 'Your ENG-1 Medical Fitness Certificate expires on 27 Sep 2026. Without a valid medical, you cannot sign-on. Book your medical exam immediately.',
    timeAgo: '1 day ago',
    action: 'Find Medical Center',
    actionUrl: '/courses?category=MEDICAL',
    read: false,
    certName: 'ENG-1 Medical Fitness',
    daysLeft: 11,
  },
  {
    id: 'n-004',
    type: 'JOB',
    icon: '⭐',
    title: 'Shortlisted — Master Mariner Position at Essence Shipping',
    body: 'Congratulations! You have been shortlisted for the Master Mariner — VLCC Tanker position. Essence Shipping Pvt Ltd will schedule an interview. Your verified Seafu profile has been shared.',
    timeAgo: '2 days ago',
    action: 'View Application',
    actionUrl: '/jobs/my-applications',
    read: true,
  },
  {
    id: 'n-005',
    type: 'CERTIFICATE',
    icon: '🏆',
    title: 'Certificate Issued — Advanced Fire Fighting',
    body: 'Your AFF certificate (Ref: IND-AFF-7714-ECDSA) has been digitally signed with ECDSA and added to your cryptographic vault. Share your QR for instant PSC verification.',
    timeAgo: '3 days ago',
    action: 'View Dossier',
    actionUrl: '/vault/dossier/IND-AFF-7714-ECDSA',
    read: true,
  },
  {
    id: 'n-006',
    type: 'PAYMENT',
    icon: '💳',
    title: 'Payment Received — ₹8,500 for AFF Course',
    body: 'Payment of ₹8,500 (incl. GST 18%) captured via Razorpay (Txn ID: RZP-20260917-84711). Dual invoices (Candidate Tax Invoice + Institute Escrow Settlement) have been generated.',
    timeAgo: '3 days ago',
    action: 'Download Invoice',
    actionUrl: '/bookings/checkout',
    read: true,
  },
  {
    id: 'n-007',
    type: 'JOB',
    icon: '📅',
    title: 'Interview Scheduled — Marine Superintendent Position',
    body: 'IndiaShip Management has scheduled a telephonic interview for the Marine Superintendent (Tankers) role on 20 Sep 2026 at 11:00 AM IST. Check your registered email for dial-in details.',
    timeAgo: '4 days ago',
    action: 'Track Application',
    actionUrl: '/jobs/my-applications',
    read: true,
  },
  {
    id: 'n-008',
    type: 'EXPIRY',
    icon: '📋',
    title: 'STCW Basic Safety Training — Revalidation Due',
    body: 'Your BST certificate is due for 5-year revalidation on 15 Dec 2026. STCW Convention Reg. VI/1 mandates revalidation. Book early to avoid last-minute surge pricing.',
    timeAgo: '5 days ago',
    action: 'Book Refresher',
    actionUrl: '/courses?category=REFRESHER',
    read: true,
    certName: 'BST — Basic Safety Training',
    daysLeft: 89,
  },
])

const filters = computed(() => [
  { value: 'ALL', label: 'All', icon: '🔔', count: notifications.value.filter(n => !n.read).length },
  { value: 'BOOKING', label: 'Bookings', icon: '🎫', count: notifications.value.filter(n => n.type === 'BOOKING' && !n.read).length || null },
  { value: 'EXPIRY', label: 'Expiry Alerts', icon: '⚠️', count: notifications.value.filter(n => n.type === 'EXPIRY' && !n.read).length || null },
  { value: 'CERTIFICATE', label: 'Certificates', icon: '🏆', count: null },
  { value: 'JOB', label: 'Job Updates', icon: '💼', count: notifications.value.filter(n => n.type === 'JOB' && !n.read).length || null },
  { value: 'PAYMENT', label: 'Payments', icon: '💳', count: null },
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const filteredNotifications = computed(() => {
  if (activeFilter.value === 'ALL') return notifications.value
  return notifications.value.filter(n => n.type === activeFilter.value)
})

function markAllRead() {
  notifications.value.forEach(n => { n.read = true })
}

function notifIconStyle(type: string): string {
  const map: Record<string, string> = {
    BOOKING: 'background:#22c55e20; border:1px solid #22c55e30;',
    EXPIRY: 'background:#f59e0b20; border:1px solid #f59e0b30;',
    CERTIFICATE: 'background:#00E5FF15; border:1px solid #00E5FF30;',
    JOB: 'background:#0369A120; border:1px solid #0369A140;',
    PAYMENT: 'background:#8b5cf620; border:1px solid #8b5cf630;',
  }
  return map[type] || 'background:#1e3a5f; border:1px solid #334155;'
}

function notifBadgeStyle(type: string): string {
  const map: Record<string, string> = {
    BOOKING: 'background:#22c55e20; color:#22c55e;',
    EXPIRY: 'background:#f59e0b20; color:#f59e0b;',
    CERTIFICATE: 'background:#00E5FF15; color:#00E5FF;',
    JOB: 'background:#0369A120; color:#38bdf8;',
    PAYMENT: 'background:#8b5cf620; color:#a78bfa;',
  }
  return map[type] || 'background:#1e3a5f; color:#94a3b8;'
}
</script>
