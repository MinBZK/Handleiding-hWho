let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "hWho",

  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "HL",
  pubDomain: "hl",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "IG",
  publishDate: "2026-7-31",
  publishVersion: "1.1.0",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
 previousMaturity: "IO",
 previousPublishDate: "2024-7-30",
 previousPublishVersion: "1.0.0",
  
  title: "Handleiding Herziene Who nav de Wet implementatie open data richtlijn",
//  content: {"mermaid": "", "ch01": "informative", "ch02": ""},
//  authors:
//    [
//      {
//        name: "Robert Melskens",
//        company: "VNG Realisatie",
//        companyURL: "https://vng.nl/artikelen/vng-realisatie",
//      }
//    ],
  
  editors:
    [
      {
        name: "Anna Keuning",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Sander Bakker",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Hanneke van Katwijk",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Rachel Wouda",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Paul Sterkenburg",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Tom Kanis",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Frank Smeets",
        company: "Nationaal Archief",
        companyURL: "https://www.nationaalarchief.nl/",
      },
      {
        name: "Martin Herz",
        company: "Kenniscentrum Europa Decentraal",
        companyURL: "https://europadecentraal.nl/",
      },
      {
        name: "Mart van der Wal",
        company: "Kenniscentrum Europa Decentraal",
        companyURL: "https://europadecentraal.nl/",
      },
       {
        name: "Sophia Vermaas",
        company: "Kenniscentrum Europa Decentraal",
        companyURL: "https://europadecentraal.nl/",
      },
      {
        name: "Annelien van der Plas",
        company: "IPO",
        companyURL: "https://www.ipo.nl/",
      },
      {
        name: "Roland Versluis",
        company: "UvW",
        companyURL: "https://unievanwaterschappen.nl/",
      },
       {
        name: "Marco Segers",
        company: "Logius",
        companyURL: "https://www.logius.nl/",
      },
      {
        name: "Esdras Terrero",
        company: "Logius",
        companyURL: "https://www.logius.nl/",
      },
    ],
  github: "https://github.com/MinBZK/Handleiding-hWho",

  maxTocLevel: 2,
  
  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
    alternateFormats: [
      {
          label: "pdf",
          uri: "Handleiding-hWho.pdf",
      },
    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/mim/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
            date: "Oktober 2013",
            rawDate: "2023"
        },
    },
    nl_organisationName: "Samenwerking BZK, VNG, IPO, UvW, NA, KED",
    logos: [{
        src: "https://minbzk.github.io/BZK-R-Respec-Organization-configurations/media/Leeg.jpg",
        alt: "Geen logo",
        id: "",
        height: 77,
        url: "",
    }],
};

module.exports = { respecConfig };
