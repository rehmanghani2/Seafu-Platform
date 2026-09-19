<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-24">
    <!-- Header -->
    <header class="border-b border-slate-200 bg-white px-6 py-5 sticky top-0 z-30 shadow-xs">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <NuxtLink to="/seafarer/dashboard" class="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span>Seafarer Panel</span>
            </NuxtLink>
            <span class="text-slate-300">&bull;</span>
            <span class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">NOTIFICATION CENTER</span>
          </div>
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Activity &amp; Alerts</h1>
          <p class="text-xs text-slate-500 mt-0.5">Booking confirmations, certificate expiries, job updates</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            @click="markAllRead"
            class="text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            Mark all read
          </button>
          <span class="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
            {{ unreadCount }} unread
          </span>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-6">
      <!-- ── FILTER SIDEBAR ─────────────────────────────────────────── -->
      <aside class="w-full lg:w-56 shrink-0 space-y-1.5" aria-label="Notification Categories">
        <button
          v-for="f in filters"
          :key="f.value"
          class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition text-left focus:outline-none focus:ring-1 focus:ring-blue-600"
          :class="activeFilter === f.value ? 'bg-[#0A1936] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'"
          @click="activeFilter = f.value"
        >
          <span>{{ f.label }}</span>
          <span
            v-if="f.count"
            class="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
            :class="activeFilter === f.value ? 'bg-blue-900 text-blue-200' : 'bg-slate-100 text-slate-600'"
          >
            {{ f.count }}
          </span>
        </button>
      </aside>

      <!-- ── NOTIFICATION FEED ──────────────────────────────────────── -->
      <div class="flex-1 space-y-3.5">
        <div
          v-for="notif in filteredNotifications"
          :key="notif.id"
          class="rounded-2xl border p-5 transition cursor-pointer relative shadow-2xs"
          :class="notif.read ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-blue-50/40 border-blue-200 shadow-xs'"
          @click="notif.read = true"
        >
          <!-- Unread dot -->
          <span
            v-if="!notif.read"
            class="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-blue-600"
            title="Unread notification"
          ></span>

          <div class="flex items-start gap-4">
            <!-- Icon -->
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
              :class="notifTypeStyle(notif.type)"
            >
              <svg v-if="notif.type === 'BOOKING'" class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <svg v-else-if="notif.type === 'EXPIRY'" class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <svg v-else-if="notif.type === 'JOB'" class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <svg v-else-if="notif.type === 'CERTIFICATE'" class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              <svg v-else class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <!-- Title row -->
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="text-sm font-bold" :class="notif.read ? 'text-slate-800' : 'text-blue-950'">
                  {{ notif.title }}
                </span>
                <span
                  class="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold"
                  :class="notifBadgeClass(notif.type)"
                >
                  {{ notif.type }}
                </span>
              </div>

              <!-- Body -->
              <p class="text-xs leading-relaxed text-slate-600 font-normal">{{ notif.body }}</p>

              <!-- Footer -->
              <div class="flex items-center gap-4 mt-2.5">
                <span class="text-[11px] font-mono text-slate-400">{{ notif.timeAgo }}</span>
                <NuxtLink
                  v-if="notif.action"
                  :to="notif.actionUrl"
                  class="text-[11px] font-bold text-blue-700 hover:text-blue-900 transition flex items-center gap-1"
                >
                  <span>{{ notif.action }}</span>
                  <span>&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- EXPIRY WARNING BAR -->
          <div
            v-if="notif.type === 'EXPIRY' && notif.daysLeft"
            class="mt-3.5 p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            :class="notif.daysLeft <= 14 ? 'bg-rose-50 border border-rose-200' : 'bg-amber-50 border border-amber-200'"
          >
            <div class="flex-1">
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="font-bold" :class="notif.daysLeft <= 14 ? 'text-rose-800' : 'text-amber-800'">
                  {{ notif.certName }}
                </span>
                <span class="font-mono font-bold" :class="notif.daysLeft <= 14 ? 'text-rose-600' : 'text-amber-700'">
                  {{ notif.daysLeft }}d remaining
                </span>
              </div>
              <div class="h-1.5 rounded-full overflow-hidden bg-white">
                <div
                  class="h-full rounded-full transition-all"
                  :class="notif.daysLeft <= 14 ? 'bg-rose-600' : 'bg-amber-500'"
                  :style="{ width: Math.min(100, (notif.daysLeft / 365) * 100) + '%' }"
                ></div>
              </div>
            </div>
            <NuxtLink
              to="/seafarer/courses"
              class="text-xs font-semibold px-4 py-1.5 rounded-lg bg-[#0A1936] text-white hover:bg-[#112752] transition text-center shrink-0"
            >
              Renew Now
            </NuxtLink>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="!filteredNotifications.length"
          class="rounded-2xl border border-slate-200 bg-white p-14 text-center shadow-xs"
        >
          <p class="text-sm text-slate-500 font-normal">No {{ activeFilter === 'ALL' ? '' : activeFilter.toLowerCase() }} notifications found.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

