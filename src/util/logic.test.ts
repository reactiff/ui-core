import ui from '..';

const range = ui.logic.range;

describe('logic.range', () => {
    it('is truthy', () => {
        expect(range).toBeTruthy();
    })

    it('works with 1 arg', () => {
        const arr = range(5);
        expect(arr).toHaveLength(5);
        expect(arr[0]).toEqual(1);
        expect(arr[4]).toEqual(5);
    })

    it('works with 2 arg', () => {
        const arr = range(1, 5);
        expect(arr).toHaveLength(5);
        expect(arr[0]).toEqual(1);
        expect(arr[4]).toEqual(5);
    })

    it('works with 2 arg reversed', () => {
        const arr = range(5, 1);
        expect(arr).toHaveLength(5);
        expect(arr[0]).toEqual(5);
        expect(arr[4]).toEqual(1);
    })
})
  
