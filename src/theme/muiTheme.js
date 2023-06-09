import { createTheme } from "@mui/material";
import MuiButton from "./overrides/button";
import MuiSwitch from "./overrides/switch";
import MuiTextField from "./overrides/input";
import MuiCheckbox from "./overrides/checkbox";
import MuiRadio from "./overrides/radio";
import MuiSelect from "./overrides/select";
import MuiMenuItem from "./overrides/menuItem";
import MuiPagination from "./overrides/pagination";

const theme = createTheme({
  breakpoints: {
    values: {
      phoneBig: 425,
      tabletSmall2: 500,
      tabletSmall: 650,
      tablet: 768,
      tabletBig: 820,
      desktopSmall2: 930,
      desktopSmall: 1024,
      desktop: 1140,
    },
  },
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
    MuiSelect: MuiSelect,
    MuiMenuItem: MuiMenuItem,
    MuiPagination: MuiPagination,
  },
});

export default theme;
