import "@testing-library/jest-dom";
import { Footer } from "@/app/(public)/_components/footer";
import { render } from "@testing-library/react";

describe("Should Footer components", () => {
  it("should render correctly", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});





