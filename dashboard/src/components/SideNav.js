const SideNav = () => {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">DourBia </span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                ADMIN
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline"></div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li className="nav-item">
                <a href="http://localhost:3000/user" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>profiles</p>
                </a>
                <a
                  href="http://localhost:3000/contribution"
                  className="nav-link"
                >
                  <i className="nav-icon fas fa-edit" />
                  <p>contribution</p>
                </a>
                <a href="http://localhost:3000/monument" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>monuments</p>
                </a>
                <a href="http://localhost:3000/circuit" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>citcuits</p>
                </a>
                <a href="http://localhost:3000/feedback" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>feedback</p>
                </a>

                <a href="http://localhost:3000/partenaire" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Partenaire</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
