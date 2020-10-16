var display;
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (birthday) {
            this._birthday = birthday;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
function regName() {
    var Name = document.getElementById("name");
    var name = Name.value;
    person.name = name;
    if (name == "") {
        display = validation(0);
        window.alert(display);
    }
    else {
        display = greeter(person.name);
        document.body.innerHTML = display;
    }
}
function regAge() {
    var Birthday = document.getElementById("birthday");
    var birthday = Birthday.value;
    var birthDate = new Date(birthday);
    var today = new Date();
    if (birthday == "") {
        display = validation(0);
        window.alert(display);
    }
    else if (birthDate.getTime() > today.getTime()) {
        display = validation(1);
        window.alert(display);
    }
    else {
        var birthdayList = splitBirthday(birthday);
        var birthYear = parseInt(birthdayList[0]);
        var birthMonth = parseInt(birthdayList[1]);
        var birthDay = parseInt(birthdayList[2]);
        display = tellPastEvents(birthYear, birthMonth, birthDay);
        document.body.innerHTML = display;
    }
}
function greeter(name) {
    var greet = '<p>こんにちは、 ' + name + 'さん！よろしくね^^</p>';
    var askBirthday = '<p>生年月日を教えて！</p>';
    var startForm = '<form name="form2" id="id_form2" action="">';
    var text = '<input type="date" id="birthday">';
    var button = '<input type="button" value="決定" onclick="regAge();" />';
    var endForm = '</form>';
    var back = '<p><a href="index.html">もどる</a></p>';
    return greet + askBirthday + startForm + text + button + endForm + back;
}
function splitBirthday(birthday) {
    var birthdayList = birthday.split('-');
    return birthdayList;
}
function tellPastEvents(birthYear, birthMonth, birthDay) {
    person.birthday = birthYear + '年' + birthMonth + '月' + birthDay + '日';
    var showWikipedia = '<a href="https://ja.wikipedia.org/wiki/' + birthYear + '%E5%B9%B4%E3%81%AE%E6%97%A5%E6%9C%AC#' + birthMonth + '%E6%9C%88" target="blank">こんな</a>';
    var confirm = '<p>' + person.name + 'さんは、' + person.birthday + 'に生まれたんだね！</p>';
    var tellEvent = '<p>' + person.name + 'さんの生まれた月には、' + showWikipedia + 'ことがあったよ！</p>';
    var back = '<p><a href="index.html">さいしょにもどる</a></p>';
    var reply = confirm + back;
    if (birthYear >= 1980) {
        reply = confirm + tellEvent + back;
    }
    return reply;
}
function validation(errorFlg) {
    var message;
    if (errorFlg == 0) {
        message = '空欄だよ。';
    }
    else if (errorFlg == 1) {
        message = '未来の日付だよ。';
    }
    else {
        message = '不明なエラーだよ。';
    }
    return message;
}
