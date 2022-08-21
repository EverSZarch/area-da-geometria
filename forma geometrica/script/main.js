var div_ico = document.getElementById('icones')
var base = document.getElementById('base')
var altura = document.getElementById('altura')
var diam = document.getElementById('diametro')
var raio = document.getElementById('raio')
var res = document.getElementById('res')

let calcule =[
document.getElementById('calculo'),
document.getElementById('cal_c'),
document.getElementById('cal_t')
]
for(let h in calcule){
    calcule[h].style.display = 'none'
    calcule[h].onclick = function calculo(){
            if(h == 0){
                if(base.value == 0 || altura.value == 0){
                    alert('Preencha todos os campos')
                }
                else if(base.value > 0 && altura.value > 0){
                    res.innerHTML = parseFloat(base.value) * parseFloat(altura.value);
                }
                else{
                    alert('Revise, dados errados')
                }
            }
            else if(h == 1){
               
                if(diam.value > 0 && raio.value > 0){
                    alert('Preencha apenas um campo');
                }
                else if(diam.value > 0){
                    res.innerHTML = (parseFloat(diam.value) * parseFloat(diam.value) * 3.14) / 4;
                }
              
                else if(raio.value > 0){
                    res.innerHTML = parseFloat(raio.value) * parseFloat(raio.value) * 3.14;
                }
                else{
                    alert('Revise, dados errados')
                }
                
            }
            else if(h == 2){
                if(base.value == 0 || altura.value == 0){
                    alert('Preencha todos os campos')
                }
                else if(base.value > 0 && altura.value > 0){
                    res.innerHTML = (parseFloat(base.value) * parseFloat(altura.value)) / 2;
                }
                else{
                    alert('Revise, dados errados')
                }
            }
        
    }
}

let esconde_input=[
    document.getElementById('quadra'),
    document.getElementById('retan'),
    document.getElementById('parale'),
    document.getElementById('trian')
]

for(let esconde in esconde_input){ 
    esconde_input[esconde].onclick = function esconder(){
       
        document.getElementById('circulo').style.display ='none'
        document.getElementById('selecao').style.display ='none'
        let icone_t = document.createElement('img')
        if(esconde == 3){
            icone_t.src = `imagens/triangulo.png`
            div_ico.append(icone_t);
            calcule[2].style.display = '' 
        }
        else if(esconde == 2){
            icone_t.src = `imagens/paralelogramo.png`
            div_ico.append(icone_t);
            calcule[0].style.display = ''
        }
        else if(esconde == 1){
            icone_t.src = `imagens/retangulo.png`
            div_ico.append(icone_t);
            calcule[0].style.display = ''
        }
        else if(esconde == 0){
            icone_t.src = `imagens/quadrada.png`
            div_ico.append(icone_t);
            calcule[0].style.display = ''
        }
    }  
}

function circulo(){
    let icone_c = document.createElement('img')
    icone_c.src = `imagens/circulo.png`
    div_ico.append(icone_c)//o icone_c está associada com a div
    document.getElementById('b_a').style.display ='none'
    document.getElementById('selecao').style.display ='none'
    calcule[1].style.display = '' 
}
