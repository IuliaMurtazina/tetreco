import { buttonPalette, textPalette } from "./palette";

const MuiPagination = {
  styleOverrides: {
    root: {
      button: {
        fontSize: 15,
        "&.Mui-selected, &:hover": {
          backgroundColor: buttonPalette.primary.disabled,
          color: textPalette.primary.light,
        },
        "&.Mui-selected:hover": {
          backgroundColor: buttonPalette.primary.hover,
        },
      },
      svg: {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
  },
};

export default MuiPagination;
