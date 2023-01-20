const containsOnlyNumbers = (array) => {
  return array.every((element) => {
    return typeof element === 'number';
  });
};
const getScore= rolls =>{
  if (!Array.isArray(rolls)) {
    throw new Error('Not an array');
  }
  if (rolls.length === 0) {
    throw new Error('Empty error');
  }
  if(!containsOnlyNumbers(rolls)){
    throw new Error('Not all elements are numbers');
  }
  let frameCount=0,totalScore=0;
  for(let iterator=0;iterator<rolls.length;iterator++){
    frameCount++;
    let scoreType=0;
    if(iterator+1===rolls.length){
      throw new Error('Invalid input length');
    }
    else if(rolls[iterator]<0 || rolls[iterator+1]<0){
      throw new Error('Negative score not possible');
    }


    if(rolls[iterator]+rolls[iterator+1] <10){
      totalScore+=rolls[iterator+1]+rolls[iterator];
      iterator+=1;
      scoreType=0;
    }
    else if(iterator+2===rolls.length){
      throw new Error('Invalid input length');
    }
    else if(rolls[iterator]===10){
      totalScore+=10+rolls[iterator+1]+rolls[iterator+2];
      scoreType=2;
    }else{
      totalScore+=10+rolls[iterator+2];
      iterator+=1;
      scoreType=1;
    }


    if(frameCount===10){
      switch(scoreType){
      case 0:{
        if(iterator+1!==rolls.length){
          throw new Error('Invalid number of frames');
        }
        return totalScore;
      }
      case 1:{
        if(iterator+2!==rolls.length){
          throw new Error('Invalid number of frames');
        }
        return totalScore;
      }
      default:{
        if(iterator+3!==rolls.length){
          throw new Error('Invalid number of frames');
        }
        return totalScore;
      }
      }
    }
  }  
};

console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
module.exports={getScore};