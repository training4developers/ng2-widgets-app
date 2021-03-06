import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "active"})
export class ActivePipe implements PipeTransform {

    public transform(value: boolean) {
        return value ? "Active" : "Inactive";
    }

}
