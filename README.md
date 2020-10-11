# Project name: Slack clone

This project is slack clone coding with React Javascript and Firebase.

## 1. Login Page

I used firebase authentication to login. The user can use google account to login.

![Login Page](https://user-images.githubusercontent.com/21342802/95689200-29afd800-0bdd-11eb-91ba-06928eaf71b2.png)

## 2. Main Page

When the user logged in, main page will be shown, and there are serveral channels that I made.

![Main Page](https://user-images.githubusercontent.com/21342802/95689458-e9e9f000-0bde-11eb-9b81-de750e9ad8d7.png)

When the 'Add Channel' button is clicked, the user can enter the name of channel.

![Main Page2](https://user-images.githubusercontent.com/21342802/95689487-13a31700-0bdf-11eb-9788-ec6448187628.png)

Also, when the user enter the message in the input box and click send button, the data will be sent to the firestore database, and the message will be added to the main page.

## 3. Deployment

`firebase init`: By using firebase, I could initialize the server with firebase. The root address should be `build`. <br />
`npm run build`: Build the project in the `build` folder. <br />
`firebase deploy`: Use the firebase to deploy the project that I built.

## Project Link

Below is the link of the project that I deployed. <br />

https://slack-clone-b4d99.web.app/

## Thank you.
