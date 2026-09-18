<template>
  <section class="py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">MTI Academic Profile &amp; Mission</div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Shaping Futures Through <span class="text-blue-700">Maritime Excellence</span>
        </h2>
        <div class="flex items-center justify-center gap-2 mt-4">
          <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
          <span class="w-8 h-1 bg-slate-300 rounded-full"></span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Video Card -->
        <div class="lg:col-span-4 flex flex-col">
          <div class="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-800 h-full min-h-[360px] group">
            <img
              src="https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80"
              alt="Bridge Simulator Center"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A1936]/90 via-[#0A1936]/30 to-transparent"></div>
            
            <button
              @click="$emit('open-video')"
              class="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div class="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-xl shadow-blue-900/40">
                <svg class="w-7 h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            <div class="absolute bottom-5 left-5 right-5 text-white">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-black uppercase tracking-wider mb-2 inline-block">Campus Tour</span>
              <h4 class="text-base font-bold leading-tight">Advanced Simulator Labs &amp; Practical Training Facilities</h4>
            </div>
          </div>
        </div>

        <!-- Academic Mission -->
        <div class="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg font-black">
              🎓
            </div>
            <h3 class="text-xl font-extrabold text-slate-900">
              Committed to delivering premier maritime education aligned with international standards.
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              At Maritime Training Institute (The Seafu Platform), we are dedicated to delivering quality maritime education and professional training that is practical, industry-focused, and accessible to aspiring seafarers.
            </p>
            <p class="text-sm text-slate-600 leading-relaxed">
              With a strong emphasis on skill development, IMO safety standards, and career readiness, we prepare cadets to excel in the merchant marine sector at national and international levels.
            </p>
          </div>

          <div class="pt-6 border-t border-slate-200 flex items-center justify-between">
            <button
              @click="$emit('open-admission')"
              class="px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white shadow-md transition">
              Apply for Admission
            </button>
            <NuxtLink to="/courses" class="text-xs font-bold text-blue-700 hover:underline">
              All Courses →
            </NuxtLink>
          </div>
        </div>

        <!-- Live Notice Board (MTI Vertical Scroll) -->
        <div class="lg:col-span-4 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div class="bg-blue-700 px-5 py-3.5 text-white flex items-center justify-between">
            <span class="text-xs font-black uppercase tracking-wider flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>News &amp; Statutory Notices</span>
            </span>
            <span class="text-[10px] text-blue-100 font-semibold">Live Board</span>
          </div>

          <div class="divide-y divide-slate-100 p-2 overflow-y-auto max-h-[350px]">
            <div
              v-for="(notice, nIdx) in notices"
              :key="nIdx"
              class="p-3.5 hover:bg-slate-50 rounded-xl transition cursor-pointer group"
              @click="$emit('select-notice', notice)">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded" :class="notice.tagClass">
                  {{ notice.category }}
                </span>
                <span class="text-[10px] font-bold text-slate-400">{{ notice.date }}</span>
              </div>
              <h5 class="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug">
                {{ notice.title }}
              </h5>
              <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">{{ notice.excerpt }}</p>
            </div>
          </div>

          <div class="p-3 bg-slate-50 border-t border-slate-100 text-center">
            <span class="text-[11px] font-bold text-blue-700 hover:underline cursor-pointer" @click="$emit('view-all-notices')">
              View All Regulatory Circulars (24) →
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  notices: Array<{
    category: string;
    tagClass: string;
    date: string;
    title: string;
    excerpt: string;
  }>;
}>();

defineEmits(['open-video', 'open-admission', 'select-notice', 'view-all-notices']);
</script>
