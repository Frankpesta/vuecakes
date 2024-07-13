export interface CurrentPrice {
	NGN: (number | null | any[])[];
}

export interface ProductsProps {
	id: string;
	name: string;
	categories: any[];
	current_price: CurrentPrice[];
	photos: PhotoProps[];
	unique_id: string;
	quantity: number;
	price: number;
}

export interface PhotoProps {
	file_rename: boolean;
	filename: string;
	is_featured: boolean;
	is_public: boolean;
	model_id: string;
	model_name: string;
	organization_id: string;
	position: number;
	save_as_jpg: boolean;
	url: string;
}
