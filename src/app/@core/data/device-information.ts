import { Device } from "../model/device.model";

export abstract class DeviceInformation {
    abstract getAllDevice(): Device[];
}