///<reference types = "cypress"/>
//-------------------------------------------------------------------------------
let textoBusqueda = 'Globant'
let url = 'https://wikipedia.org'

//Prueba de ejemplo
//Visitar Wikipedia y buscar el textoBusqueda
//para luego confirmar que se llego a la pagina deseada
it('Wikipedia Search',()=>{
    cy.visit(url)
    
    cy.get('#searchInput')
    cy.get('#searchInput').clear()
    cy.get('#searchInput').type(textoBusqueda)
    cy.get('.pure-button > .sprite').click()
    cy.get('.mw-page-title-main').should('contain.text', textoBusqueda)
    cy.get('#toc-Historia > .vector-toc-link > .vector-toc-text').click()
    
})
//---------------------------------------------------------------------------------
//Consumo de API
//----------------------------------------------------------------------------------
let urlPokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
let pokemonID = 21
let pokemonName = 'spearow'
//Test de ejemplo para consumir la PokeAPI
it('Poke API',()=>{
    cy.request(urlPokeAPI+pokemonID).as('pokemon')
    cy.get('@pokemon').should((response) =>{
        expect(response.body).to.have.property('name', pokemonName)
    })
})
