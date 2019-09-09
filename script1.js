new fullpage('#fullpage', {
	autoScrolling:true,
    scrollHorizontally: true,
    loopHorizontal: false,
    fadingEffect: true,
    scrollOverflow: true,

	anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
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