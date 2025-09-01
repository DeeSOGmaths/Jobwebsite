<script>

</script>

<section>



    <div class = "component1 animate__fadeInUp animate__animated" style = " --animate-delay: 1s; animation-duration:3s">

        <p class = "component1-paragraph1"> MY SERVICES </p>

        <p class = "component1-paragraph2"> Engineering highly flexible applications <br>
            through development and innovation
        </p>


    </div>





    <div class = "component2 animate__fadeInLeft animate__animated" style = " --animate-delay: 1s;animation-duration:3s"> 



        <div>

            <p>  <i class="fa-solid fa-globe"></i> </p>

            <p class = "main-content"> <span class = "content"> WEB DEVELOPMENT </span>  <br><br> I've made up to 6 responsive websites,<br> for my clients, all featuring great,
and <br> unique instinct, creativity and design <br> I am willing to create solution delivering -
<br> websites for you, just contact me now.  </p>


        </div>





        <div>

            <p> <i class="fa-solid fa-robot"></i>  </p>

            <p class = "main-content"> <span class = "content"> COMPUTER VISION/AI </span> <br><br> As Artificial Intelligence is the, next big <br> thing, i believe it is 
required to get your<br> hands on some AI tools, and one of my <br> best, happens to be Computer Vision
and <br> Speech Recognition.</p>


        </div>




        <div>

            <p> <i class="fa-solid fa-desktop"></i> </p>

            <p class = "main-content"> <span class = "content"> TELEGRAM BOT/DESKTOP APP </span> <br><br> Telegram as we know it, is becoming a<br>  social media platform for,
web3 and its <br> enviroment. This new technology has opened <br> up a wide and spacious, ecosystem for many
 <br> Industries, some including Finance and Tech. </p>


        </div>




    </div>



</section>


<style>

    /* Global Styles */
    section{
        padding-bottom:10em;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:3em;
         font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
       font-variation-settings:
    "wdth" 100;
    }
    section .component1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1em;
    }
    section .component1 .component1-paragraph1{
        color:rgb(240, 35, 35);
        font-weight:bold;

    }
    section .component1 .component1-paragraph2{
        color:white;
        font-weight:bold;
        font-size:1.7em;
        text-align:center;

    }
    section .component2 div p .content{
        color:white;
        font-weight:bold;
        font-size:1.2em;
        text-align:center;
    }
     section .component2 div p .fa-solid{
        color:rgb(240, 35, 35);
        font-size:2.5em;
        text-align:center;

     }
     section .component2 div{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5em;
        border:0.1px solid #333;
        padding:5px 15px;
     }
     section .component2 div .main-content{
        
        color:white;
        text-align:center;
     }





    @media (max-width:768px){
          section .component1{
            display:flex;
            flex-direction:column;
            align-items:center;

        }
        section .component2{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:2em
        }
          section .component2 div{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5em;
        border:0.1px solid #333;
        padding:5px 15px;
        width:90vw
     }
        
        


    }
    @media (min-width:769px) and (max-width:1023px){
      section .component1{
            display:flex;
            flex-direction:column;
            align-items:center;

        }
        section .component2{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:4em;

        }
         section .component2 div{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5em;
        border:0.1px solid #333;
        padding:5px 15px;
        width:60vw
     }

    }


    @media (min-width:1024px){
        section .component1{
            display:flex;
            flex-direction:column;
            align-items:center;

        }
        section .component2{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            gap:4em
        }

    }
</style>