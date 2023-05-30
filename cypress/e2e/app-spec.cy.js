describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "rez.json"
    })
    cy.visit("http://localhost:3000/")
  })

  it("Should display a title", () => {
    cy.get(".app-title").should("contain", "Turing Cafe Reservations")
  })
  it("Should display 3 cards by default", () => {
    cy.get(".card").should("have.length", 3)
  })
  it("SHould be able to add a new card", () => {
    cy.get('input[name="name"]').type("Tha Moops")
    cy.get('input[name="date"]').type("08/23")
    cy.get('input[name="time"]').type("6:16")
    cy.get('input[name="guests"]').type("19")
    cy.get("button").click()
    cy.get(".card").should("have.length", 4)
  })
  it("should have the input reflect what the user types in", () => {
    cy.get('input[name="name"]').type("Darth Maul")
    cy.get('input[name="date"]').type("4/20")
    cy.get('input[name="time"]').type("4:22")
    cy.get('input[name="guests"]').type("2")
    cy.get('input[name="name"]').should("have.value", "Darth Maul")
    cy.get('input[name="date"]').should("have.value", "4/20")
    cy.get('input[name="time"]').should("have.value", "4:22")
    cy.get('input[name="guests"]').should("have.value", "2")
  })
})