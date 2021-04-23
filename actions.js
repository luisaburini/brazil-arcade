marqueeInit({
	uniqueid: 'mycrawler',
	style: {
    'color': 'darkblue',
    'font-family': 'Arial, Helvetica, sans-serif',
    'font-size': '15vh',
    'line-height': '17vh'
	},
	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	persist: true,
	savedirection: true
});