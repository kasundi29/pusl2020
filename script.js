function changeImage() {

    var selectedCharacter = document.getElementById("character").value;

    var imagePath = "images/" + selectedCharacter + ".jpg";

    document.getElementById("characterImage").src = imagePath;

}