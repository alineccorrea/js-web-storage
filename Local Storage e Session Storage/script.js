function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === '' || email === '' || message === ''){
        alert("Todos os campos são obrigatórios.");
        return false; // Interrompe a execução da submissão do formulário
    }

    if(name.length < 3 || name.length > 50){
        alert("O nome deve ter entre 3 e 50 caracteres.");
        return false;
    }

    if(email.length < 5 || email.length > 50){
        alert("O email deve ter entre 5 e 50 caracteres.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)){
        alert("Por favor, insira um valor de e-mail válido.");
        return false;
    }

    return true; // Para confirmar a submissão do formulário
}

document
    .getElementById("contactForm")
    .addEventListener("submit",function(event){
        // Evento preventDefault() vai paralisar a submissão do formulário
        event.preventDefault();
        // Submissão paralizada, chamamos a função que valida os campos enviados
        if(validateForm()) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const storageOption = document.querySelector('input[name="storage"]:checked').value;

            if(storageOption === "local")
            {
                // Aqui é onde está armazenando no Local Storage localStorage.setItem("nomeDoItem",valor);
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("message",message);
                alert("Formulário enviado com sucesso e dados armazenados no Local Storage.");
            } else if(storageOption === "session"){
                //Aqui é onde está armazenando no Session Storage sessionStorage.setItem("nomeDoItem",valor);
                sessionStorage.setItem("name",name);
                sessionStorage.setItem("email",email);
                sessionStorage.setItem("message",message);
                alert("Formulário enviado com sucesso e dados armazenados no Session Storage.");
            }
        }
    });

    // Mostrar dados do Local Storage
    document.getElementById('showLocalStorage').addEventListener('click',function(){
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const message = localStorage.getItem("message");

        if(name || email || message){
            document.getElementById("localStorageData").innerHTML = `
            <h2>Local Storage:</h2>
            <p><strong>Nome: ${name} </strong></p>
            <p><strong>Nome: ${email} </strong></p>
            <p><strong>Nome: ${message} </strong></p>
            <button id="clearLocalStorage">Limpar Local Storage</button>
            `;
            document.getElementById("localStorageData").style.display = "block";
            document.getElementById("clearLocalStorage").addEventListener('click',function(){
                localStorage.clear();
                alert("Dados do Local Storage removidos com sucesso!");
                document.getElementById("localStorageData").style.display = "none";
            });
        }
    });
    
    // Mostrar dados do Session Storage
    document.getElementById('showSessionStorage').addEventListener('click',function(){
        const name = sessionStorage.getItem("name");
        const email = sessionStorage.getItem("email");
        const message = sessionStorage.getItem("message");

        if(name || email || message){
            document.getElementById("sessionStorageData").innerHTML = `
            <h2>Session Storage:</h2>
            <p><strong>Nome: ${name} </strong></p>
            <p><strong>Nome: ${email} </strong></p>
            <p><strong>Nome: ${message} </strong></p>
            <button id="clearSessionStorage">Limpar Session Storage</button>
            `;
            document.getElementById("sessionStorageData").style.display = "block";
            document.getElementById("clearSessionStorage").addEventListener('click',function(){
                sessionStorage.clear();
                alert("Dados do Session Storage removidos com sucesso!");
                document.getElementById("sessionStorageData").style.display = "none";
            });
        }
    });

    // Botão clearSession
    document.getElementById("clearSession").addEventListener('click',function(){
        localStorage.clear();
        sessionStorage.clear();
        alert("Dados do Local e Session Storage removidos com sucesso!");
        document.getElementById("sessionStorageData").style.display = "none";
        document.getElementById("localStorageData").style.display = "none";
    });
