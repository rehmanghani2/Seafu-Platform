<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="selectedTx = null"
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
            <span class="text-xs font-semibold text-slate-700">Escrow Ledger &amp; Revenue</span>
          </nav>
        </div>

        <button
          @click="exportCsv"
          type="button"
          class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Export Ledger (CSV)</span>
        </button>
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
              Real-Time Escrow Ledger &amp; Dual-Invoicing Reports
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              Transparent financial settlements &bull; 90% guaranteed academy share &bull; Automated dual tax invoices for students and academy.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-3 py-1.5 rounded-xl border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true"></span>
            <span>Escrow Shield Guarantee Active</span>
          </div>
        </div>

        <!-- Visual Dual-Invoicing Pipeline (NEW) -->
        <section aria-label="Settlement Flow Pipeline" class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Automated Escrow Settlement Pipeline
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">STEP 1</span>
              <div class="font-bold text-xs text-slate-900">Cadet Checkout</div>
              <div class="text-[11px] text-slate-600">100% course tuition locked in Escrow vault</div>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1">
              <span class="text-[10px] font-mono font-bold text-blue-700 uppercase">STEP 2</span>
              <div class="font-bold text-xs text-slate-900">Seat Reservation</div>
              <div class="text-[11px] text-slate-600">Batch quota atomically updated and confirmed</div>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">STEP 3</span>
              <div class="font-bold text-xs text-slate-900">Dual Invoicing</div>
              <div class="text-[11px] text-slate-600">Automated Tax Invoice generated for student &amp; MTI</div>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
              <span class="text-[10px] font-mono font-bold text-emerald-800 uppercase">STEP 4</span>
              <div class="font-bold text-xs text-emerald-950">90% Direct Payout</div>
              <div class="text-[11px] text-emerald-800">Direct IBAN settlement on batch start date</div>
            </div>
          </div>
        </section>

        <!-- 4 Escrow KPI Cards -->
        <section aria-label="Revenue Metrics" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">GROSS REVENUE (GMV)</div>
            <div class="text-2xl font-bold text-slate-900 font-mono">PKR 4,850,000</div>
            <div class="text-[11px] text-emerald-800 font-semibold">● 340 Paid Bookings</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-blue-700 font-bold uppercase">ACADEMY ESCROW (90%)</div>
            <div class="text-2xl font-bold text-blue-700 font-mono">PKR 4,365,000</div>
            <div class="text-[11px] text-slate-600 font-medium">Settled directly to bank</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-slate-500 font-bold uppercase">SEAFU FEE (10%)</div>
            <div class="text-2xl font-bold text-slate-700 font-mono">PKR 485,000</div>
            <div class="text-[11px] text-slate-600 font-medium">Payment gateway inclusive</div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono tracking-wider text-amber-800 font-bold uppercase">TDS WITHHELD (1%)</div>
            <div class="text-2xl font-bold text-amber-800 font-mono">PKR 48,500</div>
            <div class="text-[11px] text-slate-600 font-medium">Statutory Tax Withholding</div>
          </div>
        </section>

        <!-- Bank Settlement Info -->
        <section aria-label="Settlement Account" class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center space-x-3.5">
            <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200/60 shrink-0" aria-hidden="true">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xs font-bold text-slate-900">Verified Academy Settlement Account</h2>
              <div class="text-xs text-slate-600 mt-0.5">
                Standard Chartered Bank &bull; IBAN: <span class="font-mono text-slate-800 font-bold">PK36SCBL0000001123456701</span> &bull; Verified &amp; Active
              </div>
            </div>
          </div>

          <div class="text-xs font-mono text-slate-600 sm:text-right">
            <span>Next Scheduled Payout: </span>
            <strong class="text-slate-900 font-bold">25 Sep 2026 (Daily Rollout)</strong>
          </div>
        </section>

        <!-- Audited Transactions Table -->
        <div class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="p-4 border-b border-slate-100 flex items-center justify-between">
            <div class="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Real-Time Booking Transactions (Audited Escrow)
            </div>
            <span class="text-xs text-emerald-800 font-semibold flex items-center space-x-1">
              <span class="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true"></span>
              <span>100% Escrow Shield Protected</span>
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs" aria-label="Audited Escrow booking transactions">
              <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-5 py-3.5">TRANSACTION &bull; UTR</th>
                  <th scope="col" class="px-5 py-3.5">CANDIDATE</th>
                  <th scope="col" class="px-5 py-3.5">COURSE &bull; BATCH</th>
                  <th scope="col" class="px-5 py-3.5">GROSS (PKR)</th>
                  <th scope="col" class="px-5 py-3.5">ACADEMY 90%</th>
                  <th scope="col" class="px-5 py-3.5">STATUS</th>
                  <th scope="col" class="px-5 py-3.5 text-right">INVOICE</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="tx in transactions" :key="tx.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4 font-mono">
                    <div class="font-bold text-slate-900">{{ tx.utr }}</div>
                    <div class="text-[10px] text-slate-500">{{ tx.date }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-800">{{ tx.candidateName }}</div>
                    <div class="text-[10px] text-slate-500 font-mono">INDoS: {{ tx.indos }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-medium text-slate-900">{{ tx.courseTitle }}</div>
                    <div class="text-[10px] text-blue-700 font-mono">Batch: {{ tx.batchCode }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-slate-900">
                    {{ tx.amount.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4 font-mono font-bold text-emerald-800">
                    {{ Math.round(tx.amount * 0.9).toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :class="tx.status === 'SETTLED_TO_BANK' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
                    >
                      {{ tx.status === 'SETTLED_TO_BANK' ? 'Settled to Bank' : 'Escrow Locked' }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right">
                    <button
                      @click="selectedTx = tx"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      Tax Invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Invoice Modal -->
    <div
      v-if="selectedTx"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="invoice-modal-title"
      @click.self="selectedTx = null"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="invoice-modal-title" class="text-sm font-bold text-slate-900">Statutory Tax Invoice</h3>
            <div class="text-[10px] font-mono text-slate-500">{{ selectedTx.utr }}</div>
          </div>
          <button
            @click="selectedTx = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close invoice modal"
          >
            ✕
          </button>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div class="flex justify-between">
            <span class="text-slate-600">Candidate:</span>
            <span class="font-bold text-slate-900">{{ selectedTx.candidateName }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">INDoS Reference:</span>
            <span class="font-mono text-slate-900 font-semibold">{{ selectedTx.indos }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Program:</span>
            <span class="font-medium text-slate-900">{{ selectedTx.courseTitle }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Batch Code:</span>
            <span class="font-mono text-blue-700 font-bold">{{ selectedTx.batchCode }}</span>
          </div>
          <div class="pt-2 border-t border-slate-200 flex justify-between font-bold">
            <span class="text-slate-900">Gross Tuition:</span>
            <span class="font-mono text-slate-900">PKR {{ selectedTx.amount.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between text-emerald-800 font-semibold">
            <span>Academy Payout (90%):</span>
            <span class="font-mono font-bold">PKR {{ Math.round(selectedTx.amount * 0.9).toLocaleString() }}</span>
          </div>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            @click="selectedTx = null"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Close
          </button>
          <button
            @click="downloadInvoice"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Escrow Ledger & Revenue &bull; Academy Console',
});

const selectedTx = ref<any>(null);

const transactions = ref([
  {
    id: 'tx1',
    utr: 'UTR-2026-SEAFU-8819',
    date: '18 Sep 2026, 14:15',
    candidateName: 'Cadet Alex Mercer',
    indos: '08ZL9431',
    courseTitle: 'Bridge Resource Management (BRM)',
    batchCode: 'SIM-BRM-04',
    amount: 75000,
    status: 'SETTLED_TO_BANK',
  },
  {
    id: 'tx2',
    utr: 'UTR-2026-SEAFU-8820',
    date: '18 Sep 2026, 11:30',
    candidateName: 'Cadet Muhammad Tariq',
    indos: 'KHI-CDC-49102',
    courseTitle: 'GP-III General Purpose Rating',
    batchCode: 'GP3-2026-003',
    amount: 185000,
    status: 'ESCROW_LOCKED',
  },
  {
    id: 'tx3',
    utr: 'UTR-2026-SEAFU-8821',
    date: '17 Sep 2026, 16:45',
    candidateName: 'Capt. Rajesh Sharma',
    indos: '08ZL9431',
    courseTitle: 'Advanced Fire Fighting (AFF)',
    batchCode: 'STCW-AFF-02',
    amount: 45000,
    status: 'SETTLED_TO_BANK',
  },
  {
    id: 'tx4',
    utr: 'UTR-2026-SEAFU-8822',
    date: '17 Sep 2026, 09:12',
    candidateName: 'Cadet Fatima Noor',
    indos: '09ZM4821',
    courseTitle: 'ECDIS Type-Specific Simulator',
    batchCode: 'SIM-ECDIS-01',
    amount: 55000,
    status: 'SETTLED_TO_BANK',
  },
]);

function exportCsv() {
  alert('Exporting official MTI Financial Settlement Statement (CSV) for DG Shipping & Bank Audit...');
}

function downloadInvoice() {
  alert(`Tax invoice downloaded for transaction ${selectedTx.value?.utr}.`);
  selectedTx.value = null;
}
</script>
