<script>

    import { onMount } from 'svelte';

    function scrollToStart() {
        const scrollContainer = document.querySelector('.main');
        scrollContainer.scrollLeft = 0; // Reset scroll position to the start
    }

   onMount(scrollToStart); // Call the function to reset scroll position when the component mounts

</script>



<main class = "main animate__animated animate__bounceInUp">

   


<section>

    <img src = "/images/project1.png" alt = "FirstWork" class = "project-image"/>
   
</section>



<section>
     <img src = "/images/project2.png" alt = "SecondWork" class = "project-image"/>

</section>



<section>
    <img src = "/images/project3.png" alt = "ThirdWork" class = "project-image"/>

</section>



<section>
    <img src = "/images/project4.png" alt = "FourthWork" class = "project-image"/>

</section>


<section>
    <img src = "/images/project5.png" alt = "FifthWork" class = "project-image"/>

</section>



</main>




<style>

    /* Global Styles */
    main{
        background-image:linear-gradient(to right, #050b2e, #180f04);
        overflow-x:auto;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        scroll-snap-type:x mandatory;
        width:50vw;
        height:auto;
        margin:0 auto;
        padding:10px;
        gap:2em;
        animation-duration:2s
        
    }

   main section{
        flex:0 0 auto;
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:3em;
    }

    .project-image{
        width:100%;
        height:100%;
    }





    @media(max-width:768px){
        main{
            width:100%;
            height:100%
        }
        

    }



    @media(min-width:769px) and (max-width:1023px){
        main{
            scroll-snap-type:x mandatory;
            overflow-x:auto;
            padding:10px;
             width:100%;
            height:100%
        }

        section{
            margin-bottom:4em;
        }
    }

    @media (min-width:1024px){
        main{
            scroll-snap-type:x mandatory;
            overflow-x:auto;
            padding:10px;
        }

        section{
            margin-bottom:4em;
        }
    }
</style>