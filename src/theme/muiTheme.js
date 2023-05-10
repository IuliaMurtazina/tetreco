import { createTheme } from "@mui/material";
import MuiButton from "./overrides/button";
import MuiSwitch from "./overrides/switch";
import MuiTextField from "./overrides/input";
import MuiCheckbox from "./overrides/checkbox";
import MuiRadio from "./overrides/radio";

const theme = createTheme({
  typography: {
    fontFamily: `'Golos Text', sans-serif`,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: MuiButton,
    MuiSwitch: MuiSwitch,
    MuiTextField: MuiTextField,
    MuiCheckbox: MuiCheckbox,
    MuiRadio: MuiRadio,
  },
});

export default theme;
