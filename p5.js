// start a new p5js instance
p5 = new P5()
s1.init({src: p5.canvas})

p5.hide();
// no need for setup

start = 0
offset = 0
inc = 0.005

p5.draw = function ()
{
  p5.background(0,2)
  p5.noStroke()
  p5.translate(p5.width/2, p5.height/2)
  p5.rotate(p5.millis()*0.001)
  p5.rect(0,0,200*cc[2],200*cc[2])
  if(cc[3] != 0)
  {
    offset = start
     p5.beginShape()
     for (let x = 0; x <= p5.width; x+=5)
     {
       y = p5.noise(offset) * p5.height + 100
       p5.vertex(x,y )
       offset+=inc
       if(x === p5.width/4){
         p5.circle(x,y-50,25)
       }
     }
     p5.endShape()
     start +=inc
  }
}
src(s1).mult(osc(10,0.1,2)).out(o1)
render(o1)

src(s1).mult(osc(10,0.1*ccActual[4],2)).out(o1)

osc(10,0.1,2).out(o0)






hush()

// use the p5 canvas as a source for hydra
s0.init({src: p5.canvas})
// p5 out
src(s0).out()
// in a browser you'll want to hide the canvas
p5.hide();
// no need for setup
p5.noFill()
p5.strokeWeight(20);
p5.stroke(255);


tileCount = 20;
moduleColor = 0;
moduleAlpha = 180;
maxDistance = 500;
moduleColor = p5.color(0, 0, 0, moduleAlpha);



// p5 draw loop
//this will be your main P5 loop
p5.draw = ()=>{

  p5.background("yellow")

  if(ccActual[1] == 0)
  {
    offset = start

     p5.beginShape()

     for (let x = 0; x <= p5.width; x+=5)
     {
       y = p5.noise(offset) * p5.height + 100
       p5.vertex(x,y )
       offset+=inc
       if(x === p5.width/4){
         p5.circle(x,y-50,25)
       }
     }

     p5.endShape()

     start +=inc
  }

 //  offset = start
 //
 //  p5.beginShape()
 //
 //  for (let x = 0; x <= p5.width; x+=5)
 //  {
 //    y = p5.noise(offset) * p5.height + 100
 //    p5.vertex(x,y )
 //    offset+=inc
 //    if(x === p5.width/4){
 //      p5.circle(x,y-50,25)
 //    }
 //  }
 //
 //  p5.endShape()
 //
 //  start +=inc
 //
 //
 //  p5.clear();
 //
 //  p5.stroke(moduleColor);
 //
 // //squares
 //  p5.background(255)
 //
 //  for (gridY = 0; gridY < p5.width; gridY += 25) {
 //    for ( gridX = 0; gridX < p5.height; gridX += 25) {
 //      diameter = p5.dist(p5.width/2*ccActual[3], p5.height/2*ccActual[3], gridX, gridY);
 //      diameter = diameter / maxDistance * ccActual[3];
 //      p5.push();
 //      p5.translate(gridX, gridY, diameter * 5);
 //      p5.rect(0, 0, diameter*cc[3], diameter*cc[3]); // also nice: ellipse(...)
 //      p5.pop();
 //    }
 //  }

  //light square
  p5.fill("green")
  p5.square(p5.random(p5.width),p5.random(p5.height),p5.random(50,100))
  p5.line(0,0,p5.random(p5.width),p5.random(p5.height))
  p5.fill(p5.random(255),p5.random(255),p5.random(255))
  p5.circle(p5.width/2,p5.height/2,75)
}

hush()
