export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }

  console.log('Analytics Event:', eventName, properties);
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
      page_title: title,
    });
  }

  console.log('Page View:', url, title);
};

export const trackConversion = (conversionType: 'call' | 'whatsapp' | 'form' | 'quote', value?: number) => {
  trackEvent('conversion', {
    type: conversionType,
    value: value,
    timestamp: new Date().toISOString()
  });
};

export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
};

export const trackCallClick = (phoneNumber: string) => {
  trackConversion('call');
  trackEvent('call_click', {
    phone_number: phoneNumber,
  });
};

export const trackWhatsAppClick = () => {
  trackConversion('whatsapp');
  trackEvent('whatsapp_click');
};

export const trackQuoteRequest = (quantity?: string) => {
  trackConversion('quote', quantity ? parseFloat(quantity) : undefined);
  trackEvent('quote_request', {
    quantity: quantity,
  });
};
