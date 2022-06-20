
const FieldContainer = ({ label, children, width = "w-1/2" }) => (
  <div className={`form-control w-full md:${width}`} >
    <label className="label">
      <span className='label-text font-semibold'>{label}</span>
    </label>
    {children}
  </div>
)


export default FieldContainer