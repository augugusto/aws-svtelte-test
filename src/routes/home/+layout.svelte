<script>
    import Navigation from "$lib/navigation/Navigation.svelte";

	let { children } = $props();
</script>
<Navigation/>
<br>
{@render children()} 