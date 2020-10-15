interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "こんにちは、 " + person.lastName + " " + person.firstName + "さん！よろしくね^^";
}

function onButtonClick() {
    let lastName: HTMLInputElement  = <HTMLInputElement>document.getElementById("lastname");
    let myouji: string = lastName.value;
    let firstName: HTMLInputElement  = <HTMLInputElement>document.getElementById("firstname");
    let namae: string = firstName.value;
    let user = { lastName: myouji, firstName: namae };
    document.body.innerHTML = greeter(user);
}


