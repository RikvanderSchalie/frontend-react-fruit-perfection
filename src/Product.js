/*
<article className="product">
    <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
         alt="Citroenen"

    />
    <h2 className="product-name">Citroen</h2>
    <p className="product-description">
        "Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
        Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
        Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
    </p>
</article>*/


function Product({naam, tekst, afbeelding})

{
    return(
        <article className="product">
            <h2 className="product-name">{naam}</h2>
            <p className="product-description">{tekst}</p>
            <img src={afbeelding}/>
        </article>

)
}

export default Product