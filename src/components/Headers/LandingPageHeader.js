/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

// function LandingPageHeader() {
//   let pageHeader = React.createRef();

//   React.useEffect(() => {
//     if (window.innerWidth < 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageYOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
//         }}
//         className="page-header"
//         data-parallax={true}
//         ref={pageHeader}
//       >
//         <div className="filter" />
//         <Container>
//           <div className="motto text-center">
//             <h1>Example page</h1>
//             <h3>Start designing your landing page here.</h3>
//             <br />
//             <Button
//               href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//               className="btn-round mr-1"
//               color="neutral"
//               target="_blank"
//               outline
//             >
//               <i className="fa fa-play" />
//               Watch video
//             </Button>
//             <Button className="btn-round" color="neutral" type="button" outline>
//               Download
//             </Button>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default LandingPageHeader;
function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/23cc63f6f2b3235fae8944948886f089.gif") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Midas Sofwares</h1>
              <div className="fog-low">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
              <div className="fog-low right">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Especialistas nas melhores tecnologias disponibizadas no mercado
            </h2>
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        /> */}
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          {/* <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a> */}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;