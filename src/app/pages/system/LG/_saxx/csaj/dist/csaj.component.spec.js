"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var csaj_component_1 = require("./csaj.component");
describe('csaj_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [csaj_component_1.csaj_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(csaj_component_1.csaj_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
