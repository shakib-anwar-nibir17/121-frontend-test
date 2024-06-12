import { BarLoader } from 'react-spinners';

export const Spinner = () => {
  return (
    <div className=''>
      <BarLoader
        color="#96d3e9"
        // height={5}
        loading
        speedMultiplier={0.5}
        width='auto'
      />
    </div>
  )
}