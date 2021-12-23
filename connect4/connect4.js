var c1r1 = false;
var c1r2 = false;
var c1r3 = false;
var c1r4 = false;
var c1r5 = false;
var c1r6 = false;
var c2r1 = false;
var c2r2 = false;
var c2r3 = false;
var c2r4 = false;
var c2r5 = false;
var c2r6 = false;
var c3r1 = false;
var c3r2 = false;
var c3r3 = false;
var c3r4 = false;
var c3r5 = false;
var c3r6 = false;
var c4r1 = false;
var c4r2 = false;
var c4r3 = false;
var c4r4 = false;
var c4r5 = false;
var c4r6 = false;
var c5r1 = false;
var c5r2 = false;
var c5r3 = false;
var c5r4 = false;
var c5r5 = false;
var c5r6 = false;
var c6r1 = false;
var c6r2 = false;
var c6r3 = false;
var c6r4 = false;
var c6r5 = false;
var c6r6 = false;
var c7r1 = false;
var c7r2 = false;
var c7r3 = false;
var c7r4 = false;
var c7r5 = false;
var c7r6 = false;
var color= true;
var play = true;
var redWins = 0;
var yellowWins = 0;
var redArray = [];
var yellowArray = [];
function checkColumn(x){
  if(play == true){
  if(x==1){
    if(c1r6 == false){
      c1r6 = true;
      draw("16")
      color = !color
   turn();
    }else if(c1r5 == false){
      c1r5 = true;
      draw("15")
      color = !color
   turn();
    }else if(c1r4 == false){
      c1r4 = true;
      draw("14")
      color = !color
   turn();
    }else if(c1r3 == false){
      c1r3 = true;
      draw("13")
      color = !color
   turn();
    }else if(c1r2 == false){
      c1r2 = true;
      draw("12")
      color = !color
   turn();
    }else if(c1r1 == false){
      c1r1 = true;
      draw("11")
      checkTie();
      color = !color
   turn();
    }
  }else if(x == 2){
    if(c2r6 == false){
      c2r6 = true;
      draw("26")
      color = !color
   turn();
    }else if(c2r5 == false){
      c2r5 = true;
      draw("25")
      color = !color
   turn();
    }else if(c2r4 == false){
      c2r4 = true;
      draw("24")
      color = !color
   turn();
    }else if(c2r3 == false){
      c2r3 = true;
      draw("23")
      color = !color
   turn();
    }else if(c2r2 == false){
      c2r2 = true;
      draw("22")
      color = !color
   turn();
    }else if(c2r1 == false){
      c2r1 = true;
      draw("21")
      checkTie();
      color = !color
   turn();
    }
  }else if(x == 3){
    if(c3r6 == false){
      c3r6 = true;
      draw("36")
      color = !color
   turn();
    }else if(c3r5 == false){
      c3r5 = true;
      draw("35")
      color = !color
   turn();
    }else if(c3r4 == false){
      c3r4 = true;
      draw("34")
      color = !color
   turn();
    }else if(c3r3 == false){
      c3r3 = true;
      draw("33")
      color = !color
   turn();
    }else if(c3r2 == false){
      c3r2 = true;
      draw("32")
      color = !color
   turn();
    }else if(c3r1 == false){
      c3r1 = true;
      draw("31")
      checkTie();
      color = !color
   turn();
    }
  } else if(x == 4){
    if(c4r6 == false){
      c4r6 = true;
      draw("46")
      color = !color
   turn();
    }else if(c4r5 == false){
      c4r5 = true;
      draw("45")
      color = !color
   turn();
    }else if(c4r4 == false){
      c4r4 = true;
      draw("44")
      color = !color
   turn();
    }else if(c4r3 == false){
      c4r3 = true;
      draw("43")
      color = !color
   turn();
    }else if(c4r2 == false){
      c4r2 = true;
      draw("42")
      color = !color
   turn();
    }else if(c4r1 == false){
      c4r1 = true;
      draw("41")
      checkTie();
      color = !color
   turn();
    }
  } else if(x == 5){
    if(c5r6 == false){
      c5r6 = true;
      draw("56")
      color = !color
   turn();
    }else if(c5r5 == false){
      c5r5 = true;
      draw("55")
      color = !color
   turn();
    }else if(c5r4 == false){
      c5r4 = true;
      draw("54")
      color = !color
   turn();
    }else if(c5r3 == false){
      c5r3 = true;
      draw("53")
      color = !color
   turn();
    }else if(c5r2 == false){
      c5r2 = true;
      draw("52")
      color = !color
   turn();
    }else if(c5r1 == false){
      c5r1 = true;
      draw("51")
      checkTie();
      color = !color
   turn();
    }
  } else if(x == 6){
    if(c6r6 == false){
      c6r6 = true;
      draw("66")
      color = !color
   turn();
    }else if(c6r5 == false){
      c6r5 = true;
      draw("65")
      color = !color
   turn();
    }else if(c6r4 == false){
      c6r4 = true;
      draw("64")
      color = !color
   turn();
    }else if(c6r3 == false){
      c6r3 = true;
      draw("63")
      color = !color
   turn();
    }else if(c6r2 == false){
      c6r2 = true;
      draw("62")
      color = !color
   turn();
    }else if(c6r1 == false){
      c6r1 = true;
      draw("61")
      checkTie();
      color = !color
      turn();
    }
  } else if(x == 7){
    if(c7r6 == false){
      c7r6 = true;
      draw("76")
      color = !color
   turn();
    }else if(c7r5 == false){
      c7r5 = true;
      draw("75")
      color = !color
      turn();
    }else if(c7r4 == false){
      c7r4 = true;
      draw("74")
      color = !color
   turn();
    }else if(c7r3 == false){
      c7r3 = true;
      draw("73")
      color = !color
   turn();
    }else if(c7r2 == false){
      c7r2 = true;
      draw("72")
      color = !color
   turn();
    }else if(c7r1 == false){
      c7r1 = true;
      draw("71")
      checkTie();
      color = !color
      turn();
    }
  }
  }
}
function putPiece(x){
checkColumn(x);
  checkWin();
  }
