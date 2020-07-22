import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyBgaeJGSQtU6uXjDaaKGjDuK46u9qWEXNQ",
    authDomain: "meuapp-2d985.firebaseapp.com",
    databaseURL: "https://meuapp-2d985.firebaseio.com",
    projectId: "meuapp-2d985",
    storageBucket: "meuapp-2d985.appspot.com",
    messagingSenderId: "818945985520",
    appId: "1:818945985520:web:97bd8e9cc61decfdc22b35",
    measurementId: "G-VDVW0ZP5YJ"
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.app = app.database();
        this.storage = app.storage();
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }
    logout(){
        return app.auth().signOut();
    }

    async register(nome, email, password) {
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('users').child(uid).set({
            nome: nome,
        })
    }
    isInitialized() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }
    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }
    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid
      }
    
    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('users').child(uid).once('value').then(callback);
    }
}
export default new Firebase();