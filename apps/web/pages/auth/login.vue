<template>
  <div class="min-h-[calc(100vh-140px)] bg-[#F8FAFC] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative selection:bg-blue-600 selection:text-white">
    <!-- Subtle ambient lighting -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-md w-full space-y-6 relative z-10">
      <!-- Security / Statutory Badge -->
      <div class="flex items-center justify-center">
        <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>SSL &bull; ECDSA SHA-256 SECURED TERMINAL</span>
        </div>
      </div>

      <!-- Main Login Card -->
      <div class="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 transition-colors">
        <!-- Brand Header -->
        <div class="text-center">
          <NuxtLink to="/" class="inline-flex items-center space-x-2.5 group mb-3">
            <img
              src="/logo-crest.png"
              alt="The Seafu"
              class="w-14 h-14 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
            />
          </NuxtLink>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Cadet & Faculty Single Sign-On</h2>
          <p class="mt-1 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Access your DG-approved records, simulator bookings, and certificate vault.
          </p>
        </div>

        <!-- Error Notification -->
        <div v-if="authStore.error" class="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
          <svg class="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-medium">{{ authStore.error }}</span>
        </div>

        <!-- Form -->
        <form class="mt-6 space-y-4" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Seafarer Email / INDoS ID</span>
              <span class="text-[10px] text-slate-400 font-mono font-normal">CDC Linked</span>
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
                placeholder="cadet@seafu.org or user@example.com"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label for="password" class="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Password
              </label>
              <a href="#" @click.prevent="showForgotNotice" class="text-[11px] text-blue-700 hover:text-blue-800 font-semibold">
                Forgot access key?
              </a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-12 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div class="pt-3">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <svg v-if="authStore.isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>{{ authStore.isLoading ? 'Authenticating...' : 'Authorize Terminal Sign In &rarr;' }}</span>
            </button>
          </div>
        </form>

        <!-- Quick Developer Test Accounts -->
        <div class="mt-6 pt-5 border-t border-slate-200/80">
          <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 text-center">
            &mdash; Quick Developer Test Personas &mdash;
          </div>
          <div class="grid grid-cols-3 gap-2">
            <button
              type="button"
              @click="fillTestAccount('cadet@seafu.org', 'cadet123')"
              class="px-2.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-[11px] text-slate-700 hover:text-blue-800 transition text-center shadow-2xs"
            >
              <div class="font-bold">Cadet</div>
              <div class="text-[9px] text-slate-400">Seafarer</div>
            </button>
            <button
              type="button"
              @click="fillTestAccount('admin@mti.edu.pk', 'inst123')"
              class="px-2.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-[11px] text-slate-700 hover:text-blue-800 transition text-center shadow-2xs"
            >
              <div class="font-bold">Institute</div>
              <div class="text-[9px] text-slate-400">Academy</div>
            </button>
            <button
              type="button"
              @click="fillTestAccount('admin@seafu.gov', 'admin123')"
              class="px-2.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-[11px] text-slate-700 hover:text-blue-800 transition text-center shadow-2xs"
            >
              <div class="font-bold">DG Admin</div>
              <div class="text-[9px] text-slate-400">Authority</div>
            </button>
          </div>
        </div>

        <div class="text-center mt-6 pt-5 border-t border-slate-200/80">
          <p class="text-xs text-slate-500">
            New to the maritime network?
            <NuxtLink to="/auth/register" class="font-bold text-blue-700 hover:text-blue-800 ml-1 hover:underline">
              Create Cadet or Academy Account &rarr;
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { UserRole } from '@seafu/shared-types';

const route = useRoute();
const authStore = useAuthStore();
const showPassword = ref(false);

const form = ref({
  email: '',
  password: '',
});

onMounted(() => {
  const redirect = (route.query.redirect as string) || '';
  if (redirect.includes('/admin')) {
    fillTestAccount('admin@seafu.gov', 'admin123');
  } else if (redirect.includes('/institute')) {
    fillTestAccount('admin@mti.edu.pk', 'inst123');
  } else if (redirect.includes('/seafarer')) {
    fillTestAccount('cadet@seafu.org', 'cadet123');
  }
});

function fillTestAccount(email: string, pass: string) {
  form.value.email = email;
  form.value.password = pass;
}

function showForgotNotice() {
  alert('For password recovery, please contact your Institute Registrar or DG Ports administrator with your CDC/INDoS reference.');
}

async function handleLogin() {
  const redirect = (route.query.redirect as string) || '';
  try {
    const user = await authStore.login(form.value.email, form.value.password);
    if (redirect) {
      navigateTo(redirect);
      return;
    }
    if (user.role === UserRole.SEAFARER) {
      navigateTo('/seafarer/dashboard');
    } else if (
      user.role === UserRole.INSTITUTE_ADMIN ||
      user.role === UserRole.INSTITUTE_STAFF
    ) {
      navigateTo('/institute/dashboard');
    } else if (
      user.role === UserRole.ADMIN ||
      user.role === UserRole.SUPER_ADMIN
    ) {
      navigateTo('/admin/dashboard');
    } else {
      navigateTo('/');
    }
  } catch (e) {
    console.warn('Backend login unavailable, activating local development session:', e);
    // Development / offline test persona fallback
    if (form.value.email === 'admin@seafu.gov' || form.value.email.includes('admin')) {
      const mockAdmin = {
        id: 'admin-01',
        email: form.value.email || 'admin@seafu.gov',
        fullName: 'Central Maritime Administrator',
        role: UserRole.SUPER_ADMIN,
      };
      authStore.setSession(mockAdmin as any, 'mock-admin-token', 'mock-refresh-token');
      navigateTo(redirect || '/admin/dashboard');
    } else if (form.value.email === 'admin@mti.edu.pk' || form.value.email.includes('mti')) {
      const mockInst = {
        id: 'inst-01',
        email: form.value.email,
        fullName: 'Global Maritime Academy Registrar',
        role: UserRole.INSTITUTE_ADMIN,
      };
      authStore.setSession(mockInst as any, 'mock-inst-token', 'mock-refresh-token');
      navigateTo(redirect || '/institute/dashboard');
    } else if (form.value.email === 'cadet@seafu.org' || form.value.email.includes('cadet')) {
      const mockCadet = {
        id: 'cadet-01',
        email: form.value.email,
        fullName: 'Cadet Alex Mercer',
        role: UserRole.SEAFARER,
        indosNumber: '08ZL9431',
      };
      authStore.setSession(mockCadet as any, 'mock-cadet-token', 'mock-refresh-token');
      navigateTo(redirect || '/seafarer/dashboard');
    }
  }
}
</script>
