
hush()

render()

render(o0)
render(o1)
render(o2)
render(o3)

solid(0.5,1,1).out(o0) //cyan
solid(1,0.5,1).out(o1) //pink
solid(1,1,0.5).out(o2) //yellow
solid(0,1,0).out(o3) //green

voronoi().color(0.5,1,1).kaleid(()=>6+Math.sin(time)*9).out(o0)

shape(2).color(1,0.5,1).modulate(osc(10,1)).out(o1)

shape(2).colorama(1,0.5,1).modulate(osc(10,1)).out(o3)

s1.initScreen()
src(s1).colorama().out()


// you can define functions of complex things to be able to call them in a performance
waterCirc = ()=> shape(2).color(1,1,0.5).rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
  .kaleid(50)
  .scale(({time})=>Math.sin(time*1)*0.5+1)
  .modulate(noise(0.6,0.5)),0.5)

solid(1,1,1).out()

galaxy().out()


osc().rotate().kaleid().out()



galaxy = ()=> voronoi(100,3,5).brightness(.5)
  .modulateRotate(osc(.15,0.2,.1).kaleid(50).scale(0.5),15,0)
  .mult(osc(50,-0.1,8).kaleid(9))

luces = () => voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25,0.5),100)

hush()




//like fireflies, really liked this
//if you make the containers on voronoi really small, you can get a particle system
voronoi(20,2,10).color(120,2,0).brightness(0,150).out(o0)

















voronoi().color(0.5,1,1).kaleid(()=> 6+Math.sin(time)*9).out()

shape(2).color(1,0.5,1).modulate(osc(15,1)).out(o1)

shape(2,0.8).color(1,1,0.5).rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
  .kaleid(50)
  .scale(({time})=>Math.sin(time*1)*0.5+1)
  .modulate(noise(0.6,0.5)),0.5)
  .out(o2)

shape(2).colorama(1,0.5,1).modulate(osc(15,1)).out(o3)

s1.initScreen()
src(s1).colorama().out()




//TEST 3
hush()

render()

render(o0)

render(o1)

render(o2)

render(o3)

solid(0.5,1,1).out(o0) //cyan
solid(1,0.5,1).out(o1) //pink
solid(1,1,0.5).out(o2) //yellow
solid(0,0.5,0).out(o3) //green

voronoi()
  .color(0.5,1,1,1)
  .kaleid(()=> 6+Math.sin(time)*4)
  .out(o0)

shape(2,0.8).rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
  .kaleid(50)
  .scale(({time})=>Math.sin(time*1)*0.5+1)
  .modulate(noise(0.6,0.5)),0.5)
  .out(o2)


//mouth

shape(2).color(1,0.5,1).modulate(osc(10,1)).out(o1)
shape(2).colorama(0,1,0).modulate(osc(10,1)).out(o3)

//end
s0.initScreen()
src(s0).colorama().out()




//tEST 1




hush()

render()

render(o0)
render(o1)
render(o2)
render(o3)


solid(0.5,1,1).out(o0) //cyan
solid(1,1,1).out(o1) //white
solid(1,0.5,1).out(o2) //pink
solid(1,1,0.5).out(o3) //yellow


shape().modulate(osc(10,1)).out(o0)

shape(4).rotate([-3.14,3.14]).ease(['easeInOutCubic']).out(o2)

shape(2,0.8).colorama(1,1,0.5).kaleid(()=>6+Math.sin(time)*4).ease(['easeInOutCubic']).out(o2)

//up and down mouth
b = 0
update = () => b += 0.01 * Math.sin(time)
shape(2).scrollY(()=>b).out(o1)
update = () => b += 0.01 * Math.sin(time)
shape(2).scrollY(()=>b).colorama(1,0.5,1).out(o3)

voronoi()
  .color(0.5,1,1)
  .rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
              .kaleid(50)
              .scale(({time})=>Math.sin(time*1)*0.5+1)
              .modulate(noise(0.6,0.5)),
              0.5)
  .out(o0)

//wiggly mouth
shape(2).modulate(osc(10,1)).out(o1)
shape(2).modulate(osc(10,1)).colorama(1,1,0.5).out(o3)

s0.initScreen()
src(s0).colorama().out()





hush()
render()

render(o0)
render(o1)
render(o2)
render(o3)

solid(-0.5, (1,1),.9).out(o0) //cyan
solid(1,1),-0.5).out(o1) //red
solid(-0.5, (1,1)).out(o2) //green
solid(0, -0.5, (1,1)).out(o3) //blue


// estrella rodante
shape(4).rotate([-3.14,3.14].ease('easeInOutCubic')).out(o2)
shape(2,0.8).kaleid(()=>6+Math.sin(time)*4).out(o0)
shape(2,0.8).kaleid(()=>6+Math.sin(time)*4).out(o2)

// mixing water
voronoi()
  // .color(0.9,0.25,0.15)
  .rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
              .kaleid(50)
              .scale(({time})=>Math.sin(time*1)*0.5+1)
              .modulate(noise(0.6,0.5)),
              0.5)
  .out(o0)


//up and down line
b = 0
update = () => b += 0.01 * Math.sin(time)
shape(2).scrollY(()=>b).out(o1)
update = () => b += 0.01 * Math.sin(time)
shape(2).scrollY(()=>b).out(o3)

// wiggly mouth
shape(2).modulate(osc(30)).out(o1)
shape(2).modulate(osc(30)).out(o3)

//for the end
s0.initScreen()
src(s0).colorama(0.5).out(o0)
