import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		height: "calc(100% - 35px)",
		position: "absolute",
		left: "0",
		width: "300px",
		boxShadow: "0px 0px 2px black",
	},
	titleInput: {
		height: "50px",
		boxSizing: "border-box",
		border: "none",
		padding: "5px",
		fontSize: "24px",
		width: "100%",
		backgroundColor: "#29487d",
		color: "white",
		paddingLeft: "50px",
	},
	inputContainer: {
		position: "relative",
	},
	editIcon: {
		position: "absolute",
		left: "10px",
		top: "10px",
		color: "white",
		width: "10",
		height: "10",
	},
	editorContainer: {
		height: "100%",
		boxSizing: "border-box",
	},
}));
