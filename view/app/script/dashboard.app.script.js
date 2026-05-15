const manuButton =  document.getElementById('menuButton');
let sideBar = document.getElementById('sideBar');
let main_width = document.getElementById('main-width')



const toggleMenu= () =>{
    if(sideBar.style.width === "250px" && main_width.style.marginLeft === "250px"){
        sideBar.style.display = "none"
        main_width.style.marginLeft = "0px"
    }
    else{
        sideBar.style.display = "block"
        main_width.style.marginLeft = "250px"
    }
}
