import { createTheme } from "@mui/material";
import MuiButton from "./overrides/button";
import MuiSwitch from "./overrides/switch";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: MuiButton,
    MuiSwitch: MuiSwitch,
  },
});

export default theme;
