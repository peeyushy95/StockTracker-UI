const styles = theme => ({
  baseClass: {
    background: '#0600000a',
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1,
    height: '110px'
  },
  textTypography: {
    fontWeight: 500,
    fontSize: 18,
    color: '#042f75'
  }
});

export default styles;
