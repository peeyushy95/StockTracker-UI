import React, { PureComponent, createContext } from 'react';

const { Provider, Consumer } = createContext({ width: 0, height: 0 });

class WindowProvider extends PureComponent {
  state = this.getDimensions();

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = documentElement.clientWidth || w.innerWidth ||  body.clientWidth;
    const height = documentElement.clientHeight || w.innerHeight || body.clientHeight;

    return { width, height };
  }

  updateDimensions = () => {
    this.setState(this.getDimensions());
  };

  render() {
    const { children } = this.props;

    return <Provider value={this.state}>{children}</Provider>;
  }
}
export default WindowProvider;
export const WindowConsumer = Consumer;
