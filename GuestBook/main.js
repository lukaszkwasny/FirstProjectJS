var form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    showresult();
});

function showresult() {

    var
        title = document.getElementById("title").value,
        contents = document.getElementById("contents").value,
        signature = document.getElementById("signature").value,
        gender = document.querySelector('input[name="gender"]:checked').value,
        email = document.getElementById("mail").value,
        checkBox = document.getElementById("agree");

    addRow(title, signature, gender, contents, email, checkBox)

};

function addRow(title, signature, gender, contents, email, checkBox) {

    var div = document.createElement('div');


    div.innerHTML =

             "<div class='card mt-2'>"+
                "<div class='card-body mt-4'>" +
                    "<dl class='row'>"+
                        "<dt class='col-sm-3'>Title: </dt>" +
                        "<dd class='col-sm-9'>" + title + "</dd>" +
                        "<dt class='col-sm-3'>Signature: </dt>" +
                        "<dd class='col-sm-9'>" + signature + "</dd>" +
                        "<dt class='col-sm-3'>Contents: </dt>" +
                        "<dd class='col-sm-9'>" + contents + "</dd>" +
                        "<dt class='col-sm-3'>Gender: </dt>" +
                        "<dd class='col-sm-9'>" + gender + "</dd>" +
                        "<dt class='col-sm-3'>E-mail: </dt>" +
                        "<dd class='col-sm-9'>" + (checkBox.checked === true ? email : "hidden") + "</dd>" +
                    "</dl>" +
                "</div>" +
            "</div>";


    document.getElementById('content').prepend(div);
    // wynik od dolu  parent.append(p);
    // gora parent.prepend(span);
};






