import { describe, expect, it } from "vitest";
import Label from "../../components/Label";
import { render ,screen} from "@testing-library/react";

describe("Label component",()=>{
    it("label should match snapshot",()=>{
        const{container}=render(<Label htmlFor="test-label" value="test-label-value"/>)
        const label= screen.getByText("test-label-value")
        expect(container).toMatchSnapshot()
        expect(label).toBeInTheDocument()
        expect(label).toHaveAttribute("for","test-label")
    });
    
});

