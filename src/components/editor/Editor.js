import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import useStyles from "./styles";

const Editor = ({ notes, selectedNote, selectedNoteIndex, noteUpdate }) => {
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [id, setId] = useState("");

	const [inputChangeTracker, setInputChangeTracker] = useState(0);
	const classes = useStyles();

	useEffect(() => {
		//using debounce to update firestore collection
		let timeout = setTimeout(() => {
			if (id) noteUpdate(id, { title, body: text });
		}, 1500);

		return () => clearTimeout(timeout);
	}, [inputChangeTracker]);

	useEffect(() => {
		//try to shorten it later? do we even need title?
		const { body, title, id } = selectedNote;
		setText(body);
		setTitle(title);
		setId(id);
	}, [selectedNote]);

	const updateBody = val => {
		setText(val);
		update();
	};

	const update = () => {
		setInputChangeTracker(prevState => prevState + 1);
	};

	//make it autofocus on editor upon mount
	return (
		<div className={classes.editorContainer}>
			<ReactQuill value={text} onChange={updateBody} />
		</div>
	);
};

export default Editor;
