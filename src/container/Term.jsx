import React from 'react';
import FileViewer from 'react-file-viewer';

const file = './AstraNova Terms of Use.docx'
const type = 'docx'


const onError =(e) => console.log(e);


const Terms = () => {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        onError={e => onError(e)}
      />
    )
}

export default Terms;