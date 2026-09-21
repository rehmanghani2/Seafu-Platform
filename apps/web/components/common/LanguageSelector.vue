<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Language Trigger Button -->
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition border"
      :class="customClass ? customClass : 'bg-slate-900/60 hover:bg-slate-800 text-slate-200 border-slate-700/80 shadow-xs'"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="text-sm leading-none">{{ currentConfig.flag }}</span>
      <span class="tracking-wide uppercase">{{ currentConfig.code }}</span>
      <svg
        class="w-3 h-3 text-slate-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-1.5 w-56 rounded-xl bg-[#0c1a2e] border border-slate-700/90 shadow-2xl py-1.5 z-50 divide-y divide-slate-800"
      role="menu"
    >
      <div class="px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">
        Maritime Language (i18n)
      </div>

      <div class="py-1">
        <button
          v-for="lang in allLanguages"
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="w-full text-left px-3 py-2 text-xs flex items-center justify-between transition group hover:bg-slate-800/80"
          :class="currentConfig.code === lang.code ? 'text-cyan-400 font-bold bg-slate-800/40' : 'text-slate-300 font-medium'"
          role="menuitem"
        >
          <div class="flex items-center gap-2.5">
            <span class="text-base">{{ lang.flag }}</span>
            <div>
              <div class="text-xs leading-tight group-hover:text-cyan-300">{{ lang.nativeName }}</div>
              <div class="text-[10px] text-slate-400 font-mono">{{ lang.label }}</div>
            </div>
          </div>
          <svg
            v-if="currentConfig.code === lang.code"
            class="w-4 h-4 text-cyan-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useLocaleStore } from '../../stores/locale';

defineProps<{
  customClass?: string;
}>();

const localeStore = useLocaleStore();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const currentConfig = computed(() => localeStore.currentConfig);
const allLanguages = computed(() => localeStore.allLanguages);

function selectLanguage(code: string) {
  localeStore.setLanguage(code);
  isOpen.value = false;
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  localeStore.initLocale();
  if (typeof window !== 'undefined') {
    window.addEventListener('click', handleClickOutside);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', handleClickOutside);
  }
});
</script>
