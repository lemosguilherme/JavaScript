function verificar(){
    var dataAtual = new Date()
    var anopessoa = document.querySelector("#ano").value
    var anoAtual = dataAtual.getFullYear()
    var idade = anoAtual - anopessoa
    var sex = document.getElementsByName("sexo")
    var genero = ""
    var resposta = document.querySelector("#resposta")
    var main = document.querySelector("main")
    var imagem = document.querySelector(".imagem")
    if (anopessoa == 0){
        alert("Prencha o ano de nascimento")
    }
    else if (anopessoa < 1900 || anopessoa > anoAtual){
        alert("ERRO. Número inválido")
    }
    else{
        if (sex[0].checked) {
            genero = "Homem"
            resposta.innerHTML = `${genero} com ${idade} anos`
            main.style.height = "200px"
           if (idade <=15) {
            imagem.style.backgroundImage = "url('imagem/m-crianca.jpg')"
            main.style.height = "530px"
            imagem.style.backgroundPosition = "right center"
           }
           else if (idade<=30){
            imagem.style.backgroundImage = "url('imagem/m-jovem.jpg')"
            main.style.height = "530px"
            imagem.style.backgroundPosition = "top center"
           }
           else if (idade<=60){
            imagem.style.backgroundImage = "url('imagem/m-adulto.jpg')"
            main.style.height = "530px"
            imagem.style.backgroundPosition = "left center"
           }
           else {
            imagem.style.backgroundImage = "url('imagem/m-idoso.jpg')"
            main.style.height = "530px"
            imagem.style.backgroundPosition = "center center"
           }
           
        }
        else if (sex[1].checked){
            genero = "Mulher"
            resposta.innerHTML = `${genero} com ${idade} anos`
            main.style.height = "200px"
            if (idade<=15){
                imagem.style.backgroundImage = "url('imagem/f-crianca.jpg')"
                main.style.height = "530px"
            }
            else if (idade<=30){
                imagem.style.backgroundImage = "url('imagem/f-jovem.jpg')"
                main.style.height = "530px"
                imagem.style.backgroundPosition = "center center"
            }
            else if (idade<=60){
                imagem.style.backgroundImage = "url('imagem/f-adulta.jpg')"
                main.style.height = "530px"
                imagem.style.backgroundPosition = "center center"
            }
            else {
                imagem.style.backgroundImage = "url('imagem/f-idosa.jpg')"
                main.style.height = "530px"
                imagem.style.backgroundPosition = "top center"
            }
        }
        else{
            alert("Preencha o sexo")
        }
    }   
        
}
