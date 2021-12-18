import { Bo4eLib } from './bo4e-lib';

describe('Bo4eLib', () => {
    let lib: Bo4eLib;

    beforeEach(() => {
        lib = new Bo4eLib();
    });

    it('should create', () => {
        expect(lib).toBeTruthy();
    });

    it('should be version 11', () => {
        expect(lib.getVersion()).toEqual(11);
        expect(Bo4eLib.VERSION).toEqual(11);
    });
})
