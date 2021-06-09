import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		[theme.breakpoints.up("md")]: {
			marginLeft: "250px",
		},
	},
	appBar: {
		[theme.breakpoints.up("md")]: {
			width: "calc(100% - 250px)",
		},
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
