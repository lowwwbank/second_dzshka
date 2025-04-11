function Footer(){
    return (
        <footer className="page-footer green lighten-2">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} React Movies
          <a className="grey-text text-lighten-4 right" target="_blank" href="https://github.com/lowwwbank/second_dzshka">Repo</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;