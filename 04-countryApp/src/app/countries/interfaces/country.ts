export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    JOD?: Aed;
    USD?: Aed;
    RSD?: Aed;
    EUR?: Aed;
    COP?: Aed;
    XOF?: Aed;
    AUD?: Aed;
    BMD?: Aed;
    XAF?: Aed;
    TOP?: Aed;
    AMD?: Aed;
    ARS?: Aed;
    MVR?: Aed;
    CRC?: Aed;
    GHS?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    ETB?: Aed;
    IQD?: Aed;
    HUF?: Aed;
    GTQ?: Aed;
    BZD?: Aed;
    BSD?: Aed;
    TTD?: Aed;
    AWG?: Aed;
    PEN?: Aed;
    SRD?: Aed;
    STN?: Aed;
    XPF?: Aed;
    FKP?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    NIO?: Aed;
    ZWL?: Aed;
    CDF?: Aed;
    NOK?: Aed;
    SAR?: Aed;
    ZAR?: Aed;
    AED?: Aed;
    AFN?: Aed;
    LSL?: Aed;
    PAB?: Aed;
    SYP?: Aed;
    VUV?: Aed;
    HNL?: Aed;
    KID?: Aed;
    CLP?: Aed;
    XCD?: Aed;
    SSP?: Aed;
    LKR?: Aed;
    SZL?: Aed;
    UZS?: Aed;
    IDR?: Aed;
    PYG?: Aed;
    WST?: Aed;
    PLN?: Aed;
    TMT?: Aed;
    BAM?: BAM;
    CAD?: Aed;
    BRL?: Aed;
    MDL?: Aed;
    MRU?: Aed;
    CHF?: Aed;
    MNT?: Aed;
    THB?: Aed;
    ANG?: Aed;
    NGN?: Aed;
    CVE?: Aed;
    JEP?: Aed;
    BND?: Aed;
    SGD?: Aed;
    DZD?: Aed;
    AOA?: Aed;
    TRY?: Aed;
    LAK?: Aed;
    GIP?: Aed;
    AZN?: Aed;
    VES?: Aed;
    MAD?: Aed;
    QAR?: Aed;
    CZK?: Aed;
    KWD?: Aed;
    BGN?: Aed;
    BIF?: Aed;
    UGX?: Aed;
    MZN?: Aed;
    PKR?: Aed;
    NZD?: Aed;
    RON?: Aed;
    VND?: Aed;
    KZT?: Aed;
    BHD?: Aed;
    LRD?: Aed;
    FJD?: Aed;
    HTG?: Aed;
    ISK?: Aed;
    MMK?: Aed;
    BDT?: Aed;
    PHP?: Aed;
    HKD?: Aed;
    NPR?: Aed;
    MGA?: Aed;
    GMD?: Aed;
    YER?: Aed;
    OMR?: Aed;
    ERN?: Aed;
    MYR?: Aed;
    IRR?: Aed;
    TZS?: Aed;
    SBD?: Aed;
    SOS?: Aed;
    KES?: Aed;
    DOP?: Aed;
    ALL?: Aed;
    ZMW?: Aed;
    CKD?: Aed;
    GNF?: Aed;
    RWF?: Aed;
    TVD?: Aed;
    TWD?: Aed;
    SCR?: Aed;
    IMP?: Aed;
    KPW?: Aed;
    SDG?: BAM;
    TJS?: Aed;
    BWP?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
