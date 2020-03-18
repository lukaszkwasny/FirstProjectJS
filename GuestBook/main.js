var form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    showresult();
})

function showresult() {
    var text = document.getElementById("text").value;
    var contents = document.getElementById("contents").value;
    var signature = document.getElementById("signature").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("mail").value;
    var checkBox = document.getElementById("agree");

    addRow(text, signature, gender, contents, email, checkBox)

}

function addRow(text, signature, gender, contents, email, checkBox) {
    var div = document.createElement('div');


    div.innerHTML =
        "<div>" +
        "<p><strong>Signature: </strong>" + signature + "</p>" +
        "<p><strong>E-mail: </strong>" + (checkBox.checked === true ? email : "hidden") + "</p>" +
        "<p><strong>Contents: </strong>" + contents + "</p>" +
        "<p><strong>Text: </strong>" + text + "</p>" +
        "<p><strong>Gender: </strong>" + (gender === 'm' ? 'Man' : "Woman") + "</p>" +
        "</div>";

    document.getElementById('content').prepend(div);
    // wynik od dolu  parent.append(p);
    // gora parent.prepend(span);
}










