<script> 

      let Skills = "Software Engineer";

  </script>



<main>


    <section class = "div1 animate__animated  animate__bounceInLeft">

        <div>

            <h1> Hi, I'm Oludolapo Togun </h1> <br>

            <p class = "skills">{Skills}</p>

        </div>


        <div>

            <p class = "description-paragraph"> Junior Software Engineer & Video-Maker with a passion, for Python, <br>Data Structures,
                OOP technologies, Artificial Intelligence and Learning. <br>
                With a right-on-time record of delivering successful web solutions.
             </p>

        </div>




        <div class = "third-div">

            <a href = "/pdfs/OludolapoResume.pdf" class = "anchor1" download = "Oludolapo Togun Resume"> Download CV <i class="fa-solid fa-download"></i> </a>

            <a href = "malito:deeboytogun@gmail.com?subject=Hello&Employee&body=Please&you&have&been&considered&for&this&job\n,&get&ready&for&onboarding&first&thing&tomorrow." class = "anchor2"> Let's Talk </a>

        </div>


    </section>
      



    <section class = "div2 animate__animated  animate__bounceInRight">

        <img src = "/images/user.jpg" alt = "profile" />


    </section>



</main>



<style>
    /* Global Styles */
    main {
    
       background-image:linear-gradient(to right, #050b2e, #230627);
        font-family: "Roboto", sans-serif;
       font-optical-sizing: auto;
       font-weight: <weight>;
     font-style: normal;
        font-variation-settings:
      "wdth" 100;
    }

    
    .div1 div h1{
        font-size:2.5em;
        color:white
    }
    .div1 div .skills{
        font-size:1.8em;
        font-weight:bold;
        color:lightblue
    }
    .description-paragraph{
        color:white
    }
    .third-div{
        display:flex;
        flex-direction:row;
        gap:6px
    }
    .third-div a{
        border-style:solid;
        border-radius:5px;
        padding:10px 3em;
        text-decoration:none
    }
    .third-div .anchor1{
        color:#050b2e;
        background:lightblue
    }
    .third-div .anchor2{
        color:lightblue;
        background:transparent;
        border-color:lightblue

    }
    .div1{
        display:flex;
        flex-direction:column
    }
    main .div2 img{
        width:20em;
        height:20em;
        border-radius:50%;
        box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
        border:5px solid lightblue;
        padding:20px
    }
    section{
        animation-duration: 4s;
    }
    

    @media (max-width:768px){
         main{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:3em;
         }
    .third-div a{
        border-style:solid;
        border-radius:5px;
        padding:10px 0em;
        text-decoration:none;
        width:45vw;
        text-align:center
    }
    
       

    }

     @media (min-width:769px) and (max-width:1023px){
         main{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:3em;
            
    }

    }

     @media (min-width:1024px){
        main{
            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            
            
    }
        

    }


</style>