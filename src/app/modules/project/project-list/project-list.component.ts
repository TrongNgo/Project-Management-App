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

/*
*   @ViewChild("prevBtn", { static: false }) prevBtn: DxButtonComponent;
  @ViewChild("nextBtn", { static: false }) nextBtn: DxButtonComponent;
  @ViewChild("list", { static: false }) dxlist: DxListComponent;

  dataSource: DataSource;

  selectedItems: any[] = [];
  allowDeleting: boolean = false;
  deleteType: string = "toggle";
  tasks: string[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
  }

  ngOnInit() {
    console.log("this", this.tasks);
    const a = this.tasks;
    console.log("list", this.dxlist.instance);
    this.dataSource = new DataSource({
      store: a,
      paginate: true,
      pageSize: 2
    });
    this.changePage();
  }

  onPrevButton(e) {
    var newIndex = this.dataSource.pageIndex() - 1;
    if (newIndex === 0) {
      e.component.option("disabled", true);
    }
    this.nextBtn.instance.option("disabled", false);
    this.dataSource.pageIndex(newIndex);
    this.changePage();
  }

  onNextButton(e) {
    var newIndex = this.dataSource.pageIndex() + 1;
    this.prevBtn.instance.option("disabled", false);
    this.dataSource.pageIndex(newIndex);
    this.changePage();
  }

  changePage() {
    this.dataSource.load().done(function(items) {
      console.log("list", this.list);
      this.list.instance.option("dataSource", items);
      if (items.length < 2) {
        // this.nextBtn.instance.option("disabled", true);
      }
    });
  }
* */
