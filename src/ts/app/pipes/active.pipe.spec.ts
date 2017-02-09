import { ActivePipe } from "./active.pipe";

describe("active pipe tests", () => {

    it("active label test", () => {

        const activePipe = new ActivePipe();
        const result = activePipe.transform(true);

        expect(result).toEqual("Active");

    });

    it("inactive label test", () => {

        const activePipe = new ActivePipe();
        const result = activePipe.transform(false);

        expect(result).toEqual("Inactive");

    });

});
