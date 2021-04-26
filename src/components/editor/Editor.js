import { BorderColor } from "@material-ui/icons";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import useStyles from "./styles";

const Editor = ({ selectedNote, noteUpdate }) => {
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
		// eslint-disable-next-line
	}, [inputChangeTracker]);

	useEffect(() => {
		//try to shorten it later? do we even need title?
		const { body, title, id } = selectedNote;
		setText(body);
		setTitle(title);
		setId(id);
	}, [selectedNote]);

	const updateNote = (newTitle, newBody) => {
		if (newTitle) setTitle(newTitle);
		else if (newBody) setText(newBody);
		update();
	};

	const update = () => {
		setInputChangeTracker(prevState => prevState + 1);
	};

	//make it autofocus on editor upon mount
	return (
		<div className={classes.editorContainer}>
			<BorderColor className={classes.editIcon} />
			<input className={classes.titleInput} value={title} placeholder="hello" onChange={({ target }) => updateNote(target.value)} />
			<ReactQuill value={text} onChange={newBody => updateNote(undefined, newBody)} />
		</div>
	);
};

export default Editor;
