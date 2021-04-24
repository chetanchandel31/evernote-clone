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

	const deleteNote = () => {};

	const selectNote = (note, index) => {
		setSelectedNote(note);
		setSelectedNoteIndex(index);
	};

	const newNote = () => {};

	const noteUpdate = (id, notesObj) => {
		console.log(id, notesObj);
	};

	return (
		<div className="app-container">
			<Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes} deleteNote={deleteNote} selectNote={selectNote} newNote={newNote} />
			{selectedNote && <Editor notes={notes} selectedNote={selectedNote} selectedNoteIndex={selectedNoteIndex} noteUpdate={noteUpdate} />}
		</div>
	);
}

export default App;
