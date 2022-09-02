let idade, nome, sorte, afair
let esc // esc = escolha


function Reiniciar() {
    

alert("\n\n\n\n\nNeste jogo é importante que você escreva as opções que decidir tomar exatamente como se apresentam (SEM O HÍFEN) para prosseguir, se necessário você pode copiar a mensagem e colá-la no campo de resposta :D\n\nO jogo possui inúmeros finais, então fique à vontade para explorar as mecânicas e 'easter eggs' que deixei para você descobrir")

nome = prompt("Digite o nome de seu personagem")
idade = Number(prompt("Digite em números a idade do seu peronagem"))

esc = prompt("A semana demorou a passar, você estudou muito e trabalhou mais ainda.Você sente um misto de 'preciso me divertir um pouco' com 'quero dormir até o fim da vida' e no meio  recebe uma mensagem do Alex te convidadno para uma festa. Você aceita o convite?\n\n-SIM\n\n-NÃO").toUpperCase()



//COMEÇO
if (esc === "SIM" && idade >= 18) {//OK

    esc = prompt("Ao chegar você repara que seu amigo não está onde disse que o aguardaria...\n\n-ENTRAR\n\n-AGUARDAR").toUpperCase()

} else if (esc == "SIM" && idade < 18 || esc == "SIM" && idade >= 16) {//OK
    //SEGUE O BAILE
    esc = prompt("Você vai até o ponto de encontro com Alex na frente do prédio onde a festa está acontecendo, afinal você nunca teve problemas em entrar nessas festas já que parece mais velho, mas percebe que ele não está onde foi combinado. É um prédio com aparência de usina abandonada no centro da cidade, você decide:\n\n-ENTRAR\n\nAGUARDAR").toUpperCase()
    
} else if (idade <= 15 && esc == "SIM" || idade <= 15 && esc == "NÃO") {//OK
    //FIM MAIS CURTO E ALEX BRIGÃO
    alert("Alex as vezes esquece que você é novo demais, pede desculpas e diz que vai te convidar na próxima para uma festa que você possa ir.\n\nAlgum tempo mais tarde olhando a TV, está passando uma reportagem sobre seu amigo e ele foi encontrado sem vida em um armazém nas docas, aparentemente ele se envolveu em uma briga aquela noite e teve um fim trágico.\n\n-1ºFINAL RUIM: (CLUBE DA LUTA)\n\nTente uma idade diferente ;)")
    

} else {//OK
    //FIM MAIS CURTO E ALEX DOS RACHAS
    esc = alert("Você fica em casa nese final de semana para se recupar e ter uma semana ainda mais produtiva, você é uma maquina de produtividade!\n\nAlgum tempo mais tarde olhando a TV, está passando uma reportagem sobre seu amigo e ele foi encontrado sem vida em um armazém nas docas, pelo que parece ele estava fazendo um racha e algo saiu errado\n\n-2ºFINAL RUIM: (ALEX DOS RACHAS)")
    
}




//CHEGA NO LOCAL COMBINADO
if (esc == "ENTRAR") {//OK

    esc = prompt("Você percebe que a festa já estava rolando há um tempo, está tocando algo que parece um remix de lo-fi bem agradável, você decide:\n\n-IR PRO BAR\n\n-DANÇAR\n\n-AGUARDAR ALEX").toUpperCase()
//                                        CAMINHO FEITO - CAMINHO FEITO - CAMINHO FEITO
} else if (esc == "AGUARDAR") {//OK

    esc = prompt("Você percebe que o lugar, apesar de ser no centro da cidade, está bem vazio e dois homens te encaram do outro lado da rua, você decide:\n\n-ENTRAR\n\n-AGUARDAR MAIS").toUpperCase() //OK
//                                               CAMINHO FEITO - CAMINHO FEITO 
} else if (esc == "ENTRAR") {//OK

    esc = prompt("Você percebe que a festa já estava rolando há um tempo, está tocando algo que parece um remix de lo-fi bem agradável, você:\n\n-IR PRO BAR\n\n-DANÇAR\n\n-AGUARDAR ALEX").toUpperCase()
//                                 CAMINHO FEITO - CAMINHO FEITO - CAMINHO FEITO
} 


if (esc == "AGUARDAR ALEX"){//OK

    esc = prompt("Você resolve esperar Alex próximo à entrada da festa, porém se passa mais meia hora e Alex não aparece, não liga... Você decide:\n\n-LIGAR PRO ALEX\n\n-IR PRO BAR\n\n-DANÇAR").toUpperCase()
//                                 CAMINHO FEITO - CAMINHO FEITO - CAMINHO FEITO
}


if (esc == "LIGAR PRO ALEX"){//OK

    esc = prompt("Você liga até mais de uma vez deixando chamar até o fim, mas nada do Alex atender, você decide:\n\n-IR PRO BAR\n\n-DANÇAR\n\n-IR EMBORA").toUpperCase()


}

if (esc == "IR EMBORA") {//OK

    esc = prompt("Você sai da festa e percebe que o local apesar de ser no centro da cidade está bem vazio, com excessão de dois homens bem trajados dos outro lado da rua que parecem guardar a porta de um lugar, talvez eles tenham visto Alex, você decide:\n\n-DESISTIR E IR EMBORA\n\n-FALAR COM OS HOMENS ").toUpperCase()

}

if (esc == "DESISTIR E IR EMBORA") {//OK
   //FIM ALEX DESAPARECIDO
    alert("Você fica chateado e decide ir embora de vez e resolve nem tentar entrar em contato com Alex. Após alguns dias você recebe a notícia de que Alex está desaparecido desde aquela noite... Talvez se você tivesse falado com aqueles homens teria o encontrado.\n\n-3ºFINAL RUIM: (!JEJUM DOPAMINICO!)")

}


if (esc == "FALAR COM OS HOMENS") {//OK

    esc = prompt("Você se aproxima educadamente, questiona sobre Alex, o descreve e eles apenas fazem um sinal negativo com a cabeça e dizem que são pessimos fisionomistas, você decide:\n\n-IR EMBORA\n\n-DESCREVER UM POUCO MAIS").toUpperCase()

}

if (esc == "DESCREVER UM POUCO MAIS"){//OK

    esc = prompt("Você decide tentar descrever ainda mais detalhes sobre Alex e nisso um terceiro homem sai da porta, ficando um pouco surpreso ao te ver ali e quando a porta está voltando sozinha para fechar você vê de relance alguém que parecia o Alex deitado em um sofá dentro da sala que os homens estão guardando, você decide:\n\n-TENTAR ABRIR A PORTA\n\n-SAIR DALI E PEDIR AJUDA\n\n-PERGUNTAR O QUE O ALEX ESTÁ FAZENDO ALI").toUpperCase()

}

if (esc == "TENTAR ABRIR A PORTA" || esc == "PERGUNTAR O QUE O ALEX ESTÁ FAZENDO ALI") {//OK

    prompt("Você não entende muito bem o que está acontecendo, mas seu corpo começa a ficar dormente e você sente que vai desmaiar ali mesmo, você decide:\n\n-GRITAR\n\n-SE APOIAR EM UM DELES").toUpperCase()
    esc = "ACORDAR AMARRADO"//                     CAMINHO FEITO  -  CAMINHO FEITO

}
//FINAL BOM: HERÓI
if ( esc == "SAIR DALI E PEDIR AJUDA") {//OK

    alert("Você estranha aquela situação e por via das dúvidas resolve dar o fora rápido e ligar para a polícia enquanto aguarda dentro da festa. Pouco tempo depois você ouve duas viaturas chegando e após alguns instantes com o coração quase saindo pela boca, você resolve olhar por uma fresta na porta e vê os três homens algemados e Alex desacordado nos braços de um dos policiais. Dias depois você foi tido como o herói do seu amigo.\n\nParabéns, você não desistiu e Alex está vivo\n\n-FINAL BOM: (HERÓI)")

}



if (esc == "AGUARDAR MAIS") {//OK

    esc = prompt("Os dois caras que estavam só te encarando, agora começam a andar na sua direção, você decide:\n\n-ENTRAR\n\n-AGUARDAR\n\nLIGAR PRO ALEX").toUpperCase()
}





if (esc == "ENTRAR") { //OK

    esc = prompt("Você  decide entrar para não ter que descobrir o que ia acontecer e percebe que a festa já estava rolando há um tempo, está tocando algo que parece um remix de lo-fi bem agradável, você:\n\n-IR PRO BAR\n\n-DANÇAR").toUpperCase()

} else if (esc == "AGUARDAR") {//OK

    esc = prompt("Os dois homens se aproximam e conversam com você em um tom até que amigável, apesar de parecerem dois mafiosos clichê dos filmes, com ternos perfeitamente ajustados e aneis que custam o preço de um carro novinho em folha\n\n-Eai garoto, apoia a gente num cigarro?\n\n-CLARO\n\nFOI MAL, MAS NÃO FUMO").toUpperCase()

}





//CAMINHO ENTRAR E SE ENTRETER,
if (esc == "IR PRO BAR"){//OK

    alert("Você passa por uma multidão que dança de forma calma e estranhamente frenética ao mesmo tempo, você esbarra em tanta gente que tem até a impressão que algo espetou seu braço, mas finalmente chega no bar, pega uma cerveja e quando se vira para a pista sente que seu corpo começa a ficar lento e as luzes se misturam e apagam")
    esc = "ACORDAR AMARRADO"

} else if (esc == "DANÇAR") {//OK

    alert("Você vai direto pra pista sem pensar duas vezes e encontra uma amigo(a) de infância que você tinha uma queda forte e pra sua sorte ele(a) te nota, vocês dançam, ficam juntos e ali começam a ficar...")
    esc = "FIM DO ALEX1"

}





if (esc == "FIM DO ALEX1") {//OK
   afair = prompt("Qual o nome do seu namorado(a)?")

   alert(`Você liga para Alex pra agradecer o convite, pois apesar de ele não ter aparecido ele vai ter que ser o padrinho de você com o(a) ${afair}, mas ele não atende várias vezes...\n\nAlgum tempo mais tarde olhando a TV, está passando uma reportagem sobre seu amigo e ele foi encontrado sem vida em um armazém nas docas, ao que tudo indica uma quadrilha que contrabandeia orgãos está sendo investigada...`)

}





if (esc == "CLARO" || esc == "FOI MAL, MAS NÃO FUMO") {//OK

    prompt("Você não entende muito bem o que está acontecendo, mas seu corpo começa a ficar dormente e você sente que vai desmaiar ali mesmo, você decide:\n\n-GRITAR\n\n-SE APOIAR EM UM DELES").toUpperCase()
    esc = "ACORDAR AMARRADO"
}




//Caminho no qual escolheu esperar demais fora da festa e vai acordar amarrado
if (esc == "ACORDAR AMARRADO") {//OK

    alert("Você acorda e se lembra que tentou fazer algo antes de desmaiar de fato. Você está sentando em uma cadeira antiga de madeira e com as mãos amarradas nela e à sua frente está Alex, aparentemente desacordado e na mesma situação que você, porém muito machucado e com o rosto virado para baixo. O lugar é sujo e úmido e o som de alguns ratos começa a te deixar nervoso enquanto observa que as janelas são pequenas e altas e há somente uma porta no lugar além de algumas caixas e estantes")

    esc = prompt("Você se lembra de ter visto um filme sobre um cara que foi sequestrado e sobreviveu, você só precisa se acalmar e tentar se soltar da cadeira, para isso você pode tentar pular e quebrar a cadeira, forçar as cordas, chamar pelo Alex... Você decide:\n\n-PULAR\n\n-TENTAR AS CORDAS\n\n-CHAMAR ALEX").toUpperCase()//                                   CAMINHO FEITO - CAMINHO FEITO - CAMINHO FEITO

}


if (esc == "CHAMAR ALEX") {//ok

   esc = prompt("Você tenta chamar Alex sem fazer muito barulho, mas ele está muito fraco e machucado e o máximo que faz é balançar a cabeça um pouco, você decide:\n\n-PULAR\n\n-TENTAR AS CORDAS").toUpperCase
//                                                    CAMINHO FEITO  -  CAMINHO FEITO
}




//Tentar quebrar a cadeira pulando
if (esc == "PULAR") {//OK

    esc = prompt("Você percebe que fez bastante barulho mesmo com a música alta alguém pode ter escutado, mas que a cadeira cedeu bastante, você decide:\n\n-PULAR DE NOVO\n\n-TENTAR AS CORDAS").toUpperCase()
//                                                CAMINHO FEITO    -    CAMINHO FEITO
}




//insistir em pular
if (esc == "PULAR DE NOVO") {//OK

    esc = prompt("Você fez bastante barulho dessa vez, mas a cadeira não resistiu e acabou por ceder e como as cordas estavam presas nela você acabou se livrando, mas escuta passos pesados e apressados vindo de trás da porta,você decide:\n\n-SE ENCONDER ATRÁS DE UMA CAIXA\n\n-ARRASTAR ALGO PARA OBSTRUIR A PORTA").toUpperCase()//                        CAMINHO PENDENTE                  CAMINHO PENDENTE

} else if (esc == "TENTAR AS CORDAS") {//SE PULAR UMA VEZ E TENTAR AS CORDAS TA OK

    esc = prompt("Para sua surpresa, as cordas estão bem frouxas e você se solta fácil, você decide:\n\n-ARRASTAR ALGO PARA OBSTRUIR A PORTA\n\n-INVESTIGAR O LOCAL").toUpperCase()
//                CAMINHO PENDENTE         -          CAMINHO PENDENTE 

}

if (esc == "ARRASTAR ALGO PARA OBSTRUIR A PORTA") {

    esc = prompt("Você consegue arrastar uma das caixas de madeira que estava mais próxima da porta para obstruí-la e para sua sorte a maçacenta não consegue girar até o fim devido a caixa que a escorou. Você não sabe quanto tempo essa solução vai durar,as vozes do outro lado da porta começam a aumentar e não demora muito até que o primeiro chute ou encontrão contra a porta chegue, você decide:\n\n-INVESTIGAR O LOCAL\n\n").toUpperCase

}

}







