<script>

    import HeaderOrange from "../../components/HeaderOrange.svelte";
    import ProjectFirst from "./project-components/ProjectFirst.svelte";
</script>

<main> 

<section>
    <HeaderOrange/>

    <div>

    <ProjectFirst/>

    </div>
</section>


</main>


<style>
      /* Global Styles */
    
    


    @media (max-width:768px){
    main{
         background-image:linear-gradient(to right, #050b2e, #180f04);
        overflow-x:hidden;
        padding:10px 10px 5em 10px;
        width:100vw;
         height:100vh
         
        }
    main section{
        background-image:linear-gradient(to right, #050b2e, #180f04);
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:3em

        }
         main section div{
        width:90vw;
        height:80vh
      }
   

    }


     @media (min-width:769px) and (max-width:1023px) {
        main{
         background-image:linear-gradient(to right, #050b2e,#180f04);
         scroll-snap-type:y proximity;
         overflow-y:auto;
         padding:10px;
         width:0vw;
         height:100vh
        }

        main section{
        background-image:linear-gradient(to right, #050b2e, #180f04);
        width:100%;
        height:100%;
        scroll-snap-align: start;
        margin-bottom:4em;

        }
         main section div{
        width:90vw;
        height:80vh
      }
  
        
    }




    @media (min-width:1024px){
        main{
         background-image:linear-gradient(to right, #050b2e, #180f04);
         width:100vw;
         height:100vh;
         scroll-snap-type:y proximity;
         overflow-y:auto;
        }

        main section{
        background-image:linear-gradient(to right, #050b2e, #180f04);
        width:100%;
        height:100%;
        scroll-snap-align: start;

        }
  

    }
    

</style>