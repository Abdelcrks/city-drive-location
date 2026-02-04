<script>
    import BtnWhatsapp from "../buttons/BtnWhatsapp.svelte";
    import { Headset, ShieldCheck } from "lucide-svelte";
    import {MapPin} from "lucide-svelte";
    import {CalendarSearch} from "lucide-svelte";
</script>
<section class="relative overflow-hidden min-h-[70svh] sm:min-h-[85vh]">

    <img src="/visuels/hero1.png" alt="voitures-v-mobile" class="absolute inset-0 h-full w-full object-cover sm:hidden"/>

    <img src="/visuels/hero1.png" alt="voitures" class="absolute inset-0 h-full w-full object-cover hidden sm:block"/>
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 mx-auto max-w-6xl px-4 text-center min-h-[70svh] sm:min-h-[85vh]
    flex flex-col">
        <div class="pt-14 sm:pt-24">
            <h1 class="font-extralight sm:text-sm lg:text-lg">
            Bienvenue chez City Drive Location
            </h1>
            <h2 class="text-3xl sm:text-5xl font-light leading-tight">
            <span class="font-semibold">Location</span> de voitures premium en Île-de-France
            </h2>
        </div>      
      <div class="mt-auto pb-10 sm:pb-16">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <div class="rounded-2xl bg-black/35 backdrop-blur ring-1 ring-white/15
            p-2 sm:p-5 flex items-start lg:items-center gap-2 sm:gap-3
            lg:min-h-24 xl:min-h-27.5 hover:bg-white/5 transition">
            
            <div class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 grid place-items-center
            rounded-xl bg-white/10 ring-1 ring-white/15">
                <Headset class="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div class="min-w-0 text-left">
            <div class="font-semibold leading-snug text-[11px] sm:text-base">
            Service 24/7
            </div>
            <div class="text-xs sm:text-sm text-white/70 leading-snug">
            Réponse rapide & assistance
            </div>
        </div>
        </div>
        <div class="rounded-2xl bg-black/35 backdrop-blur ring-1 ring-white/15
        p-2 sm:p-5 flex items-start lg:items-center gap-2 sm:gap-3 lg:min-h-24 xl:min-h-27.5
        hover:bg-white/5 transition">
            <div class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 grid place-items-center
                rounded-xl bg-white/10 ring-1 ring-white/15">
            <MapPin class="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div class="min-w-0 text-left">
            <div class="font-semibold leading-snug text-[11px] sm:text-base">
                Livraison possible
        </div>
        <div class="text-xs sm:text-sm text-white/70 leading-snug">
            Domicile • gare • aéroport
        </div>
        </div>
        </div>


        <div class="rounded-2xl bg-black/35 backdrop-blur ring-1 ring-white/15
                p-2 sm:p-5 flex items-start lg:items-center gap-2 sm:gap-3
                lg:min-h-24 xl:min-h-27.5
                hover:bg-white/5 transition">
        <div class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 grid place-items-center
                rounded-xl bg-white/10 ring-1 ring-white/15">
        <CalendarSearch class="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div class="min-w-0 text-left">
        <div class="font-semibold leading-snug text-[11px] sm:text-base">
            Location flexible
        </div>
        <div class="text-xs sm:text-sm text-white/70 leading-snug">
            Jour • Semaine • Mois
        </div>
        </div>
        </div>

        
        <div class="rounded-2xl bg-black/35 backdrop-blur ring-1 ring-white/15
                    p-2 sm:p-5 flex items-start lg:items-center gap-2 sm:gap-3lg:min-h-24 xl:min-h-27.5
                    hover:bg-white/5 transition">
        <div class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 grid place-items-center
                    rounded-xl bg-white/10 ring-1 ring-white/15">
            <ShieldCheck class="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div class="min-w-0 text-left">
            <div class="font-semibold leading-snug text-[11px] sm:text-base">
            Véhicules premium
            </div>
            <div class="text-xs sm:text-sm text-white/70 leading-snug">
            Propres • récents • entretenus
            </div>
        </div>
        </div>
        </div>        
      </div>
    </div>
  </section>
  