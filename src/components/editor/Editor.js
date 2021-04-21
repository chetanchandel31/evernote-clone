import { withStyles } from "@material-ui/core";
import ReactQuill from "react-quill";
import useStyles from "./styles";

const Editor = () => {
	const classes = useStyles();

	return (
		<div className={classes.editorContainer}>
			<ReactQuill />
		</div>
	);
};

export default Editor;
