import React from 'react';
import './App.css';
import Product from "./Product";
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
//images
import citroen from './assets/citroenen.jpeg'
import limoen from './assets/limoenen.png'
import ijsblok from './assets/ijsblokjes.jpg'

function App() {
  return (

      <>
          <header>

              <nav>
                  <ul>
                      <li>
                          <a href="/">shop</a>
                      </li>
                      <li>
                          <a href="/">ons verhaal</a>
                      </li>
                      <li>
                          <a href="/">blog</a>
                      </li>
                  </ul>
                  <ShoppingCart className="shopping-cart-icon" />
              </nav>



              <h1>Fruit perfection </h1>
              <button
                type="button"
                onClick={() => console.log ("BUY BUY BUY") }
              >
                  Shop nu !
              </button>

          </header>
    <main>

        <Product
            afbeelding={citroen}
            naam="Citroen"
            tekst="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
               Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
               Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
            />

        <Product
            afbeelding={limoen}
            naam="Limoen"
            tekst="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie).
                 Limoenen zijn rond en kleiner dan citroenen.
                 De schil is dun, vrij glad en groen."
        />

        <Product
            afbeelding={ijsblok}
            naam="Ijsblokjes"
            tekst="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
                 Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
        />


{/*        <article className="product">
            <img src="https://www.ahealthylife.nl/wp-content/uploads/2017/06/limoen_voedingswaarde-768x499.jpg"
                 alt="Limoen"

            />
            <h2 className="product-name">Limoen</h2>
            <p className="product-description">
                "Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie).
                 Limoenen zijn rond en kleiner dan citroenen.
                 De schil is dun, vrij glad en groen."
            </p>
        </article>

        <article className="product">
            <img src="https://verbakelparty.nl/wp-content/uploads/2017/08/download-46.jpg"
                 alt="Ijsblokje"

            />
            <h2 className="product-name">Ijsblokjes</h2>
            <p className="product-description">
                "Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
                 Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
            </p>
        </article>*/}
        </main>


          </>
  );
}

export default App;
