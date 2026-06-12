import { describe, expect, it } from "vitest";
import Input from "../../components/Input";
import { render ,screen} from "@testing-library/react";

describe("Input component",()=>{
    it("should match snapshot",()=>{
        const{container}=render(<Input type="text" name="test-input" placeholder="test-input"/>)
        expect(container).toMatchSnapshot()
    });
    it("shoud render an input with the provided id and placeholder",()=>{
        render(<Input type="text" name="test-new-input" id="test-input" placeholder="test-new-input"/>)
        const input=screen.getByPlaceholderText("test-new-input");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id","test-input");
        expect(input).toHaveAttribute("type","text");
    });
});

