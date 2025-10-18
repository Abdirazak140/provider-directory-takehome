import { useEffect, useState } from "react"
import { fetchProviders } from "../api";
import { ProviderCard } from "../components/provider_cards";
import "./provider_directory.css"
import { FaMapMarker } from "react-icons/fa"

export const ProviderDirectory = () => {
    const [providers, setProviders] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const order = ["tomorrow", "next-week"]

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetchProviders()
                const sorted_response = response.sort((a, b) => order.indexOf(a.availabilty) - order.indexOf(b.availabilty))

                setProviders(sorted_response)
                console.log(response)
            }
            catch (error) {
                setError("Failed to load available providers")
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [])

    if (loading) {
        return (
            <div className="provider-directory">
                <div className="provider-container-1">
                    <div>
                        <h1 className="provider-container-1-h1">Browse our providers</h1>
                        <h2 className="provider-container-1-h2">Mental Wellness</h2>
                        <div className="provider-icon">
                            <FaMapMarker className="provider-icon-marker" />
                            <span className="provider-icon-text">ON</span>
                        </div>
                    </div>
                </div>

                <div className="provider-container-2">
                    Loading...
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="provider-profile">
                <div className="provider-directory">
                    <div className="provider-container-1">
                        <div>
                            <h1 className="provider-container-1-h1">Browse our providers</h1>
                            <h2 className="provider-container-1-h2">Mental Wellness</h2>
                            <div className="provider-icon">
                                <FaMapMarker className="provider-icon-marker" />
                                <span className="provider-icon-text">ON</span>
                            </div>
                        </div>
                    </div>

                    <div className="provider-container-2">
                        {error}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="provider-directory">
            <div className="provider-container-1">
                <div>
                    <h1 className="provider-container-1-h1">Browse our providers</h1>
                    <h2 className="provider-container-1-h2">Mental Wellness</h2>
                    <div className="provider-icon">
                        <FaMapMarker className="provider-icon-marker" />
                        <span className="provider-icon-text">ON</span>
                    </div>
                </div>
            </div>

            <div className="provider-container-2">
                <h2 className="provider-container-2-h2"><span className="provider-container-2-h2-number">{providers.length}</span> providers in Ontario</h2>

                {providers && providers.map((item, idx) => (
                    <ProviderCard id={item.id} name={item.name} title={item.title}
                        avatarUrl={item.avatarUrl} bio={item.bio} availabilty={item.availabilty} />
                ))}
            </div>
        </div>
    )
}