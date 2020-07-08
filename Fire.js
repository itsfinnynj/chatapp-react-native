import firebase from "firebase";
import { call } from "react-native-reanimated";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDWzWTZkjVlpJny2lbQQTTn2dHXX_0S-Vs",
        authDomain: "chatapp-b8440.firebaseapp.com",
        databaseURL: "https://chatapp-b8440.firebaseio.com",
        projectId: "chatapp-b8440",
        storageBucket: "chatapp-b8440.appspot.com",
        messagingSenderId: "781655775295",
        appId: "1:781655775295:web:e6375c3f45e16be218808a",
        measurementId: "G-FFHP2644ZV",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const messages = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(messages);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshoot) => callback(this.parse(snapshoot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
