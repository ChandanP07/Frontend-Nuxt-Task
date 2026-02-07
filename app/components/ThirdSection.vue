<template>
  <section class="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
    <div class="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12">
      <!-- Heading - Hidden on Mobile, Shown on Desktop -->
      <div
        class="hidden lg:block w-full text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-satoshi bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
      >
        What Is IntelliToggle
      </div>

      <!-- Content Container -->
      <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <!-- Mobile & Tablet Layout (Below 1024px) -->
        <div class="flex lg:hidden flex-col w-full gap-6 sm:gap-8">
          <!-- Mobile Heading -->
          <div
            class="w-full text-left font-bold text-2xl sm:text-3xl md:text-[32px] font-satoshi bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent leading-tight"
          >
            Your AI Dart App's Control Panel For Feature Releases
          </div>

          <!-- Description -->
          <div class="w-full text-base sm:text-lg text-[#5F5F60] leading-relaxed">
            IntelliToggle is a "Dart-Powered" feature flag that lets you turn
            features on/off instantly in your application without redeploying
            code. It allows you control roll-outs, run experiments, and fix
            bugs faster.
          </div>

          <!-- Benefits -->
          <div class="w-full">
            <span class="text-[#42389E] text-xl sm:text-2xl font-inter font-semibold">
              Benefits
            </span>
            <ul class="list-disc ml-6 mt-3 font-normal text-base sm:text-lg leading-relaxed text-[#5F5F60] space-y-2">
              <li>Toggle new features without app updates</li>
              <li>Roll out to specific users or regions</li>
              <li>Instantly rollback when needed</li>
            </ul>
          </div>

          <!-- Dashboard Image - Mobile -->
          <div class="w-full flex justify-center mt-2">
            <div class="w-full px-4 py-4 sm:px-6 sm:py-6 bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg">
              <img 
                src="/flags.png" 
                alt="IntelliToggle Dashboard" 
                class="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <!-- Desktop Layout (1024px and up) -->
        <div class="hidden lg:flex w-full justify-between items-center gap-12">
          <!-- Left Content - Text Section -->
          <div class="flex flex-col w-[45%] xl:w-[37%] gap-6">
            <!-- Main Heading -->
            <div class="w-full font-inter font-bold text-[32px] text-[#0E121B] leading-tight">
              Your AI Dart App's Control Panel For Feature Releases
            </div>

            <!-- Description and Benefits -->
            <div class="w-full flex flex-col gap-5">
              <!-- Description -->
              <div class="w-full text-[18px] text-[#5F5F60] leading-relaxed">
                IntelliToggle is a "Dart-Powered" feature flag that lets you turn
                features on/off instantly in your application without redeploying
                code. It allows you control roll-outs, run experiments, and fix
                bugs faster.
              </div>

              <!-- Benefits -->
              <div class="w-full">
                <span class="text-[#0E121B] text-[24px] font-inter font-semibold">
                  Benefits
                </span>
                <ul class="list-disc ml-7 mt-2 font-normal text-[18px] leading-relaxed text-[#5F5F60] space-y-1">
                  <li>Toggle new features without app updates</li>
                  <li>Roll out to specific users or regions</li>
                  <li>Instantly rollback when needed</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Content - Dashboard Image -->
          <div class="w-[55%] xl:w-auto flex justify-end">
            <div class="px-[51px] py-[46px] bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-lg">
              <img 
                src="/flags.png" 
                alt="IntelliToggle Dashboard" 
                class="w-full h-auto"
              />
            </div>
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
