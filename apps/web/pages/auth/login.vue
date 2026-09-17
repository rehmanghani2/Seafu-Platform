<template>
  <div class="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <!-- Ambient naval cyber background glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-md w-full space-y-6 relative z-10">
      <!-- Security / Statutory Badge -->
      <div class="flex items-center justify-center space-x-2 text-xs font-mono text-cyan-400 bg-[#0a1628] border border-cyan-900/50 py-1.5 px-3 rounded-full shadow-lg mx-auto w-fit">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>SSL &bull; ECDSA SHA-256 SECURED TERMINAL</span>
      </div>

      <!-- Main Login Card -->
      <div class="bg-[#0b172a] border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-7 sm:p-8 shadow-2xl shadow-slate-950/90 backdrop-blur-xl transition-colors">
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
          <h2 class="text-lg font-black text-white">Cadet & Faculty Single Sign-On</h2>
          <p class="mt-1 text-xs text-slate-400">
            Access your DG-approved records, simulator bookings, and certificate vault.
          </p>
        </div>

        <!-- Error Notification -->
        <div v-if="authStore.error" class="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center space-x-2">
          <svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ authStore.error }}</span>
        </div>

        <!-- Form -->
        <form class="mt-6 space-y-4" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between">
              <span>Seafarer Email / INDoS ID</span>
              <span class="text-[10px] text-slate-500 font-mono">CDC Linked</span>
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                placeholder="cadet@seafu.org or user@example.com"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label for="password" class="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Password
              </label>
              <a href="#" @click.prevent="showForgotNotice" class="text-[10px] text-cyan-400 hover:text-cyan-300">
                Forgot access key?
              </a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full bg-[#070e1a] border border-slate-700 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 text-xs"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <svg v-if="authStore.isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>{{ authStore.isLoading ? 'Authenticating...' : 'Authorize Terminal Sign In &rarr;' }}</span>
            </button>
          </div>
        </form>

        <!-- Quick Developer Test Accounts -->
        <div class="mt-6 pt-5 border-t border-slate-800">
          <div class="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2.5 text-center">
            &mdash; Quick Developer Test Personas &mdash;
          </div>
          <div class="grid grid-cols-3 gap-2">
            <button
              type="button"
              @click="fillTestAccount('cadet@seafu.org', 'cadet123')"
              class="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-[10px] text-slate-300 hover:text-cyan-300 transition text-center"
            >
              <div class="font-bold">Cadet</div>
              <div class="text-[9px] text-slate-500">Seafarer</div>
            </button>
            <button
              type="button"
              @click="fillTestAccount('admin@mti.edu.pk', 'inst123')"
              class="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-[10px] text-slate-300 hover:text-cyan-300 transition text-center"
            >
              <div class="font-bold">Institute</div>
              <div class="text-[9px] text-slate-500">Academy</div>
            </button>
            <button
              type="button"
              @click="fillTestAccount('admin@seafu.gov', 'admin123')"
              class="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-[10px] text-slate-300 hover:text-cyan-300 transition text-center"
            >
              <div class="font-bold">DG Admin</div>
              <div class="text-[9px] text-slate-500">Authority</div>
            </button>
          </div>
        </div>

        <div class="text-center mt-6 pt-4 border-t border-slate-800/80">
          <p class="text-xs text-slate-400">
            New to the maritime network?
            <NuxtLink to="/auth/register" class="font-bold text-cyan-400 hover:text-cyan-300 ml-1">
              Create Cadet or Academy Account &rarr;
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
import { UserRole } from '@seafu/shared-types';

const authStore = useAuthStore();
const showPassword = ref(false);

const form = ref({
  email: '',
  password: '',
});

function fillTestAccount(email: string, pass: string) {
  form.value.email = email;
  form.value.password = pass;
}

function showForgotNotice() {
  alert('For password recovery, please contact your Institute Registrar or DG Ports administrator with your CDC/INDoS reference.');
}

async function handleLogin() {
  try {
    const user = await authStore.login(form.value.email, form.value.password);
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
    console.error('Login error:', e);
  }
}
</script>
