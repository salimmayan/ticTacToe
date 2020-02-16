
  $(document).ready(function () {
// $('cell').each(function(el){
//   if(el == ''){
    $('.hide').hide()
    $('#start-game').click(function (e) { 
      e.preventDefault();
      $('.hide').show()
      startGame();
    });
 startGame = () => {
    let player2 = '';
    let player1 = prompt('Please choose X or O').toUpperCase();
    if(player1 === 'X'){
      player2 = 'O'
    } else {
      player2 = 'X'
    };
  }
    var randomNo = function() {
      return Math.floor((Math.random() * 8) + 1); //R&&om no generat|| from 1-8.
    };

    const board = ['','','','','','','','',''];

    const computerTurn = function(){
      var space = randomNo();
      while(board[space] !== '') {
          space = randomNo();
          console.log(`Inside while board is ${board[space]} and random number is ${space}`);
        }
            console.log("space is " + space);
          $('#' +  space).append(player2);
          board[space] = player2;
    }
  
   playGame = () => {
    $('.cell').each(function(el){
      $('#' + el).click(function(){
        if(!board[el]){
          $('#' + el).append(player1);
          board[el] = player1;
          console.log("player1 is " + player1);
          console.log("player2 is " + player2);
          if(board.includes('')){
            computerTurn();
          }          
       }
          console.log(board);
          })
      })
    }
      
      const checkWin = function(){
        ((board[7] == mark && board[8] == mark && board[9] == mark) || // across the top
        (board[4] == mark && board[5] == mark && board[6] == mark) || // across the middle
        (board[1] == mark && board[2] == mark && board[3] == mark) || // across the bottom
        (board[7] == mark && board[4] == mark && board[1] == mark) || // down the middle
        (board[8] == mark && board[5] == mark && board[2] == mark) || // down the middle
        (board[9] == mark && board[6] == mark && board[3] == mark) || // down the right side
        (board[7] == mark && board[5] == mark && board[3] == mark) || // diagonal
        (board[9] == mark && board[5] == mark && board[1] == mark)) // diagonal     
      }
    });



      // old class syntax
      // class Player {
      //   constructor(player1){
      //     this.player1 = player1;
      //   }
      
      //   player1() {
      //     console.log(this.player1);
      //   }
      // }
      
      // class Space {
      //   constructor(options){
    
      //   }
      // }
      // // board logic
      // class Board {
      //   constructor(){
      //   this.board = ['','','','','','','','',''];
      //   };
      
      //   drawBoard(){
      //     $('.board').append(this.board);
      //   }
      // }
    
      // class Game {
      //   constructor(){
      //     this.board = new Board();
      //     this.players = [
      //       new Player("x"),
      //       new Player("o")
      //     ]
      //   }
      // }

      // old play syntax (before loop)

    // $('#0').click(function(){
    //   if(!board[0]){
    //   $('#0').append(player1);
    //   board[0] = player1;
    //   console.log(player1);
    //   console.log(player2);
    //   computerTurn();
    //   }
    // })
    // $('#1').click(function(){
    //   if(!board[1]){
    //   $('#1').append(player1);
    //   board[1] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#2').click(function(){
    //   if(!board[2]){
    //   $('#2').append(player1);
    //   board[2] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#3').click(function(){
    //   if(!board[3]){
    //   $('#3').append(player1);
    //   board[3] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#4').click(function(){
    //   if(!board[4]){
    //   $('#4').append(player1);
    //   board[4] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#5').click(function(){
    //   if(!board[5]){
    //   $('#5').append(player1);
    //   board[5] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#6').click(function(){
    //   if(!board[6]){
    //   $('#6').append(player1);
    //   board[6] = player1;
    //   computerTurn();

    //   }
    // })
    // $('#7').click(function(){
    //     if(!board[7]){
    //     $('#7').append(player1);
    //     board[7] = player1;
    //     computerTurn();

    //     }
    //   })

    //   $('#8').click(function(){
    //     if(!board[8]){
    //     $('#8').append(player1);
    //     board[8] = player1;
    //     computerTurn();

    //     }
      
      

    
  
    // else {
    //   alert('err||')
    // };
  // });
//$("#header").click(function () {
    //$(".board").append(`${board1.board[0]}${board1.board[1]} ${board1.board[2]}${board1.board[3]}${board1.board[4]}<br>${board1.board[5]}${board1.board[6]} ${board1.board[7]}${board1.board[8]}${board1.board[9]}<br>${board1.board[10]}${board1.board[11]} ${board1.board[12]}${board1.board[13]}${board1.board[14]}<br>




// });




