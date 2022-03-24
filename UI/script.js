class Tweet {
  static maxTextLength = 280;

  constructor(id, text, createAt, author, comments) {
    this._id = id;
    this.text = text;
    this.createAt = new Date(createAt);
    this.author = author;
    this.comments = comments;
  }

  set id(id) {
    if(typeof id === 'string') {    
        id.trim().toLowerCase();
        this._id = id;
    } 
  }

  get id() {
    return this._id;
  }

  setText(newText) {
      if(typeof newText === 'string' && newText.length <= Tweet.maxTextLength) {
          this.text = newText;
      } 
  }

  static validate(tweet) {
    if (typeof tweet.id === 'string' &&
        typeof tweet.text === "string" &&
        typeof tweet.text <= Tweet.maxTextLength &&
        typeof tweet.author === "string"
    ) {
        return true;
    } else {
        return false;
    }
  }
}





