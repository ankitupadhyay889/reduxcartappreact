import React from 'react';

const Datalist = () => {

    const user = [
        {name:"ankit" , age:"21"},
        {name:"ankit" , age:"21"},
        {name:"ankit" , age:"21"},
        {name:"ankit" , age:"21"},
        {name:"ankit" , age:"21"},
    ]

    return (
        <div>
            <h1> Listing Hai Reeeeeeee </h1>

            {
                user.map((item , i) =>
                <div key={i}>
                    <span> {item.name} </span>
                    <span> {item.age} </span>
                </div>
                )
            }

        </div>
    );
};

export default Datalist;