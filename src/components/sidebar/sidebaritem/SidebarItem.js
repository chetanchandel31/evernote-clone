import { ListItem, ListItemText } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { removeHTMLTags } from "../../../helpers/helpers";
import useStyles from "./styles";

const SidebarItem = ({ _index, _note, selectedNoteIndex, selectNote, deleteNote }) => {
	const classes = useStyles();

	const deleteHandler = note => {
		if (window.confirm(`Are you sure you want to delete ${note.title}`)) deleteNote(note.id);
	};

	return (
		<div key={_index}>
			<ListItem className={classes.listItem} onClick={() => selectNote(_note, _index)} selected={_index === selectedNoteIndex} alignItems="flex-start">
				<div className={classes.textSection}>
					<ListItemText primary={_note.title} secondary={removeHTMLTags(_note.body.slice(0, 30) + "...")} />
				</div>
				<Delete className={classes.deleteIcon} onClick={() => deleteHandler(_note)} />
			</ListItem>
		</div>
	);
};

export default SidebarItem;
