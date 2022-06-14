window.onload=function(){

    let skaicius;
    let skaicius1;
    let fibonacio;
    let fibonacio1;
    skaicius=12;
    skaicius1=78;

    const Phi=1.618033988749895;
    
    

    fibonacio=fibonacioSkaicius(skaicius,Phi);
    fibonacio1=fibonacioSkaicius(skaicius1,Phi);

    console.log(fibonacio);
    console.log(fibonacio1);

  
 

}
function fibonacioSkaicius(a,b){
    return Math.round(Math.pow(b, a)/Math.sqrt(5));
}