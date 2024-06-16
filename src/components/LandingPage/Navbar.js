import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
        <Navbar bg="dark" variant="dark" >
        <Container className="d-flex justify-content-start align-items-start">
          <Navbar.Brand className="d-flex align-items-start">
            <img
              src="./images.png"
              alt="Logo"
              width={40}
              height={40}
              style={{
                borderRadius: 15,
                cursor: "none",
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.4)',
                border: '1px solid green'
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand style={{ display: "inline-block", cursor: "none" }}>
            <i
              style={{
                backgroundImage: `url("./money-cash.gif"), linear-gradient(to right, #fff, #ff7e5f, #feb47b)`,
                backgroundSize: "cover, 100%",
                backgroundPosition: "center, center",
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                display: "inline-block",
                fontSize: "2rem",
                WebkitTextFillColor: "transparent",
              }}
            >
              X-Tracker
            </i>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <HeroSection /> */}
    </>
  );
}

export default NavBar;
