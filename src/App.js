import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Sidebar from "./components/sidebar/Sidebar";
import { firestore } from "./firebase/firebase";

function App() {
	const [notes, setNotes] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

	//maybe make a custom hook for it later?
	useEffect(() => {
		const unsub = firestore.collection("notes").onSnapshot(snap => {
			let notes = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
			console.log(notes);
			setNotes(notes);
		});

		return () => unsub();
	}, []);

	return (
		<div className="app-container">
			<Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes} />
			<Editor />
		</div>
	);
}

export default App;
