// navigation menu js 

var barBtn = document.querySelector('.fa-bars');
var crossBtn = document.getElementById('cross');
var mobileMenu = document.querySelector('.mobile-menu');
var navbarMob = document.querySelector('.navbar')

var mobileViewDropdown1 = document.querySelector('.menu1');
var mobileViewDropdown2 = document.querySelector('.menu2');
var mobileViewDropdown3 = document.querySelector('.menu3');
var mobileViewDropdown4 = document.querySelector('.menu4');
var mobileViewDropdown5 = document.querySelector('.menu5');


var DropdownDownList1 = document.querySelector('.dropdown-list1');
var DropdownDownList2 = document.querySelector('.dropdown-list2');
var DropdownDownList3 = document.querySelector('.dropdown-list3');
var DropdownDownList4 = document.querySelector('.dropdown-list4');
var DropdownDownList5 = document.querySelector('.dropdown-list5');



mobileViewDropdown1.addEventListener('click', dropDown1);
mobileViewDropdown2.addEventListener('click', dropDown2);
mobileViewDropdown3.addEventListener('click', dropDown3);
mobileViewDropdown4.addEventListener('click', dropDown4);
mobileViewDropdown5.addEventListener('click', dropDown5);


barBtn.addEventListener('click' , showMenu);
crossBtn.addEventListener('click', hideMenu);

function dropDown1(){
    DropdownDownList3.classList.remove('active');
    DropdownDownList4.classList.remove('active');
    DropdownDownList5.classList.remove('active');
    DropdownDownList2.classList.remove('active');
    DropdownDownList1.classList.toggle('active');
    
}
function dropDown2(){
    DropdownDownList3.classList.remove('active');
    DropdownDownList4.classList.remove('active');
    DropdownDownList5.classList.remove('active');
    DropdownDownList1.classList.remove('active');
    DropdownDownList2.classList.toggle('active');
   

}
function dropDown3(){
    DropdownDownList4.classList.remove('active');
    DropdownDownList5.classList.remove('active');
    DropdownDownList1.classList.remove('active');
    DropdownDownList2.classList.remove('active');
    DropdownDownList3.classList.toggle('active');

}

function dropDown4(){
    DropdownDownList5.classList.remove('active');
    DropdownDownList1.classList.remove('active');
    DropdownDownList2.classList.remove('active');
    DropdownDownList3.classList.remove('active');
    DropdownDownList4.classList.toggle('active');
}
function dropDown5(){
    DropdownDownList1.classList.remove('active');
    DropdownDownList2.classList.remove('active');
    DropdownDownList3.classList.remove('active');
    DropdownDownList4.classList.remove('active');
    DropdownDownList5.classList.toggle('active');
}



function showMenu(){
    barBtn.style.display = "none";
    crossBtn.style.display = "block";
    navbarMob.classList.remove('navbar');
    navbarMob.classList.add('navbar-mob');
    
}


function hideMenu(){
    barBtn.style.display = "block";
    crossBtn.style.display = "none";
    navbarMob.classList.remove('navbar-mob');
    navbarMob.classList.add('navbar');
}



