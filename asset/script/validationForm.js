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

let playersStatus = document.getElementById("playersStatus");


/////////// add player to the local Storage

btnAdd.addEventListener("click", function (e) {
    e.preventDefault();

    let isvalid = formValidation();
    console.log(isvalid);

    if(!isvalid) return;

    const players = JSON.parse(localStorage.getItem("players")) || [];
    let playerIndex = btnAdd.getAttribute("data-index");
    let playerId = playerIndex ? parseInt(playerIndex) : Date.now();

    let players_object = {

        id: playerId,
        Fullname: fullname.value,
        position: position.value,
        playersStatus: playersStatus.value,
        nationality: nationality.value,
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
        clubLogo: clubLogoData,        
        flag: FlagData,

    }

    if (playerIndex) {
        const indexToUpdate = players.findIndex((player) => player.id === playerId);
        if (indexToUpdate !== -1) players[indexToUpdate] = players_object;
        btnAdd.removeAttribute("data-index"); 
    } else {
        players.push(players_object);
    }

        localStorage.setItem("players", JSON.stringify(players))
        desplay();
    // resetForm();
    clearForm();

});

    // desplay function ;

function desplay() {

    const players = JSON.parse(localStorage.getItem("players")) || [];
    let benchs = document.getElementById("benchs");

    let retrievedData = "";
    let retrievedGoalData = "";

    let principalPlayers = []
    players.filter((item) => {
        if (item.playersStatus == "principal") {
            principalPlayers.push(item)
        }
    });
    principalPlayers.forEach((element, index) => {
            retrievedGoalData = `
            <div class="allDtat flex-col justify-center item-center mt-2" data-index="${element.id}">
                    <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                        <div class="flex-col">
                            <p class="text-sm font-bold">${element.rating}</p>
                            <p class="text-[10px]">${element.position}</p>
                            <p class="text-[10px]">++</p>
                        </div>
                        <div>
                            <img src="${element.profileImage}" alt="Profile Picture" style="height: 95px;width: 87px;">
                        </div>
                        <div class="flex flex-col">
                            <button class="delete" type="button" onclick="deletePlayer(${element.id})"><i class="delete fa-solid fa-trash"></i></button>
                            <button type="button" class="update" onclick="update(${element.id})"><i class=" update fa-solid fa-pen"></i></button>
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
                    <div class="flex gap-2 justify-center">
                        <p class="text-[7px] bg-green-500">${element.nationality}</p>
                        <img src="${element.clubLogo}" alt="Profile Picture" style="height:1rem;width:20px;">
                        <img src="${element.flag}" alt="Profile Picture" style="height:1rem;width:20px;">

                    </div>
                </div>
            `;

            retrievedData = `
            <div class="allDtat flex-col justify-center item-center mt-2" data-index="${element.id}">
                <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                    <div class="flex-col">
                        <p class="text-md font-bold">${element.rating}</p>
                        <p class="text-[10px]">${element.position}</p>
                        <p class="text-[10px]">++</p>
                    </div>
                    <div>
                        <img src="${element.profileImage}" alt="Profile Picture" style="height: 95px;width: 87px;">
                    </div>
                    <div class="flex flex-col">
                        <button type="button" class="delete" onclick="deletePlayer(${element.id})"><i class="delete fa-solid fa-trash"></i></button>
                        <button type="button" class="update" onclick="update(${element.id})"><i class="update fa-solid fa-pen"></i></button>
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
                <div class="flex gap-2 justify-center">
                        <p class="text-[7px] bg-green-500">${element.nationality}</p>
                        <img src="${element.clubLogo}" alt="Profile Picture" style="height:1rem;width:20px;">
                        <img src="${element.flag}" alt="Profile Picture" style="height:1rem;width:20px;">
                    </div>
            </div>
           `;

            if (element.position == "GK") {
                document.querySelector(".goalkeeper").innerHTML = retrievedGoalData;
            }
            if (element.position == "LB") {
                document.getElementById("player1").innerHTML = retrievedData;
            }
            if (element.position == "RB") {
                document.getElementById("player4").innerHTML = retrievedData;
            }
            if (element.position == "LCB") {
                document.getElementById("player2").innerHTML = retrievedData;
            }
            if (element.position == "RCB") {
                document.getElementById("player3").innerHTML = retrievedData;
            }
            if (element.position == "LM") {
                document.getElementById("player5").innerHTML = retrievedData;
            }
            if (element.position == "LCM") {
                document.getElementById("player6").innerHTML = retrievedData;
            }
            if (element.position == "RCM") {
                document.getElementById("player7").innerHTML = retrievedData;
            }
            if (element.position == "RM") {
                document.getElementById("player8").innerHTML = retrievedData;
            }
            if (element.position == "LF") {
                document.getElementById("player9").innerHTML = retrievedData;
            }
            if (element.position == "RF") {
                document.getElementById("player10").innerHTML = retrievedData;
            }
    });


    let benchPlayers=[];
    players.filter((item)=>{
        if(item.playersStatus == "bench"){
            benchPlayers.push(item);
        }
    });
    benchs.innerHTML = ""
    benchPlayers.forEach((element,index) => {
        benchs.innerHTML += `
        <div id="bench_players" class="flex-col justify-centent item-center">
            <div class="allDtat flex-col justify-center item-center mt-2" data-index="${element.id}">
                <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                    <div class="flex-col">
                        <p class="text-md font-bold">${element.rating}</p>
                        <p class="text-[10px]">${element.position}</p>
                        <p class="text-[10px]">++</p>
                    </div>
                    <div>
                        <img src="${element.profileImage}" alt="Profile Picture" style="height: 95px;width: 87px;">
                    </div>
                    <div class="flex flex-col">
                        <button type="button" class="delete" onclick="deletePlayer(${element.id})"><i class="delete fa-solid fa-trash"></i></button>
                        <button type="button" id="update" onclick="update(${element.id})"><i class="update fa-solid fa-pen"></i></button>
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
                <div class="flex gap-2 justify-center">
                        <p class="text-[7px] bg-green-500">${element.nationality}</p>
                        <img src="${element.clubLogo}" alt="Profile Picture" style="height:1rem;width:20px;">
                        <img src="${element.flag}" alt="Profile Picture" style="height:1rem;width:20px;">
                    </div>
            </div>
           `;
    });
}

