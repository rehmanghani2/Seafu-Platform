<template>
  <div class="min-h-[calc(100vh-140px)] bg-[#F8FAFC] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative selection:bg-blue-600 selection:text-white">
    <!-- Subtle ambient lighting -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-2xl w-full space-y-6 relative z-10">
      <!-- Security Badge -->
      <div class="flex items-center justify-center">
        <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>DG Statutory Accreditation &bull; Direct Onboarding</span>
        </div>
      </div>

      <!-- Main Register Card -->
      <div class="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-10 shadow-xl shadow-slate-200/50 transition-colors">
        <!-- Brand Header -->
        <div class="text-center">
          <NuxtLink to="/" class="inline-flex items-center space-x-2.5 group mb-3">
            <img
              src="/logo-crest.png"
              alt="The Seafu"
              class="w-14 h-14 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
            />
          </NuxtLink>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Create Official Maritime Account</h2>
          <p class="mt-1 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Join the centralized Merchant Navy training, simulator reservation, and verified certificate network.
          </p>
        </div>

        <!-- Persona Selector Tabs -->
        <div class="grid grid-cols-2 gap-2 mt-6 p-1.5 bg-slate-100/90 border border-slate-200/80 rounded-2xl">
          <button
            type="button"
            @click="activeRole = 'SEAFARER'"
            :class="[
              'py-2.5 px-4 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-2',
              activeRole === 'SEAFARER'
                ? 'bg-[#0A1936] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
              'py-2.5 px-4 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-2',
              activeRole === 'INSTITUTE'
                ? 'bg-[#0A1936] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Maritime Academy</span>
          </button>
        </div>

        <!-- Error Banner -->
        <div v-if="authStore.error" class="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
          <svg class="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-medium">{{ authStore.error }}</span>
        </div>

        <!-- Seafarer Registration Form -->
        <form v-if="activeRole === 'SEAFARER'" class="mt-6 space-y-4" @submit.prevent="handleRegisterSeafarer">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Candidate Full Name *
              </label>
              <input
                v-model="seafarerForm.fullName"
                type="text"
                required
                placeholder="e.g. Cadet Muhammad Tariq"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Official Email Address *
              </label>
              <input
                v-model="seafarerForm.email"
                type="email"
                required
                placeholder="cadet.tariq@gmail.com"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Access Password *
              </label>
              <input
                v-model="seafarerForm.password"
                type="password"
                required
                placeholder="Minimum 6 characters"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile / WhatsApp Number
              </label>
              <input
                v-model="seafarerForm.phone"
                type="tel"
                placeholder="+92 336 XXXXXXX"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                <span>INDoS / CDC Reference</span>
                <span class="text-[10px] text-slate-400 font-normal">Optional</span>
              </label>
              <input
                v-model="seafarerForm.indosNumber"
                type="text"
                placeholder="e.g. KHI-CDC-49102"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 font-mono transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Cadet / Current Rank
              </label>
              <select
                v-model="seafarerForm.rank"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 font-medium transition"
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

          <div class="pt-3">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{{ authStore.isLoading ? 'Enrolling Cadet...' : 'Create Cadet Profile & Open Vault &rarr;' }}</span>
            </button>
          </div>
        </form>

        <!-- Institute Registration Form -->
        <form v-else class="mt-6 space-y-4" @submit.prevent="handleRegisterInstitute">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Academy / Institute Name *
              </label>
              <input
                v-model="instituteForm.instituteName"
                type="text"
                required
                placeholder="e.g. Maritime Training Institute (MTI)"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                DG Ports Approval Code *
              </label>
              <input
                v-model="instituteForm.dgShippingApprovalNumber"
                type="text"
                required
                placeholder="e.g. DG-MTI-KHI-01"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 font-mono transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Principal / Head of Studies *
              </label>
              <input
                v-model="instituteForm.contactPersonName"
                type="text"
                required
                placeholder="Captain / Chief Engineer"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Official Admissions Email *
              </label>
              <input
                v-model="instituteForm.email"
                type="email"
                required
                placeholder="admissions@mti.edu.pk"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Master Security Password *
              </label>
              <input
                v-model="instituteForm.password"
                type="password"
                required
                placeholder="Min 6 characters"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Campus City & State *
              </label>
              <input
                v-model="instituteForm.city"
                type="text"
                required
                placeholder="Karachi, Sindh"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div class="sm:col-span-2">
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Physical Campus / Simulator Yard Address *
              </label>
              <input
                v-model="instituteForm.address"
                type="text"
                required
                placeholder="Plot / Yard location, Marine Academy Road or KPT Apprentice Yard"
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>
          </div>

          <div class="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/80 text-xs text-blue-900 flex items-start space-x-2.5">
            <svg class="w-4 h-4 text-blue-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="leading-relaxed">Institute credentials undergo regulatory statutory audit and DG accreditation check before batches become bookable to cadets.</span>
          </div>

          <div class="pt-3">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{{ authStore.isLoading ? 'Registering Academy...' : 'Register Institute for Verification &rarr;' }}</span>
            </button>
          </div>
        </form>

        <div class="text-center mt-6 pt-5 border-t border-slate-200/80">
          <p class="text-xs text-slate-500">
            Already have an active account?
            <NuxtLink to="/auth/login" class="font-bold text-blue-700 hover:text-blue-800 ml-1 hover:underline">
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
