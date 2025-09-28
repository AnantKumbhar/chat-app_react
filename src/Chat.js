import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const logout = async () => {
        await signOut(auth);
    };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!text) return;
    await addDoc(collection(db, "messages"), {
      text,
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      timestamp: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div style={{ border: "1px solid #ccc", height: "200px", overflowY: "scroll" }}>
        {messages.map((m) => (
          <p key={m.id}>
            <b>{m.email}: </b> {m.text}
          </p>
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter message..." />
      <button onClick={sendMessage}>Send</button>
      <div>
            <button onClick={logout}>Logout</button>
    </div>
      
    </div>
  );
}
