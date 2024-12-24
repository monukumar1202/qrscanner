import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';

export default function BasicDemo() {
    const [products, setProducts] = useState<any>([]);
    const responsiveOptions = [
        {
            breakpoint: '100px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '100px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '100px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '100px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product:any) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        setProducts(ProductService.getProductsData())
    }, []);

    const productTemplate = (product:any) => {
        return (
            <div className="border m-2 text-center py-5 px-3 rounded" style={{height:'200px', width:'260px'}}>
                <div>
                    <img src={product.image} alt={product.name} className="col-4" />
                </div>
                <div>
                    <h4 className="mb-1">{product.title}</h4>
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                    {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    {/* <div className="mt-3 flex flex-wrap gap-1 justify-content-center"> */}
                        {/* <button className="btn btn-primary rounded-circle bi bi-search" ></button> */}
                        {/* <button className="btn btn-success rounded-circle bi bi-star-fill ms-4"></button> */}
                    {/* </div> */}
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={4} autoplayInterval={3000} circular numScroll={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        