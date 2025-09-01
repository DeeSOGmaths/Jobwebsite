<script>

  import HeaderRed from "../../components/HeaderRed.svelte";
  import ServicesFirst from "./services-components/ServicesFirst.svelte";

</script>


<main>

    <section>
        <HeaderRed/>
        <ServicesFirst/>

    </section>



</main>



<style>
/* Global Styles */
main{
     background-image:linear-gradient(to right, #050b2e, #180404 );
}
section{
    background-image:linear-gradient(to right, #050b2e, #180404 );
}
  

@media (max-width:768px){
     main{
        
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100%;
        height:100%;
        padding:0 13px 3em 13px;
    }
    section{
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100%;
        height:100%
    }
   
}



@media (min-width:769px) and (max-width:1023px){
     main{
        
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100%;
        height:100%;
    }
    section{
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100%;
        height:100%
    }

}



@media (min-width:1024px){
     main{
        scroll-snap-type:y proximity;
        overflow-y:auto;
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100vw;
        height:100vh
    }
    section{
        scroll-snap-align:start;
        background-image:linear-gradient(to right, #050b2e, #180404 );
        width:100%;
        height:100%
    }

}

</style>