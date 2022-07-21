/*regiao para definir constantes e variavel play time, cada contstante será essencial para a vez de cada jogador*/
const player1 = 'o'

    const player2 = 'x'

        var playTime = player1

        var gameover = false
/*------------------------------------------------*/
/*Região para definir as duas funções para controle de mostrador e inserir as imgs que copõem o tabuleiro*/

atualizamostrador()

    inicializarespacos()

/*-------------------------------------------------*/
/*função que irá controlar o mostrador*/
function atualizamostrador(){
     if (gameover) { return;}

    if (playTime == player1) 
    {
            var player = document.querySelectorAll("div#mostrador img")[0]
                player.setAttribute("src","./img/download.png")
    } 
            else {

                var player = document.querySelectorAll  ("div#mostrador img")[0]
                
                    player.setAttribute("src", "./img/download.jpeg")
    }

}
/*-----------------------------------------------*/

/*Função para em si sejam preenchidos as divs do tabuleiro*/


    function inicializarespacos(){
/*Estrutura de repetição para ser iniciado o jogo  */
/*Local para buscar a classe das divisões de cada parte do tabuleiro ok  */
        var espaco = document.getElementsByClassName('espaco');
    for (var i = 0; i < espaco.length; i++) 
    {
/*Região para adicionar um evento ao clicar  */
            espaco[i].addEventListener("click", function(){
            
            if (gameover) {return}
/*Região para selecionar um elemento dentro da pasta IMG.  */
            if (this.getElementsByTagName('img').length == 0){
/*Seleção para vez de cada jogador se relacionado a vez de cada player, com o uso do innerHTMl  */
                    if (playTime == player1){
                    this.innerHTML = 
                    "<img src='./img/download.png'>"
/*Setatribute para mudar a vez de cada jogador, do player 1 para o player 2  */    
                    this.setAttribute
                    ('jogada',player1)
                    playTime = player2
                
                }
/*Mesmo codigo anterior mas setado para mudar ao final para o player 1, com diferentes acessos para as imagens  */
                    else
                {   
                    
                        this.innerHTML = "<img src='./img/download.jpeg'>"
                        this.setAttribute('jogada',player2)
                    playTime = player1
                
                }
/*atualizar o mostrador ao final de cada chamada da função para preencher espaços*/
            atualizamostrador()
/*Chamada para a função que irá verificar as possiveis jogadas  */
            verificarvencendor()
            }
            
        }
        )
     }
}
/*Função asricrona para verificar vencedor */
 async function verificarvencendor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";
/*Inicialmente estrutura para verificar combinações de jogadas por meio do atributo jogada dentro de cada div */
    if ((a1 == b1 && a1 == c1 && a1 != "")||
            (a1 == a2 && a1 == a3 && a1 != "")||
                (a1 == b2 && a1 == c3 && a1 != ""))
                        {vencedor = a1;}
  /*------------------------------------------------------------------------------------*/  
                else if ((b2 == b1 && b2 == b3 && b2 != "") || 
                        (b2 == a2 && b2 == c2 && b2 != "") || 
                            (b2 == a3 && b2 == c1 && b2 != ""))
                                    {vencedor = b2;}
    /*------------------------------------------------------------------------------------*/                       
                        else if ((c3 == c2 && c3 == c1) || 
                                    (c3 == a3 && c3 == b3 && c3 != ""))
                                        {vencedor = c3}
  /*------------------------------------------------------------------------------------*/ 
  /*Caso alguma condição seja atendida e um vencedor for definido a var que controla o mostrador e a inicializadora de espaços receberá o valor true : var gameover */
            if (vencedor != "") 
            {
                gameover = true;
/*Função que gera um delay no Script assim executando o HTML antes */
                await sleep(50)
/*Alerta para mostrar o vencedor*/
                alert('O ganhador é o jogador : ' + vencedor)
            }
/*Função para verificar se todos os espaços sao diferentes de vazio, e mesmo assim a var vencedor é igual a vazio, assim definindo que o jogo deu empate */
            else if(
                (a1 != "" && a2 != "" && a3 != "" && 
                b1 !="" && b2 !="" && b3 != "" && 
                c1 != "" && c2 !="" && c3 !="" && 
                vencedor == "")) 
                
                {
                gameover = true

                await sleep(50)

                alert("DEU VELHA")
                }

  }

/*Utilizado para criar um delay por meio de 50 milisegundos */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
   
  /*------------------------------------------------------------------------------------*/ 


/*Variavel para selecionar um elemento dentro do doc html */
var btn = document.querySelector("#refresh")
/*Evento para registrar o click no botao e executar a função reload e dar refresh na pagina e zerar o tabuleiro  */
btn.addEventListener('click', function(){
    location.reload()
})

