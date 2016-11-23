function chucksJoke(){
    var req = new XMLHttpRequest();
    req.onreadystatechange=function(){
        if((req.readyState ==4) && (req.status==200)){
            var jsonObj = JSON.parse(req.responseText);
            alert(jsonObj.value);
        }
    }
    req.open('GET','https://api.chucknorris.io/jokes/random',true);
    req.send(null)
}

function getSent(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if((request.readyState == 4) && (request.status ==200)){
            displayQuoteInfo(request.responseText);
        }
    }
    request.open('GET','http://quotes.rest/qod.json',true);
    request.send(null);
}


function displayQuoteInfo(response){
    var res = response;
    var jsonObj = JSON.parse(res).contents.quotes[0];
    
    var quote = jsonObj.quote;
    var author = jsonObj.author;
    var date = jsonObj.date;
    var background =jsonObj.background;
    
    //date needed
    document.body.style.backgroundImage = "url("+background+")";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundSize ='cover';
    document.body.style.paddingBottom = '100px'
    
    
    var qotd = document.getElementById('qotd');
    qotd.style.fontSize = 'x-large';
    qotd.style.color = 'blue';
    qotd.style.fontFamily ='homemade apple, cursive'
    qotd.innerHTML = quote;
    
    var aut = document.getElementById('author');
    aut.style.fontSize = 'large';
    aut.style.fontFamily='homemade apple, cursive'
    aut.style.color = 'blue';
    aut.innerHTML = "-" + author;
    

}