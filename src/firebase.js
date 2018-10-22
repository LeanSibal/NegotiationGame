import * as firebase from 'firebase';

// Initialize Firebase
let  config = {
    apiKey: "AIzaSyBNtHeWML1zkAMRzaoVytTpX5dzIpChoIg",
    authDomain: "negotiation-game.firebaseapp.com",
    databaseURL: "https://negotiation-game.firebaseio.com",
    projectId: "negotiation-game",
    storageBucket: "negotiation-game.appspot.com",
    messagingSenderId: "425777247746"
};


firebase.initializeApp(config);

export default firebase;