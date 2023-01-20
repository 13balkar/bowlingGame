const {getScore}=require('../functionalities/bowlingScoreFinder');
describe('Bowl score finder',()=>{
  describe('Calculate the score of each roll',()=>{
    it('Should throw error when input is not an array',()=>{
      expect(()=>getScore('abc')).toThrow('Not an array');
    });
    it('Should return error message when array is empty',()=>{
      expect(()=>getScore([])).toThrow('Empty error');
    });
    it('Should return error message when any element of array is not integer',()=>{
      expect(()=>getScore([1,2,3,4,'a',5])).toThrow('Not all elements are numbers');
    });
    it('Should return error message when there  is a negative entry',()=>{
      expect(()=>getScore([-3,4,6,2])).toThrow('Negative score not possible');
    });
    it('Should return error message when there  invalid number of frames',()=>{
      expect(()=>getScore([10,10,10,10,10,10,10,10,10,10,10,10,10])).toThrow('Invalid number of frames');
    });
    it('Should return return valid score if last throw is open',()=>{
      expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
    it('Should return return valid score if last throw is strike',()=>{
      expect(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
    });
    it('Should return return valid score if last throw is spear',()=>{
      expect(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,6,8])).toBe(34);
    });
  });
    
});