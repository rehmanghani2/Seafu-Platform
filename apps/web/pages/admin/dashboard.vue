<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Admin Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200">
      <div>
        <div class="flex items-center space-x-3">
          <h1 class="text-2xl font-bold text-slate-900">
            Platform Governance & Administration
          </h1>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
            Super Administrator
          </span>
        </div>
        <p class="text-sm text-slate-500 mt-1">
          Master control panel for DG institute verifications, courses compliance, and commissions oversight.
        </p>
      </div>

      <div class="mt-4 md:mt-0 flex items-center space-x-3">
        <button @click="authStore.logout()" class="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
          Sign Out
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Pending Approvals</div>
        <div class="text-3xl font-extrabold text-amber-600 mt-2">2</div>
        <div class="text-xs text-amber-700 mt-1">Institutes awaiting verification</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Verified Institutes</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">28</div>
        <div class="text-xs text-green-600 mt-1">Across 8 maritime states</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Bookings GMV</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">? 24,80,000</div>
        <div class="text-xs text-slate-500 mt-1">Dual invoiced</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Platform Commission</div>
        <div class="text-3xl font-extrabold text-ocean-600 mt-2">? 2,48,000</div>
        <div class="text-xs text-slate-500 mt-1">10% standardized rate</div>
      </div>
    </div>

    <!-- Pending Verification Approvals List -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm mt-10 overflow-hidden">
      <div class="p-6 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-900">Pending Training Institutes Verifications</h2>
          <p class="text-xs text-slate-500 mt-0.5">Validate DG Shipping accreditations before publishing to seafarers</p>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead class="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
            <tr>
              <th class="px-6 py-3">Institute Name</th>
              <th class="px-6 py-3">DG Approval Code</th>
              <th class="px-6 py-3">Location</th>
              <th class="px-6 py-3">Contact</th>
              <th class="px-6 py-3">Verification Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900">Southern Maritime Institute of Technology</td>
              <td class="px-6 py-4 font-mono text-xs text-slate-700">DG/TR/TN/2024/042</td>
              <td class="px-6 py-4 text-slate-600">Chennai, Tamil Nadu</td>
              <td class="px-6 py-4 text-slate-600">admissions@smit.edu</td>
              <td class="px-6 py-4 space-x-2">
                <button class="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition">
                  Approve
                </button>
                <button class="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded text-xs font-medium hover:bg-red-100 transition">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900">Goa Offshore & Safety Center</td>
              <td class="px-6 py-4 font-mono text-xs text-slate-700">DG/TR/GA/2024/019</td>
              <td class="px-6 py-4 text-slate-600">Panaji, Goa</td>
              <td class="px-6 py-4 text-slate-600">contact@goaoffshore.in</td>
              <td class="px-6 py-4 space-x-2">
                <button class="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition">
                  Approve
                </button>
                <button class="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded text-xs font-medium hover:bg-red-100 transition">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({
  middleware: ['auth'],
});

const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuth();
});
</script>
