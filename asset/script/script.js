        ///////// fileupload_Profile
        const profileImageInput = document.getElementById("profileImage");
        let profileImageData = "";
        profileImageInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                profileImageData = reader.result; 
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
        ///////// End_fileupload_Profile

        ///////// fileupload_Logo
        const clubLogo = document.getElementById("clubLogo");
        let clubLogoData = "";
        clubLogo.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                clubLogoData = reader.result;
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
        ///////// End_fileupload_Logo

        ///////// checkPositions
        position.addEventListener("change", function (e) {
            e.preventDefault();
            if (position.value == "GK") {
                playerStatistique.classList.add("hidden");
                goalStatistique.classList.remove("hidden");

            } else {
                playerStatistique.classList.remove("hidden");
                goalStatistique.classList.add("hidden");

            }
        })
         ///////// End checkPositions


         /////////Add players to the localStorage

        









         // function validation() {
//             regex: /^\d{2}$/,
//             message: "Ratting between 1 and 99",

//             "player-name": {
//     regex: /^[a-zA-Z\s]{2,10}$/,
//     message: "the name must contain at least 5 charachters",
//   },
//   "profile-img": {
//     regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
//     message: "select .jpg .png .webp .jpeg files",
//   },

//     if (fullname.value == "") {
//         // isValid = false;
//         document.getElementById("errorFullname").innerText="error fullname";
//         document.getElementById("errorFullname").style.color = "red";
//     }else{
//         // isValid = true;
//         document.getElementById("errorFullname").classList.add("hidden");
//     }

//     if (position.value == "Select Position") {
//         document.getElementById("errorPosition").innerText="error Position";
//         document.getElementById("errorPosition").style.color = "red";
//     }else{

//         document.getElementById("errorPosition").classList.add("hidden");
//     }

//     if (nationality.value == "") {        
//         document.getElementById("errorNationality").innerText="error nationality";
//         document.getElementById("errorNationality").style.color = "red";
//     }else{

//         document.getElementById("errorNationality").classList.add("hidden");
//     }

//     if (club.value === "") {        
//         document.getElementById("errorClub").innerText="error name";
//         document.getElementById("errorClub").style.color = "red";
//     }else{

//         document.getElementById("errorClub").classList.add("hidden");
//     }

//     if(rating.value == "" || rating.value > 99 || rating.value < 1){
//         document.getElementById("errorRating").innerText="error name";
//         document.getElementById("errorRating").style.color = "red";
//     }else{

//         document.getElementById("errorRating").classList.add("hidden");
//     }

//     if(pace.value == "" || pace.value > 99 || pace.value < 1){
//         document.getElementById("errorPace").innerText="error name";
//         document.getElementById("errorPace").style.color = "red";
//     }else{

//         document.getElementById("errorPace").classList.add("hidden");
//     }

//     if(shooting.value == "" || shooting.value > 99 || shooting.value < 1){
//         document.getElementById("errorShooting").innerText="error name";
//         document.getElementById("errorShooting").style.color = "red";
//     }else{

//         document.getElementById("errorShooting").classList.add("hidden");
//     }

//     if(passing.value == "" || passing.value > 99 || passing.value < 1){
//         document.getElementById("errorPassing").innerText="error name";
//         document.getElementById("errorPassing").style.color = "red";
//     }else{

//         document.getElementById("errorPassing").classList.add("hidden");
//     }

//     if(dribbling.value == "" || dribbling.value > 99 || dribbling.value < 1){
//         document.getElementById("errorDribbling").innerText="error name";
//         document.getElementById("errorDribbling").style.color = "red";
//     }else{

//         document.getElementById("errorDribbling").classList.add("hidden");
//     }

//     if(physical.value == "" || physical.value > 99 || physical.value < 1){
//         document.getElementById("errorPhysical").innerText="error name";
//         document.getElementById("errorPhysical").style.color = "red";
//     }else{

//         document.getElementById("errorPhysical").classList.add("hidden");
//     }

//     if(defending.value == "" || defending.value > 99 || defending.value < 1){
//         document.getElementById("errorDefending").innerText="error name";
//         document.getElementById("errorDefending").style.color = "red";
//     }else{

//         document.getElementById("errorDefending").classList.add("hidden");
//     }

//     if(diving.value == "" || diving.value > 99 || diving.value < 1){
//         document.getElementById("errorDiving").innerText="error name";
//         document.getElementById("errorDiving").style.color = "red";
//     }else{

//         document.getElementById("errorDiving").classList.add("hidden");
//     }

//     if(handling.value == "" || handling.value > 99 || handling.value < 1){

//         document.getElementById("errorHandling").innerText="error name";
//         document.getElementById("errorHandling").style.color = "red";
//     }else{

//         document.getElementById("errorHandling").classList.add("hidden");
//     }

//     if(kicking.value == "" || kicking.value > 99 || kicking.value < 1){
//         document.getElementById("errorKicking").innerText="error name";
//         document.getElementById("errorKicking").style.color = "red";
//     }else{

//         document.getElementById("errorKicking").classList.add("hidden");
//     }

//     if(reflexes.value == "" || reflexes.value > 99 || reflexes.value < 1){
//         document.getElementById("errorReflexes").innerText="error reflexes";
//         document.getElementById("errorReflexes").style.color = "red";
//     }else{

//         document.getElementById("errorReflexes").classList.add("hidden");
//     }

//     if(speed.value == "" || speed.value > 99|| speed.value < 1){
//         document.getElementById("errorSpeed").innerText="error speed";
//         document.getElementById("errorSpeed").style.color = "red";
//     }else{

//         document.getElementById("errorSpeed").classList.add("hidden");
//     }

//     if(positioning.value == "" || positioning.value > 99 || positioning.value < 1){
//         document.getElementById("errorPositioning").innerText="error positioning";
//         document.getElementById("errorPositioning").style.color = "red";
//     }else{

//         document.getElementById("errorPositioning").classList.add("hidden");
//     }
// }