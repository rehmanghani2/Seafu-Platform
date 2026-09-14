import { useAuthStore } from '../stores/auth';
import { UserRole } from '@seafu/shared-types';

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const authStore = useAuthStore();
  authStore.initAuth();

  // If not logged in, redirect to login page
  if (!authStore.isAuthenticated) {
    return navigateTo({
      path: '/auth/login',
      query: { redirect: to.fullPath },
    });
  }

  const role = authStore.user?.role;

  // Protect Seafarer dashboard
  if (to.path.startsWith('/seafarer') && role !== UserRole.SEAFARER) {
    if (role === UserRole.INSTITUTE_ADMIN || role === UserRole.INSTITUTE_STAFF) {
      return navigateTo('/institute/dashboard');
    }
    if (role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) {
      return navigateTo('/admin/dashboard');
    }
  }

  // Protect Institute dashboard
  if (
    to.path.startsWith('/institute') &&
    role !== UserRole.INSTITUTE_ADMIN &&
    role !== UserRole.INSTITUTE_STAFF
  ) {
    return navigateTo('/');
  }

  // Protect Admin dashboard
  if (
    to.path.startsWith('/admin') &&
    role !== UserRole.ADMIN &&
    role !== UserRole.SUPER_ADMIN
  ) {
    return navigateTo('/');
  }
});
