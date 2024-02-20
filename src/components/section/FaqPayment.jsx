export default function FaqPayment() {
  return (
    <>
      <div className="ui-content">
        <h4 className="title">Payments</h4>
        <div className="accordion-style1 faq-page mb90">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item active">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What methods of payments are supported?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Can I cancel at anytime?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I get a receipt for my purchase?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Which license do I need?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How do I get access to a theme I purchased?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
