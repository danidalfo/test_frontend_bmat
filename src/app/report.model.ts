export interface Report {

  name: string;
  date: string;
  group: string;
  groupType: string;
  sentItems: number;
  validatedItems: number;
  errors: number;

}

export const DATA: Report[]=[{
  "name": "ZDF INFO",
  "date": "Oct 2018",
  "group": "WDR",
  "groupType": "TV",
  "sentItems": 154,
  "validatedItems": 112,
  "errors": 5
},
  {
    "name": "WDR-4",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 767,
    "validatedItems": 987,
    "errors": 15
  },
  {
    "name": "WDR-5",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 21,
    "validatedItems": 164,
    "errors": 0
  },
  {
    "name": "WDR1-LIVE",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 543,
    "validatedItems": 987,
    "errors": 0
  },
  {
    "name": "KIRAKA",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 154,
    "validatedItems": 21,
    "errors": 5
  },
  {
    "name": "DFL NOVA",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 719,
    "validatedItems": 897,
    "errors": 0
  },
  {
    "name": "BR3",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 198,
    "validatedItems": 234,
    "errors": 12
  },
  {
    "name": "SWR1",
    "date": "Oct 2018",
    "group": "WDR",
    "groupType": "TV",
    "sentItems": 34,
    "validatedItems": 153,
    "errors": 12
  }]

