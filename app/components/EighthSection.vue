<template>
  <section class="min-h-[85vh] w-full flex flex-col items-center justify-center bg-[#EDECF6] px-4 md:px-4 lg:px-4 py-8 md:py-0 font-inter">
    
    <h2 class="font-satoshi text-[24px] md:text-[40px] font-bold mb-6 md:mb-10 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent text-center">
      Confused & Power-Focused
    </h2>

    <!-- Mobile: Pricing Card -->
    <div class="md:hidden w-full max-w-[420px] mx-auto mb-6">
      <div class="w-full bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-[20px] p-6 mb-6 shadow-xl">
        
        <!-- Top badges -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <!-- Icon placeholder -->
            <div class="w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="8" r="2" fill="#9EFF00"/>
                <circle cx="28" cy="12" r="2" fill="#9EFF00"/>
                <circle cx="32" cy="20" r="2" fill="#9EFF00"/>
                <circle cx="28" cy="28" r="2" fill="#9EFF00"/>
                <circle cx="20" cy="32" r="2" fill="#9EFF00"/>
                <circle cx="12" cy="28" r="2" fill="#9EFF00"/>
                <circle cx="8" cy="20" r="2" fill="#9EFF00"/>
                <circle cx="12" cy="12" r="2" fill="#9EFF00"/>
              </svg>
            </div>
            <span class="bg-[#F9A71E] text-[#1A1C3D] px-5 py-2 rounded-full text-sm font-bold">
              Popular
            </span>
          </div>
          <span class="bg-white text-[#1A1C3D] px-4 py-2 rounded-full text-sm font-semibold transform rotate-6">
            Billed annually
          </span>
        </div>

        <!-- Plan name -->
        <h3 class="text-white text-[22px] font-bold mb-6">Enhance Plan</h3>

        <!-- Price -->
        <div class="flex items-baseline gap-2 mb-8">
          <span class="text-white text-[64px] font-bold leading-none">$149</span>
          <span class="text-white text-[24px] opacity-90">/month</span>
        </div>

        <!-- Divider -->
        <div class="w-full h-[1px] bg-white/30 mb-6"></div>

        <!-- Features list -->
        <div class="space-y-4 mb-8">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Multi-environment support (Dev / Staging / Prod)
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Unlimited feature flags and projects
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Advanced targeting rules with custom attributes
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Environment-specific flags
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Real-time streaming updates (WebSocket / gRPC)
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Analytics hooks (flag usage tracking)
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Built-in A/B testing / experimentation dashboard
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              Audit logs (90-day retention + export in CSV/JSON)
            </span>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-white text-[15px] leading-relaxed">
              API access with multiple keys & custom roles
            </span>
          </div>
        </div>

        <!-- Subscribe button -->
        <button class="w-full bg-transparent border-2 border-white text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
          Subscribe
        </button>
      </div>
    </div>

    <!-- Desktop: Original pricing display -->
    <div class="hidden md:flex flex-col items-center gap-4 mb-16 w-full max-w-[440px]">
      
      <div class="w-full h-[160px] rounded-[12px] bg-gradient-to-b from-[#42389E] to-[#0F1026] flex flex-col items-center justify-center text-white shadow-xl">
        <p class="font-merriweathersans text-[20px] opacity-90 mb-2">Prices starts at</p>
        <div class="flex items-baseline gap-4">
          <span class="font-merriweathersans text-5xl font-bold">$10</span>
          <span class="font-segoe text-lg opacity-80">/month</span>
        </div>
      </div>

      <button class="w-[440px] py-4 bg-[#F9A71E] rounded-[12px] shadow-lg hover:brightness-110 transition-all">
        <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold">
          View Subscription Details
        </span>
      </button>
    </div>

    <!-- Bottom CTA Card - Responsive for both mobile and desktop -->
    <div class="w-full max-w-[1200px] min-h-[180px] bg-white border border-gray-200 rounded-[12px] md:rounded-[20px] px-6 md:px-12 py-6 md:py-0 flex flex-col md:flex-row items-center justify-between shadow-sm md:shadow-lg gap-6 md:gap-0">
      <div class="flex flex-col gap-2 text-center md:text-left">
        <h3 class="text-[#1A1C3D] text-[24px] md:text-[32px] font-bold leading-tight">
          Start Your 7-Day Free Sandbox Plan
        </h3>
        <p class="text-[#5F5F60] font-medium text-base md:text-lg">
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto">
        <button class="bg-[#F9A71E] px-8 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:opacity-90 transition-all w-full md:w-auto">
          <span class="md:bg-gradient-to-b md:from-[#42389E] md:to-[#0F1026] md:bg-clip-text md:text-transparent text-[#1A1C3D] text-sm md:text-base">
            Get Started
          </span>
        </button>
        
        <button class="border-2 border-[#F9A71E] text-[#F9A71E] px-8 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-[#F9A71E]/5 transition-all w-full md:w-auto">
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>
