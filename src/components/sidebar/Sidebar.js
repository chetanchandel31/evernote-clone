import { Button } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";

const Sidebar = ({ notes, selectedNoteIndex }) => {
	const [addingNote, setAddingNote] = useState(false);
	const [title, setTitle] = useState(null);
	const classes = useStyles();

	const newNoteBtnClick = () => {
		setAddingNote(prevState => !prevState);
		setTitle(null);
		console.log("new note button clicked");
	};

	const updateTitle = text => {
		setTitle(text);
	};

	return (
		<div className={classes.sidebarContainer}>
			<Button className={classes.newNoteBtn} onClick={newNoteBtnClick}>
				New note
			</Button>
			{addingNote && (
				<div>
					<input type="text" className={classes.newNoteInput} placeholder="Enter note title" onChange={({ target }) => updateTitle(target.value)} />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
