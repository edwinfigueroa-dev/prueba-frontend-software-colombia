export interface ResponseHeroeApi {
    length:     number;
    size:       number;
    page:       number;
    firstPage:  number;
    lastPage:   number;
    startIndex: number;
    endIndex:   number;
    items:      Heroe[];
}

export interface Heroe {
    biography:   Biography;
    work:        Work;
    slug:        string;
    images:      Images;
    appearance:  Appearance;
    connections: Connections;
    id:          number;
    name:        string;
    powerstats:  Powerstats;
}

export interface Appearance {
    weight:    string[];
    hairColor: string;
    gender:    Gender;
    race:      null | string;
    eyeColor:  string;
    height:    string[];
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Biography {
    firstAppearance: string;
    placeOfBirth:    string;
    aliases:         string[];
    fullName:        string;
    publisher:       Publisher;
    alterEgos:       AlterEgos;
    alignment:       Alignment;
}

export enum Alignment {
    Bad = "bad",
    Good = "good",
}

export enum AlterEgos {
    NoAlterEgosFound = "No alter egos found.",
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
    NBCHeroes = "NBC - Heroes",
}

export interface Connections {
    groupAffiliation: string;
    relatives:        string;
}

export interface Images {
    sm: string;
    xs: string;
    lg: string;
    md: string;
}

export interface Powerstats {
    combat:       number;
    power:        number;
    strength:     number;
    speed:        number;
    intelligence: number;
    durability:   number;
}

export interface Work {
    occupation: string;
    base:       string;
}
