import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
  state = {
    eventId: null
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    Sentry.withScope((scope) => {
      scope.setExtras(info);
      const eventId = Sentry.captureException(error);
      this.setState({eventId});
    });
  }

  errorPage = () => {
    Sentry.showReportDialog({ eventId: this.state.eventId });
  }

  render() {
    if (this.state.hasError) 
      return <button onClick={this.errorPage}>Report feedback</button>;
    else 
      return this.props.children;
  }
}

export default ErrorBoundary;