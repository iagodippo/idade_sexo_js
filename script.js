function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // FullYear pra pegar os 4 digitos do ano.
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescenteM.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criançaF.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescenteF.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
