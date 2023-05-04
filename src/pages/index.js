import Icon from "@/components/ui/icons/Icon";
// import Button from "@/components/ui/Button";
import { Button, Input, Switch } from "@mui/material";
import IconFavorite from "@/components/ui/icons/IconFavorite";
import IconGrade from "@/components/ui/icons/IconGrade";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/muiTheme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ padding: "10px" }}>
          <h1>Tetreco</h1>
          <br></br>
          {/* <Button icon={<Icon iconLabel='menu'/>}></Button> */}
          <Button
            variant="contained"
            size="large"
            startIcon={<Icon iconLabel="format_list_bulleted" />}
          >
            Категории
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Icon iconLabel="user" />}
          >
            Вход
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="text"
            size="small"
            endIcon={<Icon iconLabel="user" />}
          >
            Регистрация
          </Button>
          <br></br>
          <br></br>
          <Button variant="contained" size="small" type="round">
            <Icon iconLabel="menu" />
          </Button>
          <br></br>
          <br></br>
          <Button variant="outlined" size="small" type="round">
            <Icon iconLabel="menu" />
          </Button>
          <br></br>
          <br></br>
          <Switch defaultChecked icon={<Icon iconLabel="view_list" />} checkedIcon={<Icon iconLabel="view_module" />}/>
          <br></br>
          <br></br>
          {/* <Input/> */}
        </div>
      </ThemeProvider>
    </>
  );
}
