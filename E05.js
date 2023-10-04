function Determine_Period() {
    let Xo = Number(document.getElementById('field01').value)
    let a = Number(document.getElementById('field02').value)
    let c = Number(document.getElementById('field03').value)
    let m = Number(document.getElementById('field04').value)
    let n = Number(document.getElementById('field05').value)
    
    console.log(Xo,a,c,m,n);


    var Array_X = [];
    let Xn = Xo; // Semilla nueva se inicializa con la semilla base
    Xn = (a * Xo + c) % m;
    Xo = Xn;
    Array_X.push(Xn);
    let aux = Xn;
    console.log(Xn);
    for(let i=1; i<n;i++){
        Xn = (a * Xo + c) % m;
        Xo = Xn;
        Array_X.push(Xn);
        console.log(Xn);
    }

    console.log(Array_X);
}

const btn = document.getElementById('button_calculate');
    btn.addEventListener('click', () => {
        Determine_Period();
        //Print_Table(valorSeleccionado);
    }); 