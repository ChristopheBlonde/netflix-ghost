import netflixLinks from "../movies_vze0mn.json";

const Categories = () => {
  return (
    <div className="category">
      {netflixLinks.map((item, index) => (
        <div key={index}>
          <span>{item.category} </span>
          <div className="images">
            {item.images.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;
