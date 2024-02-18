// import "./DragDrop.css";


// import React from 'react';
// import { FileUpload } from 'primereact/fileupload';

// export default function DragDrop() {
        
//     return (
//         <div className="card Upload">
//             <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
//         </div>
//     )
// }
import React, { useRef, useEffect, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import "./DragDrop.css";

export default function DragDrop() {
    const toast = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="card">
            {windowWidth <= 900 ? (
                <div className="flex justify-content-center">
                    <Toast ref={toast}></Toast>
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                </div>
            ) : (
                <div className="Upload">
                    <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                </div>
            )}
        </div>
    );
}
     