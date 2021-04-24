import { Button, Divider, List } from "@material-ui/core";
import { useState } from "react";
import SidebarItem from "./sidebaritem/SidebarItem";
import useStyles from "./styles";

const Sidebar = ({ notes, selectedNoteIndex, selectNote }) => {
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

	const submitNoteHandler = () => {
		console.log(addingNote, title);
	};

	// const selectNote = () => {
	// 	console.log("select note");
	// };

	const deleteNote = () => {
		console.log("delete note");
	};

	return (
		<div className={classes.sidebarContainer}>
			<Button className={classes.newNoteBtn} onClick={newNoteBtnClick}>
				New note
			</Button>

			{addingNote && (
				<div>
					<input type="text" className={classes.newNoteInput} placeholder="Enter note title" onChange={({ target }) => updateTitle(target.value)} />
					<Button className={classes.newNoteSubmitBtn} onClick={submitNoteHandler}>
						Submit note
					</Button>
				</div>
			)}

			<List>
				{notes?.map((_note, _index) => (
					<div key={_index}>
						<SidebarItem _note={_note} _index={_index} selectedNoteIndex={selectedNoteIndex} selectNote={selectNote} deleteNote={deleteNote} />
						<Divider />
					</div>
				))}
			</List>
		</div>
	);
};

export default Sidebar;
