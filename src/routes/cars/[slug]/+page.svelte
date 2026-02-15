<script lang="ts">
    import type { Car } from "$lib/data/cars";

    export let data: { car: Car }; // j'accepte la prop data de page server ts

    // const { car} = data
    // let activeIndex = 0
    // const images = car.images?.length ? car.images : [car.image]
    $: car = data?.car;
    $: images = car?.images?.length ? car.images : car ? [car.image] : []; // si car existe et a au moins 1 image utile car.images sinn liste car.image sinn tableau vide
    let activeIndex = 0;

    const prev = () => {
        activeIndex = (activeIndex - 1 + images.length) % images.length;
    };

    const next = () => {
        activeIndex = (activeIndex + 1 + images.length) % images.length;
    };
</script>

<section class="mx-auto max-w-6xl px-4 py-10">
    {#if !car}
        <p class="text-zinc-300">Voiture introuvable</p>
    {:else}
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div class="space-y-4">
                <div   class="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]" >
                    <div class="relative aspect-16/10">
                        <img src={images[activeIndex]}  alt={car.model} class="absolute inset-0 h-full w-full object-cover  object-[0%_75%] transition duration-500 group-hover:scale-[1.03]" />
                        <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
                        <div class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_40%)]"></div>
                        <div class="absolute bottom-4 left-4 flex gap-2">
                            <span class="rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur" >
                                {car.brand}
                            </span>
                            <span  class="rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur capitalize">
                                  {car.category}
                            </span>
                        </div>
                    </div>
                </div>

                {#if images.length > 1}
                    <div class="flex items-center justify-between">
                        <button type="button"
                        class="inline-flex items-center gap-2  cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-900" onclick={prev}
                        >
                            <span class="text-lg leading-none">‹</span> Précédent</button>
                        <p class="text-xs text-zinc-400"> {activeIndex + 1} / {images.length}</p>
                        <button type="button" class="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-900"
                            onclick={next} >
                            Suivant
                            <span class="text-lg leading-none">›</span>
                        </button>
                    </div>
                    <div class="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {#each images as img, index}
                            <button type="button"  onclick={() => (activeIndex = index)}  aria-label={`photo ${index + 1}`}
                                class={`shrink-0 overflow-hidden rounded-2xl border transition ${
                                    index === activeIndex
                                        ? "border-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
                                        : "border-zinc-800 hover:border-zinc-600"
                                }`}
                            >
                                <img src={img} alt="" class="h-16 w-24 object-cover object-[30%_75%] cursor-pointer" />
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>

            <div class="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <h1   class="text-3xl font-bold tracking-tight text-zinc-100"> {car.model}</h1>
                        <p class="mt-2 text-sm text-zinc-400 capitalize">{car.category} • {car.brand} </p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-zinc-400">À partir de</p>
                        <p class="text-3xl font-bold text-zinc-100">{car.pricePerDay}€ <span class="text-sm font-normal text-zinc-400" >/ jour</span></p>
                    </div>
                </div>
                <p class="mt-6 text-zinc-300 leading-relaxed">{car.description} </p>
                <div class="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                        <p class="text-xs text-zinc-500">Transmission</p>
                        <p class="mt-1 font-medium text-zinc-200">{car.transmission}</p>
                    </div>
                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                        <p class="text-xs text-zinc-500">Année</p>
                        <p class="mt-1 font-medium text-zinc-200">{car.year}</p>
                    </div>
                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                        <p class="text-xs text-zinc-500">Carburant</p>
                        <p class="mt-1 font-medium text-zinc-200">{car.fuel}</p>
                    </div>

                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4" >
                        <p class="text-xs text-zinc-500">Couleur</p>
                        <p class="mt-1 font-medium text-zinc-200">{car.color}</p>
                    </div>
                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                        <p class="text-xs text-zinc-500 ">Prix Semaine :</p>
                        <p class="mt-1 font-medium text-zinc-200 text-xl">{car.pricePerWeek}€</p>
                    </div>
                    <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 ">
                        <p class="text-xs text-zinc-500">Prix Week end 72h</p>
                        <p class="mt-1 font-medium text-zinc-200 text-xl">{car.priceWk}€</p>

                    </div>
                </div>
                <div class="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <p class="text-sm italic text-zinc-400">Pour toute demande personnalisée, n’hésitez pas à nous contacter.</p>
                </div>
                <a href="https://www.snapchat.com/@city.drivee" class="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-90">
                    Réserver
                </a>
                <a href="/cars" class="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900">
                    Voir d’autres véhicules
                </a>
            </div>
        </div>
    {/if}
</section>
