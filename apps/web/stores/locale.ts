import { defineStore } from 'pinia';

export interface LanguageConfig {
  code: string;
  label: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  en: {
    code: 'en',
    label: 'English (IMO SMCP)',
    nativeName: 'English',
    flag: '🇬🇧',
  },
  hi: {
    code: 'hi',
    label: 'Hindi (DG Shipping)',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
  },
  tl: {
    code: 'tl',
    label: 'Tagalog (MARINA Seafarer)',
    nativeName: 'Filipino',
    flag: '🇵🇭',
  },
  ru: {
    code: 'ru',
    label: 'Russian (Merchant Fleet)',
    nativeName: 'Русский',
    flag: '⚓',
  },
};

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.courses': 'Courses & STCW',
    'nav.bundles': 'Career Bundles',
    'nav.jobs': 'Maritime Jobs',
    'nav.webinars': 'Webinars & Bridge',
    'nav.publications': 'Publications & Circulars',
    'nav.community': 'Community & Peers',
    'nav.vault': 'Certificate Vault',
    'nav.verify': 'PSC Verification',
    'nav.admin': 'Fleet Operations',
    'hero.badge': 'DG SHIPPING & STCW COMPLIANT MARITIME PLATFORM',
    'hero.title': 'Centralized Merchant Navy Education, Seat Locks & Cryptographic Vault',
    'hero.searchPlaceholder': 'Search STCW courses (AFF, BRM, ECDIS, High Voltage)...',
    'btn.lockSeat': 'Lock Seat for 10 Min',
    'btn.downloadPdf': 'Download Certified PDF',
    'btn.verifyPsc': 'Port State Control Pass',
    'status.confirmed': 'Confirmed in Escrow',
    'status.pending': '10-Min Atomic Seat Lock',
    'status.verified': 'Cryptographically Verified (SHA-256)',
  },
  hi: {
    'nav.home': 'होम',
    'nav.courses': 'कोर्स एवं डीजी शिपिंग',
    'nav.bundles': 'कैरियर बंडल',
    'nav.jobs': 'समुद्री नौकरियां',
    'nav.webinars': 'वेबिनार एवं सिमुलेटर',
    'nav.publications': 'परिपत्र एवं प्रकाशन',
    'nav.community': 'नाविक समुदाय',
    'nav.vault': 'प्रमाणपत्र वॉल्ट',
    'nav.verify': 'पीएससी सत्यापन',
    'nav.admin': 'फ्लीट संचालन हब',
    'hero.badge': 'डीजी शिपिंग एवं एसटीसीडब्ल्यू प्रमाणित समुद्री मंच',
    'hero.title': 'मर्चेंट नेवी प्रशिक्षण, तत्काल सीट लॉक एवं डिजिटल वॉल्ट',
    'hero.searchPlaceholder': 'एसटीसीडब्ल्यू पाठ्यक्रम खोजें (एएफएफ, बीआरएम, ईसीडीआईएस)...',
    'btn.lockSeat': '10 मिनट के लिए सीट लॉक करें',
    'btn.downloadPdf': 'प्रमाणित पीडीएफ डाउनलोड करें',
    'btn.verifyPsc': 'पोर्ट स्टेट कंट्रोल पास',
    'status.confirmed': 'एस्क्रो में पुष्टि',
    'status.pending': '10 मिनट की सीट लॉक सक्रिय',
    'status.verified': 'क्रिप्टोग्राफिक सत्यापित (SHA-256)',
  },
  tl: {
    'nav.home': 'Tahanan',
    'nav.courses': 'Mga Kurso at STCW',
    'nav.bundles': 'Career Packages',
    'nav.jobs': 'Trabaho sa Barko',
    'nav.webinars': 'Webinar at Simulator',
    'nav.publications': 'Mga Publikasyon',
    'nav.community': 'Komunidad ng Marino',
    'nav.vault': 'Vault ng Sertipiko',
    'nav.verify': 'PSC Verification',
    'nav.admin': 'Fleet Operations Hub',
    'hero.badge': 'MARINA & STCW COMPLIANT MARITIME PLATFORM',
    'hero.title': 'Sentralisadong Pagsasanay sa Barko, Pag-lock ng Upuan at Vault',
    'hero.searchPlaceholder': 'Maghanap ng mga kursong STCW (AFF, BRM, ECDIS)...',
    'btn.lockSeat': 'I-lock ang Upuan (10 Min)',
    'btn.downloadPdf': 'I-download ang Sertipikadong PDF',
    'btn.verifyPsc': 'Port State Control Pass',
    'status.confirmed': 'Kumpirmado sa Escrow',
    'status.pending': 'Aktibong Pag-lock ng Upuan',
    'status.verified': 'Kriptograpikong Na-verify (SHA-256)',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.courses': 'Курсы ПДНВ / STCW',
    'nav.bundles': 'Пакеты подготовки',
    'nav.jobs': 'Морские вакансии',
    'nav.webinars': 'Вебинары и тренажеры',
    'nav.publications': 'Циркуляры и правила',
    'nav.community': 'Морское сообщество',
    'nav.vault': 'Хранилище дипломов',
    'nav.verify': 'Проверка PSC',
    'nav.admin': 'Управление флотом',
    'hero.badge': 'ОДОБРЕНО РЕГИСТРОМ И КОНВЕНЦИЕЙ ПДНВ',
    'hero.title': 'Морское обучение, бронирование тренажеров и реестр сертификатов',
    'hero.searchPlaceholder': 'Поиск курсов STCW (AFF, BRM, ECDIS, Высокое напряжение)...',
    'btn.lockSeat': 'Забронировать место (10 мин)',
    'btn.downloadPdf': 'Скачать PDF сертификат',
    'btn.verifyPsc': 'Пропуск Port State Control',
    'status.confirmed': 'Подтверждено на эскроу',
    'status.pending': 'Атомарная блокировка места',
    'status.verified': 'Криптографически заверено (SHA-256)',
  },
};

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLanguage: 'en',
  }),

  getters: {
    currentConfig: (state) => SUPPORTED_LANGUAGES[state.currentLanguage] || SUPPORTED_LANGUAGES.en,
    allLanguages: () => Object.values(SUPPORTED_LANGUAGES),
  },

  actions: {
    setLanguage(code: string) {
      if (SUPPORTED_LANGUAGES[code]) {
        this.currentLanguage = code;
        if (typeof window !== 'undefined') {
          localStorage.setItem('seafu_language', code);
          document.documentElement.lang = code;
        }
      }
    },

    t(key: string): string {
      const dict = TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
      return dict[key] || TRANSLATIONS.en[key] || key;
    },

    initLocale() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('seafu_language');
        if (saved && SUPPORTED_LANGUAGES[saved]) {
          this.currentLanguage = saved;
          document.documentElement.lang = saved;
        }
      }
    },
  },
});
