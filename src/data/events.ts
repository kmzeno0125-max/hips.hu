export type EventFormat = 'workshop' | 'webinar';
export type EventType = 'location' | 'webinar' | 'singleOnly';

export interface WebinarOption {
  label: string;
  price: string;
  link: string;
}

export interface EventLocation {
  date: string;
  city: string;
  type: EventType;
  format?: EventFormat;
  placeholder?: boolean;
  links?: {
    single: string;
    double: string;
    triple: string;
  };
  webinarOptions?: WebinarOption[];
  singlePrice?: string;
  singleLink?: string;
}

export const eventLocations: EventLocation[] = [
  {
    date: 'Minden pénteken 17.00–18.00 között',
    city: 'On-line webinár',
    type: 'webinar',
    format: 'webinar',
    webinarOptions: [
      {
        label: 'Éves bérlet',
        price: '10.000 Ft',
        link: 'https://buy.stripe.com/00wcN54DX3ZY0Oobjr6g807',
      },
      {
        label: 'Havi bérlet',
        price: '1.000 Ft',
        link: 'https://buy.stripe.com/eVqeVdeex8geeFeafn6g808',
      },
      {
        label: 'Egyszeri alkalom',
        price: '600 Ft',
        link: 'https://buy.stripe.com/6oU4gz0nHfIG40A0EN6g809',
      },
    ],
  },
];
