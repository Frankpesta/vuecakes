import { NextRequest, NextResponse } from "next/server";

const TIMBU_API_URL = "https://api.timbu.cloud/products";
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_TIMBU_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_APP_ID;

export async function GET(request: NextRequest) {
	try {
		// Get query parameters
		const searchParams = request.nextUrl.searchParams;
		const page = searchParams.get("page") || 1;
		const size = searchParams.get("size") || 10;

		// Construct the API URL with query parameters
		const apiUrl = `${TIMBU_API_URL}?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${page}&size=${size}&Appid=${APP_ID}&Apikey=${API_KEY}`;

		// Fetch data from Timbu Cloud
		const response = await fetch(apiUrl, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch products from Timbu Cloud");
		}

		const products = await response.json();

		// Return the products data
		return NextResponse.json(products, { status: 200 });
	} catch (error) {
		console.error("Error fetching products:", error);
		return NextResponse.json(
			{ error: "An error occurred while fetching products" },
			{ status: 500 }
		);
	}
}
