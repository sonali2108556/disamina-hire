export { };

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
    fwcrm: {
      identify: (identifier: string, data: any) => Promise<void>;
    };
    Tawk_API?: {
      maximize?: () => void;
      hideWidget?: () => void;
      onLoad?: () => void;
    };
  }
}
