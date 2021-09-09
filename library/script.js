class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((a,b) => a+b);
      let arrayLength = this.ratings.length
      return ratingsSum/arrayLength
    }
  
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
    //   super(ratings);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title);
    //   super(ratings);
      this._director = director;
      this._runtime = runtime;
    }
  
    get director() {
      return this._director;
    }
  
    get rumtime() {
      return this._runtime;
    }
  }
  
  let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())

  let speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  