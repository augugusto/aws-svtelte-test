<script>
    import { page } from "$app/stores";
    import menu from "./rutas";
    import UserMenu from "./UserMenu.svelte";
</script>

<div class="contenedor">
    <span><b>Hola mundo!</b></span>
    {#each menu as item}
        {#if $page.url.pathname === item.ruta}
            <span><i>{item.nombre}</i></span>
        {:else}
            <span><a href={item.ruta}>{item.nombre}</a></span>
        {/if}
    {/each}
    <span style=" margin-left: auto; ">
        <UserMenu/>
    </span>
</div>

<style>
    .contenedor {
        border: 1px black solid;
        padding: 15px;
        display: flex;
        flex-direction: row;
        gap: 15px;
        line-height: 0px;
    }
</style>
