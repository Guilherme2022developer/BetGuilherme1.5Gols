

const p1 = document.getElementById('Partida1')

const p2 = document.getElementById('Partida2')

var p3 = document.querySelector('#Partida3')

var p4 = document.querySelector('#Partida4')

var p5 = document.querySelector('#Partida5')

var p6 = document.querySelector('#Partida6')

var p7 = document.querySelector('#Partida7')

var p8 = document.querySelector('#Partida8')

var p9 = document.querySelector('#Partida9')

var p10 = document.querySelector('#Partida10')

var result = document.querySelector('#result')
/////////////////////////////////////////////////////////////////////////////////////

var p1f = document.querySelector('#Partida1f')

var p2f = document.querySelector('#Partida2f')

var p3f = document.querySelector('#Partida3f')

var p4f = document.querySelector('#Partida4f')

var p5f = document.querySelector('#Partida5f')

var p6f = document.querySelector('#Partida6f')

var p7f = document.querySelector('#Partida7f')

var p8f = document.querySelector('#Partida8f')

var p9f = document.querySelector('#Partida9f')

var p10f = document.querySelector('#Partida10f')

var resultf = document.querySelector('#resultf')

const form = document.getElementById('form')

const input = document.getElementsByTagName('input')


form.addEventListener('submit', (e) => {
    e.preventDefault()

 somar();
})

function checkInputs() {

    const p1Value = p1.value.trim()

    if (p1Value === '') {
        setErrorFor(p1, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p1)
    }

    const p2Value = p2.value.trim()

    if (p2Value === '') {
        setErrorFor(p2, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p2)
    }

    const p3Value = p3.value.trim()

    if (p3Value === '') {
        setErrorFor(p3, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p3)
    }

    const p4Value = p4.value.trim()

    if (p4Value === '') {
        setErrorFor(p4, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p4)
    }
    const p5Value = p5.value.trim()
    if (p5Value === '') {
        setErrorFor(p5, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p5)
    }
    const p6Value = p6.value.trim()

    if (p6Value === '') {
        setErrorFor(p6, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p6)
    }
    const p7Value = p7.value.trim()

    if (p7Value === '') {
        setErrorFor(p7, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p7)
    }
    const p8Value = p8.value.trim()

    if (p8Value === '') {
        setErrorFor(p8, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p8)
    }
   const p9Value = p9.value.trim()

    if (p9Value === '') {
        setErrorFor(p9, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p9)
    }
    const p10Value = p10.value.trim()

    if (p10Value === '') {
        setErrorFor(p10, 'Preencha esse campo')
        
    } else{
        setSuccessFor(p10)
    }
//////////////////////////////////////////////////////////

const p1fValue = p1f.value.trim()

if (p1fValue === '') {
    setErrorFor(p1f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p1f)
}

const p2fValue = p2f.value.trim()

if (p2fValue === '') {
    setErrorFor(p2f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p2f)
}

const p3fValue = p3f.value.trim()

if (p3fValue === '') {
    setErrorFor(p3f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p3f)
}

const p4fValue = p4.value.trim()

if (p4fValue === '') {
    setErrorFor(p4f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p4f)
}
const p5fValue = p5f.value.trim()
if (p5fValue === '') {
    setErrorFor(p5f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p5f)
}
const p6fValue = p6.value.trim()

if (p6fValue === '') {
    setErrorFor(p6f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p6f)
}
const p7fValue = p7f.value.trim()

if (p7fValue === '') {
    setErrorFor(p7f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p7f)
}
const p8fValue = p8f.value.trim()

if (p8fValue === '') {
    setErrorFor(p8f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p8f)
}
const p9fValue = p9f.value.trim()

if (p9fValue === '') {
    setErrorFor(p9f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p9f)
}
const p10fValue = p10f.value.trim()

if (p10fValue === '') {
    setErrorFor(p10f, 'Preencha esse campo')
    
} else{
    setSuccessFor(p10f)
}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function somar() {

    result = parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value) + parseInt(p5.value) + parseInt(p6.value) + parseInt(p7.value) + parseInt(p8.value) +
        parseInt(p9.value) + parseInt(p10.value)
    result = result / 10;

    resultf = parseInt(p1f.value) + parseInt(p2f.value) + parseInt(p3f.value) + parseInt(p4f.value) + parseInt(p5f.value) + parseInt(p6f.value) + parseInt(p7f.value) + parseInt(p8f.value) +
        parseInt(p9f.value) + parseInt(p10f.value)
    resultf = resultf / 10;

    var resultado = result + resultf;

    if (resultado <= 3.6) {
        alert("Partida não aprovada, procurar outra por favor")
      

    } else {
        alert("A média de gols para essa partida é acima de 1.5 \n Probabilidade de mais de 80%")
       
    }
}
alert("Seja bem-vindo, meu é Guilherme o projeto funciona da seguinte forma: \n Você vai escolher uma partida de futebol e vai pegar o número de gols do time da casa marcados nos últimos 10 jogos inserir nos campos a abaixo, e o time de fora da mesma forma e clicar no botão ver  resultado, vamos lá?")





