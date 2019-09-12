const styles = theme => ({
  '@global': {
    'div.ag-theme-material .ag-header-cell-label .ag-header-cell-text': {
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      hyphens: 'auto',
      '-webkit-hyphens': 'auto',
      '-ms-hyphens': 'auto',
      lineHeight: '17px',
      paddingTop: '12px',
    },
    'div.ag-theme-material .baap-stock': {
      backgroundColor: 'green !important'
    },
    'div.ag-theme-material .above-ema': {
      backgroundColor: '#00ccff !important'
    },
    'div.ag-theme-material .below-ema': {
      backgroundColor: 'red !important'
    },
    'div.ag-theme-material .etf': {
      backgroundColor: '#ffef00 !important'
    },
    'div.ag-theme-material .others': {
      backgroundColor: '#ff9d00 !important'
    },
    'div.ag-theme-material .ag-header-cell, div.ag-theme-material .ag-cell': {
      paddingRight: 0,
      paddingLeft: 20,
      borderStyle: 'none'
    },

    'div.ag-theme-material .ag-header-cell:nth-child(1), div.ag-theme-material .ag-cell:nth-child(1)': {
      paddingLeft: 24
    }
  },
  textTypography: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 18,
    color: '#042f75'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 51,
    cursor: 'pointer'
  },
  noSurveyMsg: {
    textAlign: 'center',
    paddingTop: 50,
    height: 50
  },
  componentBaseClass: {
    marginLeft: 45,
    marginRight: 45,
    height: '88%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  formControl1: {
    paddingLeft: theme.spacing.unit*2,
    paddingTop: theme.spacing.unit*5,
    paddingBottom: theme.spacing.unit*2
  },
  subHeadingTypography: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgba(0,0,0,0.60)'
  },
  paddingTB: {
    paddingTop: 20,
    paddingBottom: 20
  },
  'colorSwitchBase-1': {
    color: '#042E75',
    '&$colorChecked': {
      color: '#042E75',
      '& + $colorBar': {
        backgroundColor: '#042E75',
      },
    },
  },
  colorSwitchBase5: {
    color: 'green',
    '&$colorChecked': {
      color: 'green',
      '& + $colorBar': {
        backgroundColor: 'green',
      },
    },
  },
  colorSwitchBase4: {
    color: '#00ccff',
    '&$colorChecked': {
      color: '#00ccff',
      '& + $colorBar': {
        backgroundColor: '#00ccff',
      },
    },
  },
  colorSwitchBase3: {
    color: 'red',
    '&$colorChecked': {
      color: 'red',
      '& + $colorBar': {
        backgroundColor: 'red',
      },
    },
  },
  colorSwitchBase2: {
    color: '#ff9d00',
    '&$colorChecked': {
      color: '#ff9d00',
      '& + $colorBar': {
        backgroundColor: '#ff9d00',
      },
    },
  },
  colorSwitchBase1: {
    color: '#ffef00',
    '&$colorChecked': {
      color: '#ffef00',
      '& + $colorBar': {
        backgroundColor: '#ffef00',
      },
    },
  },
  colorSwitchBase0: {
    color: '#ff9d00',
    '&$colorChecked': {
      color: '#ff9d00',
      '& + $colorBar': {
        backgroundColor: '#ff9d00',
      },
    },
  },
  colorBar: {},
  colorChecked: {}
});

export default styles;
