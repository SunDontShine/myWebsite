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
    document.getElementById('quoteBlock').backgroundImage = background;
    var qotd = document.getElementById('qotd');
    qotd.innerHTML = quote;
    
    var footer = document.createElement('FOOTER');
    footer.innerHTML = author;
    qotd.appendChild(footer)
    
    
    console.log(jsonObj);

}