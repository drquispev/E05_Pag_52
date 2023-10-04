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
    var Matrix_Print = [];
    var ri = [];
    let cont = 0;
    for (let i = 0; i < Array_X.length; i++) {
        cont++;
        ri[i] = Array_X[i] / (m -1) ; // CALCULAR EL ri
        Matrix_Print.push([cont,Array_X[i], ri[i]]);
        console.log(cont,Array_X[i], ri[i], m-1);
    }
    return Array_X;
}                                                                                 

function Choose_Portion_Array(Array_X){
    let aux = 101;
    let aux2 = 200;
    let j = 0;
    var Portion_A = [];
    for (let i= aux; i<aux2; i++){
        Portion_A[j] = Array_X[i];
        j++;
    }
    console.log(`Portion_A: ${Portion_A}`);
    return Portion_A;
}

function Prueba_Media(Array_X){
    let r_raya = 0;
    let suma_ri = 0;
    for ( let i=0; i<Array_X.length; i++){
        suma_ri = Array_X[i] = suma_ri;
    }
    r_raya = suma_ri / Array_X.length;

    aux
}   

function Prueba_Varianza(Array_X){

}

function Prueba_Poker(Array_X){

}
const btn = document.getElementById('button_calculate');
    btn.addEventListener('click', () => {
        Determine_Period();
        var Array = Determine_Period();
        Choose_Portion_Array(Array);

        //Print_Table(valorSeleccionado);
}); 