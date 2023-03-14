# Facebook Messenger Bot

## Inhaltsverzeichnis
* [Kurzbeschreibung](#Kurzbeschreibung)
* [Förderhinweis](#Förderhinweis)
* [Installation](#Installation)
* [Disclaimer](#Disclaimer)
* [Credits](#Credits)
* [Lizenz](#Lizenz)

### Kurzbeschreibung
Der Messenger Bot für den Facebook Messenger bedient aus den verschiedenen Systemen der Staatlichen Museen zu Berlin Service-Anfragen.

Bereits im Vorfeld eines Museumsbesuchs stellen sich den Besucher\*innen diverse Fragen, etwa zu Öffnungszeiten oder aktuellen Ausstellungen. Wie können diese Informationen neben den bestehenden Quellen (Website, Kasse, etc.) verfügbar gemacht werden? Messenger Bots bieten ein zeitgemäßes Mittel, mit einer Vielzahl von Besucher\*innen in Kontakt zu treten und deren Fragen präzise zu beantworten. Die erste Version eines Bots für die SMB gestalteten wir zur Beantwortung einfacher Service-Anfragen.

### Entstehungskontext
Das Starterkit für Progressive-Web-Apps _dispay_ ist entstanden im Verbundprojekt [museum4punkt0 – Digitale Strategien für das Museum der Zukunft](https://www.museum4punkt0.de) im Teilprojekt [Visitor Journeys neu gedacht – digitale Erweiterung des Museumsbesuchs](https://www.museum4punkt0.de/teilprojekt/visitor-journeys-neu-gedacht-digitale-erweiterung-des-museumsbesuchs/) der Staatlichen Museen zu Berlin – Preußischer Kulturbesitz.

### Förderung
Das Projekt museum4punkt0 wird gefördert durch die Beauftragte der Bundesregierung für Kultur und Medien aufgrund eines Beschlusses des Deutschen Bundestages.

![BKM-Logo](https://github.com/museum4punkt0/Object-by-Object/blob/77bba25aa5a7f9948d4fd6f0b59f5bfb56ae89e2/04%20Logos/BKM_Fz_2017_Web_de.gif)
![NeustartKultur](https://github.com/museum4punkt0/Object-by-Object/blob/22f4e86d4d213c87afdba45454bf62f4253cada1/04%20Logos/BKM_Neustart_Kultur_Wortmarke_pos_RGB_RZ_web.jpg)


### Installation
Die Dokumentation von Meta bietet einen guten und übersichtlichen  Einstieg in die Installation von Apps wie den Messenger Bot in die Plattform von facebook.

[Schnellstart-Tutorial von Facebook](https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start)

Aus diesem Repository startet ```server.js``` den Messenger Bot im Messenger und bietet den Endpunkt für User-Anfragen. 

Vgl. hierzu [app.js](https://glitch.com/embed/#!/messenger-platform-quick-start?path=app.js%3A1%3A0) aus dem offiziellen Quick Start Repo auf der Plattform Glitch

Zur einfachen Habhabung von Antworten, Menüs und Caroussels finden sich Vorlagen in ```/helpers/```

### Disclaimer
Seit 2019 wird der Code des Repositorys nicht weiter entwickelt. Weitere Entwicklungen der Facebook Plattform können die Lauffähigkeit beeinträchtigen.
Bitte beachten Sie die jeweils geltenden Datenschutzbestimmungen.

### Credits
Auftraggeber/Rechteinhaber: Staatliche Museen zu Berlin - Preußischer Kulturbesitz
Entwicklung: Timo Schuhmacher

Kontaktinformation:
museum4punkt0 / Staatliche Museen zu Berlin – Preußischer Kulturbesitz:  
Timo Schuhmacher t.schuhmacher@smb.spk-berlin.de

### Lizenzen
```server.js``` sowie die Stukturen den Antworten und Funktionen verwendet Elemente aus [fbsamples/messenger-plattform-samples](https://github.com/fbsamples/messenger-platform-samples/tree/main/quick-start)

diese unterliegen der [Lizensierung von Facebook](https://github.com/fbsamples/messenger-platform-samples/blob/main/LICENSE)

Alle weiteren Code-Elemente und Inhalte des Messengers sind unter MIT-Lizenz veröffentlicht.