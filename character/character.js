$(function(){
    
    generateCharacter = () => {
        
        name = generateName(); 
        characteristic = generateCharacteristic(); 
        ideal = generateIdeal(); 
        bond = generateBond(); 
        flaw = generateFlaw(); 


        // assign values to page 
        $('#character-list').html(`
            <table id='npc-table'>
                <tr>
                    <th scope='row'>NPC Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th scope='row'>NPC Characteristic</th> 
                    <td>${characteristic}</td> 
                </tr> 
                <tr>
                    <th scope='row'>NPC Ideal</th>
                    <td>${ideal}</td>
                </tr>
                <tr>
                    <th scope='row'>NPC Bond</th> 
                    <td>${bond}</td> 
                </tr>
                <tr> 
                    <th scope='row'>NPC Flaw</th> 
                    <td>${flaw}</td> 
                </tr> 
            </table> 
        `); 
    }; 

    generateName = () => {
        
        // array of name objects
        const  nameBlob = [
            {
                0: '', 
                1: '', 
                2: '', 
                3: '', 
                4: 'A', 
                5: 'Be', 
                6: 'De', 
                7: 'El', 
                8: 'Fa', 
                9: 'Jo', 
                10: 'Ki', 
                11: 'La', 
                12: 'Ma', 
                13: 'Na', 
                14: 'O', 
                15: 'Pa', 
                16: 'Re', 
                17: 'Si', 
                18: 'Ta', 
                19: 'Va'
            }, 

            {
                0: 'bar', 
                1: 'ched', 
                2: 'dell', 
                3: 'far', 
                4: 'gran', 
                5: 'hal', 
                6: 'jen', 
                7: 'kel', 
                8: 'lim', 
                9: 'mor', 
                10: 'net', 
                11: 'penn', 
                12: 'quil', 
                13: 'rond', 
                14: 'sark', 
                15: 'shen', 
                16: 'tur', 
                17: 'vash', 
                18: 'yor', 
                19: 'zen'
            }, 
            {
                0: '', 
                1: 'a', 
                2: 'ac', 
                3: 'ai', 
                4: 'al', 
                5: 'am', 
                6: 'an', 
                7: 'ar', 
                8: 'ea', 
                9: 'el', 
                10: 'er', 
                11: 'ess', 
                12: 'ett', 
                13: 'ic', 
                14: 'id', 
                15: 'il', 
                16: 'in', 
                17: 'is', 
                18: 'or', 
                19: 'us'
            }
        ] ; 

        // generates a random number for first, middle, and last 
        let randomFirst = Math.floor(Math.random() * 20); 
        let randomMiddle = Math.floor(Math.random() * 20); 
        let randomLast = Math.floor(Math.random() * 20); 

        // constructs the name from nameBlob
        let tempName = nameBlob[0][randomFirst] + nameBlob[1][randomMiddle] + nameBlob[2][randomLast]; 

        // capitalizes the first letter of the name 
        let name = tempName.charAt(0).toUpperCase() + tempName.slice(1); 

        // console.log(name); // [TEST]

        return name; 
    }; 

    generateCharacteristic = () => {

        // characteristic object 
        const npc_characteristics = {
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

        // random select number
        let randomCharacter = Math.floor(Math.random() * 20); 

        // assigns characteristic
        npc_characteristic = npc_characteristics[randomCharacter]; 

        return npc_characteristic; 

    }; 

    generateIdeal = () => {

        // list of ideals 
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

        // random rolls   
        let randomIdeal = Math.floor(Math.random() * 20); 

        // assignments 
        npc_ideal = npc_ideals[randomIdeal]; 

        return npc_ideal; 

    }; 

    generateBond = () => {

        // list of bonds
        const bonds = {
            0: 'Personal goal or achievement', 
            1: 'Family members', 
            2: 'Colleagues or compatriots', 
            3: 'Benefactor, patron, or employer', 
            4: 'Romantic interest', 
            5: 'Special place', 
            6: 'Keepsake', 
            7: 'Valuable possession', 
            8: 'Revenge'
        }; 

        random_bond = Math.floor(Math.random() * 8); 

        npc_bond = bonds[random_bond]; 

        return npc_bond; 
    }

    generateFlaw = () => {

        // list of flaws
        const flaws = {
            0: 'Forbidden love or romantic susceptibility', 
            1: 'Decadence', 
            2: 'Arrogance', 
            3: "Envy of another person's possessions or station", 
            4: 'Overpowering greed', 
            5: 'Prone to rage', 
            6: 'Powerful enemy', 
            7: 'Specific phobia', 
            8: 'Shameful or scandalous history', 
            9: 'Secret crime or misdeed', 
            10: 'Possession of forbidden lore', 
            11: 'Foolhardy bravery'
        }; 

        // generate random number
        let random_flaw = Math.floor(Math.random() * 12); 

        let flaw = flaws[random_flaw]; 

        return flaw; 
    }; 

}); 