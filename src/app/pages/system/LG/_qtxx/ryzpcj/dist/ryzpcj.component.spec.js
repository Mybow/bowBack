"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var ryzpcj_component_1 = require("./ryzpcj.component");
describe('ryzpcj_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ryzpcj_component_1.ryzpcj_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ryzpcj_component_1.ryzpcj_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
