

function Tweet(props){
    let myName = "Omar"



    console.log(props)

    function sayHello(){
        alert("Hello")
    }


    return(
        <div onClick={sayHello}>
            <h1>
            {myName}

            </h1>

<h2>{props.message}</h2>
        </div>

       
    )
}


export default Tweet