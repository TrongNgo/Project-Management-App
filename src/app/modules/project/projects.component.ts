import {Component, OnInit, ViewChild} from '@angular/core';

import {DxListComponent} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
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
              'Website Re-Design Plan',
              'Rollout of New Website and Marketing Brochures',
              'Update Sales Strategy Documents',
              'Create 2012 Sales Report',
              'Direct vs Online Sales Comparison Report',
              'Review 2012 Sales Report and Approve 2016 Plans',
              'Deliver R&D Plans for 2016',
              'Create 2016 R&D Plans',
              '2016 QA Strategy Report',
              '2016 Training Events',
              'Approve Hiring of John Jeffers',
              'Non-Compete Agreements',
              'Update NDA Agreement',
              'Update Employee Files with New NDA',
              'Sign Updated NDA',
              'Submit Questions Regarding New NDA',
              'Submit Signed NDA',
              'Update Revenue Projections',
              'Review Revenue Projections',
              'Comment on Revenue Projections',
              'Provide New Health Insurance Docs',
              'Review Changes to Health Insurance Coverage',
              'Scan Health Insurance Forms',
              'Sign Health Insurance Forms',
              'Follow up with West Coast Stores',
              'Follow up with East Coast Stores'
            ],
            sort: 'ProductID',
            paginate: true,
            pageSize: 10
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
