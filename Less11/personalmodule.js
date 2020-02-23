
let data = new Date();
module.exports.data = 
()=> {
    let time = data.getHours();
    if (time<=5) {
        var greeting = ". Good night, ";
    }
    if (5<time&&time<=11) {
       var greeting = ". Good morning, ";
    }
    if (11<time&&time<=17) {
        var greeting = ". Good day, ";
    }
    if (17<time&&time<=23) {
        var greeting = ". Good evening, ";
    }
     return "Date of request : " + data + greeting;
}