function update(){
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var year = time.getFullYear();
    var hour = time.getHours();
    var meridiem;
    if(hour<=12)
        meridiem = "AM";
    else
        meridiem = "PM";
    var min = time.getMinutes();
    var sec = time.getSeconds();

    document.getElementById("datetime").firstChild.nodeValue = (("0"+(month+1)).slice(-2)) 
    +"/"+ (("0"+date).slice(-2)) +"/"+ (year)+";  " +(("0"+hour%12).slice(-2)) +" : "+ 
    (("0"+min).slice(-2)) +": "+("0"+sec).slice(-2)+" "+meridiem;

}

function init(){
    window.setInterval("update()",1);
}