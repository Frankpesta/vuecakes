import React from "react";

interface PaginationProps {
	currentPage: number | undefined;
	totalItems: number | undefined;
	itemsPerPage: number | undefined;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}) => {
	const totalPages =
		totalItems && itemsPerPage && Math.ceil(totalItems / itemsPerPage);

	const pageNumbers = [];
	if (totalPages)
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

	return (
		<div className="flex items-center justify-center gap-4 my-8">
			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => onPageChange(number)}
					className={`border py-2 px-4 rounded ${
						number === currentPage
							? "bg-primary-main text-white"
							: "text-primary-main border-primary-main bg-white"
					}`}>
					{number}
				</button>
			))}
		</div>
	);
};

export default Pagination;
