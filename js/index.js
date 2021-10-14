
// found this https://github.com/skcals/javascript_image_slider and customized it using the links from the maps and changing the value from the source in the iframe

let caracas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251097.9246351096!2d-67.03045459854461!3d10.468698790429967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x93dd2eae0a998483!2sCaracas%2C%20Capital%20District%2C%20Venezuela!5e0!3m2!1sen!2sil!4v1634132571168!5m2!1sen!2sil";

let buenosAires = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.39707064038!2d-58.573384362124045!3d-34.61546111822767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sil!4v1634132630596!5m2!1sen!2sil";

let haifa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.51584251804!2d34.98175636739519!3d32.799689675025824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2sHaifa!5e0!3m2!1sen!2sil!4v1634132998703!5m2!1sen!2sil";


let iframe = document.querySelector('iframe[id="iframeId"]');
let cities = [caracas, buenosAires, haifa];
let i = 0;

function prev(){
	if(i <= 0) i = cities.length;	
	i--;
	return setMap();			 
}
function next(){
	if(i >= cities.length-1) i = -1;
	i++;
	return setMap();			 
}
function setMap(){
	return  iframe.setAttribute('src', cities[i]);
}



// CONTACT

let dateField = document.querySelector('#dateField');
dateField.min = new Date().toISOString().split("T")[0];
















