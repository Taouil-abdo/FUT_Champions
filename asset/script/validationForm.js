// function validateForm() {
//     clearErrorMessages();
//     let isValid = true;

//     const inputs = {
//       playerName: form.querySelector('input[name="player-name"]'),
//       playerNationality: form.querySelector('input[name="player-nationality"]'),
//       playerClub: form.querySelector('input[name="player-club"]'),
//       playerLeague: form.querySelector('input[name="player-league"]'),
//       playerPosition: form.querySelector('select[name="player-position"]'),
//       playerPic: form.querySelector('input[name="player-picture"]'),
//       pace: form.querySelector('input[name="player-pace"]'),
//       shooting: form.querySelector('input[name="player-shooting"]'),
//       passing: form.querySelector('input[name="player-passing"]'),
//       dribbling: form.querySelector('input[name="player-dribbling"]'),
//       defending: form.querySelector('input[name="player-defending"]'),
//       physical: form.querySelector('input[name="player-physical"]')
//     };

//     const validations = {
//       playerName: {
//         validate: (value) => value.trim().length >= 2,
//         errorMsg: 'Player name must be at least 2 characters long'
//       },
//       playerNationality: {
//         validate: (value) => value.trim() !== '',
//         errorMsg: 'Player nationality is required'
//       },
//       playerClub: {
//         validate: (value) => value.trim() !== '',
//         errorMsg: 'Player club is required'
//       },
//       playerLeague: {
//         validate: (value) => value.trim() !== '',
//         errorMsg: 'Player league is required'
//       },
//       playerPosition: {
//         validate: (value) => value !== 'Position',
//         errorMsg: 'Please select a player position'
//       },
//       pace: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Pace must be a number between 10 and 99'
//       },
//       shooting: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Shooting must be a number between 10 and 99'
//       },
//       passing: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Passing must be a number between 10 and 99'
//       },
//       dribbling: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Dribbling must be a number between 10 and 99'
//       },
//       defending: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Defending must be a number between 10 and 99'
//       },
//       physical: {
//         validate: (value) => !isNaN(value) && value >= 10 && value <= 99,
//         errorMsg: 'Physical must be a number between 10 and 99'
//       }
//     };

//     Object.entries(inputs).forEach(([key, input]) => {
//       if (input) {
//         const value = input.value.trim();
//         const validation = validations[key];

//         if (validation && !validation.validate(value)) {
//           const errorEl = getOrCreateErrorElement(input);
//           errorEl.textContent = validation.errorMsg;
//           errorEl.style.display = 'block';
//           input.classList.add('error');
//           isValid = false;
//         } else {
//           input.classList.remove('error');
//         }
//       }
//     });

//     return isValid;
//   }


function toggleError(field, show, message = '') {
    const errorDisplay = document.getElementById(`${field}Error`);
    const inputField = document.getElementById(field);

    if (show) {
        errorDisplay.textContent = message;
        errorDisplay.classList.remove('hidden');
        inputField.classList.add('border-red-500');
        inputField.classList.remove('border-green-500');
    } else {
        errorDisplay.classList.add('hidden');
        inputField.classList.remove('border-red-500');
        inputField.classList.add('border-green-500');
    }
}

function validateField(field, value) {
    const rule = validationRules[field];
    if (rule && !rule.regex.test(value)) {
        toggleError(field, true, rule.message);
        return false;
    } else {
        toggleError(field, false);
        return true;
    }
}

function validateForm(form) {
    let valid = true;

    for (let field in validationRules) {
        const fieldValue = document.getElementById(field).value;
        const isFieldValid = validateField(field, fieldValue);
        if (!isFieldValid) valid = false;
    }

    return valid;
}

export default { validateForm, validateField, toggleError };





let fullname = document.getElementById("Fullname");
let position = document.getElementById("position");
let nationality = document.getElementById("nationality");
let club = document.getElementById("club");
let rating = document.getElementById("rating");
let pace = document.getElementById("pace");
let shooting = document.getElementById("shooting");
let passing = document.getElementById("passing");
let dribbling = document.getElementById("dribbling");
let defending = document.getElementById("defending");
let physical = document.getElementById("physical");

let diving = document.getElementById("diving");
let handling = document.getElementById("handling");
let kicking = document.getElementById("kicking");
let reflexes = document.getElementById("reflexes");
let speed = document.getElementById("speed");
let positioning = document.getElementById("positioning");

let btnAdd = document.getElementById("addbtn");
let playerStatistique = document.getElementById("playerStatistique");
let goalStatistique = document.getElementById("goalStatistique");

// let isValid = true;




