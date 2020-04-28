"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var cyrysjan_component_1 = require("./cyrysjan.component");
describe('cyrysjan_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [cyrysjan_component_1.cyrysjan_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(cyrysjan_component_1.cyrysjan_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
