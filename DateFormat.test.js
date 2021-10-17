const rewire = require("rewire")
const DateFormat = rewire("./DateFormat")
const xPad = DateFormat.__get__("xPad")
// @ponicode
describe("xPad", () => {
    test("0", () => {
        let callFunction = () => {
            xPad(0.0, "This is a Text", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            xPad(-1, "This is a Text", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            xPad("Foo bar", "Hello, world!", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            xPad(0.0, "foo bar", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            xPad("bar", "Foo bar", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            xPad(NaN, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("DateFormat.strftime", () => {
    test("0", () => {
        let callFunction = () => {
            DateFormat.strftime(["black", "red", "black"], "Foo bar", "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            DateFormat.strftime(["#F00", "#F00", "rgb(0.1,0.2,0.3)"], "foo bar", "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            DateFormat.strftime(["rgb(0,100,200)", "#FF00FF", "rgb(20%,10%,30%)"], "Foo bar", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            DateFormat.strftime(["green", "#FF00FF", "rgb(0,100,200)"], "This is a Text", "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            DateFormat.strftime(["#F00", "#FF00FF", "black"], "foo bar", "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            DateFormat.strftime(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
