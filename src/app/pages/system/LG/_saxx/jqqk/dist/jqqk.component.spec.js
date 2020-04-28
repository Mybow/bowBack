"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var jqqk_component_1 = require("./jqqk.component");
describe('jqqk_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [jqqk_component_1.jqqk_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(jqqk_component_1.jqqk_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
