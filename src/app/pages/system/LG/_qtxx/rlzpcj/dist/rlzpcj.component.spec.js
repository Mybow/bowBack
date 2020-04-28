"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var rlzpcj_component_1 = require("./rlzpcj.component");
describe('rlzpcj_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rlzpcj_component_1.rlzpcj_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rlzpcj_component_1.rlzpcj_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
