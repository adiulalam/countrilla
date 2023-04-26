const request = require("supertest");

const url = "https://restcountries.com/v3.1/region";

describe("Test the europe region", () => {
	test("It should response the GET method from europe", async () => {
		const response = await request(url).get("/europe");
		expect(response.statusCode).toBe(200);
	});
});

describe("Test the americas region", () => {
	test("It should response the GET method from americas", async () => {
		const response = await request(url).get("/americas");
		expect(response.statusCode).toBe(200);
	});
});

describe("Test the africa region", () => {
	test("It should response the GET method from africa", async () => {
		const response = await request(url).get("/africa");
		expect(response.statusCode).toBe(200);
	});
});

describe("Test the oceania region", () => {
	test("It should response the GET method from oceania", async () => {
		const response = await request(url).get("/oceania");
		expect(response.statusCode).toBe(200);
	});
});

describe("Test the asia region", () => {
	test("It should response the GET method from asia", async () => {
		const response = await request(url).get("/asia");
		expect(response.statusCode).toBe(200);
	});
});

describe("Test the antarctic region", () => {
	test("It should response the GET method from antarctic", async () => {
		const response = await request(url).get("/antarctic");
		expect(response.statusCode).toBe(200);
	});
});
