
// circle lights with voronoi colors
voronoi(10,5,5).mult(osc(10,0.2,0.5)).saturate(2).out()

voronoi(10,5,5).out()


hush()

hush()

update = () =>
{
  if(ccActual[3] == 0) ocean() //by the ocean
  if(ccActual[3] == 1) sparklingWater() // who Manned
  if(ccActual[3] == 2) drop()// he didn't like
  if(ccActual[3] == 3) honda() //ocean
  if(ccActual[3] == 4) waterwheel() //beautifu;
  if(ccActual[3] == 5) psychoWave() //dangerous
  if(ccActual[3] == 6) wave()// he has to
  if(ccActual[3] == 7) splash()//go up
  if(ccActual[3] == 8) storm()//sound
  if(ccActual[3] == 9) hurricane() // the alarm
  if(ccActual[3] == 10) dripple() //sax
  if(ccActual[3] == 11) ocean() // repeats
  if(ccActual[3] == 12) hush() //silent
}

ocean() //by the ocean
sparklingWater()

// who Manned
if(ccActual[3] == 2) drop()// he didn't like
if(ccActual[3] == 3) honda() //ocean
if(ccActual[3] == 4) waterwheel() //beautifu;
if(ccActual[3] == 5) psychoWave() //dangerous
if(ccActual[3] == 6) wave()// he has to
if(ccActual[3] == 7) splash()//go up
if(ccActual[3] == 8) storm()//sound
if(ccActual[3] == 9) hurricane() // the alarm
if(ccActual[3] == 10) dripple() //sax
if(ccActual[3] == 11) ocean() // repeats
if(ccActual[3] == 12) hush() //silent



//THINGS THAT WORKED

//wavey water
// b = 0
// update = () => b += 0.001 * Math.sin(time)


wave = ()=>

voronoi(()=>ccActual[0],0,0).color(.2,0.3,0.9)
  .modulateScrollY(osc(10),0.5,0)
  .out()


//storm
storm = ()=>

shape(2).mask(noise(10,0.1)).color(1,0,0).invert(1).rotate(()=>6+Math.sin(time)*10).out()

storm()

drop = ()=>

shape(2).mask(noise(cc[0],0.1)).color(1,0,0).invert(1).rotate(()=>6+Math.sin(time)*cc[0]).out()

hurricane = ()=>

voronoi()
  .add(gradient())
  .rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
              .kaleid(50)
              .scale(({time})=>Math.sin(time*cc[0])*0.5+1)
              .modulate(noise(0.6,0.5)),
              0.5)
  .out()

splash()

splash = ()=> gradient().color(1,0,1).invert(1).saturate(5)
  .add(voronoi(50,0.3,0.3)).repeat(10,10).kaleid([3,5,7,9].fast(cc[0])).modulateScale(osc(4,-0.5,0),15,0).out()


dripple = ()=>

gradient().invert(1).kaleid([3,5,7,9].fast(0.5))
.modulateScale(osc(cc[2],-0.5,1).kaleid(50).scale(0.5),10,0)
.out()

drippleActual = ()=>

gradient().invert(1).kaleid([3,5,7,9].fast(0.5))
.modulateScale(osc(()=>ccActual[2],-0.5,1).kaleid(50).scale(ccActual[0]),10,0)
.out()


//wavy pattern
  psychoWave = ()=>
  shape(4,0.95)
    .mult(osc(0.75,1,0.65))
    .hue(0.9)
    .modulateRepeatX(
      osc(10, 5.0, ({time}) => Math.sin(time*(cc[0])))
    )
    .scale(10,0.5,0.05) //first value could be a cc
  .out()

psychoWave()

// honda
honda = ()=>
osc(10,-0.25,1)
    .color(0,0.1,0.9)
    .saturate(8).hue(0.9)
    .kaleid(50)
    .mask(
        noise(25,2)
        .modulateScale(noise(0.25,0.05))
      )
    .modulateScale(
      osc(6,-0.5,()=>cc[2])
      .kaleid(50)
    )
    .scale(()=>cc[2],0.5,0.75)
    .out()

    // background of house
    waterwheel = ()=>
    noise(10, 0.1).color(1,0.5,0.5).invert([1]).add(shape(2,0.8).kaleid(()=>6+Math.sin(time)*4)).out()

honda()

sparklingWater = ()=>
noise(25,2).invert(0).color(0.7, 0.9, 1).saturate(4).modulateScale(noise(()=>cc[2],0.05)).out()


ocean = ()=>
osc(1,1,0).color(0,0,1).hue(0.9).modulatePixelate(noise(5,1),()=>cc[0]).out()

ocean()

honda()

hush()










// THINGS TO KEEP IN MIND
//use color palettes that you like

tri = shape(3).kaleid(3).scale(.4)
tri.out(o0)

tri.scale(()=> cc[0]).out(o0)

osc(10, 0.4, 0.6).hue(()=> cc[1]).modulate(noise(2, 0.5), 0.5).out(o1)

src(o2).modulate(src(o1).add(solid(1,1),0.5),0.007),blend(o0,0.1).out(o2)
src(o2).multi(o1).out(o3)

render(o3)

osc().color(()=>cc[0], ()=>cc[0]*2, ()=>cc[0]*5).kaleid(100).out()

hush()

//house
shape(3).rotate(45).scrollY(.2).scrollX([-0.2,0.2])
  .add(
  shape(4).scrollY(-.2).scrollX([-0.2,0.2].offset(0.5))
).out()


waterwheel()
stormEnd()

// background of house
waterwheel = ()=> noise(10, 0.1).color(1,0.5,0.5).invert([1]).add(shape(2,0.8).kaleid(()=>6+Math.sin(time)*4)).out()

//goes to white, then to black
stormEnd = ()=>
noise(3,0.1)
  .thresh( ()=>Math.sin(time/2) , [0.04,1,0.75,1]) //this numbers in [] could be cc values
  .out()

hush()

osc(4,-0.5,0).kaleid(50).scale(0.5).out()
