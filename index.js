function inserirAluno(total_faltas) {
    let matricula = prompt("Insira a Matricula: ")
    let nome = prompt("Digite seu nome: ")
    let qt_faltas = parseInt(prompt("Digite a qunatidade de faltas: "))
    let nota_b1 = parseFloat(prompt("Nota B1: "))
    let nota_b2 = parseFloat(prompt("Nota B2: "))
    let media = (nota_b1 + nota_b2) / 2;
    let percentual_faltas = qt_faltas / parseInt(total_faltas);
    let prova_final = "n/a";
    let media_final = "n/a";
    let situacao = "n/a";
    if(percentual_faltas > 0.25){
        situacao = "Reprovado por Faltas";
        prova_final = "n/a";
        media_final = "n/a";
    }else{
        if(media >= 7){
            situacao = "Aprovado";
            prova_final = "n/a";
            media_final = media;
        } else {
            prova_final = parseFloat(prompt("Digite a nota da Prova de Recuperacao: "))
            media_final = parseFloat((prova_final + media) / 2);
            if(media_final > 5){
                situacao = "Aprovado";
            } else{
                situacao = "Reprovado por Nota";
            }
        }
    }

    let tabela = document.querySelector('#tabela');

    let novalinha = tabela.insertRow();

    novalinha.insertCell(0).innerText = matricula;
    novalinha.insertCell(1).innerText = nome;
    novalinha.insertCell(2).innerText = qt_faltas;
    novalinha.insertCell(3).innerText = nota_b1;
    novalinha.insertCell(4).innerText = nota_b2;
    novalinha.insertCell(5).innerText = media;
    novalinha.insertCell(6).innerText = prova_final;
    novalinha.insertCell(7).innerText = media_final;
    novalinha.insertCell(8).innerText = situacao;
    
    
    
    
    
    
    
    
}