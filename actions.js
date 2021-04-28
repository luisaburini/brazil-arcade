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

var brazil = document.getElementById('brazil');
var arcade = document.getElementById('arcade');
var endless = document.getElementById('endless');
var lozenge = document.getElementById('lozenge');
var spanArcade = document.getElementById('span_arcade');
var maco1 = document.getElementById('maco1');
var maco2 = document.getElementById('maco2');
var maco3 = document.getElementById('maco3');
var insertCoin = document.getElementById('insert_coin');
var toBuyCentrao = document.getElementById('to_buy_centrao');
var insertCoinAnimation = document.getElementById('insert_coin_animation')
var centraoIndex = 0;

var intervalID = window.setInterval(myCallback, 500);

function myCallback(a, b)
{
	centraoIndex++;
	if(centraoIndex % 4 == 0)
	{
		insertCoinAnimation.href = "https://brasil.elpais.com/brasil/2021-01-29/quatro-ministerios-e-bilhoes-de-reais-em-emendas-a-receita-de-bolsonaro-para-vencer-no-congresso-de-bracos-dados-com-o-centrao.html";
	}
	else if(centraoIndex % 4 == 1)
	{
		insertCoinAnimation.href = "https://economia.estadao.com.br/noticias/geral,congresso-ve-bolsonaro-nas-maos-do-centrao-apos-sancao-do-orcamento-com-preservacao-de-emendas,70003691284";
	} 
	else if(centraoIndex % 4 == 2)
	{
		insertCoinAnimation.href = "https://veja.abril.com.br/blog/sensacionalista/bolsonaro-compra-centrao-e-faz-garantia-estendida/";
	} 
	else if(centraoIndex % 4 == 3)
	{
		insertCoinAnimation.href = "https://www.bbc.com/portuguese/brasil-52466624";
	}
}


function hideAll()
{
	brazil.style.display = 'none';
	arcade.style.display = 'none';
	lozenge.style.display = 'none';
	spanArcade.style.display = 'none';
}

function showAll() 
{
	maco1.style.display = 'block';
	maco2.style.display = 'block';
	maco3.style.display = 'block';
	insertCoin.style.display = 'block';
	toBuyCentrao.style.display = 'block';
}

function start()
{
	hideAll();
	showAll();
}