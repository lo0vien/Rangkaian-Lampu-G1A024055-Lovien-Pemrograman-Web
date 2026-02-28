let step3=0, direction3="on", semuaOn3=false;
function reset3(){
    step3=0;
    direction3="on";
}
function seri3(){
    const lampu=[l1,l2,l3];
    let nama=["A","B","C"];

    if(direction3==="on"){
        lampu[step3].src="on.jpg";
        status1.innerText="Lampu "+nama[step3]+" menyala";
        step3++;
        if(step3===lampu.length){
            direction3="off";
            step3=lampu.length-1;
        }
    }else{
        lampu[step3].src="of.jpg";
        status1.innerText="Lampu "+nama[step3]+" dimatikan";
        step3--;
        if(step3<0){
            status1.innerText="Semua lampu mati";
            direction3="on";
            step3=0;
        }
    }
    semuaOn3=false;
}
function paralel3(){
    const lampu=[l1,l2,l3];
    semuaOn3=!semuaOn3;
    lampu.forEach(l=>l.src=semuaOn3?"on.jpg":"of.jpg");
    status1.innerText=semuaOn3?"Semua lampu menyala":"Semua lampu dimatikan";
    reset3();
}



let step4=0, direction4="on", semuaOn4=false, toggleGroup=false;
function reset4(){
    step4=0;
    direction4="on";
}
function seri4(){
    const lampu=[a,b,c,d];
    let nama=["A","B","C","D"];

    if(direction4==="on"){
        lampu[step4].src="on.jpg";
        status2.innerText="Lampu "+nama[step4]+" menyala";
        step4++;
        if(step4===lampu.length){
            direction4="off";
            step4=lampu.length-1;
        }
    }else{
        lampu[step4].src="of.jpg";
        status2.innerText="Lampu "+nama[step4]+" dimatikan";
        step4--;
        if(step4<0){
            status2.innerText="Semua lampu mati";
            direction4="on";
            step4=0;
        }
    }
    semuaOn4=false;
    toggleGroup=false;
}
function paralel4(){
    const lampu=[a,b,c,d];
    semuaOn4=!semuaOn4;
    lampu.forEach(l=>l.src=semuaOn4?"on.jpg":"of.jpg");
    status2.innerText=semuaOn4?"Semua lampu menyala":"Semua lampu dimatikan";
    reset4();
    toggleGroup=false;
}
function group4(){
    toggleGroup=!toggleGroup;
    if(toggleGroup){
        a.src="on.jpg"; b.src="on.jpg";
        c.src="of.jpg"; d.src="of.jpg";
        status2.innerText="A & B menyala, C & D mati";
    }else{
        a.src="of.jpg"; b.src="of.jpg";
        c.src="on.jpg"; d.src="on.jpg";
        status2.innerText="A & B mati, C & D menyala";
    }
    reset4();
    semuaOn4=false;
}
