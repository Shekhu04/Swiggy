import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react"; // Import render and screen from react
import "@testing-library/jest-dom"; // Import jest-dom for extended matchers

describe("Contact us Page test cases", () => {
    //it is same as test
    test("Should load contact us component", () => {
        render(<ContactUs />);
    
        const heading = screen.getByRole("heading", { level: 1 });
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside us component", () => {
        render(<ContactUs />);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
});

