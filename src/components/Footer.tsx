
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: var(--color-white);
  padding: 4rem 2rem 2rem;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-brand);
    margin-bottom: 0.8rem;
  }

  a, p {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--color-grey);
    transition: all 0.3s ease;

    &:hover {
      color:var(--color-brand) ;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-grey-light);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: var(--color-grey);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <h4>Navigate</h4>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Our team</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow</h4>
          <a href="#">Instagram</a>
          <a href="#">Linkedin</a>
          <a href="#">YouTube</a>
          <a href="#">X</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact</h4>
          <p>+ (91) 9999999999</p>
          <p>info@example.com</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Visit</h4>
          <p>9999 Street Rd.</p>
          <p>Milky way, Space 98380</p>
        </FooterColumn>
      </FooterWrapper>

      <FooterBottom>
        <span>© Pixalytica. All Rights Reserved. Licensing</span>
        <span>Designed by Aswindevpk.</span>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
