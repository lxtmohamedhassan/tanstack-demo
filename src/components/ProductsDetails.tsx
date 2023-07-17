import {
  useMatch
} from '@tanstack/router'

const ProductsDetails = () => {
    console.log("id");
    const {params} = useMatch();
    console.log("test",params);
    return (
        <div>
            Product with id: 
        </div>
    );
};

export default ProductsDetails;