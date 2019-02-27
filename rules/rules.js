const rules = [
    "If you want something, ask for it", 
    "Spend considerable time figuring out what it is you actually want",
    "If you don't know, say so. Never miss an opportunity to learn",
    "If it's not on my calendar, it doesn't exist", 
    "Don't wait, go now", 
    "Fill up at half tank", 
    "Get as much sleep as possible", 
    "I am sensitive to my environment, keep it organized and filled with things I value",
    "Set clear, valuable goals that can be achieved incrementally", 
    "Kill your heroes; kill the impostor syndrome", 
    "Be particular. If something isn't up to my standard don't waste my time on it", 
    "Work is only as difficult as you make it", 
    "Lies are too laborious a tool which don't scale to life's demands", 
    "Always provide clear, descriptive instruction and criteria for success", 
    "Approach everythign as both designer and developer, equal parts creative and problelm solver", 
    "Listen to you body, not your mind", 
    "Take your pleasure (and comfort) seriously", 
    "Production over consumption", 
    "People crazy enough to think they can chagne the world are the ones who do", 
    "work > intelligence", 
    "Minimize inconsequantial decisions", 
    "Write it down", 
    "If it's worth buying, it's worth buying the best (you can afford)", 
    "Fail...until you don't", 
    "Never ask 'Can it be done?', only 'How can we do it?", 
    "Very success people say 'no' to almost everything", 
    "Purposeful action requries clear, deliberate intention", 
    "'Right answers', only exist in hindsight. Life is about educated guesses", 
    "Everything happens for a reason. Sometimes the reason is you're stupid and make bad decisions", 
    "Always be learning", 
    "Pareto everything - what is the 20 that will get you 80?", 
    "Asking the right question is 100x more useful than making the right statement", 
    "Do not consume sugar, alcohol, or gluten", 
    "Never use 'you' when you can use 'we'", 
    "Work expands to fill time available. Never start a task without assigning a time restraint on it"
]; 

let i = 0; 

$('#container').click(function(){
    // console.log('the container was clicked'); 

    
    // $('#rules-container').html(rules[i]); 

    $('#rules-container').fadeOut(1000, function(){
        $('#rules-container').html(rules[i]).fadeIn(1000); 
    }); 

    i++

    if (i >= rules.length) { i =0 }; 
}); 
