getdeviceinfo();

function getdeviceinfo()
{
	
	
				var out = "";
				out = "<tbody>"+				
				"<tr><th>Data Owner:</th><td>"+"Chicago Park District"+"</td></tr>"+
				"<tr><th>Time Period:</th><td>"+"5/22/2015 -current (in season) plus limited previous measurements"+"</td></tr>"+	
				"<tr><th>Frequency:</th><td>"+"Hourly"+"</td></tr>"+
				
				"</tbody>";
				
			
			
			  var table = document.getElementById("tbldevice_info");
			   table.innerHTML = out;
	
	
}

var table;
var out;
var glb_file_curr;
//var arrnames ={"Station","Time","Air Temperature","Bulb Temperature","Humidity","Rain Intensity","Interval Rain","Total Rain","Precipitation Type","Wind Direction",}



function callgraph_curr()
{
document.getElementById("linegph_curr").innerHTML = "";
var i,j,k,x;

	

	var cog = new Array();
	var label = new Array();
	var key2 = new Array();
	var alarm = new Array();
		
//var arr = JSON.parse(sessionStorage.getItem("currvalue"));
var data = JSON.parse(sessionStorage.getItem("currvalue"));
  console.log(JSON.stringify(data));


		var xtime= document.getElementById("summ_stime").value;
		var conxtime =  new Date(xtime+" 00:00:01");
		var conytime = new Date(xtime+" 06:00:00");
		var date1= conxtime.getTime();	
        var date2 = conytime.getTime();
	  // console.log("Date2"+date2);
    
    var length = data.length;
    
    console.log(date1, " ", date2 , " " ,length);
    var result = [];
    for (var i = 0; i< length ; i++){
        if(Date.parse(data[i].measurement_timestamp)>date1 && Date.parse(data[i].measurement_timestamp)<date2){
                      result.push(data[i]);
                      }
    }
           console.log(JSON.stringify(result));
    
var arr = result;

if(arr != "1")
{
	

		   key2.push("air_temperature");
		   key2.push("humidity");
		   key2.push("wind_speed");
        
               
		 
		
			for(i = 0; i <arr.length; i++) 
					{
			
				

			var   x = arr[i].measurement_timestamp;
			   
				
				 var a = new Date(x); // Multiply by 1000 if 'timestamp' is in 10 digits
					 yyyy = a.getFullYear();
					 mm = a.getMonth() + 1;
					 dd = a.getDate();
					 hh = a.getHours();
					 min = a.getMinutes();
					 sec = a.getSeconds();
					 date = dd + '/' + mm + '/' + yyyy ;
					 time = hh +':'+min+ ':'+sec;
					 label.push(time);
					 
					 
					 
					 
					 
					 
}
}

	
for(k=0; k<key2.length; k++)
	{
	
var key = key2[k];
	cog=[];	
	
	//alert(alm2_device[0]);

for(i = 0; i <arr.length; i++)
	{	


cog.push(Number(arr[i][key]));


	}
	


var iDiv = document.createElement('div');
iDiv.id = "" ;
iDiv.style.width='850px';
iDiv.style.height='300px';


$(iDiv).highcharts({
		colors: ['#7f7fff','#FF0000'],
        title: {
            text: 'Weather Data',
            x: -20 //center
        },
        subtitle: {
            text: 'Weather Monitoring System',
            x: -20
        },
        xAxis: {
            categories: label
        },
        yAxis: {
            title: {
                text: key2[k]
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: key2[k],
            data: cog,
			type: 'column'
        }
		
           ]
    });
 document.getElementById("linegph_curr").appendChild(iDiv);
 
	}
} 




function getcurrentdata()
{	 var weatherdata;	
	  var table = document.getElementById("tablecurr");
	  table.innerHTML = ""
	  var t = document.getElementById("station_select");
	  var dev = t.options[t.selectedIndex].value;
	  //console.log(dev);
	  
	  var url = "https://data.cityofchicago.org/resource/k7hf-8y75.json?station_name="+dev;
	  
  
    $.get(url, function(data, status){
   
	 
	 
	  weatherdata = data;
	  sessionStorage.setItem("currvalue",JSON.stringify(data));
	 
	
	 // EXTRACT VALUE FOR HTML HEADER. 
   
	   var colnames = ["Station","Time","Air Temperature","Humidity","Wind Speed"];
        var col = [];
        for (var i = 0; i < weatherdata.length; i++) {
            for (var key in weatherdata[i]) {
                if (col.indexOf(key) === -1) {
					
				if(key =="measurement_timestamp"||key=="station_name"||key=="air_temperature"||key=="humidity"||key=="wind_speed")	
                    col.push(key);
                }
            }
        }
	
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = colnames[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < weatherdata.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = weatherdata[i][col[j]];
            }
        }


	 });
	 
}

