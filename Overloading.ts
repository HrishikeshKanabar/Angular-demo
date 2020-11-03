class TestClass { 

  

   doPrint(name:string):void {
      console.log("doPrint() from Parent called…"); 
   }
   
   doPrint(number:number):number{
      console.log("doPrint()"+name);
      return name;
   }
} 