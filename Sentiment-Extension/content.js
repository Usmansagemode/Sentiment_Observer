class PIIDetails {
    constructor(siteUrl, email, fName, mName, lName, phoneNumber, age, gender, passport, dLicense, cc, address, postCode, nationality, country, city, uid) {
        this.siteName = siteUrl;
        this.isEmail = email;
        this.isFirstName = fName;
        this.isMiddleName = mName;
        this.isLastName = lName;
        this.isNumber = phoneNumber;
        this.age = age;
        this.gender = gender;
        this.passport = passport;
        this.drivingLicense = dLicense;
        this.creditCard = cc;
        this.address = address;
        this.postCode = postCode;
        this.nationality = nationality;
        this.country = country;
        this.city = city;
        this.uniqueIdentifier = uid;
    }
}

let email = false;
let firstName = false;
let middleName = false;
let lastName = false;
let mobileNumber = false;
let age = false;
let gender = false;
let passport = false;
let drivingLicense = false;
let cc = false;
let address = false;
let postCode = false;
let nationality = false;
let country = false;
let city = false;
let uid = false;

window.onload = () => {
    console.log("window onload called <---------------------------> ");
    var h3Elements = $("h3").get();
    console.log("The count of H3 Elements are: " + h3Elements.length);

    for(var j = 0; j < h3Elements.length; ++j){
        // console.log("The class is: " + h3Elements[j].attributes[0].nodeValue);
        // console.log("The text is: "+ h3Elements[j].innerText);
        //
        var extractedText = h3Elements[j].innerText;
        //
        var closestDiv = $("h3").closest("div").get(j);
        // console.log("The size of closest DIV is: " + closestDiv.attributes[0].nodeValue);

        checkSentiment(extractedText, closestDiv);
    }

    // var v = $("h3").closest("div").get();
    // console.log("Count of closest DIV's are: " +  v.length);
    //
    // for(var i = 0; i < v.length; ++i){
    //     var divElement = v[i];
    //     console.log("The " + i +" DIV is: " + divElement.attributes[0].nodeValue);
    //     var elem = document.createElement("img");
    //     divElement.prepend(elem);
    //     elem.src = 'https://image.flaticon.com/icons/png/512/261/261040.png';
    //     elem.height=20;
    //     elem.width=20;
    // }
};


function checkSentiment(text, closestDiv){

    var data = null;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let apiResponse = JSON.parse(this.responseText);
            console.log("The sentiment API response is: " + apiResponse);

            if(apiResponse === "Positive"){
                var elem = document.createElement("img");
                closestDiv.prepend(elem);
                elem.src = 'https://image.flaticon.com/icons/png/512/148/148767.png';
                elem.title = "Positive"
                elem.height=20;
                elem.width=20;
                elem.padding = 20;
            }
            else {
                var elem = document.createElement("img");
                closestDiv.prepend(elem);
                elem.src = 'https://image.flaticon.com/icons/png/512/148/148766.png';
                elem.title = "Negative"
                elem.height=20;
                elem.width=20;
                elem.padding = 20;
            }
        }
    };

    request.open("GET", "http://localhost:7000/sentiment?data=" + text, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(data);

    // console.log("Inside checking sentiment function");
    // console.log("The passed text is: "+ text);
    //
    // var http = new XMLHttpRequest();
    // var url = 'http://localhost:7000/sentiment?data=' + text;
    //
    //
    // console.log("Custom made URL is ------>>><><><>" + url);
    //
    // http.open('GET', url, true);

    //Send the proper header information along with the request
    // http.setRequestHeader('Content-type', 'application/json');
    // http.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwiZm5hbWUiOiJUVlMgQWRtaW4iLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJ1c2VyX25hbWUiOiJhZG1pbiIsInVwciI6IlNVX0FETUlOIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sInJ0X2V4cGlyeSI6NjA0ODAwLCJleHAiOjE1NzU0MTQwMjcsImF1dGhvcml0aWVzIjpbIlN1cGVyIEFkbWluIl0sImp0aSI6IjM1YzQyYWY2LTdkMjUtNDAxYy1hYjIzLWM2ZDI3ZmEzYzJhZiIsImVtYWlsIjoidHZzLmFkbWluQGRub3cuY29tIiwiY2xpZW50X2lkIjoiZG5vdy10dnMtY2xpZW50In0.9-ZsH4wbAaLmYl9USibOcMv6CS_2MRIhFL9m0UXFk1M');
    // http.onreadystatechange = function() {//Call a function when the state changes.
    //
    //     console.log("The response length is: " + http.response.length);
    //
    //     rHeader = http.getResponseHeader("Sentiment");
    //
    //     console.log("the response header is: " + rHeader);
    //
    //     if(http.readyState == 4 && http.status == 200) {
    //         console.log("The response text is: " + this.responseText);
    //         return http.responseText;
    //     }
    // };

    // http.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //         console.log("The response is: " + this.responseType);
    //     }
    // });
    //
    // http.send(null);
}


