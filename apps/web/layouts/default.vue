<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-black tracking-tight text-ocean-700">⚓ THE SEAFU</span>
          </NuxtLink>
        </div>

        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <NuxtLink to="/" class="hover:text-ocean-600 transition">Home</NuxtLink>
          <NuxtLink to="/courses" class="hover:text-ocean-600 transition">Find Courses</NuxtLink>
          <NuxtLink to="/#institutes" class="hover:text-ocean-600 transition">Institutes</NuxtLink>
          <NuxtLink to="/#about" class="hover:text-ocean-600 transition">About Us</NuxtLink>
        </nav>

        <div class="flex items-center space-x-4">
          <NuxtLink to="/auth/login" class="text-sm font-medium text-slate-700 hover:text-ocean-600 transition">
            Log In
          </NuxtLink>
          <NuxtLink to="/auth/register" class="text-sm font-medium px-4 py-2 rounded-lg bg-ocean-600 text-white hover:bg-ocean-700 transition shadow-sm">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-navy-900 text-slate-300 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="text-xl font-bold text-white mb-3">⚓ THE SEAFU</div>
          <p class="text-xs text-slate-400 leading-relaxed">
            The single digital ecosystem for DG-approved Merchant Navy training, bookings, and verified maritime certificate vaults.
          </p>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Courses</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><NuxtLink to="/courses?category=STCW_BASIC" class="hover:text-white">STCW Basic Safety</NuxtLink></li>
            <li><NuxtLink to="/courses?category=STCW_ADVANCED" class="hover:text-white">Advanced Modular</NuxtLink></li>
            <li><NuxtLink to="/courses?category=SIMULATOR" class="hover:text-white">Simulator Training</NuxtLink></li>
            <li><NuxtLink to="/courses?category=REFRESHER" class="hover:text-white">Refresher Courses</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wider">For Stakeholders</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><NuxtLink to="/auth/register?role=SEAFARER" class="hover:text-white">Seafarers Portal</NuxtLink></li>
            <li><NuxtLink to="/auth/register?role=INSTITUTE" class="hover:text-white">Institute Partner Onboarding</NuxtLink></li>
            <li><NuxtLink to="/admin" class="hover:text-white">Admin Management</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Compliance & Trust</h4>
          <p class="text-xs text-slate-400">
            Verified DG Shipping approvals, tamper-proof QR validation, and secure cloud certificate storage.
          </p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
        © 2026 The Seafu Platform. All rights reserved.
      </div>
    </footer>
  </div>
</template>
