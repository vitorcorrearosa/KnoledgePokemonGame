import React from "react";

const LoginForm = () => {
  return (
    <form id="formLogin">
      <div className="form-group">
        <label htmlFor="exampleInputUser">Usuário</label>
        <input
          type="text"
          id="exampleInputUser"
          aria-describedby="emailHelp"
          placeholder="Usuário"
          className="loginInput form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Senha</label>
        <input
          type="password"
          className="form-control loginInput"
          id="exampleInputPassword1"
          placeholder="Senha"
        />
      </div>
      <button id="loginBtn" type="submit" className="btn btn-primary btnConfig">
        Entrar
      </button>
    </form>
  );
};

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
      <a id="title" className="navbar-brand" href="#">
        <span id="k">K</span>
        <span id="nowledge">nowledge</span>
        <span id="p">P</span>
        <span id="okemon">okemon</span>
        <span id="g">G</span>
        <span id="ame">ame</span>
      </a>

      <button
        className="navbar-toggler bg-dark navbar-dark"
        id="burgerMenu"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(Página atual)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Destaques
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Preços
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Link dropdown
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Ação
              </a>
              <a className="dropdown-item" href="#">
                Outra ação
              </a>
              <a className="dropdown-item" href="#">
                Algo mais aqui
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { LoginForm, Navbar };
