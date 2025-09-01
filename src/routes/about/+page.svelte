<script>
     import HeaderGreen from '../../components/HeaderGreen.svelte';
     import AboutFirst from './about-components/AboutFirst.svelte';
     import AboutSecond from './about-components/AboutSecond.svelte';
      import AboutThird from './about-components/AboutThird.svelte';
       import AboutFourth from './about-components/AboutFourth.svelte';
</script>

<main>

    <section class = "section1"> 

    <HeaderGreen/>
    <AboutFirst/>

    </section>


    <section class = "sections section2">
        <AboutSecond/>
        <AboutThird/>

    </section>



    <section>
        <AboutFourth/>
    </section>
    


</main>


<style>
    /* Global Styles */
    


    @media (max-width:768px){
    main{
         background-image:linear-gradient(to right, #050b2e, #041811);
        overflow-x:hidden;
        padding:10px 10px 5em 10px;
         
        }
    main section{
        background-image:linear-gradient(to right, #050b2e, #041811);
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:3em

        }
      .section2{
        display:flex;
        flex-direction:column;
        gap:5em
    }

    }


     @media (min-width:769px) and (max-width:1023px) {
        main{
         background-image:linear-gradient(to right, #050b2e, #041811);
         scroll-snap-type:y proximity;
         overflow-y:auto;
         padding:10px
        }

        main section{
        background-image:linear-gradient(to right, #050b2e, #041811);
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:4em;

        }
    main .sections{
        padding:0;
        margin:0 ;
    }
      .section2{
        display:flex;
        flex-direction:column;
        gap:5em
    }
        
    }




    @media (min-width:1024px){
        main{
         background-image:linear-gradient(to right, #050b2e, #041811);
         width:100vw;
         height:100vh;
         scroll-snap-type:y proximity;
         overflow-y:auto;
        }

        main section{
        background-image:linear-gradient(to right, #050b2e, #041811);
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:100px

        }
   
   
      .section2{
        display:flex;
        flex-direction:column;
        gap:5em;
        
    }

    }
    

</style>