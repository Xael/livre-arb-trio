const resposta = document.getElementById("escolha"); // obtém a div editável

resposta.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // se a tecla Enter for pressionada
    const escolha = resposta.innerText.toLowerCase().trim(); // converte a resposta para minúsculas e remove espaços desnecessários
    if (escolha === "começar" || escolha === "comecar" || escolha === "iniciar" || escolha === "início" || escolha === "start" || escolha === "jogar") {
		window.location.href = "inicio.html";
	    
		} else if (escolha === "ajuda" || escolha === "help" || escolha === "instrucoes" || escolha === "instruções") {
		window.location.href = "ajuda.html";
			// código para ir para a tela de créditos
    		} else if (escolha === "sair") {
      		window.close(); // fecha a janela do navegador
    } else {
		document.getElementById("resposta").innerHTML = "Resposta inválida, tente novamente.";// código para lidar com opções inválidas
    }
    event.preventDefault(); // impede que a quebra de linha seja inserida
  }
});