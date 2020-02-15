import {Component, OnInit, ViewChild} from '@angular/core';

import {DxListComponent} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-project-list',
    templateUrl: 'project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {
    @ViewChild('list', {static: false}) list: DxListComponent;

    listData: any;
    items: any[];

    constructor() {
        this.listData = new DataSource({
            store: [
              'Prepare 2016 Financial',
              'Prepare 2016 Marketing Plan',
              'Update Personnel Files',
              'Review Health Insurance Options Under the Affordable Care Act',
              'New Brochures',
              '2016 Brochure Designs',
              'Brochure Design Review',
              'Website Re-Design Plan'
            ],
            sort: 'ProductID',
            paginate: true,
            pageSize: 2
        });

        this.listData.load().done(r => {
        this.items = r;
        });
    }

    ngOnInit() {
    }

    nextClick(e) {
        const currentIndex = this.listData.pageIndex();

        this.listData.pageIndex(currentIndex + 1);
        this.listData.load().done(r => {
          this.items = r;
        });
    }

    prevClick(e) {
        const currentIndex = this.listData.pageIndex();
        if (currentIndex > 0) {
            this.listData.pageIndex(currentIndex - 1);
            this.listData.load().done(r => {
              this.items = r;
            });
        }
    }
}