function validation() {
    const fields = [
        { id: "fullname", error: "errorFullname", message: "error fullname", required: true },
        { id: "position", error: "errorPosition", message: "error Position", required: true, invalidValue: "Select Position" },
        { id: "nationality", error: "errorNationality", message: "error nationality", required: true },
        { id: "club", error: "errorClub", message: "error name", required: true },
        { id: "rating", error: "errorRating", message: "error rating", min: 1, max: 99 },
        { id: "pace", error: "errorPace", message: "error pace", min: 1, max: 99 },
        { id: "shooting", error: "errorShooting", message: "error shooting", min: 1, max: 99 },
        { id: "passing", error: "errorPassing", message: "error passing", min: 1, max: 99 },
        { id: "dribbling", error: "errorDribbling", message: "error dribbling", min: 1, max: 99 },
        { id: "physical", error: "errorPhysical", message: "error physical", min: 1, max: 99 },
        { id: "defending", error: "errorDefending", message: "error defending", min: 1, max: 99 },
        { id: "diving", error: "errorDiving", message: "error diving", min: 1, max: 99 },
        { id: "handling", error: "errorHandling", message: "error handling", min: 1, max: 99 },
        { id: "kicking", error: "errorKicking", message: "error kicking", min: 1, max: 99 },
        { id: "reflexes", error: "errorReflexes", message: "error reflexes", min: 1, max: 99 },
        { id: "speed", error: "errorSpeed", message: "error speed", min: 1, max: 99 },
        { id: "positioning", error: "errorPositioning", message: "error positioning", min: 1, max: 99 }
    ];

    let isValid = true;

    fields.forEach(({ id, error, message, required, min, max, invalidValue }) => {
        const field = document.getElementById(id);
        const errorElement = document.getElementById(error);

        if (
            (required && !field.value) ||
            (invalidValue !== undefined && field.value === invalidValue) ||
            (min !== undefined && (field.value < min || field.value > max))
        ) {
            errorElement.innerText = message;
            errorElement.style.color = "red";
            errorElement.classList.remove("hidden");
            isValid = false;
        } else {
            errorElement.classList.add("hidden");
        }
    });

    return isValid; // Returns true if all validations pass
}




btnAdd.addEventListener("click", function (e) {
    e.preventDefault();

    const players = JSON.parse(localStorage.getItem("players")) || [];

        validation();
        let players_object = {
       
            Fullname: fullname.value,
            position: position.value,
            nationality: nationality.value,
            flag: flag.value,
            club: club.value,
            rating: rating.value,
            pace: pace.value,
            shooting: shooting.value,
            passing: passing.value,
            dribbling: dribbling.value,
            physical: physical.value,
            defending: defending.value,
            diving: diving.value,
            handling: handling.value,
            kicking: kicking.value,
            reflexes: reflexes.value,
            speed: speed.value,
            positioning: positioning.value,
            profileImage: profileImageData,
            clubLogo: clubLogoData
     
        }
        players.push(players_object);
        localStorage.setItem("players", JSON.stringify(players))
        
        desplay(); 
   
});

window.onload = desplay();

