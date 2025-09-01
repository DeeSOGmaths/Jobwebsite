<script>
      

</script>




<section>


    
    <div class = "div1">

         <p class = "first-paragraph">  <span>  I Work Hard To Improve My <br> Skills Regulary</span>  </p> 


         <p class = "arrow-div"> 

            <span> <i class = "fa-solid fa-arrow-down"></i> </span>
            <span> <i class = "fa-solid fa-arrow-down"></i> </span>
            <span> <i class = "fa-solid fa-arrow-down"></i> </span>
            <span> <i class = "fa-solid fa-arrow-down"></i> </span>

         </p>



    </div>




    



    <div class = "div2">





        <div>  

            <span><br><strong class = "first"> HTML5 90%</strong>
            <div class = "bars bars1"> .</div> </span>

            <span><br><strong class = "first"> CSS3 80% </strong>
            <div class = "bars bars2"> . </div> </span> 

            <span><br><strong class ="first"> Python 85%</strong>
            <div class = "bars bars3"> . </div> </span>

            <span><br><strong class ="first"> OpenCV 80%</strong>
            <div class = "bars bars4"> . </div> </span>


        </div>







        <div>
             
            <span><br><strong class = "second"> Django 90%</strong>
            <div class = "bars bars5"> . </div> </span>

            <span><br><strong class = "second"> Javacsript 70% </strong>
            <div class = "bars bars6"> .</div> </span>

            <span><br><strong class ="second"> Svelte 80%</strong>
            <div class = "bars bars7"> . </div> </span>

             <span><br><strong class ="second"> Git/Github 85%</strong>
            <div class = "bars bars8"> . </div> </span>


        </div>





    </div>








</section>








<style>
    /* Global Styles */
    section{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:4em;
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-variation-settings:
       "wdth" 100;
    }
    section .div1{
        display:flex;
        flex-direction:column;
    }
    section .div1 .first-paragraph{
        text-align:center;
    }
    section .div1 p{
        color:white;
        font-size:2em;
        font-weight:bold;
    }
    section .div1 .arrow-div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:4em;
    }
     section .div1 .arrow-div .fa-arrow-down{
        font-size:1.5em;
     }
     section .div2 div{
        display:flex;
        flex-direction:column;
        gap:1em;
     }
    
     section .div2 div .bars{
        width:0.1em;
        width:25em;
        border-radius:20px;
        border:none
     }
      section .div2 div .bars1{
         background-image:linear-gradient(to right, blue 90%, white 10%) ;
      }
      section .div2 div .bars2{
         background-image:linear-gradient(to right, blue 80%, white 20%) ;
      }
      section .div2 div .bars3{
         background-image:linear-gradient(to right, blue 85%, white 15%) ;
      }
      section .div2 div .bars4{
         background-image:linear-gradient(to right, blue 80%, white 20%) ;
      }
       section .div2 div .bars5{
        background-image:linear-gradient(to right, green 90%, white 10%)

       }
       section .div2 div .bars6{
        background-image:linear-gradient(to right, green 70%, white 30%)

       }
       section .div2 div .bars7{
        background-image:linear-gradient(to right, green 80%, white 20%)

       }
       section .div2 div .bars8{
        background-image:linear-gradient(to right, green 85%, white 15%)

       }
     .first{
        color:#5fcdf1
     }
     .second{
        color:#45f5ba
     }





     @media (max-width:768px){
            section .div2{
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:4em;
        }
    section .div2 div .bars{
        width:0.1em;
        width:85vw;
        border-radius:20px;
        border:none
     }
     section .div1 .first-paragraph{
        text-align:center;
        font-size:2em;
    }
     section .div1{
        display:flex;
        flex-direction:column;
        width:100vw;
    }
    }


     @media (min-width:769px) and (max-width:1023px){
         section .div2{
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:4em;
        }
         section .div2 div .bars{
        width:0.1em;
        width:85vw;
        border-radius:20px;
        border:none
     }
      section .div1 .first-paragraph{
        text-align:center;
        font-size:2em;
    }

    }




     @media (min-width:1024px){
        section .div2{
            display:flex;
            flex-direction:row;
            justify-content:center;
            gap:4em;
        }
         section .div1 .first-paragraph{
        text-align:center;
        font-size:2em;
    }
       
    }


</style>