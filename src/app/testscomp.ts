import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    template: '<div>this is testcomp</div>'
})
export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
