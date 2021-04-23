import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import useStyles from "./styles";

const Editor = () => {
	const [text, setText] = useState("");
	const [inputChangeTracker, setInputChangeTracker] = useState(0);
	const classes = useStyles();

	useEffect(() => {
		//come back later
		let timeout = setTimeout(() => console.log("hi"), 1500);

		return () => clearTimeout(timeout);
	}, [inputChangeTracker]);

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
