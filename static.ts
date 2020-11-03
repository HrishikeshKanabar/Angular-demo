class Circle {
    static pi: number = 3.14;
    
    static calculateArea(radius:number) {
        console.log(""+this.pi * radius * radius);
        return this.pi * radius * radius;
    }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5