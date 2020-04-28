"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var tztg_component_1 = require("./tztg.component");
describe('tztg_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tztg_component_1.tztg_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tztg_component_1.tztg_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
