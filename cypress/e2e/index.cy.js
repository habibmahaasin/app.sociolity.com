describe("Index Pages", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should check index already loaded", () => {
    cy.contains("div", "Hello").should("be.visible");
  });
});
