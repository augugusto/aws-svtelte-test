<script>
    let cantidad = $state(0)
    setInterval(() => {
        cantidad++;
    }, 1000);
</script>
<div style="border: 1px solid black; border-radius: 25px; width: fit-content; padding: 25px; justify-items: center;">
    <p>Canntidad de visitantes!</p>
    <p>{cantidad}</p>
</div>