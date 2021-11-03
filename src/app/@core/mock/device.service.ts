import { Injectable } from "@angular/core";
import { DeviceInformation } from "../data/device-information";
import { Device } from "../model/device.model";

@Injectable()
export class DeviceService extends DeviceInformation {
    device: Device[] = [
        {
            deviceId: '123-1234',
            isOpen: true,
            humidity: '124',
            temperature: '12',
            trackBattery: 'yes'
        },
        {
            deviceId: '123-1235',
            isOpen: true,
            humidity: '124',
            temperature: '12',
            trackBattery: 'yes'
        },
        {
            deviceId: '123-1236',
            isOpen: true,
            humidity: '124',
            temperature: '12',
            trackBattery: 'yes'
        }
    ];
    getAllDevice(): Device[] {        
        return this.device;
    }
}