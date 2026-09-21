<template>
  <div class="min-h-screen flex flex-col bg-[#070D18] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
    <!-- TOP HEADER -->
    <header class="border-b border-slate-800/90 bg-[#0A1628]/95 backdrop-blur-md px-4 py-3 sticky top-0 z-30 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <NuxtLink to="/community" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </NuxtLink>
        <div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <h1 class="text-sm font-bold font-display text-white tracking-tight">Seafarer Bridge Messaging &amp; Peer Network</h1>
            <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700/50">
              STCW SEC. 4 SOCIAL
            </span>
          </div>
          <p class="text-[11px] text-slate-400 font-mono">1-on-1 Encrypted Messaging &bull; Officer Registry &bull; Fleet Connections</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <CommonLanguageSelector />
        <CommonCurrencySelector />
      </div>
    </header>

    <!-- MAIN CHAT CONTAINER -->
    <div class="flex-1 flex max-w-7xl w-full mx-auto p-3 sm:p-4 gap-4 overflow-hidden h-[calc(100vh-65px)]">
      
      <!-- LEFT SIDEBAR: THREADS & SUGGESTED PEERS -->
      <aside class="w-full md:w-80 lg:w-96 flex flex-col bg-[#0C1628] border border-slate-800 rounded-2xl overflow-hidden shrink-0 shadow-lg">
        <!-- Tab Toggle -->
        <div class="grid grid-cols-2 p-1.5 bg-[#070F1E] border-b border-slate-800 text-xs font-mono font-bold">
          <button
            @click="activeSidebarTab = 'MESSAGES'"
            class="py-2 rounded-xl transition text-center"
            :class="activeSidebarTab === 'MESSAGES' ? 'bg-[#0369A1] text-white shadow-xs' : 'text-slate-400 hover:text-white'"
          >
            Conversations ({{ conversations.length }})
          </button>
          <button
            @click="activeSidebarTab = 'PEERS'"
            class="py-2 rounded-xl transition text-center"
            :class="activeSidebarTab === 'PEERS' ? 'bg-[#0369A1] text-white shadow-xs' : 'text-slate-400 hover:text-white'"
          >
            Find Officers ({{ suggestions.length }})
          </button>
        </div>

        <!-- Search Input -->
        <div class="p-3 border-b border-slate-800/80">
          <div class="relative">
            <svg class="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search officer name, rank, INDoS..."
              class="w-full bg-[#070F1E] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>
        </div>

        <!-- LIST: Active Conversations -->
        <div v-if="activeSidebarTab === 'MESSAGES'" class="flex-1 overflow-y-auto divide-y divide-slate-800/60 p-2 space-y-1">
          <div
            v-for="peer in filteredConversations"
            :key="peer.id"
            @click="selectPeer(peer)"
            class="p-3 rounded-xl transition cursor-pointer flex items-center justify-between group"
            :class="selectedPeer.id === peer.id ? 'bg-[#0A2240] border border-cyan-500/40 shadow-xs' : 'hover:bg-slate-800/50 border border-transparent'"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="relative shrink-0">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700 flex items-center justify-center text-sm font-bold text-cyan-300">
                  {{ peer.name.slice(0, 2).toUpperCase() }}
                </div>
                <span
                  v-if="peer.online"
                  class="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0C1628] absolute -bottom-0.5 -right-0.5"
                ></span>
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-white truncate group-hover:text-cyan-300">{{ peer.name }}</div>
                <div class="text-[10px] text-slate-400 font-mono truncate">{{ peer.rank }} &bull; {{ peer.vessel }}</div>
                <div class="text-[11px] text-slate-300 truncate mt-0.5">{{ peer.lastMessage }}</div>
              </div>
            </div>
            <div class="text-right shrink-0 flex flex-col items-end gap-1">
              <span class="text-[9px] text-slate-500 font-mono">{{ peer.time }}</span>
              <span v-if="peer.unread" class="px-1.5 py-0.2 rounded-full text-[9px] font-bold font-mono bg-cyan-500 text-black">
                {{ peer.unread }}
              </span>
            </div>
          </div>
        </div>

        <!-- LIST: Suggested Peers & Connections -->
        <div v-else class="flex-1 overflow-y-auto divide-y divide-slate-800/60 p-2 space-y-1">
          <div
            v-for="officer in suggestions"
            :key="officer.id"
            class="p-3 rounded-xl bg-[#070F1E] border border-slate-800/80 flex items-center justify-between"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-cyan-400">
                {{ officer.name.slice(0, 2).toUpperCase() }}
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-white truncate">{{ officer.name }}</div>
                <div class="text-[10px] text-cyan-300 font-mono">{{ officer.rank }}</div>
                <div class="text-[9px] text-slate-400 font-mono truncate">INDoS: {{ officer.indos }}</div>
              </div>
            </div>
            <button
              @click="connectOfficer(officer)"
              :disabled="officer.connected"
              class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition shrink-0"
              :class="officer.connected ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xs'"
            >
              {{ officer.connected ? 'Connected' : '+ Connect' }}
            </button>
          </div>
        </div>
      </aside>

      <!-- RIGHT PANEL: ACTIVE CHAT CONSOLE -->
      <main class="flex-1 flex flex-col bg-[#0C1628] border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
        <!-- Active Peer Header -->
        <div class="p-3.5 bg-[#0A192F] border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="w-10 h-10 rounded-xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center font-black text-cyan-300">
                {{ selectedPeer.name.slice(0, 2).toUpperCase() }}
              </div>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A192F] absolute -bottom-0.5 -right-0.5"></span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-sm font-bold text-white">{{ selectedPeer.name }}</h2>
                <span class="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#071022] text-cyan-400 border border-cyan-700/50">
                  INDoS {{ selectedPeer.indos }}
                </span>
              </div>
              <div class="text-[10px] text-slate-400 font-mono">
                {{ selectedPeer.rank }} &bull; {{ selectedPeer.vessel }} &bull; Last Port: {{ selectedPeer.port }}
              </div>
            </div>
          </div>

          <!-- Quick Peer Actions -->
          <div class="flex items-center gap-2">
            <NuxtLink
              :to="`/vault/dossier/IND-STCW-AFF-2022-7714`"
              class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 transition flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" />
              </svg>
              <span>View Dossier</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Message History Log -->
        <div class="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs" ref="messagesContainer">
          <!-- Time Divider -->
          <div class="flex items-center justify-center my-2">
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-400 uppercase">
              Encrypted Vessel Bridge Net &bull; Today
            </span>
          </div>

          <div
            v-for="msg in messages"
            :key="msg.id"
            class="flex flex-col"
            :class="msg.sender === 'me' ? 'items-end' : 'items-start'"
          >
            <div
              class="max-w-md px-3.5 py-2.5 rounded-2xl text-xs space-y-1"
              :class="msg.sender === 'me'
                ? 'bg-gradient-to-br from-blue-700 to-[#0284C7] text-white rounded-tr-xs shadow-md'
                : 'bg-[#071022] border border-slate-800 text-slate-200 rounded-tl-xs shadow-md'"
            >
              <div class="leading-relaxed">{{ msg.text }}</div>
              <div class="flex items-center justify-end gap-1 text-[9px] font-mono opacity-70">
                <span>{{ msg.time }}</span>
                <span v-if="msg.sender === 'me'">&bull; ✓✓</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Maritime Prompts -->
        <div class="px-3 py-1.5 bg-[#081220] border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span class="text-slate-500 uppercase text-[9px] font-bold shrink-0">Quick Bridge Dispatch:</span>
          <button
            v-for="chip in quickChips"
            :key="chip"
            @click="newMessage = chip"
            class="px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 shrink-0 transition"
          >
            {{ chip }}
          </button>
        </div>

        <!-- Message Composer Deck -->
        <form @submit.prevent="sendMessage" class="p-3 bg-[#0A192F] border-t border-slate-800 flex items-center gap-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type confidential maritime dispatch or inquiry..."
            class="flex-1 bg-[#070F1E] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono shadow-inner"
          />
          <button
            type="submit"
            class="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs transition shadow-md flex items-center gap-1.5"
          >
            <span>Transmit</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';

