import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	listItem: {
		cursor: "pointer",
	},
	textSection: {
		width: "85%",
		overflow: "hidden",
	},
	deleteIcon: {
		position: "absolute",
		right: "5px",
		top: "50%",
		transform: "translate(0, -50%)",
		color: "#001e1d",
		"&:hover": {
			color: "#e16162",
		},
	},
}));
