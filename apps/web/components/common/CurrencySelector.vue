<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#0A1936] hover:bg-[#112752] text-cyan-300 border border-cyan-500/30 transition shadow-2xs focus:outline-none focus:ring-1 focus:ring-cyan-400"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="text-white">{{ currencyStore.activeConfig.symbol }}</span>
      <span>{{ currencyStore.currentCurrency }}</span>
      <svg class="w-3 h-3 text-slate-400 transition-transform duration-200" :class="isOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1.5 w-44 rounded-xl bg-[#0C1628] border border-white/10 shadow-2xl py-1.5 z-50 focus:outline-none"
    >
      <div class="px-3 py-1 text-[9px] font-mono uppercase text-slate-500 font-bold border-b border-white/5">
        Maritime Currencies
      </div>
      <button
        v-for="curr in currencyStore.allCurrencies"
        :key="curr.code"
        @click="selectCurrency(curr.code)"
        class="w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition hover:bg-white/5"
        :class="currencyStore.currentCurrency === curr.code ? 'text-[#00E5FF] font-bold bg-[#00E5FF]/10' : 'text-slate-300'"
      >
        <span class="flex items-center gap-2">
          <span class="font-mono font-bold w-5">{{ curr.symbol }}</span>
          <span>{{ curr.code }}</span>
        </span>
        <span v-if="currencyStore.currentCurrency === curr.code" class="text-xs text-cyan-400 font-bold">✓</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCurrencyStore } from '~/stores/currency'

const currencyStore = useCurrencyStore()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function selectCurrency(code: string) {
  currencyStore.setCurrency(code)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  currencyStore.initCurrency()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
