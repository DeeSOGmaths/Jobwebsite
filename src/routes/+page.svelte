<script>
    import Header from '../components/Header.svelte';
    import Homesectionfirst from '../components/Homesectionfirst.svelte';
    import HomeSocials from '../components/HomeSocials.svelte';
    

</script>


<section>

    <div> 
    <Header/>
    </div>

    <div> 
    <Homesectionfirst/>
    </div>

    <div> 
    <HomeSocials/>
    </div>
    


</section>

<style>

    /* Global Style */
    section div{
        margin-bottom:30px
    }
  
  

    
    @media (max-width:768px){
        section{
         padding:1em 1em 5em 1em;
         background-image:linear-gradient(to right, #050b2e, #230627);
         width:100%;
         height:100%;
         overflow-x:hidden;
    }
       

    }



     @media (min-width:769px) and (max-width:1023px){
        section{
         padding:1em 1em 5em 1em;
         background-image:linear-gradient(to right, #050b2e, #230627);
         width:100vw;
         height:100vh
    }

    }

     @media (min-width:1024px){
         section{
         height:100vh;
         align-items:center;
         gap:3em;
         background-image:linear-gradient(to right, #050b2e, #230627);
         width:100vw;
    
    }

        
     }
</style>