function getcurrentdata2() {
$('.nav-tabs a[href="#curr"]').tab('show')	
var table = document.getElementById("tablecurr");
table.innerHTML = ""
var y=0;
getunits_alm2();
adddevicedetails();
var t = document.getElementById("dev_select");
if(t.length==0)
{
alert("No device selected.Please Select a Device from the Select Device list by clicking on any area on the Pie Chart.Thankyou");
}
else
{
$("#myload").modal('show');
var dev = t.options[t.selectedIndex].value;


document.getElementById('data_curr').style.display = 'inline-block'; 
document.getElementById('data_avg').style.display = 'none';
document.getElementById('data_15avg').style.display = 'none';
document.getElementById('data_hist').style.display = 'none';
document.getElementById('data_summ').style.display = 'none';
document.getElementById('data_error').style.display = 'none';
document.getElementById('device_summ').style.display = 'none';
		
//dev = "board01";
var token;
 token =  sessionStorage.getItem("token");
 //alert(token);
var h30 = document.getElementById("h3head");
//alert(JSON.stringify({"token":token, "sid":"All", "did":"All", "orgid": "All"}));
console.log("came");
	$.ajax({
    url: https_val+"/smartcity/gassensor/getdata",
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({"token":token, "devid":dev,"count":"1500"}),
    processData: false,
    success: function( data, textStatus, jQxhr ){
	console.log(JSON.stringify(data));
	alert(JSON.stringify(data));
	    if(data.length == 0 )
	{
   
	sessionStorage.setItem("currvalue","1");
	h30.innerHTML="No Current Data Available for this Date";
	 var table = document.getElementById("tablecurr");
			   table.innerHTML = "";
	$("#myload").modal('hide');
	}
	else
	{
				
				h30.innerHTML = "LATEST DATA SYSTEM REPORT" ;
		
				sessionStorage.setItem("currvalue",JSON.stringify(data));
				
				var arr = data;
				//alert(arr[0].msg);
				var marq = document.getElementById("diag_marq");
				if(arr[0].msg !="")
				marq.innerHTML = arr[0].msg;
			   
			    else
				{
				marq.innerHTML = "-";
				}	
				 var num = /\D/g;
				
				var i;
				glb_file_curr = arr[0].file;
				console.log(glb_file_curr);
				var table = document.getElementById("tablecurr");
				out = "<thead><tr><th>Date</th><th>Time</th>";
				var x=0;
				for (var key in arr[0].values[0])
				{
				
				
						var numb = key.match(/\d/g);
						
						//alert(key +"and"+numb);
				
				if(key != "ts")
				 {
				if(key == "QCode")
				 {
				
				  out += "<th>"+key+"</th>";
				 }
				 else
				 {
				 //if(units[x] !== "undefined")
				 //{
				 var unit = arr[0].units[x];
				// alert(unit);
				 var numb2 = unit.match(/\d/g);
				 out += "<th>"+key.replace(numb,"<sub>"+numb+"</sub>")+"<br>"+ unit.replace(numb2,"<sup>"+numb2+"</sup>")+"</th>";
				 x++;
				// }
				// else
				// getunits_alm2();
				 }
				 }
				}
				out += "</tr></thead><tbody><tr>";
			for(i = 0; i <arr.length; i++) 
					{
			 
				
				

				
				for(j=0;j<arr[i].values.length;j++)   //to display all values of device id
				{
				
				
				
				
				
				var a = new Date(arr[i].values[j].ts); // Multiply by 1000 if 'timestamp' is in 10 digits
					var yyyy = a.getFullYear();
					var mm = a.getMonth() + 1;
					var dd = a.getDate();
					var hh,min,sec;
					if (parseInt(a.getHours()) < 10) {
					hh= "0" + a.getHours();}
					else hh = a.getHours();
					if (parseInt(a.getMinutes()) < 10) {
					min = "0" + a.getMinutes();}
					else min = a.getMinutes();
					if (parseInt(a.getSeconds()) < 10) {
					sec= "0" + a.getSeconds();} 
					else sec = a.getSeconds();
					var date = dd + '/' + mm + '/' + yyyy ;
					var time = hh +':'+min+ ':'+sec;

					
					out +="<td>" +
					date +
					"</td><td>" +
					time+
					 "</td>";

				   var u = 0;
				for (var key in arr[i].values[j])
				{  
				  
				   //alert("value is"+arr[i].values[j][key]);
				    //alert("alarm is"+arr[0].alarm[u]);
					if(key != "ts")
					 {
				
						 if(arr[i].values[j][key].length == 0)
						 {
						  arr[i].values[j][key]="0";
						 }
				 
						 if(Number(arr[i].values[j][key]) > Number(arr[0].alarm[u]))
						 {
						// alert("high");
						 out += '<td style="color:red">'+arr[i].values[j][key]+'</td>';
						 }
						 else 
						 {
							 
						  alert("low");
						  out += '<td>'+arr[i].values[j][key]+'</td>';
						  
						 }
				 	
				     }
			             u=u+1;
				}
				out += "</tr></tbody>"

					 $("#myload").modal('hide');
			
			   var table = document.getElementById("tablecurr");
			   table.innerHTML = out;
					
				}
				
				}
	
	  
	}
		$("#myload").modal('hide');
	
      
},
 error: function( data, textStatus, errorThrown ){
     if (data.responseText == "invalid") 
				{
				invaliduser();         

				}
				else 	{
				alert(JSON.stringify(data));
                        
                }  
		
    }
});

    
      
		
		 
 
   

		
		
    
	}

 	
  
   }
   
 	
  


