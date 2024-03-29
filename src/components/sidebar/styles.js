import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: "#abd1c6",
		height: "calc(100% - 35px)",
		position: "absolute",
		left: "0",
		width: "300px",
		boxShadow: "0px 0px 2px black",
	},
	newChatBtn: {
		borderRadius: "0px",
	},
	unreadMessage: {
		color: "red",
		position: "absolute",
		top: "0",
		right: "5px",
	},
	newNoteBtn: {
		width: "100%",
		height: "35px",
		borderBottom: "1px solid black",
		borderRadius: "0px",
		backgroundColor: "#f9bc60",
		color: "white",
		"&:hover": {
			backgroundColor: "#f9bc60",
		},
	},
	sidebarContainer: {
		marginTop: "0px",
		width: "250px",
		height: "100%",
		boxSizing: "border-box",
		float: "left",
		overflowY: "scroll",
		overflowX: "hidden",
		backgroundColor: "#abd1c6",

		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
	newNoteInput: {
		width: "100%",
		margin: "0px",
		height: "35px",
		outline: "none",
		border: "none",
		paddingLeft: "5px",
		"&:focus": {
			outline: "2px solid rgba(81, 203, 238, 1)",
		},
	},
	newNoteSubmitBtn: {
		width: "100%",
		backgroundColor: "#004643",
		borderRadius: "0px",
		color: "white",
		"&:hover": {
			backgroundColor: "#004643",
		},
	},
}));
