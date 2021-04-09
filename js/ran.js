// --------------- Funciones principales ----------------- \\

function generar (){
    var ran = profesor_ran_carrera ("electronica")
    var nuevo_link = 'https://campusingenieriaytecnologia.ull.es/user/profile.php?id=' + ran
    var link = document.getElementById('boton');
    link.setAttribute('href', nuevo_link);
}

// --------------------------------------------------------- \\

function intervalo (n,m){
    var valor = Math.floor(Math.random() * (m-n)) + n;
    // corregir errores
    switch (valor){
        case 1229:
            valor = intervalo(n,m)
            break;
        case 967:
            valor = intervalo(n,m)
            break;
        default:
            break;
    }
    return valor
}

function profesor_ran_carrera (carrera) {
    var resultado = 0;
    switch (carrera) {
        case "informatica":
            resultado = intervalo(883,973)
            break;
        case "electronica":
            resultado = intervalo(1228,1233)
            break;
        default:
            break;
    }
    return resultado
}

