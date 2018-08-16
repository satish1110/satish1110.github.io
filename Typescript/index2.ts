class Facebook
{
  mobileNumber: number; 
  dateOfBirth: string;
  work: string[]; 
  college: string[];
  highSchool: string[];
  placesLived: string[];
  email: string;
  gender: string;
  languages: string[];
  relationshipStatus: string;
  familyMembers: string[];
  aboutYou: string;
  otherNames: string[];
  favoriteQuotes: string[];
  lifeEvents: string[];

  constructor(mobileNumber: number,dateOfBirth: string,work: string[],college: string[],highSchool: string[],placesLived: string[],email: string,gender: string,languages: string[],relationshipStatus: string,familyMembers: string[],aboutYou: string,otherNames: string[],favoriteQuotes: string[],lifeEvents: string[])
    {
      this.mobileNumber = mobileNumber;
      this.dateOfBirth = dateOfBirth;
      this.work = work; 
      this.college = college;
      this.highSchool = highSchool;
      this.placesLived = placesLived;
      this.email = email;
      this.gender = gender;
      this.languages = languages;
      this.relationshipStatus = relationshipStatus;
      this.familyMembers = familyMembers;
      this.aboutYou = aboutYou;
      this.otherNames = otherNames;
      this.favoriteQuotes = favoriteQuotes;
      this.lifeEvents = lifeEvents; 
    }

    getMobileNumber = ()=>
    {
      console.log("Mobile number: "+this.mobileNumber);
    }

    getDateOfBirth = () =>
    {
      console.log("Date of birth: "+this.dateOfBirth);
    }

    getWorkPlaces = () =>
    {
      console.log("Work places: ");
      for(let i =0; i< this.work.length;i++)
      {
        console.log(this.work[i]+",");
      }
    }

    getColleges = () =>
    {
      console.log("Colleges: ");
      for(let i =0; i < this.college.length;i++)
      {
        console.log(this.college[i]+",");
      }

    }
    
    getHighSchools = () =>
    {
      console.log("High schools: ");
      for(let i = 0; i<this.highSchool.length; i++)
      {
        console.log(this.highSchool[i]+",");  
      }
    }

    getPlacesLived = () =>
    {
      console.log("Places lived: ");
      for(let i = 0; i<this.placesLived.length; i++)
      {
        console.log(this.placesLived[i]+",");  
      }
    }

    getEmail = () =>
    {
      console.log("Email: "+this.email+"\n");
    }

    getGender = () =>
    {
      console.log("Gender: "+this.gender+"\n");

    }

    getLanguages = () =>
    {
      console.log("Languages: ");
      for(let i = 0; i<this.languages.length; i++)
      {
        console.log(this.languages[i]+",");  
      }

    }

    getRelationshipStatus = () =>
    {

      console.log("Relationship status: "+this.relationshipStatus+"\n");
    }

    getFamilyMembers = () =>
    {
      console.log("Family members: ");
      for(let i = 0; i<this.familyMembers.length; i++)
      {
        console.log(this.familyMembers[i]+",");  
      }
    }

    getAboutYou = () =>
    {
      console.log("About you: "+this.aboutYou+"\n");

    }

    getOtherNames = () =>
    {    
        console.log("Other names: ");

        for(let i = 0; i<this.otherNames.length; i++)
        {
          console.log(this.otherNames[i]+",");  
        }
  
    }

    getFavoriteQuotes = () =>
    {
        console.log("Favorite quotes:");

        for(let i = 0; i<this.favoriteQuotes.length; i++)
        {
          console.log(this.favoriteQuotes[i]+",");  
        }

    }

    getLifeEvents = () =>
    {
      console.log("Life events: ");
        for(let i = 0; i<this.lifeEvents.length; i++)
        {
          console.log(this.lifeEvents[i]+",");  
        }
   
    }

}

let fbObject = new Facebook(9999999999,"11/10/1994",["genesys","infotrellis"], ["SASTRA"],["RSK","MGCV"],["Chennai","Trichy"],"x@gmail.com","Male",["Tamil","English"],"Complicated :-P",["Anu-Sister","Raji-Mother","Ragu-Father"],
"Eat->Play->Code->Sleep->Repeat",["Balaji"],["There is nothing good or bad, only thinking makes it so"],["Born-11/10/1994","Graduated-2016"] );

fbObject.getWorkPlaces();
fbObject.getAboutYou();
fbObject.getColleges();
fbObject.getDateOfBirth();
fbObject.getEmail();
fbObject.getFamilyMembers();
fbObject.getFavoriteQuotes();
fbObject.getGender();
fbObject.getHighSchools();
fbObject.getLanguages();
fbObject.getLifeEvents();
fbObject.getMobileNumber();
fbObject.getOtherNames();
fbObject.getRelationshipStatus();
fbObject.getPlacesLived();
