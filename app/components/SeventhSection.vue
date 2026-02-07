<template>
  <div 
    class="relative min-h-screen w-full flex flex-col items-center p-[120px] font-inter overflow-hidden"
    :style="{ 
      background: `linear-gradient(180deg, rgba(66, 56, 158, 0.8) 0%, rgba(26, 28, 61, 0.8) 100%), url('/AI.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#1A1C3D' 
    }"
  >
    <div class="relative z-10 w-full flex flex-col items-center">
      
      <!-- <div class="bg-accent text-[#1A1C3D] px-6 py-1.5 rounded-full text-[14px] font-extrabold uppercase tracking-[0.2em] mb-6 shadow-lg">
        Coming Soon
      </div> -->
      <div class="w-full h-[104px] flex flex-col justify-center items-center gap-3">
        <div class="w-[10.8%] bg-accent font-inter font-semibold rounded-full flex justify-center items-center">
              <div
                class=" h-[43px] flex justify-center items-center font-inter font-bold text-[18px] bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
                Coming Soon
        </div>
        </div>
        <div class="w-full text-[#FEFEFF] text-[40px] font-satoshi font-semibold mb-16 text-center">
            DartCodeAI That Actually Changes Flagging
        </div>
      </div>

      <!-- <div class="grid grid-cols-2 gap-8 w-full mb-12">
        <div v-for="card in aiFeatures" :key="card.title" 
             class="bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-10 rounded-[24px] shadow-2xl hover:border-white/20 transition-all duration-300">
          
          <div class="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10">
             <img :src="card.iconPath" class="w-6 h-6 object-contain" alt="icon" />
          </div>

          <h3 class="text-[#FEFEFF] text-[22px] font-bold mb-3">{{ card.title }}</h3>
          <p class="text-[#A0A0AB] text-[15px] leading-relaxed font-medium">
            {{ card.desc }}
          </p>
        </div>
      </div> -->

     <div class="grid grid-cols-2 gap-x-[120px] gap-y-[64px] w-[1440px] h-[473px] mb-12">
    
    <div v-for="card in aiFeatures" :key="card.title" 
         class="relative flex flex-col justify-center items-center
                w-[660px] h-[196px] p-[24px] 
                /* Glassmorphism Logic */
                bg-white/[0.02] backdrop-blur-[2px] 
                border-[0.2px] border-white/20 
                rounded-[12px] shadow-2xl 
                hover:bg-white/[0.04] transition-all duration-300">
      
      <div class="bg-white w-11 h-11 flex items-center justify-center mb-8 border border-white/10">
         <img :src="card.iconPath" class="w-6 h-6 object-contain" alt="icon" />
      </div>

      <h3 class="text-[#FEFEFF] text-[22px] font-bold mb-3">
        {{ card.title }}
      </h3>
      <p class="text-[#A0A0AB] text-[15px] leading-relaxed font-medium">
        {{ card.desc }}
      </p>
    </div>

  </div>

      <div class="text-[#F9A825] text-[32px] font-bold mb-12 tracking-wide drop-shadow-md">
        Enterprise Only
      </div>

      <div class="w-full bg-white/[0.04] border border-white/10 backdrop-blur-3xl rounded-[24px] p-8 flex items-center justify-between shadow-2xl">
        <div class="text-[22px] font-bold">
          <span class="text-[#F9A825]">Be The First</span> 
          <span class="text-[#FEFEFF] ml-2">To Try Out Our New AI Features.</span>
        </div>

        <div class="flex items-center gap-4">
          <input 
            type="email" 
            placeholder="Enter email address" 
            class="bg-white/5 border border-white/20 rounded-lg px-5 py-3 w-[320px] text-white focus:outline-none focus:ring-1 focus:ring-[#F9A825] transition-all"
          />
          <button class="bg-[#F9A825] hover:bg-[#FFB74D] text-[#1A1C3D] font-bold px-8 py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-500/20">
            Join AI Early Access
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