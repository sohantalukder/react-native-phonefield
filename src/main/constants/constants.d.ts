type CountryCode =
  | 'AF'
  | 'AL'
  | 'DZ'
  | 'AD'
  | 'AO'
  | 'AR'
  | 'AM'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BH'
  | 'BD'
  | 'BY'
  | 'BE'
  | 'BJ'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BR'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GR'
  | 'GD'
  | 'GU'
  | 'GT'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HN'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'KP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'KN'
  | 'SC'
  | 'LC'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SO'
  | 'ZA'
  | 'KR'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TG'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'WF'
  | 'YE'
  | 'ZM'
  | 'ZW';
type EachCountry = {
  icon: string;
  countryCode: string;
  countryName: string;
  callingCode: string;
  regex: string;
};
type Constant = {
  [key in CountryCode]: EachCountry;
};
export type { CountryCode, Constant, EachCountry };