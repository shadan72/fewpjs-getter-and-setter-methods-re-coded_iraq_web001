// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
get diameter(){
  return 2 * this.radius
}
get circumference(){
  return 2 * Math.PI * this.radius
  
}
get area(){
  return Math.PI * (this.radius ** 2)
  
}
set diameter(newRadius){
  this.radius= newRadius / 2
}
set circumference(newRadius){
 this.radius= newRadius / Math.PI / 2
  
}
set area(newRadius){
  this.radius= Math.sqrt(newRadius) / Math.PI
  
}
}