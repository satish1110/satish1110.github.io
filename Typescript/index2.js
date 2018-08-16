var Facebook = /** @class */ (function () {
    function Facebook(mobileNumber, dateOfBirth, work, college, highSchool, placesLived, email, gender, languages, relationshipStatus, familyMembers, aboutYou, otherNames, favoriteQuotes, lifeEvents) {
        var _this = this;
        this.getMobileNumber = function () {
            console.log("Mobile number: " + _this.mobileNumber);
        };
        this.getDateOfBirth = function () {
            console.log("Date of birth: " + _this.dateOfBirth);
        };
        this.getWorkPlaces = function () {
            console.log("Work places: ");
            for (var i = 0; i < _this.work.length; i++) {
                console.log(_this.work[i] + ",");
            }
        };
        this.getColleges = function () {
            console.log("Colleges: ");
            for (var i = 0; i < _this.college.length; i++) {
                console.log(_this.college[i] + ",");
            }
        };
        this.getHighSchools = function () {
            console.log("High schools: ");
            for (var i = 0; i < _this.highSchool.length; i++) {
                console.log(_this.highSchool[i] + ",");
            }
        };
        this.getPlacesLived = function () {
            console.log("Places lived: ");
            for (var i = 0; i < _this.placesLived.length; i++) {
                console.log(_this.placesLived[i] + ",");
            }
        };
        this.getEmail = function () {
            console.log("Email: " + _this.email + "\n");
        };
        this.getGender = function () {
            console.log("Gender: " + _this.gender + "\n");
        };
        this.getLanguages = function () {
            console.log("Languages: ");
            for (var i = 0; i < _this.languages.length; i++) {
                console.log(_this.languages[i] + ",");
            }
        };
        this.getRelationshipStatus = function () {
            console.log("Relationship status: " + _this.relationshipStatus + "\n");
        };
        this.getFamilyMembers = function () {
            console.log("Family members: ");
            for (var i = 0; i < _this.familyMembers.length; i++) {
                console.log(_this.familyMembers[i] + ",");
            }
        };
        this.getAboutYou = function () {
            console.log("About you: " + _this.aboutYou + "\n");
        };
        this.getOtherNames = function () {
            console.log("Other names: ");
            for (var i = 0; i < _this.otherNames.length; i++) {
                console.log(_this.otherNames[i] + ",");
            }
        };
        this.getFavoriteQuotes = function () {
            console.log("Favorite quotes:");
            for (var i = 0; i < _this.favoriteQuotes.length; i++) {
                console.log(_this.favoriteQuotes[i] + ",");
            }
        };
        this.getLifeEvents = function () {
            console.log("Life events: ");
            for (var i = 0; i < _this.lifeEvents.length; i++) {
                console.log(_this.lifeEvents[i] + ",");
            }
        };
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
    return Facebook;
}());
var fbObject = new Facebook(9999999999, "11/10/1994", ["genesys", "infotrellis"], ["SASTRA"], ["RSK", "MGCV"], ["Chennai", "Trichy"], "x@gmail.com", "Male", ["Tamil", "English"], "Complicated :-P", ["Anu-Sister", "Raji-Mother", "Ragu-Father"], "Eat->Play->Code->Sleep->Repeat", ["Balaji"], ["There is nothing good or bad, only thinking makes it so"], ["Born-11/10/1994", "Graduated-2016"]);
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
