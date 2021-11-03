import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DeviceInformation } from '../../../@core/data/device-information';
@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {

  constructor(
    private service: DeviceInformation
  ) {
    const data = this.service.getAllDevice();
    this.source.load(data);
    console.log(data);
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      deviceId: {
        title: 'ID',
        type: 'number',
      },
      temperature: {
        title: 'Temperature',
        type: 'string',
      },
      humidity: {
        title: 'Humidity',
        type: 'string',
      },
      trackBattery: {
        title: 'TrackBattery',
        type: 'string',
      },
      isOpen: {
        title: 'isOpen',
        type: 'boolean',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
