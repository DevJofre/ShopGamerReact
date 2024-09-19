import { Link } from "react-router-dom";
import "./MainCategory.scss";

const MainCategory = () => {
  const categories = [
    { id: 1, imageUrl: "/path/to/image1.jpg", link: "/categoria1" },
    { id: 2, imageUrl: "/path/to/image2.jpg", link: "/categoria2" },
    { id: 3, imageUrl: "/path/to/image3.jpg", link: "/categoria3" },
    { id: 4, imageUrl: "/path/to/image4.jpg", link: "/categoria4" },
    { id: 5, imageUrl: "/path/to/image5.jpg", link: "/categoria5" },
    { id: 6, imageUrl: "/path/to/image6.jpg", link: "/categoria6" },
    { id: 7, imageUrl: "/path/to/image7.jpg", link: "/categoria77" },
    { id: 8, imageUrl: "/path/to/image8.jpg", link: "/categoria88" },
  ];

  return (
    <main className="main-category">
      <div className="title-main">Categoria Populares</div>
      <div className="category-container">
        {categories.map((category) => (
          <Link to={category.link} key={category.id} className="category-box">
            <img src={category.imageUrl} alt={''} />
          </Link>
        ))}
      </div>
      <Link to="/todas-categorias" className="view-all">
        VER TODAS CATEGORIAS
      </Link>
    </main>
  );
};

export default MainCategory;
