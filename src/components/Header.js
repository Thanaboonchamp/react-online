import React from 'react'

const Header = () => {

    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    const showmessage = () => {
        return companyName + ".com"
    }


    return (
        <div>
             {/* <h1>Hello {companyName}</h1> */}
             <h1>Hello {showmessage}</h1>
             {/* {companyAddress} */}
             {/* {number * 2} */}
             {/* {showmessage() } */}

             <hr/>
        </div>
    )
}

export default Header
