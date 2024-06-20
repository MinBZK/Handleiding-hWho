let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "hWho",

  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "HL",
  pubDomain: "hl",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "IO",
  publishDate: "2024-6-20",
  publishVersion: "0.1.0",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
//  previousMaturity: "IG",
//  previousPublishDate: "2022-06-24",
//  previousPublishVersion: "0.0.4",
  
  title: "Handleiding Herziene Who",
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
        name: "Jesse Renema",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Anne Thier",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Tom Kanis",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Daan Beers",
        company: "Ministerie van Binnenlandse Zaken",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Geert Leloup",
        company: "Nationaal Archief",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Martin Herz",
        company: "Kenniscentrum Europa Decentraal",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Kim Oud",
        company: "IPO",
        companyURL: "https://ntb.nl",
      },
      {
        name: "Roland Versluis",
        company: "UvW",
        companyURL: "https://ntb.nl",
      },
    ],
  github: "https://github.com/VNG-Realisatie/Handleiding-hWho",

//  maxTocLevel: 2,
  
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
    nl_organisationName: "Nog te benoemen organisatie",
    logos: [{
        src: "https://vng-realisatie.github.io/VNG-R-Respec-Organization-configurations/media/leeg.jpg",
        alt: "Geen logo",
        id: "",
        height: 77,
        url: "",
    }],
};

