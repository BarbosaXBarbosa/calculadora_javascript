function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação(*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');

    if (!operacao || operacao >= 7) {
            alert('Erro - operação inválida!');
            calculadora();
        } else {
            let n1 = Number(prompt('Insira o Primeiro valor:'));
            let n2 = Number(prompt('Insira o Segunda valor:'));
            let resultado;
        
            if (!n1 ||!n2) {
                alert('Erro - parâmetros inválido');
                calculadora()
            }else {
                function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaoperaçao()
                }
                function subtração() {
                    resultado = n1 + n2;
                    alert(`${n1} - ${n2} = ${resultado}`)
                    novaoperaçao()
                }
                function multiplicação() {
                    resultado = n1 * n2;
                    alert(`${n1} * ${n2} = ${resultado}`)
                    novaoperaçao()
                }
                function divisaoreal() {
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`)
                    novaoperaçao()
                }
                function divisaointeira() {
                    resultado = n1 % n2;
                    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                    novaoperaçao()
                }
                function potenciacao() {
                    resultado = n1 ** n2;
                    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                    novaoperaçao()
                }
        

                function novaoperaçao() {
                    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                    
                    if (opcao == 1) {
                        calculadora();
                    }
                    else if (opcao == 2) {
                        alert('Até mais!');
                    }
                    else {
                        alert('Digite uma opção válida!')
                        novaoperaçao();
                    }
                }
                }
            }

    if (operacao == 1) {
        soma();
    }else if (operacao == 2) {
        subtração();
    }else if (operacao == 3) {
        multiplicação();
    }else if (operacao == 4) {
        divisaoreal();
    }else if (operacao == 5) {
        divisaointeira();
    }else if (operacao == 6) {
        potenciacao();
    }
}
    
calculadora();