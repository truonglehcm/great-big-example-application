import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, EventManager } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalPopupService } from './rebuttal-popup.service';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-delete-dialog',
    templateUrl: './rebuttal-delete-dialog.component.html'
})
export class RebuttalDeleteDialogComponent {

    rebuttal: Rebuttal;

    constructor(
        private rebuttalService: RebuttalService,
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private eventManager: EventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.rebuttalService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'rebuttalListModification',
                content: 'Deleted an rebuttal'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('greatBigExampleApplicationApp.rebuttal.deleted', { param : id }, null);
    }
}

@Component({
    selector: 'jhi-rebuttal-delete-popup',
    template: ''
})
export class RebuttalDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private rebuttalPopupService: RebuttalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.rebuttalPopupService
                .open(RebuttalDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
