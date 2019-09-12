import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#042E75'
      }
    },
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: '0 2px 4px 0 rgba(0,0,0,0.16)',
        },
      }
    },
    typography: {
      fontFamily: "Roboto",
      title: {
        fontFamily: "Roboto",
        fontSize: 18,
        color: '#EEEEEE',
        fontWeight: 500
      },
      subheading: {
        fontFamily: "Roboto",
        fontSize: 16
      },
      button: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 500
      }
    }
});

export default theme;
