function lanzar(){
    var array = [];
    var i;
    for (i = 0; i < 36000; i++) {
        x = Math.floor(Math.random()*(5+1)+1);
        y = Math.floor(Math.random()*(5+1)+1);
        sumaDados = x + y
        array.push(sumaDados);
    }
    console.log(array);
}