<script context="module">
	export async function load({ fetch }) {
		const url = `/links/all.json`;
		const res = await fetch(url);

		const links = (await res.json()).links;

		if (res.ok) {
			return {
				props: {
					links
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	export let links: {
		title: string;
		url: string;
	}[];
</script>

<svelte:head>
	<title>Benedict Armstrong</title>
</svelte:head>

<div class="text-center">
	<h1 class="text-4xl m-5">Benedict Armstrong</h1>
	{#if links}
		<ul>
			{#each links as link}
				<li class="text-lg m-5">
					<a rel="external" class="hover:bg-gray-300 p-1 text-xl" href={link.url}>{link.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
