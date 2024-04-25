import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div to='#connect'>
            <button className="Project-view-button" >{link && <a href={link} target="_blank" rel="noopener noreferrer">View</a>}</button>
          </div>

        </div>
      </div>
    </Col>
  )
}
