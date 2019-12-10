import { expect } from "chai";
import { printArray, fizzer } from "./fizzbuzz";

describe('Fizzbuzz', () => { 
    it('should print numbers in a range', () => { 
        const output = printArray(100)
        expect(output.length).to.eql(100);
    });

    it('should fizz not 3', () => { 
        const output = printArray(3)
        expect(output).to.eql([1,2,"fizz"]);
    });

    it('should buzz not 5', () => { 
        const output = printArray(5)
        expect(output).to.eql([1,2,"fizz",4,"buzz"]);
    });

    it('fizzer should return fizz if divisble by 3', () => { 
        let output1 = fizzer(3)
        expect(output1).to.eql("fizz");
        let output2 = fizzer(21)
        expect(output2).to.eql("fizz");
    });

    it('buzzer should return buzz if divisble by 5', () => { 
        let output1 = fizzer(5)
        expect(output1).to.eql("buzz");
        let output2 = fizzer(50)
        expect(output2).to.eql("buzz");
    });

    it('should fizzbuzz not 15', () => { 
        const output = fizzer(15)
        expect(output).to.eql("fizzbuzz");
    });

});