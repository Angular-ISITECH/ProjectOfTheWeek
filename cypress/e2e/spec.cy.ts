import {beforeEach} from "mocha";

describe('Guards Verification', () => {
  it('should redirect to /login when visiting /dashboard', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });

  it('should redirect to /login when visiting /races', () => {
    cy.visit('/races');
    cy.url().should('include', '/login');
  });
});

describe('Page /', () => {
  it('should display "PonyRacer"', () => {
    cy.visit('/');
    cy.contains('PonyRacer');
  });

  it('should have a "Se connecter" button', () => {
    cy.visit('/');
    cy.contains('Se connecter');
  });

  it('should navigate to /login when clicking "Se connecter" button', () => {
    cy.visit('/');
    cy.contains('Se connecter').click();
    cy.url().should('include', '/login');
  });
});

describe('Page /login', () => {
  it('should have "Nom d\'utilisateur" and "Mot-de-passe" fields', () => {
    cy.visit('/login');
    cy.get('input[formControlName="username"]').should('exist');
    cy.get('input[formControlName="password"]').should('exist');
  });

  it('should have a "Se connecter" button', () => {
    cy.visit('/login');
    cy.contains('Se connecter').should('exist');
  });

  it('should log in', () => {
    cy.visit('/login');
    cy.get('input[formControlName="username"]').clear().type('pony.racer@test.com');
    cy.get('input[formControlName="password"]').clear().type('123456');
    cy.get('button[type="submit"]').contains('Se connecter').click();
    cy.url().should('include', '/dashboard');
  });
});

describe('Page /dashboard', () => {
  const login = () => {
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicG9ueS5yYWNlckB0ZXN0LmNvbSIsInBhc3N3b3JkIjoxMjM0NTZ9.8p5j6ZJ0DlXkPpRcNmX1NQ65iQnwBoLphIQw9uwBQ88');
    });
  }

  it('should contain PonyRacer in the navbar', () => {
    login();
    cy.visit('/dashboard');
    cy.contains('PonyRacer');
  });

  it('should navigate to /races when clicking on "Courses" in the navbar', () => {
    login();
    cy.visit('/dashboard');
    cy.contains('Courses').click();
    cy.url().should('include', '/races');
  });

  it('should navigate to /dashboard when clicking on "Dashboard" in the navbar', () => {
    login();
    cy.visit('/races');
    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
  });

  describe('Course List', () => {
    it('should navigate to /races', () => {
      login();
      cy.visit('/races');
      cy.contains('Courses').click();
      cy.url().should('include', '/races');
    });

    it('should contain "Grand Prix De Lyon"', () => {
      login();
      cy.visit('/races');
      cy.contains('Grand Prix De Lyon');
    });

    it('should open and close course details', () => {
      login();
      cy.visit('/races');
      cy.contains('Grand Prix De Lyon').click();
      cy.contains('Supprimer').should('exist');
      cy.get('#close').should('exist').click();
      cy.contains('Créer une course').should('exist');
    });

    it('should delete a course', () => {
      login();
      cy.visit('/races');
      cy.contains('Grand Prix De Lyon').click();
      cy.contains('Supprimer').click();
      cy.contains('Grand Prix De Lyon').should('not.exist');
    });

    describe('Inscription d\'une course', () => {
      it('should add a new course', () => {
        login();
        cy.visit('/races');
        cy.get('input[formControlName="name"]').type('Grand Prix Test Cypress');
        cy.get('input[formControlName="date"]').type('17/09/1999');
        cy.get('input[formControlName="attendees"]').type('Gentle Cherry,Harry Potter');
        cy.contains('Ajouter').click();
        cy.get('input[formControlName="name"]').should('be.empty');
        cy.get('input[formControlName="date"]').should('be.empty');
        cy.get('input[formControlName="attendees"]').should('be.empty');
        cy.contains('Grand Prix Test Cypress').should('exist');
      });

      describe('Modification d\'une course', () => {
        it('should edit a course', () => {
          login();
          cy.visit('/races');
          cy.contains('Grand Prix De Paris').click();
          cy.get('input[formControlName="name"]').should('have.value', 'Grand Prix De Paris');
          cy.get('input[formControlName="date"]').should('have.value', '29/08/2023');
          cy.contains('Gentle Pie').should('exist');
          cy.contains('Big Soda').should('exist');
          cy.contains('Gentle Bottle').should('exist');
          cy.contains('Modifier').click();
          cy.get('input[formControlName="name"]').clear().type('Grand Prix Test Cypress 2');
          cy.get('input[formControlName="date"]').clear().type('17/09/1999');
          cy.contains('Modifier').click();
          cy.contains('Grand Prix Test Cypress 2').should('exist');
          cy.contains('17 Septembre 1999').should('exist');
        });
      });
    });
  });

  describe('Déconnexion', () => {
    it('should log out and redirect to /login', () => {
      login();
      cy.visit('/races');
      cy.contains('Déconnexion').click();
      cy.url().should('include', '/login');
    });
  });
});