////////////// End display function 


////////////// delete function 

    function deletePlayer(playerId) {
        let players = JSON.parse(localStorage.getItem('players'));
        players = players.filter(player => player.id !== playerId); 
        localStorage.setItem('players', JSON.stringify(players)); 
        desplay(); 
        window.location.reload();
    }

////////End delete function 


///////////////update function 

function update(playerId) {
    const players = JSON.parse(localStorage.getItem("players")) || [];
    const playerToEdit = players.find((player) => player.id === playerId);

    if (playerToEdit) {
        fullname.value = playerToEdit.Fullname;
        position.value = playerToEdit.position;
        playersStatus.value = playerToEdit.playersStatus;
        nationality.value = playerToEdit.nationality;
        club.value = playerToEdit.club;
        rating.value = playerToEdit.rating;
        pace.value = playerToEdit.pace;
        shooting.value = playerToEdit.shooting;
        passing.value = playerToEdit.passing;
        dribbling.value = playerToEdit.dribbling;
        physical.value = playerToEdit.physical;
        defending.value = playerToEdit.defending;
        diving.value = playerToEdit.diving;
        handling.value = playerToEdit.handling;
        kicking.value = playerToEdit.kicking;
        reflexes.value = playerToEdit.reflexes;
        speed.value = playerToEdit.speed;
        positioning.value = playerToEdit.positioning;
        btnAdd.setAttribute("data-index", playerToEdit.id); 
    }
}
////////End update function 


///////////// formvalidation function 

function formValidation() {
    let isValid = true;
    let formInput = document.querySelectorAll("#form input, #form select");
    let formInputs = Array.from(formInput).filter(input => input.type !== "hidden");

    formInputs.forEach((item) => {
        let errorSpan = item.nextElementSibling;
        let value = item.value.trim();
        if (errorSpan) {
            errorSpan.classList.add("hidden");
            errorSpan.innerText = "";
        }
        let isHidden = item.closest('.hidden') !== null;

        if (!isHidden) {
            if (value === "") {
                if (errorSpan) {
                    errorSpan.classList.remove("hidden");
                    errorSpan.innerText = "This field is required.";
                    errorSpan.style.color = "red";
                    isValid = false;
                }
            } else if (item.type === "number") {
                let numberValue = parseFloat(value);
                if (isNaN(numberValue) || numberValue < 1 || numberValue > 99) {
                    if (errorSpan) {
                        errorSpan.classList.remove("hidden");
                        errorSpan.innerText = "The number must be between 1 and 99.";
                        errorSpan.style.color = "red";
                        isValid = false;
                    }
                }
            } else if (item.id === "playersStatus" && value === "status") {
                if (errorSpan) {
                    errorSpan.classList.remove("hidden");
                    errorSpan.innerText = "You must select a valid status.";
                    errorSpan.style.color = "red";
                    isValid = false;
                }
            }
        }
    });

    return isValid;
}




/////// End formvalidation function 

function clearForm() {
    fullname.value = "";
    position.value = "Select Position";
    playersStatus.value = "status";
    nationality.value = "";
    club.value = "";
    rating.value = "";
    pace.value = "";
    shooting.value = "";
    passing.value = "";
    dribbling.value = "";
    physical.value = "";
    defending.value = "";
    diving.value = "";
    handling.value = "";
    kicking.value = "";
    reflexes.value = "";
    speed.value = "";
    positioning.value = "";
    profileImageData = "";
    clubLogoData = "";
}

// function resetForm() {
//     clearForm();
//     btnAdd.removeAttribute("data-index");
// }

window.onload = desplay();
