import { profilePlaceholder } from "./constants"
import "./provider_cards.css"
import { Link } from "react-router-dom"

const availabiltyMapper = {
    "tomorrow": "tomorrow",
    "next-week": "in the next week"
}

export const ProviderCard = ({ id, name, title, avatarUrl, bio, availabilty }) => {

    return (
        <Link to={`provider/${id}`} className="profile" key={id}>
            <div className="profile-heading"> 
                <img
                    src={avatarUrl ? avatarUrl : profilePlaceholder}
                    alt={`${name}'s avatar`}
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <span className="profile-name">{name}, {title}</span>
                </div>
            </div>

            <div>
                <p className="profile-bio">{bio}</p>
                <span className="profile-availability">Available {availabiltyMapper[availabilty]}</span>
            </div>
        </Link>
    )
}