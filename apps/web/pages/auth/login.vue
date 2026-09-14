<template>
  <div class="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <div class="text-center">
        <div class="text-4xl font-black text-ocean-700">? THE SEAFU</div>
        <h2 class="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-slate-600">
          Sign in to your maritime training & certification account
        </p>
      </div>

      <div v-if="authStore.error" class="p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
        {{ authStore.error }}
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700">Email address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-ocean-500 focus:border-ocean-500 text-sm"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
              <a href="#" class="text-xs text-ocean-600 hover:text-ocean-500">Forgot password?</a>
            </div>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-ocean-500 focus:border-ocean-500 text-sm"
              placeholder="????????"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-ocean-600 hover:bg-ocean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500 transition disabled:opacity-50"
          >
            <span v-if="authStore.isLoading">Signing in...</span>
            <span v-else>Sign In</span>
          </button>
        </div>
      </form>

      <div class="text-center mt-4">
        <p class="text-sm text-slate-600">
          Do not have an account?
          <NuxtLink to="/auth/register" class="font-medium text-ocean-600 hover:text-ocean-500">
            Create an account
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { UserRole } from '@seafu/shared-types';

const authStore = useAuthStore();
const form = ref({
  email: '',
  password: '',
});

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
    // Error is handled in store
  }
}
</script>
