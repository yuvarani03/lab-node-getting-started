class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>(a-b))
    this.length = this.length+1;
  }

  get(value) {
    if(this.items.indexOf(value) == -1){
      throw new Error('OutOfBounds')
    }
    else{
      return(this.items.indexOf(value))
    }
  }

  max() {
    if(this.items.length >0){
      return this.items[this.items.length - 1]
    }
    else{
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.items.length > 0){
      return this.items[0]
    }
    else{
      throw new Error('EmptySortedList')
    }
  }

  avg() {
    if(this.items.length > 0){
      return this.sum() / this.items.length
    }
    else{
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if(this.items.length>0){
      return this.items.reduce((a,b)=> {
        return a +b;}, 0)
    }
    else{
      return 0
    }
  }
};

module.exports = SortedList;
