var form = document.getElementById('myForm'),
    source = document.getElementById("tpl").innerHTML,
    template = Handlebars.compile(source),
    validationSchemes = {

        title: {
            length: {
                minimum: 5,
                maximum: 25
            },
            presence: {
                allowEmpty: false
            }
        },
        contents: {
            length: {
                minimum: 10
            },
            presence: {
                allowEmpty: false
            }
        },
        signature: {
            length: {
                minimum: 3,
                maximum: 30
            },
            presence: {
                allowEmpty: false
            }
        },
        gender: {
            inclusion: [
                'woman',
                'man'
            ],
            presence: {
                allowEmpty: false
            }
        },
        email: {
            email: true,
            presence: {
                allowEmpty: false
            }
        }

    };

//stop page reloading
form.addEventListener('submit', function (e) {
    e.preventDefault();
    showresult();
});

// catch date from form
function showresult() {

    var data = {
        title: document.getElementById("title").value,
        contents: document.getElementById("contents").value,
        signature: document.getElementById("signature").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        email: document.getElementById("mail").value,
        checkBox: document.getElementById("agree")
    };

    var validationResult = validate(data, validationSchemes);

    if (!validationResult) {
        addRow(data)
    } else {
        console.log(validationResult);
    }
};

// add row with date from form
function addRow(data) {

    var div = document.createElement('div');

    div.innerHTML = template(data);

    document.getElementById('content').prepend(div);

};