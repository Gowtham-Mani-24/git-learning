//print all countries capital, region in console
// new request 
var request = new XMLHttpRequest();
//open request through url
request.open("GET","https://restcountries.com/v3.1/all")
//intitae a request
request.send();
//function,event
request.onload=function(){
    var result = JSON.parse(request.response);
    // console.log(result);
    for (var i=0;i<= result.length; i++){
        console.log( result[i].capital, result[i].region);
    }
}
