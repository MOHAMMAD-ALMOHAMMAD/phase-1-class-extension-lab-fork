// Your code here
class Polygon {
    constructor(sides) {
        this.sides=sides;
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
         return this.sides.reduce((side,acc) =>side+acc,0);
    }

}

class Triangle extends Polygon {
    constructor(sides) {
        super(sides);
        }
    get isValid() {
        if(this.sides[0]+this.sides[1]>this.sides[2] &&
        this.sides[1]+this.sides[2]>this.sides[0] &&
        this.sides[2]+this.sides[0]>this.sides[1]) return true
        else return false;
    }
}
class Square extends Polygon {
    constructor(sides) {
        super(sides)
        
    }
    get isValid() {
        let flag=false
        const firstside =this.sides[0]
        for(let side of this.sides){
          if(side===firstside) flag=true
          else {
            flag=false
            break;
          }
        }
        return flag
      
      }
    

    get area () {
        return this.sides[0]**2
    }
}
