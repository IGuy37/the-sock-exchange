import Sock from "./Sock"

export default function Home({data, handleDelete}) {
    return(
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {
                data.map((sock) => (
                  <Sock key={sock._id} data={sock} handleDelete={handleDelete}/>
                ))
              }
        </div>
    );
}