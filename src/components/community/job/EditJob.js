import React from 'react';

const EditJob = ({job, setJobStatus}) => {

    return(
        <>
            <h1>Edit Job</h1>
            <h3 className="link-job" onClick = {()=>setJobStatus('show')}>
            Back
        </h3>
        </>
    )
}

export default EditJob;