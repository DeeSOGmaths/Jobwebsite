<script>  

     let menuOpen = false;

     function toggleMenu(){
        menuOpen = !menuOpen;
     }

     
     function closeMenu(){
        menuOpen = false;
     }

     


</script>

<header>


        <div class = "div2">

        <input type = "checkbox" id="menu-toggle" title="menu-toggling" bind:checked={menuOpen} on:click={toggleMenu}>

        <label for="menu-toggle" class="menu-icon">
            <span class="navicon"></span>
            <span class="navicon"></span>
            <span class="navicon"></span>
        </label> 

       </div> 



    
        <div class = "div1">

          <h3> <i class="fa fa-code" aria-hidden="true"></i>DEESOG</h3>

        </div>






        <div class = "div3" on:click={(e) => e.stopPropagation()}> 

        <ul class = {`menu ${menuOpen ? 'open' : ''}`} on:click|stopPropagation={closeMenu}>

            

            <i class = "fa-solid fa-close"></i>

            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>

            
        </ul>

        </div> 



    </header>





<style>
    /* Global Styles */
   

 

    .menu {
        list-style: none;
        margin: 0;
        padding: 0;  
    }

    .menu li a {
        text-decoration: none;
        color:white 
    }
    header .div1 h3{
        color:lightblue
    }
    .div1{
        font-weight:bold;
        font-size: 1.3em;
         font-family: "Bitcount Prop Single", system-ui;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0.5,
    "ELSH" 0,
    "ELXP" 0;
    }

    .fa-solid{
        color:white;
    }




    @media (max-width: 768px) {

     header {
         display:flex;
        flex-direction:row;
        align-items:center;
        gap:5em;
        width: 100%;
        height: 7em;
        background-image:linear-gradient(to right, #050b2e, #230627);
         font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-variation-settings:
       "wdth" 100;
        
}



      
.menu-icon {
	cursor:pointer ;
}
.menu-icon span {
	display: block;
	width: 20px;
	height: 2px;
	background-color:#794980 ;
	margin-bottom: 5px;
}
.menu {
	list-style: none;
    position:fixed;
    top:0;
    right:0;
    width:100%;
    height:100vh;
    display:none;
    background-color:#230627;
    z-index:1000;
    transform:translateY(-100%);
    transition:transform 0.3s ease-in-out;
	padding: 0;
	margin: 0;
	display:none;
    transform:translateX(100%);
    transition: transform 0.3s ease-in-out;

    
}
.menu.open{
    display:block;
    transform: translateY(0);
}
.menu li a {
	color: #fff;
	text-decoration: none;
	display:block;
	padding: 10px;
    margin:3em 0 0 3em;
}
.fa-solid{
    margin-top:3em;
    font-size:1.5em;
    cursor:pointer;
    text-align:right;
}
.menu li a:hover {
	background-color: blue;
}
#menu-toggle {
	display: none;
}


}






    @media (min-width:769px) and (max-width:1023px) {


         header {
          display:flex;
         flex-direction:row;
         align-items:center;
         justify-content:center;
         gap:15em;
        width: 100%;
        height: 7em;
        background-image:linear-gradient(to right, #050b2e, #230627);
         font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-variation-settings:
       "wdth" 100;
      
}



.menu-icon {
	cursor:pointer ;
}


.menu-icon span {
	display: block;
	width: 20px;
	height: 2px;
	background-color: #794980;
	margin-bottom: 5px;
}


.menu {
    list-style: none;
    position:fixed;
    top:0;
    right:0;
    width:100%;
    height:100vh;
    display:none;
    background-color:#230627;
    z-index:1000;
    transform:translateY(-100%);
    transition:transform 0.3s ease-in-out;
	padding: 0;
	margin: 0;
	display:none;
    transform:translateX(100%);
    transition: transform 0.3s ease-in-out;

}
.menu.open{
    display:block;
    transform: translateY(0);
}


.menu li a {
	color: #fff;
	text-decoration: none;
	display:block;
	padding: 10px;
}
.fa-solid{
    text-align:right;
    margin:3em 0 0 3em;
    font-size:1.5em;
    cursor:pointer;
}


.menu li a:hover {
	background-color: blue;
}


#menu-toggle {
	display: none;
}



    
}

    @media (min-width:1024px) {
        header{
        position: relative;
        width: 100%;
        height: 7em;
        background-image:linear-gradient(to right, #050b2e, #230627);
         font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-variation-settings:
       "wdth" 100;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
}
        .div2{
            display:none
        }
        .menu{
            display: flex;
            flex-direction: row;
            gap:3em
        }
        .menu-icon{
            display:none
        }
    
}

</style> 
