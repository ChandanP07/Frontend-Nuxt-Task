<template>
  <section class="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 bg-[##FFFFFF]">
    <!-- Heading -->
    <div class="text-lg sm:text-xl md:text-2xl font-semibold text-[#5B5B9E] font-inter text-center">
      Trusted by various engineering teams
    </div>
    
    <!-- Desktop/Tablet Layout (768px and up) - Single Row -->
    <div class="hidden md:flex w-full max-w-6xl justify-between items-center gap-8 lg:gap-12 xl:gap-[100px] px-4">
      <div class="flex-shrink-0">
        <img src="/googlecloud.png" alt="Google Cloud" class="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
      </div>
      <div class="flex-shrink-0">
        <img src="/amazon.png" alt="Amazon Web Services" class="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
      </div>
      <div class="flex-shrink-0">
        <img src="/microsoftazure.png" alt="Microsoft Azure" class="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
      </div>
      <div class="flex-shrink-0">
        <img src="/digitalocean.png" alt="Digital Ocean" class="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
      </div>
      <div class="flex-shrink-0">
        <img src="/ibm.png" alt="IBM" class="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
      </div>
    </div>

    <!-- Mobile Layout (below 768px) - Horizontal Scroll -->
    <div class="flex md:hidden w-full overflow-x-auto scrollbar-hide ">
      <div class="flex gap-12 px-4 py-2 ">
        <div class="flex-shrink-0">
          <img src="/amazon.png" alt="Amazon Web Services" class="h-12 w-auto object-contain opacity-70 " />
        </div>
        <div class="flex-shrink-0">
          <img src="/microsoftazure.png" alt="Microsoft Azure" class="h-12 w-auto object-contain opacity-70" />
        </div>
        <div class="flex-shrink-0">
          <img src="/digitalocean.png" alt="Digital Ocean" class="h-12 w-auto object-contain opacity-70" />
        </div>
        <div class="flex-shrink-0">
          <img src="/ibm.png" alt="IBM" class="h-12 w-auto object-contain opacity-70" />
        </div>
        <div class="flex-shrink-0">
          <img src="/googlecloud.png" alt="Google Cloud" class="h-12 w-auto object-contain opacity-70" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure images scale properly */
img {
  max-width: 100%;
  height: auto;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>