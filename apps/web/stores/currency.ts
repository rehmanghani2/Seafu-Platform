import { defineStore } from 'pinia'

export interface CurrencyConfig {
  code: string
  symbol: string
  label: string
  rateFromINR: number // Multiply INR amount by this factor
  countryCode: string
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    label: 'Indian Rupee (INR)',
    rateFromINR: 1.0,
    countryCode: 'IN'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'US Dollar (USD)',
    rateFromINR: 0.01198, // ~83.5 INR / USD
    countryCode: 'US'
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    label: 'Euro (EUR)',
    rateFromINR: 0.01101, // ~90.8 INR / EUR
    countryCode: 'EU'
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    label: 'British Pound (GBP)',
    rateFromINR: 0.00948, // ~105.5 INR / GBP
    countryCode: 'GB'
  },
  AED: {
    code: 'AED',
    symbol: 'AED ',
    label: 'UAE Dirham (AED)',
    rateFromINR: 0.04405, // ~22.7 INR / AED
    countryCode: 'AE'
  },
  SGD: {
    code: 'SGD',
    symbol: 'S$',
    label: 'Singapore Dollar (SGD)',
    rateFromINR: 0.01605, // ~62.3 INR / SGD
    countryCode: 'SG'
  }
}

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currentCurrency: 'INR'
  }),

  getters: {
    activeConfig: (state): CurrencyConfig => {
      return SUPPORTED_CURRENCIES[state.currentCurrency] || SUPPORTED_CURRENCIES.INR
    },
    currencySymbol(): string {
      return this.activeConfig.symbol
    },
    allCurrencies(): CurrencyConfig[] {
      return Object.values(SUPPORTED_CURRENCIES)
    }
  },

  actions: {
    setCurrency(code: string) {
      if (SUPPORTED_CURRENCIES[code]) {
        this.currentCurrency = code
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('seafu_pref_currency', code)
          } catch (e) {
            // ignore
          }
        }
      }
    },

    initCurrency() {
      if (typeof window !== 'undefined') {
        try {
          const saved = localStorage.getItem('seafu_pref_currency')
          if (saved && SUPPORTED_CURRENCIES[saved]) {
            this.currentCurrency = saved
          }
        } catch (e) {
          // ignore
        }
      }
    },

    convert(amountInINR: number): number {
      const config = this.activeConfig
      const converted = amountInINR * config.rateFromINR
      if (config.code === 'INR') {
        return Math.round(amountInINR)
      }
      return Math.round(converted)
    },

    format(amountInINR: number): string {
      const config = this.activeConfig
      const val = this.convert(amountInINR)
      return `${config.symbol}${val.toLocaleString()}`
    }
  }
})
