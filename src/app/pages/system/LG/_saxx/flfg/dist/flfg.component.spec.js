"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var flfg_component_1 = require("./flfg.component");
describe('flfg_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [flfg_component_1.flfg_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(flfg_component_1.flfg_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
