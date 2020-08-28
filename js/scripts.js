var iniciado = false;

var hora_inicio, hora_atual, tempo_passado, init_cronometro;

var horas, minutos, segundos, milissegundos, resto;



document.getElementById('comecar_parar').onclick = function () {

    if (!iniciado) {
        iniciado = true;
        document.getElementById('comecar_parar').innerHTML = "Parar";
        document.getElementById('comecar_parar').style['background-color'] = '#990100';

        if (!hora_inicio) {
            hora_inicio = new Date().getTime();
        }
        else {
            hora_inicio = new Date().getTime() - tempo_passado;
        }


        init_cronometro = window.setInterval(function () {

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

        
            milissegundos = resto;

           
            document.getElementById('cronometro').innerHTML = formatar_tempo(horas) + ' : ' + formatar_tempo(minutos) + ' : ' + formatar_tempo(segundos) + ' ' + formatar_tempo(milissegundos);
        }, 10);

    }

    else {
        window.clearInterval(init_cronometro);
        iniciado = false;

        document.getElementById('comecar_parar').innerHTML = "Começar";
        document.getElementById('comecar_parar').style['background-color'] = '#27ae61';

    }

}


document.getElementById('zerar').onclick = function () {
    tempo_passado = 0;
    hora_inicio = new Date().getTime();

    document.getElementById('cronometro').innerHTML = "00 : 00 : 00 000";
}



function formatar_tempo(time) {

    if (time < 10) {
        var tempo_formatado = time.toString();
        tempo_formatado = "0" + tempo_formatado;
    }

    else {
        var tempo_formatado = time.toString();
    }

    return tempo_formatado;

}