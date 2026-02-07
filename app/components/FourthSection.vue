<template>
  <section class="w-full py-12 sm:py-16 md:py-20 lg:h-3/4 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] bg-[#EDECF6]">
    
    <!-- Mobile Layout (Below 1024px) -->
    <div class="flex lg:hidden flex-col w-full gap-6 sm:gap-8">
      <!-- Logo Card -->
      <div class="w-full aspect-[4/3] max-w-md mx-auto border border-gray-300 bg-white rounded-2xl px-8 py-12 flex justify-center items-center">
        <img 
          src="/openfeature.png" 
          alt="OpenFeature Logo"
          class="w-full max-w-[200px] sm:max-w-[240px] h-auto object-contain"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-col w-full gap-4 sm:gap-5">
        <!-- Heading -->
        <h2 class="w-full font-inter font-bold text-xl sm:text-2xl text-[#0E121B] leading-tight">
          Seamless Feature Management with OpenFeature
        </h2>

        <!-- Description -->
        <p class="w-full text-base sm:text-lg text-[#5F5F60] leading-relaxed">
          Aortem now integrates with OpenFeature to provide developers with a
          powerful, standardized approach to feature flagging and dynamic
          configuration. Ship features faster, test safely, and optimize user
          experiences effortlessly.
        </p>

        <!-- Button -->
        <div class="w-full max-w-[200px]">
          <div class="bg-accent font-inter font-semibold rounded-lg flex justify-center items-center">
            <button class="w-full h-[48px] font-inter font-bold text-[18px] sm:text-[20px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Layout (1024px and up) - Original Code -->
    <div class="hidden lg:flex h-[624px] w-full flex-row-reverse justify-between items-center">
      <div class="flex flex-col min-h-[271px] w-[37%] gap-3">
        <div class="w-full font-inter font-bold text-[32px] text-[#0E121B] leading-tight">
          Seamless Feature Management with OpenFeature
        </div>
        <div class="w-full flex flex-col gap-8">
          <div class="w-[85%] text-[18px] text-[#5F5F60] leading-tight">
            Aortem now integrates with OpenFeature to provide developers with a
            powerful, standardized approach to feature flagging and dynamic
            configuration. Ship features faster, test safely, and optimize user
            experiences effortlessly.
          </div>
          <div class="w-[28%] bg-accent font-inter font-semibold rounded-lg flex justify-center items-center">
            <button class="h-[43px] font-inter font-bold text-[20px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
              Learn More  &#8594;
            </button>
          </div>
        </div>
      </div>
      <div class="w-[830px] h-full border-[0.5px] border-[grey] bg-[#FFFFFF] rounded-xl px-[71px] py-[77px] flex justify-center items-center">
        <img src="/openfeature.png" alt="OpenFeature Logo" />
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Ensure gradient text renders properly */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
