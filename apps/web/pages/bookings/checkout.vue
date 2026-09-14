<template>
  <div class="min-h-screen bg-[#070d18] text-slate-100 font-sans antialiased pb-16">
    <!-- Top Maritime Circular Ticker -->
    <div class="bg-[#031726] border-b border-cyan-950/60 px-4 py-1.5 text-[11px] flex flex-wrap items-center justify-between text-slate-400">
      <div class="flex items-center space-x-3 overflow-hidden">
        <span class="inline-flex items-center space-x-1.5 text-cyan-400 font-bold uppercase tracking-wider text-[10px]">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>DG SHIPPING CIRCULAR:</span>
        </span>
        <span class="text-slate-300 truncate">
          MS Notice 04/2024 ? Mandatory Electronic Seatime Verification & STCW-2010 Refresher Compliance
        </span>
      </div>
      <div class="hidden md:flex items-center space-x-6 text-[10px] text-slate-400 font-mono">
        <span>IMO Circular Ref: <strong>STCW.7/Circ.24</strong></span>
        <span class="text-cyan-400">Maritime Safety Desk (24/7 Ops)</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="border-b border-slate-800 bg-[#091122]/90 backdrop-blur sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-xl font-black tracking-tight text-white flex items-center">
              ? THE <span class="text-cyan-400 ml-1">SEAFU</span>
            </span>
          </NuxtLink>
          <div class="hidden lg:flex items-center space-x-6 text-xs text-slate-300 font-medium">
            <NuxtLink to="/courses" class="hover:text-cyan-400 text-cyan-400 transition">Courses & STCW</NuxtLink>
            <NuxtLink to="/seafarer/dashboard" class="hover:text-cyan-400 transition">Certificate Vault</NuxtLink>
            <NuxtLink to="/#institutes" class="hover:text-cyan-400 transition">Institute Registry</NuxtLink>
            <NuxtLink to="/#webinars" class="hover:text-cyan-400 transition">Webinars & Safety</NuxtLink>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>INDoS: <strong>08ZL9431</strong> VERIFIED</span>
          </div>

          <div class="flex items-center bg-[#0d1c33] rounded-lg p-0.5 text-[10px] font-mono border border-slate-700">
            <button class="px-2 py-0.5 rounded bg-cyan-600 text-white font-bold">INR</button>
            <button class="px-2 py-0.5 text-slate-400 hover:text-white">USD</button>
          </div>

          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-400/40 flex items-center justify-center text-xs font-bold text-cyan-200">
              RS
            </div>
            <div class="hidden md:block text-left text-xs">
              <div class="font-bold text-white leading-none">Capt. R. Sharma</div>
              <div class="text-[10px] text-cyan-400 font-mono mt-0.5">Chief Officer / FG</div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Checkout Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <!-- Checkout Stepper & Quota Timer Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <!-- Stepper -->
        <div class="flex items-center space-x-3 text-xs">
          <div
            :class="[
              'flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium transition cursor-pointer',
              currentStep === 1
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            ]"
            @click="currentStep = 1"
          >
            <span class="w-4 h-4 rounded-full bg-slate-900 text-cyan-400 text-[10px] flex items-center justify-center font-mono">1</span>
            <span>Candidate & Sea-Time</span>
          </div>
          <span class="text-slate-600">&rarr;</span>
          <div
            :class="[
              'flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium transition cursor-pointer',
              currentStep === 2
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            ]"
            @click="currentStep = 2"
          >
            <span class="w-4 h-4 rounded-full bg-slate-900 text-cyan-400 text-[10px] flex items-center justify-center font-mono">2</span>
            <span>Dual-Invoice Ledger</span>
          </div>
          <span class="text-slate-600">&rarr;</span>
          <div
            :class="[
              'flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium transition cursor-pointer',
              currentStep === 3
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-500'
            ]"
          >
            <span class="w-4 h-4 rounded-full bg-slate-900 text-slate-400 text-[10px] flex items-center justify-center font-mono">3</span>
            <span>DG e-Samudra Lock</span>
          </div>
        </div>

        <!-- Live Quota Lock Timer -->
        <div class="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs font-mono">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>Live Quota Lock: <strong>{{ formattedTimer }} mins</strong></span>
        </div>
      </div>

      <!-- Batch Header Banner -->
      <div class="mt-6 p-6 rounded-2xl bg-[#0c1628] border border-cyan-900/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2 font-mono text-[10px]">
            <span class="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50 font-bold">
              BATCH #AEM-AFF-2024-NOV20
            </span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">DG IND-MTI-042</span>
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50">
              CIP Grade A1 Outstanding
            </span>
            <span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700/50 flex items-center space-x-1">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span>3 Seats Remaining</span>
            </span>
          </div>

          <h1 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Advanced Fire Fighting (AFF) ? Refresher & Updating (RUT)
          </h1>
          <p class="text-xs text-slate-400 mt-1 flex items-center space-x-2">
            <span>?? Anglo-Eastern Maritime Academy, Karjat Campus, Maharashtra</span>
            <span>?</span>
            <span class="text-cyan-400 font-mono">Dates: 22 Nov - 26 Nov 2026</span>
          </p>
        </div>

        <div class="text-right">
          <div class="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Gross Reg. Fee</div>
          <div class="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
            ?{{ discountedPrice.toLocaleString() }}
            <span class="text-xs text-slate-400 font-normal">INR incl. GST</span>
          </div>
        </div>
      </div>

      <!-- STEP 1: INDoS Pre-Qualification & Sea-Time Clearance -->
      <div v-if="currentStep === 1" class="mt-8 space-y-6">
        <div class="p-6 rounded-2xl bg-[#0c1628] border border-cyan-900/40">
          <div class="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  01
                </span>
                <h2 class="text-base font-bold text-white">INDoS Pre-Qualification & Sea-Time Clearance</h2>
              </div>
              <p class="text-xs text-slate-400 mt-1">
                Direct verified handshake with DG Shipping Directorate e-Samudra repository
              </p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-700/50 flex items-center space-x-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>e-Samudra Sync 200 OK</span>
            </span>
          </div>

          <!-- Profile Badge -->
          <div class="mt-6 p-4 rounded-xl bg-[#091122] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-lg font-bold text-cyan-300">
                ?????
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-bold text-white text-sm">Capt. Rajesh Sharma</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    Chief Officer / FG
                  </span>
                </div>
                <div class="flex flex-wrap gap-x-3 text-xs text-slate-400 font-mono mt-1">
                  <span>INDoS: <strong class="text-slate-200">08ZL9431</strong></span>
                  <span>?</span>
                  <span>CDC: <strong class="text-slate-200">MUM-149028</strong></span>
                  <span>?</span>
                  <span>CoC: <strong class="text-slate-200">IND-95-2018-00431</strong></span>
                </div>
              </div>
            </div>
            <div class="text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800">
              Biometric Token Hash: <span class="text-cyan-400">SHA-256:7e4a81...9fc3</span>
            </div>
          </div>

          <!-- 3 Verification Metric Boxes -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <!-- Sea-Time Box -->
            <div class="p-4 rounded-xl bg-[#091122] border border-slate-800">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>SEA-TIME ELIGIBILITY</span>
                <span class="text-emerald-400 font-bold">? VERIFIED</span>
              </div>
              <div class="text-xl font-bold text-white mt-1">48m 14d Logged</div>
              <p class="text-[11px] text-slate-400 mt-1 leading-tight">
                Min. 12 months required within last 5 years under Master/CoC.
              </p>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                e-Pramaan Ref: <span class="text-cyan-400">DG-ST-94821</span>
              </div>
            </div>

            <!-- Original AFF Tier-1 Box -->
            <div class="p-4 rounded-xl bg-[#091122] border border-slate-800">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>ORIGINAL AFF TIER-1</span>
                <span class="text-cyan-400 font-bold">? MATCHED</span>
              </div>
              <div class="text-xl font-bold text-white mt-1">AFF Base Cert</div>
              <p class="text-[11px] text-slate-400 mt-1 leading-tight">
                Issued by HIMT Chennai ? Cert #AFF-09-44102-CH
              </p>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                IMO STCW Reg: <span class="text-cyan-400">VI/3 para 1</span>
              </div>
            </div>

            <!-- DG Medical Fitness Box -->
            <div class="p-4 rounded-xl bg-[#091122] border border-slate-800">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>DG MEDICAL FITNESS</span>
                <span class="text-emerald-400 font-bold">? ATTESTED</span>
              </div>
              <div class="text-xl font-bold text-white mt-1">Form 1 Active</div>
              <p class="text-[11px] text-slate-400 mt-1 leading-tight">
                Valid through 28 Nov 2026 ? Dr. K. Mehta (DG #DOC-401)
              </p>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                Fit for Smoke/Dive: <span class="text-emerald-400 font-bold">YES ? CLASS-A</span>
              </div>
            </div>
          </div>

          <!-- Mandatory Declaration Checkbox -->
          <div class="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex items-start space-x-3">
            <input
              id="attestation"
              v-model="declarationAgreed"
              type="checkbox"
              class="mt-1 w-4 h-4 rounded border-cyan-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
            />
            <label for="attestation" class="text-xs text-slate-300 leading-relaxed cursor-pointer">
              <strong class="text-cyan-300">DG e-Governance Mandatory Biometric Attestation Declaration:</strong><br />
              I solemnly affirm under MS Act 1958 that my physical biometric attendance (Aadhaar/INDoS Iris/Fingerprint) at the Anglo-Eastern Karjat campus will match INDoS 08ZL9431. Any proxy attendance will result in immediate CoC suspension and DG de-listing.
            </label>
          </div>

          <!-- Navigation button -->
          <div class="mt-6 flex justify-end">
            <button
              :disabled="!declarationAgreed"
              @click="currentStep = 2"
              class="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Proceed to Dual-Invoice Ledger &rarr;
            </button>
          </div>
        </div>
      </div>

      <!-- STEP 2: Dual-Invoice Ledger & Gateway Checkout -->
      <div v-if="currentStep === 2" class="mt-8 space-y-6">
        <div class="p-6 rounded-2xl bg-[#0c1628] border border-cyan-900/40">
          <div class="flex items-center space-x-2 pb-4 border-b border-slate-800">
            <span class="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              02
            </span>
            <div>
              <h2 class="text-base font-bold text-white">Dual-Invoicing & Platform Escrow Clearance</h2>
              <p class="text-xs text-slate-400 mt-0.5">
                Automated generation of Candidate GST Tax Invoice and Institute Escrow Settlement Voucher
              </p>
            </div>
          </div>

          <!-- Side-by-Side Dual Invoice Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <!-- Candidate Tax Invoice Card -->
            <div class="p-5 rounded-xl bg-[#091122] border border-slate-800">
              <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span>??</span>
                  <span>Candidate Tax Invoice (Seafarer Receipt)</span>
                </span>
                <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-700/50">
                  GST Compliant
                </span>
              </div>

              <div class="mt-4 space-y-2 text-xs font-mono">
                <div class="flex justify-between text-slate-400">
                  <span>Course Tuition Base:</span>
                  <span class="text-slate-200">?{{ baseFee.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>CGST (9.0%):</span>
                  <span class="text-slate-200">?{{ cgst.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>SGST (9.0%):</span>
                  <span class="text-slate-200">?{{ sgst.toFixed(2) }}</span>
                </div>
                <div v-if="discountApplied" class="flex justify-between text-emerald-400">
                  <span>Promo Discount:</span>
                  <span>- ?{{ discountAmount.toFixed(2) }}</span>
                </div>
                <div class="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-cyan-400">
                  <span>Total Payable:</span>
                  <span>?{{ discountedPrice.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <!-- Institute Escrow Settlement Card -->
            <div class="p-5 rounded-xl bg-[#091122] border border-slate-800">
              <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span>???</span>
                  <span>Institute Escrow Settlement Ledger</span>
                </span>
                <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-700/50">
                  100% Tax Compliant
                </span>
              </div>

              <div class="mt-4 space-y-2 text-xs font-mono">
                <div class="flex justify-between text-slate-400">
                  <span>Gross Collected:</span>
                  <span class="text-slate-200">?{{ discountedPrice.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>Platform Commission (10%):</span>
                  <span class="text-rose-400">- ?{{ commission.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>Statutory TDS (1%):</span>
                  <span class="text-rose-400">- ?{{ tds.toFixed(2) }}</span>
                </div>
                <div class="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-emerald-400">
                  <span>Net Escrow Payout:</span>
                  <span>?{{ netEscrowPayout.toFixed(2) }}</span>
                </div>
              </div>
              <div class="mt-3 text-[10px] text-slate-500 font-mono">
                Escrow Settlement UTR: <span class="text-slate-300 font-bold">HDFC222870192837</span>
              </div>
            </div>
          </div>

          <!-- Promotional Voucher / Coupon Input -->
          <div class="mt-6 p-4 rounded-xl bg-[#091122] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3 w-full sm:w-auto">
              <span class="text-xs font-semibold text-slate-300">Promo Code:</span>
              <input
                v-model="couponCode"
                type="text"
                placeholder="e.g. WOMENSEAFARER"
                class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono uppercase text-cyan-300 focus:ring-1 focus:ring-cyan-500"
              />
              <button
                @click="applyCoupon"
                class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition"
              >
                Apply
              </button>
            </div>
            <div v-if="couponMessage" class="text-xs font-mono text-emerald-400">
              {{ couponMessage }}
            </div>
          </div>

          <!-- Payment Gateway Selection -->
          <div class="mt-6">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Select Maritime Payment Gateway
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Razorpay Gateway Card -->
              <div
                @click="selectedGateway = 'RAZORPAY'"
                :class="[
                  'p-4 rounded-xl border cursor-pointer transition flex items-center justify-between',
                  selectedGateway === 'RAZORPAY'
                    ? 'bg-cyan-950/40 border-cyan-500 ring-1 ring-cyan-500'
                    : 'bg-[#091122] border-slate-800 hover:border-slate-700'
                ]"
              >
                <div>
                  <div class="font-bold text-white text-sm flex items-center space-x-2">
                    <span>?? Razorpay Maritime Terminal</span>
                    <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">UPI / CARDS</span>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1">
                    Instant domestic settlement: Google Pay, PhonePe, UPI, RuPay, Visa, Mastercard, Netbanking
                  </p>
                </div>
                <input type="radio" :checked="selectedGateway === 'RAZORPAY'" class="text-cyan-500" />
              </div>

              <!-- Stripe Gateway Card -->
              <div
                @click="selectedGateway = 'STRIPE'"
                :class="[
                  'p-4 rounded-xl border cursor-pointer transition flex items-center justify-between',
                  selectedGateway === 'STRIPE'
                    ? 'bg-cyan-950/40 border-cyan-500 ring-1 ring-cyan-500'
                    : 'bg-[#091122] border-slate-800 hover:border-slate-700'
                ]"
              >
                <div>
                  <div class="font-bold text-white text-sm flex items-center space-x-2">
                    <span>?? Stripe Global Terminal</span>
                    <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">MULTI-CURRENCY</span>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1">
                    International credit cards, USD / EUR / GBP auto-conversion with global maritime billing
                  </p>
                </div>
                <input type="radio" :checked="selectedGateway === 'STRIPE'" class="text-cyan-500" />
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
            <button @click="currentStep = 1" class="text-xs text-slate-400 hover:text-white">
              &larr; Back to Clearance
            </button>
            <button
              :disabled="isProcessing"
              @click="processPayment"
              class="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition shadow-xl shadow-cyan-500/20 disabled:opacity-50"
            >
              <span v-if="isProcessing">Initiating Secure Gateway Handshake...</span>
              <span v-else>Authorize ?{{ discountedPrice.toFixed(2) }} & Lock Seat &rarr;</span>
            </button>
          </div>
        </div>
      </div>

      <!-- STEP 3: DG e-Samudra Confirmation & Dossier -->
      <div v-if="currentStep === 3" class="mt-8 space-y-6">
        <div class="p-8 rounded-2xl bg-[#0c1628] border border-cyan-500/40 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-400/60 flex items-center justify-center text-3xl mx-auto mb-4">
            ?
          </div>
          <h2 class="text-2xl font-black text-white">Seat Confirmed & Cryptographically Sealed</h2>
          <p class="text-xs text-slate-400 mt-2 max-w-xl mx-auto">
            Booking reference <strong class="font-mono text-cyan-300">{{ bookingReference }}</strong> has been recorded on the DG e-Samudra node and registered with Anglo-Eastern Maritime Academy.
          </p>

          <!-- Dual Invoice Download Actions -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
            <a
              href="#"
              @click.prevent="alert('Candidate Tax Invoice PDF downloaded!')"
              class="p-4 rounded-xl bg-[#091122] border border-cyan-800/40 hover:border-cyan-400 text-xs text-left transition"
            >
              <div class="font-bold text-white flex items-center space-x-2">
                <span>??</span>
                <span>Download Candidate Tax Invoice</span>
              </div>
              <p class="text-[10px] text-slate-400 mt-1">GST & Payment Reference Receipt (PDF)</p>
            </a>

            <a
              href="#"
              @click.prevent="alert('Institute Commission Voucher downloaded!')"
              class="p-4 rounded-xl bg-[#091122] border border-cyan-800/40 hover:border-cyan-400 text-xs text-left transition"
            >
              <div class="font-bold text-white flex items-center space-x-2">
                <span>???</span>
                <span>Institute Settlement Voucher</span>
              </div>
              <p class="text-[10px] text-slate-400 mt-1">Escrow Payout UTR & 10% Commission (PDF)</p>
            </a>
          </div>

          <div class="mt-8 flex justify-center space-x-4">
            <NuxtLink
              to="/seafarer/dashboard"
              class="px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-cyan-400 transition"
            >
              Go to Certificate Vault & Dossier &rarr;
            </NuxtLink>
            <NuxtLink
              to="/courses"
              class="px-6 py-2.5 border border-slate-700 text-slate-300 font-medium text-xs rounded-xl hover:bg-slate-800 transition"
            >
              Browse More Courses
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Status Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
      <div class="flex items-center space-x-3">
        <span class="flex items-center space-x-1.5 text-cyan-400">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>Connected Gateway: Node IN-BOM-01 (Razorpay Maritime Terminal)</span>
        </span>
      </div>
      <div>
        INDoS: <span class="text-slate-300">08ZL9431</span> ? Signed Ledger: <span class="text-cyan-400">0x7B...E98C</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentStep = ref(1);
const declarationAgreed = ref(true);
const selectedGateway = ref<'RAZORPAY' | 'STRIPE'>('RAZORPAY');
const isProcessing = ref(false);
const bookingReference = ref('SEA-BK-92841-8842');

const rawGrossPrice = 8500.0;
const couponCode = ref('');
const discountApplied = ref(false);
const discountAmount = ref(0);
const couponMessage = ref('');

// Live Quota Lock Timer (10:00 minutes)
const timerSeconds = ref(579); // 09:39
let timerInterval: any = null;

const formattedTimer = computed(() => {
  const m = Math.floor(timerSeconds.value / 60);
  const s = timerSeconds.value % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
});

const discountedPrice = computed(() => {
  return rawGrossPrice - discountAmount.value;
});

const baseFee = computed(() => {
  return Math.round((discountedPrice.value / 1.18) * 100) / 100;
});

const cgst = computed(() => {
  return Math.round(((discountedPrice.value - baseFee.value) / 2) * 100) / 100;
});

const sgst = computed(() => {
  return cgst.value;
});

const commission = computed(() => {
  return Math.round(discountedPrice.value * 0.1 * 100) / 100;
});

const tds = computed(() => {
  return Math.round(discountedPrice.value * 0.01 * 100) / 100;
});

const netEscrowPayout = computed(() => {
  return Math.round((discountedPrice.value - commission.value - tds.value) * 100) / 100;
});

function applyCoupon() {
  if (couponCode.value.trim().toUpperCase() === 'WOMENSEAFARER') {
    discountApplied.value = true;
    discountAmount.value = Math.round(rawGrossPrice * 0.15); // 15% discount
    couponMessage.value = '? 15% Women Seafarer Special Grant Applied!';
  } else if (couponCode.value.trim().toUpperCase() === 'EARLYBIRD') {
    discountApplied.value = true;
    discountAmount.value = 500;
    couponMessage.value = '? ?500 Early Bird Seat Grant Applied!';
  } else {
    couponMessage.value = 'Invalid or expired promotional code';
  }
}

function processPayment() {
  isProcessing.value = true;
  setTimeout(() => {
    isProcessing.value = false;
    currentStep.value = 3;
  }, 1200);
}

onMounted(() => {
  timerInterval = setInterval(() => {
    if (timerSeconds.value > 0) {
      timerSeconds.value--;
    }
  }, 1000);
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>