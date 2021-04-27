// marqueeInit({
// 	uniqueid: 'mycrawler',
// 	style: {
// 	'color': '#fff',
// 	'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6',
//     'font-family': 'Arial, Helvetica, sans-serif',
//     'font-size': '15vh',
//     'line-height': '17vh'
// 	},
// 	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
// 	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
// 	moveatleast: 2,
// 	neutral: 150,
// 	persist: true,
// 	savedirection: true
// });

var brazilArcade = document.getElementById('brazil_arcade');
var endless = document.getElementById('endless');
var lozenge = document.getElementById('lozenge');
var spanArcade = document.getElementById('span_arcade');

function hideAll()
{
	brazilArcade.style.display = 'none';
	lozenge.style.display = 'none';
	spanArcade.style.display = 'none';
}