$(function(){
    
    // characteristic JSON 
    const npc_characteristic = {
        0: "Absentminded", 
        1: "Arrogant", 
        2: "Boorish", 
        3: "Chews something",
        4: "Clumsy", 
        5: "Curious", 
        6: "Dim-witted", 
        7: "Fiddles and fidgets with something", 
        8: "Frequently uses the wrong word", 
        9: "Friendly", 
        10: "Irritable", 
        11: "Prone to predictions of certain doom", 
        12: "Pronounced scar", 
        13: "Slurs words, lips, or stutters", 
        14: "Speaks loudly or whispers", 
        15: "Squints", 
        16: "Stares into distance", 
        17: "Suspicious", 
        18: "Uses colorful oaths and exlamations", 
        19: "Uses flowery speech or long words"
    }; 

    const npc_ideals = {
        0: "Aspiration (any)", 
        1: "Charity (good)", 
        2: "Community (lawful)", 
        3: "Creativity (chaotic)", 
        4: "Discovery (any)", 
        5: "Fairness (lawful)", 
        6: "Freedom (chaotic)", 
        7: "Glory (any)", 
        8: "Greater good (good)", 
        9: "Greed (evil)", 
        10: "Honor (lawful)", 
        11: "Independence (chaotic)", 
        12: "Knowledge (neutral)", 
        13: "Life (good)", 
        14: "Live and let live (neutral)", 
        15: "Might (evil)", 
        16: "Nation (any)",
        17: "People (neutral)", 
        18: "Power (evil)", 
        19: "Redemption (any)"
    }; 

    generateCharacter = () => {
        
        // random rolls
        let randomCharacter = Math.floor(Math.random() * 20); 
        let randomIdeal = Math.floor(Math.random() * 20); 

        // assignments 
        npc_characateristic = npc_characteristic[randomCharacter]; 
        npc_ideal = npc_ideals[randomIdeal]; 

        // console.log(`Your character ${randomCharacter}`); 

        // assign values to page 
        $('#character-list').html(`
            <li>NPC characteristic: ${npc_characateristic}</li>
            <li>NPC ideal: ${npc_ideal}</li>    
            `); 
        
    }; 

}); 