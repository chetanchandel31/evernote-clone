import { useEffect, useState } from "react";
import "./App.css";
import { firestore } from "./firebase/firebase";

function App() {
	const [notes, setNotes] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

	useEffect(() => {
		firestore.collection("notes").onSnapshot(snap => {
			let notes = [];
			console.log(snap);
			snap.forEach(doc => notes.push({ ...doc.data(), id: doc.id }));
			setNotes(notes);
		});
		console.log(notes);
	}, []);

	return <div className="App">ok</div>;
}

export default App;
