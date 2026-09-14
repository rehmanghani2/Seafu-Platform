<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-ocean-900 to-navy-900 text-white py-24 sm:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-100 text-xs font-medium mb-6 border border-ocean-500/30">
            <span>🛡️ Official DG Shipping Approved Institutes Only</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Empowering Seafarers with Seamless Course Discovery & Verification
          </h1>
          <p class="mt-6 text-lg text-slate-300 leading-relaxed">
            Search, compare, and instantly book DG-approved Merchant Navy training courses across top institutes. Manage all your STCW certificates in a secure lifelong digital vault.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/courses" class="px-6 py-3 rounded-lg bg-ocean-500 text-white font-semibold hover:bg-ocean-600 transition shadow-lg">
              Explore DG Approved Courses
            </NuxtLink>
            <NuxtLink to="/auth/register?role=INSTITUTE" class="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/20">
              Institute Registration
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Highlights Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-slate-900">A Complete Digital Maritime Ecosystem</h2>
          <p class="mt-3 text-slate-600">Built to solve course discovery friction, paperwork delays, and credential forgery.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
            <div class="text-3xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Centralized Course Booking</h3>
            <p class="text-sm text-slate-600">
              Compare batches, schedules, and real-time seat availability across all accredited maritime institutes with instant online seat reservation.
            </p>
          </div>
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
            <div class="text-3xl mb-4">🔒</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Lifelong Certificate Vault</h3>
            <p class="text-sm text-slate-600">
              Your certificates, CDC, and medicals safely backed up in the cloud with automated expiry alerts and quick sharing for vessel sign-ons.
            </p>
          </div>
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
            <div class="text-3xl mb-4">📱</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Tamper-Proof QR Validation</h3>
            <p class="text-sm text-slate-600">
              Instant cryptographic QR verification allows ship owners, port authorities, and auditors to authenticate certificates in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
