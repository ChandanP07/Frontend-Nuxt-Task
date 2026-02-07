<template>
  <section class="w-full py-12 sm:py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-8">

    <!-- Top Content -->
    <div class="flex flex-col justify-center items-center w-full gap-6 sm:gap-8 lg:gap-10">
      <div
        class="w-full lg:w-4/5 text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-satoshi font-bold flex justify-center items-center text-center px-4
               bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
        Dart-Powered Feature Flag
      </div>

      <div class="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center px-4 lg:px-0">
        <div class="w-full lg:w-4/5 flex flex-col justify-center items-center gap-2 lg:gap-1">
          <div class="text-[#1A1C3D] text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-inter font-semibold text-center">
            Not Another Generic Feature Flag Tool
          </div>
          <div class="text-center font-inter font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-tight text-[#5F5F60]">
            Most tools are built for every language, which means extra layers and slower toggles.
            IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Table (1024px and up) - Original Code -->
    <div class="hidden lg:block w-[70%] h-[295px] rounded-xl overflow-hidden bg-[#F4F3FA]">
      <!-- Header -->
      <div class="h-[49.67px] grid grid-cols-3 items-center text-white font-inter font-semibold bg-gradient-to-b from-[#42389E] to-[#0F1026]">
        <div class="font-inter pl-3 text-[#FEFEFF] text-[24px] font-semibold">Features</div>
        <div class="text-center text-[#FEFEFF] font-inter text-[24px] font-semibold">IntelliToggle</div>
        <div class="text-center text-[#FEFEFF] font-inter text-[24px] font-semibold">Other Feature Flag</div>
      </div>

      <!-- Rows -->
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="h-[49.67px] grid grid-cols-3 px-3 py-2 text-[#1A1C3D]"
      >
        <div class="font-inter font-semibold text-[18px] text-[#5F5F60]">
          {{ feature.name }}
        </div>
        <div class="flex justify-center text-green-600 text-lg"><img src="/correct.png"></div>
        <div class="flex justify-center text-gray-400 text-lg"><img src="/cross.png"></div>
      </div>
    </div>

    <!-- Mobile Layout (Below 1024px) -->
    <div class="flex lg:hidden flex-col w-full max-w-md rounded-xl overflow-hidden">
      <!-- Mobile Header -->
      <div class="h-[60px] sm:h-[70px] flex items-center px-6 text-white font-inter font-semibold text-xl sm:text-2xl bg-gradient-to-b from-[#42389E] to-[#0F1026]">
        Features
      </div>

      <!-- Mobile Feature List -->
      <div class="w-full bg-[#F4F3FA] flex flex-col">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="px-6 py-4 sm:py-5 border-b border-white/50 last:border-b-0"
        >
          <div class="font-inter font-normal text-base sm:text-lg text-[#5F5F60]">
            {{ feature.name }}
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const features = [
  { name: 'Dart-native SDK & server' },
  { name: 'End-to-end type safety' },
  { name: 'AI-assisted roll-outs & cleanup' },
  { name: 'A/B testing built-in' },
  { name: 'Dart-Powered SDKs' }
]
</script>

<style scoped>
/* Ensure gradient text renders properly */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>