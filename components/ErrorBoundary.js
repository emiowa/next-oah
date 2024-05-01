import React from 'react';

function logErrorToMyService(error, componentStack) {
    // Implement your logic to log errors to a service
    console.error(error);
    console.error(componentStack);
    // Example: send error data to an analytics service or error reporting service
  }

  export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        logErrorToMyService(error, info.componentStack);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return this.props.fallback;
        }
    
        return this.props.children;
      }
  }
  