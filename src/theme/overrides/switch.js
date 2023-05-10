import { buttonPalette, iconPalette, textPalette } from "./palette";

const MuiSwitch = {
  styleOverrides: {
    root: {
      // hover styles
      ":hover": {
        ".MuiSwitch-track": {
          border: `2px solid ${buttonPalette.secondary.pressed}`,
        },
        ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
          backgroundColor: buttonPalette.secondary.pressed,
          opacity: 1,
        },
        ".MuiSwitch-switchBase": {
          color: buttonPalette.secondary.pressed,
        },
      },

      // main styles
      ".MuiSwitch-switchBase": {
        color: buttonPalette.secondary.enabled,
        top: "50%",
        padding: 0,
      },
      ".MuiSwitch-thumb": {
        boxShadow: "none",
      },
      ".MuiSwitch-track": {
        border: `2px solid ${buttonPalette.secondary.enabled}`,
        backgroundColor: textPalette.primary.light,
        opacity: 1,
        borderRadius: 24,
      },

      // checked styles
      ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        backgroundColor: buttonPalette.secondary.enabled,
        opacity: 1,
      },
      ".MuiSwitch-switchBase.Mui-checked": {
        color: textPalette.primary.light,
      },

      // disabled styles
      ".MuiSwitch-switchBase.Mui-disabled": {
        color: buttonPalette.secondary.enabled,
      },
      ".MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track": {
        border: `2px solid ${buttonPalette.secondary.disabled}`,
        opacity: 1,
      },
      ".MuiSwitch-switchBase.Mui-checked.Mui-disabled": {
        color: textPalette.primary.light,
      },
      ".MuiSwitch-switchBase.Mui-checked.Mui-disabled+.MuiSwitch-track": {
        border: `2px solid ${textPalette.tertiary}`,
        backgroundColor: textPalette.tertiary,
        opacity: 1,
      },
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        width: 28,
        height: 16,
        padding: 0,
        ".MuiSwitch-switchBase": {
          transform: "translate(50%, -50%)",
          "&.Mui-checked": {
            transform: "translate(200%, -50%)",
          },
        },
        ".MuiSwitch-thumb": {
          width: 8,
          height: 8,
        },
      },
    },
    {
      props: { size: "medium" },
      style: {
        width: 40,
        height: 24,
        padding: 0,
        ".MuiSwitch-switchBase": {
          transform: "translate(25%, -50%)",
          "&.Mui-checked": {
            transform: "translate(125%, -50%)",
          },
        },
        ".MuiSwitch-thumb": {
          width: 16,
          height: 16,
        },
      },
    },
    // view list switch styles
    {
      props: { mode: "viewList" },
      style: {
        width: 88,
        height: 44,
        padding: 0,
        ":hover": {
          ".MuiSwitch-track": {
            border: `2px solid ${buttonPalette.primary.enabled}`,
          },
          ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: buttonPalette.primary.enabled,
          },
          ".MuiSwitch-switchBase": {
            color: buttonPalette.primary.enabled,
          },
        },
        ".MuiSwitch-switchBase": {
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
        ".MuiSwitch-track": {
          border: `2px solid ${buttonPalette.primary.enabled}`,
          backgroundColor: buttonPalette.primary.enabled,
          opacity: 1,
          borderRadius: "24px",
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
        ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
          backgroundColor: buttonPalette.primary.enabled,
          opacity: 1,
        },
      },
    },
  ],
};

export default MuiSwitch;
