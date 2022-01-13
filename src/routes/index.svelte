<script>
    import Navbar from "../components/navbar.svelte";
    import Box from "../components/box.svelte";
    let title = "Visvam's Portfolio";
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head> 

<Navbar/>
<body>
    <h1>{title}</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <div class="main-content">
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>  
        <Box repo="https://github.com/BarrelDev/ShipperKeeper-Website">
            <span slot="name">ShipperKeeper</span>
            <span slot="description">Great Web App Made In Gatsby</span>
        </Box>
    </div>
    
    <input bind:value={title}/>
</body>

<style>
    body{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .main-content
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>