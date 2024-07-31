# Stappenplan

## Stappenplan "<b>[UNDER CONSTRUCTION]</b>"

<figure>
    
```mermaid
%%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
graph TD
    A([Start])---->B("<b>1.</b><br/>Is er sprake van hergebruik in de zin van de Who?<br/>Zie paragraaf 3.1.")
    B("<b>1.</b>Is er sprake van hergebruik in de zin van de Who?<br/>Zie paragraaf 3.1.")--Nee-->L("<b>Wijs het verzoek af</b>")
    B("<b>1.</b>Is er sprake van hergebruik in de zin van de Who?<br/>Zie paragraaf 3.1.")--Ja-->C("<b>2.</b>Is het verzoek gericht<br/> tot een met een publieke taak belaste instelling?<br/>Zie paragraaf 4.1.")
   C("<b>2.</b>Is het verzoek gericht<br/> tot een met een publieke taak belaste instelling?<br/>Zie paragraaf 4.1.")--Nee-->R("<b>Wijs het verzoek af</b>")
   C("<b>2.</b>Is het verzoek gericht<br/> tot een met een publieke taak belaste instelling?<br/>Zie paragraaf 4.1.")
--Ja-->D("<b>3.</b>Is het verzoek afkomstig van een andere<br/> met een publieke taak belaste instelling?<br/>De uitwisseling van informatie<br/> tussen met een publieke taak<br/> belaste instellingen onderling<br/>is geen hergebruik van overheidsinformatie<br/> in de zin van de Who.")
     D("<b>3.</b>Is het verzoek afkomstig van een andere<br/> met een publieke taak belaste instelling?<br/>De uitwisseling van informatie<br/> tussen met een publieke taak<br/> belaste instellingen onderling<br/>is geen hergebruik van overheidsinformatie<br/> in de zin van de Who.")--Ja-->S("<b>Wijs het verzoek af</b>")
     D("<b>3.</b>Is het verzoek afkomstig van een andere<br/> met een publieke taak belaste instelling?<br/>De uitwisseling van informatie<br/> tussen met een publieke taak<br/> belaste instellingen onderling<br/>is geen hergebruik van overheidsinformatie<br/> in de zin van de Who.")--Nee--> E("<b>4.</b>"Berust de gevraagde informatie <br/>bij de met een publieke taak belaste instelling<br/> waartoe het verzoek is gericht?<br/>Indien mogelijk verwijst u<br/> door naar de instelling waar <br/>de informatie wel berust.)
    E("<b>4.</b>"Berust de gevraagde informatie <br/>bij de met een publieke taak belaste instelling<br/> waartoe het verzoek is gericht?<br/>Indien mogelijk verwijst u<br/> door naar de instelling waar <br/>de informatie wel berust.)--Nee-->T("<b>Wijs het verzoek af</b>")
     E("<b>4.</b>"Berust de gevraagde informatie <br/>bij de met een publieke taak belaste instelling<br/> waartoe het verzoek is gericht?<br/>Indien mogelijk verwijst u<br/> door naar de instelling waar <br/>de informatie wel berust.)--Ja-->
    F("<b>5.</b>Is de informatie vergaard <br/>in het kader van een publieke taak?<br/>Het gaat om openbare informatie <br/>verkregen in het kader van de publieke taak <br/>van een met een publieke taak<br/> belaste instelling; <br/>direct of als bijproduct. <br/>Het gaat niet om informatie die <br/>voor interne bedrijfsvoering <br/>wordt gebruikt.")
    F("<b>5.</b>Is de informatie vergaard <br/>in het kader van een publieke taak?<br/>Het gaat om openbare informatie <br/>verkregen in het kader van de publieke taak <br/>van een met een publieke taak<br/> belaste instelling; <br/>direct of als bijproduct. <br/>Het gaat niet om informatie die <br/>voor interne bedrijfsvoering <br/>wordt gebruikt.")--Nee-->U("<b>Wijs het verzoek af</b>")
     F("<b>5.</b>Is de informatie vergaard <br/>in het kader van een publieke taak?<br/>Het gaat om openbare informatie <br/>verkregen in het kader van de publieke taak <br/>van een met een publieke taak<br/> belaste instelling; <br/>direct of als bijproduct. <br/>Het gaat niet om informatie die <br/>voor interne bedrijfsvoering <br/>wordt gebruikt.")--Ja-->
    G("<b>6.</b>Valt de verzochte informatie<br/> onder het toepassingsbereik van de Who?<br/>Uitgezonderde categorieën informatie zijn:<br/>a. Informatie die berust bij een publieke omroep, met een publieke omroeptaak<br/> belaste instelling of een instelling werkzaam<br/>onder de verantwoordelijkheid van een van deze instellingen;<br/>b. Informatie die berust bij een onderwijs- of onderzoeksinstelling;<br/>c. Informatie die berust bij andere culturele instellingen<br/> dan musea, bibliotheken (inclusief universiteitsbibliotheken)<br/> en archieven;<br/>d. Informatie die slechts logo’s of wapens<br/> en insignes of bevat.")
    G("<b>6.</b>Valt de verzochte informatie<br/> onder het toepassingsbereik van de Who?<br/>Uitgezonderde categorieën informatie zijn:<br/>a. Informatie die berust bij een publieke omroep, met een publieke omroeptaak<br/> belaste instelling of een instelling werkzaam<br/>onder de verantwoordelijkheid van een van deze instellingen;<br/>b. Informatie die berust bij een onderwijs- of onderzoeksinstelling;<br/>c. Informatie die berust bij andere culturele instellingen<br/> dan musea, bibliotheken (inclusief universiteitsbibliotheken)<br/> en archieven;<br/>d. Informatie die slechts logo’s of wapens<br/> en insignes of bevat.")--Nee-->V("<b>Wijs het verzoek af</b>")
    G("<b>6.</b>Valt de verzochte informatie<br/> onder het toepassingsbereik van de Who?<br/>Uitgezonderde categorieën informatie zijn:<br/>a. Informatie die berust bij een publieke omroep, met een publieke omroeptaak<br/> belaste instelling of een instelling werkzaam<br/>onder de verantwoordelijkheid van een van deze instellingen;<br/>b. Informatie die berust bij een onderwijs- of onderzoeksinstelling;<br/>c. Informatie die berust bij andere culturele instellingen<br/> dan musea, bibliotheken (inclusief universiteitsbibliotheken)<br/> en archieven;<br/>d. Informatie die slechts logo’s of wapens<br/> en insignes of bevat.")--Ja-->
    H("<b>7.</b>Is de informatie reeds rechtmatig openbaar<br/>of kan het rechtmatig openbaar worden gemaakt?")
    H("<b>7.</b>Is de informatie reeds rechtmatig openbaar<br/>of kan het rechtmatig openbaar worden gemaakt?")--Nee-->W("<b>Wijs het verzoek af</b>")
    H("<b>7.</b>Is de informatie reeds rechtmatig openbaar<br/>of kan het rechtmatig openbaar worden gemaakt?")--Ja-->
    I("<b>8.</b>Rusten er uitoefenbare rechten in de zin van <br/>de Auteurswet, <br/>de Wet op de naburige rechten <br/>of de Databankenwet op de informatie?")
    I("<b>8.</b>Rusten er uitoefenbare rechten in de zin van <br/>de Auteurswet, <br/>de Wet op de naburige rechten <br/>of de Databankenwet op de informatie?")--Ja-->
    J("<b>9.</b>Is de met een publieke taak belaste instelling<br/> waar het Who verzoek zich op richt<br/> de rechthebbende?")
    J("<b>9.</b>Is de met een publieke taak belaste instelling<br/> waar het Who verzoek zich op richt<br/> de rechthebbende?")--Nee-->X("<b>Wijs het verzoek af</b>")
    J("<b>9.</b>Is de met een publieke taak belaste instelling<br/> waar het Who verzoek zich op richt<br/> de rechthebbende?")--Ja-->
    K("<b>10.</b>Kan de informatie openbaar worden <br/>gemaakt zonder (IE-) voorbehoud?")
    K("<b>10.</b>Kan de informatie openbaar worden <br/>gemaakt zonder (IE-) voorbehoud?")--Nee-->Y("<b>Wijs het verzoek af</b>")
    K("<b>10.</b>Kan de informatie openbaar worden <br/>gemaakt zonder (IE-) voorbehoud?")--Ja-->
    M("<b>11.</b>Heeft de rechthebbende <br/>toestemming gegeven voor hergebruik?<br/>U deelt aan de verzoeker de identiteit <br/>van de rechthebbende of licentiehouder mee")
    M("<b>11.</b>Heeft de rechthebbende <br/>toestemming gegeven voor hergebruik?<br/>U deelt aan de verzoeker de identiteit <br/>van de rechthebbende of licentiehouder mee")--Nee-->Z("<b>Wijs het verzoek af</b>")
    M("<b>11.</b>Heeft de rechthebbende <br/>toestemming gegeven voor hergebruik?<br/>U deelt aan de verzoeker de identiteit <br/>van de rechthebbende of licentiehouder mee")--Ja-->
    N("<b>12.</b>Maken persoonsgegevens onderdeel uit van de informatie?")
    I("<b>8. </b>Rusten er uitoefenbare rechten in de zin van <br/>de Auteurswet, <br/>de Wet op de naburige rechten <br/>of de Databankenwet op de informatie?")--Nee-->
    N("<b>12.</b>Maken persoonsgegevens onderdeel uit van de informatie?")--Ja-->
    O("<b>13.</b>Betreft het openbare persoonsgegevens <br/>in (overheids-) informatie bij of krachtens <br/>de wet ingestelde registers <br/>die openbaar toegankelijk zijn?<br/>De Who is niet van toepassing <br/>op deze persoonsgegevens, tenzij bij AMvB <br/>of bij of krachtens de wet <br/>anders is bepaald.")
    O("<b>13.</b>Betreft het openbare persoonsgegevens <br/>in (overheids-) informatie bij of krachtens <br/>de wet ingestelde registers <br/>die openbaar toegankelijk zijn?<br/>De Who is niet van toepassing <br/>op deze persoonsgegevens, tenzij bij AMvB <br/>of bij of krachtens de wet <br/>anders is bepaald.")--Ja-->AA("<b>Wijs het verzoek af</b>")
    O("<b>13.</b>Betreft het openbare persoonsgegevens <br/>in (overheids-) informatie bij of krachtens <br/>de wet ingestelde registers <br/>die openbaar toegankelijk zijn?<br/>De Who is niet van toepassing <br/>op deze persoonsgegevens, tenzij bij AMvB <br/>of bij of krachtens de wet <br/>anders is bepaald.")--Nee-->
    P("<b>14.</b>Is het hergebruik van openbare persoonsgegevens <br/>verenigbaar met oorspronkelijk doel waarvoor <br/>de (overheids-) organisatie de persoonsgegevens <br/>verzameld en/of openbaar gemaakt heeft?")
    P("<b>14.</b>Is het hergebruik van openbare persoonsgegevens <br/>verenigbaar met oorspronkelijk doel waarvoor <br/>de (overheids-) organisatie de persoonsgegevens <br/>verzameld en/of openbaar gemaakt heeft?")--Nee-->AB("<b>Wijs het verzoek af</b>")
    P("<b>14.</b>Is het hergebruik van openbare persoonsgegevens <br/>verenigbaar met oorspronkelijk doel waarvoor <br/>de (overheids-) organisatie de persoonsgegevens <br/>verzameld en/of openbaar gemaakt heeft?")--Ja-->AC("<b>Wijs het verzoek toe</b>")


```

<figcaption>Het Stappenplan <UNDER CONSTRUCTION> </figcaption>
</figure><br/><br/>
