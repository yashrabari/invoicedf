import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';
import Print from '../components/print/Print'






export default function Print() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <div>
            <button onClick={handlePrint}>Print this out!</button>
            <Print ref={componentRef} />
        </div>
    )
}
