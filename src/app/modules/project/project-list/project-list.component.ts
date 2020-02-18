import {Component, OnInit, ViewChild} from '@angular/core';

import {DxButtonComponent, DxListComponent} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-project-list',
    templateUrl: 'project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {
    @ViewChild('list', {static: false}) list: DxListComponent;
    @ViewChild('prevBtn', { static: false }) prevBtn: DxButtonComponent;
    @ViewChild('nextBtn', { static: false }) nextBtn: DxButtonComponent;

    dataSource: DataSource;
    // listData: any;
    items: any[];
    pageSize: number = 2;
    totalProjectCount: number;
    maxPage: number;

    constructor() {
    }

    ngOnInit() {
        this.dataSource = new DataSource({
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
            pageSize: this.pageSize,
            requireTotalCount: true
        });

        this.dataSource.load().then((items, extra) => {
            this.totalProjectCount = extra.totalCount;
            this.maxPage = Math.ceil(this.totalProjectCount / this.pageSize);
        });
    }

    nextClick(e) {
        const newIndex = this.dataSource.pageIndex() + 1;
        if (newIndex === (this.maxPage - 1)) {
            this.nextBtn.instance.option('disabled', true);
        }
        this.prevBtn.instance.option('disabled', false);
        // go to next page
        this.dataSource.pageIndex(newIndex);
        this.changePage();
    }

    prevClick(e) {
        const prevIndex = this.dataSource.pageIndex() - 1;
        if (prevIndex === 0) {
            this.prevBtn.instance.option('disabled', true);
        }
        this.nextBtn.instance.option('disabled', false);

        this.dataSource.pageIndex(prevIndex);
        this.changePage();
    }

    changePage() {
        this.dataSource.load();
    }
}