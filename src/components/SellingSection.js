import React from 'react';
import '../styles/SellingSection.css'; // Ensure this CSS file is properly set up
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ["Adventure", "Life", "Freedom", "Thrill"];
const COLORS = ['#DD0426', '#5FED42', '#4DBCF2', '#FCBA04']; // Example colors for each text

function SellingSection() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => (index + 1) % TEXTS.length),
            2000, // Change text every 3 seconds
        );
        return () => clearInterval(intervalId); // Clear using clearInterval instead of clearTimeout
    }, []);

    return (
        <>
        <div className="bg-cover">
<div className='selling-section'>
<div class="custom-shape-divider-top-1710665752">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

            <div className="slogan-text">

            <span  > Are You Ready To Experience
            </span>
            <span>

                <TextTransition springConfig={presets.stiff}
                className='transforming-text'
                style={{ color: COLORS[index] }}>
                    {TEXTS[index]}
                </TextTransition>
                    </span>
                    </div>
                    </div>
                    </div>
                    </>
    );
}

export default SellingSection;
