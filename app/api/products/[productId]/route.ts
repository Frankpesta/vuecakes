import { NextRequest, NextResponse } from "next/server";

const TIMBU_API_URL = "https://api.timbu.cloud/products";
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_TIMBU_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_APP_ID;

export async function GET(
	request: NextRequest,
	{ params }: { params: { productId: string } }
) {
	try {
		const { productId } = params;

		// Construct the API URL for a single product
		const apiUrl = `${TIMBU_API_URL}/${productId}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

		// Fetch data from Timbu Cloud
		const response = await fetch(apiUrl, {
			next: { revalidate: 60 },
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch product from Timbu Cloud");
		}

		const product = await response.json();

		// Return the product data
		return NextResponse.json(product, { status: 200 });
	} catch (error) {
		console.error("Error fetching product:", error);
		return NextResponse.json(
			{ error: "An error occurred while fetching the product" },
			{ status: 500 }
		);
	}
}
