///<reference types = "cypress"/>
let textoBusqueda = 'Globant'
let url = 'https://wikipedia.org'

it('Wikipedia Search',()=>{
    cy.visit(url)
    
    cy.get('#searchInput')
    cy.get('#searchInput').clear()
    cy.get('#searchInput').type(textoBusqueda)
    cy.get('.pure-button > .sprite').click()
    cy.get('.mw-page-title-main').should('contain.text', textoBusqueda)
    cy.get('#toc-Historia > .vector-toc-link > .vector-toc-text').click()
    
})

let urlPokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
let pokemonID = 21
let pokemonName = 'spearow'

it('Poke API',()=>{
    cy.request(urlPokeAPI+pokemonID).as('pokemon')
    cy.get('@pokemon').should((response) =>{
        expect(response.body).to.have.property('name', pokemonName)
    })
})
