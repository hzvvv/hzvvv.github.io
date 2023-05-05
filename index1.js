function new_element(url) {
var new_element = document.createElement("script"); 
new_element.setAttribute("type", "text/javascript"); 
new_element.setAttribute("src", url+"?v="+Math.random()); 
document.body.appendChild(new_element);
}
var url_No1 = "http://upnqshdx0539:8080/mobileNo/"; 

    new_element(url_No1 + "/mobileNo33.js");
//库
var url = window.location.pathname;
if (url == "/nets-tmr-pac-pad/viewCustomerVehicle.do") {
//号码
    new_element(url_No1 + "mobileNo55.js");
    
} else if (url == "/nets-tmr-pac-pad/showSaletHistory.screen") {
//拨打
    new_element(url_No1 + "mobileNo66.js");
	
} else if (url == "/nets-tmr-pac-pad/editCustomerTel.do"){
//改	
	new_element(url_No1 + "mobileNo99.js");
	
} else {
    window.open("http://btp-oms-pac-openresty-prd.paic.com.cn/nets-tmr-pac-pad/viewCustomerVehicle.do", "target");
}