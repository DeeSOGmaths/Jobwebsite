<script>
     function NotAvailable(){
        alert("This feature is not available yet. Stay tuned for updates!");
     }
</script>


<section>
        <div class = " div1 animate__animated animate__bounceInLeft" >

            <div> 

            <p> <span> Transforming visions into <br> exceptional portfolios</span> <br><br><br> Within a span of 6 months, I've been able to leverage, <br> my abilities to develop,
many exciting projects. Some including <br> A Data Encryption Tool - DET, it was used to encrypt a
users <br> data by assigning them a unique key, then transforming the <br> data to binary characters. </p>

            </div> 




            <div class = "icon-sub-div"> 

            <p>  <a href = "/" class = "anchor" on:click={NotAvailable}> Watch a video </a>  </p>

            <p>  <i class="fa-solid fa-thumbs-up fa-shake" style = "--fa-animation-duration: 5s; --fa-animation-delay:2s"></i> </p>

            </div> 


        </div>





        <div class = " div2 animate__animated animate__bounceInRight" >

            <img src = "/images/user2.jpg" alt = "profile-pic">
             
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
    section .div1 p span{
        color:white;
        font-weight:bold;
        font-size:2em;
    }
    section .div1 p{
        color:white;
    }
    .anchor{
        border:none;
        background-color: #256479;
        padding:1em 4em;
        color:white;
        border-radius:5px;
        text-decoration:none
    }
    .div1{
        display:flex;
        flex-direction:column;
        gap:3em;
        animation-duration:2s;
    }
    .div2{
        height:15em;
        animation-duration:2s;
        border:10px solid rgb(17, 85, 32);
        border-style:solid;
        display:block
    }
    section .div2 img{
        width:15em;
        height:100%
        
    }
    .icon-sub-div{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
        
    }
    section .div1 .icon-sub-div .fa-solid{
        color:yellow;
        font-size:3em;
    }

    @media (max-width:768px){
         section{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:5em;
        }
    .div2{
        height:35vh;
        width:80vw;
        animation-duration:2s;
        border:10px solid rgb(17, 85, 32);
        border-style:solid;
        display:block
    }
    section .div2 img{
        width:15em;
        width:100%;
        height:100%
        
    }
        

    }
     @media (min-width:769px) and (max-width:1023px){
         section{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            gap:5em;
        }

    }
     @media (min-width:1024px){
        section{
            display:flex;
            flex-direction:row;
            justify-content:center;
            gap:5em;
        }
     }


</style>