// window.onclick = () => {
//     console.log("onclick called---------------------------")
//     checkPIIFields();
// };


function checkPIIFields(){
    console.log("PII Extension Go")
    var url = window.location.href;
    console.log("The url is: " + url);
    // console.log("The count of the elements are: " + $("*").length)
    var allInputs = $(":input");
    // console.log("Count of input elements: " + allInputs.length);
    var i;
    for (i = 0; i < allInputs.length; ++i) {
        // console.log("Attributes length at index " + i + " is --> " + allInputs[i].attributes.length);
        var elementAttr = allInputs[i].attributes;
        var j;
        for (j = 0; j < elementAttr.length; ++j) {
            // console.log("Attr Name: " + elementAttr[j].name + " Attr Value: " + elementAttr[j].value);
            var value = elementAttr[j].value;

            if(email === false){
                email = checkForEmail(value);
            }

            if(firstName === false) {
                firstName = checkForFirstName(value);
            }

            if(middleName === false){
                middleName = checkForMiddleName(value);
            }

            if(lastName === false){
                lastName = checkForLastName(value);
            }

            if(mobileNumber === false) {
                mobileNumber = checkForPhoneOrMobileNumber(value);
            }

            if(age == false) {
              age = checkForAge(value);
            }

            if(gender == false){
              gender = checkForGender(value);
            }

            if(passport == false){
              passport = checkForPassport(value);
            }

            if(drivingLicense == false){
              drivingLicense = checkForDrivingLicense(value);
            }

            if(cc == false){
              cc = checkForCC(value);
            }

            if(address == false){
              address = checkForAddress(value);
            }

            if(postCode == false){
              postCode = checkForPostCode(value);
            }

            if(nationality == false){
              nationality = checkForNationality(value);
            }

            if(country == false) {
              country = checkForCountry(value);
            }

            if(city == false){
              city = checkForCity(value);
            }

            console.log("Email -->>" + email);
            console.log("firstName -->>" + firstName);
            console.log("middleName -->>" + middleName);
            console.log("lastName -->>" + lastName);
            console.log("mobileNumber -->>" + mobileNumber);

            console.log("age -->>" + age);
            console.log("gender -->>" + gender);
            console.log("passport -->>" + passport);
            console.log("driving license -->>" + drivingLicense);
            console.log("cc -->>" + cc);
            console.log("address -->>" + address);
            console.log("post code -->>" + postCode);
            console.log("nationality -->>" + nationality);

            console.log("country -->>" + country);
            console.log("city -->>" + city);

        }
    }

    // var allSpan = $( "span" );
    // console.log("Count of span elements: " + allSpan.length);
    // var k;
    // for(k = 0; i <= allSpan.length; ++k)
    // {
    //     if(allSpan[k]){
    //
    //         console.log("Span text at index " + k + " is --> " + allSpan[k].innerText);
    //         var valueTwo = allSpan[k].innerText;
    //
    //         if(email === false){
    //             email = checkForEmail(valueTwo);
    //         }
    //
    //         if(firstName === false) {
    //             firstName = checkForFirstName(valueTwo);
    //         }
    //
    //         if(middleName === false){
    //             middleName = checkForMiddleName(valueTwo);
    //         }
    //
    //         if(lastName === false){
    //             lastName = checkForLastName(valueTwo);
    //         }
    //
    //         if(mobileNumber === false) {
    //             mobileNumber = checkForPhoneOrMobileNumber(valueTwo);
    //         }
    //     }
    // }

    piiObject = new PIIDetails(window.location.href, email, firstName, middleName, lastName, mobileNumber, age, gender, passport, drivingLicense, cc, address, postCode, nationality, country, city, uid);
    savePII(piiObject);
}


function checkForEmail(text) {
    let emailRegex = /e.?mail.|メールアドレス|Электронной.?Почты|邮件|邮箱|電郵地址|(이메일|전자.?우편|[Ee]-?mail)(.?주소)?/;

    if (emailRegex.test(text)) {
        console.log("Email exists!!!");
        localStorage.setItem(window.location.href+ "|Email", "true");
        return true;
    }

    return false;
}

