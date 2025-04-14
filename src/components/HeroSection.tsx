import styled from "styled-components";
import Button from "../ui/Button";
import HeroRightColumn from "./HeroRightColumn";
import { Container } from "../ui/Container";

const StyledContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-grey-light);
`;

const StyledHero = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 8rem 2rem;
  gap: 8rem;

  @media (max-width: 990px) {
    padding: 4rem 2rem;
  } 

  @media (max-width: 760px) {
    padding: 2rem 1rem;
  } 
`;

const StyledMain = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  @media (max-width: 990px) {
    gap: 1rem;
  } 

  @media (max-width: 760px) {
    gap: 4rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  } 
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const StyledTag = styled.span`
  font-weight:400;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  display: inline-block;
  padding:0.2rem 0.8rem;
  color:var(--color-grey);
  border-radius:50px;
  background-color:var(--color-grey-light);
`;

const StyledHeading = styled.h1`
  font-weight:300;
  font-size: clamp(3rem, 25vw, 5.4rem);
  line-height: 6.5rem;
  color:var(--color-brand);
`;

const StyledCta = styled.span`
  display: flex;
  flex-wrap:wrap;
  gap: 1.6rem;
`;

const StyledHeroFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`;



export default function HeroSection() {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledMain>
          <StyledContent>
            <div>
              <StyledTag><span style={{ color: "var(--color-brand)" }}>250+</span> trusted partners</StyledTag>
            </div>
            <StyledHeading>Recruitment process <br></br>with <span style={{ fontWeight: "500" }}>smart solutions.</span></StyledHeading>
            <p>Pixalytica is your trusted partner in recruitment, offering personalized HR solutions that connect top talent with the right opportunities.</p>
            <StyledCta>
              <Button>Free Consultation</Button>
              <Button>Explore our Services</Button>
            </StyledCta>
          </StyledContent>
          <HeroRightColumn />
        </StyledMain>
        <StyledHeroFooter>
          <img src="./company1.svg" alt="Icon" height="30" />
          <img src="./company2.svg" alt="Icon" height="30" />
          <img src="./company3.svg" alt="Icon" height="30" />
          <img src="./company4.svg" alt="Icon" height="30" />
          <img src="./company5.svg" alt="Icon" height="30" />
          <img src="./company6.svg" alt="Icon" height="30" />
        </StyledHeroFooter>
      </StyledHero>
    </StyledContainer>
  );
}
