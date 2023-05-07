import { createTheme } from "@mui/material";
import MuiButton from "./overrides/button";
import MuiSwitch from "./overrides/switch";
import MuiTextField from "./overrides/input";
import { MuiFormHelperText } from "./overrides/input";

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
  },
});

export default theme;
