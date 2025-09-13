function eVazio(_str) {
if (_str == null || _str == "")
return true;
return false;
}

function validar(form) {
if (eVazio(form.nome.value)) {
alert('Nome deve ter um valor');
return false;
}

Enviar(form);
return true;
}
function somenteNumero(event) {

if (isNaN(event.key) && event.key !== 'Backspace') {
event.preventDefault();
return false;
}
return true;
}

function Enviar(form) {
saida = " <h1>Exibindo os Dados do Aluno:</h1>";
saida = saida + "<br>AlunoId: " + form.alunoId.value;
saida = saida + "<br>Nome: " + form.nome.value;
saida = saida + "<br>Curso: " + form.curso.value;
saida = saida + "<br>CPF: " + form.CPF.value;
document.write(saida);
}
