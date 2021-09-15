function fibonacci() {
    var total, limit, fibo = [0, 1];


    limit = document.getElementById("limit").value;
    var arreglo = [limit];

    if (isNaN(limit) || limit == '') {
        alert("Te faltó un número reina");
    } else {
        for (i = 2; i <= limit; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
            document.getElementById('total').innerHTML = fibo + ', ';


        }

    }



}