var rating = null;

var key = "random-word";

rating = localStorage.getItem(key)


function CheckRating(){
    var rate = document.getSelection();
    var rate_str;
    
    rate_str = rate.anchorNode.textContent;
    
    
    if(rating !== null) {
        var list = document.getElementById(rating);
        list.style.backgroundColor = "hsl(213, 19%, 18%)";
        list.style.color = "hsl(216, 12%, 54%)";
        
        rating = rate_str
        var list = document.getElementById(rating);
        list.style.backgroundColor = "hsl(216, 12%, 54%)";
        list.style.color = "hsl(0, 0%, 100%)";
    }
    else{
        
        var list = document.getElementById(rate_str);
        console.log(list);
        list.style.backgroundColor = "hsl(216, 12%, 54%)";
        list.style.color = "hsl(0, 0%, 100%)";
        rating = rate_str;
    }

    localStorage.setItem(key, rating);
}

function displayRate() {
    var para = document.getElementById("rating-display");
    para.innerHTML = "You selected " + rating + " out of 5";
}