useHead({ title: 'Seafarer Bridge Messaging & Peer Network · The Seafu' });

const activeSidebarTab = ref<'MESSAGES' | 'PEERS'>('MESSAGES');
const searchQuery = ref('');
const newMessage = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

const quickChips = [
  'ETA next port?',
  'Are you joining M/V Emma Maersk?',
  'Passed DGS Oral Exam for Master FG!',
  'Any advice for SIRE 2.0 vetting?',
];

const conversations = ref([
  {
    id: 'peer-1',
    name: 'Capt. Arvind Nair',
    rank: 'Chief Mate FG',
    vessel: 'M/V Emma Maersk (15.5K TEU)',
    port: 'Rotterdam (NLD)',
    indos: '08ZL9431',
    online: true,
    time: '14:22 UTC',
    lastMessage: 'All clear on port clearance. ECDIS route plan approved.',
    unread: 1,
  },
  {
    id: 'peer-2',
    name: 'Chief Eng. Vikram Patel',
    rank: 'Chief Engineer',
    vessel: 'LNG Rasheeda (266K cbm)',
    port: 'Ras Laffan (QAT)',
    indos: '02ME9914',
    online: true,
    time: 'Yesterday',
    lastMessage: 'High Voltage switchgear test completed at AEMA Karjat.',
    unread: 0,
  },
  {
    id: 'peer-3',
    name: 'Cadet Ramesh Kumar',
    rank: 'Deck Cadet',
    vessel: 'PSCRB Batch 2026',
    port: 'Mumbai (IND)',
    indos: '149028',
    online: false,
    time: '2 days ago',
    lastMessage: 'Sir, where can I download DG Shipping Form 9 medical?',
    unread: 0,
  },
]);

