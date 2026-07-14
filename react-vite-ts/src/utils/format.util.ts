const MONTHS_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TOKENS: { [k: string]: (v: Date) => string } = {
  YYYY: (v: Date) => v.getFullYear().toString(),
  YY: (v: Date) => v.getFullYear().toString().slice(-2),
  MMMM: (v: Date) => MONTHS_FULL[v.getMonth()],
  MMM: (v: Date) => MONTHS_SHORT[v.getMonth()],
  MM: (v: Date) => (v.getMonth() + 1).toString().padStart(2, '0'),
  DDDD: (v: Date) => DAYS_FULL[v.getDay()],
  DDD: (v: Date) => DAYS_SHORT[v.getDay()],
  DD: (v: Date) => v.getDate().toString().padStart(2, '0'),
  HH: (v: Date) => v.getHours().toString().padStart(2, '0'),
  mm: (v: Date) => v.getMinutes().toString().padStart(2, '0'),
  ss: (v: Date) => v.getSeconds().toString().padStart(2, '0'),
  S: (v: Date) => (v.getMilliseconds() / 100).toString().split('.')[0],
  SS: (v: Date) => (v.getMilliseconds() / 10).toString().split('.')[0].padStart(2, '0'),
  SSS: (v: Date) => v.getMilliseconds().toString().padStart(3, '0'),
  a: (v: Date) => (v.getHours() >= 12 ? 'PM' : 'AM'),
};

export function decimalPad(v: number | string, length: number): string {
  const r: string = v.toString();
  let pr: string = '';
  if (length === 0) return r;
  if (r.includes('.')) pr = r.split('.')[1];
  return `${r.split('.')[0]}.${pr.padEnd(length, '0')}`;
}

export function formatDateTime(obj: Date, pattern: string = 'YYYY-MM-DD HH:mm:ss.SSS a'): string {
  let r = '';
  let i = 0;

  while (i < pattern.length) {
    const char = pattern[i];

    if ('YMDHSmsa'.includes(char)) {
      let t = '';
      while (i < pattern.length && 'YMDHSmsa'.includes(pattern[i])) {
        t += pattern[i];
        i++;
      }

      if (Object.keys(TOKENS).includes(t)) {
        r += TOKENS[t](obj);
      } else {
        throw new Error(`Unsupported token: ${t}`);
      }
    } else if ('`~!@#$%^&*-_=+()[]{}<>:;\'"\\/?,.| '.includes(char)) {
      r += char;
      i++;
    } else {
      throw new Error(`Unsupported character: ${char}`);
    }
  }

  return r;
}

export function formatNumber(num: number, padding: number = 0, precision: number = 0): string {
  const padded = num.toString().split('.')[0].padStart(padding, '0');
  const decimalPadded = num.toString().split('.')[1].padEnd(precision, '0');

  return `${padded}.${decimalPadded}`;
}
