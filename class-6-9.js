src(o0).modulate(src(o2),0.15.modulatePixalate(noise(2,0.01).pixelate(16,16)).out()

hush()

shape(4,0.5).color(0.5,1,1).out(o0)
osc(10,0.1).modulate(noise(2,0.1)).out(o1)

src(o2).modulate(src(o1),01).blend(o0,0.1).out(o2)


//original
src(o2).modulate(src(o1)).blend(o0,0.1).out(o2)
//the modulation originates on the corner of the Screen
//modulation is moving up and to the left, to fix, add an offset to the modulation source:
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.01).blend(o0,0.1).out(o2)
// what add(solid(1,1),-0.5),0.01) is that it adds two images
//the first is our original graphic, the second is the one that you are subtracting the position for in order to center the first graphic

render(o2)
