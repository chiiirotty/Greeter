let display;

class Person {
    _name: string;
    _birthday: string;

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get birthday(): string {
        return this._birthday;
    }
    set birthday(birthday: string) {
        this._birthday = birthday;
    }
}

let person = new Person();

function regName() {
    let Name: HTMLInputElement  = <HTMLInputElement>document.getElementById("name");
    let name: string = Name.value;
    person.name = name;
    if (name == "") {
        display = validation(0);
        window.alert(display);
    } else {
        display = greeter(person.name);
        document.body.innerHTML = display;
    }
}

function regAge() {
    let Birthday: HTMLInputElement  = <HTMLInputElement>document.getElementById("birthday");
    let birthday: string = Birthday.value;
    let birthDate = new Date(birthday);
    let today = new Date();
    if (birthday == "") {
        display = validation(0);
        window.alert(display);
    } else if ( birthDate.getTime() > today.getTime()) {
        display = validation(1);
        window.alert(display);
    } else {
        let birthdayList = splitBirthday(birthday);
        let birthYear = parseInt(birthdayList[0]);
        let birthMonth = parseInt(birthdayList[1]);
        let birthDay = parseInt(birthdayList[2]);
        display = tellPastEvents(birthYear, birthMonth, birthDay);
        document.body.innerHTML = display;
    }
}

function greeter(name: string) {
    let greet = '<p>こんにちは、 ' + name + 'さん！よろしくね^^</p>';
    let askBirthday = '<p>生年月日を教えて！</p>';
    let startForm = '<form name="form2" id="id_form2" action="">';
    let text = '<input type="date" id="birthday">';
    let button = '<input type="button" value="決定" onclick="regAge();" />';
    let endForm = '</form>';
    let back = '<p><a href="index.html">もどる</a></p>';
    return greet + askBirthday + startForm + text + button + endForm + back;
}

function splitBirthday(birthday: string) {
    let birthdayList = birthday.split('-');
    return birthdayList;
}

function tellPastEvents(birthYear: number, birthMonth: number, birthDay: number) {
    person.birthday = birthYear + '年' + birthMonth + '月' + birthDay + '日';
    let showWikipedia = '<a href="https://ja.wikipedia.org/wiki/' + birthYear + '%E5%B9%B4%E3%81%AE%E6%97%A5%E6%9C%AC#' + birthMonth + '%E6%9C%88" target="blank">こんな</a>';
    let confirm = '<p>'+ person.name + 'さんは、' + person.birthday + 'に生まれたんだね！</p>';
    let tellEvent = '<p>' + person.name + 'さんの生まれた月には、' + showWikipedia + 'ことがあったよ！</p>';
    let back = '<p><a href="index.html">さいしょにもどる</a></p>';
    let reply = confirm + back;
    if (birthYear >= 1980) {
        reply = confirm + tellEvent + back;
    }
    return reply;
}

function validation(errorFlg: number) {
    let message;
    if (errorFlg == 0) {
        message = '空欄だよ。';
    } else if (errorFlg == 1) {
        message = '未来の日付だよ。';
    } else {
        message = '不明なエラーだよ。';
    }
    return message;
}

