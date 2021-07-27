import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "permission" })
export class permissionPipe implements PipeTransform {
  transform(value: number): string {
    var newVal: string;
    if (value == 2) { newVal = "Admin" }
    else if (value == 1) { newVal = "Employee" }
    else if (value == 0) { newVal = "User" }
    else newVal = "";
    return newVal;
  }
}
