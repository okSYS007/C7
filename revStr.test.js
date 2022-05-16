import { revertString } from "./revStr.js";

describe("Revert string hello to olleh", () => 
    {
    it("should reverse string", () => expect(revertString("hello")).toBe("olleh"));
    }
);