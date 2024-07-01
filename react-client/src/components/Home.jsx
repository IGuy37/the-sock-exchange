import Sock from "./Sock";
import Navigator from "./Navigator";

export default function Home({data, handleDelete, page, setPage}) {
    return(
      <>
        <Navigator page={page} setPage={setPage}/>
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {
                data.map((sock) => (
                  <Sock key={sock._id} data={sock} handleDelete={handleDelete}/>
                ))
              }
        </div>
      </>
    );
}