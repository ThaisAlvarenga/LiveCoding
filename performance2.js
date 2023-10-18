galaxy().out()



galaxy = ()=> voronoi(100,3,5).brightness(.5)
  .modulateRotate(osc(.15,0.2,.1).kaleid(50).scale(0.5),15,0)
  .mult(osc(50,-0.1,8).kaleid(9))
