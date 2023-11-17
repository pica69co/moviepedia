import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  image: {
    width: "60%",
    filter: theme.palette.mode === "dark" && "invert(1)",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: theme.palette.mode === "dark" ? "blue" : "red",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
