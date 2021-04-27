import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Sidebar from "./components/sidebar/Sidebar";
import { firestore, serverTimestamp } from "./firebase/firebase";
import useFirestore from "./hooks/useFirestore";

function App() {
	const collectionRef = firestore.collection("notes");

	const [selectedNote, setSelectedNote] = useState(null); //for editor's content
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null); //for highlighted note in sidebar
	const [newNoteId, setNewNoteId] = useState("");
	const [notes] = useFirestore("notes");

	//add new note to firebase collection and change selected note and selected note index
	const createNewNote = async title => {
		const newNote = await collectionRef.add({ title, body: "" });
		setNewNoteId(newNote.id);
	};

	useEffect(() => {
		//if we've got new note id and that id's note is found in "notes" state, select that note and reset new note id
		const newNoteIndex = notes?.findIndex(note => note.id === newNoteId);
		if (newNoteId && newNoteIndex > -1) {
			setSelectedNote(notes[newNoteIndex]);
			setSelectedNoteIndex(newNoteIndex);
			setNewNoteId("");
		}
	}, [notes, newNoteId]);

	const deleteNote = id => {
		const deletingNoteIndex = notes.findIndex(note => note.id === id);

		if (deletingNoteIndex < selectedNoteIndex && notes.length > 1) setSelectedNoteIndex(prevIndex => prevIndex - 1);

		if (deletingNoteIndex === selectedNoteIndex || notes.length === 1) {
			setSelectedNote(null);
			setSelectedNoteIndex(null);
		}

		collectionRef.doc(id).delete();
	};

	const selectNote = (note, index) => {
		setSelectedNote(note);
		setSelectedNoteIndex(index);
	};

	const noteUpdate = (id, notesObj) => {
		collectionRef
			.doc(id) //see if we can only update body
			.set({ ...notesObj, createdAt: serverTimestamp() }, { merge: true });
	};

	return (
		<div className="app-container">
			<Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes} deleteNote={deleteNote} selectNote={selectNote} createNewNote={createNewNote} />
			{selectedNote && <Editor selectedNote={selectedNote} noteUpdate={noteUpdate} />}
		</div>
	);
}

export default App;
