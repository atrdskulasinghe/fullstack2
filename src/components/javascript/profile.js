let profileButton = document.getElementById("profile-button");
let profileImage = document.getElementById("profile-image");
let profileFile = document.getElementById("profile-file-input");

profileButton.addEventListener("click", () => {
    profileFile.click();
});

profileFile.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profileImage.src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
});
