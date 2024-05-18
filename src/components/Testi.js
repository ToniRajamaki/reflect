import React from 'react'
import "../styles/Hero.css"

function Testi() {
    const testimonials = [
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg",
            name: "Eleanor Crisp",
            quote: "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg",
            name: "Gordon Norman",
            quote: "Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused."
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg",
            name: "Sue Shei",
            quote: "The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference."
        }
    ];

    return (
        <>
            {testimonials.map((testimonial, index) => (
                <figure key={index} class="snip1390">
                    <img src={testimonial.imgSrc} alt="profile-sample" class="profile" />
                    <figcaption>
                        <h2>{testimonial.name}</h2>
                        <blockquote>{testimonial.quote}</blockquote>
                    </figcaption>
                </figure>
            ))}
        </>
    );
}

export default Testi;
