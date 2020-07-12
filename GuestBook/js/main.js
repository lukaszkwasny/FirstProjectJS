const form = document.getElementById('form-identifier');
const btn = document.getElementById('btn');
const row = document.getElementById('row');
const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);

function checkStorage() {
    if (!(localStorage.getItem("myElement") === null)) {
        let neew = localStorage.getItem("myElement");
        return JSON.parse(neew);
    } else {
        return [];
    }

}

localData = checkStorage();

function displaySavedData() {

    for (i = 0; localData.length > i; i++) {
        const div = document.createElement('div');
        div.innerHTML = template(localData[i]);
        row.prepend(div);
    }
}


displaySavedData();

const validationSchemes = {
    title: {
        length: {
            minimum: 5,
            maximum: 25,
            message: "must be 5-25"
        },
        presence: {
            allowEmpty: false,
            message: "can't be empty"
        }
    },
    contents: {
        length: {
            minimum: 10,
            message: "must be minimum 10"
        },
        presence: {
            allowEmpty: false,
            message: "can't be empty"
        }
    },
    signature: {
        length: {
            minimum: 3,
            maximum: 30,
            message: "must be 3-30"
        },
        presence: {
            allowEmpty: false,
            message: "can't be empty"
        }
    },
    gender: {
        inclusion: [
            'woman',
            'man'
        ],
        presence: {
            allowEmpty: false,
            message: "can't be empty"
        }
    },
    email: {
        email: true,
        presence: {
            allowEmpty: false,
            message: "can't be empty"
        }
    }
};


form.addEventListener('submit', function (e) {
    e.preventDefault();
    showResult();
});


function Delete(e) {
    let idDiv = e.closest(".card").dataset.set;
    let allDiv = e.closest(".card");

    let idDelete = localData.findIndex(x => x.id === idDiv);
    localData.splice(idDelete, 1,);
    localStorage.setItem("myElement", JSON.stringify(localData));
    allDiv.parentElement.removeChild(allDiv);

}

function showResult() {

    let id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));

    const data = {
            title: document.getElementById('title').value,
            contents: document.getElementById('contents').value,
            signature: document.getElementById('signature').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            email: document.getElementById('email').value,
            agree: document.getElementById('agree').checked,
            id: id,
        }
    ;
    clearValidationMessages();
    const validationResult = validate(data, validationSchemes);

    if (!validationResult) {
        addRow(data);
        form.classList.add("was-validated");
        localData.push(data);
        localStorage.setItem("myElement", JSON.stringify(localData));
        document.getElementById("form-identifier").reset();
    } else {
        form.classList.remove("was-validated");

        Object.keys(validationResult).forEach(function (key) {
            validationResult[key].forEach(function (message) {

                const errorElement = getErrorElement(message);
                const node = document.getElementById(key);

                node.parentNode.append(errorElement);
                node.classList.add('is-invalid');

            })
        });
    }
}

function clearValidationMessages() {

    const errorElements = document.getElementsByClassName('invalid-feedback');

    while (errorElements.length > 0) {
        errorElements[0].parentElement.removeChild(errorElements[0]);
    }

    const invalidElements = document.getElementsByClassName('is-invalid');

    while (invalidElements.length > 0) {
        invalidElements[0].classList.remove('is-invalid');

    }
}


function getErrorElement(message) {
    const div = document.createElement('div');
    div.innerText = message;
    div.classList.add('invalid-feedback');

    return div;
}

function addRow(data) {
    const div = document.createElement('div');
    div.innerHTML = template(data);
    row.prepend(div);
}

