<template>
  <section class="w-full py-12 sm:py-16 md:py-20 lg:h-3/4 lg:p-[120px] px-4 sm:px-6 md:px-8">
    
    <!-- Mobile Layout (Below 1024px) -->
    <div class="flex lg:hidden flex-col gap-8 sm:gap-10">
      <!-- Heading -->
      <div class="w-full text-center font-satoshi font-bold text-2xl sm:text-3xl md:text-[36px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
        Control & Power-focused
      </div>

      <!-- Cards Container -->
      <div class="w-full flex flex-col gap-10">
        
        <!-- Connect Card -->
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <div class="aspect-[4/3] w-full bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg overflow-hidden">
              <img src="/newestframe.png" class="w-full h-full object-cover" alt="Connect Dashboard">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-xl sm:text-2xl font-inter font-semibold">Connect</div>
              <div class="font-inter font-normal text-base sm:text-lg leading-relaxed text-[#5F5F60]">
                Install SDK in your Dart project in 2 mins.
              </div>
            </div>
          </div>
          <button class="w-full max-w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg">
            View Documentation
          </button>
        </div>

        <!-- Create Flags Card -->
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <div class="aspect-[4/3] w-full bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg overflow-hidden">
              <img src="/newest.png" class="w-full h-full object-cover" alt="Create Flags Dashboard">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-xl sm:text-2xl font-inter font-semibold">Create Flags</div>
              <div class="font-inter font-normal text-base sm:text-lg leading-relaxed text-[#5F5F60]">
                Define features in IntelliToggle dashboard.
              </div>
            </div>
          </div>
          <button class="w-full max-w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg">
            View Documentation
          </button>
        </div>

        <!-- Ship & Control Card -->
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <div class="aspect-[4/3] w-full bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg overflow-hidden">
              <img src="/newest2.png" class="w-full h-full object-cover" alt="Ship & Control Dashboard">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-xl sm:text-2xl font-inter font-semibold">Ship & Control</div>
              <div class="font-inter font-normal text-base sm:text-lg leading-relaxed text-[#5F5F60]">
                Flip switches anytime, see instant results.
              </div>
            </div>
          </div>
          <button class="w-full max-w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg">
            View Documentation
          </button>
        </div>

      </div>
    </div>

    <!-- Desktop Layout (1024px and up) - Original Code -->
    <div class="hidden lg:flex flex-col justify-center items-center gap-8">
      <div class="w-full flex justify-center items-center gap-2 font-satoshi font-bold text-[40px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
        Control & Power-focused
      </div>
      <div class="w-full flex justify-between items-center">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <div class="h-[363px] w-3/3 bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg">
              <img src="/newestframe.png" class="w-full h-full">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-[24px] font-inter font-semibold">Connect</div>
              <div class="font-inter font-normal text-[18px] leading-tight text-[#5F5F60]">Install SDK in your Dart project in 2 mins.</div>
            </div>
          </div>
          <div class="w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg flex justify-center items-center">
            <button>View Documentation</button>
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <div class="h-[363px] w-3/3 bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg">
              <img src="/newest.png" class="w-full h-full">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-[24px] font-inter font-semibold">Create Flags</div>
              <div class="font-inter font-normal text-[18px] leading-tight text-[#5F5F60]">Define features in IntelliToggle dashboard.</div>
            </div>
          </div>
          <div class="w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg flex justify-center items-center">
            <button>View Documentation</button>
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <div class="h-[363px] w-3/3 bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg">
              <img src="/newest2.png" class="w-full h-full">
            </div>
            <div>
              <div class="text-[#1A1C3D] text-[24px] font-inter font-semibold">Ship & Control</div>
              <div class="font-inter font-normal text-[18px] leading-tight text-[#5F5F60]">Flip switches anytime, see instant results.</div>
            </div>
          </div>
          <div class="w-[243px] h-[46px] text-accent font-inter font-normal text-[18px] border border-accent rounded-lg flex justify-center items-center">
            <button>View Documentation</button>
          </div>
        </div>
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