useHead({ title: 'Notifications · The Seafu' });
definePageMeta({ layout: false });

const activeFilter = ref('ALL');

const notifications = ref([
  {
    id: 'n-001',
    type: 'BOOKING',
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
    title: 'Certificate Expiring Soon — PSCRB',
    body: 'Your Proficiency in Survival Craft (PSCRB) certificate expires in 28 days (15 Oct 2026). Renew at a DG Shipping approved institute before it lapses.',
    timeAgo: '5 hours ago',
    action: 'Find Renewal Course',
    actionUrl: '/seafarer/courses',
    read: false,
    certName: 'PSCRB · DG/CERT/MH/2021/44421',
    daysLeft: 28,
  },
  {
    id: 'n-003',
    type: 'EXPIRY',
    title: 'URGENT — Medical Fitness ENG-1 Expires in 11 Days',
    body: 'Your ENG-1 Medical Fitness Certificate expires on 27 Sep 2026. Without a valid medical, you cannot sign-on. Book your medical exam immediately.',
    timeAgo: '1 day ago',
    action: 'Find Medical Center',
    actionUrl: '/seafarer/courses',
    read: false,
    certName: 'ENG-1 Medical Fitness',
    daysLeft: 11,
  },
  {
    id: 'n-004',
    type: 'JOB',
    title: 'Shortlisted — Deck Cadet at Global Container Lines',
    body: 'Congratulations! You have been shortlisted for the Deck Cadet — Ultra Large position. Global Container Lines HR has reviewed your verified sea service logs.',
    timeAgo: '2 days ago',
    action: 'View Application',
    actionUrl: '/seafarer/jobs',
    read: true,
  },
  {
    id: 'n-005',
    type: 'CERTIFICATE',
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
    title: 'Escrow Lock Confirmed — $480.00 for AFF Course',
    body: 'Payment of $480.00 locked in The Seafu Escrow. Dual invoices (Candidate Tax Invoice + Institute Escrow Settlement) have been generated.',
    timeAgo: '3 days ago',
    action: 'Download Invoice',
    actionUrl: '/bookings/checkout',
    read: true,
  },
  {
    id: 'n-007',
    type: 'JOB',
    title: 'Interview Scheduled — Third Officer Candidate Interview',
    body: 'Apex Tankers Ltd. has scheduled a preliminary interview for the Third Officer position. Check your registered email for dial-in details.',
    timeAgo: '4 days ago',
    action: 'Track Application',
    actionUrl: '/seafarer/jobs',
    read: true,
  },
  {
    id: 'n-008',
    type: 'EXPIRY',
    title: 'STCW Basic Safety Training — Revalidation Due',
    body: 'Your BST certificate is due for 5-year revalidation on 15 Dec 2026. STCW Convention Reg. VI/1 mandates revalidation. Book early to avoid last-minute rush.',
    timeAgo: '5 days ago',
    action: 'Book Refresher',
    actionUrl: '/seafarer/courses',
    read: true,
    certName: 'BST — Basic Safety Training',
    daysLeft: 89,
  },
]);

const filters = computed(() => [
  { value: 'ALL', label: 'All Alerts', count: notifications.value.filter(n => !n.read).length },
  { value: 'BOOKING', label: 'Bookings', count: notifications.value.filter(n => n.type === 'BOOKING' && !n.read).length || null },
  { value: 'EXPIRY', label: 'Expiry Alerts', count: notifications.value.filter(n => n.type === 'EXPIRY' && !n.read).length || null },
  { value: 'CERTIFICATE', label: 'Certificates', count: null },
  { value: 'JOB', label: 'Job Updates', count: notifications.value.filter(n => n.type === 'JOB' && !n.read).length || null },
  { value: 'PAYMENT', label: 'Payments', count: null },
]);

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length);

const filteredNotifications = computed(() => {
  if (activeFilter.value === 'ALL') return notifications.value;
  return notifications.value.filter(n => n.type === activeFilter.value);
});

function markAllRead() {
  notifications.value.forEach(n => { n.read = true; });
}

function notifTypeStyle(type: string): string {
  const map: Record<string, string> = {
    BOOKING: 'bg-emerald-50 border-emerald-200',
    EXPIRY: 'bg-rose-50 border-rose-200',
    CERTIFICATE: 'bg-blue-50 border-blue-200',
    JOB: 'bg-sky-50 border-sky-200',
    PAYMENT: 'bg-purple-50 border-purple-200',
  };
  return map[type] || 'bg-slate-50 border-slate-200';
}

function notifBadgeClass(type: string): string {
  const map: Record<string, string> = {
    BOOKING: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    EXPIRY: 'bg-rose-50 text-rose-700 border border-rose-200',
    CERTIFICATE: 'bg-blue-50 text-blue-700 border border-blue-200',
    JOB: 'bg-sky-50 text-sky-800 border border-sky-200',
    PAYMENT: 'bg-purple-50 text-purple-700 border border-purple-200',
  };
  return map[type] || 'bg-slate-100 text-slate-600';
}
</script>
