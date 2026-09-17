<template>
  <div class="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <!-- Ambient naval cyber background glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-2xl w-full space-y-6 relative z-10">
      <!-- Security Badge -->
      <div class="flex items-center justify-center space-x-2 text-xs font-mono text-cyan-400 bg-[#0a1628] border border-cyan-900/50 py-1.5 px-3 rounded-full shadow-lg mx-auto w-fit">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>DG STATUTORY ACCREDITATION &bull; DIRECT ONBOARDING</span>
      </div>

      <!-- Main Register Card -->
      <div class="bg-[#0b172a] border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-7 sm:p-9 shadow-2xl shadow-slate-950/90 backdrop-blur-xl transition-colors">
        <!-- Brand Header -->
        <div class="text-center">
          <NuxtLink to="/" class="inline-flex items-center space-x-2.5 group mb-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-slate-950 p-0.5 shadow-lg shadow-cyan-500/20">
              <div class="w-full h-full bg-[#08101d] rounded-[9px] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <span class="text-xl font-black text-white tracking-tight">THE SEAFU</span>
          </NuxtLink>
          <h2 class="text-xl font-black text-white">Create Official Maritime Account</h2>
          <p class="mt-1 text-xs text-slate-400">
            Join the centralized Merchant Navy training, simulator reservation, and verified certificate network.
          </p>
        </div>

        <!-- Persona Selector Tabs -->
        <div class="grid grid-cols-2 gap-2 mt-6 p-1.5 bg-[#070e1a] border border-slate-800 rounded-xl">
          <button
            type="button"
            @click="activeRole = 'SEAFARER'"
            :class="[
              'py-2.5 px-4 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-2',
              activeRole === 'SEAFARER'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-white border border-transparent'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Seafarer / Cadet Profile</span>
          </button>
          <button
            type="button"
            @click="activeRole = 'INSTITUTE'"
            :class="[
              'py-2.5 px-4 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-2',
              activeRole === 'INSTITUTE'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-white border border-transparent'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Maritime Academy</span>
          </button>
        </div>

        <!-- Error Banner -->
        <div v-if="authStore.error" class="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center space-x-2">
          <svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ authStore.error }}</span>
        </div>

        <!-- Seafarer Registration Form -->
        <form v-if="activeRole === 'SEAFARER'" class="mt-6 space-y-4" @submit.prevent="handleRegisterSeafarer">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Candidate Full Name *
              </label>
              <input
                v-model="seafarerForm.fullName"
                type="text"
                required
                placeholder="e.g. Cadet Muhammad Tariq"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Official Email Address *
              </label>
              <input
                v-model="seafarerForm.email"
                type="email"
                required
                placeholder="cadet.tariq@gmail.com"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Access Password *
              </label>
              <input
                v-model="seafarerForm.password"
                type="password"
                required
                placeholder="Minimum 6 characters"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Mobile / WhatsApp Number
              </label>
              <input
                v-model="seafarerForm.phone"
                type="tel"
                placeholder="+92 336 XXXXXXX"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 flex items-center justify-between">
                <span>INDoS / CDC Reference</span>
                <span class="text-[10px] text-slate-500">Optional</span>
              </label>
              <input
                v-model="seafarerForm.indosNumber"
                type="text"
                placeholder="e.g. KHI-CDC-49102"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Cadet / Current Rank
              </label>
              <select
                v-model="seafarerForm.rank"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-medium"
              >
                <option value="">Select Rank / Status</option>
                <option value="Pre-Sea Deck Cadet">Pre-Sea Deck Cadet</option>
                <option value="Pre-Sea Engine Cadet">Pre-Sea Engine Cadet</option>
                <option value="GP-III Rating">GP-III Rating Trainee</option>
                <option value="Third Officer (3/O)">Third Officer (3/O)</option>
                <option value="Second Officer (2/O)">Second Officer (2/O)</option>
                <option value="Chief Officer">Chief Officer</option>
                <option value="Master Mariner">Master Mariner</option>
                <option value="Fourth Engineer">Fourth Engineer</option>
                <option value="Second Engineer">Second Engineer</option>
                <option value="Chief Engineer">Chief Engineer</option>
                <option value="Electro-Technical Officer">Electro-Technical Officer (ETO)</option>
              </select>
            </div>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{{ authStore.isLoading ? 'Enrolling Cadet...' : 'Create Cadet Profile & Open Vault &rarr;' }}</span>
            </button>
          </div>
        </form>

        <!-- Institute Registration Form -->
        <form v-else class="mt-6 space-y-4" @submit.prevent="handleRegisterInstitute">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Academy / Institute Name *
              </label>
              <input
                v-model="instituteForm.instituteName"
                type="text"
                required
                placeholder="e.g. Maritime Training Institute (MTI)"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                DG Ports Approval Code *
              </label>
              <input
                v-model="instituteForm.dgShippingApprovalNumber"
                type="text"
                required
                placeholder="e.g. DG-MTI-KHI-01"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Principal / Head of Studies *
              </label>
              <input
                v-model="instituteForm.contactPersonName"
                type="text"
                required
                placeholder="Captain / Chief Engineer"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Official Admissions Email *
              </label>
              <input
                v-model="instituteForm.email"
                type="email"
                required
                placeholder="admissions@mti.edu.pk"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Master Security Password *
              </label>
              <input
                v-model="instituteForm.password"
                type="password"
                required
                placeholder="Min 6 characters"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Campus City & State *
              </label>
              <input
                v-model="instituteForm.city"
                type="text"
                required
                placeholder="Karachi, Sindh"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div class="sm:col-span-2">
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Physical Campus / Simulator Yard Address *
              </label>
              <input
                v-model="instituteForm.address"
                type="text"
                required
                placeholder="Plot / Yard location, Marine Academy Road or KPT Apprentice Yard"
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div class="p-3 bg-cyan-950/40 rounded-xl border border-cyan-800/50 text-xs text-cyan-300 flex items-start space-x-2">
            <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Institute credentials undergo regulatory statutory audit and DG accreditation check before batches become bookable to cadets.</span>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{{ authStore.isLoading ? 'Registering Academy...' : 'Register Institute for Verification &rarr;' }}</span>
            </button>
          </div>
        </form>

        <div class="text-center mt-6 pt-4 border-t border-slate-800/80">
          <p class="text-xs text-slate-400">
            Already have an active account?
            <NuxtLink to="/auth/login" class="font-bold text-cyan-400 hover:text-cyan-300 ml-1">
              Terminal Sign In &rarr;
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
const activeRole = ref<'SEAFARER' | 'INSTITUTE'>('SEAFARER');

const seafarerForm = ref({
  fullName: '',
  email: '',
  password: '',
  phone: '',
  indosNumber: '',
  rank: '',
});

const instituteForm = ref({
  instituteName: '',
  dgShippingApprovalNumber: '',
  contactPersonName: '',
  email: '',
  password: '',
  phone: '',
  city: '',
  state: 'Sindh',
  address: '',
});

async function handleRegisterSeafarer() {
  try {
    await authStore.registerSeafarer(seafarerForm.value);
    navigateTo('/seafarer/dashboard');
  } catch (e) {
    console.error('Registration error:', e);
  }
}

async function handleRegisterInstitute() {
  try {
    await authStore.registerInstitute(instituteForm.value);
    navigateTo('/institute/dashboard');
  } catch (e) {
    console.error('Institute registration error:', e);
  }
}
</script>
