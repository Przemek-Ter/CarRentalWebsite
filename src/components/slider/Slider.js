import { Carousel } from 'react-carousel-minimal'; //React Carousel Minimal

//Style
import '../slider/SliderStyle.css'

//Photo Lists
const BmwZ4PhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-1.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-2.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-3.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-4.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-5.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-6.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-7.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-8.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-9.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-10.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-11.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-12.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-13.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/BMW-Z4-14.jpg'}`,
    },
]
const VelarPhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-1.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-2.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-3.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-4.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-5.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-6.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-7.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-8.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-9.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-10.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-11.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-12.jpg'}`,
    },
]
const MustangPhotoList = [
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-1.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-2.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-3.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-4.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-5.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-6.jpg'}`,
    },
    {
        image: `${process.env.PUBLIC_URL + '/images/Ford-Mustang-7.jpg'}`,
    },

]

//Those Photos should be in this resolution 960 × 720
const Slider = props => {

    //Choosing whih fotos need to be shown
    let slides = []
    if (props.id === "bmw-z4") {
        slides = BmwZ4PhotoList.slice();
    } else if (props.id === "range-rover-velar") {
        slides = VelarPhotoList.slice();
    } else if (props.id === "mustang-gt") {
        slides = MustangPhotoList.slice();
    }

    const captionStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
    }//Never used

    return (
        <div className="slider">
            {/* <div style={{ textAlign: "center" }}> */}
            <Carousel
                data={slides}
                time={5000}
                width="auto"
                height="100%"
                captionStyle={captionStyle}
                radius="0.5rem"
                slideNumber={false}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="2rem"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={false}
                style={{
                    textAlign: "center",
                    maxWidth: "5rem%",
                    maxHeight: "2rem",
                    margin: "1rem auto",
                }}
            />
            {/* </div> */}
        </div>
    );
}

export default Slider;
