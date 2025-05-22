/**
 * Error handling utility for production environments
 * Provides environment-aware error logging and monitoring integration
 */

/**
 * Handle errors with environment-aware logging
 * @param {Error|string} error - The error to handle
 * @param {string} context - Optional context for the error
 */
export function handleError(error, context = '') {
  // Silent error handling for production
  // In development, this could be connected to a monitoring service
  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  }
  
  // In production, could send to error tracking service
  // Example integrations:
  // - Sentry: Sentry.captureException(error, { tags: { context } });
  // - LogRocket: LogRocket.captureException(error);
  // - Custom analytics: analytics.track('error', { error: error.message, context });
  
  // For now, we silently handle errors in production to avoid console noise
  // but maintain the infrastructure for future monitoring integration
}

/**
 * Handle API errors specifically
 * @param {Error} error - The API error
 * @param {string} apiName - Name of the API that failed
 * @param {Object} requestDetails - Optional request details for debugging
 */
export function handleApiError(error, apiName, requestDetails = {}) {
  const context = `${apiName} API`;
  handleError(error, context);
  
  // Could add specific API error tracking here
  // Example: trackApiFailure(apiName, error.status, requestDetails);
}

/**
 * Handle initialization errors for components
 * @param {Error} error - The initialization error
 * @param {string} componentName - Name of the component that failed to initialize
 */
export function handleInitError(error, componentName) {
  const context = `${componentName} initialization`;
  handleError(error, context);
  
  // Could add component-specific error recovery here
  // Example: attemptFallbackInitialization(componentName);
}
