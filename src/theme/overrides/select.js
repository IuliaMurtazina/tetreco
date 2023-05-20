import { buttonPalette, textPalette } from "./palette";

const MuiSelect = {
  styleOverrides: {
    root: {
      // hover styles
      ":hover": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: buttonPalette.primary.hover,
        },
      },

      //main styles
      backgroundColor: textPalette.primary.light,
      width: 246,
      fieldset: {
        border: `2px solid ${buttonPalette.primary.disabled}`,
        borderRadius: 8,
      },
      svg: {
        position: "absolute",
        right: 10,
        fill: textPalette.secondary,
      },
      ".MuiSelect-select": {
        fontSize: 16,
        lineHeight: "24px",
      },

      // focused styles
      "&.Mui-focused": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: buttonPalette.primary.pressed,
        },
      },
    },
  },
  variants: [{ props: { size: "medium" }, style: { height: 44 } }],
};

export default MuiSelect;
