import { useEffect } from "react"

export default function Homepage() {


    useEffect(() => {
        document.title = 'Homepage'
      })


    return (
        <div className="container">
            <h1 className="title">Homepage</h1>
        </div>
    )
}