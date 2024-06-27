import Promotion from "./Promotion"

export default function Featured({promo_data}){
    return(
        <>
            <h5>Featured</h5>
            <div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>
                {
                    promo_data.map((promo) => (
                    <Promotion key={promo.id} data={promo} />
                    ))
                }
            </div>
        </>
    );
}