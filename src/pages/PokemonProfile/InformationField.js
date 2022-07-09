const InformationField = ({ label, value }) => {
  return (
    <div className='d-flex flex-column '>
      <div className='text-uppercase fs-6'>{label}</div>
      <p>{value}</p>
    </div>
  )
}

export default InformationField
