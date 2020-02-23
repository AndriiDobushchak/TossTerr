  
// TASK - 1 
    // const http = require("http");
    // const os = require("os");
    // //const path = require("path");

    // const server = http.createServer( function(request, response){
    //     response.writeHead(200, {'Content-type': 'text/html'});
    //     response.write("<br> User name : " + os.userInfo().username);
    //     response.write("<br> OS type : " + os.type());
    //     response.write("<br> System work time : " + (os.uptime())/60 + " minutes");
    //     response.write("<br> Current work directory : " + __dirname);
    //     response.write("<br> Server file name : " + __filename);
    //= path.dirname(__filename)
    //= path.basename(__filename)
    //     response.end("");
    // }).listen(5000);
    // console.log("Server is running at http://127.0.0.1:5000");

// TASK - 2

const http = require("http");
const os = require("os");
const personalmodule = require("./personalmodule");
    
    server = http.createServer( function(request, response){
        
        response.writeHead(200, {'Content-type': 'text/html'});       
        response.write("<br> " + personalmodule.data());
        response.write(os.userInfo().username + ".");
    }).listen(5000);
    console.log("Server is running at http://127.0.0.1:5000");


// let todayDate = new Date(); // Об'єкт Date для доступу до його методів (getHours)
// let time = todayDate.getHours();
// //onsole.log(time);
// if (time<=5) {alert("Доброї ночі");}
// if (5<time&&time<=11) {alert("Доброго ранку");}
// if (11<time&&time<=17) {alert("Доброго дня");}
// if (17<time&&time<=23) {alert("Доброго вечора");}



