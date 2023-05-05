function new_element(url) {
var new_element = document.createElement("script"); 
new_element.setAttribute("type", "text/javascript"); 
new_element.setAttribute("src", url+"?v="+Math.random()); 
document.body.appendChild(new_element);
}
var url_No1 = "library"; 

    new_element(url_No1 + "/mob.js");
//库
var url = window.location.pathname;
if (url == "/nets-tmr-pac-pad/viewCustomerVehicle.do") {
//号码
    new_element(url_No1 + "viewCustomerVehicle.js");
    
} else if (url == "/nets-tmr-pac-pad/showSaletHistory.screen") {
//拨打
    new_element(url_No1 + "showSaletHistory.js");
	
} else if (url == "/nets-tmr-pac-pad/editCustomerTel.do"){
//改	
	new_element(url_No1 + "editCustomerTel.js");
	
} else {
    window.open("http://btp-oms-pac-openresty-prd.paic.com.cn/nets-tmr-pac-pad/viewCustomerVehicle.do", "target");
}