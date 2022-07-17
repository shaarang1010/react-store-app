import { render, screen } from "@testing-library/react";
import { httpRequest } from "../../utils/httpRequest";

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  jest
    .spyOn(global, "fetch")
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ data: 100 }) })
      ) as jest.Mock
    );
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("withFetch", () => {
  test("works", async () => {
    const json = await httpRequest("api.com");
    console.log(json);
    expect(json.data).not.toBeNull();
  });
});
