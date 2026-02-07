<template>
  <section class="w-full  py-[120px] gap-8 flex flex-col justify-center items-center">

    <!-- Top Content (unchanged) -->
    <div class="flex flex-col justify-center items-center w-full gap-10">
      <div
        class="w-4/5 h-[54px] text-[40px] font-satoshi font-bold flex justify-center items-center
               bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
        Dart-Powered Feature Flag
      </div>

      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="w-4/5 flex flex-col justify-center items-center gap-1">
          <div class="text-[#1A1C3D] text-[32px] font-inter font-semibold">
            Not Another Generic Feature Flag Tool
          </div>
          <div
            class="text-center font-inter font-normal text-[18px] leading-tight text-[#5F5F60]">
            Most tools are built for every language, which means extra layers and slower toggles.
            IntelliToggle is built in Dart, for Dart — so it’s faster, safer, and built for your stack.
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Comparison Table -->
    <div class="w-[70%] h-[295px] rounded-xl overflow-hidden  bg-[#F4F3FA]">

      <!-- Header -->
      <div
        class="h-[49.67px] grid grid-cols-3 items-center text-white font-inter font-semibold bg-gradient-to-b from-[#42389E] to-[#0F1026]"
        
      >
      
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

<!-- <template>
  <section class="w-full bg-[#F8F9FA] py-[100px] flex flex-col items-center">
    
    <div class="text-center mb-16 space-y-4">
      <h2 class="font-satoshi font-bold text-[48px] text-[#1A1C3D]">
        Dart-Powered Feature Flag
      </h2>
      <h3 class="font-satoshi font-bold text-[32px] text-[#1A1C3D]">
        Not Another Generic Feature Flag Tool
      </h3>
      <p class="font-inter font-normal text-[18px] text-[#5F5F60] max-w-[800px] mx-auto leading-relaxed">
        Most tools are built for every language, which means extra layers and slower toggles.<br />
        IntelliToggle is built in Dart for Dart — so it’s faster, safer, and built for your stack.
      </p>
    </div>

    <div class="w-[1200px] bg-white rounded-[24px] shadow-xl overflow-hidden border-[0.5px] border-[#E2E8F0]">
      
      <div class="grid grid-cols-3 bg-gradient-to-r from-[#1A1C3D] to-[#42389E] py-6 px-12">
        <div class="text-white font-inter font-bold text-[20px]">Features</div>
        <div class="text-white font-inter font-bold text-[20px] text-center">IntelliToggle</div>
        <div class="text-white font-inter font-bold text-[20px] text-center">Other Feature Flag</div>
      </div>

      <div class="flex flex-col">
        <div class="grid grid-cols-3 px-12 py-6 border-b-[0.5px] border-gray-100 items-center">
          <div class="font-inter font-medium text-[18px] text-[#1A1C3D]">Dart-native SDK & server</div>
          <div class="text-center text-green-600 text-2xl">✓</div>
          <div class="text-center text-gray-400 text-2xl">✕</div>
        </div>

        <div class="grid grid-cols-3 px-12 py-6 border-b-[0.5px] border-gray-100 items-center bg-gray-50/30">
          <div class="font-inter font-medium text-[18px] text-[#1A1C3D]">End-to-end type safety</div>
          <div class="text-center text-green-600 text-2xl">✓</div>
          <div class="text-center text-gray-400 text-2xl">✕</div>
        </div>

        <div class="grid grid-cols-3 px-12 py-6 border-b-[0.5px] border-gray-100 items-center">
          <div class="font-inter font-medium text-[18px] text-[#1A1C3D]">AI-assisted roll-outs & cleanup</div>
          <div class="text-center text-green-600 text-2xl">✓</div>
          <div class="text-center text-gray-400 text-2xl">✕</div>
        </div>

        <div class="grid grid-cols-3 px-12 py-6 border-b-[0.5px] border-gray-100 items-center bg-gray-50/30">
          <div class="font-inter font-medium text-[18px] text-[#1A1C3D]">A/B testing built-in</div>
          <div class="text-center text-green-600 text-2xl">✓</div>
          <div class="text-center text-gray-400 text-2xl">✕</div>
        </div>

        <div class="grid grid-cols-3 px-12 py-8 items-center">
          <div class="font-inter font-medium text-[18px] text-[#1A1C3D]">Dart-Powered SDKs</div>
          <div class="text-center text-green-600 text-2xl">✓</div>
          <div class="text-center text-gray-400 text-2xl">✕</div>
        </div>
      </div>

    </div>
  </section>
</template> -->