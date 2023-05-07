import { buttonPalette, textPalette, iconPalette } from "./palette";

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: "8px",
      boxShadow: "none",
      textTransform: "none",
      transition: "all .3s ease-out",
      ":hover": {
        boxShadow: "none",
      },
      ".MuiButton-startIcon": {
        marginRight: "16px",
      },
      ".MuiButton-endIcon": {
        marginLeft: "16px",
      },
    },
  },
  variants: [
    {
      props: { variant: "contained" },
      style: {
        backgroundColor: buttonPalette.primary.enabled,
        color: textPalette.primary.light,
        border: `3px solid ${buttonPalette.primary.enabled}`,
        ":hover": {
          backgroundColor: buttonPalette.primary.hover,
          border: `3px solid ${buttonPalette.primary.hover}`,
        },
        ":active": {
          border: `3px solid ${buttonPalette.primary.pressed}`,
          backgroundColor: buttonPalette.primary.pressed,
        },
        ":disabled": {
          border: `3px solid ${buttonPalette.primary.disabled}`,
          color: textPalette.primary.light,
          backgroundColor: buttonPalette.primary.disabled,
        },
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        backgroundColor: textPalette.primary.light,
        color: textPalette.primary.main,
        border: `3px solid ${buttonPalette.primary.enabled}`,
        ":hover": {
          backgroundColor: textPalette.primary.light,
          border: `3px solid ${buttonPalette.primary.hover}`,
        },
        ":active": {
          border: `3px solid ${buttonPalette.primary.pressed}`,
          backgroundColor: buttonPalette.primary.hover,
        },
        ":disabled": {
          border: `3px solid ${buttonPalette.primary.disabled}`,
        },
      },
    },
    {
      props: { variant: "text" },
      style: {
        backgroundColor: textPalette.primary.light,
        color: textPalette.primary.main,
        ":hover": {
          backgroundColor: textPalette.primary.light,
          color: textPalette.accent.hover,
        },
        ":active": {
          color: textPalette.accent.pressed,
        },
        ":disabled": { color: textPalette.tetriary },
      },
    },
    {
      props: { size: "small" },
      style: {
        fontSize: 16,
        padding: "7px 15px",
        fontWeight: 500,
      },
    },
    {
      props: { size: "large" },
      style: { fontSize: 18, padding: "11px 23px", fontWeight: 500 },
    },
    {
      props: { type: "round" },
      style: { borderRadius: "50%", padding: "8px", minWidth: "unset" },
    },
    {
      props: { type: "round", variant: "outlined" },
      style: {
        border: `3px solid ${iconPalette.accent.enabled}`,
        color: iconPalette.accent.enabled,
        ":hover": {
          color: iconPalette.accent.hover,
          border: `3px solid ${iconPalette.accent.hover}`,
        },
        ":active": {
          border: `3px solid ${iconPalette.accent.pressed}`,
          color: iconPalette.accent.pressed,
          backgroundColor: "transparent",
        },
        ":disabled": {
          border: `3px solid ${iconPalette.accent.disabled}`,
          color: iconPalette.accent.disabled,
        },
      },
    },
  ],
};

export default MuiButton;
