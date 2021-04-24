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
		//debounce
		let timeout = setTimeout(() => noteUpdate(id, { title, body: text }), 1500);

		return () => clearTimeout(timeout);
	}, [inputChangeTracker]);

	useEffect(() => {
		//try to shorten it later?
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

	return (
		<div className={classes.editorContainer}>
			<ReactQuill value={text} onChange={updateBody} />
		</div>
	);
};

export default Editor;
