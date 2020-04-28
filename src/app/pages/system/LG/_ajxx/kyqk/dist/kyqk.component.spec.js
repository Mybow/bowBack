"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var kyqk_component_1 = require("./kyqk.component");
describe('kyqk_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [kyqk_component_1.kyqk_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(kyqk_component_1.kyqk_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
