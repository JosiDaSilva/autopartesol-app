import React, {createContext, useState} from 'react';

export const cartContext = createContext()

export const CartContextProvider = (props)=>{
    const [allProducts, setAllProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);

    const onAddProduct = (product) => {
   
        if(allProducts.find(item=>item.id ===product.id)){
         
      const products= allProducts.map(item=>item.id===product.id 
        ? 
         
         { ...item, quantity: item.quantity  + 1}
            : item
        );
        
        setTotal(total + product.precio * product.quantity);
        setCountProducts(countProducts + product.quantity);
          return setAllProducts([...products]);
         
      }
      setTotal(total + product.precio * product.quantity);
          setCountProducts(countProducts + product.quantity);
          setAllProducts([...allProducts, {...product}]);
          
    }
    
	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};


    const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.precio * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

    return (
       
        <>
        <cartContext.Provider value = {{allProducts, countProducts, onAddProduct, onDeleteProduct, onCleanCart, total}}>
        {props.children}
        </cartContext.Provider>
        </>
);

}