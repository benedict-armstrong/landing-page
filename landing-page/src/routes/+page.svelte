<script>
    const links = {
        'CV': '/cv',
        'Github': 'https://github.com/benedict-armstrong',
        // 'Projects': '/projects',
        'Instagram': 'https://www.instagram.com/benxarmstrong/',
        'LinkedIn': 'https://www.linkedin.com/in/benedict-armstrong-7137a621b/',
        'Contact': 'mailto:contact@benarmstro.ng',
    }
</script>


<h1 class="text-3xl font-bold mb-3">
    Benedict Armstrong
</h1>

<p class="text-justify">

    I'm currently a student at ETH Zurich, where I'm pursuing a degree in Computational Science and Engineering (CSE).
    <br/>
    <br/>

    In addition to my studies, I lead a small team of developers at
    <a
            class="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent hover:underline"
            href="https://armstrongsystems.io"
    >
        Armstrong Systems
    </a>.

    Our primary focus is on developing custom software solutions for clients in the financial industry in Zurich.
</p>
<div class="text-2xl font-bold mt-3 flex flex-wrap">
    {#each Object.entries(links) as [name, link]}
        <div class="mr-4">
            <a class="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent hover:underline"
               href={link}>{name}
            </a>
        </div>
    {/each}
</div>