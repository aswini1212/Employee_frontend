import { describe, expect, it } from "vitest";
import Group from "../../components/Group";
import { render ,screen} from "@testing-library/react";

describe("Group component rendered with provided name",()=>{
    it("Group should match snapshot",()=>{
        const{container}=render(<Group htmlFor="test-group" value="test-group" type="text" name="test-group" placeholder="test-group" />)
        const group =screen.getByTestId("group")

        expect(container).toMatchSnapshot()
        expect(group).toBeInTheDocument()

    });
   
});

