const MENU_ITEMS=document.getElementsByClassName("menu-mob")
const SIDE_NAV=document.getElementsByClassName("blur-expand")
function menu(){
	if(MENU_ITEMS[0].style.display==="flex"){
		MENU_ITEMS[0].style.display="none";
		
	}
	else{
		MENU_ITEMS[0].style.display="flex";
	}
}
function menuExpand(){
	if(SIDE_NAV[0].style.display==="flex"){
		SIDE_NAV[0].style.display="none";
		
	}
	else{
		SIDE_NAV[0].style.display="flex";
	}	
}