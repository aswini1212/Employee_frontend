import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Login from "../../pages/Login_Page";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock the login mutation
const mockLoginMutation = vi.fn();
vi.mock("../../api_service/auth/login.api", () => ({
  useLoginMutation: () => [mockLoginMutation, { isLoading: false }],
}));

describe("Login Page", () => {

  beforeEach(() => {
  vi.clearAllMocks(); 
});

  it("login page should match snapshot", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });

  it("for checking the success of login api", async () => {

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText("UserName");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(usernameInput, "test@gmail.com");
    await userEvent.type(passwordInput, "password1233");

    mockLoginMutation.mockResolvedValueOnce({ data: { access_token: "fake-token" } });

    await userEvent.click(submitButton);

    // Wait for the login mutation to resolve and navigation to occur
    await waitFor(() => {
      expect(mockLoginMutation).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/employee/list");
    });
  });
  it("for checking the failure of login api", async()=>{
    render(<Login/>);

    const usernameInput = screen.getByPlaceholderText("UserName");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton= screen.getByRole("button",{name:/login/i});
    const errorMessage = "Invalid credentials";

    await userEvent.type(usernameInput, "test@gmail.com");
    await userEvent.type(passwordInput, "password1233");

    
    mockLoginMutation.mockRejectedValueOnce({data: { message: errorMessage }});

    await userEvent.click(submitButton);

    await waitFor(()=>{
      expect(mockLoginMutation).toHaveBeenCalledOnce();
     
    })
     expect(mockNavigate).not.toHaveBeenCalledWith("/employee/list");
  });
  it("for checking if the username and password validation occurs(both in correct format)",async()=>{
    render(<Login/>)

    const usernameInput=screen.getByPlaceholderText("UserName")
    const passwordInput=screen.getByPlaceholderText("Password")
    const usernameValidation=screen.queryByTestId("1")
    const passwordValidation=screen.queryByTestId("2")

    await userEvent.type(usernameInput,"aswinipriya@gmail.com")
    await userEvent.type(passwordInput,"password123444")

    expect(usernameValidation).not.toBeInTheDocument()
    expect(passwordValidation).not.toBeInTheDocument()

  });
  it("for checking if both password and username fails",async()=>{
    render(<Login/>)

    const usernameInput=screen.getByPlaceholderText("UserName")
    const passwordInput=screen.getByPlaceholderText("Password")

    await userEvent.type(usernameInput,"aswinipriyagmail.com")
    await userEvent.type(passwordInput,"pass")

    expect(screen.getByText("Email doesnt contain @")).toBeInTheDocument()
    expect(screen.getByText("Password should have atleast 8 characters")).toBeInTheDocument()
  });
});
