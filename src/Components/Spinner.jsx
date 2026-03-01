import React from 'react'
import { LoaderCircle } from 'lucide-react';

const Spinner = () => {
  return (
    <div className='fixed top-1/2 left-1/2'>
          <LoaderCircle color='#3b82f6' strokeWidth={2}  size={64} className='animate-spin'/>
    </div>
  );
};

export default Spinner;
