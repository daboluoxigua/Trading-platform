//侧边导航
side_menu(".side_menu")
function side_menu(classname) {
	var m_st, m_po = 170;
	$(window).scroll(function() {
		m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
		if (m_st < m_po) {
			$(classname).find('a').last().hide()
		} else {
			$(classname).find('a').show()
		}

	})
}