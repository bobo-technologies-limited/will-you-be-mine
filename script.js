/* =========================================================
   CONCEPT 1 — WILL YOU BE MINE?
   =========================================================

   This JavaScript controls:

   1. Moving between screens
   2. YES button
   3. Playful NO button
   4. Hearts
   5. Celebration
   6. Replay

   We are using plain JavaScript.
   No libraries are required.
   ========================================================= */


/* =========================================================
   1. FIND ALL THE SCREENS
   =========================================================

   document.querySelectorAll() searches the HTML and
   finds every element with the class "screen".

   We store them inside the "screens" variable.
   ========================================================= */

const screens = document.querySelectorAll(
    ".love-proposal .screen"
);


/* =========================================================
   2. KEEP TRACK OF THE CURRENT SCREEN
   =========================================================

   JavaScript starts counting from ZERO.

   So:

   0 = Introduction
   1 = Message
   2 = Reveal
   3 = Question
   4 = Success
   ========================================================= */

let currentScreen = 0;


/* =========================================================
   3. SHOW ONLY ONE SCREEN
   ========================================================= */

function showScreen(screenNumber) {

    /*
        First, hide every screen.
    */

    screens.forEach(function(screen) {

        screen.style.display = "none";

    });


    /*
        Then show the requested screen.
    */

    screens[screenNumber].style.display = "flex";


    /*
        Remember which screen we're currently on.
    */

    currentScreen = screenNumber;

}


/* =========================================================
   4. START THE EXPERIENCE
   =========================================================

   We start with the first screen.
   ========================================================= */

showScreen(0);


/* =========================================================
   5. FIND ALL "NEXT" BUTTONS
   ========================================================= */

const nextButtons = document.querySelectorAll(
    ".love-proposal .next-button"
);


/* =========================================================
   6. MAKE NEXT BUTTONS WORK
   ========================================================= */

nextButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /*
            Move to the next screen.

            +1 means:
            current screen → next screen
        */

        showScreen(currentScreen + 1);

    });

});


/* =========================================================
   7. YES BUTTON
   ========================================================= */

const yesButton = document.querySelector(
    ".love-proposal .yes-button"
);


yesButton.addEventListener("click", function() {

    /*
        Show the success screen.

        Screen 4 = success.
    */

    showScreen(4);


    /*
        Start the heart celebration.
    */

    createHearts();

});


/* =========================================================
   8. NO BUTTON
   =========================================================

   Instead of actually rejecting the proposal,
   the NO button playfully moves around.

   This is the classic "mischievous NO button".
   ========================================================= */

const noButton = document.querySelector(
    ".love-proposal .no-button"
);


noButton.addEventListener("mouseenter", function() {

    /*
        Generate random positions.

        Math.random() creates a random number
        between 0 and 1.
    */

    const randomX =
        Math.floor(Math.random() * 200) - 100;

    const randomY =
        Math.floor(Math.random() * 150) - 75;


    /*
        Move the button.
    */

    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

});


/* =========================================================
   9. ALSO HANDLE MOBILE USERS
   =========================================================

   Phones don't have "mouseenter".

   So we also react when the button is touched.
   ========================================================= */

noButton.addEventListener("touchstart", function(event) {

    /*
        Prevent the normal button interaction.
    */

    event.preventDefault();


    const randomX =
        Math.floor(Math.random() * 180) - 90;

    const randomY =
        Math.floor(Math.random() * 120) - 60;


    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

});


/* =========================================================
   10. CREATE FLOATING HEARTS
   ========================================================= */

function createHearts() {

    /*
        Create 25 hearts.
    */

    for (let i = 0; i < 25; i++) {

        /*
            Create a brand-new HTML element.
        */

        const heart = document.createElement("div");


        /*
            Put a heart inside it.
        */

        heart.innerHTML = "❤️";


        /*
            Give it a class.

            CSS can later style ".floating-heart".
        */

        heart.classList.add(
            "floating-heart"
        );


        /*
            Random horizontal position.
        */

        heart.style.left =
            Math.random() * 100 + "vw";


        /*
            Random animation delay.
        */

        heart.style.animationDelay =
            Math.random() * 2 + "s";


        /*
            Add it to the webpage.
        */

        document.body.appendChild(heart);


        /*
            Remove it after 5 seconds.

            This prevents the page from accumulating
            hundreds of hearts.
        */

        setTimeout(function() {

            heart.remove();

        }, 5000);

    }

}


/* =========================================================
   11. REPLAY BUTTON
   ========================================================= */

const replayButton = document.querySelector(
    ".love-proposal .replay-button"
);


replayButton.addEventListener("click", function() {

    /*
        Reset the NO button position.
    */

    noButton.style.transform = "translate(0, 0)";


    /*
        Go back to the beginning.
    */

    showScreen(0);

});