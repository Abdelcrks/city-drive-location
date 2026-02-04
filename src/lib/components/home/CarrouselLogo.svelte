<script>
    import { brands } from "$lib/data/brand";
  </script>

  <section class="py-10">
    <div class="relative mx-auto max-w-6xl overflow-x-auto w-full sm:w-full lg:w-140 xl:w-140">
      <!-- Fade gauche -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-20 z-20 bg-linear-to-r from-zinc-950 to-transparent"></div>
      <!-- Fade droite -->
      <div class="pointer-events-none absolute inset-y-0 right-0 w-20 z-20 bg-linear-to-l from-zinc-950 to-transparent"></div>
  
      <div
        class="flex items-center gap-8 flex-nowrap w-max
               animate-[CarouselLogoKeyFrames_20s_linear_infinite]
               hover:[animation-play-state:paused]">
        {#each brands as brand}
          <a href={`/cars?brand=${brand.slug}`} class="shrink-0">
            <img src={brand.logo} alt={brand.name} class="h-12 w-auto opacity-80 hover:opacity-100 transition" />
          </a>
        {/each}
  
        {#each brands as brand}
          <a href={`/cars?brand=${brand.slug}`} class="shrink-0">
            <img src={brand.logo} alt={brand.name} class="shrink-0 h-12 w-auto opacity-80 hover:opacity-100 transition" />
          </a>
        {/each}
      </div>
    </div>
  </section>
  
  