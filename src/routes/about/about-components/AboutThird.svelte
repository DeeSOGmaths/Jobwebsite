<script>
    


</script>

<section>

    <div class = "  alphas animate__animated animate__bounceInLeft" > 

        <span class = "icon11"> <i class="fa-solid fa-book"></i> </span>

        <span class = "p1"> 2+ </span> 

        <span> Years of Experience</span>

    </div>




    <div class = " alphas animate__animated animate__bounceInLeft" > 

        <span class = "icon11"> <i class="fa-solid fa-suitcase"></i> </span>

        <span class = "p1"> 5+ </span>

        <span> Projects Completed </span>

    </div>




    <div class = " betas animate__animated animate__bounceInRight" > 

        <span class = "icon12"> <i class="fa-solid fa-people-group"></i> </span>

        <span class = "p1"> 10+ </span>

        <span>  Effective Clients </span>

    </div>



    <div class = " betas animate__animated animate__bounceInRight" > 

        <span class = "icon12"> <i class="fa-solid fa-laptop-code"></i> </span>

        <span class = "p1"> 10,000 </span>

        <span>  Lines Of Code </span>

    </div>


</section>



<style>

    /* Global Styles */
    section{
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
    }
    section div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:1em;
        border-radius:4px;
        width:13em;
        height:10em;
        border:none
    }
    section .alphas{
          background-color:#256479;
    }
    section .betas{
         background-color:#134e3a;
    }
    section div .p1{
        color:white;
        font-weight:bold;
        font-size:2em;
    }
    section div span{
        color:white;
        font-size:1.2em;
    }
    section div .icon11{
       font-size:2em;
       color:white;
    }
    section div .icon12{
       font-size:2em;
       color:rgb(29, 187, 153);
    }




     @media (max-width:768px){
         section{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:1em;
        }
        section div{
            width:95%;
            height:12em
        }

    }
     @media (min-width:769px) and (max-width:1023px){
         section{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:1em;
        }
         section div{
            width:95%;
            height:12em
        }

    }
     @media (min-width:1024px){
        section{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            gap:1em;
        }
     }

</style>