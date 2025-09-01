<script>
    import {onMount} from 'svelte';

    onMount(() => {
     new WOW().init();
    });

</script>


<section>

    <div class = "wow div1 animate__animated animate__backInDown" data-wow-duration="2s" data-wow-delay="0.5s">

       <p>  <span>  A Passionate Developer <br>  Who Loves To Code </span>  </p> 

    </div>





     <div class = "wow div2 animate__animated animate__bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">



        <div class = "div21main"> 



        <div class = "sub1div-2">
            <i class = "fa-solid fa-gear"> </i><br>

            <p> <span>  High Developer Skillset </span> <br><br> I possess a wide range of skills<br> for computing and programming, some <br> including,
Python, JavaScript, Java.</p>

        </div>



         <div class = "sub1div-2">
            <i class = "fa-solid fa-boxes"> </i><br>

            <p> <span>  Creativity and Leadership </span> <br><br> Your goals can only be acheived,<br> by setting a pace. contact me, and let <br> me turn
your ideas into creativity.</p>

        </div>




        </div>




        <div class = "sub2div-2">

            <div> 
            <p> <span> About Me </span> <br><br> I am a cool, easy-going technology enthusiast. <br> who loves to play games,
read scientific books, build up <br> with friends and to evolve spiritually. I also love teaching <br> others 
to grow and improve, as i believe success isn't <br> measured by wealth, but by improvement. </p>
            </div> 

            <div class = "sub2div-2-boxes">

                 <div class = "box1 boxes">
                    <p> <span> Name: </span><br> Togun Oludolapo.A </p>
                     <p> <span> Email: </span><br> deeboytogun<br>@gmail.com</p>

                 </div>


                 <div class = "box2 boxes">
                    <p> <span> Phone: </span><br> +2349112030271 </p>
                    <p> <span> Nationality:</span><br> Nigerian Citizen </p>

                 </div>

            </div>





        </div> 


        
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
    .div21main{
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .sub1div-2{
        border:none;
        border-radius:4px;
        background-color:#0f1950;
        padding:10px 30px;
    }
    .sub2div-2{
        display:flex;
        flex-direction:column;
        gap:1em;
    }
    .sub2div-2-boxes{
        display:flex;
        flex-direction:row;
        gap:0;
    }
    .sub2div-2-boxes .boxes{
        width:11em;
        height:9em;
        background-color:transparent;
        border-radius:4px;
        padding:10px;
        border:1px solid rgb(76, 201, 243);
    }
    .sub2div-2 p{
        color:white;
        font-size:1em;
    }
    .sub2div-2 p span{
        font-weight:bold;
        color:rgb(76, 201, 243);
        font-size:1.2em;
    }
    section .div1{
        text-align:center;
        animation-duration:1s;
    }
    section .div2{
        animation-duration:1s;

    }
    section .div2 span{
        font-weight:bold
    }
    section .div2 .sub1div-2 p{
        color:white;
    }
    .fa-solid{
        font-size:1.5em;
        color:rgb(76, 201, 243);
    }
   
    section .div1 p span{
        color:rgb(76, 201, 243);
        font-size: 1em;
        font-weight:bold
    }
    section .div1 p span{
        color:white;
        font-size:1.8em;
        font-weight:bold
    }


    @media (max-width:768px){
        section{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:2em;
            margin:0 auto
        }
        section .div2{
            display:flex;
            flex-direction:column;
            gap:5em;
            justify-content:center;
        }
      .sub1div-2{
        border:none;
        border-radius:4px;
        background-color:#0f1950;
        padding:10px 30px;
        width:75vw;
    }
     .sub2div-2{
        width:90vw
     }
    
      .div21main{
        display:flex;
        flex-direction:column;
        gap:1em;
        align-items:center;
        
    }
    .sub2div-2-boxes .boxes{
        width:38vw;
        height:9em;
        background-color:transparent;
        border-radius:4px;
        padding:10px 20px 10px 10px;
        border:1px solid rgb(76, 201, 243);
    }

    }
     @media (min-width:769px) and (max-width:1023px){
        section{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:2em
        }
        section .div2{
            display:flex;
            flex-direction:row;
            gap:5em;
            justify-content:center;
        }

    }
     @media (min-width:1024px){
        section{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:2em
        }
        section .div2{
            display:flex;
            flex-direction:row;
            gap:5em;
            justify-content:center;
        }

    }


</style>


  