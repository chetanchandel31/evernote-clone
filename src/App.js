import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Sidebar from "./components/sidebar/Sidebar";
import { firestore, serverTimestamp } from "./firebase/firebase";

function App() {
	const [notes, setNotes] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

	const [newNoteId, setNewNoteId] = useState("");

	//maybe make a custom hook for it later?
	useEffect(() => {
		const unsub = firestore.collection("notes").onSnapshot(snap => {
			let notes = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
			console.log(notes);
			setNotes(notes);
		});

		return () => unsub();
	}, []);

	useEffect(() => {
		if (newNoteId) {
			const newNoteIndex = notes.findIndex(note => note.id === newNoteId);
			setSelectedNote(notes[newNoteIndex]);
			setSelectedNoteIndex(newNoteIndex);
			console.log(newNoteIndex);
		}
	}, [notes, newNoteId]);

	const deleteNote = () => {};

	const selectNote = (note, index) => {
		setSelectedNote(note);
		setSelectedNoteIndex(index);
	};

	//add new note to firebase collection and change selected note and selected note index
	const createNewNote = async title => {
		const newNote = await firestore.collection("notes").add({ title, body: "" });
		setNewNoteId(newNote.id);
	};

	const noteUpdate = (id, notesObj) => {
		firestore
			.collection("notes")
			.doc(id) //see if we can only update body
			.set({ ...notesObj, createdAt: serverTimestamp() }, { merge: true });
	};

	return (
		<div className="app-container">
			<Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes} deleteNote={deleteNote} selectNote={selectNote} createNewNote={createNewNote} />
			{selectedNote && <Editor notes={notes} selectedNote={selectedNote} selectedNoteIndex={selectedNoteIndex} noteUpdate={noteUpdate} />}
		</div>
	);
}

export default App;
