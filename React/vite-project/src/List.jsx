
function List(props){
    // const fruits = [{id: 1, name: "Apple", calories: 95}, 
    //                 {id: 2, name: "Orange", calories: 45}, 
    //                 {id: 3, name: "Banana", calories: 105}, 
    //                 {id: 4, name: "Pinnaple", calories: 37},
    //                 {id: 5, name: "Coconut", calories: 159}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); 
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories);
    // fruits.sort((a, b) => b.calories - a.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)
    const category = props.category;
    const itemList = props.items;


    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(
            <>
                <h2>{category}</h2>
                <ul>{listItems}</ul>
            </>
    )
}

export default List