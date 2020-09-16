import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' },)
export class AuditComponent implements OnInit {
    audits = [];
    currentUsername: any;

    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    ) {
    }

    ngOnInit() {
        this.loadAllAudits();
    }

    private loadAllAudits() {
        this.auditService.getAll()
            .pipe(first())
            .subscribe(audits => this.audits = audits);
        this.currentUsername = this.authenticationService.currentUserValue.firstName
    }
    
}