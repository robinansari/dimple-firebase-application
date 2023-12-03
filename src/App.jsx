import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const googlehandleprovider = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const googlesignin = result.user
        console.log(googlesignin)
        setUser(googlesignin)

      })
      .catch(eror => {
        console.log(eror)
      })

  }


  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={googlehandleprovider}>
        sing In google
      </button>
      <div>
        <img src={user.photoURL} alt="" />
        <h1>{user.displayName}</h1>
        <h4>{user.email}</h4>

      </div>

    </>
  )
}

export default App
