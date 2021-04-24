import { ListItem, ListItemText } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { removeHTMLTags } from "../../../helpers/helpers";
import useStyles from "./styles";

const SidebarItem = ({ _index, _note, selectedNoteIndex, selectNote, deleteNote }) => {
	const classes = useStyles();

	//try to implement confirm in parent comp only
	const deleteHandler = note => {
		if (window.confirm(`Are you sure you want to delete ${note.title}`)) deleteNote(note);
	};

	return (
		<div key={_index}>
			<ListItem className={classes.listItem} selected={_index === selectedNoteIndex} alignItems="flex-start">
				<div className={classes.textSection} onClick={() => selectNote(_note, _index)}>
					<ListItemText primary={_note.title} secondary={removeHTMLTags(_note.body)} />
				</div>
			</ListItem>
			<Delete className={classes.deleteIcon} onClick={() => deleteHandler(_note)} />
		</div>
	);
};

export default SidebarItem;
