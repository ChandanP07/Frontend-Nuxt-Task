<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <header
    class="bg-brand text-white w-full h-[133px] flex justify-between items-center py-[40px] px-[120px]"
  >
    <div class="flex justify-between h-[53px] w-[1680px]">
      <div class="w-[205.5px] h-[50.8px] flex justify-center items-center">
        <div class="h-[50.8px] w-[54.8px] flex justify-center items-center">
          <img src="/intellilogo.png" alt="Intellitoggle" />
        </div>
        <div
          class="h-[30px] w-[151px] font-merriweather text-[24px] font-bold leading-none flex justify-left items-center"
        >
          IntelliToggle
        </div>
      </div>
      <div class="h-[46px] w-[291px] flex justify-between items-center">
        <div class="h-[46px] w-[78px] flex items-center justify-center">
          <a
            href=""
            class="font-dmsans font-bold flex items-center justify-center text-xl"
            >Home</a
          >
        </div>
        <div class="h-[46px] w-[78px] flex items-center justify-center">
          <a
            href=""
            class="font-dmsans font-light flex items-center justify-center text-xl"
            >About</a
          >
        </div>
        <div class="h-[46px] w-[78px] flex items-center justify-center">
          <a
            href=""
            class="font-dmsans font-light flex items-center justify-center text-xl"
            >Pricing</a
          >
        </div>
      </div>
      <div
        class="w-[214px] h-[53px] bg-accent font-inter font-semibold text-[18px] rounded-lg flex justify-center items-center"
      >
        <button
          class="font-inter font-semibold text-[24px] leading-[29px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
        >
          Start Sandbox
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
@font-face {
  font-family: "MyCustomFont";
  src: url("/public/MerriweatherSans-Bold.ttf") format("ttf");
  font-weight: 700;
  font-style: normal;
  font-display: swap; /* Recommended for performance */
}

.component-text {
  font-family: "MyCustomFont";
}
</style>
