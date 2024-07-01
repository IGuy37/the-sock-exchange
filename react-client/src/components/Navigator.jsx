import React, {useEffect} from 'react';

export default function Navigator({page, setPage}){
    let newPage = page;
    useEffect(() => {
        setPage(newPage)
    }, [newPage])
    

    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <button className='btn btn-primary' disabled={page <= 1} onClick={() => console.log(--newPage)}>Back</button>
            <button className='btn btn-primary' onClick={() => console.log(++newPage)}>Next</button>
        </div>
    );
}