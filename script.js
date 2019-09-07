new fullpage('#fullpage', {
	autoScrolling:true,
    scrollHorizontally: true,
    loopHorizontal: true,
    fadingEffect: true,
    scrollOverflow: true,

	anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    navigationTooltips: ['Home', 'Team Player & Leader', 'Intern At Zhxi', 'To My Community', 'Devotion in Education', 'Contact'],
    css3: true,
	navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
	navigationPosition: 'right',
	showActiveTooltip: false,
    slidesNavPosition: 'bottom',
    animateAnchor: true,
    sectionSelector: '.section',
    slideSelector: '.slide',
});

//methods
// fullpage_api.setAllowScrolling(true, down, right); 