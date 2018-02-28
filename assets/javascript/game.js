var counter = 0;
var random = "";
var wins = 0;
var losses = 0;

$(document).ready(function () {


    //    global variables 
    
    var diamondObjects = {
        diamonds: $("<img>"),
        diamonds2: $("<img>"),
        diamonds3: $("<img>"),
        diamonds4: $("<img>"),
    }


    // ... generate a random number between 19 and 120
    random = Math.floor(Math.random() * 101) + 19;

    // dump random number inside number to guess div
    $("#number-to-guess").text(random);

    $(diamondObjects).each(function () {
        $(this).addClass("diamond-image");
    });

    
    diamondObjects.diamonds.addClass("diamond-image");

    diamondObjects.diamonds.attr("src", "https://github.com/MarcLewin/week-4-game/blob/master/assets/images/blueDiamond.png?raw=true");
    
    $("#crystal1").append(diamondObjects.diamonds);

    diamondObjects.diamonds2.addClass("diamond-image");

    diamondObjects.diamonds2.attr("src", "https://github.com/MarcLewin/week-4-game/blob/master/assets/images/greenDiamond.gif?raw=true");
    $("#crystal2").append(diamondObjects.diamonds2);

    diamondObjects.diamonds3.addClass("diamond-image");

    diamondObjects.diamonds3.attr("src", "https://github.com/MarcLewin/week-4-game/blob/master/assets/images/orangeDiamond.png?raw=true");
    $("#crystal3").append(diamondObjects.diamonds3);

    diamondObjects.diamonds4.addClass("diamond-image");
    diamondObjects.diamonds4.attr("src", "https://github.com/MarcLewin/week-4-game/blob/master/assets/images/redDiamond.png?raw=true");
    $("#crystal4").append(diamondObjects.diamonds4);



    var assignValue = Math.floor(Math.random() * 11) + 1;
    diamondObjects.diamonds.attr("data-diamond-value", assignValue);
    var diamondVal = parseInt(diamondObjects.diamonds.attr("data-diamond-value"));
    console.log(diamondVal);

    var assignValue2 = Math.floor(Math.random() * 11) + 1;
    diamondObjects.diamonds2.attr("data-diamond2-value", assignValue2);
    var diamondVal2 = parseInt(diamondObjects.diamonds2.attr("data-diamond2-value"));
    console.log(diamondVal2);

    var assignValue3 = Math.floor(Math.random() * 11) + 1;
    diamondObjects.diamonds3.attr("data-diamond3-value", assignValue3);
    var diamondVal3 = parseInt(diamondObjects.diamonds3.attr("data-diamond3-value"));
    console.log(diamondVal3);

    var assignValue4 = Math.floor(Math.random() * 11) + 1;
    diamondObjects.diamonds4.attr("data-diamond4-value", assignValue4);
    var diamondVal4 = parseInt(diamondObjects.diamonds4.attr("data-diamond4-value"));
    console.log(diamondVal4);


    $("#crystal1").on("click", function () {
        counter += diamondVal;
        $("#counter").text(counter);
        winCheck();
    })

    $("#crystal2").on("click", function () {
        counter += diamondVal2;
        $("#counter").text(counter);
        winCheck();
    })

    $("#crystal3").on("click", function () {
        counter += diamondVal3;
        $("#counter").text(counter);
        winCheck();
    })

    $("#crystal4").on("click", function () {
        counter += diamondVal4;
        $("#counter").text(counter);
        winCheck();
    });

});

// function reset() {

// }

function winCheck() {

    console.log('counter: ' + counter);
    console.log('random: ' + random);

    if (counter === random) {
        wins++;
        console.log(wins);
        $("#wins").text("Wins: " + wins)
        alert("You win!");

    }

    else if (counter > random) {
        losses++;
        console.log(losses);
        $("#losses").text("Losses: " + losses)
        alert("You lose!!");
    }
}

  
