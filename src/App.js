import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Auth from "./Auth";
import Chat from "./Chat";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  return (
    <div>
      <h1>React Firebase Chat</h1>
      {user ? <Chat /> : <Auth setUser={setUser} />}
    </div>
  );
}

export default App;
