import { React } from "react";
import Footer from "../../Components/Footer/footer";
import "./donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <h2 className="d-title">
        <strong>Donation</strong>
      </h2>
      <div className="donation-info">
        <p className="d-text">
          This club is for Holistic development of youth. College education
          usually harps on the first two aspects, while association with an
          organization such as C-Cube helps in fulfilling the remaining one so
          show your support for the club by donating ! Your small contribution
          would count to a huge contribution and growth of the organisation and
          learning of individuals. This will also benefit the community which we
          serve and together we can bring smile on a lot of people's faces.
        </p>
      </div>
      <div className="img-container">
        <img
          src={require("../../Components/Images/donate.png")}
          alt="Image1"
          className="donate-img"
        ></img>
      </div>

      <div className="d-info">
        <h2>How to Donate?</h2>
        <p className="d-text">
          If you want to donate, take note of the following bank details in order to pay your donation.
          <br />
          <br />
          Make sure you pay the amount to the following account as it is the only official account for the club
          <br />
          <br />
          Once the transaction is done, send a mail to the club secretary with the transaction id and the amount you have donated. This is to ensure that the transaction is successful.
        </p>
      </div>
      <div className="box-d">
        <h3 className="details-title">Donation Details</h3>
        <div className="filled-d"></div>
      </div>
      {/* Preformatted text providing bank details of the club */}
      <pre className="bank-info">
        NAME: VAMSHIVAT VOICE
        <br /><br />
        ACCOUNT NUMBER: 739605500093
        <br /><br />
        IFSC CODE: ICIC0007396
        <br /><br />
        UPI ID: msvamshivatvoice.eazypay@icici
      </pre>

      <Footer />
    </div>
  );
};

export default Donate;
