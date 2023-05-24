import { buttonPalette, iconPalette, textPalette } from "./palette";

const MuiRadio = {
  styleOverrides: {
    root: {
      // main styles
      padding: 0,
      svg: {
        fill: textPalette.primary.light,
        borderRadius: "50%",
        backgroundColor: textPalette.primary.light,
        transition: "none",
      },
      'svg[data-testid="RadioButtonUncheckedIcon"]': {
        border: `1px solid ${buttonPalette.secondary.enabled}`,
      },
      "&.Mui-checked": {
        'svg[data-testid="RadioButtonCheckedIcon"]': {
          fill: textPalette.primary.light,
          backgroundColor: buttonPalette.secondary.enabled,
        },
      },

      // hover styles
      ":hover": {
        'svg[data-testid="RadioButtonUncheckedIcon"]': {
          border: `1px solid ${buttonPalette.secondary.pressed}`,
        },
        "&.Mui-checked": {
          'svg[data-testid="RadioButtonCheckedIcon"]': {
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
            backgroundColor: iconPalette.tertiary,
          },
        },
      },
    },
  },
  variants: [
    { props: { size: "small" }, style: { svg: { width: 16, height: 16 } } },
    {
      props: { size: "medium" },
      style: { svg: { width: 24, height: 24 } },
    },
  ],
};

export default MuiRadio;
