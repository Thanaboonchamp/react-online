import React from 'react'

const Sidebar = () =>{
    //let fullname = 'John'

    const [fullname,setFullname] = React.useState('John')

    const [isShow,setIsShow] = React.useState(true)

    const changName = () =>{
        //fullname ="Marry"
        setFullname("Marry")
        setIsShow(false)
    }
    React.useEffect(() => {

        console.log("sidebar useEffect")
        //ทำงานทุกครั้งที่มีการอัพเดตui และเรนเดอร์ component
    }
    )
    React.useEffect(() => {

        console.log("sidebar useEffect one time only")
        //ทำงานแค่ครั้งแรกพอ
    },[]
    )
    React.useEffect(() => {

        console.log("sidebar useEffect fullname")
        //ทำงานครั้งแรกที่เรนเดอร์fullname ทำงานอีกตอนfullnameเปลี่ยนแปลง
    },[fullname]
    )

    return (
        <>
            <p>สวัสดี  {fullname}</p> 
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changName}>Change name</button>
        </>

    )
}
export default Sidebar