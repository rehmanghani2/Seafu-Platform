<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
      <div>
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <h3 class="text-base font-bold text-slate-900 tracking-tight">Real-Time Escrow Ledger &amp; Dual-Invoicing</h3>
        </div>
        <p class="text-xs text-slate-500 mt-0.5">
          Audited escrow settlement pipeline &bull; 90% guaranteed academy payout &bull; Automated dual tax invoices.
        </p>
      </div>

      <div class="flex items-center space-x-2">
        <button
          @click="exportCsv"
          class="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs shrink-0"
        >
          <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Export Ledger (CSV)</span>
        </button>
      </div>
    </div>

    <!-- 4 Escrow KPI Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
        <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">GROSS REVENUE (GMV)</div>
        <div class="text-xl sm:text-2xl font-bold text-slate-900 font-mono">PKR 4,850,000</div>
        <div class="text-[11px] text-emerald-700 font-semibold flex items-center space-x-1">
          <span>●</span>
          <span>340 Paid Bookings</span>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-1">
        <div class="text-[10px] font-mono tracking-wider text-blue-700 font-bold uppercase">ACADEMY ESCROW (90%)</div>
        <div class="text-xl sm:text-2xl font-bold text-blue-800 font-mono">PKR 4,365,000</div>
        <div class="text-[11px] text-slate-600 font-medium">Settled to designated IBAN</div>
      </div>

      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
        <div class="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">SEAFU PLATFORM FEE (10%)</div>
        <div class="text-xl sm:text-2xl font-bold text-slate-700 font-mono">PKR 485,000</div>
        <div class="text-[11px] text-slate-500 font-medium">Gateway &amp; escrow handling</div>
      </div>

      <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-1">
        <div class="text-[10px] font-mono tracking-wider text-amber-800 font-bold uppercase">STATUTORY TDS (1%)</div>
        <div class="text-xl sm:text-2xl font-bold text-amber-800 font-mono">PKR 48,500</div>
        <div class="text-[11px] text-amber-900 font-medium">Withheld per tax code</div>
      </div>
    </div>

    <!-- Audited Transactions Table -->
    <div class="border border-slate-200 rounded-xl overflow-hidden">
      <div class="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
        <span class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
          Recent Escrow Transactions (Audited)
        </span>
        <span class="text-emerald-700 font-semibold flex items-center space-x-1">
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Escrow Shield Active</span>
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-white text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th class="px-4 py-3">TRANSACTION &bull; UTR</th>
              <th class="px-4 py-3">CANDIDATE</th>
              <th class="px-4 py-3">COURSE &bull; BATCH</th>
              <th class="px-4 py-3">GROSS</th>
              <th class="px-4 py-3">90% PAYOUT</th>
              <th class="px-4 py-3">STATUS</th>
              <th class="px-4 py-3 text-right">INVOICE</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="tx in transactions" :key="tx.id" class="hover:bg-slate-50/70 transition">
              <td class="px-4 py-3 font-mono">
                <div class="font-bold text-slate-900">{{ tx.utr }}</div>
                <div class="text-[10px] text-slate-400">{{ tx.date }}</div>
              </td>
              <td class="px-4 py-3">
                <div class="font-bold text-slate-800">{{ tx.candidateName }}</div>
                <div class="text-[10px] text-slate-400 font-mono">INDoS: {{ tx.indos }}</div>
              </td>
              <td class="px-4 py-3 text-slate-700">
                <div class="font-medium truncate max-w-[180px]">{{ tx.courseTitle }}</div>
                <div class="text-[10px] text-blue-700 font-mono">Batch: {{ tx.batchCode }}</div>
              </td>
              <td class="px-4 py-3 font-mono font-bold text-slate-900">
                PKR {{ tx.amount.toLocaleString() }}
              </td>
              <td class="px-4 py-3 font-mono font-bold text-emerald-700">
                PKR {{ Math.round(tx.amount * 0.9).toLocaleString() }}
              </td>
              <td class="px-4 py-3">
                <span
                  class="px-2 py-0.5 rounded-full text-[10px] font-bold"
                  :class="tx.status === 'SETTLED_TO_BANK' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
                >
                  {{ tx.status === 'SETTLED_TO_BANK' ? 'Settled to Bank' : 'Escrow Locked' }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <button
                  @click="openTaxInvoice(tx)"
                  class="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition"
                >
                  Tax Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal: Tax Invoice Preview -->
    <div
      v-if="activeInvoiceTx"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">Official Tax Invoice</h4>
              <div class="text-[10px] font-mono text-slate-400">{{ activeInvoiceTx.utr }}</div>
            </div>
          </div>
          <button @click="activeInvoiceTx = null" class="text-slate-400 hover:text-slate-700 font-bold text-sm">✕</button>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div class="flex justify-between">
            <span class="text-slate-500">Candidate:</span>
            <span class="font-bold text-slate-800">{{ activeInvoiceTx.candidateName }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">INDoS Ref:</span>
            <span class="font-mono text-slate-800">{{ activeInvoiceTx.indos }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Program:</span>
            <span class="font-medium text-slate-800">{{ activeInvoiceTx.courseTitle }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Batch Code:</span>
            <span class="font-mono text-blue-700 font-bold">{{ activeInvoiceTx.batchCode }}</span>
          </div>
          <div class="pt-2 border-t border-slate-200 flex justify-between font-bold">
            <span class="text-slate-900">Gross Tuition:</span>
            <span class="font-mono text-slate-900">PKR {{ activeInvoiceTx.amount.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between text-emerald-700 font-semibold">
            <span>Academy Payout (90%):</span>
            <span class="font-mono">PKR {{ Math.round(activeInvoiceTx.amount * 0.9).toLocaleString() }}</span>
          </div>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            @click="activeInvoiceTx = null"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Close
          </button>
          <button
            @click="downloadPdf"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs flex items-center space-x-1.5"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Signed PDF</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface TransactionItem {
  id: string;
  utr: string;
  date: string;
  candidateName: string;
  indos: string;
  courseTitle: string;
  batchCode: string;
  amount: number;
  status: string;
}

const props = withDefaults(
  defineProps<{
    transactions?: TransactionItem[];
  }>(),
  {
    transactions: () => [
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
    ],
  }
);

const activeInvoiceTx = ref<TransactionItem | null>(null);

function openTaxInvoice(tx: TransactionItem) {
  activeInvoiceTx.value = tx;
}

function downloadPdf() {
  alert(`Statutory Tax Invoice PDF generated and downloaded for ${activeInvoiceTx.value?.utr}.`);
  activeInvoiceTx.value = null;
}

function exportCsv() {
  alert('Exporting official MTI Financial Settlement Statement (CSV) for DG Shipping & Bank Audit...');
}
</script>
