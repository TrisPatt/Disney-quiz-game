# Alana's Disney quiz game

This game was originally developed for my daughter who is a fan of Disney. However, the questions are generic. Therefore, the target audience is any young child who is a Disney fan and can read.
It is a quiz game based on Disney questions and has 4 possible answers. 

Please click the link to visit the page: [Alana's Disney quiz game]("https://trispatt.github.io/Disney-quiz-game/")

![Screenshot overview](show image)

## Features

### The Rules

At the start, the rules are displayed. This demonstrates how the game should be played and includes a start button.

![The rules](show image)

### The game

Once the game has started a question is displayed in the question area and four buttons provide the possible answers, of which one is correct. 
The user clicks on the answer they think is correct.

![game-area](show image)

### response

Once the user selects their answer, the response is shown in two ways. A visual and audible reply tells the user if they are correct or not. Both the sound and colour are clear and obvious universal cues with accessibility in mind.
- The correct answer shows a green background on the button and triggers a ding (correct) sound.
- The incorrect answer shows a red background on the button and triggers a buzzer (incorrect) sound.


![Response](show image)

### Correct Answers

The number of correct answers given by the user are displayed on the page. This counts the number of correct answers given and resets to 0 when the game restarts.

![correct Answers](show image )

### Ending the game

When the quiz is finished, the user is congratuated and the number of correct answers is displayed on the screen. The user has the option to restart the quiz by clicking the restart button.

## Features left to implement

- counter- adding a timer to finish the game.
- Difficulty level in questions
- randomising questions

## Design

- color scheme/ childrens colors

![colour pallette](show image)

- The font used for the main heading is Princess Sofia
- The main font used is 
- No wireframe software was used in the design. The design was scripted on pen and paper
- UI/UX principles were taken into account during the design process and were the reason for design and colour scheme

## Technologies used

- HTML5
- CSS3
- Javascript

## Frameworks, libraries and programs used

- Codeanywhere - To write the code
- Git - Version control
- Github - Deployment and storage of files online
- Google Fonts - To select and import fonts online
- Am I responsive - To show a screenshot of the responsive design across multiple devices
- Favicon - provides icons for the title bar

## Testing

The W3C Markup Validator and W3C CSS Validator services were used to validate every page of the project to ensure there were no errors.

[WC3 Markup validator](https://validator.w3.org/)
[w3c CSS validator](https://jigsaw.w3.org/css-validator/)

### Validation Results

- HTML- No errors were returned from all pages
- CSS- No errors returned

### Manual Testing

- The website was tested on Chrome, Edge, Firefox and Safari
- Each page was tested on a Macbook pro and Surface pro 7 laptop, ipad mini, iphone XR and Honer 70 android mobile
- All links on every page were tested and work correctly
- Dev tools was used to test various screemn sizes
git 

### Lighthouse Report

- The lighthouse report showed excellent accessibility scores across every page for mobile and desktop
  
![Lighthouse report](assests/images/screenshots/desktop-home-lighthouse.webp)

### Bugs

- Bug- The background colour would not show over the images to highlight the overlay text on the upcoming gigs section <br>
  Fix- I fixed this by wrapping another div around the text element and applying the background colour to the text rather than the div for the images
- Bug - The images of the band in the contact section were showing outside the screen on some screen sizes<br>
  Fix- I added the selectors to the relevant media queries and changed the size of the images so that they would show up in a row on different screen sizes
- Bug - On testing, the lighthouse report showed a bad load time for the main LCP on the home page <br>
  Fix - I made the fetch priority high on the index.HTML head to preload the image. This created a faster performance time

### Unfixed bug

- No outstanding unfixed bugs

## Deployment

GitHub Pages was used to deploy live versions of the website.

1. Log in to GitHub and locate [GitHub Repository Riff Raff Band](https://trispatt.github.io/Riff-Raff-Band/index.html)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://trispatt.github.io/Riff-Raff-Band/index.html) in the "GitHub Pages" section.




## Credits

### Content

- All content was written by the developer
- All gallery images, contact and thank-you images are owned by the developer and the band
- The hero image was created and is owned by the developer
- Images in the gigs section were taken from the internet and are not owned by the developer
  
### Code

- Readme template supplied by the code institute