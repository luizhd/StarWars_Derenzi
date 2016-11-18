$('.SelPessoas').on('click', function() {
	 var id_pessoa = $('#selecaoPessoas').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/'+ id_pessoa + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#InfPessoas");
divPerson.innerHTML = "";
divPerson.innerHTML +=
 "Nome: " + data.name +
 "<br/>Altura:" + data.height +
 "<br/>Ano Nasc.: " + data.birth_year + 
 "<br/>Genero: " + data.gender + 
 "<br/>";
}});
});

$('.SelPlanetas').on('click', function() {
	 var id_Planeta = $('#selecaoPlanetas').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/' + id_Planeta + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#InfPlanetas");
divPerson.innerHTML = "";
divPerson.innerHTML +=
 "Nome: " + data.name +
 "<br/>Rotacao:" + data.rotation_period +
 "<br/>Orbita: " + data.orbital_period + 
 "<br/>Populacao: " + data.population + 
 "<br/>";
}});
});

$('.SelNaves').on('click', function() {
	 var id_Naves = $('#selecaoNaves').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/' + id_Naves + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#InfNaves");
divPerson.innerHTML = "";
divPerson.innerHTML +=
 "Nome: " + data.name +
 "<br/>Modelo:" + data.model +
 "<br/>Fabricante: " + data.manufacturer + 
 "<br/>Passageiros: " + data.passengers + 
 "<br/>";
}});
});