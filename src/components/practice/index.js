import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { orange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="secondary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
};

export default function BoxSx() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography variant="h4" component="div">
          Welcome to MUI
        </Typography>
        <Typography variant="h5">React</Typography>
        <TextField
          color="secondary"
          variant="filled"
          type="time"
          label="The time"
        />
        <CheckBoxExample />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </ThemeProvider>
  );
}
