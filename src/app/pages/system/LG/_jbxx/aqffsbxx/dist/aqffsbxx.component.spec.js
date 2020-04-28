"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var aqffsbxx_component_1 = require("./aqffsbxx.component");
describe('aqffsbxx_Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [aqffsbxx_component_1.aqffsbxx_Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(aqffsbxx_component_1.aqffsbxx_Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
