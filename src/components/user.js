import './user.css'

export default function User({name, image}){
    return(
        <div className="user">
            <img src={image} alt=""/>
            <div className="user_name">
                <b>{name}</b>
            </div>
        </div>
    )
}