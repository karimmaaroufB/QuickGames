$(document).ready(function() {
  var turn = 0;
  
  $(".cell").click(function() {
    if ($(this).text() === "") {
      if (turn % 2 === 0) {
        $(this).text("X");
      } else {
        $(this).text("O");
      }
      turn++;
      
      var winner = checkWinner();
      if (winner !== "") {
        alert("The winner is " + winner);
      }
    }
  });
  
  $("#reset").click(function() {
    resetGame();
  });
  
  function checkWinner() {
    var cells = $(".cell");
    var values = [];
    for (var i = 0; i < cells.length; i++) {
      values[i] = cells[i].innerHTML;
    }
    
    var winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (var j = 0; j < winningCombinations.length; j++) {
      var combination = winningCombinations[j];
      if (values[combination[0]] === values[combination[1]] && 
          values[combination[1]] === values[combination[2]] && 
          values[combination[0]] !== "") {
        return values[combination[0]];
      }
    }
    
    return "";
  }
  
  function resetGame() {
    $(".cell").text("");
    turn = 0;
  }
});
$("#toggle").click(function() {
  $("input[type='checkbox']").prop("checked", !$("input[type='checkbox']").prop("checked"));
});


