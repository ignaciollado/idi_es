export interface OneArticle {
    links: Links;
    data:  OneArticleData;
}

export interface OneArticleData {
    type:          string;
    id:            string;
    attributes:    attrOneArticle;
    relationships: Relationships;
}

export interface attrOneArticle {
    typeAlias:        string;
    id:               number;
    asset_id:         number;
    title:            string;
    alias:            string;
    state:            number;
    created:          Date;
    created_by:       number;
    created_by_alias: string;
    modified:         Date;
    modified_by:      number;
    publish_up:       Date;
    publish_down:     null;
    images:           Images;
    urls:             Urls;
    version:          number;
    metakey:          string;
    metadesc:         string;
    access:           number;
    hits:             number;
    metadata:         Metadata;
    featured:         number;
    language:         string;
    note:             string;
    tags:             { [key: string]: string };
    featured_up:      null;
    featured_down:    null;
    text:             string;
    cabecera:         string;
    area:             Area;
}

export interface Area {
    comercio: string;
}

export interface Images {
    image_intro:            string;
    float_intro:            string;
    image_intro_alt:        string;
    image_intro_caption:    string;
    image_fulltext:         string;
    float_fulltext:         string;
    image_fulltext_alt:     string;
    image_fulltext_caption: string;
}

export interface Metadata {
    robots:     string;
    author:     string;
    rights:     string;
    xreference: string;
}

export interface Urls {
    urla:     string;
    urlatext: string;
    targeta:  string;
    urlb:     string;
    urlbtext: string;
    targetb:  string;
    urlc:     string;
    urlctext: string;
    targetc:  string;
}

export interface Relationships {
    category:             Category;
    created_by:           Category;
    modified_by:          Category;
    languageAssociations: LanguageAssociations;
}

export interface Category {
    data: CategoryData;
}

export interface CategoryData {
    type: string;
    id:   string;
}

export interface LanguageAssociations {
    data: any[];
}

export interface Links {
    self: string;
}
