<template>
  <section
    class="min-h-screen w-full flex flex-col bg-cover bg-no-repeat bg-top"
    style="background-image: url(&quot;/Vector.svg&quot;)"
  >
    <div class="mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[140px] xl:mt-[154.2px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[120px] flex flex-col items-center">
      <div class="w-full flex flex-col items-center">
        <div class="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 flex flex-col justify-between">
          <div class="w-full flex flex-col justify-between">
            <h1
              class="w-full text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px] xl:text-[62px] text-center font-semibold text-white leading-tight"
            >
              The First
              <span class="bg-accent text-right font-inter font-semibold rounded-lg inline-block px-2 py-1">
                <span
                  class="font-inter text-right font-semibold bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
                >
                  Dart-Native
                </span>
              </span>
              Feature Flag With DartCodeAI
            </h1>

            <div
              class="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 mx-auto mt-4 sm:mt-6 md:mt-8 text-center flex flex-col items-center"
            >
              <p class="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug px-2">
                Feature flags built for Dart, Ship faster, roll back safely, and
                scale with AI-powered delivery
              </p>
              <p class="text-accent text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Starting at just $1/month
              </p>
            </div>
          </div>

          <div
            class="w-full min-h-[68px] text-white mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col justify-center items-center"
          >
            <!-- Desktop/Tablet Layout (768px and up) -->
            <div
              class="hidden md:flex w-full lg:w-[70%] xl:w-[55%] flex-row justify-around items-center gap-4 lg:gap-6 xl:gap-8"
            >
              <div class="w-[48%] flex flex-col gap-1">
                <span class="text-[13px] md:text-[14px] lg:text-[15px] font-inter font-thin text-center text-[#DEDEDE]"
                  >Valid till 15th September, 2025</span
                >
                <div
                  class="w-full bg-accent font-inter font-semibold rounded-lg flex justify-center items-center"
                >
                  <button
                    class="w-full h-[40px] md:h-[43px] font-inter font-semibold text-[18px] md:text-[20px] lg:text-[23px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
                  >
                    Get Access
                  </button>
                </div>
              </div>
              <div class="w-[48%] flex flex-col mt-[25px]">
                <button
                  class="w-full h-[40px] md:h-[43px] text-accent border border-accent font-inter font-semibold text-[18px] md:text-[20px] lg:text-[23px] rounded-lg"
                >
                  Join AI Early Access
                </button>
              </div>
            </div>

            <!-- Mobile Layout (below 768px) -->
            <div class="flex md:hidden w-full max-w-sm flex-col gap-3 px-4">
              <div class="w-full flex flex-col gap-2">
                <span class="text-[13px] sm:text-[14px] font-inter font-thin text-center text-[#DEDEDE]"
                  >Valid till 15th September, 2025</span
                >
                <div
                  class="w-full bg-accent font-inter font-semibold rounded-lg flex justify-center items-center"
                >
                  <button
                    class="w-full h-[46px] sm:h-[48px] font-inter font-semibold text-[18px] sm:text-[20px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
                  >
                    Get Access
                  </button>
                </div>
              </div>
              <div class="w-full">
                <button
                  class="w-full h-[46px] sm:h-[48px] text-accent border border-accent font-inter font-semibold text-[18px] sm:text-[20px] rounded-lg"
                >
                  Join AI Early Access
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-[95%] md:w-[90%] flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-[80px] pb-12 sm:pb-16 md:pb-20 px-4 sm:px-0">
          <img
            src="/back.png"
            class="w-full rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-white/10"
            alt="Dashboard Preview"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clip-path-slant {
  clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
}

/* Ensure gradient text renders properly */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Adjust background position on smaller screens */
@media (max-width: 768px) {
  section {
    background-position: center top;
  }
}
</style>