# SwedishTanks

##### Åsa Jonsson & Sofia Junell 


#### Praktisk Del
Ni ska ta fram en produktidé som är en webblösning som innefattar ett API och ett frontend. 
Gör en beskrivning som innefattar följande delar. Ta hjälp av föreläsaren vid behov.  
Målet är senare att ta fram en Proof of Concept (PoC) som visar att produktidén är möjlig och går att använda.
För att Separera vad och hur, och för att generellt hålla ner den kognitiva lasten när ni utvecklar så ska produkten beskrivas innan utvecklingen börjar. Produktbeskrivningen ska beskriva Vad och usecasebeskrivningen beskriver Hur. Formatet på beskrivningen är inte det viktiga, utan att hela gruppen har en gemensam förståelse vad som ska utvecklas


#### Produktbeskrivning

##### Beskriv vad produkten gör, varför användaren går till siten, och vilken nytta den gör.

##### Vad ska användaren göra?

##### Tankviewer
- Ska kunna gå in på sidan och söka på tanks. 
- Kan söka på följande rubriker: 
- Fordonstyp, 
- Besättning, 
- Hästkrafter, 
- Hastighet. 

##### Admin 
- Logga in.
- Skriver in nya tankobjekt, fält. 
- Redigera befintliga objekt. 
- Ta bort befintliga objekt.

##### Objektet ska bestå av
- Bild på stridsvagnen
- Fordonstyp  
- Besättning 
- Hästkrafter 
- Hastighet
- Information om stridsvagnen


#### Usecasebeskrivning
Beskriv lite mer detaljerat kring vilka use case användaren ska kunna utföra på siten, baserat på produktbeskrvningen ovan. Beskriv i termer som att "visa", "skriva in", "redigera", "gilla". Tänk på vem som gör det om man har olika typer av användare.

#### Vem ska använda sidan? 
Personer som vill bidra med information och svensk historik inom ämnet Swedish Tanks. 
För varje tanks ska det visas en bild på just den tanken. 

##### ADMIN - Ska kunna skriva in information.

##### TANKVIEWER - Söka information. Fritext eller olika fält för rubrikerna? Fritext eller rullista? 
Skicka in förslag på information. 


#### Prioritera
Prioritera use case utifrån hur viktiga de är för att kunna realisera er produkt, viktiga delar vad användaren kan göra går före sådant som är trevligt men inte vitalt. Tänk kostnad och risk, vet vi hur vi ska lösa en feature, eller är det något vi behöver ta reda på. Ta hjälp av läraren för att dela upp features som innehåller mycket risk eller osäkerhet.
Produktbeskrivningen ska finnas i ett gitrepo i README. Usecase ska finnas i antingen README eller ärenhanteringssystem typ trello eller liknande.

#### TANKVIEWER
GET - en/flera tanks med id/tanks för hela listan.  
POST - skicka in förslag? 

#### ADMIN 
GET - en/flera tanks med id/tanks för hela listan.  
POST - lägga till ny/skapa ifrån förslaget. 
PUT - ändra. 
DELETE - radera. 

#### Implementera
När ni implementerar ska ni ta ett usecase i prioritetsordning och göra det helt färdigt, dvs. frontend, backend, modell, swagger och test (de moment som ingår i use caset) innan man går vidare till nästa use case.

# SwedishTanksApi
Swedish Tanks Api

#### 
    Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body

#### HTTP Methods: GET, Get a resource 
```sh 
curl -i -H "Content-Type:application/json" http://api.SwedishTanks.tanks/posts/3   
curl -H "Content-Type:application/json" http://api.SwedishTanks.tanks/posts/1 | jq


  Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body

```
#### HTTP Methods: Post, Create a resource
```sh

 curl -i -X POST -H "Content-Type:application/json" http://api.SwedishTanks.tanks/posts  -d '{"title":"Hi, World", "body":"Fresh as morning dew", "tankId": "1"}'

    Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body
```
#### HTTP Methods: Delete
```sh
curl -X DELETE http://api.SwedishTanks.tanks/posts/3 

    Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body
```
#### HTTP Methods: Put
```sh
curl -X PUT http://api.SwedishTanks.tanks/posts/3  -H "Content-Type:application/json" -d  '{
  "name": "Me Myself and I", ...}'

    Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body
```
#### HTTP Methods: Patch
```sh
curl -X PUT http://api.SwedishTanks.tanks/posts/3 -H "Content-Type:application/json" -d  '{
  "name": "Me Myself and I", ...}'

    Hypertext as in Hypertext Markup Language (HTML)
    Request response model:
        Request message
            Resources identified using a Universal Resource Identifier (URI)
            Request Method
            Headers, Body, query
        Response
            Response code
            Headers och Body
```
