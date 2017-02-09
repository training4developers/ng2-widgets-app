import { CapitalizePipe } from "./capitalize.pipe";

describe("Capitalize Pipe", () => {

    let capitalizePipe: CapitalizePipe;

    beforeEach(() => {
        capitalizePipe = new CapitalizePipe();
    });

    it("should expose a transform function", () => {
        expect(typeof capitalizePipe.transform).toEqual("function");
    });

    it("capitalize a word", () => {
        const result = capitalizePipe.transform("test");
        expect(result).toEqual("Test");
    });

});
