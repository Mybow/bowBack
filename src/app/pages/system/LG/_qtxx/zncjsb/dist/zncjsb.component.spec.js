"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var zncjsb_component_1 = require("./zncjsb.component");
describe('zncjsb_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [zncjsb_component_1.zncjsb_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(zncjsb_component_1.zncjsb_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
