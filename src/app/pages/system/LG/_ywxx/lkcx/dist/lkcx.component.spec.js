"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var lkcx_component_1 = require("./lkcx.component");
describe('lkcx_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [lkcx_component_1.lkcx_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(lkcx_component_1.lkcx_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
