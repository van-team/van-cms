import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BitDirectiveModule } from 'ngx-bit/directive';
import { BitExtModule } from 'ngx-bit/component';
import { BitPipeModule } from 'ngx-bit/pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzSpaceModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzSwitchModule,
    NzCardModule,
    NzToolTipModule,
    NzDrawerModule,
    NzMessageModule,
    NzNotificationModule,
    NzDividerModule,
    NzAutocompleteModule,
    NzCheckboxModule,
    NzPageHeaderModule,
    NzTableModule,
    NzListModule,
    NzMessageModule,
    NzTreeModule,
    NzTagModule,
    NzTreeSelectModule,
    NzRadioModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzAlertModule,
    NzResultModule,
    NzMessageModule,
    NzUploadModule,
    NzTypographyModule,
    NzModalModule,
    NzBadgeModule,
    NzPopoverModule,
    NzProgressModule,
    NzImageModule,
    NzSpinModule,
    NzPopconfirmModule,
    NzDescriptionsModule,
    NzTreeViewModule,
    BitExtModule,
    BitPipeModule,
    BitDirectiveModule,
    PerfectScrollbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule {
}
