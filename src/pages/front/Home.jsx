import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <div className="container-lg position-relative">
        <img
          src="https://cdn-next.cybassets.com/s/files/17956/ckeditor/pictures/content_649eff3b-dad3-4687-9e3f-2bf14416c6b5.jpg"
          alt="index"
          className="w-100"
          style={{
            width: "80px",
            height: "1350px",
            objectFit: "cover",
          }}
        />
        <Link
          to="/productList"
          className="btn btn-primary-100 text-decoration-none border border-3 border-primary fs-2 p-4 rounded-pill position-absolute bottom-0 end-0 translate-middle"
        >
          立即前往選購
          <i className="bi bi-caret-right-fill"></i>
        </Link>
      </div>
    </>
  )
}

export default Home