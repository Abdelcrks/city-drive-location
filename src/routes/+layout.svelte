<script lang="ts">
	import './layout.css';
	let { children } = $props();
	import logo from '$lib/assets/logo-city-drive.jpeg'

	let mobileOpen = $state(false)

</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"/>
</svelte:head>


<div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
	<nav class="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
		<div class="mx-auto max-w-6xl px-4 py-4">
		
			<div class="flex items-center gap-6">
				<a href="/" class="flex items-center gap-3 min-w-0">
					<img src={logo} alt="city drive" class="h-12 w-auto rounded-lg" />
					<div class="min-w-0">
						<p class="text-sm text-white/70 leading-none">City Drive</p>
						<h1 class="text-lg font-semibold tracking-tight leading-none">Location de voitures</h1>
					</div>
				</a>
	
				<!-- lien desktop -->
				<div class="ml-auto hidden sm:flex items-center gap-2">
					<a href="/" class="px-3 py-2 text-sm rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition">
						Accueil
					</a>
					<a href="/cars" class="px-3 py-2 text-sm rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition">
						Nos véhicules
					</a>
					<a href="/contacts" class="px-3 py-2 text-sm rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition">
						Nous contacter
					</a>
	
					<a
						href="https://wa.me/33627524339?text=Salut%20City%20Drive%20!%20Je%20souhaite%20r%C3%A9server%20une%20voiture."
						target="_blank"
						rel="noreferrer"
						class="ml-2 inline-flex items-center justify-center rounded-xl bg-green-500 text-white px-4 py-2 text-sm font-semibold hover:bg-green-600 transition"
					>
						Réserver (WhatsApp)
					</a>
				</div>
	
				<!-- Mobile menu hamburger -->
				<div class="ml-auto sm:hidden">
					<button
						type="button"
						class="inline-flex items-center rounded-lg p-2 ring-1 ring-white/15 hover:bg-white/10 transition"
						aria-label="Ouvrir le menu"
						aria-expanded={mobileOpen}
						onclick={() => mobileOpen = !mobileOpen}
					>
						<span class="text-xl leading-none">{mobileOpen ? '✕' : '☰'}</span>
					</button>
				</div>
			</div>
	
			<!-- Mobile menu -->
			{#if mobileOpen}
				<div class="sm:hidden mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
					<a
						href="/"
						onclick={() => mobileOpen = false}
						class="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
					>
						Accueil
					</a>
					<a
						href="/cars"
						onclick={() => mobileOpen = false}
						class="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
					>
						Nos véhicules
					</a>
					<a
						href="/contacts"
						onclick={() => mobileOpen = false}
						class="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
					>
						Nous contacter
					</a>
	
					<div class="mt-3 grid gap-2">
						<a
							class="inline-flex items-center justify-center rounded-xl bg-green-500 text-white px-4 py-2 text-sm font-semibold hover:bg-green-600 transition"
							href="https://wa.me/33627524339?text=Salut%20City%20Drive%20!%20Je%20souhaite%20r%C3%A9server%20une%20voiture."
							target="_blank"
							rel="noreferrer"
						>
							Réserver (WhatsApp)
						</a>
						<a
							class="inline-flex items-center justify-center rounded-xl bg-amber-400 text-zinc-950 px-4 py-2 text-sm font-semibold hover:bg-amber-300 transition"
							href="https://www.snapchat.com/@city.drivee"
							target="_blank"
							rel="noreferrer"
						>
							Snapchat
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>
	

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-white/10">
		<div class="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
			<div class="space-y-2">
				<p class="text-lg font-semibold tracking-tight">City Drive</p>
				<p class="text-sm text-white/70">
					Location de voitures rapide et simple. Réservation via WhatsApp ou Snapchat.
				</p>
				<p class="text-xs text-white/50">© {new Date().getFullYear()} City Drive — Tous droits réservés</p>
			</div>

			<div class="space-y-2">
				<p class="text-sm font-semibold text-white/90">Navigation</p>
				<div class="flex flex-col gap-2 text-sm">
					<a class="text-white/70 hover:text-white transition" href="/">Accueil</a>
					<a class="text-white/70 hover:text-white transition" href="/cars">Nos véhicules</a>
					<a class="text-white/70 hover:text-white transition" href="/contacts">Nous contacter</a>
				</div>
			</div>

			<div class="space-y-3">
				<p class="text-sm font-semibold text-white/90">Réserver</p>
				<div class="flex flex-col gap-3 ">
					<a
						class="inline-flex items-center justify-center rounded-xl bg-green-500 text-white px-4 py-2 w-1/2 text-sm font-semibold hover:bg-green-800 transition"
						href="https://wa.me/33600000000?text=Salut%20City%20Drive%20!%20Je%20souhaite%20r%C3%A9server%20une%20voiture."
						target="_blank"
						rel="noreferrer"
					>
						WhatsApp
					</a>

					<a
						class="inline-flex items-center justify-center rounded-xl bg-amber-400 text-white px-4 py-2  w-1/2 text-sm font-semibold ring-1 ring-white/15 hover:bg-amber-600 transition"
						href="https://www.snapchat.com/@city.drivee"
						target="_blank"
						rel="noreferrer"
					>
						Snapchat
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>