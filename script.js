const uploadInput = document.getElementById("photoUpload");
const profilePreview = document.getElementById("profilePreview");

uploadInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            profilePreview.src = reader.result;
        };

        reader.readAsDataURL(file);
    }
});
