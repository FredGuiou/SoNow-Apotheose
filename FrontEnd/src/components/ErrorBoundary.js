import React from "react";

import "../styles/errorBoundary.scss";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="errorBoundary__message">error while loading the rendering</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 