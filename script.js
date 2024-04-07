function mostrarData(){
    let dataAtual = new Date()
    let hora = document.getElementById('hr')
    let minuto = document.getElementById('min')
    let segundo = document.getElementById('seg')
    let hoje = document.getElementById('data')

    let diaDaSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado',]
    let mesAtual = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let diaAtual = diaDaSemana[dataAtual.getDay()]
    let dia = dataAtual.getDate()
    let mes = mesAtual[dataAtual.getMonth()]
    let ano = dataAtual.getFullYear()

    let horas = dataAtual.getHours()
    let minutos = dataAtual.getMinutes()
    let segundos = dataAtual.getSeconds()

    dia = dia <10? '0' + dia : dia
    horas = horas < 10? '0' + horas : horas
    minutos = minutos < 10? '0' + minutos : minutos
    segundos = segundos < 10? '0' + segundos : segundos

    hora.textContent = horas
    minuto.textContent = minutos 
    segundo.textContent = segundos 

    hoje.textContent = `${dia} de ${mes} de ${ano} - ${diaAtual}`


}mostrarData()

setInterval(mostrarData, 1000)