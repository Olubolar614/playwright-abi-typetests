import { test, expect } from "@playwright/test";

test.describe.parallel("API Testing", () => {
  const baseUrl = "https://dummyjson.com";
  test("Get Request - Get User Details", async ({ request }) => {
    const response = await request.get(`${baseUrl}/products/1`);
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe("iPhone 9");
    expect(responseBody.stock).toBe(94);
    expect(responseBody.brand).toBe("Apple");
  });
  test("Post Request - Create a New User", async ({ request }) => {
    const response = await request.post(`${baseUrl}/products/add`, {
      data: {
        title: "BMW Pencil",
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.title).toBe("BMW Pencil");
  });
  test("Put Request - Update User", async ({ request }) => {
    const response = await request.put(`${baseUrl}/products/1`, {
      data: {
        title: "iPhone Galaxy +1",
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.title).toBe("iPhone Galaxy +1");
  });
  test("Delete Request - Delete User", async ({ request }) => {
    const response = await request.delete(`${baseUrl}/products/1`);
    expect(response.status()).toBe(200);
  });
});
