export function printArray(limit:number): (number | string)[] {
const a=[];
for(let i=0;i<limit;i++){
    a[i]=fizzer(i+1);
}
return a;
}


export function fizzer(i:number): string | number {

  let newValue: string = ""; 

  if(i%3==0) { newValue = "fizz" }
  
  if(i%5 == 0) { newValue+="buzz" }

  return newValue || i;
   
 }


// export function fizzer(i:number): string | number {
//      if(i%5 == 0 && i%3 ==0)
//        {
//          return "fizzbuzz";
//        }
//        else if(i%5 == 0)
//        {
//         return "buzz";
//        }
//        else if(i%3==0)
//          {
//           return "fizz";
//          }
//          else {
//            return i;
//          }

//     }
