function enviar () {

    //Chamando os ids dos inputs
    const total = document.getElementById("total").value
    const fii1 = document.getElementById("fii1").value
    const fii2 = document.getElementById("fii2").value
    const valor1 = document.getElementById("valor1").value
    const valor2 = document.getElementById("valor2").value
    const dy1 = document.getElementById("dy1").value
    const dy2 = document.getElementById("dy2").value
    var totalDivid2 = parseFloat(total) / 2
    const valorInvestido = total
    
    //Calculos 
    var divisaoCota1 = parseInt(totalDivid2 / parseFloat(valor1))
    console.log(divisaoCota1)
    var divisaoCota2 = parseInt(totalDivid2 / parseFloat(valor2))
    console.log(divisaoCota2)
    var rendimentoCota1 = parseFloat(parseFloat(valor1) * divisaoCota1 * (parseFloat(dy1/100)))
    console.log(rendimentoCota1)
    var rendimentoCota2 =parseFloat(parseFloat(valor2) * divisaoCota2 * (parseFloat(dy2/100)))
    console.log(rendimentoCota2)
    var rendimentoMensal = rendimentoCota1 + rendimentoCota2
    var totalCotas = divisaoCota1 + divisaoCota2

    //exibindo na tela
    document.getElementById("resultado1").innerHTML = `O número de cotas da ${fii1} é ${divisaoCota1}`
    document.getElementById("rend1").innerHTML = `O Rendimento mensal da ${fii1} é ${rendimentoCota1.toFixed(2)}`
    document.getElementById("resultado2").innerHTML = `O número de cotas da ${fii2} é ${divisaoCota2}`
    document.getElementById("rend2").innerHTML = `O Rendimento mensal da ${fii2} é ${rendimentoCota2.toFixed(2)}`
    document.getElementById("soma_rend_mes").innerHTML = `O rendimendo total do mês é: ${rendimentoMensal.toFixed(2)}`
    document.getElementById("total_cotas").innerHTML = `O Número total de cotas compradas foram: ${totalCotas}`
}
