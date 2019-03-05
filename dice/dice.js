$(function(){

    $(document).keypress(function(event){
        let key = event.which; 
        console.log(key); 

        if ( key == 48 ) {
            $('#d20').text(rollD(20));
        } else if (key == 56) {
            $('#d8').text(rollD(8));
        } else if ( key == 50 ) {
            $('#d12').text(rollD(12)); 
        } else if ( key == 54 ) {
            $('#d6').text(rollD(6)); 
        } else if ( key == 52 ) {
            $('#d4').text(rollD(4)); 
        }; 
        
    }); 

    rollD = (num) => {
        let roll = Math.floor(Math.random() * num) + 1; 
        return roll;

    }; 

}); 