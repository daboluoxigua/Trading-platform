$(function() {
	$(".lightbox a").lightBox({
		overlayBgColor: "#666", //图片浏览时的背景色
		overlayOpacity: 0.5, //背景色的透明度
		containerResizeSpeed: 600 //图片切换时的速度
	})
	$('.bdi ul').css('margin-left', -($('.bdi ul').width() / 2)-40 + 'px')
});