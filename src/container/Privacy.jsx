import React from 'react';
import FileViewer from 'react-file-viewer';

const file = './AstraNova Privacy Policy.docx'
const type = 'docx'


const onError =(e) => console.log(e);


const Privacy = () => {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        onError={e => onError(e)}
      />
    )
}

export default Privacy;