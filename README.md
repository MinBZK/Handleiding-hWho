## ReSpec template instructies

ReSpec is een tool om html en pdf documenten te genereren op basis van markdown en html content.<br/>Test.

Organisatie administrators dienen de knop [_Use this template_](https://github.com/vng-realisatie/VNG-R-Respec-Template/generate) te gebruiken om een kopie van de template repository aan te maken. Deze kan daarna door jouzelf aangepast en uitgebreid worden.

De dynamische pagina van het template document is [hier](https://vng-realisatie.github.io/VNG-R-Respec-Template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren. Deze workflows worden 
automatisch gerund zodra er een aanpassing gedaan wordt aan de main branch. <!-- Deze heb ik deels nog niet werkende. --> Een beschrijving van deze acties vind je onderaan dit hoofdstuk.

### Vereiste voor gebruik
- Kennis van git/GitHub
- Kennis van Markdown en/of HTML
- Een webserver om de documentatie te hosten

Voor de laatste gebruiken wij GitHub. Kennis van de vorm van een Javascript object is handig om de in dit template voorkomende scripts aan te kunnen passen maar zonder die kennis kom je m.b.v. deze documentatie ook al heel ver.

### Gebruikersinstructie
Om het gebruik van dit template makkelijker te maken raden we het aan om een IDE te gebruiken. Die geeft een voorbeeld van hoe de markdown eruit zal zien, kan laten zien of de config files nog in de correcte vorm zijn en kan helpen in het gebruik van git.  
Een gratis voorbeeld van een IDE is: [Visual studio code](https://code.visualstudio.com/). Een combinatie van GitHub desktop en je eigen favoriete Markdown editor is echter ook mogelijk.

Aanpassingen maken aan het document gaat op 2 manieren:
- De configuratie van het document aanpassing in de config files
- Markdown of html files toevoegen/veranderen

De **configuratie files** bevatten informatie over de organisatie en over 
de status van het document. Helemaal onderaan hoofdstuk 3 vind je meer informatie over de configuratie opties, daarnaast kun je ook de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) 
bezoeken. De files zijn gesplitst in 2 files die weer in 2 verschillende repositories zijn ondergebracht:
[organisation-config.js](https://github.com/vng-realisatie/Respec-Organization-configurations/blob/main/js/organisation-config.js) en [config.js](js/config.js).

De organisation_config (organisation-config.js) bevat configuratie properties die betrekking hebben op alle VNG-R Respec documentatie, de properties in deze file 
zullen zelden veranderen zoals bijv. de naam van de organisatie. 

De document_config (config.js) bevat configuratie properties die alleen relevant is voor het betreffende Respec document en hoort dan ook in elke Respec renderende repository thuis.

Beide configuratie bestanden worden gelinkt in de `index.html` file waardoor ze beide bij het renderen van de Respec documentatie automatisch worden samengevoegd. Daardoor zijn de organisatie specifieke configuraties over alle Respec documentatie van VNG-R gelijk en
hoeft deze niet steeds gekopieerd te worden. Op deze wijze zorgen we er voor dat alle VNG-R Respec documenten zo eenduidig mogelijk zijn en blijven. 

In [het volgende hoofdstuk](https://vng-realisatie.github.io/VNG-R-Respec-Template/#wow) staat beschreven hoe je de inhoud van het Respec document naar wens kunt aanpassen.

### Rendering, automatische controles en publicatie
Het bestand '.github/workflows/build.yml' bevat een action script waarmee automatisch een drietal acties worden uitgevoerd nadat een bestand in de repository wordt gewijzigd, toegevoegd of verwijderd:
* het renderen van het Respec document;
* het checken of de gerenderde Respec html wel correct is en voldoet aan de toegankelijkheidseisen;
* het publiceren van de gegenereerde statische html en pdf naar een centrale Respec publicatie repository.

We beschrijven de eerste 2 acties in het kort hieronder. Aangezien we de laatste actie nog niet werkende hebben wordt deze voorlopig nog handmatig uitgevoerd, dat beschrijven we in hoofdstuk 4. 
De log van deze acties is te vinden in het tabblad `Actions` in de GitHub repository.

#### Rendering
Deze actie start het renderen van de Respec html. Vervolgens wordt er op basis daarvan een statische html en een pdf bestand gegenereerd. Die gebruiken we uiteindelijk om te publiceren.

De PDF-versie wordt aangemaakt omdat de property `alternateFormats` in de organisation_config als volgt geconfigureerd staat:
```js
alternateFormats: [
  {
	  label: "pdf",
	  uri: "snapshot.pdf",
  },
]
```
Er moet nog worden bepaald of we de document eigenaar zelf willen laten bepalen of hij/zij een pdf wil genereren. Indien we dat willen verhuisd deze property naar de document_config. De waarde van de property `uri` kan dan naar wens worden aangepast.

#### Checken
Na het renderen van de Respec html en pdf worden er via github actions 2 controles uitgevoerd op de html:  

* een WCAG-check (Web Content Accessibility Guidelines), deze guidelines gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid van webapplicaties verbeterd voor zowel verschillende apparaten  als voor mensen met een beperking. Ook wordt de validiteit van het HTML bestand gecheckt, bijv.:
  - of er geen `<section>` elementen met 'id' attributen voorkomen die al voorkomen in het bestand;
  - of er geen `<a>` elementen voorkomen met 'href' attributen die verwijzen naar `<section>` elementen die helemaal niet bestaan.

  Deze check moet eerst succesvol uitgevoerd zijn voordat wordt begonnen aan de volgende check. In de 'Action' die start met het woord 'Update' (zie het `Actions` tabblad) kun je in de actie 'Check/WCAG' de step 'Run pa11y snapshot.html' vinden. Daar kun je zien welke fouten geconstateerd zijn.
* een link-check, deze check controleert of alle links die in het document staan ook bestaan. Het gaat dan bijv. om de links die worden vermeldt in:
  - 'Deze versie'
  - 'Laatst gepubliceerde versie'
  - 'Laatste werkversie'
  - 'Vorige versie'
 
  Deze links verwijzen naar specifieke locaties in de GitHub Pages interface van de 'publicatie' GitHub repository (zie de volgende subparagraaf voor meer uitleg). Om deze check goed te kunnen doorstaan moeten deze locaties dus al bestaan in die interface. Indien dat nog niet gedaan is moet daar de folder voor het nieuwe versienummer van de Respec documentatie al worden aangemaakt. Plaats in die folder dan ook een tijdelijk 'index.html' bestand. De inhoud van dat bestand is (nog) niet van belang.

> **LET OP!**<br/>
> Onderstaand tekst is slechts een voorstel.
> De definitieve url kan indien gewenst nog andere onderdelen bevatten zoals bijv. `publishDate`, `previousPublishDate`, `specStatus` en `previousMaturity`.

Bij het genereren van de links zijn op dit moment de volgende configuration properties van belang:
* nl_organisationPublishURL<br/>
  De basis url van de GitHub Pages interface van de 'publicatie' GitHub repository, op dit moment: `https://vng-realisatie.github.io/publicatie`. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* pubDomain<br/>
  Het publicatie domein. Aangezien we vooralsnog slechts voor Conceptuele Modellen Respec documentatie genereren heeft deze de waarde `cim` en staat deze gedefinieerd in de organisation_config. Zo nodig kan deze overruled worden in de document_config. Vergeet in dat geval niet om ook de structuur in de 'publicatie' GitHub repository uit te breiden.  Wordt gebruikt in 'latestVersion', 'thisVersion' en 'prevVersion'.
* specStatus
* latestVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele vaste karakters. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* thisVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele vaste karakters. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* prevVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele vaste karakters. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* shortName<br/>
  De project-mnemonic, een afkorting van het project. Zo wordt het project 'Open Raadsinformatie' wordt bijv. afgekort als 'ori'. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document. Wordt gebruikt in 'latestVersion', 'thisVersion' en 'prevVersion'.
* publishVersion<br/>
  De versie van het te publiceren Respec document. Komt overeen met de Tagged Value 'Version' in het Enterprise Architect bestand van het model en heeft een waarde dat voldoet aan het formaat `x.x.x`, bijv. `2.0.0`. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document. Wordt gebruikt in de titel van het Respec document maar ook in 'thisVersion'.
* previousVersion<br/>
  De voorgaande versie van het te publiceren Respec document. Komt overeen met de Tagged Value 'Version' in het Enterprise Architect bestand van het voorgaande versie van het model en heeft een waarde dat voldoet aan het formaat `x.x.x`, bijv. `2.0.0`. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document. Wordt gebruikt in 'prevVersion'.

Het consistent en nauwgezet invullen van de configuratie properties in de document_config is essentieel voor een goede werking van de links.

De bovenstaande properties hebben invloed op de wijze waarop het eerste deel van de Respec documentatie wordt gegenereerd. Hieronder sommen we de regels op. Indien wordt besloten de properties 'latestVersion', 'thisVersion' en 'prevVersion' een andere inhoud te geven dan zullen onderstaande regels herzien moeten worden.

* Als de parameter 'specStatus' de waarde 'WV' heeft dan wordt de waarde van de parameter 'thisVersion' niet gebruikt voor het bepalen van 'Deze versie' maar wordt daar dezelfde waarde neergezet als bij 'Laatste werkversie'.
* Als de parameter 'specStatus' de waarde 'WV' heeft dan wordt de waarde van 'Subtitel 2' niet gebaseerd op de parameter 'publishDate' maar op de datum waarop de Respec documentatie door GitHub wordt gegenereerd.
* Als de parameter 'specStatus' de waarde 'WV' heeft dan wordt het versienummer niet in de titel van het document opgenomen.
* Als de parameter 'previousPublishVersion' niet bestaat dan kan 'prevVersion' niet bepaald worden en wordt 'Vorige versie' niet gegenereerd.
* Als de parameter 'publishVersion' niet bestaat dan kan 'thisVersion' niet bepaald worden en wordt 'Deze versie' niet gegenereerd.
