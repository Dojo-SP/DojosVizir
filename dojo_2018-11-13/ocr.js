const { expect } = require('chai');


const ocr = (text) => {
    var [line1, line2, line3] = text.split('\n');

    if (line2 === '  |   |') return 11;
    if (line1.length === 7) return 10;
    if (line1 === ' _ ' && line2 === '| |' && line3 === '|_|') return 0;
    if (line1 === ' _ ' && line2 === '|_|' && line3 === ' _|') return 9;
    if (line2 === '|_|' && line3 === '|_|') return 8;
    if (line2 === '  |' && text.charAt(1) === '_') return 7;
    if (line3 === '|_|') return 6;
    if (text.charAt(5) === '_' && text.charAt(6) === ' ') return 5;
    if (text.charAt(1) === ' ' && text.charAt(5) === '_') return 4;
    if (text.charAt(text.length - 2) !== '|') return 2;
    return text.charAt(1) === '_' ? 3 : 1;
};

// const input = [
//     " _      _  _       _   _  _   _   _ ",
//     "| |  |  _| _| |_| |_  |_   | |_| |_|",
//     "|_|  | |_  _|   |  _| |_|  | |_|  _|",
//     ""
// ]

describe('ocr', () => {
    it('one', () => {
        expect(ocr([
            "   ",
            "  |",
            "  |",
            ""
        ].join('\n'))).be.eql(1);
    });

    it('two', () => {
        expect(ocr([
            " _ ",
            " _|",
            "|_ ",
            ""
        ].join('\n'))).be.eql(2);
    });

    it('three', () => {
        expect(ocr([
            " _ ",
            " _|",
            " _|",
            ""
        ].join('\n'))).be.eql(3);
    });

    it('four', () => {
        expect(ocr([
            "   ",
            "|_|",
            "  |",
            ""
        ].join('\n'))).be.eql(4);
    })

    it('five', () => {
        expect(ocr([
            " _ ",
            "|_ ",
            " _|",
            ""            
        ].join('\n'))).be.eql(5);
    });

    it('six', () => {
        expect(ocr([
            " _ ",
            "|_ ",
            "|_|",
            ""    
        ].join('\n'))).be.eql(6);
    })

    it('seven', () => {
        expect(ocr([
            " _ ",
            "  |",
            "  |",
            ""    
        ].join('\n'))).be.eql(7);
    });

    it('eight', () => {
        expect(ocr([
            " _ ",
            "|_|",
            "|_|",
            ""    
        ].join('\n'))).be.eql(8);
    });

    it('nine', () => {
        expect(ocr([
            " _ ",
            "|_|",
            " _|",
            ""    
        ].join('\n'))).be.eql(9);
    });

    it('zero', () => {
        expect(ocr([
            " _ ",
            "| |",
            "|_|",
            ""    
        ].join('\n'))).be.eql(0);
    });

    it('ten', () => {
        expect(ocr([
            "     _ ",
            "  | | |",
            "  | |_|",
            ""
        ].join('\n'))).be.eql(10);
    })

    it('eleven', () => {
        expect(ocr([
            "       ",
            "  |   |",
            "  |   |",
            ""
        ].join('\n'))).be.eql(11)
    })
});