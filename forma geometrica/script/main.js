var div_ico = document.getElementById('icones')
var base = document.getElementById('base')
var altura = document.getElementById('altura')
var diam = document.getElementById('diametro')
var raio = document.getElementById('raio')
var res = document.getElementById('res')
document.getElementById('calculo').style.display = 'none'
document.getElementById('cal_c').style.display = 'none'
document.getElementById('cal_t').style.display = 'none'


function circulo(){
    var icone_c = document.createElement('img')
    icone_c.src = `imagens/circulo.png`
    div_ico.append(icone_c)//o icone_c está associada com a div
    document.getElementById('b_a').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    document.getElementById('cal_c').style.display = '' 
}

function triangulo(){
    var icone_c = document.createElement('img')
    icone_c.src = `imagens/triangulo.png`
    div_ico.append(icone_c)
    document.getElementById('circulo').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    document.getElementById('cal_t').style.display = '' 
}

function quadrado(){
    var icone_c = document.createElement('img')
    icone_c.src = `imagens/quadrada.png`
    div_ico.append(icone_c)
    document.getElementById('circulo').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    document.getElementById('calculo').style.display = '' 
}

function retangulo(){
    var icone_c = document.createElement('img')
    icone_c.src = `imagens/retangulo.png`
    div_ico.append(icone_c)
    document.getElementById('circulo').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    document.getElementById('calculo').style.display = '' 
}

function paralelo(){
    var icone_c = document.createElement('img')
    icone_c.src = `imagens/paralelogramo.png`
    div_ico.append(icone_c)
    document.getElementById('circulo').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    document.getElementById('calculo').style.display = '' 
    
}

function calcular(){
    if(base.value > 0 && altura.value > 0){
    res.innerHTML = parseFloat(base.value) * parseFloat(altura.value);
    }
    else if(base.value == 0 || altura.value == 0){
        alert('dados incompletos')
    }

}

function cal_cir(){
    if(diam.value > 0 && raio.value > 0){
        alert('preencha apenas um campo! diametro ou raio')
    }

    else if(diam.value > 0){
        res.innerHTML = (parseFloat(diam.value) * parseFloat(diam.value) * 3.14) / 4;
    }
  
    else if(raio.value > 0){
        res.innerHTML = parseFloat(raio.value) * parseFloat(raio.value) * 3.14;
    }

    else{
        alert('Operação inválida! Verifique os campos novamente.')
    }
}

function cal_tri(){
    if(base.value > 0 && altura.value > 0){
        res.innerHTML = (parseFloat(base.value) * parseFloat(altura.value)) / 2;
        }
    else if(base.value == 0 || altura.value == 0){
        alert('dados incompletos')
    }
}