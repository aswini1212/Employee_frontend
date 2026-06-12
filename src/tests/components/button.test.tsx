import { describe, expect, it } from "vitest";
import Button from "../../components/Button";
import { render ,screen} from "@testing-library/react";

describe("Button component",()=>{
    it("button should match snapshot",()=>{
        const{container}=render(<Button type="submit" label="test-button" id="test-button-id"/>)
        expect(container).toMatchSnapshot()
    });
    it("shoud render a button with the provided id ",()=>{
        render(<Button type="submit" label="test-button" id="test-button-id" />)
        const button=screen.getByText("test-button"); //getting the button according to the text rendered in the label
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("id","test-button-id");
        expect(button).toHaveAttribute("type","submit");
    });
});

