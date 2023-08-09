import React from "react";

function Header() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item" _msthidden={1}>
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block" _msthidden={1}>
              <form className="form-inline" _msthidden={1}>
                <div className="input-group input-group-sm" _msthidden={1}>
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    _msthidden="A"
                    _mstplaceholder={74607}
                    _msthash={3}
                    _mstaria-label={74607}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments" />
              <span
                className="badge badge-danger navbar-badge"
                _msttexthash={4641}
                _msthash={4}
              >
                3
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
              _msthidden={13}
            >
              <a href="#" className="dropdown-item" _msthidden={4}>
                {/* Message Start */}
                <div className="media" _msthidden={4}>
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                    _msthidden="A"
                    _mstalt={154167}
                    _msthash={5}
                  />
                  <div className="media-body" _msthidden={3}>
                    <h3 className="dropdown-item-title" _msthidden={1}>
                      <font
                        _mstmutation={1}
                        _msttexthash={148473}
                        _msthidden={1}
                        _msthash={6}
                      >
                        Brad Diesel
                      </font>
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p
                      className="text-sm"
                      _msttexthash={509925}
                      _msthidden={1}
                      _msthash={7}
                    >
                      Call me whenever you can...
                    </p>
                    <p className="text-sm text-muted" _msthidden={1}>
                      <i className="far fa-clock mr-1" />
                      <font
                        _mstmutation={1}
                        _msttexthash={126035}
                        _msthidden={1}
                        _msthash={8}
                      >
                        {" "}
                        4 Hours Ago
                      </font>
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item" _msthidden={4}>
                {/* Message Start */}
                <div className="media" _msthidden={4}>
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                    _msthidden="A"
                    _mstalt={154167}
                    _msthash={9}
                  />
                  <div className="media-body" _msthidden={3}>
                    <h3 className="dropdown-item-title" _msthidden={1}>
                      <font
                        _mstmutation={1}
                        _msttexthash={150696}
                        _msthidden={1}
                        _msthash={10}
                      >
                        John Pierce
                      </font>
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p
                      className="text-sm"
                      _msttexthash={390208}
                      _msthidden={1}
                      _msthash={11}
                    >
                      I got your message bro
                    </p>
                    <p className="text-sm text-muted" _msthidden={1}>
                      <i className="far fa-clock mr-1" />
                      <font
                        _mstmutation={1}
                        _msttexthash={126035}
                        _msthidden={1}
                        _msthash={12}
                      >
                        {" "}
                        4 Hours Ago
                      </font>
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item" _msthidden={4}>
                {/* Message Start */}
                <div className="media" _msthidden={4}>
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                    _msthidden="A"
                    _mstalt={154167}
                    _msthash={13}
                  />
                  <div className="media-body" _msthidden={3}>
                    <h3 className="dropdown-item-title" _msthidden={1}>
                      <font
                        _mstmutation={1}
                        _msttexthash={233610}
                        _msthidden={1}
                        _msthash={14}
                      >
                        Nora Silvester
                      </font>
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p
                      className="text-sm"
                      _msttexthash={383435}
                      _msthidden={1}
                      _msthash={15}
                    >
                      The subject goes here
                    </p>
                    <p className="text-sm text-muted" _msthidden={1}>
                      <i className="far fa-clock mr-1" />
                      <font
                        _mstmutation={1}
                        _msttexthash={126035}
                        _msthidden={1}
                        _msthash={16}
                      >
                        {" "}
                        4 Hours Ago
                      </font>
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a
                href="#"
                className="dropdown-item dropdown-footer"
                _msttexthash={248742}
                _msthidden={1}
                _msthash={17}
              >
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span
                className="badge badge-warning navbar-badge"
                _msttexthash={9971}
                _msthash={18}
              >
                15
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
              _msthidden={8}
            >
              <span
                className="dropdown-item dropdown-header"
                _msttexthash={279942}
                _msthidden={1}
                _msthash={19}
              >
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item" _msthidden={2}>
                <i className="fas fa-envelope mr-2" />
                <font
                  _mstmutation={1}
                  _msttexthash={204737}
                  _msthidden={1}
                  _msthash={20}
                >
                  {" "}
                  4 new messages
                </font>
                <span
                  className="float-right text-muted text-sm"
                  _msttexthash={59007}
                  _msthidden={1}
                  _msthash={21}
                >
                  3 mins
                </span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item" _msthidden={2}>
                <i className="fas fa-users mr-2" />
                <font
                  _mstmutation={1}
                  _msttexthash={294593}
                  _msthidden={1}
                  _msthash={22}
                >
                  {" "}
                  8 friend requests
                </font>
                <span
                  className="float-right text-muted text-sm"
                  _msttexthash={90207}
                  _msthidden={1}
                  _msthash={23}
                >
                  12 hours
                </span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item" _msthidden={2}>
                <i className="fas fa-file mr-2" />
                <font
                  _mstmutation={1}
                  _msttexthash={186329}
                  _msthidden={1}
                  _msthash={24}
                >
                  {" "}
                  3 new reports
                </font>
                <span
                  className="float-right text-muted text-sm"
                  _msttexthash={58474}
                  _msthidden={1}
                  _msthash={25}
                >
                  2 days
                </span>
              </a>
              <div className="dropdown-divider" />
              <a
                href="#"
                className="dropdown-item dropdown-footer"
                _msttexthash={411827}
                _msthidden={1}
                _msthash={26}
              >
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
