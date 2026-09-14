import { defineStore } from 'pinia';
import { UserRole } from '@seafu/shared-types';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  phone?: string;
  indosNumber?: string;
  cdcNumber?: string;
  rank?: string;
  instituteId?: string;
  institute?: any;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    accessToken: null as string | null,
    refreshToken: null as string | null,
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken && !!state.user,
    isSeafarer: (state) => state.user?.role === UserRole.SEAFARER,
    isInstitute: (state) =>
      state.user?.role === UserRole.INSTITUTE_ADMIN ||
      state.user?.role === UserRole.INSTITUTE_STAFF,
    isAdmin: (state) =>
      state.user?.role === UserRole.ADMIN ||
      state.user?.role === UserRole.SUPER_ADMIN,
  },

  actions: {
    initAuth() {
      if (process.client) {
        const token = localStorage.getItem('seafu_access_token');
        const userJson = localStorage.getItem('seafu_user');
        const refToken = localStorage.getItem('seafu_refresh_token');

        if (token && userJson) {
          try {
            this.accessToken = token;
            this.user = JSON.parse(userJson);
            this.refreshToken = refToken;
          } catch (e) {
            this.logout();
          }
        }
      }
    },

    setSession(user: User, accessToken: string, refreshToken: string) {
      this.user = user;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;

      if (process.client) {
        localStorage.setItem('seafu_access_token', accessToken);
        localStorage.setItem('seafu_refresh_token', refreshToken);
        localStorage.setItem('seafu_user', JSON.stringify(user));
      }
    },

    async login(email: string, password: string) {
      this.isLoading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;

        const response: any = await $fetch(`${apiBase}/api/auth/login`, {
          method: 'POST',
          body: { email, password },
        });

        this.setSession(
          response.user,
          response.tokens.accessToken,
          response.tokens.refreshToken,
        );

        return response.user;
      } catch (err: any) {
        this.error =
          err?.data?.message || err?.message || 'Login failed. Please verify your credentials.';
        throw err;
      } finally {
        this.isLoading = false;
      }
    },

    async registerSeafarer(payload: {
      email: string;
      password: string;
      fullName: string;
      phone?: string;
      indosNumber?: string;
      cdcNumber?: string;
      rank?: string;
    }) {
      this.isLoading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;

        const response: any = await $fetch(`${apiBase}/api/auth/register/seafarer`, {
          method: 'POST',
          body: payload,
        });

        this.setSession(
          response.user,
          response.tokens.accessToken,
          response.tokens.refreshToken,
        );

        return response.user;
      } catch (err: any) {
        this.error =
          err?.data?.message || err?.message || 'Registration failed. Please check your inputs.';
        throw err;
      } finally {
        this.isLoading = false;
      }
    },

    async registerInstitute(payload: {
      email: string;
      password: string;
      contactPersonName: string;
      phone: string;
      instituteName: string;
      dgShippingApprovalNumber: string;
      city: string;
      state: string;
      address: string;
    }) {
      this.isLoading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;

        const response: any = await $fetch(`${apiBase}/api/auth/register/institute`, {
          method: 'POST',
          body: payload,
        });

        this.setSession(
          response.user,
          response.tokens.accessToken,
          response.tokens.refreshToken,
        );

        return response;
      } catch (err: any) {
        this.error =
          err?.data?.message || err?.message || 'Institute registration failed.';
        throw err;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;

      if (process.client) {
        localStorage.removeItem('seafu_access_token');
        localStorage.removeItem('seafu_refresh_token');
        localStorage.removeItem('seafu_user');
      }

      navigateTo('/auth/login');
    },
  },
});
