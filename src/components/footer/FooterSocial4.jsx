import Link from "next/link";

export default function FooterSocial4() {
  return (
    <>
      <div className="social-widget">
        <h5 className="mb20">Follow Us</h5>
        <div className="social-style1 light-style">
          <a>
            <i className="fab fa-facebook-f list-inline-item" />
          </a>
          <a>
            <i className="fab fa-twitter list-inline-item" />
          </a>
          <a>
            <i className="fab fa-instagram list-inline-item" />
          </a>
          <a>
            <i className="fab fa-linkedin-in list-inline-item" />
          </a>
        </div>
      </div>
    </>
  );
}
