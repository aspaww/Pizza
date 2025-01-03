describe('Ad ve Soyad Girişi', () => {
  it('Kullanıcı adı ve soyadı doğru şekilde girmeli', () => {
    cy.visit('/'); // Ana sayfayı ziyaret et
    cy.get('input[placeholder="Adınızı ve Soyadınızı Girin"]')
      .type('Şükrü Can Keleş')
      .should('have.value', 'Şükrü Can Keleş');
  });
});

describe('Birden Fazla Malzeme Seçimi', () => {
  it('Kullanıcı birden fazla malzeme seçebilir', () => {
    cy.visit('/');

    cy.get('input[type="checkbox"][value="Sucuk"]')
      .check()
      .should('be.checked');
    
    cy.get('input[type="checkbox"][value="Peynir"]')
      .check()
      .should('be.checked');

    cy.get('input[type="checkbox"][value="Sucuk"]')
      .uncheck()
      .should('not.be.checked');
  });
});

describe('Form Gönderme', () => {
  it('Form sunucuya doğru verilerle gönderilir', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { success: true },
    }).as('submitOrder');

    cy.visit('/');

    // Ad ve soyad gir
    cy.get('input[placeholder="Adınızı ve Soyadınızı Girin"]').type('Şükrü Can Keleş');

    // Malzeme seç
    cy.get('input[type="checkbox"][value="Sucuk"]').check();
    
    // Form gönder
    cy.contains('Sipariş Ver').click();

    // İstek verilerini doğrula
    cy.wait('@submitOrder').its('request.body').should('deep.equal', {
      boyut: 'Orta',
      hamur: 'İnce',
      malzemeler: 'Sucuk',
      siparisMiktari: 1,
      siparisNotu: '',
      fiyat: 50,
      isim: 'Şükrü Can Keleş',
    });
  });
});