const suggestions = ref([
  { id: 'sug-1', name: 'Capt. Suresh Menon', rank: 'Master Mariner FG', indos: '01MM8821', connected: false },
  { id: 'sug-2', name: '2nd Officer Ananya Roy', rank: 'Second Mate FG', indos: '19NV4401', connected: false },
  { id: 'sug-3', name: 'ETO Tariq Al-Mansoor', rank: 'Electro-Technical Officer', indos: '12ET9011', connected: false },
  { id: 'sug-4', name: 'Chief Mate Dmitry Volkov', rank: 'Chief Officer', indos: '09RU3310', connected: false },
]);

const selectedPeer = ref(conversations.value[0]);

const messages = ref([
  { id: 1, sender: 'peer', text: 'Good day Captain. Have you checked the revised DGS circular regarding Second Mate seatime prerequisites?', time: '14:15 UTC' },
  { id: 2, sender: 'me', text: 'Yes, reviewed Circular 14/2026. The 36-month sea-service criteria now explicitly honors Bridge Simulator hours.', time: '14:18 UTC' },
  { id: 3, sender: 'peer', text: 'All clear on port clearance. ECDIS route plan approved.', time: '14:22 UTC' },
]);

const filteredConversations = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return conversations.value;
  return conversations.value.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.rank.toLowerCase().includes(q) ||
    c.indos.toLowerCase().includes(q)
  );
});

function selectPeer(peer: any) {
  selectedPeer.value = peer;
  peer.unread = 0;
}

function connectOfficer(officer: any) {
  officer.connected = true;
  conversations.value.unshift({
    id: officer.id,
    name: officer.name,
    rank: officer.rank,
    vessel: 'Worldwide Fleet',
    port: 'Gateway Online',
    indos: officer.indos,
    online: true,
    time: 'Just now',
    lastMessage: 'Connection accepted. Ready for bridge dispatch.',
    unread: 0,
  });
  activeSidebarTab.value = 'MESSAGES';
}

function sendMessage() {
  if (!newMessage.value.trim()) return;
  const now = new Date();
  const timeStr = `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')} UTC`;
  
  messages.value.push({
    id: Date.now(),
    sender: 'me',
    text: newMessage.value.trim(),
    time: timeStr,
  });

  const sentText = newMessage.value;
  newMessage.value = '';

  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });

  // Simulated peer response
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      sender: 'peer',
      text: `Acknowledged: "${sentText.slice(0, 30)}...". Logged in bridge ledger with SHA-256 seal.`,
      time: timeStr,
    });
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    });
  }, 1200);
}
</script>
