function calcular() {
    let genero = document.getElementById('genero')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let idade = document.getElementById('idade')
    let objetivo = document.getElementById('objetivo')
    let at = document.getElementById('atividade')
    let atividade = Number(at.value)
    let res = document.getElementById('res')

    let basal = {homem: (9.99 * peso.value) + (6.25 * altura.value) - (4.92* idade.value) + 5, mulher:(9.99 * peso.value) + (6.25 * altura.value) - (4.92* idade.value) - 161}
    let diario = {fem: basal.mulher * atividade, masc: basal.homem * atividade}

    let valorIMC = peso.value / ((altura.value / 100)* (altura.value / 100).toFixed(2))
    


    if (genero == 0 || peso.value == 0 || altura.value == 0 || idade.value == 0 || objetivo == 0 || atividade == 0) {
        alert('Por favor, preencha todos os campos!')
    } else if (genero.value == 'mulher') {
        res.innerHTML = `<p>O seu gasto basal diário é de <strong>${basal.mulher.toFixed(0)}</strong> kcal.</p>`
        if (objetivo.value == 'emagrecer-rapido') {
            res.innerHTML += `<p>Para emagrecer rapidamente, você precisa consumir <strong>${(diario.fem * 0.80).toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'emagrecer') {
            res.innerHTML += `<p>Para emagrecer, você precisa consumir <strong>${(diario.fem * 0.90).toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'manter') {
            res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir <strong>${diario.fem.toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'ganhar') {
            res.innerHTML += `<p>Para ganhar peso, você precisa consumir <strong>${(diario.fem * 1.1).toFixed(0)}</strong> kcal por dia.</p>`
        } else {
            res.innerHTML += `<p>Para ganhar peso rapidamente, você precisa consumir <strong>${(diario.fem * 1.2).toFixed(0)}</strong> kcal por dia.</p>`
        }
    } else {
            res.innerHTML = `<p>O seu gasto basal diário é de <strong>${basal.homem.toFixed(0)}</strong> kcal.</p>`
            if (objetivo.value == 'emagrecer-rapido') {
                res.innerHTML += `<p>Para emagrecer rapidamente, você precisa consumir <strong>${(diario.masc * 0.80).toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'emagrecer') {
                res.innerHTML += `<p>Para emagrecer, você precisa consumir <strong>${(diario.masc * 0.90).toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'manter') {
                res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir <strong>${diario.masc.toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'ganhar') {
                res.innerHTML += `<p>Para ganhar peso, você precisa consumir <strong>${(diario.masc * 1.1).toFixed(0)} </strong>kcal por dia.`
            } else {
                res.innerHTML += `<p>Para ganhar peso rapidamente, você precisa consumir <strong>${(diario.masc * 1.2).toFixed(0)}</strong> kcal por dia.</p>`
            }
            
        
        } 
        if (genero == 0 || peso.value == 0 || altura.value == 0 || idade.value == 0 || objetivo == 0 || atividade == 0) {
            res.innerHTML = ''
        }else if (valorIMC < 17) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está <strong>muito abaixo do peso</strong></p>`
        } else if (valorIMC < 18.5) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está <strong>abaixo do peso</strong></p>`
        } else if (valorIMC < 25) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está no <strong>peso normal</strong></p>`
        } else if (valorIMC < 30) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está <strong>acima do peso</strong></p>`
        } else if (valorIMC < 35) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está com <strong>Obesidade grau I</strong></p>`
        } else if (valorIMC < 40) {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está com <strong>Obesidade grau II</strong></p>`
        } else {
            res.innerHTML += `<p>Seu IMC é de <strong>${valorIMC.toFixed(2)}</strong> e você está com <strong>Obesidade grau III</strong></p>`
        }
    } 