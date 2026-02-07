<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <header
    class="bg-brand text-white w-full py-6 md:py-8 lg:py-10 px-4 md:px-12 lg:px-[120px] relative"
  >
    <div class="flex justify-between items-center w-full max-w-[1680px] mx-auto">
      <!-- Logo -->
      <div class="flex items-center gap-2 md:gap-3">
        <div class="w-10 h-10 md:w-12 md:h-12 lg:w-[54.8px] lg:h-[50.8px] flex justify-center items-center">
          <img src="/intellilogo.png" alt="Intellitoggle" class="w-full h-full object-contain" />
        </div>
        <div
          class="text-lg md:text-xl lg:text-[24px] font-merriweather font-bold leading-none"
        >
          IntelliToggle
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-8">
        <a
          href=""
          class="font-dmsans font-bold text-base lg:text-xl hover:text-accent transition-colors"
        >
          Home
        </a>
        <a
          href=""
          class="font-dmsans font-light text-base lg:text-xl hover:text-accent transition-colors"
        >
          About
        </a>
        <a
          href=""
          class="font-dmsans font-light text-base lg:text-xl hover:text-accent transition-colors"
        >
          Pricing
        </a>
      </nav>

      <!-- CTA Button -->
      <div
        class="hidden md:flex bg-accent font-inter font-semibold rounded-lg px-4 py-2 lg:px-6 lg:py-3"
      >
        <button
          class="font-inter font-semibold text-base lg:text-[24px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent whitespace-nowrap"
        >
          Start Sandbox
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen"
        class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors relative z-[60]"
        aria-label="Toggle menu"
      >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            v-if="!isOpen"
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen"
        @click="isOpen = false"
        class="md:hidden fixed inset-0 bg-black/50 z-40"
      />
    </transition>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isOpen"
        class="md:hidden fixed top-[88px] left-0 right-0 bg-brand border-t border-white/10 py-4 px-4 flex flex-col gap-4 shadow-lg z-50"
      >
        <a href="" class="font-dmsans font-bold text-lg py-2 hover:text-accent transition-colors">
          Home
        </a>
        <a href="" class="font-dmsans font-light text-lg py-2 hover:text-accent transition-colors">
          About
        </a>
        <a href="" class="font-dmsans font-light text-lg py-2 hover:text-accent transition-colors">
          Pricing
        </a>
        <div class="bg-accent font-inter font-semibold rounded-lg px-4 py-3 text-center mt-2">
          <button class="font-inter font-semibold text-lg bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
            Start Sandbox
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
@font-face {
  font-family: "MyCustomFont";
  src: url("/public/MerriweatherSans-Bold.ttf") format("ttf");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.component-text {
  font-family: "MyCustomFont";
}
</style>