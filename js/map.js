var map,state,xy1,yz1;
function initialize() {

  var mapProp = {
  center:new google.maps.LatLng(21.0000,  78.8718),
  zoom:5,
   mapTypeId: google.maps.MapTypeId.HYBRID,
   scaleControl: true
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var image = 'views/images/star.png';

var marker1=new google.maps.Marker({
  position:new google.maps.LatLng(14.944785, 79.167480),
  icon: image,
   title: 'Andhra Pradesh'
  
  });
  var marker2=new google.maps.Marker({
  position:new google.maps.LatLng(28.265682, 95.603027),
  icon: image,
   title: 'Arunachal Pradesh'
  
  });
  var marker3=new google.maps.Marker({
  position:new google.maps.LatLng(26.155438, 92.658691),
	 icon: image,
   title: 'Assam'
  
  });
  var marker4=new google.maps.Marker({
  position:new google.maps.LatLng(25.443275, 85.583496),
 icon: image,
   title: 'Bihar'
  
  });
  var marker5=new google.maps.Marker({
  position:new google.maps.LatLng(21.453069, 82.243652),
 icon: image,
   title: 'Chattisgarh'
  
  });
  var marker6=new google.maps.Marker({
  position:new google.maps.LatLng(15.241790, 74.113770),
 icon: image,
   title: 'Goa'
  
  });
  
  var marker7=new google.maps.Marker({
  position:new google.maps.LatLng(22.309426, 70.817871),
 icon: image,
   title: 'Gujarat'
  
  });
  var marker8=new google.maps.Marker({
  position:new google.maps.LatLng(28.806174, 75.695801),
 icon: image,
   title: 'Haryana'
  
  });
  var marker9=new google.maps.Marker({
  position:new google.maps.LatLng(31.466154, 76.838379),
 icon: image,
   title: 'Himachal Pradesh'
  
  });
  var marker10=new google.maps.Marker({
  position:new google.maps.LatLng(33.137551, 75.300293),
 icon: image,
   title: 'Jammu'
  
  });
  var marker11=new google.maps.Marker({
  position:new google.maps.LatLng(23.845650, 84.968262),
 icon: image,
   title: 'Jharkhand'
  
  });
  var marker12=new google.maps.Marker({
  position:new google.maps.LatLng(13.410994, 76.574707),
 icon: image,
   title: 'Karnataka'
  
  });
  
  
  var marker13=new google.maps.Marker({
  position:new google.maps.LatLng(9.362353, 76.838379),
 icon: image,
   title: 'Kerala'
  
  });
  var marker14=new google.maps.Marker({
  position:new google.maps.LatLng(23.604262, 76.794434),
 icon: image,
   title: 'Madhya Pradesh'
  
  });
  var marker15=new google.maps.Marker({
  position:new google.maps.LatLng(18.020528, 74.685059),
 icon: image,
   title: 'Maharshtra'
  
  });
  var marker16=new google.maps.Marker({
  position:new google.maps.LatLng(22.958393, 93.186035),
 icon: image,
   title: 'Manipur'
  
  });
  var marker17=new google.maps.Marker({
  position:new google.maps.LatLng(25.403585, 90.900879),
icon: image,
   title: 'Meghalaya'
  
  });
  var marker18=new google.maps.Marker({
  position:new google.maps.LatLng(22.796439, 92.746582),
icon: image,
   title: 'Mizoram'
  
  });
  
  
  var marker19=new google.maps.Marker({
  position:new google.maps.LatLng(25.403585, 94.152832),
icon: image,
   title: 'Nagaland'
  
  });
  var marker20=new google.maps.Marker({
  position:new google.maps.LatLng(20.550509, 83.605957),
icon: image,
   title: 'Odisha'
  
  });
  var marker21=new google.maps.Marker({
  position:new google.maps.LatLng(30.600094, 75.036621),
icon: image,
   title: 'Punjab'
  
  });
  var marker22=new google.maps.Marker({
  position:new google.maps.LatLng(25.681137, 73.674316),
icon: image,
   title: 'Rajasthan'
  
  });
  var marker23=new google.maps.Marker({
  position:new google.maps.LatLng(26.824071, 88.747559),
icon: image,
   title: 'Sikkim'
  
  });
  var marker24=new google.maps.Marker({
  position:new google.maps.LatLng(10.833306, 78.508301),
icon: image,
   title: 'Tamil Nadu'
  
  });
  
  
  var marker25=new google.maps.Marker({
  position:new google.maps.LatLng(17.308688, 78.640137),
icon: image,
   title: 'Telangana'
  
  });
  var marker26=new google.maps.Marker({
  position:new google.maps.LatLng(22.674847, 91.296387),
icon: image,
   title: 'Tripura'
  
  });
  var marker27=new google.maps.Marker({
  position:new google.maps.LatLng(26.745610, 80.002441),
icon: image,
   title: 'Utter Pradesh'
  
  });
  var marker28=new google.maps.Marker({
  position:new google.maps.LatLng(29.993002, 77.980957),
icon: image,
   title: 'Uttarkhand'
  
  });
  var marker29=new google.maps.Marker({
  position:new google.maps.LatLng(22.024546, 87.473145),
icon: image,
   title: 'West Bengal'
  
  });
  var marker30=new google.maps.Marker({
  position:new google.maps.LatLng(11.695273, 92.889404),
icon: image,
   title: 'Andaman and Nicobar Islands'
  
  });
  
  
  var marker31=new google.maps.Marker({
  position:new google.maps.LatLng(30.600094, 76.981201),
icon: image,
   title: 'Chandigarh'
  
  });
  var marker32=new google.maps.Marker({
  position:new google.maps.LatLng(20.163942, 73.108405),
icon: image,
   title: 'Dadra and Nagar Haveli'
  
  });
  var marker33=new google.maps.Marker({
  position:new google.maps.LatLng(28.497661, 77.222900),
icon: image,
   title: 'National Capital Territory of Delhi'
  
  });
  var marker34=new google.maps.Marker({
  position:new google.maps.LatLng(10.066220, 73.668823),
icon: image,
   title: 'Lakshwadeep'
  
  });
  var marker35=new google.maps.Marker({
  position:new google.maps.LatLng(11.913860, 79.814472),
icon: image,
   title: 'Puducherry'
  
  });
  var marker36=new google.maps.Marker({
  position:new google.maps.LatLng(20.684184, 71.032104),
icon: image,
   title: 'Daman Dui'
  
  });
  
  
  
  
  

marker1.setMap(map);
marker2.setMap(map);
marker3.setMap(map);
marker4.setMap(map);
marker5.setMap(map);
marker6.setMap(map);
marker7.setMap(map);
marker8.setMap(map);
marker9.setMap(map);
marker10.setMap(map);
marker11.setMap(map);
marker12.setMap(map);
marker13.setMap(map);
marker14.setMap(map);
marker15.setMap(map);
marker16.setMap(map);
marker17.setMap(map);
marker18.setMap(map);
marker19.setMap(map);
marker20.setMap(map);
marker21.setMap(map);
marker22.setMap(map);
marker23.setMap(map);
marker24.setMap(map);
marker25.setMap(map);
marker26.setMap(map);
marker27.setMap(map);
marker28.setMap(map);
marker29.setMap(map);
marker30.setMap(map);
marker31.setMap(map);
marker32.setMap(map);
marker33.setMap(map);
marker34.setMap(map);
marker35.setMap(map);
marker36.setMap(map);





google.maps.event.addListener(marker15, 'click', function() {


state = "mh";
xy1=18.020528;
yz1= 74.685059;
getmarkers();

  });
google.maps.event.addListener(marker24, 'click', function() {
state = "tn";
xy1=10.833306;
yz1=78.508301;
getmarkers();


  });  
 google.maps.event.addListener(marker12, 'click', function() {
state = "ka";
xy1=13.410994;
yz1=76.574707;
getmarkers();


  });  
  google.maps.event.addListener(marker14, 'click', function() {
state = "mp";
xy1=23.604262;
yz1=76.794434;
getmarkers();


  });  
}


google.maps.event.addDomListener(window, 'load', initialize);

    </script>
	<script>
	function getmarkers()
	{

var xmlhttp = new XMLHttpRequest();


var urlst= "http://localhost:8010/smartcity/gassensor/getdummydevid?state="+state;

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunctionx(xmlhttp.responseText);
		
		
    }
}
xmlhttp.open("GET", urlst, true);
xmlhttp.send();

