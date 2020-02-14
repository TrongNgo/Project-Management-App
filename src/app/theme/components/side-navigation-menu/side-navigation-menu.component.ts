import {
  Component, Output, Input, EventEmitter,
  ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit
} from '@angular/core';
import {DxTreeViewComponent} from 'devextreme-angular/ui/tree-view';
import * as events from 'devextreme/events';


@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements OnInit {
  // @ViewChild(DxTreeViewComponent, {static: true}) menu: DxTreeViewComponent;
  //
  // @Output()
  // selectedItemChanged = new EventEmitter<string>();
  //
  // @Output()
  // openMenu = new EventEmitter<any>();
  //
  // @Input()
  // set selectedItem(value: string) {
  //   if (this.menu.instance) {
  //     this.menu.instance.selectItem(value);
  //   }
  // }

  // private _compactMode = false;
  // @Input()
  // get compactMode() {
  //   return this._compactMode;
  // }
  //
  // set compactMode(val) {
  //   this._compactMode = val;
  //   if (val && this.menu.instance) {
  //     this.menu.instance.collapseAll();
  //   }
  // }

  // TODO: Edit the menu here
  pages = [
    {
      routerLink: 'projects',
      text: 'Projects',
      icon: '<i class="fas fa-store"></i>'
    },
    {
      routerLink: 'customer',
      text: 'Customer',
      icon: '<i class="fas fa-list-alt"></i>'
    }
  ];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }
  //
  // updateSelection(event) {
  //   const nodeClass = 'dx-treeview-node';
  //   const selectedClass = 'dx-state-selected';
  //   const leafNodeClass = 'dx-treeview-node-is-leaf';
  //   const element: HTMLElement = event.element;
  //
  //   const rootNodes = element.querySelectorAll(`.${nodeClass}:not(.${leafNodeClass})`);
  //   Array.from(rootNodes).forEach(node => {
  //     node.classList.remove(selectedClass);
  //   });
  //
  //   let selectedNode = element.querySelector(`.${nodeClass}.${selectedClass}`);
  //   while (selectedNode && selectedNode.parentElement) {
  //     if (selectedNode.classList.contains(nodeClass)) {
  //       selectedNode.classList.add(selectedClass);
  //     }
  //
  //     selectedNode = selectedNode.parentElement;
  //   }
  // }
  //
  // onItemClick(event) {
  //   this.selectedItemChanged.emit(event);
  // }
  //
  // onMenuInitialized(event) {
  //   event.component.option('deferRendering', false);
  // }
  //
  // ngAfterViewInit() {
  //   events.on(this.elementRef.nativeElement, 'dxclick', (e) => {
  //     this.openMenu.next(e);
  //   });
  // }
  //
  // ngOnDestroy() {
  //   events.off(this.elementRef.nativeElement, 'dxclick');
  // }
}
