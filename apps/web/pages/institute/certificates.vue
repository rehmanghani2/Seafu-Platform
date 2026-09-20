<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col"
    @keydown.esc="closeModals"
  >
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs" role="banner">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/institute/dashboard"
            class="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xl"
            aria-label="Back to Academy Console Home"
          >
            <div class="w-9 h-9 rounded-xl bg-[#0A1936] text-white flex items-center justify-center font-black text-sm shadow-xs border border-white/20 group-hover:bg-[#112752] transition">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-900 tracking-tight block">The Seafu</span>
              <span class="text-[10px] font-mono text-blue-700 font-semibold block leading-none">Academy Console</span>
            </div>
          </NuxtLink>
          <span class="hidden sm:inline-block text-slate-300 text-sm" aria-hidden="true">/</span>
          <nav aria-label="Breadcrumb" class="hidden sm:inline-block">
            <span class="text-xs font-semibold text-slate-700">Certificate Issuance &amp; QR</span>
          </nav>
        </div>

        <div class="flex items-center space-x-2.5">
          <button
            @click="showBatchCertModal = true"
            type="button"
            class="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Issue Batch</span>
          </button>
          <button
            @click="openNewCertModal"
            type="button"
            class="px-3.5 py-1.5 rounded-xl bg-[#0A1936] hover:bg-[#112752] text-white font-bold text-xs transition shadow-xs flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <svg class="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Issue Individual Certificate</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Two-column Layout -->
    <div class="flex-1 flex flex-col lg:flex-row w-full">
      <InstituteSidebarNav />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full" role="main">
        <!-- Title Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              Cryptographic Certificate Issuance &amp; Public QR Ledger
            </h1>
            <p class="text-xs text-slate-600 mt-1">
              ECDSA SHA-256 digital stamp &bull; Instant Port State Control scanner verification &bull; Direct sync with Seafarer Vault.
            </p>
          </div>

          <div class="flex items-center space-x-2 text-xs font-mono font-bold text-blue-800 bg-blue-100/90 px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true"></span>
            <span>ECDSA SHA-256 SEALED</span>
          </div>
        </div>

        <!-- 4 Certificate KPIs -->
        <section aria-label="Certification Statistics" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">TOTAL ISSUED</div>
            <div class="text-2xl font-bold font-display text-slate-900 font-mono tabular-nums">1,420</div>
            <div class="text-[11px] text-emerald-800 font-semibold">100% Cryptographic Match</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">PENDING ASSESSMENTS</div>
            <div class="text-2xl font-bold font-display text-amber-700 font-mono tabular-nums">12</div>
            <div class="text-[11px] text-slate-600 font-medium">Practical Fire &bull; Bridge Drill</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">READY FOR SIGNING</div>
            <div class="text-2xl font-bold font-display text-blue-700 font-mono tabular-nums">18</div>
            <div class="text-[11px] text-blue-800 font-semibold">Drills Complete</div>
          </div>

          <div class="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">PSC VERIFICATIONS</div>
            <div class="text-2xl font-bold font-display text-slate-900 font-mono tabular-nums">99.8%</div>
            <div class="text-[11px] text-emerald-800 font-semibold">Zero Fraud Incidents</div>
          </div>
        </section>

        <!-- Status Filter Tabs & Search -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto" role="tablist" aria-label="Certificate Status Tabs">
            <button
              v-for="tab in statusTabs"
              :key="tab.id"
              @click="activeStatusFilter = tab.id"
              type="button"
              class="px-3.5 py-2 rounded-xl text-xs font-semibold transition shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              :class="activeStatusFilter === tab.id
                ? 'bg-[#0A1936] text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
              role="tab"
              :aria-selected="activeStatusFilter === tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="relative w-full sm:w-72">
            <label for="cand-search-field" class="sr-only">Search Candidate</label>
            <input
              id="cand-search-field"
              v-model="searchCandidate"
              type="text"
              placeholder="Search candidate name or INDoS..."
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Tab View 1: Cadet Credential & Sea Service Sign-off Queue -->
        <div v-if="activeStatusFilter === 'SEA_SERVICE_QUEUE'">
          <InstituteSeaServiceQueue @signed="onSeaServiceSigned" />
        </div>

        <!-- Tab View 2: Candidate Certificates Table -->
        <div v-else class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs" aria-label="Candidate certificate ledger">
              <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">CANDIDATE</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">INDoS &bull; CDC</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">PROGRAM &bull; BATCH</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">ATTENDANCE &amp; SCORE</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">CERTIFICATE #</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">STATUS</th>
                  <th scope="col" class="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="cand in filteredCandidates" :key="cand.id" class="hover:bg-slate-50/70 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold font-display text-slate-900">{{ cand.name }}</div>
                    <div class="text-[11px] text-slate-500">{{ cand.email }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono tabular-nums">
                    <div class="font-bold text-blue-700">{{ cand.indos }}</div>
                    <div class="text-[10px] text-slate-500">CDC: {{ cand.cdc }}</div>
                  </td>
                  <td class="px-5 py-4 text-slate-700">
                    <div class="font-semibold text-slate-900">{{ cand.course }}</div>
                    <div class="text-[10px] text-slate-500 font-mono">Batch: {{ cand.batchCode }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono tabular-nums">
                    <span class="font-bold text-emerald-800">{{ cand.attendance }}</span>
                    <div class="text-[10px] text-slate-500">Exam: {{ cand.examScore }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono tabular-nums text-[11px]">
                    <span v-if="cand.certNumber" class="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{{ cand.certNumber }}</span>
                    <span v-else class="text-slate-400 italic">Not Generated</span>
                  </td>
                  <td class="px-5 py-4">
                    <span
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      :class="cand.status === 'ISSUED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
                    >
                      {{ cand.status === 'ISSUED' ? 'Issued' : 'Pending' }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button
                      v-if="cand.status !== 'ISSUED'"
                      @click="issueCert(cand)"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-2xs focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      Sign &amp; Issue QR
                    </button>
                    <button
                      v-else
                      @click="previewLiveQr(cand)"
                      type="button"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition inline-flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                      <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <span>View Live QR</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal: Interactive Port State Control (PSC) Scanner Preview (NEW) -->
    <div
      v-if="showQrModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="psc-modal-title"
      @click.self="showQrModal = false"
    >
      <div class="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4 text-center">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2 text-left">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 id="psc-modal-title" class="text-sm font-bold text-slate-900">Port State Control Verifier</h3>
              <div class="text-[10px] font-mono text-emerald-800 font-semibold">● CRYPTOGRAPHIC VALIDATION PASS</div>
            </div>
          </div>
          <button
            @click="showQrModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close QR modal"
          >
            ✕
          </button>
        </div>

        <!-- QR Box -->
        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <!-- Stylized QR Code Box -->
          <div class="w-40 h-40 mx-auto bg-white p-3 rounded-xl border border-slate-300 shadow-xs flex items-center justify-center">
            <svg class="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm10-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm-6 4h2v2h-2v-2zm8 0h2v2h-2v-2zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z"/>
            </svg>
          </div>

          <div class="font-mono text-xs font-bold text-slate-900">
            {{ selectedQrCandidate?.certNumber }}
          </div>
          <div class="text-xs text-slate-600">
            Issued to: <strong class="text-slate-900">{{ selectedQrCandidate?.name }}</strong> (INDoS: {{ selectedQrCandidate?.indos }})
          </div>
          <div class="text-[10px] font-mono text-slate-500 break-all bg-white p-2 rounded-lg border border-slate-200">
            SHA-256: 0x7f9a2b8e4c1d6f3a9e8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6
          </div>
        </div>

        <div class="flex justify-end space-x-2 pt-2">
          <button
            @click="showQrModal = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
          >
            Done
          </button>
          <NuxtLink
            :to="`/verify/${selectedQrCandidate?.certNumber}`"
            class="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A1936] text-white hover:bg-[#112752] transition shadow-xs"
          >
            Open Public Verifier &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Modal: Cryptographic Certificate Issuance -->
    <div
      v-if="showCertModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="issue-modal-title"
      @click.self="showCertModal = false"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 id="issue-modal-title" class="text-base font-bold text-slate-900">Cryptographic Certificate Issuance</h3>
            <p class="text-xs text-slate-500">Sign with ECDSA SHA-256 and generate public QR code.</p>
          </div>
          <button
            @click="showCertModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close issue modal"
          >
            ✕
          </button>
        </div>

        <form @submit.prevent="confirmIssue" class="space-y-4">
          <div>
            <label for="cand-name-input" class="block text-xs font-bold text-slate-700 mb-1">Candidate Name</label>
            <input
              id="cand-name-input"
              v-model="modalData.name"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="cand-indos-input" class="block text-xs font-bold text-slate-700 mb-1">INDoS ID</label>
              <input
                id="cand-indos-input"
                v-model="modalData.indos"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="cand-cdc-input" class="block text-xs font-bold text-slate-700 mb-1">CDC Seaman Book #</label>
              <input
                id="cand-cdc-input"
                v-model="modalData.cdc"
                type="text"
                required
                class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label for="cand-course-input" class="block text-xs font-bold text-slate-700 mb-1">Course &bull; Batch</label>
            <input
              id="cand-course-input"
              v-model="modalData.course"
              type="text"
              required
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Attach Signed Scanned Certificate</label>
            <div class="p-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center text-xs text-slate-500 hover:border-blue-400 transition cursor-pointer">
              <svg class="w-6 h-6 mx-auto text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Click or drag signed official certificate (PDF / Image)</span>
            </div>
          </div>

          <div class="p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-1">
            <div class="font-bold flex items-center space-x-1">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Cryptographic Seal Active</span>
            </div>
            <p class="text-[11px] leading-relaxed text-slate-700">
              Upon issuance, this certificate is stamped with MTI's cryptographic signature and published to the public verifier for instant PSC validation.
            </p>
          </div>

          <div class="pt-3 flex justify-end space-x-2 border-t border-slate-100">
            <button
              type="button"
              @click="showCertModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
              Sign &amp; Issue Certificate
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal: Issue Certificate Batch (FROM REFERENCE UI) -->
    <div
      v-if="showBatchCertModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-batch-cert-title"
      @click.self="showBatchCertModal = false"
    >
      <div class="max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-[#0A1936] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 id="modal-batch-cert-title" class="text-sm sm:text-base font-bold text-slate-900">Issue Certificate Batch</h3>
              <p class="text-[11px] text-slate-500">Bulk STCW Credential Stamping &amp; Registry Publish</p>
            </div>
          </div>
          <button
            @click="showBatchCertModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-700 font-bold text-sm p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            aria-label="Close batch modal"
          >
            ✕
          </button>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">
          Select training batch to generate bulk STCW credentials with unique cryptographic hashes and publish them directly to cadets' Seafu Digital Vaults.
        </p>

        <div class="space-y-4">
          <div>
            <label for="batch-select-input" class="block text-xs font-bold text-slate-700 mb-1">Select Batch</label>
            <select
              id="batch-select-input"
              v-model="selectedBatchForCert"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="Advanced Fire Fighting Batch #A-42 (24 Cadets)">Advanced Fire Fighting Batch #A-42 (24 Cadets)</option>
              <option value="Bridge Resource Management Batch #BRM-12 (18 Cadets)">Bridge Resource Management Batch #BRM-12 (18 Cadets)</option>
              <option value="General Purpose Rating Batch #GP3-2026-003 (40 Cadets)">General Purpose Rating Batch #GP3-2026-003 (40 Cadets)</option>
              <option value="ECDIS Type-Specific Simulator (15 Cadets)">ECDIS Type-Specific Simulator (15 Cadets)</option>
            </select>
          </div>

          <div>
            <label for="batch-authority-input" class="block text-xs font-bold text-slate-700 mb-1">Issuing Authority</label>
            <input
              id="batch-authority-input"
              type="text"
              readonly
              value="Global Maritime Academy &bull; MTI Principal Registrar"
              class="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 border border-slate-200 text-slate-700 outline-none font-medium"
            />
          </div>

          <div class="p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-1">
            <div class="font-bold flex items-center space-x-1">
              <svg class="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Cryptographic Batch Stamping</span>
            </div>
            <p class="text-[11px] leading-relaxed text-slate-700">
              All selected cadets will immediately receive their verifiable QR certificates and continuous discharge logbook clearance.
            </p>
          </div>
        </div>

        <div class="pt-2 flex justify-end space-x-2 border-t border-slate-100">
          <button
            @click="showBatchCertModal = false"
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition"
          >
            Cancel
          </button>
          <button
            @click="generateBatchCerts"
            type="button"
            class="px-5 py-2 rounded-xl text-xs font-bold bg-[#0A1936] hover:bg-[#112752] text-white transition shadow-xs focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            Generate Batch
          </button>
        </div>
      </div>
    </div>

    <!-- Live Toast Notification -->
    <div
      v-if="toastMessage"
      class="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#0A1936] text-white shadow-xl border border-slate-700 text-xs font-bold flex items-center space-x-2"
      role="status"
      aria-live="polite"
    >
      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Certificate Issuance & QR &bull; Academy Console',
});

const toastMessage = ref('');
function showToast(msg: string) {
  toastMessage.value = msg;
  setTimeout(() => {
    toastMessage.value = '';
  }, 3500);
}

const showCertModal = ref(false);
const showQrModal = ref(false);
const showBatchCertModal = ref(false);
const selectedBatchForCert = ref('Advanced Fire Fighting Batch #A-42 (24 Cadets)');
const selectedQrCandidate = ref<any>(null);
const activeStatusFilter = ref('ALL');
const searchCandidate = ref('');

const statusTabs = [
  { id: 'ALL', label: 'All Certificates (4)' },
  { id: 'ISSUED', label: 'Issued & Stamped (2)' },
  { id: 'PENDING_ASSESSMENT', label: 'Pending Assessment (1)' },
  { id: 'READY_FOR_ISSUE', label: 'Ready for Issue (1)' },
  { id: 'SEA_SERVICE_QUEUE', label: 'Sea Service Sign-offs (4)' },
];

function generateBatchCerts() {
  showBatchCertModal.value = false;
  showToast(`Bulk certificates issued for ${selectedBatchForCert.value} and dispatched to cadet vaults.`);
}

function onSeaServiceSigned(item: any) {
  showToast(`Sea-time credential verified & stamped for ${item.cadetName} (${item.module}).`);
}

const modalData = ref({
  name: '',
  indos: '',
  cdc: '',
  course: '',
});

const candidateCertificates = ref([
  {
    id: 'cand1',
    name: 'Cadet Alex Mercer',
    email: 'alex.mercer@seafu.org',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Bridge Resource Management (BRM)',
    batchCode: 'SIM-BRM-04',
    attendance: '100% (40 hrs)',
    examScore: '94% Pass',
    certNumber: 'IND-STCW-BRM-2026-9431',
    status: 'ISSUED',
  },
  {
    id: 'cand2',
    name: 'Cadet Muhammad Tariq',
    email: 'cadet.tariq@gmail.com',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
    batchCode: 'GP3-2026-003',
    attendance: '98% (180 days)',
    examScore: '89% Pass',
    certNumber: '',
    status: 'PENDING_ASSESSMENT',
  },
  {
    id: 'cand3',
    name: 'Officer Rajesh Sharma',
    email: 'r.sharma@merchantnavy.in',
    indos: '08ZL9431',
    cdc: 'MUM-149028',
    course: 'Advanced Fire Fighting (AFF)',
    batchCode: 'STCW-AFF-02',
    attendance: '100% (40 hrs)',
    examScore: '98% Pass',
    certNumber: 'IND-AFF-7714-ECDSA',
    status: 'ISSUED',
  },
  {
    id: 'cand4',
    name: 'Cadet Fatima Noor',
    email: 'fatima.noor@mti.edu.pk',
    indos: '09ZM4821',
    cdc: 'PAK-991204',
    course: 'ECDIS Type-Specific (IMO 1.27)',
    batchCode: 'SIM-ECDIS-01',
    attendance: '100% (24 hrs)',
    examScore: '92% Pass',
    certNumber: '',
    status: 'READY_FOR_ISSUE',
  },
]);

const filteredCandidates = computed(() => {
  return candidateCertificates.value.filter((cand) => {
    const matchesStatus = activeStatusFilter.value === 'ALL' || cand.status === activeStatusFilter.value;
    const matchesSearch = !searchCandidate.value || cand.name.toLowerCase().includes(searchCandidate.value.toLowerCase()) || cand.indos.toLowerCase().includes(searchCandidate.value.toLowerCase());
    return matchesStatus && matchesSearch;
  });
});

function openNewCertModal() {
  modalData.value = {
    name: 'Cadet Muhammad Tariq',
    indos: 'KHI-CDC-49102',
    cdc: 'PAK-883921',
    course: 'GP-III Pre-Sea Mandatory Rating',
  };
  showCertModal.value = true;
}

function issueCert(cand: any) {
  modalData.value = {
    name: cand.name,
    indos: cand.indos,
    cdc: cand.cdc,
    course: cand.course,
  };
  showCertModal.value = true;
}

function confirmIssue() {
  const target = candidateCertificates.value.find((c) => c.indos === modalData.value.indos);
  if (target) {
    target.status = 'ISSUED';
    target.certNumber = `MTI-DG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  showCertModal.value = false;
}

function previewLiveQr(cand: any) {
  selectedQrCandidate.value = cand;
  showQrModal.value = true;
}

function closeModals() {
  showCertModal.value = false;
  showQrModal.value = false;
  showBatchCertModal.value = false;
}
</script>
