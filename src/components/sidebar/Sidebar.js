import { Button, Divider, List, Toolbar } from "@material-ui/core";
import { useState } from "react";
import SidebarItem from "./sidebaritem/SidebarItem";
import useStyles from "./styles";

const Sidebar = ({ notes, selectedNoteIndex, selectNote, createNewNote, deleteNote }) => {
	const [addingNote, setAddingNote] = useState(false);
	const [title, setTitle] = useState(""); //when adding new note, this will be its title
	const classes = useStyles();

	const newNoteBtnClick = () => {
		setAddingNote(prevState => !prevState);
		setTitle(null);
	};

	const updateTitle = text => {
		setTitle(text);
	};

	const submitNoteHandler = () => {
		createNewNote(title);
		setAddingNote(false);
		setTitle("");
	};

	return (
		<div className={classes.sidebarContainer}>
			<Toolbar />
			<Button className={classes.newNoteBtn} onClick={newNoteBtnClick}>
				{addingNote ? "Cancel" : "New Note"}
			</Button>

			{addingNote && (
				<div>
					<form onSubmit={submitNoteHandler}>
						<input
							type="text"
							className={classes.newNoteInput}
							placeholder="Note title..."
							required
							onChange={({ target }) => updateTitle(target.value)}
							autoFocus
						/>
						<Button className={classes.newNoteSubmitBtn} type="submit">
							Submit note
						</Button>
					</form>
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
