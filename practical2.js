function saveData() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let contact = document.getElementById("contact").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if (user_records.some((v) => { return v.mail == mail })) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name": name,
            "mail": mail,
            "contact": contact
        });

        localStorage.setItem("users", JSON.stringify(user_records));
    }

    for (let i = 0; i < user_records.length; i++) {
        console.log(user_records[i]);
    }

    display();
}
function saveData() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let contact = document.getElementById("contact").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    
    if (user_records.some((v) => { return v.mail == mail })) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name": name,
            "mail": mail,
            "contact": contact,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
    }

    for (let i = 0; i < user_records.length; i++) {
        console.log(user_records[i]);
    }
    
    display();
}

function display() {
    for (var i = 0; i < localStorage.length; i++) {
        document.writeln();
        document.write(localStorage.key(i) + "\n" + localStorage.getItem(localStorage.key(i)) + "]");
        document.writeln();
    }
}
