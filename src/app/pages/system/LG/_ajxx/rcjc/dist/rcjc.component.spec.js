"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var rcjc_component_1 = require("./rcjc.component");
describe('rcjc_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rcjc_component_1.rcjc_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rcjc_component_1.rcjc_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
