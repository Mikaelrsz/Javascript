function verificar() {
    const data = new Date();
    const anoAtual = data.getFullYear();
    
    const anoNasc = Number(document.getElementById('ano').value);
    const res = document.getElementById('res');
    
    if (anoNasc == 0 || anoNasc > anoAtual) {
        alert('[ERRO] Verifique o ano de nascimento e tente novamente!');
        return;
    }
    
    const idade = anoAtual - anoNasc;
    const sexo = document.querySelector('input[name="sexo"]:checked').id;
    
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if (sexo === 'mas') {
        genero = 'homem';
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'img/homem/homem-bb.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'img/homem/homem-jovem.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'img/homem/homem-adulto.png');
        } else {
            img.setAttribute('src', 'img/homem/homem-60.png');
        }
    } else {
        genero = 'mulher';
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'img/mulher/mulher-bb.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'img/mulher/mulher-jovem.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'img/mulher/mulher-adulta.png');
        } else {
            img.setAttribute('src', 'img/mulher/coroa-das-boas.png');
        }
    }
    
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`;
    res.appendChild(img);
}