import React from 'react';

const Footer = () => {
  return (
      <>
<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <h5><i className="fa fa-road"></i> Grid</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="#a">Product</a></li>
                            <li><a href="#b">Benefits</a></li>
                            <li><a href="#c">Partners</a></li>
                            <li><a href="#d">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="#e">Documentation</a></li>
                            <li><a href="#f">Support</a></li>
                            <li><a href="#g">Legal Terms</a></li>
                            <li><a href="#h">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="#i" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="nav-item"><a href="#j" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                    <li className="nav-item"><a href="#k" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="#l" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br />
            </div>
            <div className="col-md-2">
                <h5 className="text-md-right">Contact Us</h5>
                <hr />
            </div>
            <div className='col-md-5 smallscreen_footer'>
                <form>
                    <fieldset className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </fieldset>
                    <fieldset className="form-group">
                        <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>


      </>
  )
};

export default Footer;
