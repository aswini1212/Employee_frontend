import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import DeleteDialog from "../../components/DeleteDialog";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";



// Mock the delete mutation
const mockDeleteMutation = vi.fn();
vi.mock("../../api_service/employees/employees.api", () => ({
  useDeleteEmployeeMutation: () => [mockDeleteMutation, { isLoading: false ,isSuccess:true}],
}));

const mockCancel=vi.fn();
const mockConfirmDelete=vi.fn();

describe("Delete Dialog", () => {

  beforeEach(() => {
  vi.clearAllMocks(); 
});

  it("delete dialog should match snapshot", () => {
    const { container } = render(<DeleteDialog onCancel={mockCancel} onConfirmDelete={mockConfirmDelete} id={1}/>);
    expect(container).toMatchSnapshot();
  });

  it("for checking if the dialog works on clicking cancel", async () => {

    render(<DeleteDialog onCancel={mockCancel} onConfirmDelete={mockConfirmDelete} id={1}/>);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    await userEvent.click(cancelButton);

    expect(mockCancel).toHaveBeenCalledOnce();
  });
  it("for checking if the dialog works on clicking confirm and api gets true", async () => {

    render(<DeleteDialog onCancel={mockCancel} onConfirmDelete={mockConfirmDelete} id={1}/>);

    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    mockDeleteMutation.mockResolvedValueOnce({ data: {
        "id": 1,
        "name": "test name",
        "email": "test@gmail.com",
        "age": 45,
        "role": "UX",
        "created_at": "2026-06-10T06:38:03.746610Z",
        "experience": 8,
        "status": "Probation",
        "addresses": [
            {
            "id": 17,
            "line1": "HoliFaith",
            "city": "Ernakulam",
            "postal_code": "682021",
            "country": "India"
            }
        ]
        } });

    await userEvent.click(confirmButton);

     await waitFor(()=>{
          expect(mockDeleteMutation).toHaveBeenCalledWith(1);
          expect(mockConfirmDelete).toHaveBeenCalledOnce();
        })
  });
  
  
});
