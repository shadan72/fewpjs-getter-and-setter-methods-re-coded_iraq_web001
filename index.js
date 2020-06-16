// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius
      this.pi=Math.PI()
  }
get diameter(){
  return 2 * this.radius
}
get circumference(){
  return 2 * this.pi * this.radius
  
}
get area(){
  return this.pi * (this.radius ** 2)
  
}
set diameter(newRadius){
  this.radius= newRadius / 2
}
set circumference(newRadius){
 this.radius= newRadius / this.pi / 2
  
}
set area(newRadius){
  this.radius= Math.sqrt(newRadius) / this.pi
  
}
}