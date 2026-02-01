<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<nav>
<h1>City Drive</h1>
<a href="/">Accueil</a>
<a href="/cars">Nos véhicules</a>
<a href="/contacts">Nous contacter</a>
</nav>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


{@render children()}


<footer>
	<h1>© City Drive – Location de voitures</h1>
	<button>Whatsapp</button>
	<button>Snapchat</button>
</footer>