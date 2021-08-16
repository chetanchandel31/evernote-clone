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
			<ListItem className={classes.listItem} selected={_index === selectedNoteIndex} alignItems="flex-start">
				<div className={classes.textSection} onClick={() => selectNote(_note, _index)}>
					<ListItemText
						primary={`${_note.title.slice(0, 23)}${_note.title.length > 23 ? "..." : ""}`}
						secondary={`${removeHTMLTags(_note.body.slice(0, 30))}${_note.body.length > 30 ? "..." : ""}`}
					/>
				</div>
				<Delete className={classes.deleteIcon} onClick={() => deleteHandler(_note)} />
			</ListItem>
		</div>
	);
};

export default SidebarItem;
