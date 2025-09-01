<script>

    function NotAvailable(){
        alert("This feature is not available yet. Stay tuned for updates!");
    }

</script>


<section class = "socials animate__animated animate__fadeInUp">
      <a href = "https://github.com/DeeSOGmaths"><div><i class="fa-brands fa-github"></i></div></a>
         <a href = "https://youtube.com/@SOGsolutions-Edu"><div> <i class="fa-brands fa-youtube"></i> </div></a>
          <a href = "" on:click={NotAvailable}><div> <i class="fa-brands fa-facebook-f"></i>  </div> </a>

</section>


<style>
    /* Global styles */
    section{
        background-image:linear-gradient(to right, #050b2e, #230627 );
        justify-content:center;
        display:flex;
        flex-direction:row;
        animation-duration: 3s;
    }
    section div{
        font-size:1.5em;
        border-style:solid;
        background-color:transparent;
        border-width:1px;
        border-color:lightblue;
        padding:10px;
        border-radius:50%
    }
    section div .fa-brands{
        color:lightblue;
        transition:all 0.3s ease-in-out;
    }
     section{
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;
            gap:20px;
            
        }
        section a div .fa-brands:hover{
            color:rgb(117, 62, 124)
        }

     @media (max-width:768px){
       

    }

     @media (min-width:769px) and (max-width:1023px){

    }

     @media (min-width:1024px){
        
     }


</style>