import Post from './Post'

export default function Posts(){
    const arr = new Array(10)
    return (
        <div>
            {
                arr.map(() => {<Post/>})
            }
             <p>hello</p>
        </div>
       
    )
}