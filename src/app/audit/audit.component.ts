import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' },)
export class AuditComponent implements OnInit {
    audits: any;
    currentUsername: any;
    count = 5;
    search = ''

    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    ) {
    }

    ngOnInit() {
        this.loadAllAudits();
    }
    // 
    // get Audits
    private loadAllAudits() {
        const d = this.auditService.getAll()
        d.then(data => this.audits = data.splice(1, this.count));
        this.currentUsername = this.authenticationService.currentUserValue.firstName
    }

    // pagination pagecount 
    pagecount(a) {
        console.log(a)
        this.count = this.count + a;
        this.loadAllAudits();
    }

    // search filter 
    filter(event) {
        this.search === event.data
        const data = this.audits._id.find(this.search);
    }

}