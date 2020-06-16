// Add your Circle class here
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
  return this.pi * (radius ** 2)
  
}
set diameter(newRadius){
  return 2 * this.radius
}
set circumference(newRadius){
  return 2 * this.pi * this.radius
  
}
set area(newRadius){
  return this.pi * (radius ** 2)
  
}
}