/*
    title: App.j s file dom operation 
    description: A simple dom js file is for toggle operational item's. 
    date: 15 - 10 - 2022
    mood: 🎟 
*/
//  selecting dom i t e m 's 
let subMenu = document.getElementById('subMenu'); 

    function toggleMenu(){
        subMenu.classList.toggle('openMenu');
    }