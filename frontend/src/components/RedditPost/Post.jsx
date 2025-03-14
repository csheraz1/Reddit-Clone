
import logo from "../../assets/react.svg"

export default function Post(ImageURL) {
    
    return(
        <div className="Post">
            
            <img src={ImageURL.URL} className="Post-Image"/>
            <div className="Like-Comment-Share">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        </div>
    )
}