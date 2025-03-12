import Post from './Post'
import {images} from './sampleImages'

export default function Posts(){
    const arr = images
    return (
        <div className="Posts">
            {
                arr.map((ImageURL, i) => { 
                    return <Post key={i} URL={ImageURL}/>
               })
            }
            
        </div>
       
    )
}