import { buttonPalette, textPalette } from "./palette";

const MuiSwitch = {
  styleOverrides: {
    root: {
      width: 88,
      height: 44,
      padding: 0,
    },
    switchBase: {
      color: buttonPalette.primary.enabled,
      backgroundColor: textPalette.primary.light,
      ":hover, &.Mui-checked:hover": {
        backgroundColor: textPalette.primary.light,
      },
      top: "50%",
      left: "4%",
      transform: "translateY(-50%)",
      padding: 7,
      "&.Mui-checked": {
        color: buttonPalette.primary.enabled,
        backgroundColor: textPalette.primary.light,
        transform: "translate(115%, -50%)",
      },
    },
    track: {
      backgroundColor: buttonPalette.primary.enabled,
      opacity: 1,
      borderRadius: "24px",
      ".Mui-checked.Mui-checked + &": {
        backgroundColor: buttonPalette.primary.enabled,
        opacity: 1,
      },
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 24,
        height: 24,
      },
      "&::after": {
        backgroundImage: `url('/svg/view_list.svg')`,
        left: "10%",
      },
      "&::before": {
        backgroundImage: `url('/svg/view_module.svg')`,
        right: "10%",
      },
    },
  },
};

export default MuiSwitch;
