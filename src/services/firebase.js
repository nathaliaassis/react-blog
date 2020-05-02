import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDJRqw4bY5sdUoJcgLf9j2QfRa8QpItccM",
    authDomain: "react-blog-b4a04.firebaseapp.com",
    databaseURL: "https://react-blog-b4a04.firebaseio.com",
    projectId: "react-blog-b4a04",
    storageBucket: "react-blog-b4a04.appspot.com",
    messagingSenderId: "1026590080423",
    appId: "1:1026590080423:web:24d23977996efd8c9f8a82",
    measurementId: "G-DG13NTV2G4"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    async register(nome, email, password) {
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database.ref('users').child(uid).set({
            nome: nome,
        })
    }
    isInitialized() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }
}
export default new Firebase();