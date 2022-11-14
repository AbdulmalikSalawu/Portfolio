function navlink(){
   if(mylinks.style.display = "block"){
        mylinks.style.display = "none"
   }
}
function navlink2(){
    if(mylinks.style.display = "block"){
        mylinks.style.display = "none"
   }
}
function navlink3(){
    if(mylinks.style.display = "block"){
        mylinks.style.display = "none"
   }
}
function navlink4(){
    if(mylinks.style.display = "block"){
        mylinks.style.display = "none"
   }
}
function navlink5(){
    if(mylinks.style.display = "block"){
        mylinks.style.display = "none"
   }
}


const navToggler=()=>{
    mylinks.style.display = "block"
    mylinks.innerHTML = `
    <ul class="navbar-nav me-5 m-1 float-end m-auto chai">
    <li class="nav-item me-5">
        <a onclick = "navlink2()" href="#home" class="nav-link ">Home</a>
      </li>
      <li class="nav-item me-5">
        <a onclick="navlink()" id="disp" href="#about" class="nav-link ">About</a>
      </li>
      <li class="nav-item me-5">
        <a onclick="navlink3()" href="#myskills" class="nav-link ">Skills</a>
      </li>
      <li class="nav-item me-5">
        <a onclick="navlink4()" href="#projects" class="nav-link">Projects</a>
      </li>
      <li class="nav-item me-5">
        <a onclick="navlink5()" href="#contact" class="nav-link">Contact</a>
      </li>
      <button onclick="myResume" class = "px-3">Resume</button>
    </ul>
    `

    // mylinks.style.background = "rgb(185, 132, 132)"
}
