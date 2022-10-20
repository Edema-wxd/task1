import zuri from "../images/zuri.svg"
import i4g from "../images/I4G.svg"

function Footer() {
  return (
    <div className="footer">
      <img src={zuri} alt="" className="foot-img"/>
      <p className="foot-txt">HNG Internship 9 Frontend Task</p>
      <img src={ i4g } alt="" className="foot-img"/>
    </div>
  )
}

export default Footer
