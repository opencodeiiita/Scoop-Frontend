import * as React from 'react';


//assume this data is coming from the backend
const postsdata = [
    {
        headline: "Opening Day of Boating Season, Seattle WA",
        location: "Seattle, WA",
        image: "https://picsum.photos/300",
        explaination: "The Grand Opening of Boating Season when traffic gets stalled in the University District (UW)  ",
        description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
        tags: ["Seattle", "Boating", "University District", "UW", "Opening Day", "Boating Season"],
        upvotes_count: 100,
        user: "" ,//user id 


    },
    {
        headline: "How to choose the right laptop for programming",
        location: "Prayagraj, India",
        image: "https://picsum.photos/300",
        explaination: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
        tags: ["Laptop", "Programming", "Technology", "Computer Science"],
        upvotes_count: 55,
        user: "" //user id
    },
    {
        headline:"How we built the world's first self driving car",
        location: "San Francisco, CA",
        image:"https://picsum.photos/300",
        explaination: "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
        description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
        tags: ["Self Driving", "Technology", "Electric Cars", "Tesla"],
        upvotes_count: 65,
        user: ""
    },
    {
        headline: "How to Persuade Your Parents to Buy Fast Food",
        location: "New York, NY",
        image: "https://picsum.photos/300",
        explaination: "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
        description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards  
        tags: ["Fast Food", "Parents", "Food", "Children"],
        upvotes_count: 75,
        user: ""
    }
]

//userArray[0] has posted the first news
//userArray [1] has posted the second news and so on....
const userArray = [
    {
        fistName: "John", 
        lastName: "Doe",
        username: "johndoe",
        email: "buddhadevom@gmail.com",
        password: "",
        profileImage: "https://i.pravatar.cc/200",
        isAdmin: 0,
        myUpvotes: [],
        News: []

    },
   
        {
            fistName: "Walt", 
            lastName: "White",
            username: "johndoe",
            email: "buddhadevom@gmail.com",
            password: "",
            profileImage: "https://i.pravatar.cc/200",
            isAdmin: 0,
            myUpvotes: [],
            News: []
    
        },
        {
            fistName: "Skyler", 
            lastName: "White",
            username: "johndoe",
            email: "buddhadevom@gmail.com",
            password: "",
            profileImage: "https://i.pravatar.cc/200",
            isAdmin: 0,
            myUpvotes: [],
            News: []
    
        },

]

const CategoryCarousel = () => {
    return(
        <>
        <h1>Navbar</h1>
        </>
    )
}

export default CategoryCarousel;