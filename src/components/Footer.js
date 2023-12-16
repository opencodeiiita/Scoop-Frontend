import * as React from 'react';

//assume this data comes from backend
const categories = ["Food", "Animals", "Nature", "Tech", "People", "Objects", "Professor", "IIITA"];
const comments = [{
    username: "Om",
    comment: "I agree with you! The library of IIITA should be openned 24/7"
},
{
    username: "Jon",
    comment: "What a great piece of news this is!"
},
{
    username: "Walt",
    comment: "I agree with what Gymkhana shared: the fest should be postponed"
}
]
const Footer  = () => {
    return(
        <>
        <h1>Footer</h1>
        </>
    )
}

export default Footer;