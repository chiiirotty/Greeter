function greeter(person) {
    return "こんにちは、 " + person.lastName + " " + person.firstName + "さん！よろしくね^^";
}
function onButtonClick() {
    var lastName = document.getElementById("lastname");
    var myouji = lastName.value;
    var firstName = document.getElementById("firstname");
    var namae = firstName.value;
    var user = { lastName: myouji, firstName: namae };
    document.body.innerHTML = greeter(user);
}
