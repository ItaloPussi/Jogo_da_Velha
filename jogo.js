$(document).ready(function (){
	var ponto = 1;
	rodada = 0;
	var matriz_jogo = Array(3);

	matriz_jogo['A'] = Array(3);
	matriz_jogo['B'] = Array(3);
	matriz_jogo['C'] = Array(3);

	matriz_jogo['A'][1] = 0;
	matriz_jogo['A'][2] = 0;
	matriz_jogo['A'][3] = 0;

	matriz_jogo['B'][1] = 0;
	matriz_jogo['B'][2] = 0;
	matriz_jogo['B'][3] = 0;

	matriz_jogo['C'][1] = 0;
	matriz_jogo['C'][2] = 0;
	matriz_jogo['C'][3] = 0;


	$('.jogo').hide();

	// Iniciar Game
	$('#iniciar_game').click(function(){
		if($('#nick_1').val() == ''){
			alert('nick 1 não foi preenchido');
			return false;

		}

		if($('#nick_2').val() == ''){
			alert('Nick 2 não foi preenchido');
			return false;

		}

		$('.inicio').hide();
		$('.jogo').show();



		$(".jogador_1").html($('#nick_1').val());

		$(".jogador_2").html($('#nick_2').val());

	})
	$('.jogada').click(function (){
		var id_campo = this.id;


	if(this.id == "null"){
		alert('você já jogou aqui')
	}else{
		if(ponto == 1){
		$('#' + id_campo).append('<img class="marcacao" src="imagens/marcacao_1.png">');



		ponto = -1;

		}else{
			$('#' + id_campo).append('<img class="marcacao" src="imagens/marcacao_2.png">');
			ponto = 1;


		}
	var linha_coluna = this.id.split('-');
	matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;


	this.id = null;
	rodada = rodada + 1;
	
	 verifica_resultado();
	 
	 
					

	}	})
	function verifica_resultado(){
		//horizontal
		for(var i = 1; i <= 3; i++){
			var pontos = 0;
			pontos= pontos + matriz_jogo['A'][i]
			resultado_pontos(pontos);
			pontos = 0;
		}

		//horizontal
		for(var i = 1; i <= 3; i++){
			var pontos = 0;
			pontos= pontos + matriz_jogo['B'][i]
			resultado_pontos(pontos);
			pontos = 0;
		}

		//horizontal
		
		for(var i = 1; i <= 3; i++){
			var pontos = 0;
			pontos= pontos + matriz_jogo['C'][i]
			resultado_pontos(pontos);
			pontos = 0;
		}

		//vertical
		for(var l = 1; l <= 3; l++){
			var pontos = 0;
			pontos = pontos + matriz_jogo['A'][l];
			pontos = pontos + matriz_jogo['B'][l];
			pontos = pontos + matriz_jogo['C'][l];

			resultado_pontos(pontos);
			pontos = 0;
			
		}

		//diagonal
		for(var l = 1; l< 2; l++){
			var pontos = 0;
			pontos = pontos + matriz_jogo['A'][l];
			pontos = pontos + matriz_jogo['B'][l+1];
			pontos = pontos + matriz_jogo['C'][l+2];

			resultado_pontos(pontos);
			pontos = 0;
			
		}

		for(var l = 1; l< 2; l++){
			var pontos = 0;
			pontos = pontos + matriz_jogo['A'][l+2];
			pontos = pontos + matriz_jogo['B'][l+1];
			pontos = pontos + matriz_jogo['C'][l];

			resultado_pontos(pontos);
			pontos = 0;
			
		}

	}
	function resultado_pontos(pontos){
		if(pontos == -3){
			alert($('#nick_1').val() + ' venceu!');
		
		}
		if(pontos == 3){
			alert($('#nick_2').val() + ' venceu!');
			window.location.reload();
		}
		 if(rodada == 9 && pontos != 3 && pontos !=-3){
			window.location.reload();
		}

		
	}
		

})