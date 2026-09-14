<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Institute Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200">
      <div>
        <div class="flex items-center space-x-3">
          <h1 class="text-2xl font-bold text-slate-900">
            {{ authStore.user?.institute?.name || 'Maritime Training Academy' }}
          </h1>
          <span
            :class="[
              'px-2.5 py-0.5 rounded-full text-xs font-semibold',
              isVerified ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
            ]"
          >
            {{ isVerified ? 'Verified DG Center' : 'Pending Admin Verification' }}
          </span>
        </div>
        <p class="text-sm text-slate-500 mt-1">
          DG Code: <span class="font-mono font-medium text-slate-700">{{ authStore.user?.institute?.dgShippingApprovalNumber || 'DG/TR/2024/001' }}</span> ? 
          Administrator: <span class="text-slate-700">{{ authStore.user?.fullName }}</span>
        </p>
      </div>

      <div class="mt-4 md:mt-0 flex items-center space-x-3">
        <button class="px-4 py-2 rounded-lg bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-700 transition shadow-sm">
          + Add New Course
        </button>
        <button @click="authStore.logout()" class="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
          Sign Out
        </button>
      </div>
    </div>

    <!-- Verification Banner if pending -->
    <div v-if="!isVerified" class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start space-x-3">
      <span class="text-xl">??</span>
      <div>
        <h4 class="font-bold text-sm">Account Under Verification</h4>
        <p class="text-xs text-amber-800 mt-1">
          Your DG Shipping accreditation and institute profile are currently undergoing administrator compliance verification. Once verified, your course batches will be publicly visible and open for instant candidate bookings.
        </p>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Published Courses</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">12</div>
        <div class="text-xs text-ocean-600 mt-1">DG Shipping Approved</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Batches</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">4</div>
        <div class="text-xs text-slate-500 mt-1">Ongoing this week</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Enrolled Candidates</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">84</div>
        <div class="text-xs text-green-600 mt-1">92% seat occupancy</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Gross Booking Revenue</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">? 4,20,000</div>
        <div class="text-xs text-slate-500 mt-1">Current month payouts</div>
      </div>
    </div>

    <!-- Recent Batches Table -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm mt-10 overflow-hidden">
      <div class="p-6 border-b border-slate-200 flex items-center justify-between">
        <h2 class="text-lg font-bold text-slate-900">Upcoming Batches & Seat Management</h2>
        <span class="text-xs text-slate-500">Real-time inventory</span>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead class="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
            <tr>
              <th class="px-6 py-3">Course</th>
              <th class="px-6 py-3">Start Date</th>
              <th class="px-6 py-3">Seats</th>
              <th class="px-6 py-3">Price</th>
              <th class="px-6 py-3">Status</th>
              <th class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900">Advanced Fire Fighting (AFF)</td>
              <td class="px-6 py-4 text-slate-600">22 Sep 2026</td>
              <td class="px-6 py-4 text-slate-600">18 / 24 Booked</td>
              <td class="px-6 py-4 font-mono text-slate-900">? 8,500</td>
              <td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">Open</span></td>
              <td class="px-6 py-4"><a href="#" class="text-ocean-600 hover:text-ocean-700 font-medium text-xs">Manage Batch</a></td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium text-slate-900">Proficiency in Fast Rescue Boats (PFRB)</td>
              <td class="px-6 py-4 text-slate-600">28 Sep 2026</td>
              <td class="px-6 py-4 text-slate-600">12 / 16 Booked</td>
              <td class="px-6 py-4 font-mono text-slate-900">? 11,000</td>
              <td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">Open</span></td>
              <td class="px-6 py-4"><a href="#" class="text-ocean-600 hover:text-ocean-700 font-medium text-xs">Manage Batch</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { InstituteVerificationStatus } from '@seafu/shared-types';

definePageMeta({
  middleware: ['auth'],
});

const authStore = useAuthStore();

const isVerified = computed(() => {
  return (
    authStore.user?.institute?.verificationStatus ===
    InstituteVerificationStatus.VERIFIED
  );
});

onMounted(() => {
  authStore.initAuth();
});
</script>
