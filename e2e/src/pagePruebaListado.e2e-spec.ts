import {browser, element, by } from 'protractor';

describe ('Muestra correctamente page de Listado de ingresados', ()=>{
    beforeEach(()=>{
        browser.get("/listado");
    });

    it("El page de listado se muestra correctamente", ()=>{
        expect(element(by.css("ion-tittle")).getText()).toContain("Listado");
    });

});