"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { ReactImageGalleryItem } from "react-image-gallery";
import { useAddToCart } from "@/redux/hooks/carthooks";
import { PhotoProps, ProductDetailsProps, CurrentPrice } from "@/lib";

function ProductDetail() {
	const params = useParams();
	const [product, setProduct] = useState<ProductDetailsProps | null>(null);
	const [loading, setLoading] = useState(false);
	const addToCart = useAddToCart();

	const getNGNPrice = (current_price: CurrentPrice[]): number => {
		const priceArray = current_price[0]?.NGN;
		return priceArray && typeof priceArray[0] === "number" ? priceArray[0] : 0;
	};

	useEffect(() => {
		async function fetchProduct() {
			try {
				const response = await fetch(`/api/products/${params.productId}`);
				if (!response.ok) {
					throw new Error("Failed to fetch product");
				}
				const data = await response.json();
				console.log(data);
				setProduct(data);
			} catch (error) {
				console.error("Error:", error);
			}
		}

		if (params.productId) {
			fetchProduct();
		}
	}, [params.productId]);

	if (!product) return <div>Loading...</div>;

	const galleryItems: ReactImageGalleryItem[] = product.photos.map((photo) => ({
		original: `https://api.timbu.cloud/images/${photo.url}`,
		description: photo.model_name,
		thumbnail: `https://api.timbu.cloud/images/${photo.url}`,
	}));

	return (
		<section className="my-6 mx-4 lg:mx-0">
			<h2 className="text-center text-xl py-6">
				Product Details -{" "}
				<span className="text-primary-main">{product?.name}</span>
			</h2>
			<div className="my-4 flex flex-col lg:flex-row items-start justify-center gap-12">
				<div className="w-full">
					<ImageGallery
						items={galleryItems}
						showNav={false}
						showPlayButton={false}
						showThumbnails={true}
						autoPlay
					/>
				</div>

				<div className="w-full">
					<p className="text-2xl font-bold mb-2">
						N {getNGNPrice(product.current_price)}
					</p>
					<div className="flex mb-4">
						{[1, 2, 3, 4, 5].map((star) => (
							<svg
								key={star}
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
						<span className="ml-2 text-gray-600">8 Reviews</span>
					</div>

					<p className="mb-4">{product.description}</p>

					<div className="py-6 flex items-center justify-center gap-8">
						<button
							onClick={addToCart(product)}
							className="bg-primary-main text-white px-6 py-2 rounded hover:bg-gray-800 transition">
							Add to cart
						</button>
						<button className="border border-primary-main outline-none text-primary-main px-6 py-2 rounded hover:bg-gray-800 transition">
							Add to Wishlist
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetail;
