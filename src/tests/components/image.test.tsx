import { describe, expect, it } from "vitest";
import Image from "../../components/Image";
import { render ,screen} from "@testing-library/react";

describe("Image component",()=>{
    it("image should match snapshot",()=>{
        const{container}=render(<Image src="test-image-src"/>)
        expect(container).toMatchSnapshot()
    });
});

