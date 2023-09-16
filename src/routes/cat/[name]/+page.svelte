<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let cat: { id: number; url: string };

	onMount(async () => {
		console.log(`Cat ! ${$page.params.name}`);
		const response = await fetch(`https://api.thecatapi.com/v1/images/${$page.params.name}`);
		cat = await response.json();
		console.log(cat);
	});

	$: url = cat?.url;
</script>

<img src={url} alt="cat" />
