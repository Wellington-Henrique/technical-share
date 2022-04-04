import './PostCard.css'

export function PostCard({user})  {
    return (
        <div className="postcard">
            <img className='img-profile' src="" alt="" />
            <h1>{user.name}</h1>
            <span>{user.skills}</span>
        </div> 
    )
}