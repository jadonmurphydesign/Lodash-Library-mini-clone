
const _ = {
    clamp(number, lower, upper){
      let lowerClampedValue = Math.max(number, lower)
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue
    },
    inRange(number, start, end){
      if (end === undefined){
        end = start
        start = 0
      }if(start > end){
        let temp = end
        end = start
        start = temp
      }
      let isInRange = start <= number && number < end;
      return isInRange
    },
    words(str){
      let word = str.split(' ')
      return word
    },
    pad(str, length){
      if(length < str.length){
        return str
      }
      let startPaddingLength = Math.floor((length - str.length)/2)
      let endPaddingLength = Math.floor((length - str.length) - startPaddingLength)
      let paddedString = (' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength))
      return paddedString
    },
    has(obj, val){
      let hasValue = obj[val] !== undefined
      return hasValue
    },
    invert(object){
      let newObj = {}
      for(let key in object){
        const originalValue = object[key];
        newObj = {originalValue : key}
      }
      return newObj
    },
    findKey(object, predicate){
      for(let key in object){
        let value = object[key]
        let predicateValue = predicate(value)
        if(predicateValue){
          return key
        }
        
      }
      return undefined
    },
    drop(array, number){
      if(number === undefined){
        number = 1
      }
      let newArray = array.slice(number, array.length)
      return newArray
    },
    dropWhile(array, predicate){
      const anonCallBack = (element, index) =>{
        return !predicate(element, index, array)
      }
      let dropNumber = array.findIndex(anonCallBack)
      let droppedArray = this.drop(array, dropNumber)
      return droppedArray
    },
    chunk(array, number){
      if(number === undefined){
        number = 1
      }
      let chunks = []
      for(let i = 0; i < array.length; i+= number){
        let singleChunk = array.slice(i, i + number)
        chunks.push(singleChunk)
      }
      return chunks
    }
    
    
  };
  
  