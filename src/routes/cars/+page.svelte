<script>
    import { page } from '$app/stores';
    import { cars } from '$lib/data/cars'; 
  
    $: category = $page.url.searchParams.get('category') // a chaque fois que ce qu'il y a dans la l'url params je recalcule category
    // donc $: en qq sorte un useeffect, sauf que je le définis , donc si l'url change la category est recalculé sport = vehicule sport, premium = vehicule premium etc
    console.log(category)
  
    $: filteredCars = category
      ? cars.filter((c) => c.category === category)
      : cars
  </script>
  
  {#if filteredCars.length === 0}
    <p>Aucun véhicule trouvé pour “{category}”.</p>
  {:else}

    <section class="mx-auto max-w-6xl px-4 py-10">

        <h1 class="text-2xl font-light pb-10">Tout nos véhicules :</h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each filteredCars as car}
                <article class="group relative overflow-hidden rounded-2xl  border border-zinc-800 bg-zinc-950 shadow-sm transition hover:shadow-white hover:border-zinc-700">
                    <a href={`cars/${car.slug}`} aria-label={`voir ${car.model}`} class="absolute inset-0 z-10"></a>

                    <div class="relative z-0">
                        <div class="relative h-48 w-full overflow-hidden">
                            <img src={car.image} alt={car.model} class="h-full w-full object-cover transition duration-300 group-hover:scale-110"/>
                            <div class="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
                            <span class="absolute top-3 left-3 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur"
                            >{car.category}
                            </span>
                        </div>
                    </div>
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-zinc-100">
                        {car.model}
                    </h2>
                    <p class="mt-1 text-sm text-zinc-400">
                        À partir de
                    </p>
                    <div class="mt-2 flex items-end justify-between">
                        <p class="text-xl font-bold text-zinc-100">{car.pricePerDay}€ <span class="text-sm font-normal text-zinc-400">/ jour</span> </p>
                        <span class="rounded-xl  bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                            >Voir
                        </span>
                    </div>
                    </div>
                </article>
            {/each}
        </div>
    </section>
  {/if}
  
