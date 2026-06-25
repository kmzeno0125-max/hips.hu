export type EventFormat = 'workshop' | 'webinar';
export type EventType = 'location' | 'webinar' | 'keszthely' | 'singleOnly';

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
    date: '2026. június 5. péntektől kezdődően minden pénteken 17.00–18.00 között',
    city: 'On-line webinár',
    type: 'webinar',
    format: 'webinar',
    webinarOptions: [
      {
        label: 'Egyszeri alkalom',
        price: '600 Ft',
        link: 'https://buy.stripe.com/6oU4gz0nHfIG40A0EN6g809',
      },
      {
        label: 'Havi bérlet',
        price: '1.000 Ft',
        link: 'https://buy.stripe.com/eVqeVdeex8geeFeafn6g808',
      },
      {
        label: 'Éves bérlet',
        price: '10.000 Ft',
        link: 'https://buy.stripe.com/00wcN54DX3ZY0Oobjr6g807',
      },
    ],
  },
  {
    date: '2026. június 27. szombat',
    city: 'Keszthely',
    type: 'keszthely',
    singlePrice: '9.000 Ft / fő',
    singleLink: 'https://buy.stripe.com/bJecN5gmFbsqcx6gDL6g806',
  },
  {
    date: '2026. július 4. szombat',
    city: 'Keszthely',
    type: 'keszthely',
    singlePrice: '9.000 Ft / fő',
    singleLink: 'https://buy.stripe.com/bJecN5gmFbsqcx6gDL6g806',
  },
  {
    date: '2026. július 5. vasárnap',
    city: 'Lébény',
    type: 'singleOnly',
    singlePrice: '9.000 Ft / fő',
    singleLink: 'https://buy.stripe.com/dRm8wPc6pfIG54E87f6g805',
  },
  {
    date: '2026. július 11. szombat',
    city: 'Keszthely',
    type: 'keszthely',
    singlePrice: '9.000 Ft / fő',
    singleLink: 'https://buy.stripe.com/bJecN5gmFbsqcx6gDL6g806',
  },
];
