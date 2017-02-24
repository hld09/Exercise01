function myFunction() {
  /* KEEPS TRACK OF HOW MANY PEOPLE IN DATABASE */
    /* declaration of variables */

    var person = prompt("How many people would you like to add?");
    var totalpeople=person;
    i=0;
    var allpeople = new Array(); //creates an empty array for info of all people

    /* For each person detailed, ask the below prompts */

    for (count= 0; count< totalpeople; count++) {
      var person = prompt("Please enter your name");
      var age = prompt("What is their age?");
    	var height =prompt("What is their height?");
    	var weight = prompt("What is their weight?");
    	var address =prompt("What is their address?");

      var newli = new Array();
  	  newli[0] = "<b>Name: </b>"+person;
  	  newli[1] = "<b>Age: </b>"+age;
  	  newli[2] = "<b>Height: </b>"+height;
  	  newli[3] = "<b>Weight: </b>"+weight;
      newli[4] = "<b>Address:</b>"+address;
     // assign each value above to an empty list that will eventually be added
     // to list of all people

    for (i=0;i<newli.length;i++)
  	   {
  	      document.write(newli[i] + "<br><br>");
          allpeople.push(newli); //push contents of new list to total people
  	   }
    }

/* PRINTS TO CONSOLE */

/* I COULD NOT FIGURE OUT FOR THE LIFE OF ME WHY MY CODE WOULD NOT PRINT ON THE SAME WEBPAGE AS THE REST
OF THE INFORMATION... it works when it comes to recording data but for some reason printed results on a
different page... do not know why */

    var peoplelistDiv = document.getElementById("peoplelist"); //declares the item to print in the allocated div

    for (var i = 0; i < allpeople.length; i++) {
      peoplelistDiv.innerHTML += allpeople[i];
    }

}
