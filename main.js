blu = document.getElementById('can');
shape = blu.getContext('2d');
shape.beginPath();
shape.lineWidth= 4;
shape.strokeStyle='blue';
shape.arc(420, 200, 100, 0, 2*Math.PI);
shape.stroke();

bla = document.getElementById('can');
shape = bla.getContext('2d');
shape.beginPath();
shape.lineWidth= 4;
shape.strokeStyle='black';
shape.arc(570, 200, 100, 0, 2*Math.PI);
shape.stroke();

red = document.getElementById('can');
shape = red.getContext('2d');
shape.beginPath();
shape.lineWidth= 4;
shape.strokeStyle='red';
shape.arc(720, 200, 100, 0, 2*Math.PI);
shape.stroke();

yel = document.getElementById('can');
shape = yel.getContext('2d');
shape.beginPath();
shape.lineWidth= 4;
shape.strokeStyle='yellow';
shape.arc(510, 350, 100, 0, 2*Math.PI);
shape.stroke();

gre = document.getElementById('can');
shape = gre.getContext('2d');
shape.beginPath();
shape.lineWidth= 4;
shape.strokeStyle='green';
shape.arc(660, 350, 100, 0, 2*Math.PI);
shape.stroke();