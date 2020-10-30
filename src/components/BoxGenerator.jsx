import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [colorList, setcolorList] = useState(["red", "blue"]);

    const newColor = (e) => {
        e.preventDefault();
        var newList = [...colorList, e.target.color.value];
        e.target.color.value = "";
        setcolorList(newList);
    }
    return (
        <>
        <form action="" onSubmit={newColor}>
            <p>Color: <input type="text" id="color"/>
            <input type="submit" /></p>
        </form>
        {
            colorList.map( (item, i) =>
                <div class="box" style={{backgroundColor: item}}></div>
            )
        }
        </>
    );
}

export default BoxGenerator;