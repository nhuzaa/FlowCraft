
import { Handle, Position } from 'reactflow';
import React, { useState } from 'react';

const NodeWrapper = ({ children, data }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className="flex flex-col items-center bg-white p-2 rounded shadow border-2 border-gray-500"
                onClick={() => setShowModal(true)}
            >
                <Handle type="target" position={Position.Top} className="w-6 !bg-teal-500"   style={{ border: 'none', borderRadius: 0 }} />
                    {children}
                    <div className="text-xxs text-neutral-600">{data.label}</div>
                <Handle type="source" position={Position.Bottom} className="w-6 !bg-teal-500"   style={{ border: 'none', borderRadius: 0 }} />
            </div>
        </>
    )
}

export default NodeWrapper;