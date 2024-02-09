# Het VNG-R Respec proces

Onderstaande flowchart beschrijft het proces zoals we dat binnen VNG Realisatie hanteren om tot Respec documentatie te komen. Daarnaast is het echter ook een voorbeeld van het gebruik van de Mermaid syntax voor het vervaardigen van zo'n flowchart. Zie de '[Flowchart syntax](https://mermaid.js.org/syntax/flowchart.html)' voor een uitleg van de Mermaid syntax.

<figure>
    
```mermaid
%%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
graph TD;
    A([Start])---->B{"<b>1</b><br/>Eerste versie<br/>van Respec<br/>documentatie?"};
    B{"<b>1</b><br/>Eerste versie<br/>van Respec<br/>documentatie?"}--Nee-->C("...");
    C("...")---->D("<b>3</b><br/>Creëer nieuwe content of pas content aan");
    C("...")---->E("<b>5</b><br/>Pas basisstructuur aan voor versie");
    D("<b>3</b><br/>Creëer nieuwe content of pas content aan")---->I("<b>4</b><br/>Assembleer document");
    I("<b>4</b><br/>Assembleer document")---->J("<b>5</b><br/>Pas document configuratie properties aan");
    B{"<b>1</b><br/>Eerste versie<br/>van Respec<br/>documentatie?"}--Ja-->F("...");
    F("...")---->G("<b>2</b><br/>Creëer en configureer project repo");
    F("...")---->H("<b>6</b><br/>Creëer basisstructuur in publicatie repo");
    G("<b>2</b><br/>Creëer en configureer project repo")---->D("<b>3</b><br/>Creëer nieuwe content of pas content aan");
    H("<b>6</b><br/>Creëer basisstructuur in publicatie repo")---->E("<b>7</b><br/>Pas basisstructuur aan voor versie");
    E("<b>7</b><br/>Pas basisstructuur aan voor versie")---->K("<b>8</b><br/>Plaats gegenereerde documenten in publicatie repo");
    K("<b>8</b><br/>Plaats gegenereerde documenten in publicatie repo")---->L("<b>9</b><br/>Gebruik publicatie link Respec doc in GH Pages");
    J("<b>5</b><br/>Pas document configuratie properties aan")---->K("<b>8</b><br/>Plaats gegenereerde documenten in publicatie repo");
    L("<b>9</b><br/>Gebruik publicatie link Respec doc in GH Pages")---->M([Stop]);
```

<figcaption>Het VNG-R Respec proces (Mermaid voorbeeld)</figcaption>
</figure>
