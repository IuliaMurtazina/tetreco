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
        marginRight: 16,
      },
      ".MuiButton-endIcon": {
        marginLeft: 16,
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
          borderColor: buttonPalette.primary.hover,
        },
        ":active": {
          borderColor: buttonPalette.primary.pressedhover,
          backgroundColor: buttonPalette.primary.pressed,
        },
        ":disabled": {
          borderColor: buttonPalette.primary.disabledhover,
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
        borderColor: buttonPalette.primary.enabled,
        ":hover": {
          backgroundColor: textPalette.primary.light,
          borderColor: buttonPalette.primary.hover,
        },
        ":active": {
          borderColor: buttonPalette.primary.pressed,
          backgroundColor: buttonPalette.primary.hover,
        },
        ":disabled": {
          borderColor: buttonPalette.primary.disabled,
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
        padding: "5px 14px",
        fontWeight: 500,
      },
    },
    {
      props: { size: "large" },
      style: { fontSize: 18, padding: "10px 22px", fontWeight: 500 },
    },
    {
      props: { type: "round" },
      style: { borderRadius: "50%", padding: "8px", minWidth: "unset" },
    },
    {
      props: { type: "round", variant: "outlined" },
      style: {
        borderColor: iconPalette.accent.enabled,
        color: iconPalette.accent.enabled,
        ":hover": {
          color: iconPalette.accent.hover,
          borderColor: iconPalette.accent.hover,
        },
        ":active": {
          borderColor: iconPalette.accent.pressed,
          color: iconPalette.accent.pressed,
          backgroundColor: "transparent",
        },
        ":disabled": {
          borderColor: iconPalette.accent.disabled,
          color: iconPalette.accent.disabled,
        },
      },
    },
    {
      props: { search: "true" },
      style: {
        borderColor: buttonPalette.secondary.enabled,
        backgroundColor: buttonPalette.secondary.enabled,
        color: textPalette.primary.light,
        ":hover": {
          borderColor: buttonPalette.secondary.hover,
          backgroundColor: buttonPalette.secondary.hover,
          color: textPalette.primary.light,
        },
      },
    },
  ],
};

export default MuiButton;