function win(col){
  if(col === "red"){
  document.getElementById("body").style.backgroundColor = "red"
  alert("Red Won! Restarting...")
}else if(col === "yellow"){
  document.getElementById("body").style.backgroundColor = "yellow"
  alert("Yellow Won! Restarting...")
}
}
function turn(){
    if(color == true && play == true){
        document.getElementById('turn').innerText = "Red's Turn";
        document.getElementById("turn").style.backgroundColor = "red"
    }else if(color == false && play == true){
        document.getElementById('turn').innerText = "Yellow's Turn";
        document.getElementById("turn").style.backgroundColor = "yellow"
   }
}

function checkTie(){
    if(play == true && c1r1 == true && c2r1 == true && c3r1 == true && c4r1 == true && c5r1 == true && c6r1==true && c7r1==true){
      restart();
      alert("It was a tie!");
    }
  }


function draw(spot){
  var i = parseInt(spot)
  if(color == true){
  document.getElementById(spot).style.backgroundColor = "red"
  redArray.push(i);
}else if(color == false) {
  document.getElementById(spot).style.backgroundColor = "yellow"
  yellowArray.push(i);
}
}
function restart(){
    document.location.reload()
}

function checkWin(){
  if(redArray.includes(11) && redArray.includes(12) && redArray.includes(13) && redArray.includes(14)){
    win("red");
     restart();
   }else if(redArray.includes(15) && redArray.includes(12) && redArray.includes(13) && redArray.includes(14)){
     win("red");
     restart();
   }else if(redArray.includes(15) && redArray.includes(16) && redArray.includes(13) && redArray.includes(14)){
     win("red");
     restart();
   }else if(redArray.includes(21) && redArray.includes(22) && redArray.includes(23) && redArray.includes(24)){
     win("red");
     restart();
   }else if(redArray.includes(25) && redArray.includes(22) && redArray.includes(23) && redArray.includes(24)){
     win("red");
     restart();
   }else if(redArray.includes(25) && redArray.includes(26) && redArray.includes(23) && redArray.includes(24)){
     win("red");
     restart();
   }else if(redArray.includes(31) && redArray.includes(32) && redArray.includes(33) && redArray.includes(34)){
     win("red");
     restart();
   }else if(redArray.includes(35) && redArray.includes(32) && redArray.includes(33) && redArray.includes(34)){
     win("red");
     restart();
   }else if(redArray.includes(35) && redArray.includes(36) && redArray.includes(33) && redArray.includes(34)){
     win("red");
     restart();
   }else if(redArray.includes(41) && redArray.includes(42) && redArray.includes(43) && redArray.includes(44)){
     win("red");
     restart();
   }else if(redArray.includes(45) && redArray.includes(42) && redArray.includes(43) && redArray.includes(44)){
     win("red");
     restart();
   }else if(redArray.includes(45) && redArray.includes(46) && redArray.includes(43) && redArray.includes(44)){
     win("red");
     restart();
   }else if(redArray.includes(51) && redArray.includes(52) && redArray.includes(53) && redArray.includes(54)){
     win("red");
     restart();
   }else if(redArray.includes(55) && redArray.includes(52) && redArray.includes(53) && redArray.includes(54)){
     win("red");
     restart();
   }else if(redArray.includes(55) && redArray.includes(56) && redArray.includes(53) && redArray.includes(54)){
     win("red");
     restart();
   }else if(redArray.includes(61) && redArray.includes(62) && redArray.includes(63) && redArray.includes(64)){
     win("red");
     restart();
   }else if(redArray.includes(65) && redArray.includes(62) && redArray.includes(63) && redArray.includes(64)){
     win("red");
     restart();
   }else if(redArray.includes(65) && redArray.includes(66) && redArray.includes(63) && redArray.includes(64)){
     win("red");
     restart();
   }else if(redArray.includes(71) && redArray.includes(72) && redArray.includes(73) && redArray.includes(74)){
     win("red");
     restart();
   }else if(redArray.includes(75) && redArray.includes(72) && redArray.includes(73) && redArray.includes(74)){
     win("red");
     restart();
   }else if(redArray.includes(75) && redArray.includes(76) && redArray.includes(73) && redArray.includes(74)){
       win("red");
     restart();
   }else if(redArray.includes(11) && redArray.includes(21) && redArray.includes(31) && redArray.includes(41)){
       win("red");
     restart();
   }else if(redArray.includes(51) && redArray.includes(21) && redArray.includes(31) && redArray.includes(41)){
       win("red");
     restart();
   }else if(redArray.includes(51) && redArray.includes(61) && redArray.includes(31) && redArray.includes(41)){
       win("red");
     restart();
   }else if(redArray.includes(51) && redArray.includes(61) && redArray.includes(71) && redArray.includes(41)){
       win("red");
     restart();
   }else if(redArray.includes(12) && redArray.includes(22) && redArray.includes(32) && redArray.includes(42)){
       win("red");
     restart();
   }else if(redArray.includes(52) && redArray.includes(22) && redArray.includes(32) && redArray.includes(42)){
       win("red");
     restart();
   }else if(redArray.includes(52) && redArray.includes(62) && redArray.includes(32) && redArray.includes(42)){
       win("red");
     restart();
   }else if(redArray.includes(52) && redArray.includes(62) && redArray.includes(72) && redArray.includes(42)){
       win("red");
     restart();
   }else if(redArray.includes(13) && redArray.includes(23) && redArray.includes(33) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(53) && redArray.includes(23) && redArray.includes(33) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(53) && redArray.includes(63) && redArray.includes(33) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(53) && redArray.includes(63) && redArray.includes(73) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(14) && redArray.includes(24) && redArray.includes(34) && redArray.includes(44)){
       win("red");
     restart();
   }else if(redArray.includes(54) && redArray.includes(24) && redArray.includes(34) && redArray.includes(44)){
       win("red");
     restart();
   }else if(redArray.includes(54) && redArray.includes(64) && redArray.includes(34) && redArray.includes(44)){
       win("red");
     restart();
   }else if(redArray.includes(54) && redArray.includes(64) && redArray.includes(74) && redArray.includes(44)){
       win("red");
     restart();
   }else if(redArray.includes(15) && redArray.includes(25) && redArray.includes(35) && redArray.includes(45)){
       win("red");
     restart();
   }else if(redArray.includes(55) && redArray.includes(25) && redArray.includes(35) && redArray.includes(45)){
       win("red");
     restart();
   }else if(redArray.includes(55) && redArray.includes(65) && redArray.includes(35) && redArray.includes(45)){
       win("red");
     restart();
   }else if(redArray.includes(55) && redArray.includes(65) && redArray.includes(75) && redArray.includes(45)){
       win("red");
     restart();
   }else if(redArray.includes(16) && redArray.includes(26) && redArray.includes(36) && redArray.includes(46)){
       win("red");
     restart();
   }else if(redArray.includes(56) && redArray.includes(26) && redArray.includes(36) && redArray.includes(46)){
       win("red");
     restart();
   }else if(redArray.includes(56) && redArray.includes(66) && redArray.includes(36) && redArray.includes(46)){
       win("red");
     restart();
   }else if(redArray.includes(56) && redArray.includes(66) && redArray.includes(76) && redArray.includes(46)){
       win("red");
     restart();
   }else if(redArray.includes(46) && redArray.includes(35) && redArray.includes(24) && redArray.includes(13)){
       win("red");
     restart();
   }else if(redArray.includes(56) && redArray.includes(45) && redArray.includes(34) && redArray.includes(23)){
       win("red");
     restart();
   }else if(redArray.includes(45) && redArray.includes(34) && redArray.includes(23) && redArray.includes(12)){
       win("red");
     restart();
   }else if(redArray.includes(11) && redArray.includes(22) && redArray.includes(33) && redArray.includes(44)){
       win("red");
     restart();
   }else if(redArray.includes(22) && redArray.includes(33) && redArray.includes(44) && redArray.includes(55)){
       win("red");
     restart();
   }else if(redArray.includes(33) && redArray.includes(44) && redArray.includes(55) && redArray.includes(66)){
       win("red");
     restart();
   }else if(redArray.includes(43) && redArray.includes(54) && redArray.includes(65) && redArray.includes(76)){
       win("red");
     restart();
   }else if(redArray.includes(32) && redArray.includes(43) && redArray.includes(54) && redArray.includes(65)){
       win("red");
     restart();
   }else if(redArray.includes(21) && redArray.includes(32) && redArray.includes(43) && redArray.includes(54)){
       win("red");
     restart();
   }else if(redArray.includes(53) && redArray.includes(23) && redArray.includes(33) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(31) && redArray.includes(42) && redArray.includes(53) && redArray.includes(64)){
       win("red");
     restart();
   }else if(redArray.includes(42) && redArray.includes(53) && redArray.includes(64) && redArray.includes(75)){
       win("red");
     restart();
   }else if(redArray.includes(41) && redArray.includes(52) && redArray.includes(63) && redArray.includes(74)){
       win("red");
     restart();
   }else if(redArray.includes(41) && redArray.includes(32) && redArray.includes(23) && redArray.includes(14)){
       win("red");
     restart();
   }else if(redArray.includes(51) && redArray.includes(42) && redArray.includes(33) && redArray.includes(24)){
       win("red");
     restart();
   }else if(redArray.includes(42) && redArray.includes(33) && redArray.includes(24) && redArray.includes(15)){
       win("red");
     restart();
   }else if(redArray.includes(16) && redArray.includes(25) && redArray.includes(34) && redArray.includes(43)){
       win("red");
     restart();
   }else if(redArray.includes(25) && redArray.includes(34) && redArray.includes(43) && redArray.includes(52)){
       win("red");
     restart();
   }else if(redArray.includes(34) && redArray.includes(43) && redArray.includes(52) && redArray.includes(61)){
       win("red");
     restart();
   }else if(redArray.includes(44) && redArray.includes(53) && redArray.includes(62) && redArray.includes(71)){
       win("red");
     restart();
   }else if(redArray.includes(35) && redArray.includes(44) && redArray.includes(53) && redArray.includes(62)){
       win("red");
     restart();
   }else if(redArray.includes(26) && redArray.includes(35) && redArray.includes(44) && redArray.includes(53)){
       win("red");
     restart();
   }else if(redArray.includes(36) && redArray.includes(45) && redArray.includes(54) && redArray.includes(63)){
       win("red");
     restart();
   }else if(redArray.includes(45) && redArray.includes(54) && redArray.includes(63) && redArray.includes(72)){
       win("red");
     restart();
   }else if(redArray.includes(36) && redArray.includes(45) && redArray.includes(54) && redArray.includes(63)){
       win("red");
     restart();
   }else if(redArray.includes(46) && redArray.includes(55) && redArray.includes(64) && redArray.includes(73)){
       win("red");
     restart();
   }else if(yellowArray.includes(11) && yellowArray.includes(12) && yellowArray.includes(13) && yellowArray.includes(14)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(15) && yellowArray.includes(12) && yellowArray.includes(13) && yellowArray.includes(14)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(15) && yellowArray.includes(16) && yellowArray.includes(13) && yellowArray.includes(14)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(21) && yellowArray.includes(22) && yellowArray.includes(23) && yellowArray.includes(24)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(25) && yellowArray.includes(22) && yellowArray.includes(23) && yellowArray.includes(24)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(25) && yellowArray.includes(26) && yellowArray.includes(23) && yellowArray.includes(24)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(31) && yellowArray.includes(32) && yellowArray.includes(33) && yellowArray.includes(34)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(35) && yellowArray.includes(32) && yellowArray.includes(33) && yellowArray.includes(34)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(35) && yellowArray.includes(36) && yellowArray.includes(33) && yellowArray.includes(34)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(41) && yellowArray.includes(42) && yellowArray.includes(43) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(45) && yellowArray.includes(42) && yellowArray.includes(43) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(45) && yellowArray.includes(46) && yellowArray.includes(43) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(51) && yellowArray.includes(52) && yellowArray.includes(53) && yellowArray.includes(54)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(55) && yellowArray.includes(52) && yellowArray.includes(53) && yellowArray.includes(54)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(55) && yellowArray.includes(56) && yellowArray.includes(53) && yellowArray.includes(54)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(61) && yellowArray.includes(62) && yellowArray.includes(63) && yellowArray.includes(64)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(65) && yellowArray.includes(62) && yellowArray.includes(63) && yellowArray.includes(64)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(65) && yellowArray.includes(66) && yellowArray.includes(63) && yellowArray.includes(64)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(71) && yellowArray.includes(72) && yellowArray.includes(73) && yellowArray.includes(74)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(75) && yellowArray.includes(72) && yellowArray.includes(73) && yellowArray.includes(74)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(75) && yellowArray.includes(76) && yellowArray.includes(73) && yellowArray.includes(74)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(11) && yellowArray.includes(21) && yellowArray.includes(31) && yellowArray.includes(41)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(51) && yellowArray.includes(21) && yellowArray.includes(31) && yellowArray.includes(41)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(51) && yellowArray.includes(61) && yellowArray.includes(31) && yellowArray.includes(41)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(51) && yellowArray.includes(61) && yellowArray.includes(71) && yellowArray.includes(41)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(12) && yellowArray.includes(22) && yellowArray.includes(32) && yellowArray.includes(42)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(52) && yellowArray.includes(22) && yellowArray.includes(32) && yellowArray.includes(42)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(52) && yellowArray.includes(62) && yellowArray.includes(32) && yellowArray.includes(42)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(52) && yellowArray.includes(62) && yellowArray.includes(72) && yellowArray.includes(42)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(13) && yellowArray.includes(23) && yellowArray.includes(33) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(53) && yellowArray.includes(23) && yellowArray.includes(33) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(53) && yellowArray.includes(63) && yellowArray.includes(33) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(53) && yellowArray.includes(63) && yellowArray.includes(73) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(14) && yellowArray.includes(24) && yellowArray.includes(34) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(54) && yellowArray.includes(24) && yellowArray.includes(34) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(54) && yellowArray.includes(64) && yellowArray.includes(34) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(54) && yellowArray.includes(64) && yellowArray.includes(74) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(15) && yellowArray.includes(25) && yellowArray.includes(35) && yellowArray.includes(45)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(55) && yellowArray.includes(25) && yellowArray.includes(35) && yellowArray.includes(45)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(55) && yellowArray.includes(65) && yellowArray.includes(35) && yellowArray.includes(45)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(55) && yellowArray.includes(65) && yellowArray.includes(75) && yellowArray.includes(45)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(16) && yellowArray.includes(26) && yellowArray.includes(36) && yellowArray.includes(46)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(56) && yellowArray.includes(26) && yellowArray.includes(36) && yellowArray.includes(46)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(56) && yellowArray.includes(66) && yellowArray.includes(36) && yellowArray.includes(46)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(56) && yellowArray.includes(66) && yellowArray.includes(76) && yellowArray.includes(46)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(46) && yellowArray.includes(35) && yellowArray.includes(24) && yellowArray.includes(13)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(56) && yellowArray.includes(45) && yellowArray.includes(34) && yellowArray.includes(23)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(45) && yellowArray.includes(34) && yellowArray.includes(23) && yellowArray.includes(12)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(11) && yellowArray.includes(22) && yellowArray.includes(33) && yellowArray.includes(44)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(22) && yellowArray.includes(33) && yellowArray.includes(44) && yellowArray.includes(55)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(33) && yellowArray.includes(44) && yellowArray.includes(55) && yellowArray.includes(66)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(43) && yellowArray.includes(54) && yellowArray.includes(65) && yellowArray.includes(76)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(32) && yellowArray.includes(43) && yellowArray.includes(54) && yellowArray.includes(65)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(21) && yellowArray.includes(32) && yellowArray.includes(43) && yellowArray.includes(54)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(53) && yellowArray.includes(23) && yellowArray.includes(33) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(31) && yellowArray.includes(42) && yellowArray.includes(53) && yellowArray.includes(64)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(42) && yellowArray.includes(53) && yellowArray.includes(64) && yellowArray.includes(75)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(41) && yellowArray.includes(52) && yellowArray.includes(63) && yellowArray.includes(74)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(41) && yellowArray.includes(32) && yellowArray.includes(23) && yellowArray.includes(14)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(51) && yellowArray.includes(42) && yellowArray.includes(33) && yellowArray.includes(24)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(42) && yellowArray.includes(33) && yellowArray.includes(24) && yellowArray.includes(15)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(16) && yellowArray.includes(25) && yellowArray.includes(34) && yellowArray.includes(43)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(25) && yellowArray.includes(34) && yellowArray.includes(43) && yellowArray.includes(52)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(34) && yellowArray.includes(43) && yellowArray.includes(52) && yellowArray.includes(61)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(44) && yellowArray.includes(53) && yellowArray.includes(62) && yellowArray.includes(71)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(35) && yellowArray.includes(44) && yellowArray.includes(53) && yellowArray.includes(62)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(26) && yellowArray.includes(35) && yellowArray.includes(44) && yellowArray.includes(53)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(36) && yellowArray.includes(45) && yellowArray.includes(54) && yellowArray.includes(63)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(45) && yellowArray.includes(54) && yellowArray.includes(63) && yellowArray.includes(72)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(36) && yellowArray.includes(45) && yellowArray.includes(54) && yellowArray.includes(63)){
       win("yellow");
     restart();
   }else if(yellowArray.includes(46) && yellowArray.includes(55) && yellowArray.includes(64) && yellowArray.includes(73)){
       win("yellow");
     restart();
   }
}
