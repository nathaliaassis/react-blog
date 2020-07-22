import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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