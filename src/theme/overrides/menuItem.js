import { buttonPalette } from "./palette";

const MuiMenuItem = {
  styleOverrides: {
    root: {
      fontSize: 16,
      "&:hover": {
        backgroundColor: buttonPalette.primary.disabled,
      },
    },
  },
};

export default MuiMenuItem;
