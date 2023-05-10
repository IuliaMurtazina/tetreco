import { buttonPalette, iconPalette, textPalette } from "./palette";

const MuiCheckbox = {
  styleOverrides: {
    root: {
      // main styles
      padding: 0,
      svg: {
        fill: "none",
        border: `1px solid ${buttonPalette.secondary.enabled}`,
        borderRadius: 4,
        transition: "all .2s ease-out",
      },
      "&.Mui-checked": {
        svg: {
          backgroundColor: buttonPalette.secondary.enabled,
          fill: textPalette.primary.light,
        },
      },

      // hover styles
      ":hover": {
        svg: {
          borderColor: buttonPalette.secondary.pressed,
        },
        "&.Mui-checked": {
          svg: {
            backgroundColor: buttonPalette.secondary.pressed,
          },
        },
      },

      // disabled styles
      "&.Mui-disabled": {
        svg: {
          borderColor: buttonPalette.secondary.disabled,
        },
        "&.Mui-checked": {
          svg: {
            backgroundColor: buttonPalette.secondary.pressed,
          },
        },
      },
      "&.Mui-checked.Mui-disabled": {
        svg: {
          borderColor: iconPalette.tertiary,
          backgroundColor: iconPalette.tertiary,
        },
      },
    },
  },
  variants: [
    { props: { size: "small" }, style: { svg: { width: 16, height: 16 } } },
    { props: { size: "medium" }, style: { svg: { width: 24, height: 24 } } },
  ],
};

export default MuiCheckbox;
