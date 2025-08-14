import { Link } from "react-router-dom"

function ProductComponent(props) {
    return (
        <>
            <Link to={`/product/${props.data.id}`} className="d-flex flex-column product-item col-lg-2 p-2 col-6 col-sm-3 mb-2 col-2 text-black text-decoration-none">
                <img className="w-100 rounded" src={props.data.img} alt="" />
                <h6 className="pt-1 ps-2 mb-0">{props.data.name}</h6>
                <pre className="ps-2 mb-0">RS. {props.data.price}</pre>
                <pre className="ps-2 mb-0"><del>{props.data.descount}</del> <small>-11%</small></pre>
            </Link>

        </>
    )

}

export default ProductComponent