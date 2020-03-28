var form = document.getElementById('myForm');

var source = document.getElementById("tpl").innerHTML,
    template = Handlebars.compile(source);

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

    var date = {
        title: title,
        contents: contents,
        signature: signature,
        gender: gender,
        email: email,
        checkBox: checkBox.checked

    }


    var html = template(date);
    div.innerHTML = html;

    document.getElementById('content').prepend(div);

};










