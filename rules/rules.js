const rules = [
    "If you want something, ask for it", 
    "Spend considerable time figuring out what it is you actually want",
    "If you don't know, say so. Never miss an opportunity to learn.",
    "This is another rule"
]; 

let i = 0; 

$('#container').click(function(){
    // console.log('the container was clicked'); 

    
    $('#rules-container').html(rules[i]); 
    i++

    if (i >= rules.length) { i =0 }; 
}); 
