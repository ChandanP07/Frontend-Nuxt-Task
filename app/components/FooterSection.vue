<template>
  <footer class="w-full flex flex-col items-center font-inter overflow-hidden">
    
    <!-- CTA Section -->
    <div class="relative w-full px-4 md:px-[120px] py-12 md:py-24 md:pb-0">
      <div class="relative w-full md:max-w-[1200px] mx-auto h-auto md:h-[400px] rounded-[16px] overflow-hidden shadow-2xl bg-gradient-to-b from-[#42389E] to-[#0F1026] flex flex-col items-center justify-center text-center px-6 py-12 md:py-0">
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <h2 class="relative z-10 text-white text-[28px] md:text-[42px] font-bold leading-tight mb-4">
          Launch Features Confidently With AI <br class="hidden md:block" /> Driven Feature Flags
        </h2>
        <p class="relative z-10 text-gray-300 text-base md:text-lg mb-8 md:mb-10">
          Start for free, scale as your team grows
        </p>

        <div class="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-4 md:px-0">
          <button class="bg-[#F9A71E] hover:bg-[#ffb338] text-[#1A1C3D] font-bold px-8 md:px-10 py-4 rounded-lg transition-all shadow-lg shadow-orange-500/20 w-full md:w-auto">
            Start for $1/mo
          </button>
          <button class="border-2 border-[#F9A71E] text-[#F9A71E] hover:bg-[#F9A71E]/10 font-bold px-8 md:px-10 py-4 rounded-lg transition-all w-full md:w-auto">
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="mt-auto w-full flex flex-col items-center bg-[#EDECF6] md:mt-[200px]">
      
<!-- Mobile Footer Layout -->
<div class="md:hidden w-full px-6 pt-12 pb-12">
  
  <!-- Logo & Description -->
  <div class="flex flex-col gap-6 mb-12">
    <div class="flex items-center gap-2">
      <img src="/intellitoggle-icon.png" class="w-12 h-12" alt="Logo" />
      <span class="text-[#1A1C3D] text-xl font-bold">Intelli Toggle</span>
    </div>
    <p class="text-[#5F5F60] text-sm leading-relaxed">
      IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
    </p>
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 bg-[#5F5F60] rounded-full flex items-center justify-center">
        <img src="/github.png" class="w-5 h-5" alt="GitHub" />
      </div>
    </div>
  </div>

  <!-- Company & Resources Section - Two Columns -->
  <div class="grid grid-cols-2 gap-8 mb-16">
    <!-- Company Section -->
    <div class="flex flex-col gap-5">
      <h4 class="text-[#5F5F60] font-bold text-sm mb-0">Company</h4>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Pricing</a>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Doc</a>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">About Us</a>
    </div>

    <!-- Resources Section -->
    <div class="flex flex-col gap-5">
      <h4 class="text-[#5F5F60] font-bold text-sm mb-0">Resources</h4>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Why IntelliToggle Is Different</a>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Customer Support</a>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Terms & Conditions</a>
      <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70 text-base">Privacy Policy</a>
    </div>
  </div>

  <!-- Newsletter Section -->
  <div class="flex flex-col gap-6">
    <h4 class="text-[#1A1C3D] font-bold text-base">Subscribe to Newsletter</h4>
    <div class="flex gap-2">
      <input 
        type="email" 
        placeholder="Enter email address" 
        class="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A71E]" 
      />
      <button class="bg-gradient-to-b from-[#42389E] to-[#0F1026] text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all whitespace-nowrap">
        Join
      </button>
    </div>
  </div>
</div>

      <!-- Desktop Footer Layout -->
      <div class="hidden md:grid w-full items-start grid-cols-4 gap-12 py-20 px-[120px]">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2">
            <img src="/intellitoggle-icon.png" class="w-8 h-8" alt="Logo" />
            <span class="text-[#1A1C3D] text-xl font-bold">IntelliToggle</span>
          </div>
          <p class="text-[#5F5F60] text-sm leading-relaxed w-[80%]">
            IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
          </p>
          <div class="flex items-center gap-2 text-[#1A1C3D] font-bold">
            <div class="w-8 h-8 bg-[#1A1C3D] rounded-full flex items-center justify-center text-white text-xs">
              <img src="/github.png" alt="GitHub" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="text-[#5F5F60] font-bold uppercase text-xs tracking-widest mb-2">Resources</h4>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Why IntelliToggle Is Different</a>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Customer Support</a>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Terms & Conditions</a>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Privacy Policy</a>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="text-[#5F5F60] font-bold uppercase text-xs tracking-widest mb-2">Company</h4>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Pricing</a>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">Documentation</a>
          <a href="#" class="text-[#1A1C3D] font-semibold hover:opacity-70">About Us</a>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="text-[#1A1C3D] font-bold mb-2">Subscribe to Newsletter</h4>
          <div class="flex h-[48px] bg-white border border-gray-200 rounded-lg overflow-hidden p-1 shadow-sm">
            <input type="email" placeholder="Enter email address" class="flex-grow px-3 text-sm focus:outline-none" />
            <button class="bg-[#F9A71E] text-[#1A1C3D] text-xs font-bold px-4 rounded-md hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>
