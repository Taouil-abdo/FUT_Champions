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

        ///////// fileupload_Flag
        const Flag = document.getElementById("flag");
        let FlagData = "";
        Flag.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                FlagData = reader.result;
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
        ///////// End_fileupload_Logo


        ////// fileupload_Logo

        const clubLogo = document.getElementById("clubLogo");
        let  clubLogoData = "";
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

        /////// end Logo

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

        









         