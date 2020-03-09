var a = [];
var breite = 5;
var state = 1;
var i = 0;
var lookings = 0;
var bubbleisactive, insertionisactive, selectionisactive, radixisactive, binaryinsertionisactive;

function setup() {
  createCanvas(1580,800); //1580 //1050
  frameRate(60);
  angleMode(DEGREES);

  binaryinsertionisactive = true;
  for (let i = 0; i < round(width / breite); i++) {
    a [i] = i;
  }
  a = shuffle(a);
}

function draw() {
  background(0);
  show();
  algorithms();
  showtext();
}

function show() {
  push();
  translate(width,height);
  rotate(180);
  fill(100,255,100);
  noStroke();
  for (let i = 0; i < a.length; i++) {
    fill(map(a[i],0,a.length,0,255),map(a[i],0,a.length,0,255),map(a[i],0,a.length,255,0));
    rect(i * breite, 0, breite, map(a[i], 0,width,0,height - 25) * breite);
  }
  pop();
}

function showtext() {
  push();
  fill(255);
  text((a.length -1) + '  Elemente', 550, 20);
  text(lookings + '  Veränderungen', 700, 20);

  if (bubbleisactive) {
    text('Bubblesort', 400, 20);
  } else if (selectionisactive) {
    text('Selectionsort', 400, 20)
  } else if (insertionisactive) {
    text('Insertionsort', 400,20);
  } else if (binaryinsertionisactive) {
    text('Binaryinsertionsort', 400,20);
  }
  text('LeftMouse = change algorithm', 160, 20);
  text('→ = solve Maze', 20, 20);
  pop();

}

function shuffle(a1) {
  var a2 = [];
  for (let i = 0; i < a1.length; i++) {
    a2.push(a1[random(0,a1.length)]);
  }
}

function resetstats() {
  a = shuffle(a);
  lookings = 0;
  i = 0;
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    resetstats();
  }
}

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY > 0 && mouseY < height)  {
    if (bubbleisactive) {
      bubbleisactive = false;
      insertionisactive  = true;
      resetstats()
    } else if (insertionisactive) {
      insertionisactive = false;
      selectionisactive = true;
      resetstats()
    } else if (selectionisactive) {
      selectionisactive = false;
      radixisactive = true;
      resetstats();
    } else if (radixisactive) {
      radixisactive = false
      binaryinsertionisactive = true;
      resetstats();
    } else if (binaryinsertionisactive) {
      binaryinsertionisactive = false;
      bubbleisactive = true;
    }
  }
}

function bubbleSort(a) {
  var n = a.length - 1;
    var len = a.length;
      for(var j = 0 ; j < len - i - 1; j++){
        if (a[j] < a[j + 1]) {
          var temp = a[j];
          a[j] = a[j+1];
          a[j + 1] = temp;
          lookings++;
        }
     }
    if (i < n) {
      i++;
    } else {
      i = 0;
    }
    return a;
  }

function insertionSort (a) {
    let temp = a[i];
    var n = a.length - 1;
    for (var j = i - 1; j > -1 && a[j] < temp; j--) {
      a[j + 1] = a[j];
      lookings++;
    }
    a[j + 1] = temp;
  if (i < n) {
    i++;
  } else {
    i = 0;
  }
  return a;
}

function binaryinsertionSort (arr) {
    let temp = a[i];
    var n = a.length - 1;
    for (var j = i - 1; j > -1 && a[j] < temp; j--) {
      a[j + 1] = a[j];
      lookings++;
    }
    a[j + 1] = temp;


    if (i < n) {
      i++;
    } else {
      i = 0;
    }
    return a;
}

function selectionSort(a){
  var n = a.length - 1;
    var min = i;
    for(var j = i + 1; j < a.length; j++){
      if(a[j] > a[min]){
       min = j;
       lookings++;
      }
    }
    var temp = a[i];
    a[i] = a[min];
    a[min] = temp;
    if (i < n) {
      i++;
  } else {
    i = 0;
  }
  return a  ;
}

function radixSort(a) {
  return a;
}

function algorithms() {
  if (bubbleisactive) {
      a = bubbleSort(a);
  } else if (insertionisactive) {
      a = insertionSort(a);
  } else if (selectionisactive) {
      a = selectionSort(a);
  } else if (radixisactive) {
      a = radixSort(a);
  } else if (binaryinsertionisactive) {
      a = binaryinsertionSort(a);
  }
}























// sleep function ist böse aber geht
function sleep(ms) {
  var start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if((new Date().getTime() - start) > ms) {
      break;
    }
  }
}















// scrollen macht spaß