function checkForFirstName(text) {
    let firstNameRegex = /first.*name|initials|fname|first$|vorname|nombre|forename|prénom|prenom|名|nome|Имя|이름/;

    if (firstNameRegex.test(text)) {
        console.log("First name exists!!!");
        localStorage.setItem(window.location.href+ "|FirstName", "true");
        return true;
    }

    return false;
}

function checkForMiddleName(text) {
    let middleNameRegex = /middle.*name|mname|middle$|apellido.?materno|lastlastname/;

    if (middleNameRegex.test(text)) {
        console.log("Middle name exists!!!");
        localStorage.setItem(window.location.href+ "|MiddleName", "true");
        return true;
    }

    return false;
}

function checkForLastName(text) {
    let lastNameRegex = /last.*name|lname|surname|last$|secondname|nachname|apellido|famille|^nom|cognome|姓|morada|apelidos|surename|sobrenome|Фамилия|성[^명]?/;

    if (lastNameRegex.test(text)) {
        console.log("Last name exists!!!");
        localStorage.setItem(window.location.href+ "|LastName", "true");
        return true;
    }

    return false;
}

function checkForPhoneOrMobileNumber(text) {
    let phoneOrMobileNumberRegex = /phone|mobile|telefonnummer|telefono|teléfono|telfixe|電話|telefone|telemovel|телефон|电话|(전화|핸드폰|휴대폰|휴대전화)(.?번호)?/;

    if (phoneOrMobileNumberRegex.test(text)) {
        console.log("Phone or Mobile Number exists!!!");
        localStorage.setItem(window.location.href+ "|PhoneNumber", "true");
        return true;
    }

    return false;
}

function checkForAddress(text) {
    let addressRegex = /address.*line|address1|addr1|street|strasse|straße|hausnummer|housenumber|house.?name|direccion|dirección|adresse|indirizzo|住所1|morada|endereço|Адрес|地址|주소.?1/;

    if (addressRegex.test(text)) {
        console.log("Address exists!!!");
        localStorage.setItem(window.location.href+ "|Address", "true");
        return true;
    }

    return false;
}

function checkForCountry(text) {
    let countryRegex = /country|countries|location|país|pais|国|国家|국가|나라/;

    if (countryRegex.test(text)) {
        console.log("Country exists!!!");
        localStorage.setItem(window.location.href+ "|Country", "true");
        return true;
    }

    return false;
}

function checkForCity(text) {
    let cityRegex = /county|land|county|principality|region|province|city|town|\\bort\\b|stadt|suburb|ciudad|provincia|localidad|poblacion|ville|commune|localita|市区町村|cidade|Город|市|分區|^시[^도·・]|시[·・]?군[·・]?구/;

    if (cityRegex.test(text)) {
        console.log("City exists!!!");
        localStorage.setItem(window.location.href+ "|City", "true");
        return true;
    }

    return false;
}

function checkForPostCode(text) {
    let postCodeRegex = /zip|postal|post.*code|pcode|^1z$|postleitzahl|\\bcp\\b|\\bcdp\\b|\\bcap\\b|郵便番号|codigo|codpos|\\bcep\\b|Почтовый.?Индекс|邮政编码|邮编|郵遞區號|우편.?번호/;

    if (postCodeRegex.test(text)) {
        console.log("Post code exists!!!");
        localStorage.setItem(window.location.href+ "|PostCode", "true");
        return true;
    }

    return false;
}

function checkForAge(text) {
    let ageRegex = /birthday|age|عمر|年龄|Años|Возраст|Era|Âge|年齢|나이|Leeftijd|DOB|Fecha de nacimiento|дата рождения|生年月日|생년월일|geboortedatum/;

    if (ageRegex.test(text)) {
        console.log("Age exists!!!");
        localStorage.setItem(window.location.href+ "|Age", "true");
        return true;
    }

    return false;
}

function checkForGender(text) {
    let genderRegex = /جنس|gender|性别|Género|Пол|Gênero|Le genre|性別|성별|Geslacht/;

    if (genderRegex.test(text)) {
        console.log("Gender exists!!!");
        localStorage.setItem(window.location.href+ "|Gender", "true");
        return true;
    }

    return false;
}


function checkForPassport(text) {
    let passportRegex = /passport|رقم جواز السفر|护照号码|Número de pasaporte|Номер паспорта|Número do passaporte|パスポート番号|여권 번호|Paspoortnummer/;

    if (passportRegex.test(text)) {
        console.log("Passport exists!!!");
        localStorage.setItem(window.location.href+ "|Passport", "true");
        return true;
    }

    return false;
}

