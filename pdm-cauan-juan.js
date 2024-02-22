//valida aluno certo
const alunoValido = {
    nome: "Marcelo siqueira",
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2022-02-01", "2022-02-02", "2022-02-03", "2022-02-04", "2022-02-05", "2022-02-06", "2022-02-07", "2022-02-08", "2022-02-09", "2022-02-10"],
    ra: "2210162"
}
//valida aluno errado
const alunoInvalido = {
    nome: "Marcelo siqueira",
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2022-02-01",],
    ra: "2210162"
} 



console.log(validarCadastro(alunoValido))
console.log(validarCadastro(alunoInvalido))

//valida a presenca do aluno 
function validarPresenca(presenca){
const message ={
    status:"valido",
    message:["o aluno não possui presença o suficiente"],
    aluno: alunoCerto
}

}
// cria uma funcao 
function validarCadastro(aluno) {
    const message = {
        status: "valido",
        message:[],
        aluno
    } 
//valida a quantidade de letras no nome do aluno 
    if (aluno.nome.length < 10) {
        return {
           status : "erro",
           Message: "quantidade de caracteres do nome é invalida",
            aluno: aluno
        }
    }
    //verifica a idade do aluno
    if (aluno.idade <= 14) {
        return {
            status: "erro",
            Message: "a idade do aluno é invalida",
            aluno: aluno
        }
    }
    //verifica quantos cursos o aluno esta fazendo 
    if (aluno.cursando.length < 3) {
        return {
            status: "erro",
            message: "a quantidade de materias não é funcional",
            aluno: aluno
        }  
    }
//verifica o numero de presença do aluno 
    if (aluno.presenca.length < 2) {
        return{
            status: "erro",
            message: "o aluno não permaneceu no minimo de aulas",
            aluno: aluno
        }
    }
//verifica se o numero de ra do aluno é valido 
    if (aluno.ra.length == 7){
        return{
           status :"erro",
            message : " o ra do aluno não possui/ultrapassa o numero de caracteres",
            aluno: aluno
        }

    }
     return{

     }
     
