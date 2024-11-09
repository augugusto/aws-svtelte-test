<script>
    import Navigation from "./components/navigation/Navigation.svelte";

	let { children } = $props();
</script>
<Navigation/>
<br>
{@render children()} 