export default function Footer() {
  return (
    <footer style={{background: "#000000", paddingTop:"30px", paddingBottom:"30px"}}>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <p className="text-light" style={{margin:"0"}}>
              Copyright © {new Date().getFullYear()} SynsoftGlobal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}