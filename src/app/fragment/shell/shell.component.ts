import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styles: [],
})
export class ShellComponent implements OnInit {
  @Input() isOpen;
  @Output() closeWindow = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  getNode() {
    return document.getElementById("SYS_");
  }
}
