function generatenumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("O valor minimo tem que ser Maior que o valor máximo")

        alert(result)
    }
    

    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
   
        alert(result)
    }

   


}