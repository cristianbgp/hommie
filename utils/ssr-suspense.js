import { Component, Suspense } from "react";

const isServer = typeof window === "undefined";

function err(condition) {
  if (process.env.NODE_ENV === "production") return;
  if (!condition) return;
  console.info(
    "SSRSuspense fallback was not defined or it was defined as null, use a proper fallback instead.",
    "suspense-fallback"
  );
}

export class SSRSuspense extends Component {
  static defaultProps = {
    fallback: null,
  };

  render() {
    const { fallback } = this.props;
    err(fallback === null);
    if (isServer) return fallback;
    return <Suspense fallback={fallback} {...this.props} />;
  }
}
