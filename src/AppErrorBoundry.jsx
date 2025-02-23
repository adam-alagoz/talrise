import {Component} from 'react'


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(`Fatal app error`,error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      //TODO: Implement crash page
      return <h1>Error Boundries Page here. This page will handle all the unexpected changes and will prevent app from crashing. Be patient and check the console for more info.</h1>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary