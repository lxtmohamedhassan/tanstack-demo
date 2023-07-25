import { useParams } from '@tanstack/router';



const ProductsDetails = () => {
    const params = useParams();

    console.log("Product id is", params.id);
    return (
        <h1>
            Product with id: {params?.id}
        </h1>
    );
};

export default ProductsDetails;