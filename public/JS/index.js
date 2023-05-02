var arr = ['Taj Mahal','Statue of Unity',"Humayun's Tomb", 'Golden Temple','Ajanta Caves'];
var current=1; var total=5; var time;
var count = 1;
function imageChanger() { time=setTimeout("changeImage()", 3000); }

function changeImage() { 
    current++;
    //console.log("Changing Image");
    if(current > total) {
        current=1;
    }
    
    count++;
    document.getElementById("image").src="../Images/image"+current+".jpg";
    document.getElementById("imagetext").textContent = arr[current-1];
    //console.log("Changed the Image");
    console.log(count);
    if(count>20){
        return 0;
    }
    imageChanger();
}

