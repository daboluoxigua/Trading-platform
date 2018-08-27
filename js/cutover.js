function g(o){
	return document.getElementById(o);
}
var l = $(".tab li").length;
function HoverLi(n){
	for(var i=1;i<=l;i++){g('tb_'+i).className='normaltab';g('tbc_0'+i).className='undis';}g('tbc_0'+n).className='dis';g('tb_'+n).className='hovertab';
}
