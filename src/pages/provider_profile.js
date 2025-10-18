import "./provider_profile.css"
import { fetchProvider } from "../api"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaMapLocation } from "react-icons/fa6"
import { BsFillMortarboardFill, BsGlobe } from "react-icons/bs"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export const ProviderProfile = () => {
    const [provider, setProvider] = useState({})
    const { id } = useParams();
    const profilePlaceholder = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    const [isCollapsed, setIsCollapsed] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetchProvider(id)

            setProvider(response)
            console.log(response)
        }

        fetchData();
    }, [])

    return (
        <div className="provider-profile">
            <div className="provider-profile-nav">
                <div>
                    <Link to="/" className="provider-link-title">Mental Wellness</Link>
                    <span className="provider-link-sperator">&gt;</span>
                    <span className="provider-link-name">{provider.name}, {provider.title}</span>
                </div>
            </div>

            <div className="provider-profile-information">

                <div className="provider-profile-container-1">
                    <img
                        src={provider.avatarUrl ? provider.avatarUrl : profilePlaceholder}
                        alt={`${provider.name}'s avatar`}
                        className="provider-avatar"
                    >
                    </img>
                </div>

                <div className="provider-profile-container-2">

                    <div className="provider-heading">
                        <h1 className="provider-name">{provider.name}, {provider.title}</h1>
                    </div>

                    <p className={isCollapsed ? "provider-bio-collapsed" : "provider-bio"}>{provider.bio}</p>

                    {isCollapsed ?
                        (<span onClick={() => setIsCollapsed((prev) => !prev)} className="collapsed-button"> Read more <FaChevronDown /></span>
                        ) : (<span onClick={() => setIsCollapsed((prev) => !prev)} className="collapsed-button"> Read less <FaChevronUp /></span>)
                    }

                    <div className="provider-border"></div>

                    <div className="provider-info">

                        <div className="provider-item">
                            <FaMapLocation className="item-icon" />
                            <div>
                                <span className="item-title">Location</span>
                                <p className="item-value">{provider.location}</p>
                            </div>
                        </div>


                        <div className="provider-item">
                            <BsFillMortarboardFill className="item-icon" />
                            <div>
                                <span className="item-title">Education</span>
                                <p className="item-value">{provider.education}</p>
                            </div>
                        </div>


                        <div className="provider-item">
                            <BsGlobe className="item-icon" />
                            <div>
                                <span className="item-title">Language</span>
                                <p className="item-value">
                                    {provider.languages && provider.languages.join(', ')}
                                </p>
                            </div>
                        </div>

                    </div>

                    <button className="provider-button">Book with us</button>
                </div>
            </div>
        </div>
    )
}