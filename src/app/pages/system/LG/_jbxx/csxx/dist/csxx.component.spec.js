"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var csxx_component_1 = require("./csxx.component");
describe('csxx_component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [csxx_component_1.csxx_component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(csxx_component_1.csxx_component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