function myFunctionx(response) {
 var arr = JSON.parse(response);

    var out="";
    var i;
	

	  out="<table id='table123'><thead>";
	out += "<tr><th><span>" +
        "Date<br> (DD/MM/YY)" +
		"</span></th><th><span>" +
         "Time<br>(hh:mm:ss)" +
        "</span></th><th><span>" +
         "Co<br>(ppm)" +
        "</span></th><th><span>" +
        "So2<br>(ppb)" +
        "</span></th><th><span>" +
       
        "</span></th><th>" +
		"Pm2.5<br>(ug/m3)" +
        "</span></th><th>" +
         "Pm10<br>(ug/m3)" +
		 "</th></tr></thead>" ;
	

		
var infowindow = new google.maps.InfoWindow({



  });

var bounds = new google.maps.LatLngBounds();
var myLatlng2 = new google.maps.LatLng(xy1,yz1);
  var mapOptions = {
    zoom: 6,
    center: myLatlng2,
	mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
var marker;

var markers = JSON.parse(response);


for (i = 0; i < markers.length; i++) {
var data = markers[i];
var a = new Date(data.values[0].ts); // Multiply by 1000 if 'timestamp' is in 10 digits
        var yyyy = a.getFullYear();
        var mm = a.getMonth() + 1;
        var dd = a.getDate();
        var hh = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var date = dd + '/' + mm + '/' + yyyy ;
		var time = hh +':'+min+ ':'+sec;
			
		
 
    // Display multiple markers on a map
  //  var infoWindow = new google.maps.InfoWindow(), marker, i;


var myLatlng = new google.maps.LatLng(data.lat, data.long);


marker = new google.maps.Marker({
position: myLatlng,
title: data.devid,
map: map,
date: date,
time: time,
co: data.values[0].co,
so2: data.values[0].so2 ,
o3:data.values[0].o3 ,
pm25: data.values[0].pm25, 
pm10:data.values[0].pm10, 
location: location 	
});

google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
			var location;
			var geocoder = new google.maps.Geocoder();
geocoder.geocode({ 'latLng': marker.position }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        location = results[1].formatted_address;
						
                    }
                }
				var textbox = document.getElementById('txtvalue');
				textbox.value= marker.title;
				
                infowindow.setContent('<table id="table123"><thead><span><tr><th>Location</th><th>Device id</th><th>Date<br>(DD/MM/YY)<span></th><th>Time</th><th>CO</th><th>So2</th><th>O3</th><th>Pm25</th><th>Pm10</th></tr><tbody><tr><td><span>'+location+'</td><td>' +marker.title+'</td><td>' +marker.date+'</td><td>' +marker.time+'</td><td>'+marker.co+'</td><td>'+marker.so2+'</td><td>'+marker.o3+'</td><td>'+marker.pm25+'</td><td>'+marker.pm10+'</td></tr></tbody>'+'<a id="viewdata" href="more" onClick="doStuff();" data-toggle="modal" data-target="#myModal">View More Details</a>');
				 });
       
                infowindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
       
    
}
    
}	

	
	
	}
	
