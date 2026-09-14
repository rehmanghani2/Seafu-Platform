<template>
  <div class="min-h-screen" style="background:#070D18;">
    <!-- ── TOP GOVERNANCE BAR ───────────────────────────────────────────── -->
    <div class="border-b px-6 py-4" style="border-color:#0c1a2e; background:#0a1628;">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2.5 h-2.5 rounded-full animate-pulse" style="background:#00E5FF;"></div>
            <span class="text-xs font-mono tracking-widest" style="color:#00E5FF;">
              DG SHIPPING MARITIME AUTHORITY · PLATFORM GOVERNANCE NODE
            </span>
          </div>
          <h1 class="text-2xl font-bold" style="color:#e2e8f0;">
            Platform Governance & Regulatory Console
          </h1>
          <p class="text-xs mt-0.5" style="color:#64748b;">
            Accreditation management, STCW course compliance, dual-invoicing ledger, and cryptographic audit logs
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs font-mono px-3 py-1.5 rounded border" style="background:#0369A120; border-color:#0369A140; color:#38bdf8;">
            ROLE: SUPER_ADMIN
          </span>
          <button
            class="px-4 py-2 text-xs font-bold rounded-lg border transition"
            style="border-color:#1e3a5f; color:#94a3b8; background:transparent;"
            @click="authStore.logout()">
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <!-- ── KEY METRICS OVERVIEW ─────────────────────────────────────────── -->
    <div class="max-w-7xl mx-auto px-6 pt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Metric 1 -->
        <div class="rounded-xl p-5 border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono tracking-wider" style="color:#64748b;">PENDING INSTITUTES</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold" style="background:#f59e0b20; color:#f59e0b;">ACTION REQ</span>
          </div>
          <div class="text-3xl font-black mt-2" style="color:#f59e0b;">{{ metrics.pendingInstitutes }}</div>
          <div class="text-xs mt-1" style="color:#475569;">{{ metrics.totalInstitutes }} verified institutes active</div>
        </div>

        <!-- Metric 2 -->
        <div class="rounded-xl p-5 border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono tracking-wider" style="color:#64748b;">PENDING COURSES</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold" style="background:#0369A120; color:#38bdf8;">REVIEW</span>
          </div>
          <div class="text-3xl font-black mt-2" style="color:#00E5FF;">{{ metrics.pendingCourses }}</div>
          <div class="text-xs mt-1" style="color:#475569;">{{ metrics.totalCourses }} DG approved courses listed</div>
        </div>

        <!-- Metric 3 -->
        <div class="rounded-xl p-5 border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono tracking-wider" style="color:#64748b;">CERTIFICATES ISSUED</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold" style="background:#22c55e20; color:#22c55e;">QR VERIFIED</span>
          </div>
          <div class="text-3xl font-black mt-2" style="color:#22c55e;">{{ metrics.totalCertificates }}</div>
          <div class="text-xs mt-1" style="color:#475569;">100% cryptographic ECDSA integrity</div>
        </div>

        <!-- Metric 4 -->
        <div class="rounded-xl p-5 border" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono tracking-wider" style="color:#64748b;">PLATFORM COMMISSION (10%)</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold" style="background:#8b5cf620; color:#a78bfa;">ESCROW</span>
          </div>
          <div class="text-3xl font-black mt-2" style="color:#a78bfa;">₹{{ (metrics.platformCommission / 1000).toFixed(1) }}K</div>
          <div class="text-xs mt-1" style="color:#475569;">GMV: ₹{{ (metrics.totalGmv / 100000).toFixed(2) }}L · TDS: 1%</div>
        </div>
      </div>

      <!-- ── MULTI-TAB NAVIGATION ──────────────────────────────────────── -->
      <div class="flex items-center gap-2 mt-6 border-b pb-3" style="border-color:#0c1a2e;">
        <button v-for="tab in tabs" :key="tab.id"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition"
          :style="activeTab === tab.id
            ? 'background:#0369A1; color:#fff;'
            : 'background:#0a1628; color:#64748b; border:1px solid #1e3a5f;'"
          @click="activeTab = tab.id">
          <span>{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
          <span v-if="tab.badge" class="px-1.5 py-0.5 rounded-full text-[10px] font-mono"
            :style="activeTab === tab.id ? 'background:#070D18; color:#00E5FF;' : 'background:#0369A120; color:#38bdf8;'">
            {{ tab.badge }}
          </span>
        </button>
      </div>
    </div>

    <!-- ── TAB CONTENTS ────────────────────────────────────────────────── -->
    <div class="max-w-7xl mx-auto px-6 py-6">
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 1: DG INSTITUTE ACCREDITATIONS                             -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'institutes'" class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold" style="color:#e2e8f0;">
            Institute Accreditation Queue ({{ institutes.length }})
          </div>
          <div class="flex gap-2">
            <button v-for="s in ['ALL', 'PENDING', 'VERIFIED', 'SUSPENDED']" :key="s"
              class="text-xs px-3 py-1.5 rounded transition font-medium"
              :style="instituteFilter === s ? 'background:#0369A1; color:#fff;' : 'background:#0a1628; color:#64748b; border:1px solid #1e3a5f;'"
              @click="instituteFilter = s">
              {{ s }}
            </button>
          </div>
        </div>

        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#070D18; color:#64748b;">
                <tr class="border-b" style="border-color:#0c1a2e;">
                  <th class="px-5 py-3.5">INSTITUTE NAME</th>
                  <th class="px-5 py-3.5">DG APPROVAL NO.</th>
                  <th class="px-5 py-3.5">LOCATION</th>
                  <th class="px-5 py-3.5">COURSES</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">GOVERNANCE ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0c1a2e;">
                <tr v-for="inst in filteredInstitutes" :key="inst.id" class="hover:bg-slate-900/40 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm" style="color:#e2e8f0;">{{ inst.name }}</div>
                    <div class="text-[11px] mt-0.5" style="color:#64748b;">{{ inst.contactEmail }} · {{ inst.contactPhone }}</div>
                  </td>
                  <td class="px-5 py-4 font-mono font-bold" style="color:#00E5FF;">
                    {{ inst.dgShippingApprovalNumber }}
                  </td>
                  <td class="px-5 py-4" style="color:#94a3b8;">
                    {{ inst.city }}, {{ inst.state }}
                  </td>
                  <td class="px-5 py-4" style="color:#94a3b8;">
                    {{ inst.courseCount }} active
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold" :style="statusBadgeStyle(inst.verificationStatus)">
                      {{ inst.verificationStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button v-if="inst.verificationStatus === 'PENDING'"
                      class="px-3 py-1.5 rounded font-bold transition"
                      style="background:#22c55e; color:#fff;"
                      @click="updateInstStatus(inst.id, 'VERIFIED')">
                      ✓ Verify
                    </button>
                    <button v-if="inst.verificationStatus === 'PENDING'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#dc2626; color:#f87171;"
                      @click="updateInstStatus(inst.id, 'REJECTED')">
                      ✕ Reject
                    </button>
                    <button v-if="inst.verificationStatus === 'VERIFIED'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#f59e0b40; color:#f59e0b;"
                      @click="updateInstStatus(inst.id, 'SUSPENDED')">
                      ⚠️ Suspend
                    </button>
                    <button v-if="inst.verificationStatus === 'SUSPENDED'"
                      class="px-3 py-1.5 rounded font-bold transition"
                      style="background:#0369A1; color:#fff;"
                      @click="updateInstStatus(inst.id, 'VERIFIED')">
                      Reactivate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 2: COURSE COMPLIANCE & SYLLABUS                            -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'courses'" class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold" style="color:#e2e8f0;">
            Course Curriculum Approvals ({{ courses.length }})
          </div>
        </div>

        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#070D18; color:#64748b;">
                <tr class="border-b" style="border-color:#0c1a2e;">
                  <th class="px-5 py-3.5">COURSE TITLE & CODE</th>
                  <th class="px-5 py-3.5">TRAINING ACADEMY</th>
                  <th class="px-5 py-3.5">CATEGORY</th>
                  <th class="px-5 py-3.5">DURATION & PRICE</th>
                  <th class="px-5 py-3.5">STATUS</th>
                  <th class="px-5 py-3.5 text-right">COMPLIANCE DECISION</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0c1a2e;">
                <tr v-for="crs in courses" :key="crs.id" class="hover:bg-slate-900/40 transition">
                  <td class="px-5 py-4">
                    <div class="font-bold text-sm" style="color:#e2e8f0;">{{ crs.title }}</div>
                    <div class="font-mono text-[11px] mt-0.5" style="color:#00E5FF;">{{ crs.code }}</div>
                  </td>
                  <td class="px-5 py-4" style="color:#94a3b8;">
                    {{ crs.instituteName }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded text-[11px]" style="background:#0369A120; color:#38bdf8;">
                      {{ crs.category }}
                    </span>
                  </td>
                  <td class="px-5 py-4" style="color:#94a3b8;">
                    <div>{{ crs.durationDays }} Days</div>
                    <div class="font-bold text-slate-300">₹{{ crs.price.toLocaleString() }}</div>
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold"
                      :style="crs.approvalStatus === 'APPROVED' ? 'background:#22c55e20; color:#22c55e;' : 'background:#f59e0b20; color:#f59e0b;'">
                      {{ crs.approvalStatus }}
                    </span>
                  </td>
                  <td class="px-5 py-4 text-right space-x-2">
                    <button v-if="crs.approvalStatus !== 'APPROVED'"
                      class="px-3 py-1.5 rounded font-bold transition"
                      style="background:#22c55e; color:#fff;"
                      @click="crs.approvalStatus = 'APPROVED'">
                      ✓ Approve
                    </button>
                    <button v-if="crs.approvalStatus !== 'REJECTED'"
                      class="px-3 py-1.5 rounded font-bold border transition"
                      style="border-color:#dc2626; color:#f87171;"
                      @click="crs.approvalStatus = 'REJECTED'">
                      ✕ Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 3: IMMUTABLE AUDIT TRAIL                                   -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'audit'" class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold" style="color:#e2e8f0;">
            Cryptographic Security & Operational Audit Log Stream
          </div>
          <span class="text-xs font-mono" style="color:#22c55e;">
            ● LIVE STREAM ACTIVE
          </span>
        </div>

        <div class="rounded-xl border divide-y overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div v-for="log in auditLogs" :key="log.id" class="p-4 flex items-start gap-4 hover:bg-slate-900/40 transition">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono shrink-0 font-bold"
              :style="auditActionColor(log.action)">
              {{ log.action.charAt(0) }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-mono font-bold text-xs" :style="auditActionTextColor(log.action)">
                  {{ log.action }}
                </span>
                <span class="text-xs" style="color:#64748b;">· {{ log.entityType }}: {{ log.entityId }}</span>
                <span class="ml-auto text-xs font-mono" style="color:#475569;">{{ log.timestamp }}</span>
              </div>
              <div class="text-xs" style="color:#94a3b8;">{{ log.details }}</div>
              <div class="flex items-center gap-3 mt-1.5 text-[11px] font-mono" style="color:#475569;">
                <span>Actor: {{ log.user }}</span>
                <span>IP: {{ log.ipAddress }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 4: FINANCIAL SETTLEMENTS & DUAL INVOICES                   -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'finance'" class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold" style="color:#e2e8f0;">
            Dual-Invoicing & Platform Commission Settlement Ledger
          </div>
          <button class="px-3 py-1.5 text-xs font-bold rounded-lg border" style="border-color:#1e3a5f; color:#00E5FF;">
            ⬇ Export GST/TDS Ledger (CSV)
          </button>
        </div>

        <div class="rounded-xl border overflow-hidden" style="background:#0a1628; border-color:#0c1a2e;">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead style="background:#070D18; color:#64748b;">
                <tr class="border-b" style="border-color:#0c1a2e;">
                  <th class="px-5 py-3.5">BOOKING REF</th>
                  <th class="px-5 py-3.5">SEAFARER / COURSE</th>
                  <th class="px-5 py-3.5">TOTAL GMV</th>
                  <th class="px-5 py-3.5">COMMISSION (10%)</th>
                  <th class="px-5 py-3.5">GST (18%) & TDS (1%)</th>
                  <th class="px-5 py-3.5">INSTITUTE PAYOUT</th>
                  <th class="px-5 py-3.5">SETTLEMENT</th>
                </tr>
              </thead>
              <tbody class="divide-y" style="border-color:#0c1a2e;">
                <tr v-for="item in ledgerItems" :key="item.ref" class="hover:bg-slate-900/40 transition">
                  <td class="px-5 py-4 font-mono font-bold" style="color:#00E5FF;">
                    {{ item.ref }}
                  </td>
                  <td class="px-5 py-4">
                    <div class="font-bold text-slate-200">{{ item.seafarer }}</div>
                    <div class="text-[11px]" style="color:#64748b;">{{ item.course }}</div>
                  </td>
                  <td class="px-5 py-4 font-bold text-slate-200">
                    ₹{{ item.amount.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4 font-bold" style="color:#38bdf8;">
                    ₹{{ item.commission.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4 text-slate-400 font-mono">
                    GST: ₹{{ item.gst.toFixed(0) }} · TDS: ₹{{ item.tds.toFixed(0) }}
                  </td>
                  <td class="px-5 py-4 font-bold" style="color:#22c55e;">
                    ₹{{ item.institutePayout.toLocaleString() }}
                  </td>
                  <td class="px-5 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold font-mono"
                      :style="item.status === 'SETTLED' ? 'background:#22c55e20; color:#22c55e;' : 'background:#f59e0b20; color:#f59e0b;'">
                      {{ item.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════ -->
      <!-- TAB 5: DG SHIPPING REGULATORY EXPORT                           -->
      <!-- ═══════════════════════════════════════════════════════════════ -->
      <div v-if="activeTab === 'reports'" class="space-y-6">
        <div class="rounded-xl border p-6" style="background:#0a1628; border-color:#0369A140;">
          <div class="flex items-start justify-between">
            <div>
              <div class="text-xs font-mono tracking-widest mb-1" style="color:#00E5FF;">
                DIRECTORATE GENERAL OF SHIPPING · AUDIT BUNDLE
              </div>
              <h2 class="text-lg font-bold" style="color:#e2e8f0;">
                Statutory STCW Training & Verification Compliance Dossier
              </h2>
              <p class="text-xs mt-1" style="color:#64748b;">
                Export verified training candidate registries, biometric attendance logs, and QR certificates issued across all states
              </p>
            </div>
            <button class="px-4 py-2.5 rounded-xl font-bold text-xs" style="background:linear-gradient(135deg,#0369A1,#0ea5e9); color:#fff;">
              📥 Generate Statutory Audit PDF
            </button>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-6 pt-6 border-t" style="border-color:#0c1a2e;">
            <div class="p-4 rounded-lg" style="background:#070D18; border:1px solid #1e3a5f;">
              <div class="text-xs font-mono" style="color:#64748b;">MARITIME STATES ACTIVE</div>
              <div class="text-xl font-bold mt-1" style="color:#e2e8f0;">8 States</div>
              <div class="text-xs mt-1" style="color:#00E5FF;">Maharashtra, Tamil Nadu, Kerala, Goa...</div>
            </div>
            <div class="p-4 rounded-lg" style="background:#070D18; border:1px solid #1e3a5f;">
              <div class="text-xs font-mono" style="color:#64748b;">VERIFIED INDOS SEAFARERS</div>
              <div class="text-xl font-bold mt-1" style="color:#22c55e;">1,842 Candidates</div>
              <div class="text-xs mt-1" style="color:#475569;">100% matched with DGS master database</div>
            </div>
            <div class="p-4 rounded-lg" style="background:#070D18; border:1px solid #1e3a5f;">
              <div class="text-xs font-mono" style="color:#64748b;">PSC COMPLIANCE RATE</div>
              <div class="text-xl font-bold mt-1" style="color:#00E5FF;">99.8%</div>
              <div class="text-xs mt-1" style="color:#475569;">Zero Paris MOU / Tokyo MOU cert rejects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useAuthStore } from '../../stores/auth';

definePageMeta({
  middleware: ['auth'],
});

const authStore = useAuthStore();
useHead({ title: 'DG Platform Governance · The Seafu Admin' });

const activeTab = ref('institutes');
const instituteFilter = ref('ALL');

const metrics = reactive({
  pendingInstitutes: 3,
  totalInstitutes: 28,
  pendingCourses: 4,
  totalCourses: 42,
  totalCertificates: 1240,
  totalGmv: 2480000,
  platformCommission: 248000,
});

const tabs = computed(() => [
  { id: 'institutes', label: 'Institutes Accreditation', icon: '🏛️', badge: String(metrics.pendingInstitutes) },
  { id: 'courses', label: 'Course Compliance', icon: '📚', badge: String(metrics.pendingCourses) },
  { id: 'audit', label: 'Audit Trail', icon: '📜', badge: 'Live' },
  { id: 'finance', label: 'Settlement Ledger', icon: '💳', badge: '10%' },
  { id: 'reports', label: 'DG Regulatory Hub', icon: '📑', badge: 'DGS' },
]);

// ─── Institutes Data ────────────────────────────────────────────────────────
const institutes = ref([
  {
    id: 'inst-001',
    name: 'Southern Maritime Institute of Technology',
    dgShippingApprovalNumber: 'DG/TR/TN/2024/042',
    city: 'Chennai',
    state: 'Tamil Nadu',
    contactEmail: 'admissions@smit.edu',
    contactPhone: '+91 44 2839 1000',
    courseCount: 6,
    verificationStatus: 'PENDING',
  },
  {
    id: 'inst-002',
    name: 'Goa Offshore & Safety Center',
    dgShippingApprovalNumber: 'DG/TR/GA/2024/019',
    city: 'Panaji',
    state: 'Goa',
    contactEmail: 'contact@goaoffshore.in',
    contactPhone: '+91 832 249 2000',
    courseCount: 4,
    verificationStatus: 'PENDING',
  },
  {
    id: 'inst-003',
    name: 'Maritime Training Academy Mumbai',
    dgShippingApprovalNumber: 'DG/TR/MH/2023/001',
    city: 'Mumbai',
    state: 'Maharashtra',
    contactEmail: 'info@mtamumbai.in',
    contactPhone: '+91 22 6120 4000',
    courseCount: 12,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'inst-004',
    name: 'Cochin Maritime Institute',
    dgShippingApprovalNumber: 'DG/TR/KL/2023/009',
    city: 'Kochi',
    state: 'Kerala',
    contactEmail: 'registrar@cochinmaritime.edu',
    contactPhone: '+91 484 290 3000',
    courseCount: 8,
    verificationStatus: 'VERIFIED',
  },
]);

const filteredInstitutes = computed(() => {
  if (instituteFilter.value === 'ALL') return institutes.value;
  return institutes.value.filter((i) => i.verificationStatus === instituteFilter.value);
});

function updateInstStatus(id: string, status: string) {
  const inst = institutes.value.find((i) => i.id === id);
  if (inst) {
    inst.verificationStatus = status;
    if (status === 'VERIFIED') metrics.pendingInstitutes = Math.max(0, metrics.pendingInstitutes - 1);
  }
}

// ─── Courses Data ───────────────────────────────────────────────────────────
const courses = ref([
  {
    id: 'crs-001',
    title: 'Advanced Fire Fighting (AFF)',
    code: 'STCW-AFF-2024',
    instituteName: 'Southern Maritime Institute',
    category: 'STCW_ADVANCED',
    durationDays: 5,
    price: 8500,
    approvalStatus: 'PENDING_APPROVAL',
  },
  {
    id: 'crs-002',
    title: 'Proficiency in Survival Craft (PSCRB)',
    code: 'STCW-PSCRB-2024',
    instituteName: 'Goa Offshore Center',
    category: 'STCW_ADVANCED',
    durationDays: 5,
    price: 9200,
    approvalStatus: 'PENDING_APPROVAL',
  },
  {
    id: 'crs-003',
    title: 'Medical First Aid (MFA)',
    code: 'STCW-MFA-2023',
    instituteName: 'Maritime Training Academy Mumbai',
    category: 'STCW_BASIC',
    durationDays: 4,
    price: 6500,
    approvalStatus: 'APPROVED',
  },
]);

// ─── Audit Logs Data ────────────────────────────────────────────────────────
const auditLogs = ref([
  {
    id: 'aud-001',
    action: 'INSTITUTE_STATUS_VERIFIED',
    entityType: 'Institute',
    entityId: 'inst-003',
    details: 'Verified accreditation code DG/TR/MH/2023/001 after inspection sign-off',
    user: 'admin@seafu.gov.in',
    ipAddress: '103.21.14.82',
    timestamp: '2 mins ago',
  },
  {
    id: 'aud-002',
    action: 'CERTIFICATE_ISSUED',
    entityType: 'Certificate',
    entityId: 'IND-AFF-7714-ECDSA',
    details: 'ECDSA cryptographic signature generated for Seafarer IND-08ZL9431',
    user: 'system',
    ipAddress: '127.0.0.1',
    timestamp: '14 mins ago',
  },
  {
    id: 'aud-003',
    action: 'ESCROW_PAYMENT_CAPTURED',
    entityType: 'Booking',
    entityId: 'SF-2026-0922-771',
    details: 'Razorpay payment verified. ₹8,500 locked in escrow dual-ledger',
    user: 'gateway-webhook',
    ipAddress: '52.74.11.201',
    timestamp: '42 mins ago',
  },
  {
    id: 'aud-004',
    action: 'PSC_INSPECTION_VERIFIED',
    entityType: 'Dossier',
    entityId: 'IND-AFF-7714-ECDSA',
    details: 'Rotterdam Port State Control verified clearance code PSC-RTM-2026',
    user: 'psc-rotterdam-node',
    ipAddress: '84.112.4.99',
    timestamp: '2 hours ago',
  },
]);

// ─── Ledger Data ────────────────────────────────────────────────────────────
const ledgerItems = ref([
  {
    ref: 'SF-2026-0922-771',
    seafarer: 'Arvind Nair (IND-08ZL9431)',
    course: 'Advanced Fire Fighting',
    amount: 8500,
    commission: 850,
    gst: 153,
    tds: 8.5,
    institutePayout: 7650,
    status: 'ESCROW_HELD',
  },
  {
    ref: 'SF-2026-0918-402',
    seafarer: 'Ramesh Kumar (IND-149028)',
    course: 'PSCRB Refresher',
    amount: 9200,
    commission: 920,
    gst: 165.6,
    tds: 9.2,
    institutePayout: 8280,
    status: 'SETTLED',
  },
  {
    ref: 'SF-2026-0910-119',
    seafarer: 'Suresh Pillai (IND-952018)',
    course: 'Medical First Aid',
    amount: 6500,
    commission: 650,
    gst: 117,
    tds: 6.5,
    institutePayout: 5850,
    status: 'SETTLED',
  },
]);

// ─── Helpers ────────────────────────────────────────────────────────────────
function statusBadgeStyle(status: string) {
  const map: Record<string, string> = {
    VERIFIED: 'background:#22c55e20; color:#22c55e; border:1px solid #22c55e40;',
    PENDING: 'background:#f59e0b20; color:#f59e0b; border:1px solid #f59e0b40;',
    SUSPENDED: 'background:#dc262620; color:#f87171; border:1px solid #dc262640;',
    REJECTED: 'background:#64748b20; color:#94a3b8; border:1px solid #64748b40;',
  };
  return map[status] || '';
}

function auditActionColor(action: string) {
  if (action.includes('VERIFIED')) return 'background:#22c55e20; border:1px solid #22c55e40;';
  if (action.includes('ISSUED')) return 'background:#00E5FF20; border:1px solid #00E5FF40;';
  if (action.includes('PAYMENT')) return 'background:#8b5cf620; border:1px solid #8b5cf640;';
  return 'background:#f59e0b20; border:1px solid #f59e0b40;';
}

function auditActionTextColor(action: string) {
  if (action.includes('VERIFIED')) return 'color:#22c55e;';
  if (action.includes('ISSUED')) return 'color:#00E5FF;';
  if (action.includes('PAYMENT')) return 'color:#a78bfa;';
  return 'color:#f59e0b;';
}
</script>
