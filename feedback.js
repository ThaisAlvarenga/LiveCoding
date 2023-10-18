
solid([0,255]).out()

solid(1,1,1).out()
shape(3).rotate( () => time%360).out(o0)

hush()
render(o0)
//osc(10,10,10).out()
