import { Link } from "react-router-dom"

function ProductComponent(props) {
    return (
        <>
            <Link to={`/product/${props.data.id}`} className="d-flex flex-column product-item mt-3 col-12 col-sm-6 col-lg-3 col-xl-2 col-md-4 text-black text-decoration-none bg-white">
                <div className="border shadow">
                    <img className="w-100" src={props.data.img} alt="" />
                    <h6 className="pt-1 mb-0">{props.data.name}</h6>
                    <pre className="ps-2 mb-0">RS. {props.data.price}</pre>
                    <pre className="ps-2 mb-0"><del>{props.data.descount}</del> <small>-11%</small></pre>
                    </div>
                
            </Link>
        </>
    )

}

export default ProductComponent