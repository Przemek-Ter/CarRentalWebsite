import { Carousel } from 'react-carousel-minimal'; //React Carousel Minimal

//Photo Lists
const AmgA45PhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/amg-a45-1.jpeg'}`,
        caption: ""
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/amg-a45-2.jpeg'}`,
        caption: ""
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/amg-a45-3.jpeg'}`,
        caption: ""
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/amg-a45-4.jpeg'}`,
        caption: ""
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/amg-a45-5.jpeg'}`,
        caption: ""
    },
]
const BmwZ4PhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-1.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-2.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-3.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-4.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-5.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/bmw-z4-6.jpeg'}`,
    },
]
const VelarPhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-1.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-2.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-3.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-4.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-5.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-6.jpeg'}`,
    },
]
//Not correct
const MustangPhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-1.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-2.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-3.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-4.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-5.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-6.jpeg'}`,
    },
]
//Not Correct
const AudiPhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-1.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-2.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-3.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-4.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-5.jpeg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/range-rover-velar-6.jpeg'}`,
    },
]

//Those Photos should be in this resolution 1079 × 720

const Slider = props => {

    //Choosing whih fotos need to be shown
    let slides = []
    if (props.id === "amg-a45") {
        slides = AmgA45PhotoList.slice();
    } else if (props.id === "bmw-z4") {
        slides = BmwZ4PhotoList.slice();
    } else if (props.id === "range-rover-velar") {
        slides = VelarPhotoList.slice();
    } else if (props.id === "mustang-gt") {
        slides = MustangPhotoList.slice();
    } else if (props.id === "audi-a4") {
        slides = AudiPhotoList.slice();
    }

    const captionStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
    }//Never used

    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <Carousel
                    data={slides}
                    time={5000}
                    width="100%"
                    height="80%"
                    captionStyle={captionStyle}
                    radius="0.5rem"
                    slideNumber={false}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="2rem"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="contain"
                    thumbnails={true}
                    thumbnailWidth="15%"
                    style={{
                        textAlign: "center",
                        maxWidth: "5rem%",
                        maxHeight: "2rem",
                        margin: "1rem auto",
                    }}
                />
            </div>
        </div>
    );
}

export default Slider;
