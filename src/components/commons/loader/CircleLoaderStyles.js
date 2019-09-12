const styles = theme => ({
  loadingContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.9,
    background: '#0a1827fc',
    display: 'flex',
    flexDirection: 'row',
    zIndex: 9999,
  },
  loadingData: {
    zIndex: 600,
    margin: '20% auto%'
  },
  loadingCircle: {
    zIndex: 600,
    margin: '13% 12%'
  },
  colFlex:{
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
  },
  PropogandaLogo: {
    zIndex: 600,
    margin: '20% 42%'
  },
  // '@global': {
  //   '.HeightFull': {
  //     height: '100%'
  //   },
  // }
});

export default styles;
