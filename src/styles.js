import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: "#abd1c6",

		[theme.breakpoints.up("md")]: {
			marginLeft: "250px",
		},
	},
	appBar: {
		backgroundColor: "#001e1d",
		textAlign: "center",
		[theme.breakpoints.up("md")]: {
			width: "calc(100% - 250px)",
		},
	},
	mainHeading: {
		flexGrow: 1,
	},
	drawer: {
		width: "250px",
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));
