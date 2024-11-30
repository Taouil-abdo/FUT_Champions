window.onload = desplay();

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



// personal info form
const validationPersonalInfoForm = {
    fullname: {
        regex: /^[a-zA-Z\s]{2,10}$/,
        message: "the name must contain at least 5 charachters",
    },
    nationality: {
        regex: /^[a-zA-Z\s]{10,20}$/,
        message: "Enter a valid nationality",
    },
    flag: {
        regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
        message: "select .jpg .png .webp .jpeg files",
    },
    club: {
        regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
        message: "select .jpg .png .webp .jpeg files",
    },
};
function ToggleErrorMessage(field, show, message = "") {
    const inputField = document.getElementById(`${field}`);
    const errorMessage = document.getElementById(`${field}-error`);
    if (show) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
        inputField.classList.add("border-error");
        inputField.classList.remove("border-gray-500");
    } else {
        errorMessage.textContent = "";
        inputField.classList.add("border-gray-500");
    }
}
function validatePersonalField(field, value) {
    const rule = validationPersonalInfoForm[field];
    if (rule && !rule.regex.test(value)) {
        ToggleErrorMessage(field, true, rule.message);
        return false;
    } else {
        ToggleErrorMessage(field, false);
        return true;
    }
}
function validatPersonalForm() {
    let valid = true;
    for (let field in validationPersonalInfoForm) {
        const fieldValue = document.getElementById(field).value;
        const fieldValid = validatePersonalField(field, fieldValue);
        if (!fieldValid) valid = false;
    }
    return valid;
}

let id = 1;
btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    valid();

    const players = JSON.parse(localStorage.getItem("players")) || [];
    let players_object = {
        id: id++,
        Fullname: fullname.value,
        position: position.value,
        playersStatus: playersStatus.value,
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

let PlayerIndex = null;
///// delete

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
            <div class="allDtat flex-col justify-center item-center mt-2" data-index="${index}">
                    <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                        <div class="flex-col">
                            <p class="text-sm font-bold">${element.rating}</p>
                            <p class="text-[10px]">${element.position}</p>
                            <p class="text-[10px]">++</p>
                        </div>
                        <div>
                            <img src="${element.profileImage}" alt="Profile Picture" style="height: 101px;width: 90px;">
                        </div>
                        <div class="flex flex-col">
                            <button class="delete" type="button" onclick="dlt(${index})"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" id="update" onclick="update(${index})"><i class="fa-solid fa-pen"></i></button>
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
                    </div>
                </div>
            `;

            retrievedData = `
            <div class="allDtat flex-col justify-center item-center mt-2" data-index="${index}">
                <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                    <div class="flex-col">
                        <p class="text-sm font-bold">${element.rating}</p>
                        <p class="text-[10px]">${element.position}</p>
                        <p class="text-[10px]">+${index}+</p>
                    </div>
                    <div>
                        <img src="${element.profileImage}" alt="Profile Picture" style="height: 101px;width: 90px;">
                    </div>
                    <div class="flex flex-col">
                        <button type="button" class="delete" onclick="dlt(${index})"><i class="fa-solid fa-trash"></i></button>
                        <button type="button" id="update" onclick="update(${index})"><i class="fa-solid fa-pen"></i></button>
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
            <div class="allDtat flex-col justify-center item-center mt-2" >
                <div class="allDtat flex-col justify-center item-center mt-2">
                    <div id="head" class="" style="display: flex;align-items: center; justify-content: center;">
                        <div class="flex-col">
                            <p class="text-sm font-bold">${element.rating}</p>
                            <p class="text-[10px]">${element.position}</p>
                            <p class="text-[10px]">+${index}+</p>
                        </div>
                        <div>
                            <img src="${element.profileImage}" alt="Profile Picture" style="height:6rem;width:6rem;">
                        </div>
                        <div class="flex flex-col">
                            <button type="button" class="delete" onclick="dlt(${index})"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" id="update" onclick="update(${index})"><i class="fa-solid fa-pen"></i></button>
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
                        <p class="text-[7px] bg-green-500">${element.flag}</p>
                        <p class="text-[7px] bg-white">${element.club}</p>
                    </div>
                </div>
            </div>
         </div>
          `; 
    });


}

