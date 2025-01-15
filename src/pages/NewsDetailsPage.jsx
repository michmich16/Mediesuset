import { useParams } from "react-router-dom"
import { useGet } from "../hooks/useGet"

export const NewsDetailsPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useGet(`https://api.mediehuset.net/mediesuset/news/${id}`)
    return (
        <div>
            {data && (
                <section>
                    <h1>{data.item.title}</h1>
                    <img src={data.item.image} alt={data.item.title} />
                    <p>{data.item.content}</p>
                </section>
            )}
        </div>
    )
}