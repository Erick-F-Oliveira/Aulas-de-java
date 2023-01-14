function cadastro() {
  var nameComplet = document.getElementById("nome").value;
  var mail = document.getElementById("email").value;
  var phoneNumb = document.getElementById("telefone").value;
  var cpfNumb = document.getElementById("cpf").value;
  var password = document.getElementById("pass").value;
  

  var erroName = document.getElementById("avisoNome");
  var erroMail = document.getElementById('avisoMail');
  var erroPhone = document.getElementById("avisoPhone");
  var erroCpf = document.getElementById('avisoCpf');
  var erroSenha = document.getElementById('avisoSenha');
  var erroFinal = document.getElementById("avisoFinal");

  if (nameComplet == ""){
      erroName.style.color = "red"
      erroName.innerHTML = `Campo obrigatório`      
    }             
    
  if(mail == ""){
      erroMail.style.color = "red"
      erroMail.innerHTML = `Campo obrigatório`
    }
  if(phoneNumb == ""){
    erroPhone.style.color = "red"
    erroPhone.innerHTML = `Campo obrigatório`
  }

  if(cpfNumb == ""){
    erroCpf.style.color = "red"
    erroCpf.innerHTML = `Campo obrigatório`
  }   

  if(password == ""){
    erroSenha.style.color = "red"
    erroSenha.innerHTML = `Campo obrigatório`
  } 

  if(nameComplet == "" || mail == "" || phoneNumb == "" || cpfNumb == "" || password == ""){
    erroFinal.style.color = "red"
    erroFinal.innerHTML = `Campos obrigatórios não preenchidos.`
  }  
  else {
  erroFinal.style.color = "green"
  erroFinal.innerHTML = `Cadastro realizado com sucesso! &#10004;`
}
}
 console.log(`22225`)
  
