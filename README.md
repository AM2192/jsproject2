* Websovellusten kehittäminen JavaScriptillä projekti 2a

Tämä sovellus on jatkoa kurssille, jossa loin jsproject 1. Tällä sovelluksella käyttäjä voi hakea sen hetkisen päivän elokuvateattereissa pyörivät elokuvat ja niiden näytösajat. Pudotusvalikon alta löytyy nyt muutama elokuvateatteri eri puolelta Suomea. Valitsemalla teatterin sovellus lähettää pyynnön finnkinon tuottamaan rajapintaan. Palautuksena sovellus saa tiedot kyseisen päivän tiedot xml tiedostona. Sovelluksen funktio muuntaa datan luettavaan muotoon ja tuo sen taulukkoon nähtäville. Olen valinnut näytettäviksi tiedoiksi näytösajat, elokuvan nimen, genret ja elokuvan posterin. 

* Sovelluksen tausta on otettu vapaasti käytettävästä lähteestä. https://pixabay.com/photos/movie-theater-room-movie-2502213/

* Pudotusvalikon mallia olen ottanut W3 schoolin sivulta: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_database. Toiminta on toteutettu eri tavalla siten, että olen luonut valikon tiedoista arvon javascriptin puolella. Jokaisen valinnan kohdalla on määritelty html puolelle teatterin koodi, jota javascript käyttää hakiessaan tietoa rajapinnasta. 

* Aikataulut näyttävä taulukolle on luotu oma paikka html puolelle ja toiminnallisuus on tehty javascriptillä. Muotoilun olen tehnyt css:llä. Taulukon tiedot haetaan rajapinnasta haetusta dokumentista ja näytetyt tiedot on tarkennettu hakemalla tag nimellä. For looppi käy dokumenttia läpi niin kauan, että on saanut sen käytyä loppuun. Javascriptin mallia olen ottanut w3 schoolin sivustolta: https://www.w3schools.com/xml/tryit.asp?filename=tryxml_app. 