function checkForDrivingLicense(text) {
    let licenseRegex = /رخصة قيادة|driving.*license|驾驶执照|Licencia de conducir|Водительские права|Carteira de motorista|Permis de conduire|運転免許証|운전 면허증|Rijbewijs/;

    if (licenseRegex.test(text)) {
        console.log("Driving License exists!!!");
        localStorage.setItem(window.location.href+ "|Driving License", "true");
        return true;
    }

    return false;
}

function checkForNationality(text) {
    let nationalityRegex = /nationality|الجنسية|国籍|Nacionalidad|Национальность|Nacionalidade|Nationalité|国籍|국적|Nationaliteit/;

    if (nationalityRegex.test(text)) {
        console.log("Nationality exists!!!");
        localStorage.setItem(window.location.href+ "|Nationality", "true");
        return true;
    }

    return false;
}

function checkForCC(text) {
    let ccRegex = /card.?number|card.?#|card.?no|cc.?num|acct.?num||nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드/;

    if (ccRegex.test(text)) {
        console.log("Credit card exists!!!");
        localStorage.setItem(window.location.href+ "|Credit card", "true");
        return true;
    }

    return false;
}


function savePII(piiObject){
    console.log("Inside SAVE PII function -- >>>>");
    // const userAction = async () => {
    //     const response = await fetch('http://localhost:8081/tvs-core/api/v1/dashboard/pii', {
    //         method: 'POST',
    //         body: piiObject, // string or object
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwiZm5hbWUiOiJUVlMgQWRtaW4iLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJ1c2VyX25hbWUiOiJhZG1pbiIsInVwciI6IlNVX0FETUlOIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sInJ0X2V4cGlyeSI6NjA0ODAwLCJleHAiOjE1NzUzOTgzMDcsImF1dGhvcml0aWVzIjpbIlN1cGVyIEFkbWluIl0sImp0aSI6IjJiNzI0YTQwLWZiMTMtNDMzMy05YjI0LTg4MzgwOGZlYTI0MCIsImVtYWlsIjoidHZzLmFkbWluQGRub3cuY29tIiwiY2xpZW50X2lkIjoiZG5vdy10dnMtY2xpZW50In0.aRYcnVp9ATLe_83x6raKKy0ClaG6usY2-VV4r9qOCfE'
    //         }
    //     });
    //     const myJson = await response.json(); //extract JSON from the http response
    //     console.log(myJson);
    // }

    console.log("PII siteName --->>" + piiObject.siteName);
    console.log("PII email --->>" + piiObject.isEmail);
    console.log("PII firstname --->>" + piiObject.isFirstName);
    console.log("PII middlename --->>" + piiObject.isMiddleName);
    console.log("PII lastname --->>" + piiObject.isLastName);
    console.log("PII number --->>" + piiObject.isNumber);

    var http = new XMLHttpRequest();
    var url = 'http://localhost:8080/site-details/api/pii?siteUrl=' + piiObject.siteName + '&email=' + piiObject.isEmail
    + '&firstName=' + piiObject.isFirstName + '&middleName=' + piiObject.isMiddleName + '&lastName=' + piiObject.isLastName + '&number=' + piiObject.isNumber
    + '&age=' + piiObject.age + '&gender=' + piiObject.gender + '&passport=' + piiObject.passport + '&license=' + piiObject.drivingLicense
    + '&cc=' + piiObject.creditCard + '&address=' + piiObject.address + '&postCode=' + piiObject.postCode
    + '&nationality=' + piiObject.nationality + '&country=' + piiObject.country + '&city=' + piiObject.city;


    console.log("Custom made URL is ------>>><><><>" + url);

    http.open('POST', url, true);

    //Send the proper header information along with the request
    // http.setRequestHeader('Content-type', 'application/json');
    // http.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwiZm5hbWUiOiJUVlMgQWRtaW4iLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJ1c2VyX25hbWUiOiJhZG1pbiIsInVwciI6IlNVX0FETUlOIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sInJ0X2V4cGlyeSI6NjA0ODAwLCJleHAiOjE1NzU0MTQwMjcsImF1dGhvcml0aWVzIjpbIlN1cGVyIEFkbWluIl0sImp0aSI6IjM1YzQyYWY2LTdkMjUtNDAxYy1hYjIzLWM2ZDI3ZmEzYzJhZiIsImVtYWlsIjoidHZzLmFkbWluQGRub3cuY29tIiwiY2xpZW50X2lkIjoiZG5vdy10dnMtY2xpZW50In0.9-ZsH4wbAaLmYl9USibOcMv6CS_2MRIhFL9m0UXFk1M');
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    };

    console.log("PII Object is -->>>>>" + piiObject);

    http.send(null);
}
