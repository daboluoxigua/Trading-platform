$(function() {
	pwds('.first', '.last')
	pwds('.first2', '.last2')
	inpfocus()
})

function pwds(first, last) {
	var tx = $(first),
		pwd = $(last);
	tx.focus(function() {
		if (this.value == "") {
			tx.css("display", "none");
			pwd.css("display", "");
			pwd.focus();
		};
		pwd.addClass("focusx");
	})
	pwd.blur(function() {
		if (this.value == "") {
			tx.css("display", "");
			pwd.css("display", "none");
		}
		pwd.removeClass("focusx");
	})
}

function inpfocus() {
	var inpobj = $(".inp300");
	inpobj.each(function() {
//		$(this).oninput=function(){
//			alert(123)
//		}
		$(this).focus(function() {
			inpobj.removeClass("focus")
			$(this).addClass("focus");
		}).blur(function(){
			inpobj.removeClass("focus")
		});
	});
}




/** 
 * 是否去除所有空格 
 * @param str 
 * @param is_global 如果为g或者G去除所有的 
 * @returns 
 */
function Trim(str, is_global) {
	var result;
	result = str.replace(/(^\s+)|(\s+$)/g, "");
	if (is_global.toLowerCase() == "g") {
		result = result.replace(/\s/g, "");
	}
	return result;
}

///** 
//* 禁止空格输入 
//* @param e 
//* @returns {Boolean} 
//*/ 
function banInputSapce(e) {
	var keynum;
	if (window.event) // IE 
	{
		keynum = e.keyCode
	} else if (e.which) // Netscape/Firefox/Opera 
	{
		keynum = e.which
	}
	if (keynum == 32) {
		return false;
	}
	return true;
}

///** 
//* 空格输入去除 
//* @param e 
//* @returns {Boolean} 
//*/ 
function inputSapceTrim(e, this_temp) {
	this_temp.value = Trim(this_temp.value, "g");
	var keynum;
	if (window.event) // IE 
	{
		keynum = e.keyCode
	} else if (e.which) // Netscape/Firefox/Opera 
	{
		keynum = e.which
	}
	if (keynum == 32) {
		return false;
	}
	return true;
}