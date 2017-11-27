{
	var text = ["Hei!", "Vi er Kuben Koder", "Akkurat nå holder vi på med web-design", "blablbablba", "Møt opp på biblioteket på mandager og se mer!"]

	var container = document.getElementById("text");

	i = 0
	j = 0

	var writeEffect = setInterval(function (){
	  i++
	    if(i > text[j].length+5){
	      j++
				i = 0;
	  }
	  container.innerHTML = text[j].slice(0, i);
	}, 150);
}
