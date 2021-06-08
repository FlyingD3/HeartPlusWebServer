import React, { Component } from "react";
import { Link } from "react-router-dom";

import Heart from "./img/heart.svg";
import "./Display.css";
class Display extends Component {
  render() {
    return (
      <>
        <div className="dis-cnt">
          <div className="card-description">
              <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
              sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
               qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi 
               tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
               quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
               consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil 
               molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? 
               </span>
               <br/>
               <br/>
               <br/>
               <span>
               At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum 
               deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non 
               provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis 
                voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
                aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
                consequatur aut perferendis doloribus asperiores repellat.
              </span>
          </div>
          <div class="wrapper">
            <div class="overviewInfo">
              <div class="actions"></div>
              <div class="productinfo">
                <div class="grouptext">
                  <h3>Project</h3>
                  <p>HeartPlus</p>
                </div>
                <div class="grouptext">
                  <h3>RELEASE</h3>
                  <p>Soon</p>
                </div>
                <div class="grouptext">
                  <h3>Autor</h3>
                  <p>Irib CNR</p>
                </div>

                <div class="productImage">
                  <img src={Heart} alt="product: ps5 controller image" />
                </div>
              </div>
            </div>

            <div class="productSpecifications">
              <h1> HealtPlus </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullamco
                laboriosam, nisi ut aliquid ex ea commodi consequatur...{" "}
              </p>

              <div class="productFeatures">
                <div class="feature">
                  <div class="featureIcon"></div>
                  <div class="featureText">
                    <p>
                      {" "}
                      <strong>User-Friendly</strong>
                    </p>
                    <p>Design</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="featureIcon"></div>
                  <div class="featureText">
                    <p>
                      {" "}
                      <strong>Monitoring</strong>
                    </p>
                    <p>health</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="featureIcon"></div>
                  <div class="featureText">
                    <p>
                      {" "}
                      <strong>Easy</strong>
                    </p>
                    <p>to use</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="featureIcon"></div>
                  <div class="featureText">
                    <p>
                      {" "}
                      <strong>Always On</strong>
                    </p>
                    <p>h24</p>
                  </div>
                </div>
              </div>

              <div class="checkoutButton">
                <button class="preorder">
                  <p>Sign up for more information</p>
                  <div class="buttonaction">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Display;
