<template>
  <div 
    class="relative min-h-screen w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] font-inter overflow-hidden"
    :style="{ 
      background: `linear-gradient(180deg, rgba(66, 56, 158, 0.8) 0%, rgba(26, 28, 61, 0.8) 100%), url('/AI.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#1A1C3D' 
    }"
  >
    <div class="relative z-10 w-full flex flex-col items-center">
      
      <!-- Header Section -->
      <div class="w-full flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-3 mb-8 sm:mb-10 md:mb-12 lg:mb-24">
        <div class="w-auto px-6 sm:px-8 lg:w-[10.8%] bg-accent font-inter font-semibold rounded-full flex justify-center items-center">
          <div class="h-[40px] sm:h-[43px] flex justify-center items-center font-inter font-bold text-base sm:text-lg lg:text-[18px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
            Coming Soon
          </div>
        </div>
        <div class="w-full text-[#FEFEFF] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-satoshi font-semibold text-center px-4">
          DartCodeAI That Actually Changes Flagging
        </div>
      </div>

      <!-- Desktop Grid (1024px and up) - Original Code -->
      <div class="hidden lg:grid grid-cols-2 gap-x-[120px] gap-y-[64px] w-80% h-[473px] mb-12">
        <div v-for="card in aiFeatures" :key="card.title" 
             class="relative flex flex-col justify-center items-center
                    w-[660px] h-[196px] 
                    bg-white/[0.02] backdrop-blur-[2px] 
                    border-[0.2px] border-white/50 
                    rounded-[12px] shadow-2xl 
                    hover:bg-white/[0.04] transition-all duration-300">
          
          <div class="bg-white w-11 min-h-11 flex items-center rounded justify-center mb-6 border border-white/15">
            <img :src="card.iconPath" class="w-5 h-5 object-contain" alt="icon" />
          </div>

          <h3 class="text-[#FEFEFF] text-[24px] font-inter font-semibold">
            {{ card.title }}
          </h3>
          <p class="text-[#EDECF6] w-[90%] text-[18px] font-inter text-center leading-relaxed font-normal">
            {{ card.desc }}
          </p>
        </div>
      </div>

      <!-- Mobile Layout (Below 1024px) -->
      <div class="flex lg:hidden flex-col w-full max-w-md gap-6 sm:gap-8 mb-10 sm:mb-12">
        <div v-for="card in aiFeatures" :key="card.title" 
             class="relative flex flex-col justify-center items-center
                    w-full min-h-[220px] sm:min-h-[240px] p-6
                    bg-white/[0.02] backdrop-blur-[2px] 
                    border-[0.2px] border-white/50 
                    rounded-[12px] shadow-2xl">
          
          <div class="bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center rounded justify-center mb-5 border border-white/15">
            <img :src="card.iconPath" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" alt="icon" />
          </div>

          <h3 class="text-[#FEFEFF] text-xl sm:text-2xl font-inter font-semibold text-center mb-3">
            {{ card.title }}
          </h3>
          <p class="text-[#EDECF6] text-base sm:text-lg font-inter text-center leading-relaxed font-normal">
            {{ card.desc }}
          </p>
        </div>
      </div>

      <!-- Enterprise Only Badge -->
      <div class="text-[#F9A71E] font-inter text-2xl sm:text-3xl lg:text-[32px] font-bold mb-8 sm:mb-10 lg:mb-12 tracking-wide drop-shadow-md text-center">
        Enterprise Only
      </div>

      <!-- Email Signup Section - Desktop (1024px and up) -->
      <div class="hidden lg:flex w-[86%] backdrop-blur-[2px] bg-white/[0.04] border border-white/50 rounded-[15px] p-8 items-center justify-between shadow-2xl">
        <div class="text-[24px] font-inter font-semibold">
          <span class="text-[#F9A825]">Be The First</span> 
          <span class="text-[#FEFEFF] ml-2">To Try Out Our New AI Features.</span>
        </div>

        <div class="relative flex items-center w-[540px]"> 
          <input 
            type="email" 
            placeholder="Enter email address" 
            class="bg-white/5 border border-white/40 rounded-lg pl-5 pr-[200px] py-3 w-full h-[60px] text-white focus:outline-none focus:ring-1 focus:ring-[#F9A825] transition-all"
          />
          <button class="absolute font-inter text-[18px] m-0.5 right-1 top-1 bottom-1 bg-[#F9A825] hover:bg-[#FFB74D] text-[#1A1C3D] font-semibold px-6 rounded-md transition-all active:scale-95 shadow-lg shadow-orange-500/20 whitespace-nowrap">
            Join AI Early Access
          </button>
        </div>
      </div>

      <!-- Email Signup Section - Mobile (Below 1024px) -->
      <div class="flex lg:hidden flex-col w-full max-w-md backdrop-blur-[2px] bg-white/[0.04] border border-white/50 rounded-[15px] p-6 sm:p-8 shadow-2xl gap-6">
        <div class="text-lg sm:text-xl font-inter font-semibold text-center">
          <span class="text-[#F9A825]">Be The First</span> 
          <span class="text-[#FEFEFF]"> To Try Out Our New AI Features.</span>
        </div>

        <div class="flex flex-col gap-3 w-full">
          <input 
            type="email" 
            placeholder="Enter email address" 
            class="bg-white/5 border border-white/40 rounded-lg px-4 py-3 h-[50px] sm:h-[54px] text-white focus:outline-none focus:ring-1 focus:ring-[#F9A825] transition-all"
          />
          <button class="bg-[#F9A825] hover:bg-[#FFB74D] text-[#1A1C3D] font-inter font-semibold text-base sm:text-lg px-6 py-3 h-[50px] sm:h-[54px] rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-500/20">
            Get access
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const aiFeatures = [
  { 
    title: "AutoFlag AI (LLM-Assisted Flag Creation)", 
    desc: "Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you..", 
    iconPath: "/flag.png" 
  },
  { 
    title: "SmartRamp AI (AI-Driven Rollout Optimization)", 
    desc: "Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.", 
    iconPath: "/robot.png" 
  },
  { 
    title: "ExplainFlags AI (LLM Root-Cause + Insights)", 
    desc: "Understand issues instantly with AI-generated, plain-language insights tied to your flags.", 
    iconPath: "/searchicon.png" 
  },
  { 
    title: "AutoSegment AI (Behavioral Segmentation)", 
    desc: "Target the right users automatically. AI builds segments from live behavior—no manual rules.", 
    iconPath: "/avast.png" 
  }
];
</script>

<style scoped>
/* Ensure gradient text renders properly */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>