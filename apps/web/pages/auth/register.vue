<template>
  <div class="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <div class="text-center">
        <div class="text-4xl font-black text-ocean-700">? THE SEAFU</div>
        <h2 class="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          Create your Seafu Account
        </h2>
        <p class="mt-2 text-sm text-slate-600">
          Join the centralized digital Merchant Navy training network
        </p>
      </div>

      <!-- Persona Selector Tabs -->
      <div class="flex border-b border-slate-200">
        <button
          type="button"
          @click="activeRole = 'SEAFARER'"
          :class="[
            'flex-1 py-3 text-sm font-semibold text-center border-b-2 transition',
            activeRole === 'SEAFARER'
              ? 'border-ocean-600 text-ocean-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          ]"
        >
          ?? I am a Seafarer / Trainee
        </button>
        <button
          type="button"
          @click="activeRole = 'INSTITUTE'"
          :class="[
            'flex-1 py-3 text-sm font-semibold text-center border-b-2 transition',
            activeRole === 'INSTITUTE'
              ? 'border-ocean-600 text-ocean-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          ]"
        >
          ?? Maritime Training Institute
        </button>
      </div>

      <div v-if="authStore.error" class="p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
        {{ authStore.error }}
      </div>

      <!-- Seafarer Registration Form -->
      <form v-if="activeRole === 'SEAFARER'" class="space-y-4" @submit.prevent="handleRegisterSeafarer">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700">Full Name *</label>
            <input
              v-model="seafarerForm.fullName"
              type="text"
              required
              placeholder="e.g. Captain Rajesh Kumar"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Email Address *</label>
            <input
              v-model="seafarerForm.email"
              type="email"
              required
              placeholder="rajesh@example.com"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Password *</label>
            <input
              v-model="seafarerForm.password"
              type="password"
              required
              placeholder="Min 6 characters"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Mobile Number</label>
            <input
              v-model="seafarerForm.phone"
              type="tel"
              placeholder="+91 9876543210"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">INDoS Number (Optional)</label>
            <input
              v-model="seafarerForm.indosNumber"
              type="text"
              placeholder="e.g. 05GL1234"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Current Rank</label>
            <input
              v-model="seafarerForm.rank"
              type="text"
              placeholder="e.g. 2nd Officer / 3rd Engineer"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="authStore.isLoading"
          class="w-full py-2.5 px-4 rounded-lg bg-ocean-600 hover:bg-ocean-700 text-white font-medium text-sm transition shadow-sm mt-4 disabled:opacity-50"
        >
          <span v-if="authStore.isLoading">Creating account...</span>
          <span v-else>Register as Seafarer</span>
        </button>
      </form>

      <!-- Institute Registration Form -->
      <form v-else class="space-y-4" @submit.prevent="handleRegisterInstitute">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700">Institute Official Name *</label>
            <input
              v-model="instituteForm.instituteName"
              type="text"
              required
              placeholder="e.g. Anglo-Eastern Maritime Academy"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">DG Shipping Approval Code *</label>
            <input
              v-model="instituteForm.dgShippingApprovalNumber"
              type="text"
              required
              placeholder="e.g. DG/TR/MH/2024/011"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Official Contact Person *</label>
            <input
              v-model="instituteForm.contactPersonName"
              type="text"
              required
              placeholder="Capt. Ramesh / Principal"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Official Email *</label>
            <input
              v-model="instituteForm.email"
              type="email"
              required
              placeholder="admissions@academy.edu"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">Password *</label>
            <input
              v-model="instituteForm.password"
              type="password"
              required
              placeholder="Min 6 characters"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">City *</label>
            <input
              v-model="instituteForm.city"
              type="text"
              required
              placeholder="e.g. Mumbai"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700">State *</label>
            <input
              v-model="instituteForm.state"
              type="text"
              required
              placeholder="e.g. Maharashtra"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700">Campus Address *</label>
            <input
              v-model="instituteForm.address"
              type="text"
              required
              placeholder="Street name, landmark, area"
              class="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div class="p-3 bg-ocean-50 rounded-lg border border-ocean-200 text-xs text-ocean-800">
          ?? Institute registrations undergo administrative verification before course listings become publicly bookable.
        </div>

        <button
          type="submit"
          :disabled="authStore.isLoading"
          class="w-full py-2.5 px-4 rounded-lg bg-ocean-600 hover:bg-ocean-700 text-white font-medium text-sm transition shadow-sm mt-4 disabled:opacity-50"
        >
          <span v-if="authStore.isLoading">Submitting application...</span>
          <span v-else>Register Institute for Verification</span>
        </button>
      </form>

      <div class="text-center mt-4">
        <p class="text-sm text-slate-600">
          Already have an account?
          <NuxtLink to="/auth/login" class="font-medium text-ocean-600 hover:text-ocean-500">
            Sign In
          </NuxtLink>
        </p>
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
  state: '',
  address: '',
});

async function handleRegisterSeafarer() {
  try {
    await authStore.registerSeafarer(seafarerForm.value);
    navigateTo('/seafarer/dashboard');
  } catch (e) {
    // Error is handled in store
  }
}

async function handleRegisterInstitute() {
  try {
    await authStore.registerInstitute(instituteForm.value);
    navigateTo('/institute/dashboard');
  } catch (e) {
    // Error is handled in store
  }
}
</script>
