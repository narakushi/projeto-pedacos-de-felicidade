
function validarFormulario() {
    var nome = document.querySelector('input[placeholder="Nome Completo"]').value;
    var email = document.querySelector('input[placeholder="E-mail"]').value;
    var senha = document.querySelector('input[placeholder="Senha"]').value;
    var confirmarSenha = document.querySelector('input[placeholder="Confirme Senha"]').value;
    var termosCheckbox = document.querySelector('input[type="checkbox"]');
  
  
    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
      alert('Preencha todos os campos.');
      return false;
    }
  
    
    if (senha !== confirmarSenha) {
      alert('A senha e a confirmação de senha não correspondem.');
      return false;
    }

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.match(emailRegex)) {
  alert('Por favor, insira um endereço de e-mail válido.');
  return false;
}

    
    if (!termosCheckbox.checked) {
      alert('Você deve concordar com os termos de política e privacidade.');
      return false;
    }
  
  
    alert('Cadastro realizado com sucesso!');
    return true;
  }
  
   var formulario = document.querySelector('.form');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    validarFormulario();
  });
  