function desplay() {
    
    const players = JSON.parse(localStorage.getItem("players")) || [];

    let changement = document.querySelector(".changement");
    let goalkeeper = document.querySelector(".goalkeeper");

    let lb = document.getElementById("player1")
    let lcb = document.getElementById("player2")
    let rcb = document.getElementById("player3")
    let rb = document.getElementById("player4")

    let lm = document.getElementById("player5")
    let lcm = document.getElementById("player6")
    let rcm = document.getElementById("player7")
    let rm = document.getElementById("player8")

    let lf = document.getElementById("player9")
    let rf = document.getElementById("player10")

    let retrievedData = "";
    let retrievedGoalData = "";


    players.forEach(element => {
        retrievedGoalData = `
                <div class="allDtat flex-col justify-center item-center mt-2">
                    <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                        <div class="flex-col">
                            <p class="text-sm font-bold">${element.rating}</p>
                            <p class="text-[10px]">${element.position}</p>
                            <p class="text-[10px]">++</p>
                        </div>
                        <div>
                            <img src="${element.profileImage}" alt="Profile Picture" style="height:6rem;width:6rem;">
                        </div>
                    </div>
        
                    <div class="flex-col justify-center item-center text-center">
                        <p class="text-sm font-bold">${element.Fullname}</p>
                        <div class="flex gap-[3px]">
                            <div class="flex-col">
                                <p class="text-[10px]">DIV</p>
                                <p class="text-xs font-bold">${element.diving}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">HAN</p>
                                <p class="text-xs font-bold">${element.handling}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">KIK</p>
                                <p class="text-xs font-bold">${element.kicking}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">REF</p>
                                <p class="text-xs font-bold">${element.reflexes}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">SPD</p>
                                <p class="text-xs font-bold">${element.speed}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">POS</p>
                                <p class="text-xs font-bold">${element.positioning}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center ">
                        <p class="text-[7px] bg-green-500">${element.nationality}</p>
                        <img src="${element.clubLogo}" alt="Profile Picture" style="height:1rem;width:20px;">
                    </div>
                </div>

        `;


        retrievedData = `
                <div class="allDtat flex-col justify-center item-center mt-2">
                    <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                        <div class="flex-col">
                            <p class="text-sm font-bold">${element.rating}</p>
                            <p class="text-[10px]">${element.position}</p>
                            <p class="text-[10px]">++</p>
                        </div>
                        <div>
                            <img src="${element.profileImage}" alt="Profile Picture" style="height:6rem;width:6rem;">
                        </div>
                    </div>
        
                    <div class="flex-col justify-center item-center text-center">
                        <p class="text-sm font-bold">${element.Fullname}</p>
                        <div class="flex gap-[3px]">
                            <div class="flex-col">
                                <p class="text-[10px]">PAC</p>
                                <p class="text-xs font-bold">${element.pace}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">SHO</p>
                                <p class="text-xs font-bold">${element.shooting}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">PAS</p>
                                <p class="text-xs font-bold">${element.passing}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">DRI</p>
                                <p class="text-xs font-bold">${element.dribbling}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">DEF</p>
                                <p class="text-xs font-bold">${element.defending}</p>
                            </div>
                            <div class="flex-col">
                                <p class="text-[10px]">PHY</p>
                                <p class="text-xs font-bold">${element.physical}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center ">
                        <p class="text-[7px] bg-green-500">${element.nationality}</p>
                        <img src="${element.clubLogo}" alt="Profile Picture" style="height:1rem;width:20px;">
                    </div>
                </div>

        `;

        if (element.position == "GK") {
            goalkeeper.innerHTML = retrievedGoalData;
        }
        if (element.position == "LB") {
            lb.innerHTML = retrievedData;
        }
        if (element.position == "RB") {
            rb.innerHTML = retrievedData;
        }
        if (element.position == "LCB") {
            lcb.innerHTML = retrievedData;
        }
        if (element.position == "RCB") {
            rcb.innerHTML = retrievedData;
        }
        if (element.position == "LM") {
            lm.innerHTML = retrievedData;
        }
        if (element.position == "LCM") {
            lcm.innerHTML = retrievedData;
        }
        if (element.position == "RCM") {
            rcm.innerHTML = retrievedData;
        }
        if (element.position == "RM") {
            rm.innerHTML = retrievedData;
        }
        if (element.position == "LF") {
            lf.innerHTML = retrievedData;
        }
        if (element.position == "RF") {
            rf.innerHTML = retrievedData;
        }

        // changement.innerHTML += `
        //     <div id="playerChange" class="flex-col justify-centent item-center">
        //         <div class="allDtat flex-col justify-center item-center mt-2">
        //             <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
        //                 <div class="flex-col">
        //                     <p class="text-sm font-bold">${element.rating}</p>
        //                     <p class="text-[10px]">${element.position}</p>
        //                     <p class="text-[10px]">++</p>
        //                 </div>
        //                 <div>
        //                     <img src="./asset/img/player.png" alt="" style="height:6rem;width:6rem;">
        //                 </div>
        //             </div>
        
        //             <div class="flex-col justify-center item-center text-center">
        //                 <p class="text-sm font-bold">${element.name}</p>
        //                 <div class="flex gap-[3px]">
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">PAC</p>
        //                         <p class="text-xs font-bold">${element.pace}</p>
        //                     </div>
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">SHO</p>
        //                         <p class="text-xs font-bold">${element.shooting}</p>
        //                     </div>
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">PAS</p>
        //                         <p class="text-xs font-bold">${element.passing}</p>
        //                     </div>
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">DRI</p>
        //                         <p class="text-xs font-bold">${element.dribbling}</p>
        //                     </div>
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">DEF</p>
        //                         <p class="text-xs font-bold">${element.defending}</p>
        //                     </div>
        //                     <div class="flex-col">
        //                         <p class="text-[10px]">PHY</p>
        //                         <p class="text-xs font-bold">${element.physical}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="flex gap-2 justify-center ">
        //                 <p class="text-[7px] bg-green-500">${element.flag}</p>
        //                 <p class="text-[7px] bg-white">${element.club}</p>
        //             </div>
        //         </div>
        //     </div>

        // `;

});


    }

