let imagenes;
let hora=0;
let minuto=0;
let segundo=0;
let t;
let movimiento=0;
let selecciones=[];
let cronometro=document.getElementById("tiempo");
let tableroMovimiento=document.getElementById("movimiento");
juegoNuevo();
function juegoNuevo(){
    cargarImagenes();
    //generar tablero
    let tablero=document.getElementById("tablero");
    //se crea un arreglo que contiene las tarjetas
    let tarjetas=[];
    // se crea un ciclo para generar las tarjetas del juego
    for(let i=0;i<24;i++){
        // se agrega los elemento tarjeta en el arreglo
        tarjetas.push(
        //este div representa el area de la tarjeta
        // comilla inclinada alt+96
        `
        
        <div class="area-tarjeta" onclick="seleccionTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="caraTrasera${i}">
                ${imagenes[0]}
                    
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-question"></i>
                </div>
            </div>
        </div>`
        );
    
        if(i%2==1){
            imagenes.splice(0,1);
        }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    tablero.innerHTML=tarjetas.join(" ");
    reiniciarTablero();
}
function reiniciarTablero(){
    
    hora=0;
    minuto=0;
    segundo=0;
    clearTimeout(t);
    setTimeout(()=>{
        t=setTimeout(tiempo,1000);
    },3000)
    
    movimiento=0;
    tableroMovimiento.innerHTML=movimiento;
    selecciones=[];
}
// ${imagenes[Math.floor(Math.random() * (9 - 0)) + 0]}

function cargarImagenes(){
    imagenes= [
        '<i class="fa-solid fa-map"></i>',
        '<i class="fa-solid fa-street-view"></i>',
        '<i class="fa-brands fa-angular"></i>',
        '<i class="fa-solid fa-apple-whole"></i>',
        '<i class="fa-solid fa-beer-mug-empty"></i>',
        '<i class="fa-solid fa-heart"></i>',
        '<i class="fa-brands fa-alipay"></i>',
        '<i class="fa-solid fa-basket-shopping"></i>',
        '<i class="fa-solid fa-baby-carriage"></i>',
        '<i class="fa-solid fa-compass-drafting"></i>',
        '<i class="fa-solid fa-landmark-flag"></i>',
        '<i class="fa-solid fa-cubes"></i>'
    ]
}

function seleccionTarjeta(i){
    let tarjeta=document.getElementById("tarjeta"+i);
    if(tarjeta.style.transform!="rotateY(180deg)"){
        tarjeta.style.transform="rotateY(180deg)";
        selecciones.push(i);
        anadirMovimiento();
        
    }
    if(selecciones.length==2)
    {
        deseleccionTarjeta();
    }
}
function deseleccionTarjeta(){
    setTimeout(()=>{
        let tarjeta1=document.getElementById("tarjeta"+selecciones[0]);
        let tarjeta2=document.getElementById("tarjeta"+selecciones[1]);
        let caraTrasera1=document.getElementById("caraTrasera"+selecciones[0]);
        let caraTrasera2=document.getElementById("caraTrasera"+selecciones[1]);
        if(caraTrasera1.innerHTML==caraTrasera2.innerHTML){
            caraTrasera1.style.background="plum";
            caraTrasera2.style.background="plum";
        }else{
            tarjeta1.style.transform="rotateY(0deg)";
            tarjeta2.style.transform="rotateY(0deg)";
        }
        selecciones=[];
    },500);
}
function anadirMovimiento(){
    movimiento++;
    tableroMovimiento.innerHTML=movimiento;
}
function tiempo(){
    segundo+=1;
    if(segundo>60){
        minuto+=1;
        segundo=0;
    }
    if(minuto>60){
        hora+=1;
        minuto=0;
    }   
    let time="";
    if(hora<10)
        time+="0"+hora+":";
    else
        time+=hora+":";
    if(minuto<10)
        time+="0"+minuto+":";
    else
        time+=minuto+":";
    if(segundo<10)
        time+="0"+segundo;
    else
        time+=segundo;
    cronometro.innerHTML=time;
    setTimeout(tiempo,1000);
}