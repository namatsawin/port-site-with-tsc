import React, { Component, ErrorInfo } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  // deletes the constructor...
  //constructor(props) {
  // super(props);
  // this.state = { hasError: false, redirect: false };
  // }

  public state = {
    redirect: "",
    hasError: false,
  };
  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  // set the types for error  and info
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h3>
            404 Page not found.{" "}
            <Link to="/" style={{ color: "#f50057", textDecoration: "none" }}>
              Back home
            </Link>
          </h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
