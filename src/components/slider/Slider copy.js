import ImageGallery from 'react-image-gallery';
import '../../App'
import React from 'react'

import '../slider/SliderCopyStyle.css'

const BmwZ4PhotoList = [
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-1.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-2.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-3.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-4.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-5.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-6.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-7.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-8.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-9.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-10.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-11.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-12.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-13.jpg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/BMW-Z4-14.jpg'}`,
    },
];
const VelarPhotoList = [
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-1.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-2.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-3.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-4.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-5.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-6.jpeg'}`,
    },
]
const MustangPhotoList = [
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-1.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-2.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-3.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-4.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-5.jpeg'}`,
    },
    {
        original: `${process.env.PUBLIC_URL + '/images/range-rover-velar-6.jpeg'}`,
    },
]

//this is what it was originaly

// class SliderCopy extends React.Component {
//     render() {
//         return <ImageGallery items={images} autoPlay={true} slideDuration={0} slideInterval={5000} showBullets={true} />;
//     }
// }


//it doesnt work yet:

const SliderCopy = props => {

    //Choosing whih fotos need to be shown
    //could be done with switch instead of if's
    let images = []
    if (props.id === "bmw-z4") {
        images = BmwZ4PhotoList.slice();
    } else if (props.id === "range-rover-velar") {
        images = VelarPhotoList.slice();
    } else if (props.id === "mustang-gt") {
        images = MustangPhotoList.slice();
    }

    return <ImageGallery items={images} autoPlay={true} slideDuration={0} slideInterval={5000} showBullets={true} />;
}

export default SliderCopy;
