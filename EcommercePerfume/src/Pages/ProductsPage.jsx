import HeroSectionCarousel from "../Components/HeroSectionCarousel";
import ProductComponent from "../Components/ProductComponent";


function ProductPage() {
    return (
        <div>
            <div className="border mt-1 w-100" style={{
                height: "400px"
            }}>
                <HeroSectionCarousel/>
            </div>
                <div className="row">
                {
                    data.map((item, index) => (

                        <ProductComponent key={index} data={item} />
                    ))

                }
            
            </div>
            


        </div>
    )
}

export default ProductPage;

const data = [
    {
        id: 1,
        name: "product 1 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2044167755/display_1500/stock-photo-bottle-of-perfume-in-water-on-color-background-2044167755.jpg'
    },
    {
        id: 2,
        name: "product 2 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2129319530/display_1500/stock-photo-glass-bottle-with-perfume-on-background-of-very-peri-purple-fabric-close-up-photo-with-copy-space-2129319530.jpg'
    },
    {
        id: 3,
        name: "product 3 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2443939047/display_1500/stock-photo-create-a-photo-with-a-perfume-on-a-dark-background-with-purple-light-with-intense-flames-2443939047.jpg'
    },
    
    {
        id: 4,
        name: "product 5 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2151779859/display_1500/stock-photo-perfume-bottle-on-a-background-d-render-glowing-lines-tunnel-neon-lights-2151779859.jpg'
    },
    {
        id: 5,
        name: "product 6 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2514991247/display_1500/stock-photo-purple-themed-perfume-social-media-poster-elegant-and-luxurious-design-sparkling-highlights-2514991247.jpg'
    },
    {
        id: 6,
        name: "product 7 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/2662776723/display_1500/stock-photo-close-up-of-an-elegant-purple-perfume-bottle-with-a-crystal-like-design-isolated-against-a-dark-2662776723.jpg'
    },
    {
        id: 7,
        name: "product 4 detail detail",
        price: 9999,
        descount: 1500,
        img: 'https://www.shutterstock.com/shutterstock/photos/1909677091/display_1500/stock-photo-perfume-bottle-with-on-neon-light-background-blank-perfumery-mockup-spa-branding-concept-glamour-1909677091.jpg'
    },
]