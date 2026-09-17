<template>
  <div class="min-h-screen bg-[#070d18] text-slate-100 font-sans antialiased flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl mx-auto w-full space-y-6">
      <!-- Header -->
      <div class="text-center">
        <div class="inline-flex items-center space-x-2 text-cyan-400 mb-2">
          <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-2xl font-black tracking-tight text-white">THE SEAFU VERIFIER</span>
        </div>
        <p class="text-xs font-mono text-slate-400 uppercase tracking-wider">
          Directorate General of Shipping &bull; Cryptographic Verification Terminal
        </p>
      </div>

      <!-- Main Result Card -->
      <div class="bg-[#0b1528] rounded-2xl border border-emerald-500/50 p-6 shadow-2xl relative overflow-hidden">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              AUTHENTICITY CONFIRMED &bull; PSC CLEAR
            </span>
          </div>
          <span class="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Latency: 14ms
          </span>
        </div>

        <div class="mt-4">
          <span class="text-[10px] font-mono text-slate-500 uppercase">STCW COURSE TITLE</span>
          <h2 class="text-lg font-bold text-white mt-0.5">Advanced Fire Fighting (AFF)</h2>
          <div class="text-xs text-slate-400 font-mono mt-0.5">Cert #IND-STCW-AFF-2022-7714</div>
        </div>

        <!-- Seafarer Information Grid -->
        <div class="grid grid-cols-2 gap-4 mt-6 p-4 rounded-xl bg-[#070d18] border border-slate-800 text-xs font-mono">
          <div>
            <span class="text-[10px] text-slate-500 block">OFFICER NAME</span>
            <span class="font-bold text-white text-sm">Capt. Rajesh Sharma</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">INDoS IDENTIFIER</span>
            <span class="font-bold text-cyan-400 text-sm">08ZL9431</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">SEAMAN BOOK / CDC</span>
            <span class="font-bold text-slate-200">MUM-149028</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">BIOMETRIC MATCH</span>
            <span class="font-bold text-emerald-400">99.8% (Iris &amp; Thumb)</span>
          </div>
        </div>

        <!-- Institute & Validity -->
        <div class="mt-4 space-y-2 text-xs font-mono">
          <div class="flex justify-between text-slate-400">
            <span>Issuing Institute:</span>
            <span class="text-white font-medium">Anglo-Eastern Maritime Academy</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>DG Shipping Code:</span>
            <span class="text-cyan-400">IND-MTI-008 (Grade A1)</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Issue Date:</span>
            <span class="text-slate-200">15 OCT 2022</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Expiry Date:</span>
            <span class="text-emerald-400 font-bold">14 OCT 2027 (Valid)</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-800 flex justify-center">
          <NuxtLink
            :to="`/vault/dossier/${token}`"
            class="w-full text-center py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs font-mono transition shadow-lg shadow-cyan-500/20 uppercase tracking-wider"
          >
            Inspect Complete Cryptographic Dossier &amp; Ledger &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>

    <footer class="text-center text-[10px] font-mono text-slate-500 mt-8">
      Directorate General of Shipping &bull; ECDSA secp256k1 Signed Node &bull; IMO STCW Compliance Gateway
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const token = (route.params.token as string) || 'IND-AFF-7714-ECDSA';
</script>