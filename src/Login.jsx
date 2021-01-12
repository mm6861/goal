import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div
          className="col-sm-4 col-sm-offset-4"
          style={{ paddingTop: "100px" }}
        >
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3>
                <b>JNK_목표관리</b>
              </h3>
            </div>
            <div className="panel-body">
              <input
                type="text"
                className="form-control"
                placeholder="ID"
              ></input>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="비밀번호"
              ></input>
              <br />
              <button className="btn btn-lg btn-success btn-block">
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
