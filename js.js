const d = document,
	$menuBtn = d.querySelector(".menu-btn"),
	$menuNav = d.querySelector(".menu-nav");

	function displayMenu(panelBtn, panel, menuLinks){
		d.addEventListener("click", (e) => {
			if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
				d.querySelector(panel).classList.toggle("show");
				d.querySelector(panelBtn).classList.toggle("show");
            d.querySelector(panelBtn).classList.toggle("active-btn");

			}

			if(e.target.matches(menuLinks) || e.target.matches(`${menuLinks} *`)){
				d.querySelector(panel).classList.remove("show");
			}
		})
	}

displayMenu(".menu-btn", ".menu-nav", ".menu-nav a");
