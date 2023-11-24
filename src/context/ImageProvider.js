import { useEffect, useState } from "react"
import imageContext from "./imageContext"
const BASE_URL = "https://api.unsplash.com/"
const API_KEY = "XubWYxVf3Ln3OmTJocVOKYkwxCcAcFxl1bDiBEzpgvc"


const ImageProvider = (props) => {
    const perPage = 28
    const [images, setImages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        fetch(`${BASE_URL}/photos/?client_id=${API_KEY}&per_page=${perPage}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => setImages(data))
    }, [])
    const searchImages = (searchTerm) => {
        setPageNumber(1)
        fetch(`${BASE_URL}/search/photos/?client_id=${API_KEY}&per_page=${perPage}&page=${pageNumber}&query=${searchTerm}`)
        .then(data=>data.json())
        .then(data=>{
            setImages(data.results)
            console.log("hi")
            console.log(data)
        })
    }
    return <imageContext.Provider value={{ images, searchImages }} >
        {props.children}
    </imageContext.Provider>
}

export default ImageProvider