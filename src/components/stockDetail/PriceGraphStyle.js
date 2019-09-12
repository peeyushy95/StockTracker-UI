const styles = theme => ({
  flex: {
    flex: 1,
  },
  textTypography: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 18,
    color: '#042f75'
  },
  paddinT:{
    paddingTop: 30,
  },
  colorSwitchBase: {
    color: '#042E75',
    '&$colorChecked': {
      color: '#042E75',
      '& + $colorBar': {
        backgroundColor: '#042E75',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default styles;
