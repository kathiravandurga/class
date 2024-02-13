//1.class for movies

class Movie {
    constructor(title, rating,studio) {
      this.title = title;
      this.rating = rating;
      this.studio=studio;
    }
  }


  function getPG(movieArray) {
    const pgMovies = [];
    for (let i = 0; i < movieArray.length; i++) {
      if (movieArray[i].rating === 'PG') {
        pgMovies.push(movieArray[i]);
      }
    }
    return pgMovies;
  }


  const movies = [
    new Movie('Movie 1', 'PG',"Fox Studio"),
    new Movie('Movie 2', 'R',"2D Entertainment"),
    new Movie('Movie 3', 'PG',"Red Giant"),
    new Movie('Movie 4', 'G',"Siva Productions")
  ];

  const pgMovies = getPG(movies);
  console.log(pgMovies);

  //3.person details
  class person{
    constructor(name,age,dob,location,role,number
        ){
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.location=location;
        this.role=role;
        this.number=number;

    }
    details()
    {
        return "My name is " +this.name +"  "+"Age is "+" "+this.age+"  "+"DOB"+this.dob+" "+
        "Location Where i am living "+ " "+this.location+" "+
        "Working as a" +" "+this.role+"  "+  "Contact number"+
        this.number;

    }
}

var persondetails= new person("Pavithra","24","1996","Chennai","Web Developer","1234567890");
console.log(persondetails.details());

//4. class for uber

class uber {
    constructor(basfare, kilometer, costperkm, totalfare) {
      this.basfare = basfare;
      this.kilometer = kilometer;
      this.costperkm = costperkm;
      this.totalfare = totalfare;
    }
  
    getfare() {
      var result = (this.basfare +(this.kilometer * this.costperkm));
      return result;
    }
  }
  
  var totalcost = new uber(29, 45.7, 20);
  console.log("Total fare for what you travelled on Uber is "+ totalcost.getfare());

