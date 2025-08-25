import { Link } from "react-router-dom"

function ProductComponent(props) {
    return (
        <>
        <div className=" mt-3 col-12 col-sm-6 col-lg-3 col-xl-3 col-md-4 text-black text-decoration-none bg-white">
            <Link to={`/product/${props.data.id}`} style={{height:"100px"}} >
                <div className="border shadow p-2 rounded">
                    <div className="h-75">
                        <img className="w-100 h-100" src={props.data.img} alt="" />
                    </div>
                    <h6 className="pt-1 mb-0">{props.data.name}</h6>
                    <pre className="ps-2 mb-0">RS. {props.data.price}</pre>
                    <pre className="ps-2 mb-0"><del>{props.data.descount}</del> <small>-11%</small></pre>
                </div>
                
            </Link>
        </div>
            
        </>
    )

}

export default ProductComponent