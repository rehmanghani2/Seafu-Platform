<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Welcome Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200">
      <div>
        <h1 class="text-2xl font-bold text-slate-900">
          Welcome aboard, {{ authStore.user?.fullName || 'Seafarer' }}
        </h1>
        <p class="text-sm text-slate-500 mt-1">
          Rank: <span class="font-medium text-slate-700">{{ authStore.user?.rank || 'Cadet / Officer' }}</span> | 
          INDoS: <span class="font-mono text-slate-700">{{ authStore.user?.indosNumber || 'Not configured' }}</span>
        </p>
      </div>

      <div class="mt-4 md:mt-0 flex items-center space-x-3">
        <NuxtLink to="/courses" class="px-4 py-2 rounded-lg bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-700 transition shadow-sm">
          Book New Course
        </NuxtLink>
        <button @click="authStore.logout()" class="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
          Sign Out
        </button>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Bookings</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">1</div>
        <div class="text-xs text-ocean-600 mt-1">Next batch starts in 5 days</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Vault Documents</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">6</div>
        <div class="text-xs text-green-600 mt-1">All documents valid</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Verified Certificates</div>
        <div class="text-3xl font-extrabold text-slate-900 mt-2">4</div>
        <div class="text-xs text-slate-500 mt-1">QR verification active</div>
      </div>

      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="text-slate-500 text-xs font-semibold uppercase tracking-wider">Digital Resume</div>
        <div class="text-3xl font-extrabold text-green-600 mt-2">100%</div>
        <div class="text-xs text-slate-500 mt-1">Ready for vessel placement</div>
      </div>
    </div>

    <!-- Main Navigation Blocks -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <!-- Upcoming Courses Block -->
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold text-slate-900">Enrolled Batches</h2>
          <NuxtLink to="/courses" class="text-xs font-semibold text-ocean-600 hover:text-ocean-500">Explore Directory &rarr;</NuxtLink>
        </div>
        <div class="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
          <div>
            <div class="font-semibold text-slate-900 text-sm">Advanced Fire Fighting (AFF)</div>
            <div class="text-xs text-slate-500 mt-0.5">Maritime Training Academy ? Mumbai</div>
            <div class="text-xs text-slate-400 mt-1">Batch: 22 Sep - 26 Sep 2026</div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
            Confirmed
          </span>
        </div>
      </div>

      <!-- Certificate Vault Quick Status -->
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold text-slate-900">Certificate Vault</h2>
          <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA" class="text-xs font-semibold text-ocean-600 hover:text-ocean-700">
            Open Cryptographic Dossier &rarr;
          </NuxtLink>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex items-center justify-between p-3 rounded-lg bg-slate-50">
            <div>
              <span class="font-medium text-slate-800">STCW Basic Safety Training</span>
              <div class="text-xs text-slate-400">Issued by DG Shipping Approved Center</div>
            </div>
            <span class="text-xs font-mono text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded">QR Valid</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-slate-50">
            <div>
              <span class="font-medium text-slate-800">Proficiency in Survival Craft (PSCRB)</span>
              <div class="text-xs text-slate-400">Valid until 2028</div>
            </div>
            <span class="text-xs font-mono text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded">QR Valid</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Job Board CTA Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <NuxtLink to="/jobs"
        class="group flex items-center gap-4 p-5 rounded-xl border transition"
        style="background:#0a1628; border-color:#0c1a2e; color:#e2e8f0;"
        onmouseenter="this.style.borderColor='#0369A1'"
        onmouseleave="this.style.borderColor='#0c1a2e'">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style="background:#0369A120; border:1px solid #0369A140;">
          ⚓
        </div>
        <div>
          <div class="font-bold text-sm" style="color:#e2e8f0;">Maritime Job Board</div>
          <div class="text-xs mt-0.5" style="color:#64748b;">Browse shipboard &amp; shore-based positions</div>
        </div>
        <span class="ml-auto text-lg" style="color:#0369A1;">→</span>
      </NuxtLink>

      <NuxtLink to="/jobs/my-applications"
        class="group flex items-center gap-4 p-5 rounded-xl border transition"
        style="background:#0a1628; border-color:#0c1a2e; color:#e2e8f0;"
        onmouseenter="this.style.borderColor='#0369A1'"
        onmouseleave="this.style.borderColor='#0c1a2e'">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style="background:#0369A120; border:1px solid #0369A140;">
          📋
        </div>
        <div>
          <div class="font-bold text-sm" style="color:#e2e8f0;">My Applications</div>
          <div class="text-xs mt-0.5" style="color:#64748b;">Track Applied → Shortlisted → Selected</div>
        </div>
        <span class="ml-auto text-lg" style="color:#0369A1;">→</span>
      </NuxtLink>

      <NuxtLink to="/vault/dossier/IND-AFF-7714-ECDSA"
        class="group flex items-center gap-4 p-5 rounded-xl border transition"
        style="background:#0a1628; border-color:#0c1a2e; color:#e2e8f0;"
        onmouseenter="this.style.borderColor='#00E5FF'"
        onmouseleave="this.style.borderColor='#0c1a2e'">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style="background:#00E5FF15; border:1px solid #00E5FF30;">
          🔐
        </div>
        <div>
          <div class="font-bold text-sm" style="color:#e2e8f0;">Cryptographic Dossier</div>
          <div class="text-xs mt-0.5" style="color:#64748b;">ECDSA signed · QR shareable profile</div>
        </div>
        <span class="ml-auto text-lg" style="color:#00E5FF;">→</span>
      </NuxtLink>
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
