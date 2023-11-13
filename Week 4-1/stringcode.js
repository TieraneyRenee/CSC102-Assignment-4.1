function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";

    //Variables that we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //filling in the Variables
    firstName = document.getElementById("fName").value; //working on inputting first name
    console.log("The first name was input as " + firstName)

    lastName = document.getElementById("lName").value; //working on inputting last name
    console.log("The last name was input as " + lastName)

    zipCode = document.getElementById("zipCode").value; //working on inputting zipcode
    console.log("The zipcode was input as " + zipCode)

    fullName = firstName + " " + lastName; //' " " ' is concantination. Working on inputting the full name
    console.log("The fullname was input as " + fullName)

    fullNameLength = fullName.length; //working on inputting the full name length
    console.log("The fullname has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode); //takes 'letters' that are numbers and turns them into numbers
    console.log("The zipcode number is " + zipCodeNumb);

    //Things to check for.. fullNameLength is less than 20 characters. zipCode has only 5 digits.
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name";  //this is done as protection. Overwhelming system with too much data will cause it to error out and allow access. This is called Buffer Overflow.  
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zipcode"; //limiting the number of digits that the zipcode can have. '!' means 'not' so if the zipcode is put in with less than or more than 5 digits then it will not be accepted.
    } else {
        alert("User Credentials passed. Welcome to the site, " + fullName + "!") //if both the fullNameLength and the zipCode pass then an alert will display.
    }
}

function checkPalin() {
    console.log("checkPalin() started");

    //record the string of letters into a variable.
    var entStr; //creating variable
    entStr = document.getElementById("palinInput").value;//stores whatever was put into palinInput into entStr  
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace; //creating variable
    entStrNoSpace = entStr.split(" ").join("");//this will split it at every space and then join it together without spaces
    console.log("entStr with no spaces is " + entStrNoSpace);//tell us the entStr without any spaces

    //create reverse array variable reverse string
    var revStr; //creating variable
    const revArray = [];//'const' is a constant. An array separates all letters and associates numbers with them
    var length = entStrNoSpace.length - 1;//An array starts counting at 0 instead of 1, but 'length' we start counting at 1. So this will even the two ways out.
    console.log("string length is " + length);

    //input into array and reverse it
    for (var i = length; i >= 0; i--) { //if i is greater than or equal to 0 it will keep on going. Each time it runs it will take away one until it reaches zero. Then after 0 it will take away one. So it will reach -1 and it will end the loop.  
        revArray.push(entStrNoSpace[i]);//take value of the push and add to the end of the array. Last letter to the beginning, next letter to second, ect.- reversing 
    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is " + revStr)

    //compare reverse to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr) //'==' means equal to eachother '===' means equal to eachother and are the same type
    console.log("the ent and reverse being equal is: " + equal);

    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome." //is will be in bold lettering. Announcing that what has been input is a palindrome
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome." //not will be in bold lettering. Announcing that what has been input is not a palindrome
    }
}

function playLoz(){
    //write to the log for debugging 
    console.log("playLoz() started"); 
    mySound = new sound("Loz.mp3");//created my sound
    console.log("playing Loz.mp3 using the sound() function")
    mySound.play(); //setting the sound up to play
}

function sound(srcFile){
    //create an instance of the class. Makes an audio object
    this.sound = document.createElement("audio");
    //sets the source for src file
    this.sound.src = srcFile;
    //loads everything needed for the audio
    this.sound.setAttribute("preload", "audio");
    //setting up the controls for the audio. We have gone with having none, so the audio will simply play and end without any bells and whistles.
    this.sound.setAttribute("controls", "none")
    //Adding everything that we have done to this instance
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play(); //telling it to play the sound that we have loaded. Giving it a way to play the file.
    }
    this.stop = function(){
        this.sound.pause();//stop function. Will pause the sound
    }

}