
function h2o(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function loginButton() {
		      
		var password = document.getElementById("password").value;

		var username = document.getElementById("username").value;
			
		var user = "patonymous";		
		var pass = "IMFuckingPatonymous";		
		
			
		if (username == user && password == pass) {							
			document.getElementById("loginFeedback").innerHTML = "Bom trabalho! Sua flag foi gerada!";
			document.getElementById("loginFeedback").style.color = 'green';			
			console.log(h2o("717561636b7b30345f434c49454e545f534944455f49535f4e4f545f534146457d"));		   			
			sessionStorage.setItem('patonymous',h2o("717561636b7b30345f434c49454e545f534944455f49535f4e4f545f534146457d"));
		}

		else {	
					
			document.getElementById("loginFeedback").innerHTML = "Erro. Tente novamente.";							
			document.getElementById("loginFeedback").style.color = 'red';
			
		}
			   
			   
}

