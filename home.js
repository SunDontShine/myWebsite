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
    
    
    var qotd = document.getElementById('qotd');
  //  qotd.style.textAlign ='center';
    qotd.style.fontSize = 'x-large';
    qotd.style.color = 'black';
    qotd.innerHTML = quote;
    
    var aut = document.getElementById('author');
    //aut.style.textAlign ='center';
    aut.style.fontSize = 'large';
    aut.style.color = 'black';
    aut.innerHTML = "-" + author;
    
    console.log(jsonObj);

}