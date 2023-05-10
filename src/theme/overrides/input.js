import {
  buttonPalette,
  textPalette,
  inputPalette,
  iconPalette,
} from "./palette";

const MuiTextField = {
  styleOverrides: {
    root: {
      label: {
        fontSize: 16,
        color: textPalette.secondary,
      },
      input: {
        fontSize: 16,
      },
      legend: {
        fontSize: 12,
      },
      ".MuiInputBase-root": {
        backgroundColor: textPalette.primary.light,
        borderRadius: 8,
      },
      ".MuiFormHelperText-root": {
        fontSize: 14,
        color: textPalette.primary.main,
      },
    },
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        ":hover": {
          label: {
            transform: "translate(14px, -9px) scale(0.75)",
            color: textPalette.primary.main,
          },
          legend: {
            maxWidth: "100%",
          },
          "& .MuiOutlinedInput-root fieldset": {
            borderColor: inputPalette.hover,
          },
        },
        "& .MuiOutlinedInput-root": {
          fieldset: {
            borderWidth: 2,
            borderColor: inputPalette.enabled,
          },
          "&.Mui-focused fieldset": {
            borderColor: inputPalette.focused,
          },
        },
        "& label.Mui-focused": {
          color: textPalette.primary.main,
        },
        ".MuiFormHelperText-root.Mui-focused": {
          color: textPalette.secondary,
        },
      },
    },
    {
      props: { disabled: true },
      style: {
        "label.Mui-disabled": {
          transform: "translate(14px, -9px) scale(0.75)",
          color: textPalette.accent.disabled,
        },
        "& .MuiOutlinedInput-root.Mui-disabled": {
          fieldset: {
            borderColor: inputPalette.hover,
          },
          legend: {
            maxWidth: "100%",
          },
        },
        ".MuiFormHelperText-root.Mui-disabled": {
          color: textPalette.accent.disabled,
        },
      },
    },
    {
      props: { size: "s-m" },
      style: {
        input: {
          height: "0.94em",
        },
        label: {
          transform: "translate(14px, 12px) scale(1)",
        },
        "& label.Mui-focused": {
          transform: "translate(14px, -9px) scale(0.75)",
        },
      },
    },
    {
      props: { search: true },
      style: {
        ":hover": {
          "& .MuiOutlinedInput-root fieldset": {
            borderColor: iconPalette.accent.hover,
          },
        },
        "& .MuiOutlinedInput-root": {
          fieldset: {
            borderWidth: 1,
            borderColor: iconPalette.accent.enabled,
          },
          "&.Mui-focused fieldset": {
            borderWidth: 1,
            borderColor: iconPalette.accent.pressed,
          },
        },
      },
    },
  ],
};

export default MuiTextField;
