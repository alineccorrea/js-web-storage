//Função para definir um cookie
function setCookie() {
    const name = document.getElementById('name').value;
    const days = 7;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = 'username=' + name + ';' + expires + ';path=/';
    displayWelcomeMessage();
}

//Função para obter um cookie pelo nome
function getCookie(name) {
    const nameEQ = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return '';
}

//Função para exibir a mensagem de boas-vindas
function displayWelcomeMessage() {
    const user = getCookie('username');
    const welcomeMessageDiv = document.getElementById('welcomeMessage');
    if (user != '') {
        welcomeMessageDiv.innerHTML = 'Bem vindo(a) de volta, ' + user + '!';
    } else {
        welcomeMessageDiv.innerHTML = '';
    }
}

//Função para deletar um cookie
function deleteCookie() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    displayWelcomeMessage();
}

window.onload = displayWelcomeMessage();