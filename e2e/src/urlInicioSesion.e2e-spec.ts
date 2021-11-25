import {browser, element, by } from 'protractor';


describe('Botón de inicio de sesión en page de Bienvenida redirecciona correctamente', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/login");

    });
    it("Se redirecciona a la página de inicio de sesión correctamente", ()=>{
        // se hace click en el botón cuya id es "login", que tiene la función de llevar a la página de incio de sesión
        element(by.css("login")).click();
        // se obtiene la url, la cual debe ser la de inicio de sesión
        expect(browser.getCurrentUrl()).toContain("/iniciosesion");
    }
);
});