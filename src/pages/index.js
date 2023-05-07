import Icon from "@/components/ui/icons/Icon";
import {
  Button,
  Switch,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1>Tetreco</h1>
        <br></br>
        <Button
          variant="contained"
          size="large"
          startIcon={<Icon iconId="format_list_bulleted" />}
        >
          Категории
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Icon iconId="user" />}
        >
          Вход
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="text"
          size="small"
          endIcon={<Icon iconId="user" />}
        >
          Регистрация
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          size="small"
          type="round"
        >
          <Icon iconId="menu" />
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="outlined"
          size="small"
          type="round"
        >
          <Icon iconId="menu" />
        </Button>
        <br></br>
        <br></br>
        <Switch
          defaultChecked
          mode="viewList"
          icon={<Icon iconId="view_list" />}
          checkedIcon={<Icon iconId="view_module" />}
        />
        <Switch
          defaultChecked
          size="small"
        />
        <Switch size="medium" />
        <br></br>
        <br></br>
        <TextField
          variant="outlined"
          label="E-mail"
          helperText="Введите свой e-mail"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon iconId="search" />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          variant="outlined"
          placeholder="Поиск по сообщениям"
          size="small"
          search={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon iconId="search" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Icon iconId="close" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="Email"
          helperText="Введите ваш e-mail"
          size="s-m"
        ></TextField>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Home;
