//Cridar un javascript des d'un altre javascript
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }
function calcula(cigarretes,preu,datainici,recaigudes)
{
//alert("data en què és va deixar = " + datainici.value);
alert(" preu ="+preu.value);
var preu_cigarreta=parseFloat(preu.value / 20);
var cost= preu_cigarreta * cigarretes.value;

console.log(total);
//alert("Recaigudes =" + recaigudes.value);

var actual = new Date();
var dia = actual.getDate();
var mes = actual.getMonth(); //January is 0!
var any = actual.getFullYear();
//alert("arriba?");
if(dia<10) {
    dia='0'+dia
} 
//alert(dia);
if(mes<10) {
    mes='0'+mes
} 
    //alert(mes);
    //var actual_fet = any + '/' + mes + '/' + dia;
    //alert("Actual =" + actual_fet);
var one_day=1000*60*60*24;
//data en milisegons ?
var end = new Date();
//alert(document.getElementById('datainici').value);
//alert("end.getTime() = " + end.getTime());
//alert("datainici.getTime() = " + datainici.valueAsDate.getTime()); //em retorna el valor de la data, pero vull passar-ho a milisegons, com ho faig ?
var elapsed = end.getTime() - datainici.valueAsDate.getTime(); // elapsed time in milliseconds
var dies_passats_calcul_dolent= elapsed/one_day;
//alert("abans if, recaigudes ="+recaigudes);
if(recaigudes.value>0){
   // alert("FEIA "+elapsed+" segons, que són "+dies_passats_calcul_dolent+" dies que feia que NO fumaves i t'havies estalviat DIARIAMENT "+cost + " € cada dia que HAVIES PASSAT SENSE FUMAR, per tant, ÉS MILLOR que ho deixis si hi has tornat!!!! com més ho provis, portes "+recaigudes.value+" recaigudes, més mérit té aixecar-se!!!! ");
    var diferencia_ms = elapsed/1000;
    var segons = Math.floor(diferencia_ms % 60);
    diferencia_ms = diferencia_ms/60;
    var minuts = Math.floor(diferencia_ms % 60);
    diferencia_ms= diferencia_ms/60;
    var hores = Math.floor(diferencia_ms % 24 );
    var dies_totals = Math.floor(diferencia_ms / 24 );
    //decimalAdjust('round', value, exp);
    segons = decimalAdjust('round', segons, -2);
    minuts = decimalAdjust('round', minuts, -1);
    hores = decimalAdjust('round', hores, -1);
    dies_totals = decimalAdjust('round', dies_totals, -1);

    alert(" FEIA "+dies_totals+" DIES "+ hores+" hores " + minuts +" minuts "+ segons +" segons "+ elapsed/1000+" milisegons que NO FUMAVES i per una cigarreta ho has perdut ... snif snif");
    var total = parseFloat(parseInt(cigarretes.value) * preu_cigarreta) * dies_totals;
    total=decimalAdjust('round', total, -2);
    if(!isNaN(total)){
        alert("Fins que no hi vas tornar, t'havies ESTALBIAT en tabac  " + total+ " €uros en aquests " + dies_totals + " dies en els quals fumaves ... Val la pena NO FUMAR!!!?");
   }

}
else{
    alert("FA "+elapsed+" segons que han passat, que traduit són "+dies_passats_calcul_dolent+" dies que fa que no fumes i t'has estalviat DIARIAMENT "+cost + " € cada dia que has passat sense fumar.");
    var diferencia_ms = elapsed/1000;
    var segons = Math.floor(diferencia_ms % 60);
    diferencia_ms = diferencia_ms/60;
    var minuts = Math.floor(diferencia_ms % 60);
    diferencia_ms= diferencia_ms/60;
    var hores = Math.floor(diferencia_ms % 24 );
    var dies_totals = Math.floor(diferencia_ms / 24 );
     //decimalAdjust('round', value, exp);
    segons = decimalAdjust('round', segons, -2);
    minuts = decimalAdjust('round', minuts, -1);
    hores = decimalAdjust('round', hores, -1);
    dies_totals = decimalAdjust('round', dies_totals, -1);
    var preu_cigarreta = parseInt(cigarretes.value) * (preu.value / 20);
    alert(" DADES BONES -> "+dies_totals+" DIES "+ hores+" hores " + minuts +" minuts "+ segons +" segons "+ elapsed/1000+" milisegons que ho vas deixar :P ");
    var total = cost*dies_totals;//parseFloat(parseInt(cigarretes.value) * preu_cigarreta) / dies_totals;
    total=decimalAdjust('round', total, -2);
    if(!isNaN(total)){
	alert("CONTINUANT FUMANT, hauries gastat en tabac " +total+ " €uros en aquests " + dies_totals + " dies ... Val la pena NO FUMAR!!?");
    }
    else{
	alert("raoooo");
	}

}
}

