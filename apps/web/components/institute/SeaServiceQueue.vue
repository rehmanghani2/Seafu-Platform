<template>
  <section
    aria-label="Cadet Credential and Sea Service Queue"
    class="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"
  >
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
      <div>
        <div class="flex items-center space-x-2">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          <h2 class="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Cadet Credential &amp; Sea Service Queue
          </h2>
        </div>
        <p class="text-xs text-slate-600 mt-0.5">
          Cryptographic sign-offs required for watchkeeping logbooks, sea service days, and STCW competencies.
        </p>
      </div>

      <div class="flex items-center space-x-2 shrink-0">
        <span class="px-3 py-1 bg-red-50 text-red-700 border border-red-200/80 rounded-full text-xs font-mono font-bold">
          {{ pendingCount }} Pending Verification
        </span>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs" aria-label="Cadet sea service sign-off ledger">
        <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
          <tr>
            <th scope="col" class="px-4 py-3 rounded-l-xl">CADET &amp; ID</th>
            <th scope="col" class="px-4 py-3">MODULE / CREDENTIAL</th>
            <th scope="col" class="px-4 py-3">SEA HOURS / DAYS</th>
            <th scope="col" class="px-4 py-3">SUBMITTING VESSEL</th>
            <th scope="col" class="px-4 py-3 rounded-r-xl text-right">ACTION</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr
            v-for="item in queueItems"
            :key="item.id"
            class="hover:bg-slate-50/70 transition"
          >
            <td class="px-4 py-3.5">
              <div class="font-bold text-slate-900">{{ item.cadetName }}</div>
              <span class="text-[11px] font-mono text-slate-500 font-normal">{{ item.cadetId }}</span>
            </td>
            <td class="px-4 py-3.5">
              <div class="font-semibold text-slate-900">{{ item.module }}</div>
              <span class="text-[11px] text-blue-700 font-medium">{{ item.credentialType }}</span>
            </td>
            <td class="px-4 py-3.5 font-mono text-slate-800 font-medium">
              {{ item.seaHours }}
            </td>
            <td class="px-4 py-3.5">
              <div class="font-medium text-slate-800 flex items-center space-x-1.5">
                <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{{ item.vessel }}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-500">{{ item.vesselImo }}</span>
            </td>
            <td class="px-4 py-3.5 text-right">
              <button
                v-if="item.status === 'PENDING'"
                @click="openSignoffModal(item)"
                type="button"
                class="px-3 py-1.5 bg-[#0A1936] hover:bg-[#112752] text-white text-xs font-bold rounded-lg transition shadow-2xs focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                Sign Off
              </button>
              <span
                v-else
                class="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold rounded-lg"
              >
                <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Signed</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Cryptographic Credential Sign-Off Modal -->
    <div
      v-if="selectedSignoffItem"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signoff-modal-title"
      @click.self="selectedSignoffItem = null"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 id="signoff-modal-title" class="text-sm sm:text-base font-bold text-slate-900">
                Cryptographic Credential Sign-Off
              </h3>
              <p class="text-[11px] text-slate-500">
                National Seafarer Sea-Time Ledger Verification
              </p>
            </div>
          </div>
          <button
            @click="selectedSignoffItem = null"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close sign-off modal"
          >
            ✕
          </button>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">
          You are about to digitally sign off on <strong class="text-slate-900">{{ selectedSignoffItem.seaHours }}</strong> for Cadet <strong class="text-slate-900">{{ selectedSignoffItem.cadetName }}</strong> (<span class="font-mono">{{ selectedSignoffItem.cadetId }}</span>). This action will append a secure SHA-256 cryptographic timestamp to the national seafarer registry.
        </p>

        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 space-y-1.5">
          <div class="flex justify-between">
            <span class="text-slate-500 font-sans">VESSEL / FACILITY:</span>
            <span class="font-bold text-slate-900">{{ selectedSignoffItem.vessel }} [{{ selectedSignoffItem.vesselImo }}]</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500 font-sans">MODULE:</span>
            <span class="text-blue-700 font-bold">{{ selectedSignoffItem.module }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500 font-sans">SIGN-OFF HASH:</span>
            <span class="text-slate-800">0x8f4c{{ selectedSignoffItem.id }}...3e1a</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500 font-sans">KEY ID:</span>
            <span class="text-emerald-800 font-bold">SEC-ADM-MASTER-04</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500 font-sans">TIMESTAMP:</span>
            <span class="text-slate-600">{{ currentTimestamp }}</span>
          </div>
        </div>

        <div class="flex justify-end space-x-2 pt-2 border-t border-slate-100">
          <button
            @click="selectedSignoffItem = null"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Cancel
          </button>
          <button
            @click="confirmSignoff"
            type="button"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Confirm &amp; Digitally Sign
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const emit = defineEmits<{
  (e: 'signed', item: any): void;
}>();

const selectedSignoffItem = ref<any>(null);

const currentTimestamp = ref(new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC');

const queueItems = ref([
  {
    id: 'q1',
    cadetName: 'Alex Mercer',
    cadetId: 'SMA-2023-481',
    module: 'STCW A-II/1 Deck Officer',
    credentialType: 'Watchkeeping Logbook',
    seaHours: '360 Hours / 45 Days',
    vessel: 'M/V Atlantic Titan',
    vesselImo: 'IMO 9821432',
    status: 'PENDING',
  },
  {
    id: 'q2',
    cadetName: 'Elena Rostova',
    cadetId: 'SMA-2022-109',
    module: 'STCW A-III/1 Engine Watch',
    credentialType: 'Motorman Competency',
    seaHours: '540 Hours / 60 Days',
    vessel: 'T/S Golden Horizon',
    vesselImo: 'IMO 9421881',
    status: 'PENDING',
  },
  {
    id: 'q3',
    cadetName: 'Marcus Vance',
    cadetId: 'SMA-2023-902',
    module: 'STCW A-VI/2 Survival Craft',
    credentialType: 'Practical Assessment',
    seaHours: '120 Hours / 15 Days',
    vessel: 'Simulated Facility Bay A',
    vesselImo: 'LAB-SIM-440',
    status: 'PENDING',
  },
  {
    id: 'q4',
    cadetName: 'Muhammad Tariq',
    cadetId: 'KHI-CDC-49102',
    module: 'STCW A-II/4 Navigational Watch',
    credentialType: 'Bridge Logbook Clearance',
    seaHours: '480 Hours / 60 Days',
    vessel: 'M/V Arabian Star',
    vesselImo: 'IMO 9741203',
    status: 'PENDING',
  },
]);

const pendingCount = computed(() => {
  return queueItems.value.filter((i) => i.status === 'PENDING').length;
});

function openSignoffModal(item: any) {
  selectedSignoffItem.value = item;
  currentTimestamp.value = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

function confirmSignoff() {
  if (selectedSignoffItem.value) {
    selectedSignoffItem.value.status = 'SIGNED';
    emit('signed', selectedSignoffItem.value);
    selectedSignoffItem.value = null;
  }
}
</script>
